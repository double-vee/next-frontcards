import { notFound } from 'next/navigation';
import { CARDS } from '@/data';
import Card from '@/components/Card/Card';

import style from './CardGrid.module.css';

export default async function CardGrid({ slug }) {
  const filteredCards = CARDS.filter(({ category }) => slug === category);

  if (filteredCards.length === 0) {
    notFound();
  }

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
