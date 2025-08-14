import { env } from '@/env.mjs';

/**
 * 統一配置
 * 整合所有語系相關的設定
 */

// 先計算，避免在物件內部互相參考
const SUPPORTED = env.SUPPORTED_LOCALES.split(',').map((l) => l.trim());
const CLIENT_SUPPORTED = env.NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l) => l.trim());

export const LOCALE_CONFIG = {
    // 基本語系設定
    SUPPORTED_LOCALES: SUPPORTED,// 支援的語系
    DEFAULT_LOCALE: env.DEFAULT_LANGUAGE, // 預設語系
    LOCALE_PREFIX_MODE: env.LOCALE_PREFIX_MODE,// 語系前綴
    FALLBACK_LOCALE: 'zh-TW' as const, // 備援語系

    // 前端語系配置
    CLIENT_SUPPORTED_LOCALES: CLIENT_SUPPORTED,// 支援的語系
    CLIENT_DEFAULT_LOCALE: env.NEXT_PUBLIC_DEFAULT_LOCALE, // 前端預設語系
    CLIENT_LOCALE_PREFIX_MODE: env.NEXT_PUBLIC_LOCALE_PREFIX_MODE,// 語系前綴
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
    isValidLocale: (locale: string): boolean => {
        return SUPPORTED.includes(locale);
    },


    // 取得國家對應的子網域：根據國家代碼取得對應的子網域
    getSubdomainByCountry: (country: string): string | null => {
        const map = JSON.parse(env.COUNTRY_SUBDOMAIN_MAP);
        return map[country] || null;
    }

} as const;

// 環境變數生成的清單在編譯期無法形成字面量聯集，這裡型別以 string 表示
export type SupportedLocale = string;
