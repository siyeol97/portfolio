import { useState } from 'react';
import Detail from './Detail';
import styles from './WorkList.module.scss';
import arrowBack from '../../public/arrow-back.svg';

const cards = [
  { title: 'Project 1', description: 'Description 1' },
  { title: 'Project 2', description: 'Description 2' },
  { title: 'Project 3', description: 'Description 3' },
  { title: 'Project 4', description: 'Description 4' },
];

export default function WorkList() {
  const [isActive, setIsActive] = useState<null | number>(null);

  const handleClick = (index: number) => {
    setIsActive(isActive === index ? null : index);
  };

  return (
    <Detail
      backgroundColor='#121212'
      color='#f1f1f1'
    >
      <section className={styles.works_intro}>
        <h1>
          <span>My</span>
          <br />
          <span>Works</span>
        </h1>
        <p>My journey</p>
      </section>
      <section className={styles.card_container}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${isActive === index ? styles.active : isActive !== null ? styles.hidden : ''}`}
            onClick={() => handleClick(index)}
          >
            <img
              src={arrowBack}
              alt='arrow-back'
              className={styles.arrow_back}
            />
            <p className={styles.title}>{card.title}</p>
          </div>
        ))}
      </section>
    </Detail>
  );
}
