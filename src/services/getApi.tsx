// 通用 API 處理

const API_SUCCESS_CODE = "0000";

// 自訂錯誤類
export class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// 請求函數
export async function getApi<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) throw new Error('NEXT_PUBLIC_API_URL is not defined');

  const url = new URL(`${apiUrl}/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    const errorText = await response.text();
    throw new ApiError(response.status, `HTTP Error: ${response.status}. Details: ${errorText}`);
  }

  const result = await response.json();
  if (!result || typeof result !== 'object') {
    throw new ApiError(response.status, 'Invalid API response format');
  }

  // 檢查是否有 code 字段
  if ('code' in result) {
    const { code, data, message } = result;
    if (code !== API_SUCCESS_CODE) {
      throw new ApiError(response.status, `API Error: ${message || 'Unknown error'}`);
    }
    return data as T;
  } else {
    // 如果沒有 code 字段，直接返回整個結果
    return result as T;
  }
}
