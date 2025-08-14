import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { generateHrefLangLinks, generateMultilingualStructuredData } from '@/lib/seo-utils';
import { I18nIntegration } from '@/i18n/i18n-integration';
import { APP_CONFIG } from '@/config'; // 使用統一的配置

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

// 導出 viewport 配置
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' }
    ],
};

// 動態生成 metadata
export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    // 取得語系資料
    const languages = await I18nIntegration.getLanguages();
    const baseUrl = APP_CONFIG.API.BASE_URL;

    // 生成 hreflang 連結
    const hrefLangLinks = await generateHrefLangLinks(languages, locale);

    // 轉換為 Next.js metadata 格式
    const alternates: Record<string, string> = {};
    hrefLangLinks.forEach(({ hrefLang, href }) => {
        alternates[hrefLang] = href;
    });

    // 生成結構化資料
    const structuredData = generateMultilingualStructuredData(
        languages,
        locale,
        `${baseUrl}/${locale}`
    );

    return {
        title: {
            default: '我的網站',
            template: '%s | 我的網站',
        },
        description: '這是我網站的預設描述。',
        keywords: ['Next.js', 'React', '開發'],

        // 改進的 Open Graph 配置
        openGraph: {
            type: 'website',
            locale: locale.replace('-', '_'),
            url: `${baseUrl}/${locale}`,
            siteName: '我的網站',
            title: '我的網站',
            description: '這是我網站的預設描述。',
            images: [
                {
                    url: `${baseUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: '我的網站',
                },
            ],
            alternateLocale: languages
                .filter(lang => lang.id !== locale)
                .map(lang => lang.id.replace('-', '_')),
        },

        // 添加 Twitter Card
        twitter: {
            card: 'summary_large_image',
            title: '我的網站',
            description: '這是我網站的預設描述。',
            images: [`${baseUrl}/og-image.jpg`],
        },

        // 改進的 alternates 配置
        alternates: {
            canonical: `${baseUrl}/${locale}`,
            languages: {
                ...alternates,
                'x-default': `${baseUrl}/${languages[0]?.id || 'en'}`,
            },
        },

        // 添加更多 SEO 相關的 metadata
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },

        // 添加 verification 標籤（如果需要）
        verification: {
            google: 'your-google-verification-code',
        },

        other: {
            'language': locale,
            // 將結構化資料添加到 other 中
            'structured-data': JSON.stringify(structuredData),
        },
    };
}

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