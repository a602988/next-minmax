import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: '我的網站',
        template: '%s | 我的網站',
    },
    description: '這是我網站的預設描述。',
    keywords: ['Next.js', 'React', '開發'],
    openGraph: {
        type: 'website',
        locale: 'zh_TW',
        url: 'https://yourwebsite.com',
        siteName: '我的網站',
    },
};

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html lang={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </body>
        </html>
    );
}