import styles from './Contents.module.scss';
import About from './About';
import Works from './Works';
import Finish from './Finish';
import WorkList from './WorkList';

export default function Contents() {
  return (
    <main className={styles.wrapper}>
      <About />
      <WorkList />
      <Works />
      <Finish />
    </main>
  );
}
