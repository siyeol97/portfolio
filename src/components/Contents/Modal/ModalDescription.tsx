import styles from './ModalDescription.module.scss';
import ModalDescriptionBody from './ModalDescriptionBody';
import ModalDescriptionHeader from './ModalDescriptionHeader';

export default function ModalDescription() {
  return (
    <section className={styles.wrapper}>
      <ModalDescriptionHeader />
      <ModalDescriptionBody />
    </section>
  );
}
