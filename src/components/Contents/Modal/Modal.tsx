import styles from './Modal.module.scss';
import arrowDown from '../../../public/arrow-down.svg';
import ModalDescription from './ModalDescription';
import ModalImage from './ModalImage';
import cards from '../../../data/cards';

interface Props {
  handleModalCloseClick: () => void;
  isActive: number | null;
}

export default function Modal({ handleModalCloseClick, isActive }: Props) {
  if (isActive === null) {
    return;
  }

  return (
    <div className={styles.wrapper}>
      <img
        src={arrowDown}
        alt='close-button'
        className={styles.close}
        onClick={handleModalCloseClick}
      />
      <section className={styles.container}>
        <ModalImage image={cards[isActive].image} />
        <ModalDescription />
      </section>
    </div>
  );
}
