import styles from './Contents.module.scss';
import Detail from './Detail';
import About from './About';
import Works from './Works';

export default function Contents() {
  return (
    <main className={styles.wrapper}>
      <Detail
        color='#f1f1f1'
        backgroundColor='#121212'
      >
        <About />
      </Detail>
      <Works />
    </main>
  );
}
