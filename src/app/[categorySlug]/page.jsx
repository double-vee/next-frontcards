import { CATEGORIES } from '@/constants';
import CardGrid from '@/components/CardGrid/CardGrid';

export function generateMetadata({ params }) {
  const label = CATEGORIES.find(
    (category) => params.categorySlug === category.slug
  )?.label;

  const title = !label
    ? 'Not found'
    : `${label.at(0).toUpperCase()}${label.slice(1)}`;

  return {
    title: `Frontcards | ${title}`,
  };
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ categorySlug: category.slug }));
}

export default function CategoryPage({ params: { categorySlug } }) {
  return (
    <main>
      <CardGrid slug={categorySlug} />
    </main>
  );
}
