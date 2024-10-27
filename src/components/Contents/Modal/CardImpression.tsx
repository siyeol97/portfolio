import { Card } from '../../../data/cards';

interface Props {
  card: Card;
}

export default function CardImpression({ card }: Props) {
  return (
    <div>
      <ul>
        {card.impression.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
