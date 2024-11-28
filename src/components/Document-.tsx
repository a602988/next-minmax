import { Inter, Kdam_Thmor_Pro} from 'next/font/google';
import {ReactNode} from 'react';
import '@/assets/styles/globals.css';

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap'
// });

const kdamThmorPro = Kdam_Thmor_Pro({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

type Props = {
  children: ReactNode;
  locale: string;
};

export default function Document({children, locale }: Props) {
  return (
    <html className={kdamThmorPro.className} lang={locale}>
      <body>{children}</body>
    </html>
  );
}
