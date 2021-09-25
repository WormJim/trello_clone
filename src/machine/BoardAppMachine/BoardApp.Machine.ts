import { assign, createMachine, spawn } from 'xstate';
import { BoardMachine } from '../BoardMachine/Board.Machine';
import {
  BoardAppMachineContext as Context,
  BoardAppMahcineEvent as Event,
} from './BoardApp.Machine.types';

export const BoardAppMachine = createMachine<Context, Event>({
  initial: 'new',
  context: {
    boards: [],
    currentBoard: -1,
  },
  states: {
    new: {
      on: {
        CANCEL: {
          target: 'board',
          cond: (context) => context.boards.length > 0,
        },
      },
    },
    board: {
      on: {
        DELETE: {
          actions: assign((context, event) => {
            if (event.type === 'DELETE') {
              const boards = context.boards.filter((_, i) => i !== event.index);
              const currentBoard = context.boards.length - 1;

              return {
                boards,
                currentBoard,
              };
            }

            return {
              boards: context.boards,
              currentBoard: context.currentBoard,
            };
          }),
          target: 'deleting',
        },
      },
    },
    deleting: {
      always: [
        { target: 'new', cond: (context) => context.boards.length === 0 },
        { target: 'board' },
      ],
    },
  },
  on: {
    ADD: {
      target: '.board',
      actions: assign((context) => {
        const newBoard = spawn(BoardMachine);

        const boards = context.boards.concat(newBoard);

        return {
          boards,
          currentBoard: boards.length - 1,
        };
      }),
    },
    SWITCH: {
      actions: assign({
        currentBoard: (context, event) => {
          if (event.type === 'SWITCH') {
            return event.index;
          }
          return context.currentBoard;
        },
      }),
    },
  },
});
