import classNames from 'classnames';
import React from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface ListFooterProps {
  onAdd: (name: string) => void;
}

const ListFooter = ({}: ListFooterProps) => {
  return (
    <div className={styles['card-composer-container']}>
      <a className={styles['open-card-composer']} href='#'>
        <span
          className={classNames(styles['icon-sm'], styles['icon-add'])}></span>
        <span>Add a card</span>
      </a>

      <div className='card-templates-button-container dark-background-hover'>
        <div>
          <div role='presentation'>
            <a
              style={{ marginRight: '8px' }}
              role='button'
              href='#'
              aria-label='Create from template…'>
              <span className='icon-sm icon-template-card dark-backgr ound-hover'></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFooter;
