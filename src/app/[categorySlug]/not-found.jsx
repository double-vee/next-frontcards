import Link from 'next/link';

export default function NotFoundCategory() {
  return (
    <main>
      <section className="not-found">
        <h1>This category could not be found</h1>
        <p>
          Try one of the links above or go back to the{' '}
          <Link href="/">home page</Link>.
        </p>
      </section>
    </main>
  );
}
