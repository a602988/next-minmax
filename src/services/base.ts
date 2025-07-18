/* 基礎 API 服務類 */

export interface ApiConfig {
  baseUrl: string;
  defaultParams?: Record<string, string>;
}

export class BaseApiService {
  /** API 配置對象 */
  protected config: ApiConfig;

  // 建構函數
  constructor(config: ApiConfig) {
    this.config = config;
  }

  protected async fetchApi<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const url = new URL(endpoint, this.config.baseUrl);

    // 添加默認參數（如 project、language 等）
    if (this.config.defaultParams) {
      Object.entries(this.config.defaultParams).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    // 添加其他參數
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    // 發送 HTTP GET 請求
    const response = await fetch(url.toString());

    // 檢查響應狀態，如果不成功則拋出錯誤
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json();
  }
}
