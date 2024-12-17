import {Metadata, Viewport} from 'next';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import Document from '@/components/layout/Document';
import { NavProvider } from '@/context/NavContext';
import {locales} from '@/i18n/config';
import {getWebData} from '@/services/getWebData';


type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
export async function generateMetadata(): Promise<Metadata> {
  const webData = await getWebData();
  return {
    title: webData.site_title,
    description: webData.meta_description,
    keywords: webData.meta_keywords ? webData.meta_keywords.split(',').map(keyword => keyword.trim()) : [],
    authors: [{
      name: webData.company_name || '雲端數位科技有限公司',
      url: webData.site_url || 'https://www.minmax.tw'
    }],
    creator: webData.company_name,
    publisher: webData.company_name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      // 只有favicon.ico放在app目錄，其他放在public，不然路徑會有問題
      icon: [
        { url: '/favicon.ico', sizes: '16x16 32x32' },
        { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/images/favicon/logo.png', type: 'image/png' },
        { url: '/images/favicon/logo-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/images/favicon/logo-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'manifest', url: '/manifest.json' },
      ],
    },
  };
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
