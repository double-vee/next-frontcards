import { getYear } from '@/functions';
import style from './Footer.module.css';

export default function Footer() {
  const year = getYear();

  return (
    <footer className={style.footer}>
      <p>&copy; {year} double-vee. Created by a human developer.</p>
    </footer>
  );
}
