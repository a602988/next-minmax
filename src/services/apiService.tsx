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
export async function fetchApi<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) throw new Error('NEXT_PUBLIC_API_URL is not defined');

  const url = new URL(`${apiUrl}/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const response = await fetch(url.toString());
  if (!response.ok) throw new ApiError(response.status, `HTTP Error: ${response.status}`);

  const { code, data, message } = await response.json();
  if (code !== API_SUCCESS_CODE) throw new ApiError(response.status, `API Error: ${message}`);

  return data;
}
