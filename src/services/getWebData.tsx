import { API_ENDPOINTS } from '@/config/apiConfig';
import { WebDataType } from '@/types/WebDataType';
import { getApi } from './getApi';

interface ApiResponse {
  web_data: WebDataType;
}

export async function getWebData(): Promise<WebDataType> {
  const response: ApiResponse = await getApi<ApiResponse>(API_ENDPOINTS.LAYOUT);
  return response.web_data;
}
