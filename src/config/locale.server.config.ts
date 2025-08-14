import { env } from '@/env.mjs';

/**
 * 服務端語系配置
 * 只能在服務端使用
 */
export const SERVER_LOCALE_CONFIG = {
    SUPPORTED_LOCALES: env.SUPPORTED_LOCALES.split(',').map((l) => l.trim()),
    DEFAULT_LOCALE: env.DEFAULT_LANGUAGE,
    LOCALE_PREFIX_MODE: env.LOCALE_PREFIX_MODE,
    FALLBACK_LOCALE: 'zh-TW' as const,

    DETECTION: {
        ENABLED: env.MULTI_LANGUAGE_ENABLED,
        GEO_ENABLED: env.GEO_DETECTION_ENABLED,
        CACHE_TTL: 3600,
    },

    CACHE: {
        STRATEGY: env.I18N_CACHE_STRATEGY,
        TTL: 3600,
    },

    COUNTRY_SUBDOMAIN_MAP: JSON.parse(env.COUNTRY_SUBDOMAIN_MAP),

    // 工具函數
    isValidLocale: (locale: string): boolean => {
        return env.SUPPORTED_LOCALES.split(',').map((l) => l.trim()).includes(locale);
    },

    // 服務端專用函數
    getSubdomainByCountry: (country: string): string | null => {
        const map = JSON.parse(env.COUNTRY_SUBDOMAIN_MAP);
        return map[country] || null;
    }
} as const;