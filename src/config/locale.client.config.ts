import { env } from '@/env.mjs';

/**
 * 客戶端語系配置（僅保留業務邏輯）
 * 原則：
 * - 不重複 env.mjs，原始值在使用處直接讀 env.NEXT_PUBLIC_*
 * - 只做必要的衍生/工具，命名用小寫（camelCase）
 */
export const clientLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: env.NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l) => l.trim()),

    // 工具：驗證語系是否被支援（使用衍生 supportedLocales）
    isValidLocale: (locale: string): boolean => {
        return clientLocaleConfig.supportedLocales.includes(locale);
    },
} as const;

export type ClientLocaleConfig = typeof clientLocaleConfig;
