import classNames from 'classnames';
import React from 'react';
import Card from './Card';
import styles from '../../../styles/BoardApp.module.css';
import { ItemMachine } from '../../machine/ItemMachine/Item.Machine.types';
import CardComposer from './CardComposer';

interface CardListProps {
  cards: ItemMachine[];
  hide: boolean;
  onAdd: (value?: string) => void;
}

const CardList = ({ cards, hide, onAdd }: CardListProps) => {
  return (
    <>
      <div
        className={classNames(
          styles['list-cards'],
          styles['fancy-scrollbar'],
          styles['u-clearfix'],
        )}>
        {cards.map((card, index) => (
          <Card cardRef={card} key={index} />
        ))}
        <CardComposer hide={hide} addItem={onAdd} />
      </div>
    </>
  );
};

export default CardList;
