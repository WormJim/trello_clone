import { useActor } from '@xstate/react';
import classNames from 'classnames';
import React, { useCallback, useEffect, useRef } from 'react';
import styles from '../../../styles/BoardApp.module.css';
import { useToggle } from '../../hooks/useToggle';
import { ItemMachine } from '../../machine/ItemMachine/Item.Machine.types';

interface CardProps {
  cardRef: ItemMachine;
}

const Card = ({ cardRef }: CardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hide, toggleHide] = useToggle(true);
  const [state, send] = useActor(cardRef);
  const { name } = state.context;

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    inputRef.current?.blur();
  }, []);

  const handleChange = useCallback(
    (event) => {
      send({ type: 'CHANGE_NAME', name: event.target.value });
    },
    [send],
  );

  const handleBlur = useCallback(() => {
    toggleHide();
    inputRef.current?.blur();
  }, [toggleHide]);

  useEffect(() => {
    if (!hide) inputRef.current?.focus();
  }, [hide, toggleHide]);

  return (
    <div
      className={classNames(
        styles['list-card-wrapper'],
        styles['mod-add'],
        hide && styles['is-idle'],
      )}>
      <form onSubmit={handleSubmit}>
        <a
          href='#'
          className={classNames(
            styles['list-card'],
            styles['active-card'],
            styles['open-add-list'],
            !hide && styles.hide,
          )}
          onClick={toggleHide}>
          <div className={styles['list-card-details']}>
            <span dir={'auto'} className={styles['list-card-title']}>
              {name}
            </span>
          </div>
        </a>
        <input
          ref={inputRef}
          type='text'
          name='field'
          autoComplete='off'
          spellCheck={false}
          maxLength={512}
          className={styles['list-name-input']}
          value={state.context.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </form>
    </div>
  );
};

export default Card;
