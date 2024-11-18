// 語系資料撈取

import { API_ENDPOINTS } from '@/config/apiConfig';
import { SystemMenuType } from '@/types/systemMenuType';
import { getApi } from './getApi';

export async function getSystemMenu(params?: Record<string, string>): Promise<Array<SystemMenuType>> {
  return getApi<Array<SystemMenuType>>(API_ENDPOINTS.MENUS, params);
}
