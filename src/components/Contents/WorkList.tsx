import { useState } from 'react';
import Detail from './Detail';
import styles from './WorkList.module.scss';
import arrowBack from '../../public/arrow-back.svg';
import blog_cover_image from '../../public/blog_cover.png';
import diary_cover_image from '../../public/diary_cover.png';
import mogazoa_cover_image from '../../public/mogazoa_cover.png';
import ptj_cover_image from '../../public/ptj_cover.png';

const cards = [
  {
    title: 'mogazoa',
    description: 'Description 1',
    image: mogazoa_cover_image,
  },
  {
    title: 'party-time-job',
    description: 'Description 2',
    image: ptj_cover_image,
  },
  {
    title: `Siyeol's Dev-log`,
    description: 'Description 3',
    image: blog_cover_image,
  },
  {
    title: '등잔 밑 일기',
    description: 'Description 4',
    image: diary_cover_image,
  },
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
            <div className={styles.background_image}>
              <img
                src={card.image}
                alt='background_image'
              />
            </div>
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
