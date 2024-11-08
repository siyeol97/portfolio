import { Card } from '../../../data/cards';
import styles from './CardInfo.module.scss';
import openImg from '../../../public/asset/open.svg';
import githubImg from '../../../public/asset/Github-Light.svg';

interface Props {
  card: Card;
}

export default function CardInfo({ card }: Props) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.period}>{card.info.period}</p>
      {card.info.title !== '등잔 밑 일기' ? (
        <a
          href={card.url}
          target='_blank'
          className={styles.link}
        >
          <div className={styles.title_box}>
            <h4 className={styles.title}>{card.info.title}</h4>
            <img
              src={openImg}
              alt='open-image'
              className={styles.open_image}
            />
          </div>
        </a>
      ) : (
        <div className={styles.title_box}>
          <h4 className={styles.title}>{card.info.title}</h4>
        </div>
      )}
      <p>{card.info.description}</p>
      <a
        href={card.repository}
        className={styles.github_link}
        target='_blank'
      >
        <img
          src={githubImg}
          alt='github_image'
          width={24}
        />
        <p>github repository</p>
        <img
          src={openImg}
          alt='open-image'
          className={styles.github_open_image}
        />
      </a>
      <p className={styles.sub_head}>Introduce</p>
      <ul className={styles.item_list}>
        {card.introduce.map((item) => {
          return (
            <li
              key={item}
              className={styles.introduce}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <p className={styles.sub_head}>Used Skills</p>
      <ul className={`${styles.item_list} ${styles.item_skill_list}`}>
        {card.skills.map((skill) => {
          return (
            <li
              key={skill}
              className={styles.skill}
            >
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
