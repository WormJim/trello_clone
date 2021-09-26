import React from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface BoardHeaderProps {}

const BoardHeader = ({}: BoardHeaderProps) => {
  return (
    <div className={styles['boarder-header']}>
      <h1>{`Trello Board`}</h1>
    </div>
  );
};

export default BoardHeader;
