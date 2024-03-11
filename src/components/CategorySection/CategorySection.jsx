import Link from 'next/link';
import { CATEGORIES } from '@/constants';

import style from './CategorySection.module.css';

export default function CategorySection() {
  return (
    <section className={style.wrapper}>
      <nav>
        <ul
          className={style.categoryList}
          role="list"
        >
          {CATEGORIES.map(({ label, slug, className }) => (
            <li
              key={slug}
              className={`
            ${style.category}
            ${style[className]}
            `}
            >
              <Link href={`/${slug}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
