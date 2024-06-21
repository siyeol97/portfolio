import Detail from './Detail';
import styles from './Finish.module.scss';

export default function Finish() {
  return (
    <Detail backgroundColor='#f1f1f1'>
      <section className={styles.title}>
        <h1>ALWAYS TRYING</h1>
        <h2>Better than yesterday</h2>
      </section>
    </Detail>
  );
}
