import { createMachine } from 'xstate';

export const BoardMachine = createMachine({
  id: 'board',
  initial: 'empty',
  states: {
    empty: {},
  },
});
