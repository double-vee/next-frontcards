import { CATEGORIES } from '@/constants';

import style from './Card.module.css';

export default function Card({ category, front, back }) {
  const className = CATEGORIES.find((item) => item.slug === category).className;

  return (
    <article>
      <button className={`${style.card} ${style.front} ${style[className]}`}>
        <h2 className={style.cardTitle}>{front}</h2>
      </button>
      <button className={`${style.card} ${style.back} ${style[className]}`}>
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
