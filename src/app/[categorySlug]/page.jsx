import CardGrid from '@/components/CardGrid/CardGrid';

export default function CategoryPage({ params: { categorySlug } }) {
  return (
    <main>
      <CardGrid slug={categorySlug} />
    </main>
  );
}
