import { env } from '@/env.mjs';

/**
 * 客戶端應用配置（僅保留必要的業務衍生值）
 * - 直接在使用處讀 env.NEXT_PUBLIC_*，此處不重複包裝
 * - 命名使用小寫（camelCase）
 */
export const appConfig = {
    // 衍生：API 超時（毫秒），若無設定則回退 30000
    apiTimeout:
        typeof env.NEXT_PUBLIC_API_TIMEOUT === 'number'
            ? env.NEXT_PUBLIC_API_TIMEOUT
            : Number.parseInt(String(env.NEXT_PUBLIC_API_TIMEOUT ?? ''), 10) || 30000,

    // 衍生：i18n 啟用（客戶端視角）的布林正規化
    i18nEnabled:
        typeof env.NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED === 'boolean'
            ? env.NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED
            : String(env.NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED).toLowerCase() === 'true',
} as const;

export type AppClientConfig = typeof appConfig;