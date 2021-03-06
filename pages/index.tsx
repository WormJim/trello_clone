import type { NextPage } from 'next';
import Board from '../src/components/Board';
import styles from '../styles/Root.module.css';

const App: NextPage = () => {
  return (
    <div id={styles['trello-root']} className={styles['body-board-view']}>
      <div id={styles.container}>
        <div
          style={{
            height: '100%',
            position: 'relative',
            zIndex: 0,
          }}>
          <div id={styles['surface']} className={styles.surface}>
            <main className={styles.main}>
              <Board />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
