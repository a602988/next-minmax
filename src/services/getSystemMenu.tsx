import { API_ENDPOINTS } from '@/config/apiConfig';
import systemMenusJson from '@/data/system-menus.json';
import { SystemMenuType } from '@/types/systemMenuType';
import { getApi } from './getApi';

export async function getSystemMenu(
  dataSource?: 'json' | 'api'
): Promise<Array<SystemMenuType>> {
  // 如果沒有提供 dataSource，則從環境變量或配置中獲取
  const source = dataSource || process.env.NEXT_PUBLIC_DATA_SOURCE || 'api';

  if (source === 'json') {
    // 從 JSON 文件中讀取數據
    return systemMenusJson as Array<SystemMenuType>;
  } else {
    // 從 API 獲取數據
    return getApi<Array<SystemMenuType>>(API_ENDPOINTS.MENUS);
  }
}
