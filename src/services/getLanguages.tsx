// 語系資料撈取

import { API_ENDPOINTS } from '@/config/apiConfig';
import { LanguageType } from '@/types/LanguageType';
import { getApi } from './getApi';

export async function getLanguages(params?: Record<string, string>): Promise<Array<LanguageType>> {
  return getApi<Array<LanguageType>>(API_ENDPOINTS.LANGUAGES, params);
}
