import { Card } from '../../../data/cards';

interface Props {
  card: Card;
}

export default function CardInfo({ card }: Props) {
  return (
    <div>
      <h4>{card.info.title}</h4>
      <p>{card.info.description}</p>
      <p>{card.info.period}</p>
      <ul>
        {card.skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
