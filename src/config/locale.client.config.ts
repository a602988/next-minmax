import { env } from '@/env.mjs';

/**
 * 客戶端語系配置
 * 可以在客戶端和服務端使用
 */
export const CLIENT_LOCALE_CONFIG = {
    SUPPORTED_LOCALES: env.NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l) => l.trim()),
    DEFAULT_LOCALE: env.NEXT_PUBLIC_DEFAULT_LOCALE,
    LOCALE_PREFIX_MODE: env.NEXT_PUBLIC_LOCALE_PREFIX_MODE,
    MULTI_LANGUAGE_ENABLED: env.NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED,

    DETECTION: {
        STRATEGY: env.NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        REDIRECT_MODE: env.NEXT_PUBLIC_GEO_REDIRECT_MODE,
        CDN_HEADER: env.NEXT_PUBLIC_CDN_COUNTRY_HEADER,
    },

    // 客戶端工具函數
    isValidLocale: (locale: string): boolean => {
        return env.NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l) => l.trim()).includes(locale);
    }
} as const;