import styles from './ModalDescriptionHeader.module.scss';

interface Props {
  handleHeadClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ModalDescriptionHeader({ handleHeadClick }: Props) {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.header}
        id='info'
        onClick={handleHeadClick}
      >
        Info
      </div>
      <div
        className={styles.header}
        id='role'
        onClick={handleHeadClick}
      >
        My role
      </div>
    </div>
  );
}
