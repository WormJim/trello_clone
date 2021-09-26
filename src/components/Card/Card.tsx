import { useActor } from '@xstate/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../styles/BoardApp.module.css';
import { ItemMachine } from '../../machine/ItemMachine/Item.Machine.types';

interface CardProps {
  cardRef: ItemMachine;
}

const Card = ({ cardRef }: CardProps) => {
  const [state] = useActor(cardRef);
  const { name } = state.context;

  return (
    <>
      <a
        className={classNames(styles['list-card'], styles['ui-droppable'])}
        href='#'>
        <div className={styles['list-card-details']}>
          <span>{name}</span>
        </div>
      </a>
    </>
  );
};

export default Card;
