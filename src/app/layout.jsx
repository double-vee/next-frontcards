import { Poppins, Source_Sans_3, Source_Code_Pro } from 'next/font/google';

import SiteWrapper from '@/components/SiteWrapper/SiteWrapper';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CategorySection from '@/components/CategorySection/CategorySection';

import './styles.css';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const source_sans_3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
});

const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

export const metadata = {
  title: 'Frontcards',
  description: 'Frontend notes and snippets for junior developers',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${source_sans_3.variable} ${source_code_pro.variable}`}
    >
      <body>
        <SiteWrapper>
          <Header />
          <CategorySection />
          {children}
          <Footer />
        </SiteWrapper>
      </body>
    </html>
  );
}
