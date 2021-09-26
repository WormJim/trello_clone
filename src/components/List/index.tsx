import { useActor } from '@xstate/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../styles/BoardApp.module.css';
import { ItemMachine } from '../../machine/ItemMachine/Item.Machine.types';
import ListContainer from './ListContainer';
import ListFooter from './ListFooter';
import ListHeader from './ListHeader';

interface ListProps {
  listRef: ItemMachine;
  onDelete?: () => void;
  onAdd?: () => void;
}

const List = ({ listRef }: ListProps) => {
  const [state, send] = useActor(listRef);

  const addItem = (name: string) => send({ type: 'ADD', name });

  const changeName = (name: string) => {
    send({ type: 'CHANGE_NAME', name });
  };

  return (
    <ListContainer>
      <ListHeader name={state.context.name} onChange={changeName} />
      <div
        className={classNames(styles['list-cards'], styles['fancy-scrollbar'])}
      />
      <ListFooter onAdd={addItem} />
    </ListContainer>
  );
};

export default List;
