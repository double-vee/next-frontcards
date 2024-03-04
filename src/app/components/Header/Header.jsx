import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>Frontcards*</h1>
      <p className={style.header__intro}>
        *Notes and snippets for wannabe frontend developers.
      </p>
    </header>
  );
}
