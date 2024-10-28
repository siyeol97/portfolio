import { Card } from '../../../data/cards';
import styles from './CardInfo.module.scss';

interface Props {
  card: Card;
}

export default function CardInfo({ card }: Props) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.period}>{card.info.period}</p>
      <h4 className={styles.title}>{card.info.title}</h4>
      <p>{card.info.description}</p>
      <p className={styles.skills}>Used Skills</p>
      <ul className={styles.skill_list}>
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
