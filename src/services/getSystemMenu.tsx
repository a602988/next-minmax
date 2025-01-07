// 語系資料撈取

import { API_ENDPOINTS } from '@/config/apiConfig';
import systemMenusJson from '@/data/system-menus.json';
import { SystemMenuType } from '@/types/systemMenuType';
import { getApi } from './getApi';

export async function getSystemMenu(
  language: string,
  dataSource: 'api' | 'json' = 'api'
): Promise<Array<SystemMenuType>> {
  if (dataSource === 'json') {
    // 從 JSON 文件中讀取數據
    return systemMenusJson as Array<SystemMenuType>;
  } else {
    // 從 API 獲取數據
    return getApi<Array<SystemMenuType>>(API_ENDPOINTS.MENUS, { language });
  }
}
