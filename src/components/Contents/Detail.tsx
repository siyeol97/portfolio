import styles from './Detail.module.scss';

interface Props {
  backgroundColor?: string;
}

export default function Detail({ backgroundColor }: Props) {
  return (
    <section
      className={styles.wrapper}
      style={{ backgroundColor: backgroundColor }}
    >
      Detail
    </section>
  );
}
