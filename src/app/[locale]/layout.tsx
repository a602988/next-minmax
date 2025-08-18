import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from 'next/font/google';
import { I18nIntegration } from '@/i18n/i18n-integration';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });



export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // SSR 初始化語系列表（預熱快取，供後續使用）
    await I18nIntegration.getLanguages();

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    return (
        <html lang={locale}>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}