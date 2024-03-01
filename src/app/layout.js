import './styles.css';

export const metadata = {
  title: 'Frontcards',
  description: 'A bunch of notes and snippets for beginner frontend devs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
