import { Card } from '../../../data/cards';

interface Props {
  card: Card;
}

export default function CardRole({ card }: Props) {
  return (
    <div>
      <ul>
        {card.role.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
