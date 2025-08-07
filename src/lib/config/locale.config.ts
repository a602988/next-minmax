import { routing } from '@/i18n/routing';
import { env } from '../../env.mjs';

/**
 * 語系統一配置
 * 整合所有語系相關的設定
 */
export const LOCALE_CONFIG = {
    // 基本語系設定
    SUPPORTED_LOCALES: routing.locales,
    DEFAULT_LOCALE: routing.defaultLocale || env.DEFAULT_LANGUAGE,
    FALLBACK_LOCALE: 'zh-TW',

    // 國家與子網域映射
    COUNTRY_SUBDOMAIN_MAP: JSON.parse(env.COUNTRY_SUBDOMAIN_MAP),

    // 語系偵測設定
    DETECTION: {
        ENABLED: env.ENABLE_MULTI_LANGUAGE,
        STRATEGY: process.env.NEXT_PUBLIC_GEO_DETECTION_STRATEGY || 'api-only',
        CACHE_TTL: 3600, // 1小時
    },

    // 語系驗證函數
    isValidLocale: (locale: string): locale is typeof routing.locales[number] => {
        return routing.locales.includes(locale as typeof routing.locales[number]);
    },

    // 取得語系對應的子網域
    getSubdomainByCountry: (country: string): string | null => {
        const map = JSON.parse(env.COUNTRY_SUBDOMAIN_MAP);
        return map[country] || null;
    }
} as const;

export type SupportedLocale = typeof LOCALE_CONFIG.SUPPORTED_LOCALES[number];