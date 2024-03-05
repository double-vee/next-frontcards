import CardGrid from '@/components/CardGrid/CardGrid';

export default function Category({ params: { categorySlug } }) {
  return (
    <main>
      <CardGrid slug={categorySlug} />
    </main>
  );
}
