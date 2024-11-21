
import {ReactNode} from 'react';
import '@/styles/globals.css';



type Props = {
  children: ReactNode;
  locale: string;
};

export default function Document({children, locale }: Props) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
