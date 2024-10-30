import Detail from './Detail';
import styles from './Finish.module.scss';

export default function Finish() {
  return (
    <Detail backgroundColor='#121212'>
      <section className={styles.title}>
        <h1>ALWAYS TRYING</h1>
        <h2>Better than yesterday</h2>
      </section>
    </Detail>
  );
}
