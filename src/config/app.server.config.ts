import { env } from '@/env.mjs';

/**
 * 服務端應用配置層
 * 只包含真正需要業務邏輯處理的配置
 */
export const SERVER_APP_CONFIG = {
    // 國際化配置 - 數據轉換
    i18n: {
        supportedLocales: env.SUPPORTED_LOCALES.split(',').map((locale) => locale.trim()),
        countrySubdomainMap: JSON.parse(env.COUNTRY_SUBDOMAIN_MAP || '{}'),
    },

    // API 配置 - 條件邏輯
    api: {
        baseUrl: env.USE_MOCK_API ? env.NEXT_PUBLIC_API_BASE_URL : env.EXTERNAL_API_BASE_URL,
    },
} as const;

// 導出計算屬性 - 只包含真正的業務邏輯組合
export const SERVER_COMPUTED = {
    /** 是否啟用完整國際化功能（伺服端視角） */
    isI18nEnabled: () => env.INTERNATIONALIZATION_ENABLED && env.MULTI_LANGUAGE_ENABLED,

    /** 檢查是否支援特定語系 */
    isLocaleSupported: (locale: string) => SERVER_APP_CONFIG.i18n.supportedLocales.includes(locale),

    /** 是否應該模擬 API 延遲 */
    shouldSimulateDelay: () => env.USE_MOCK_API && env.MOCK_API_DELAY > 0,

    /** 是否應該模擬錯誤 */
    shouldSimulateError: () => env.MOCK_ERROR_ENABLED && Math.random() < env.MOCK_ERROR_RATE,
} as const;

export type ServerAppConfig = typeof SERVER_APP_CONFIG;