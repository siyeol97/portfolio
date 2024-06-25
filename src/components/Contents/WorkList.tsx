import Detail from './Detail';
import styles from './WorkList.module.scss';

export default function WorkList() {
  return (
    <Detail
      backgroundColor='#121212'
      color='#f1f1f1'
    >
      <section className={styles.works_intro}>
        <h1>
          <span>My</span>
          <br />
          <span>Works</span>
        </h1>
        <p>My journey</p>
      </section>
      <section className={styles.card_container}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </section>
    </Detail>
  );
}
