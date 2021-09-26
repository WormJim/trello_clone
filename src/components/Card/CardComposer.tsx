import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface CardComposerProps {
  hide: boolean;
  addItem: (value?: string) => void;
}

const CardComposer = ({ hide, addItem }: CardComposerProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');

  const handleClose = useCallback(
    (save: boolean) => {
      addItem(save ? value : undefined);
      setValue('');
      textareaRef.current?.blur();
    },
    [addItem, value],
  );

  useEffect(() => {
    if (hide) {
      textareaRef.current?.focus();
    }
  }, [hide]);

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
            ref={textareaRef}
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
