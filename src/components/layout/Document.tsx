import { ReactNode } from 'react';
import '@/assets/styles/globals.css';
import ClientDocument from './ClientDocument';
import { NavProvider } from '@/context/NavContext';

type Props = {
  bodyClassName?: string;
  children: ReactNode;
  locale: string;
};

export default function Document({ bodyClassName = '', children, locale }: Props) {
  return (
    <html lang={locale} className="scroll-smooth">
      <NavProvider>
        <ClientDocument bodyClassName={bodyClassName}>
          {children}
        </ClientDocument>
      </NavProvider>
    </html>
  );
}
