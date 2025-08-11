import {setRequestLocale} from 'next-intl/server'; // 靜態渲染
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from 'next'
import { getLanguagesForSSR } from '@/features/language/application/use-cases/getLanguagesForSSR';
import { LanguageProvider } from '@/features/language/presentation/LanguageProvider';


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
    title: {
        default: '我的網站', // 這是預設標題
        template: '%s | 我的網站', // 如果頁面有自己的 title，會以此模板顯示
    },
    description: '這是我網站的預設描述。',
    keywords: ['Next.js', 'React', '開發'],
    openGraph: {
        type: 'website',
        locale: 'zh_TW',
        url: 'https://yourwebsite.com',
        siteName: '我的網站',
    },
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

    // 更嚴格的類型檢查
    if (!hasLocale(routing.locales, locale)) {
    notFound();
    }

    // 啟用靜態渲染
    setRequestLocale(locale);

    // 快取優先
    const languages = await getLanguagesForSSR(); // 快取優先


    return (
        <html lang={locale}>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NextIntlClientProvider >
                  <LanguageProvider languages={languages}>
                  {children}
                  </LanguageProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
