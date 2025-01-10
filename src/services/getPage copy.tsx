import { API_ENDPOINTS } from '@/config/apiConfig';
import { PageType } from '@/types/pageType';
import { getApi } from './getApi';

interface ApiResponse {
  web_data: PageType;
}

export async function getPage(): Promise<PageType> {
  const response: ApiResponse = await getApi<ApiResponse>(API_ENDPOINTS.PAGE);
  return response.web_data;
}
