import classNames from 'classnames';
import React, { useCallback } from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface NewCardProps {
  onAdd: () => void;
}

const NewCard = ({ onAdd }: NewCardProps) => {
  const handleClick = useCallback(() => {
    onAdd();
  }, [onAdd]);

  return (
    <a
      className={classNames(styles['open-card-composer'])}
      href='#'
      onClick={handleClick}>
      <span
        className={classNames(styles['icon-sm'], styles['icon-add'])}></span>
      <span>Add a card</span>
    </a>
  );
};

export default NewCard;
