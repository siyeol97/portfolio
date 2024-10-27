import { useState } from 'react';
import Detail from './Detail';
import styles from './WorkList.module.scss';
import arrowBack from '../../public/arrow-back.svg';
import cards from '../../data/cards';
import Modal from './Modal/Modal';

export default function WorkList() {
  const [isActive, setIsActive] = useState<null | number>(null);
  const [isModal, setIsModal] = useState(false);

  const handleCardClick = (index: number) => {
    if (isActive !== null) {
      return;
    }
    setIsActive(index);
  };

  const handleArrowBackClick = () => {
    setIsActive(null);
  };

  const handleDetailClick = () => {
    if (isActive === null) {
      return;
    }
    setIsModal(true);
  };

  const handleModalCloseClick = () => {
    setIsModal(false);
  };

  return (
    <Detail
      backgroundColor='#121212'
      color='#f1f1f1'
    >
      <section
        className={`${styles.works_intro} ${isModal ? styles.active_modal : ''}`}
      >
        <h1>
          <span>My</span>
          <br />
          <span>Works</span>
        </h1>
        <p>My journey</p>
      </section>
      <section className={styles.card_container}>
        {isModal && isActive !== null && (
          <Modal
            handleModalCloseClick={handleModalCloseClick}
            isActive={isActive}
            card={cards[isActive]}
          />
        )}
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${isActive === index ? styles.active : isActive !== null ? styles.hidden : ''} ${isModal ? styles.active_modal : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className={styles.background_image}>
              <img
                src={card.image}
                alt='background_image'
                onClick={handleDetailClick}
              />
            </div>
            <img
              src={arrowBack}
              alt='arrow-back'
              className={styles.arrow_back}
              onClick={handleArrowBackClick}
            />
            <div className={styles.info}>
              <p className={styles.title}>{card.info.title}</p>
              <p
                className={`${isActive === index ? styles.description_active : styles.description_hidden}`}
              >
                {card.info.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </Detail>
  );
}
