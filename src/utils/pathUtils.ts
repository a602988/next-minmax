import { routing } from "@/i18n/routing";

/**
 * 根據給定的語言代碼生成完整的路徑。
 * 
 * 此函數用於處理多語言路由邏輯。如果給定的語言是默認語言，
 * 則返回根路徑 '/'；否則，返回以語言代碼為前綴的路徑。
 *
 * @param {string} locale - 語言代碼（例如 'en', 'zh-TW'）
 * @returns {string} 生成的完整路徑
 * 
 * @example
 * getFullPath('en') // 返回 '/en'
 * getFullPath('zh-TW') // 如果 'zh-TW' 是默認語言，返回 '/'；否則返回 '/zh-TW'
 */
export function getFullPath(locale: string): string {
    return locale === routing.defaultLocale ? '/' : `/${locale}`;
}

/**
 * 從給定的路徑中移除語言前綴。
 * 
 * 此函數用於處理多語言路由中的路徑規範化。它會根據給定的語言代碼
 * 和路徑，移除路徑開頭的語言部分（如果存在）。
 *
 * @param {string} locale - 當前語言代碼
 * @param {string} path - 需要處理的完整路徑
 * @returns {string} 處理後的路徑，不包含語言前綴
 * 
 * @example
 * removeLocaleFromPath('en', '/en/about') // 返回 '/about'
 * removeLocaleFromPath('zh-TW', '/zh-TW/contact') // 返回 '/contact'
 * removeLocaleFromPath('en', '/about') // 返回 '/about'
 * removeLocaleFromPath('en', '/') // 返回 '/'
 */
export function removeLocaleFromPath(locale: string, path: string): string {
    // 如果是默認語言或根路徑，直接返回 '/'
    if (locale === routing.defaultLocale || path === '/') {
        return '/';
    }

    // 移除路徑開頭的語言部分
    const pathWithoutLocale = path.replace(new RegExp(`^/${locale}`), '');

    // 如果移除語言後路徑為空，返回 '/'，否則返回處理後的路徑
    return pathWithoutLocale || '/';
}
