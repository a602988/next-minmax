import { env } from '@/env.mjs';

/**
 * API 應用配置（只保留業務邏輯）
 * - 不鏡射 env 值；需要時於此集中處理條件/轉換/群組
 * - 命名使用小寫（camelCase）
 */




export const apiConfig = {
    // 衍生：根據是否使用 Mock 選擇實際 baseUrl
    baseUrl: env.NEXT_PUBLIC_USE_MOCK_API ? env.NEXT_PUBLIC_API_BASE_URL : env.API_BASE_URL,

    // 衍生：根據是否使用 Mock 切換端點路徑
    endpoints: env.NEXT_PUBLIC_USE_MOCK_API
        ? {
            language: 'languages',
            locales: 'locales',
            systemMenus: 'system-menus',
            webData: 'web-data',
            detail: 'detail',
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
        api: env.NEXT_PUBLIC_API_TIMEOUT,
        content: env.NEXT_PUBLIC_CONTENT_API_TIMEOUT,
        geo: env.NEXT_PUBLIC_GEO_API_TIMEOUT,
    },

    // 業務常數：重試策略（如需環境化，於此處加衍生邏輯）
    retry: {
        attempts: 3,
        delay: 1000,
        exponentialBackoff: true,
    },

    // 業務判斷：是否模擬延遲/錯誤與相關參數
    shouldSimulateDelay: () => env.NEXT_PUBLIC_USE_MOCK_API && env.NEXT_PUBLIC_MOCK_API_DELAY > 0,
    getMockDelay: () => env.NEXT_PUBLIC_MOCK_API_DELAY,
    shouldSimulateError: () => env.NEXT_PUBLIC_MOCK_ERROR_ENABLED && Math.random() < env.NEXT_PUBLIC_MOCK_ERROR_RATE,
} as const;

export type ApiConfig = typeof apiConfig;