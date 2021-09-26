import React from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface CanvasProps {
  children?: React.ReactNode;
}

const Canvas = ({ children }: CanvasProps) => {
  return <div className={styles.boardCanvas}>{children}</div>;
};

export default Canvas;
