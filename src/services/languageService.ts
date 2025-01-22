/**
 * languageService.ts
 * 
 * 重點說明：
 * 1. 此文件提供了獲取語言數據的服務函數。
 * 2. 使用 fetchApi 函數從 API 獲取語言數據。
 * 3. 支持自定義獲取選項，如重新驗證時間和緩存標籤。
 * 4. 錯誤處理：當獲取失敗時，會記錄錯誤並返回 null。
 * 5. 默認緩存時間設置為 30 天，可以根據需求調整。
 */

import { LanguagesType } from '@/types/languages';
import { FetchApiOptions, fetchApi } from "./apiService";

/**
 * 獲取語言數據
 * @param options - 可選的 API 獲取選項
 * @returns 返回語言數據數組，如果獲取失敗則返回 null
 */
export async function getLanguagesData(
    options: Partial<FetchApiOptions> = {}
): Promise<Array<LanguagesType> | null> {
    // API 端點 URL
    const url = '/languages';

    // 設置默認選項，包括緩存時間和標籤
    const defaultOptions: Partial<FetchApiOptions> = {
        revalidate: 60 * 60 * 24 * 30, // 默認緩存 30 天
        tags: ['languages'],
        ...options // 合併自定義選項
    };

    try {
        // 使用 fetchApi 函數獲取語言數據
        return await fetchApi<Array<LanguagesType>>(url, defaultOptions);
    } catch (error) {
        // 錯誤處理：記錄錯誤並返回 null
        console.error('獲取語言數據失敗:', error);
        return null;
    }
}
