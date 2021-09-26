import classNames from 'classnames';
import React, { useState } from 'react';
import styles from '../../../styles/BoardApp.module.css';
import { useToggle } from '../../hooks/useToggle';
import NewCard from '../Card/NewCard';

interface ListFooterProps {
  hide: boolean;
  onAdd: () => void;
}

const ListFooter = ({ hide, onAdd }: ListFooterProps) => {
  return (
    <div
      className={classNames(
        styles['card-composer-container'],
        hide && styles['hide'],
      )}>
      <NewCard onAdd={onAdd} />
      <div className='card-templates-button-container dark-background-hover'>
        <div>
          <div role='presentation'>
            <a
              style={{ marginRight: '8px' }}
              role='button'
              href='#'
              aria-label='Create from template…'>
              <span
                className={classNames(
                  styles['icon-sm'],
                  styles['icon-template-card'],
                  styles['dark-background-hover'],
                )}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFooter;
