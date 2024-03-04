import CategorySection from '@/components/CategorySection/CategorySection';

import style from './page.module.css';

export default function Home() {
  return (
    <main className={style.wrapper}>
      <CategorySection />
    </main>
  );
}
