import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main>
      <section className="not-found">
        <h1>This page could not be found</h1>
        <p>
          Try one of the links above or go back to the{' '}
          <Link href="/">home page</Link>.
        </p>
      </section>
    </main>
  );
}
