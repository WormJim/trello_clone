import type { NextPage } from 'next';
import styles from '../styles/Root.module.css';

const App: NextPage = () => {
  return <div id='trello-root' className={styles.root}></div>;
};

export default App;
