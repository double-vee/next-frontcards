import { CARDS } from '@/data';

import style from './CardGrid.module.css';

export default function CardGrid({ slug }) {
  const filteredCards = CARDS.filter(({ category }) => slug === category);

  return (
    <section className={style.cardSection}>
      {filteredCards.map((card) => (
        <article key={card.front}>{card.front}</article>
      ))}
    </section>
  );
}
