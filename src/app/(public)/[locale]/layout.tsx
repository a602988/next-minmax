import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import Document from '@/components/layout/Document';
import {locales} from '@/i18n/config';
import { NavProvider } from '@/context/NavContext';


type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'next-intl-mixed-routing (public)'
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  // Ensure that the incoming locale is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }


  const messages = await getMessages();

  return (
    <NavProvider>
      <Document locale={locale}>
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
      </Document>
    </NavProvider>
  );
}
