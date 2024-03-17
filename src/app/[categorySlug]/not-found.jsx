import Link from 'next/link';

export default function NotFoundCategory() {
  return (
    <main>
      <section className="not-found">
        <h2>Oops!</h2>
        <p>The category you were looking for could not be found.</p>
        <p>
          Try one of the links above or go back to the{' '}
          <Link href="/">home page</Link>.
        </p>
      </section>
    </main>
  );
}
