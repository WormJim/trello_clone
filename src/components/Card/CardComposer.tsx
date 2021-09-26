import classNames from 'classnames';
import React, { useCallback, useRef, useState } from 'react';
import styles from '../../../styles/BoardApp.module.css';

const returnUndefined = () => undefined;

interface CardComposerProps {
  hide: boolean;
  addItem: (value?: string) => void;
}

const CardComposer = ({ hide, addItem }: CardComposerProps) => {
  const [value, setValue] = useState('');

  const handleClose = useCallback(
    (save: boolean) => {
      console.log('save', save);

      addItem(save ? value : undefined);
      setValue('');
    },
    [addItem, value],
  );

  return (
    <div className={classNames(styles['card-composer'], !hide && styles.hide)}>
      <div className={styles['list-card']}>
        <div
          className={classNames(
            styles['list-card-details'],
            styles['u-clearfix'],
          )}>
          <div
            className={classNames(
              styles['list-card-labels'],
              styles['u-clearfix'],
            )}
          />
          <textarea
            className={styles['list-card-composer-textarea']}
            dir='auto'
            placeholder='Enter a title for this card…'
            style={{
              overflow: 'hidden',
              overflowWrap: 'break-word',
              resize: 'none',
              height: '54px',
            }}
            onChange={(evt) => setValue(evt.target.value)}
            value={value}
          />
          <div className={styles['list-card-members']} />
        </div>
      </div>
      <div className={classNames(styles['cc-controls'], styles['u-clearfix'])}>
        <div className={styles['cc-controls-section']}>
          <input
            className={classNames(
              // styles['nch-button'],
              styles['nch-button--primary'],
              styles['confirm'],
              styles['mod-compact'],
            )}
            type='submit'
            value='Add card'
            onClick={() => handleClose(true)}
          />
          <a
            className={classNames(
              styles['icon-lg'],
              styles['icon-close'],
              styles['dark-hover'],
            )}
            href='#'
            onClick={() => handleClose(false)}
          />
        </div>
        <div
          className={classNames(
            styles['cc-controls-section'],
            styles['mod-right'],
          )}>
          <a
            className={classNames(
              styles['icon-lg'],
              styles['icon-overflow-menu-horizontal'],
              styles['dark-background-hover'],
            )}
            href='#'
          />
        </div>
      </div>
    </div>
  );
};

export default CardComposer;
