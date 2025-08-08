import { routing } from '@/i18n/routing';
import { env } from '@/env.mjs';

/**
 * 語系統一配置
 * 整合所有語系相關的設定
 */
export const LOCALE_CONFIG = {
    // 基本語系設定
    SUPPORTED_LOCALES: routing.locales, // 支援的語系清單 (來自 routing)
    DEFAULT_LOCALE: routing.defaultLocale || env.DEFAULT_LANGUAGE, // 預設語系
    FALLBACK_LOCALE: 'zh-TW' as const, // 備援語系

    // 前端語系配置
    CLIENT_DEFAULT_LOCALE: env.NEXT_PUBLIC_DEFAULT_LOCALE, // 前端預設語系
    MULTI_LANGUAGE_ENABLED: env.NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED, // 前端多語系功能開關

    // 國家與子網域映射
    COUNTRY_SUBDOMAIN_MAP: JSON.parse(env.COUNTRY_SUBDOMAIN_MAP), // 國家子網域對應表

    // 語系偵測設定
    DETECTION: {
        ENABLED: env.MULTI_LANGUAGE_ENABLED, // 多語系偵測功能開關
        GEO_ENABLED: env.GEO_DETECTION_ENABLED, // IP 地理偵測功能開關
        STRATEGY: env.NEXT_PUBLIC_GEO_DETECTION_STRATEGY, // 地理位置偵測策略
        REDIRECT_MODE: env.NEXT_PUBLIC_GEO_REDIRECT_MODE, // 地理重導模式
        CDN_HEADER: env.NEXT_PUBLIC_CDN_COUNTRY_HEADER, // CDN 國家標頭名稱
        CACHE_TTL: 3600, // 語系偵測快取時間 (秒) - 1小時
    },

    // 快取配置
    CACHE: {
        STRATEGY: env.I18N_CACHE_STRATEGY, // 國際化快取策略
        TTL: 3600, // 語系資料快取時間 (秒) - 1小時
    },

    // 語系驗證函數：檢查語系是否為支援的語系
    isValidLocale: (locale: string): locale is typeof routing.locales[number] => {
        return routing.locales.includes(locale as typeof routing.locales[number]);
    },

    // 取得國家對應的子網域：根據國家代碼取得對應的子網域
    getSubdomainByCountry: (country: string): string | null => {
        const map = JSON.parse(env.COUNTRY_SUBDOMAIN_MAP);
        return map[country] || null;
    },

} as const;

export type SupportedLocale = typeof LOCALE_CONFIG.SUPPORTED_LOCALES[number];