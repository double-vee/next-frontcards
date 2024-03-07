'use client';

import { useState, useEffect, useRef } from 'react';
import { CATEGORIES } from '@/constants';

import style from './Card.module.css';

export default function Card({ category, front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardHeight, setCardHeight] = useState(100);

  const backRef = useRef();

  useEffect(() => {
    setCardHeight(backRef.current.scrollHeight + 16);
  }, []);

  const className = CATEGORIES.find((item) => item.slug === category).className;

  const cardClassName = `${style.card} ${style[className]} ${
    isFlipped ? style.rotate : undefined
  }`;

  return (
    <article
      style={{ height: cardHeight }}
      className={style.wrapper}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <button className={`${cardClassName} ${style.front}`}>
        <h2 className={style.cardTitle}>{front}</h2>
      </button>
      <button
        className={`${cardClassName} ${style.back}`}
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
      </button>
    </article>
  );
}
