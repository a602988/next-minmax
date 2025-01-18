/**
 * pageService.ts
 *
 * 主要功能：
 * 1. 從API獲取頁面數據
 * 2. 驗證API響應的結構和內容
 * 3. 處理可能出現的錯誤情況
 * 4. 返回處理後的頁面數據
 * 5. 實現緩存策略，支持增量靜態再生成（ISR）
 * 6. 提供超時機制，確保請求不會無限期等待
 * 7. 實現內容安全策略（CSP）頭部設置
 * 8. 支持自定義錯誤處理
 * 9. 提供 URL 編碼以確保路徑參數的正確傳遞
 */

import { ApiResponse, PageType } from "@/types/pageType";

interface CacheOptions {
  revalidate?: number;
  tags?: Array<string>;
}
// 錯誤處理選項
interface ErrorHandlingOptions {
  onError?(): void;
}

// 默認的錯誤處理函數
function defaultErrorHandler(error: Error): void {
  console.error("Failed to fetch page data:", error);
}

export async function getPageData(
    path: string,
    cacheOptions: CacheOptions = {},
    errorOptions: ErrorHandlingOptions = {}
): Promise<PageType> {
  try {
    const apiUrl = process.env.API_URL;
    // 檢查API
    if (!apiUrl) {
      throw new Error("API URL is not defined");
    }

    const { revalidate = 3600, tags = ['page-data'] } = cacheOptions;
    // 創建一個新的AbortController實例
    const controller = new AbortController();
    // 設置一個5秒的超時
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5秒超時

    const response = await fetch(
        `${apiUrl}/page?path=${encodeURIComponent(path)}`,
        {
          next: {
            revalidate,
            tags,
          },
          signal: controller.signal,// 用於取消請求
          headers: {
            'Content-Security-Policy': "default-src 'self'",// 設置CSP標頭
          },
        }
    );

    clearTimeout(timeoutId);

    // 檢查HTTP響應狀態
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 解析API響應
    const apiResponse: ApiResponse = await response.json();

    // 驗證API響應的數據結構
    if (!isValidApiResponse(apiResponse)) {
      throw new Error("Invalid response data structure");
    }

    // 檢查API響應代碼
    if (apiResponse.code !== "0000") {
      throw new Error(`Invalid response code: ${apiResponse.code}`);
    }

    // 確保返回了頁面數據
    if (!apiResponse.data || apiResponse.data.length === 0) {
      throw new Error("No page data returned");
    }

    // 返回數組中的第一個（也是唯一的）元素
    return apiResponse.data[0];
  } catch (error) {
    // 使用提供的錯誤處理函數或默認的錯誤處理函數
    const handleError = errorOptions.onError || defaultErrorHandler;
    handleError(error instanceof Error ? error : new Error(String(error)));
    throw error;
  }
}

// 驗證API響應結構的輔助函數
function isValidApiResponse(data: any): data is ApiResponse {
  return (
      typeof data === "object" &&
      data !== null &&
      typeof data.code === "string" &&
      typeof data.message === "string" &&
      (data.data === undefined || Array.isArray(data.data))
  );
}
