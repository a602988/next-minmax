import { env } from '@/env.mjs';

/**
 * API 應用配置（只保留業務邏輯）
 * - 不鏡射 env 值；需要時於此集中處理條件/轉換/群組
 * - 命名使用小寫（camelCase）
 */
export const apiConfig = {
    // 衍生：根據是否使用 Mock 選擇實際 baseUrl
    baseUrl: env.USE_MOCK_API ? env.NEXT_PUBLIC_API_BASE_URL : env.EXTERNAL_API_BASE_URL,

    // 衍生：根據是否使用 Mock 切換端點路徑
    endpoints: env.USE_MOCK_API
        ? {
            language: '/api/ssr/languages',
            locales: '/api/ssr/locales',
            systemMenus: '/api/ssr/system-menus',
            webData: '/api/ssr/web-data',
            detail: '/api/ssr/detail',
        }
        : {
            language: '/api/v1/languages',
            locales: '/api/v1/locales',
            systemMenus: '/api/v1/system-menus',
            webData: '/api/v1/web-data',
            detail: '/api/v1/detail',
        },

    // 群組：超時（毫秒）直接取 env，集中使用
    timeouts: {
        api: env.API_TIMEOUT,
        content: env.CONTENT_API_TIMEOUT,
        geo: env.GEO_API_TIMEOUT,
    },

    // 業務常數：重試策略（如需環境化，於此處加衍生邏輯）
    retry: {
        attempts: 3,
        delay: 1000,
        exponentialBackoff: true,
    },

    // 業務判斷：是否模擬延遲/錯誤與相關參數
    shouldSimulateDelay: () => env.USE_MOCK_API && env.MOCK_API_DELAY > 0,
    getMockDelay: () => env.MOCK_API_DELAY,
    shouldSimulateError: () => env.MOCK_ERROR_ENABLED && Math.random() < env.MOCK_ERROR_RATE,
} as const;

export type ApiConfig = typeof apiConfig;