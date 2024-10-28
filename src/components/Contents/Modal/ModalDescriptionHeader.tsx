import styles from './ModalDescriptionHeader.module.scss';

interface Props {
  handleHeadClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  head: string;
}

export default function ModalDescriptionHeader({
  handleHeadClick,
  head,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.header} ${head === 'info' ? styles.selected : styles.none}`}
        id='info'
        onClick={handleHeadClick}
      >
        Info
      </div>
      <div
        className={`${styles.header} ${head === 'role' ? styles.selected : styles.none}`}
        id='role'
        onClick={handleHeadClick}
      >
        My role
      </div>
    </div>
  );
}
