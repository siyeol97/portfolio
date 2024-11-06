import styles from './Contents.module.scss';
import About from './About';
import WorkList from './WorkList';

export default function Contents() {
  return (
    <main className={styles.wrapper}>
      <About />
      <WorkList />
    </main>
  );
}
