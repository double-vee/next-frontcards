import Link from 'next/link';

import style from './Intro.module.css';

export default function Intro() {
  return (
    <section className={style.intro}>
      <h1 className={style.intro__title}>Cards to the rescue 🐬</h1>
      <p>
        <span className={style.emoji}>🦥</span> Confused by{' '}
        <code className={style.term}>slice()</code> and{' '}
        <code className={style.term}>splice()</code>?
      </p>
      <p>
        <span className={style.emoji}>🐍</span> Mixing up{' '}
        <code className={style.term}>contains()</code> and{' '}
        <code className={style.term}>includes()</code>?
      </p>
      <p>
        <span className={style.emoji}>🦀</span> Stressed out by{' '}
        <code className={style.term}>search()</code> and{' '}
        <code className={style.term}>match()</code>?
      </p>
      <div className={style.marquee}>
        <p className={style.slogan}>
          <span className={style.slogan__slice}>
            Ease the learning curve with Frontcards
          </span>
          <span className={style.slogan__slice}>
            Ease the learning curve with Frontcards
          </span>
        </p>
      </div>
      <p>
        <span className={style.emoji}>🦕</span> Select a category above to start
        reviewing JavaScript methods or other frontend topics.
      </p>
      <p>
        <span className={style.emoji}>🦑</span> Check out the{' '}
        <a
          href="https://github.com/double-vee/next-frontcards"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repo
        </a>
        .
      </p>
    </section>
  );
}
