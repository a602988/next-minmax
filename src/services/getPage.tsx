import { API_ENDPOINTS } from '@/config/apiConfig';
import dataJson from '@/data/page.json';
import { PageType } from '@/types/pageType';
import { getApi } from './getApi';

export async function getPage(
  dataSource?: 'json' | 'api'
): Promise<PageType[]> {
  // 如果沒有提供 dataSource，則從環境變量或配置中獲取
  const source = dataSource || process.env.NEXT_PUBLIC_DATA_SOURCE || 'api';

  if (source === 'json') {
    // 從 JSON 文件中讀取數據
    return dataJson as Array<PageType>;
  } else {
    // 從 API 獲取數據
    const response = await getApi<PageType>(API_ENDPOINTS.PAGE);
    return response.data;
  }
}