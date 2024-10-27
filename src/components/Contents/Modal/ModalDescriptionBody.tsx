import { ReactNode } from 'react';
import styles from './ModalDescriptionBody.module.scss';

interface Props {
  children: ReactNode;
}

export default function ModalDescriptionBody({ children }: Props): ReactNode {
  return <div className={styles.wrapper}>{children}</div>;
}
