import { notFound } from 'next/navigation';

import { CARDS as JS_CARDS } from '@/data/javascript/data';
import { CARDS as ARR_CARDS } from '@/data/array-methods/data';
import { CARDS as STR_CARDS } from '@/data/string-methods/data';
import { CARDS as REACT_CARDS } from '@/data/react/data';
import Card from '@/components/Card/Card';

import style from './CardGrid.module.css';

export default async function CardGrid({ slug }) {
  const getCards = () => {
    switch (slug) {
      case 'javascript':
        return JS_CARDS;
      case 'string-methods':
        return STR_CARDS;
      case 'array-methods':
        return ARR_CARDS;
      case 'react':
        return REACT_CARDS;
    }
  };

  let cards = getCards();

  if (cards.length === 0) {
    notFound();
  }

  return (
    <section className={style.cardSection}>
      {cards.map((card) => (
        <Card
          key={card.front}
          {...card}
        />
      ))}
    </section>
  );
}
