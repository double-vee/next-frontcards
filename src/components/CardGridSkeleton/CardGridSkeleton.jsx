import style from './CardGridSkeleton.module.css';

export default function CardGridSkeleton() {
  const generateCards = (num) => {
    let skeletonCards = [];

    for (let i = 0; i < num; i++) {
      skeletonCards.push(i);
    }

    return skeletonCards;
  };

  return (
    <section
      className={style.skeletonSection}
      aria-hidden={true}
    >
      {generateCards(6).map((num) => (
        <article
          key={num}
          className={style.skeletonCard}
        >
          <div className={style.emoji}>🐢</div>
          <div className={style.line}></div>
        </article>
      ))}
    </section>
  );
}
