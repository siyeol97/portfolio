import styles from './ModalDescriptionHeader.module.scss';

export default function ModalDescriptionHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Info</div>
      <div className={styles.header}>Used skills</div>
      <div className={styles.header}>My role</div>
      <div className={styles.header}>Impression</div>
    </div>
  );
}
