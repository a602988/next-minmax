import { headers } from 'next/headers';
import type { Language } from '@/types';

/**
 * 生成當前頁面的 hreflang 連結
 */
export async function generateHrefLangLinks(
    languages: Language[],
    currentLocale: string
): Promise<Array<{ hrefLang: string; href: string }>> {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '/';
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourwebsite.com';

    // 移除當前語系前綴，取得基底路徑
    const basePath = pathname.replace(new RegExp(`^/${currentLocale}`), '') || '/';

    // 為每個語系生成完整 URL
    const hrefLangLinks = languages.map(lang => ({
        hrefLang: lang.id,
        href: `${baseUrl}/${lang.id}${basePath === '/' ? '' : basePath}`
    }));

    // 添加 x-default
    const defaultLanguage = languages.find(lang => lang.default);
    if (defaultLanguage) {
        hrefLangLinks.push({
            hrefLang: 'x-default',
            href: `${baseUrl}${basePath === '/' ? '' : basePath}`
        });
    }

    return hrefLangLinks;
}

/**
 * 生成多語言結構化資料
 */
export function generateMultilingualStructuredData(
    languages: Language[],
    currentLocale: string,
    currentUrl: string
) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "inLanguage": currentLocale,
        "url": currentUrl,
        "availableLanguage": languages.map(lang => ({
            "@type": "Language",
            "name": lang.title,
            "alternateName": lang.native,
            "identifier": lang.id
        }))
    };
}


