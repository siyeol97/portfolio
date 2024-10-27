import { useState } from 'react';
import { Card } from '../../../data/cards';
import styles from './ModalDescription.module.scss';
import ModalDescriptionBody from './ModalDescriptionBody';
import ModalDescriptionHeader from './ModalDescriptionHeader';
import CardInfo from './CardInfo';
import CardRole from './CardRole';
import CardImpression from './CardImpression';

interface Props {
  card: Card;
}

export default function ModalDescription({ card }: Props) {
  const [head, setHead] = useState('info');

  const handleHeadClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setHead(e.currentTarget.id);
  };

  const getBody = () => {
    if (head === 'info') {
      return <CardInfo card={card} />;
    }
    if (head === 'role') {
      return <CardRole card={card} />;
    }
    if (head === 'impression') {
      return <CardImpression card={card} />;
    }
  };

  return (
    <section className={styles.wrapper}>
      <ModalDescriptionHeader handleHeadClick={handleHeadClick} />
      <ModalDescriptionBody>{getBody()}</ModalDescriptionBody>
    </section>
  );
}
