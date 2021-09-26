import { useActor } from '@xstate/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../styles/BoardApp.module.css';
import { ItemMachine } from '../../machine/ItemMachine/Item.Machine.types';

interface ListProps {
  listRef: ItemMachine;
  onDelete?: () => void;
  onAdd?: () => void;
}

const List = ({ listRef }: ListProps) => {
  const [state, send] = useActor(listRef);

  return (
    <div className={classNames(styles.list, styles['list-wrapper'])}>
      <div className={styles['list-content']}>
        <div
          className={classNames(
            styles['list-header'],
            styles['u-clearfix'],
          )}></div>
        <div
          className={classNames(
            styles['list-cards'],
            styles['fancy-scrollbar'],
          )}>
          {state.context.name}
        </div>
        <div className={styles['card-composer-container']}>
          <a className={styles['open-card-composer']} href='#'>
            <span
              className={classNames(
                styles['icon-sm'],
                styles['icon-add'],
              )}></span>
            <span>Add a card</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default List;
