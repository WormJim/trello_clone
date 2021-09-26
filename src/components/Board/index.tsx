import { useMachine } from '@xstate/react';
import React from 'react';
import { BoardAppMachine } from '../../machine/BoardAppMachine/BoardApp.Machine';
import List from '../List';
import NewList from '../List/NewList';
import BoardCanvas from './BoardCanvas';
import BoardContainer from './BoardContainer';
import BoardHeader from './BoardHeader';

const Board = () => {
  const [state, send] = useMachine(BoardAppMachine);
  const { items: lists } = state.context;

  const addList = (name: string) => send({ type: 'ADD', name });

  return (
    <BoardContainer>
      <BoardHeader />
      <BoardCanvas>
        {lists.map((list, index) => (
          <List
            key={list.id}
            listRef={list}
            data-active={index === state.context.currentItem || undefined}
          />
        ))}
        <NewList
          onAdd={addList}
          onCancel={
            lists.length
              ? () => {
                  send('CANCEL');
                }
              : undefined
          }
          key={state.toStrings().join(' ')}
        />
      </BoardCanvas>
    </BoardContainer>
  );
};

export default Board;
