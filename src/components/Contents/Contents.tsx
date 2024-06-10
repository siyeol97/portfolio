import useSectionScroll from '../../hooks/useSectionScroll';
import styles from './Contents.module.scss';
import Detail from './Detail';

export default function Contents() {
  const wrapperRef = useSectionScroll();

  return (
    <main
      className={styles.wrapper}
      ref={wrapperRef}
    >
      <Detail backgroundColor='#f1f1f1' />
      <Detail backgroundColor='#121212' />
      <Detail backgroundColor='#f1f1f1' />
      <Detail backgroundColor='#121212' />
    </main>
  );
}
