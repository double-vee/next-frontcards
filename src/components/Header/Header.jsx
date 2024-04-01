import Link from 'next/link';

import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <Link
        href={'/'}
        className={style.header__title}
        aria-label="home page"
      >
        Frontcards*
      </Link>
      <p className={style.header__intro}>
        *Notes and snippets for <span className={style.line}>wannabe</span>{' '}
        frontend developers.
      </p>
    </header>
  );
}
