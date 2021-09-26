import React from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface ListContainerProps {
  children: React.ReactNode;
}

const ListContainer = ({ children }: ListContainerProps) => {
  return (
    <div className={styles['list-wrapper']}>
      <div className={styles['list']}>{children}</div>
    </div>
  );
};

export default ListContainer;
