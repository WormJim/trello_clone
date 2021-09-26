import { useMachine } from '@xstate/react';
import classNames from 'classnames';
import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styles from '../../../styles/BoardApp.module.css';
import { NewListMachine } from '../../machine/NewListMachine/NewListMachine';

interface NewListProps {
  onAdd: (name: string) => void;
  onCancel?: () => void;
}

const NewList = ({ onAdd }: NewListProps) => {
  const [idle, setIdle] = useState(true);
  const [state, send] = useMachine(NewListMachine, {
    actions: {
      submit: (ctx) => {
        setIdle((curr) => !curr);
        onAdd(ctx.name);
        send({ type: 'CLEAR' });
      },
    },
  });

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      send({ type: 'SUBMIT', input: state.context.name });
    },
    [send, state.context.name],
  );

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target.value;
      return send({ type: 'CHANGE', input });
    },
    [send],
  );

  return (
    <div
      className={classNames(
        styles['add-list'],
        styles['list'],
        styles['list-wrapper'],
        styles['mod-add'],
        idle && styles['is-idle'],
      )}>
      <form onSubmit={handleSubmit}>
        <a
          className={classNames(styles['open-add-list'])}
          href='#'
          onClick={() => setIdle((curr) => !curr)}>
          <span className={styles.placeholder}>
            <span
              className={classNames(styles['icon-sm'], styles['icon-add'])}
            />
            {'Add another list'}
          </span>
        </a>
        <input
          type='text'
          name='name'
          placeholder='Enter list title...'
          autoComplete='off'
          maxLength={512}
          className={styles['list-name-input']}
          value={state.context.name}
          onChange={onChange}
        />

        <div
          className={classNames(
            styles['list-add-controls'],
            styles['u-clearfix'],
          )}>
          <input
            className={classNames(
              styles['nch-button'],
              styles['nch-button--primary'],
              styles['mod-list-add-button'],
            )}
            type='submit'
            value='Add list'
          />
          <a
            className={classNames(
              styles['icon-lg'],
              styles['icon-close'],
              styles['dark-hover'],
            )}
            href='#'
            aria-label='Cancel list editing'
            onClick={() => setIdle((curr) => !curr)}
          />
        </div>
      </form>
    </div>
  );
};

export default NewList;
