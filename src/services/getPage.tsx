import { PageType } from '@/types/pageType';
import { getApi } from './getApi';
import { API_ENDPOINTS } from '@/config/apiConfig';
import dataJson from '@/data/page.json';

export async function getPage(
  locale: string,
  slug: string,
  searchParams: URLSearchParams,
  dataSource: 'json' | 'api' = 'api'
): Promise<PageType[]> {
  try {
    if (dataSource === 'json') {
      // 確保返回一個數組
      return Array.isArray(dataJson) ? dataJson as PageType[] : [dataJson as PageType];
    } else {
      // 從 API 獲取數據
      const url = `${API_ENDPOINTS.PAGE}/${locale}/${slug}?${searchParams.toString()}`;
      const apiData = await getApi<PageType[]>(url);
      return apiData;
    }
  } catch (error) {
    console.error('Error fetching page data:', error);
    return []; // 在出錯時返回空數組
  }
}