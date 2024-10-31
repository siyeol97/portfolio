import { Card } from '../../../data/cards';
import arrowDown from '../../../public/asset/arrow-down.svg';
import styles from './Modal.module.scss';
import ModalDescription from './ModalDescription';
import ModalImage from './ModalImage';

interface Props {
  handleModalCloseClick: () => void;
  isActive: number | null;
  card: Card;
}

export default function Modal({
  handleModalCloseClick,
  isActive,
  card,
}: Props) {
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
        <ModalImage image={card.image} />
        <ModalDescription card={card} />
      </section>
    </div>
  );
}
