import Detail from './Detail';
import styles from './Works.module.scss';

export default function Works() {
  return (
    <>
      <Detail backgroundColor='#f1f1f1'>
        <section className={styles.intro_text}>
          <h1>
            <span>My</span>
            <br />
            <span>Works</span>
          </h1>
          <p>These are my front-end works</p>
        </section>
      </Detail>
      <Detail backgroundColor='#121212'>내용</Detail>
      <Detail backgroundColor='#f1f1f1'>내용</Detail>
    </>
  );
}
