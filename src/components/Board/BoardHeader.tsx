import React from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface BoardHeaderProps {
  name: string;
}

const BoardHeader = ({ name }: BoardHeaderProps) => {
  return (
    <div className={styles['boarder-header']}>
      <h1>{name}</h1>
    </div>
  );
};

export default BoardHeader;
