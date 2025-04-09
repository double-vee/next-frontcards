'use client';

import { useState, useEffect, useRef } from 'react';
import { CARD_PADDING, CATEGORIES } from '@/constants';

import style from './Card.module.css';

export default function Card({ category, front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardHeight, setCardHeight] = useState(null);

  const backRef = useRef();

  useEffect(() => {
    setCardHeight(backRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    if (cardHeight === null) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height + CARD_PADDING * 2;
      setCardHeight(height);
    });

    observer.observe(backRef.current);

    return () => observer.disconnect();
  }, [cardHeight]);

  const className = CATEGORIES.find((item) => item.slug === category).className;

  const cardClassName = `${style.card} ${style[className]} ${
    isFlipped ? style.rotate : undefined
  }`;

  return (
    <article
      style={{
        height: cardHeight === null ? 100 : cardHeight,
        '--padding-card': `${CARD_PADDING / 16}rem`,
      }}
      className={style.wrapper}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <button
        className={`${cardClassName} ${style.front}`}
        aria-label="Show notes"
        inert={isFlipped ? 'true' : undefined}
      >
        <h2 className={style.cardTitle}>{cardHeight === null ? '' : front}</h2>
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
