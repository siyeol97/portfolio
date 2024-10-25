import styles from './Modal.module.scss';
import arrowDown from '../../public/arrow-down.svg';
import cards from '../../data/cards';

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
        <div className={styles.image_container}>
          <div className={styles.image_box}>
            <img
              className={styles.image}
              src={cards[isActive].image}
              alt='image'
            />
          </div>
        </div>
        <div className={styles.description_container}>
          {cards[isActive].title} {cards[isActive].description}
          {cards[isActive].description}
          {cards[isActive].description}
          {cards[isActive].description}
          {cards[isActive].description}
          {cards[isActive].description}
        </div>
      </section>
    </div>
  );
}
