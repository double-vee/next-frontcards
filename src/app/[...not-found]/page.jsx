import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Frontcards | Not found',
};

export default function NotFound() {
  notFound();
}
