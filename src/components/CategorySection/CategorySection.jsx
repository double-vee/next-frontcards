'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { CATEGORIES } from '@/constants';

import style from './CategorySection.module.css';

export default function CategorySection() {
  const dynamicParam = useParams().categorySlug;

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
            ${dynamicParam === slug ? style.active : undefined}
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
