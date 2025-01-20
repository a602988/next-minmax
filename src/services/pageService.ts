/**
 * 獲取頁面數據
 * @param path - 頁面路徑
 * @param options - 可選的 API 請求選項
 * @returns 返回頁面數據或 null（如果獲取失敗）
 */

import { PageType } from "@/types/pageType";
import { FetchApiOptions, fetchApi } from "./apiService";


export async function getPageData(
    path: string,
    options: Partial<FetchApiOptions> = {}
): Promise<PageType | null> {
  // 設置默認的 API 請求選項
  const defaultOptions: Partial<FetchApiOptions> = {
    revalidate: 3600, // 默認重新驗證時間為 1 小時
    tags: ['page'], // 添加 'page' 標籤用於緩存管理
    timeout: 5000, // 設置請求超時時間為 5 秒
  };

  // 合併默認選項和用戶提供的選項
  const mergedOptions: FetchApiOptions = {
    ...defaultOptions,
    ...options,
  };

  try {
    // 發送 API 請求獲取頁面數據
    const data = await fetchApi<PageType | PageType[]>(
      `/page?path=${encodeURIComponent(path)}`,
      mergedOptions
    );

    // 處理返回的數據
    if (Array.isArray(data)) {
      // 如果返回的是數組，我們取第一個元素
      // 使用空值合併運算符 (??) 確保在 data[0] 為 undefined 或 null 時返回 null
      return data[0] ?? null;
    } else {
      // 如果返回的是單個對象，直接返回
      return data;
    }
  } catch (error) {
    // 捕獲並記錄錯誤
    // 注意：fetchApi 已經處理了基本的錯誤日誌，這裡添加額外的錯誤信息
    console.error('獲取頁面數據時發生錯誤:', error);
    // 返回 null 表示獲取失敗
    return null;
  }
}
