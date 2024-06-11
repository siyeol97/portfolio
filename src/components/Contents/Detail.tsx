import { ReactNode } from 'react';
import styles from './Detail.module.scss';

interface Props {
  color?: string;
  backgroundColor?: string;
  children: ReactNode;
}

export default function Detail({ color, backgroundColor, children }: Props) {
  return (
    <section
      className={styles.wrapper}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <div className={styles.container}>{children}</div>
    </section>
  );
}
