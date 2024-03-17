import { CARDS } from '@/data';
import CardGrid from '@/components/CardGrid/CardGrid';

export function generateStaticParams() {
  return CARDS.map((card) => ({ categorySlug: card.category }));
}

export default function CategoryPage({ params: { categorySlug } }) {
  return (
    <main>
      <CardGrid slug={categorySlug} />
    </main>
  );
}
