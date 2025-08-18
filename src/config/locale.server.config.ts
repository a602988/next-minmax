import { env } from '@/env.mjs';

/**
 * 服務端語系配置（只保留需要的轉換與工具）
 * - 不鏡射 env 值（如 defaultLocale/localePrefixMode），在使用處直接讀 env
 * - 命名使用小寫（camelCase）
 */

export const serverLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: env.SUPPORTED_LOCALES.split(',').map((l) => l.trim()),
    // 工具：語系驗證（使用衍生 supportedLocales）
    isValidLocale: (locale: string): boolean => {
        return serverLocaleConfig.supportedLocales.includes(locale);
    },
    // 工具：取得有效的預設語系
    getValidDefaultLocale: (): string => {
        const envDefault = env.DEFAULT_LANGUAGE;
        return serverLocaleConfig.supportedLocales.includes(envDefault)
            ? envDefault
            : serverLocaleConfig.supportedLocales[0];
    },
    // 衍生：國家子網域映射
    countrySubdomainMap: JSON.parse(env.COUNTRY_SUBDOMAIN_MAP || '{}'),
    // 工具：依國家取子網域（使用衍生 countrySubdomainMap）
    getSubdomainByCountry: (country: string): string | null => {
        return serverLocaleConfig.countrySubdomainMap[country] || null;
    },
} as const;

export type ServerLocaleConfig = typeof serverLocaleConfig;