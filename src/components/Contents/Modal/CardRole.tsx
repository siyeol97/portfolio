import { Card } from '../../../data/cards';
import styles from './CardRole.module.scss';

interface Props {
  card: Card;
}

export default function CardRole({ card }: Props) {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.role_list}>
        {card.role.map((item) => {
          return (
            <li
              key={item}
              className={styles.role}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
