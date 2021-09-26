import React from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface CanvasProps {
  children?: React.ReactNode;
}

const BoardCanvas = ({ children }: CanvasProps) => {
  return (
    <div className={styles['board-canvas']}>
      <div id={styles.board} className={styles['fancy-scrollbar']}>
        {children}
      </div>
    </div>
  );
};

export default BoardCanvas;
