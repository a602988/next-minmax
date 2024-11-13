// 語系資料撈取

import { API_ENDPOINTS } from '@/config/apiConfig';
import { LanguageType } from '@/types/LanguageType';
import { fetchApi } from './apiService';

export async function fetchLanguages(params?: Record<string, string>): Promise<Array<LanguageType>> {
  return fetchApi<Array<LanguageType>>(API_ENDPOINTS.LANGUAGES, params);
}
