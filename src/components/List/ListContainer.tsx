import React, { useCallback } from 'react';
import styles from '../../../styles/BoardApp.module.css';

interface ListContainerProps {
  children: React.ReactNode;
  id: number;
  draggable: boolean;
}

const indexOf = (nodes: Element[], matchId: string) => {
  return Array.prototype.findIndex.call(nodes, (node) => node.id === matchId);
};

const ListContainer = ({
  children,
  id,
  draggable = false,
}: ListContainerProps) => {
  const pickUp = useCallback((event) => {
    event.dataTransfer.setData('text', event.target.id);
  }, []);

  const drop = useCallback((event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const targetEl = event.target;
    const droppedEl = document.getElementById(data);

    const canDrop = !isNaN(Number(targetEl.id)) && !!event.target.id;
    const childNodes = targetEl.parentNode.childNodes;
    const notLastEl = +targetEl.id < childNodes.length;

    if (canDrop && notLastEl) {
      const targetIndex = indexOf(childNodes, targetEl.id);
      const droppedIndex = indexOf(childNodes, data);

      targetIndex < droppedIndex
        ? targetEl.parentNode.insertBefore(droppedEl, childNodes[targetIndex])
        : targetEl.parentNode.insertBefore(
            droppedEl,
            childNodes[targetIndex + 1],
          );
    }
  }, []);

  const allowDrop = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div
      id={id + ''}
      draggable={draggable}
      onDragStart={pickUp}
      onDrop={drop}
      onDragOver={allowDrop}
      className={styles['list-wrapper']}>
      <div className={styles['list']}>{children}</div>
    </div>
  );
};

export default ListContainer;
