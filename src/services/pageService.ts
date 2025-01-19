import { PageType } from "@/types/pageType";
import { FetchApiOptions, fetchApi } from "./apiService";

export async function getPageData(
    path: string,
    options: Partial<FetchApiOptions> = {}
): Promise<PageType | null> {
  const defaultOptions: Partial<FetchApiOptions> = {
    revalidate: 3600, // Default to 1 hour
    tags: ['page'],
    timeout: 5000,
  };

  const mergedOptions: FetchApiOptions = {
    ...defaultOptions,
    ...options,
  };

  try {
    const data = await fetchApi<PageType | Array<PageType>>(
      `/page?path=${encodeURIComponent(path)}`,
      mergedOptions
    );

    // 處理返回的數據
    if (Array.isArray(data)) {
      // 如果返回的是數組，我們取第一個元素
      return data[0] || null;
    } else {
      // 如果返回的是單個對象，直接返回
      return data;
    }
  } catch (error) {
    // fetchApi 已經處理了錯誤日誌和基本錯誤處理
    // 這裡我們只需要返回 null 表示獲取失敗
    return null;
  }
}
