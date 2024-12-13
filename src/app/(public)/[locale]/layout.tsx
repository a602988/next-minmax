import {Metadata, Viewport} from 'next';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import Document from '@/components/layout/Document';
import { NavProvider } from '@/context/NavContext';
import {locales} from '@/i18n/config';


type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'next-intl-mixed-routing (public)',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/manifest.json' },
    ],
  },
};
export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}
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
