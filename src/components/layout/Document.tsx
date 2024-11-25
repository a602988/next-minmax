import { ReactNode } from 'react';
import '@/styles/globals.css';
import ClientDocument from './ClientDocument';

type Props = {
  bodyClassName?: string;
  children: ReactNode;
  locale: string;
};

export default function Document({ bodyClassName = '', children, locale }: Props) {
  return (
    <html lang={locale}>
      <ClientDocument bodyClassName={bodyClassName}>
        {children}
      </ClientDocument>
    </html>
  );
}
