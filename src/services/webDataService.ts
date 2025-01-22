/**
 * getWebDataServiceData.ts
 *
 * 重點說明：
 * 1. 此文件提供了獲取網站數據的服務函數。
 * 2. 使用 fetchApi 函數從 API 獲取網站數據。
 * 3. 支持自定義獲取選項，如重新驗證時間和緩存標籤。
 * 4. 錯誤處理：當獲取失敗時，會記錄錯誤並返回 null。
 * 5. 支持傳入語系參數，以獲取特定語言的數據。
 */

import { WebDataType } from '@/types/webDataType';
import { FetchApiOptions, fetchApi } from "./apiService";

/**
 * 獲取網站數據
 * @param language - 語系代碼（例如：'en', 'zh-TW'）
 * @param options - 可選的 API 獲取選項
 * @returns 返回網站數據數組，如果獲取失敗則返回 null
 */
export async function getWebData(
    language: string,
    options: Partial<FetchApiOptions> = {}
): Promise<Array<WebDataType> | null> {
    // API 端點 URL
    const url = '/web-data';

    // 設置默認選項，包括緩存時間和標籤
    const defaultOptions: Partial<FetchApiOptions> = {
        tags: ['web-data'],
        language, // 將語系參數加入到選項中
        ...options // 合併自定義選項
    };

    try {
        // 使用 fetchApi 函數獲取網站數據
        return await fetchApi<Array<WebDataType>>(url, defaultOptions);
    } catch (error) {
        // 錯誤處理：記錄錯誤並返回 null
        console.error('獲取 web-data 數據失敗:', error);
        return null;
    }
}
