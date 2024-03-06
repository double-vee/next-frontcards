import { CARDS } from '@/data';
import Card from '@/components/Card/Card';

import style from './CardGrid.module.css';

export default function CardGrid({ slug }) {
  const filteredCards = CARDS.filter(({ category }) => slug === category);

  return (
    <section className={style.cardSection}>
      {filteredCards.map((card) => (
        <Card
          key={card.front}
          {...card}
        />
      ))}
    </section>
  );
}
