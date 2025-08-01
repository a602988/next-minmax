import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from 'next'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 頁面 meta 設置，以設置面標題、描述等等。
export const metadata: Metadata = {
  title: '...',
  description: '...',
}


export default async function LocaleLayout({
     children,
     params
   }: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {

  // 驗證 locale 是否有效
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
      <html lang={locale}>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
      </html>
  );
}
