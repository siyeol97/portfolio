import { ReactNode } from 'react';
import styles from './Detail.module.scss';

interface Props {
  color?: string;
  backgroundColor?: string;
  children: ReactNode;
  overflow?: string;
  id?: string;
}

export default function Detail({
  color,
  backgroundColor,
  children,
  overflow,
  id,
}: Props) {
  return (
    <section
      className={styles.wrapper}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        overflow: overflow,
      }}
      id={id}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
}
