import { routing } from '@/i18n/routing';

/**
 * 移除路徑中的語系前綴，取得基底路徑
 * @param pathname - 當前路徑 (例如: /en/about 或 /about)
 * @returns 不含語系前綴的基底路徑 (例如: /about)
 */
export function getBasePathWithoutLocale(pathname: string): string {
    const parts = pathname.split('/').filter(Boolean);
    const first = parts[0];

    // 檢查第一段是否為支援的語系
    const hasLocalePrefix = !!first && routing.locales.includes(first as any);

    // 移除語系前綴
    const withoutLocale = hasLocalePrefix ? parts.slice(1) : parts;
    const path = `/${withoutLocale.join('/')}`;

    return path === '' ? '/' : path;
}

/**
 * 檢查路徑是否包含語系前綴
 * @param pathname - 當前路徑
 * @returns 是否包含語系前綴
 */
export function hasLocalePrefix(pathname: string): boolean {
    const parts = pathname.split('/').filter(Boolean);
    const first = parts[0];
    return !!first && routing.locales.includes(first as any);
}

/**
 * 將查詢參數附加到路徑上
 * @param path - 基底路徑
 * @param searchParams - URLSearchParams 物件
 * @returns 包含查詢參數的完整路徑
 */
export function appendSearchParams(path: string, searchParams?: URLSearchParams | null): string {
    const qsString = searchParams?.toString();
    return qsString ? `${path}?${qsString}` : path;
}

/**
 * 為語系切換器準備 href
 * 整合路徑處理和查詢參數邏輯
 * @param pathname - 當前路徑
 * @param searchParams - 查詢參數
 * @returns 處理後的 href
 */
export function prepareLanguageSwitcherHref(pathname: string, searchParams?: URLSearchParams | null): string {
    const basePath = getBasePathWithoutLocale(pathname);
    return appendSearchParams(basePath, searchParams);
}