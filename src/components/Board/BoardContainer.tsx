import React from 'react';
import boardStyles from '../../../styles/BoardApp.module.css';
import styles from '../../../styles/Root.module.css';

interface ContainerProps {
  children?: React.ReactNode;
}

const BoardContainer = ({ children }: ContainerProps) => {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <div id={styles.content}>
          <div className={boardStyles['board-wrapper']}>
            <div className={boardStyles['board-main-content']}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardContainer;
