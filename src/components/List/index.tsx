import { useActor } from '@xstate/react';
import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import { ItemMachine } from '../../machine/ItemMachine/Item.Machine.types';
import CardList from '../Card';
import ListContainer from './ListContainer';
import ListFooter from './ListFooter';
import ListHeader from './ListHeader';

interface ListProps {
  listRef: ItemMachine;
  onDelete?: () => void;
  onAdd?: () => void;
  id: number;
}

const List = ({ listRef, id }: ListProps) => {
  const [toggle, setToggle] = useToggle(false);
  const [state, send] = useActor(listRef);
  const { items: cards } = state.context;

  const addItem = (name?: string) => {
    setToggle();
    if (name) {
      send({ type: 'ADD', name });
    }
  };

  const changeName = (name: string) => {
    send({ type: 'CHANGE_NAME', name });
  };

  return (
    <ListContainer draggable id={id}>
      <ListHeader name={state.context.name} onChange={changeName} />
      <CardList cards={cards} hide={toggle} onAdd={addItem} />
      <ListFooter onAdd={setToggle} hide={toggle} />
    </ListContainer>
  );
};

export default List;
