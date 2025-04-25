'use client';

import { useState } from 'react';
import { CATEGORIES } from '@/constants';
import useCardHeight from '@/hooks/useCardHeight';

import style from './Card.module.css';

export default function Card({ category, front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [backRef, cardHeight] = useCardHeight();

  const className = CATEGORIES.find((item) => item.slug === category).className;

  const cardClassName = `${style.card} ${style[className]} ${
    isFlipped ? style.rotate : undefined
  }`;

  return (
    <article
      style={cardHeight && { '--min-height-card': `${cardHeight / 16}rem` }}
      className={style.wrapper}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <button
        className={`${cardClassName} ${style.front}`}
        aria-label="Show notes"
        inert={isFlipped ? 'true' : undefined}
      >
        {cardHeight && <h2 className={style.cardTitle}>{front}</h2>}
      </button>
      <button
        className={`${cardClassName} ${style.back}`}
        aria-label="Hide notes"
        inert={isFlipped ? undefined : 'true'}
      >
        <div
          className={style.backWrapper}
          ref={backRef}
        >
          <h2 className={style.cardTitle}>{front}</h2>
          <ul
            className={style.cardNotes}
            role="list"
          >
            {back.map((note, i) => (
              <li
                key={`${i}-${Date.now()}`}
                className={style.cardNote}
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </article>
  );
}
