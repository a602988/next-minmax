/**
 * @interface FetchOptions
 * 定義 HTTP 請求的選項。
 *
 * @property {Record<string, string>} [params] - 查詢參數。
 * @property {number} [retries] - 請求的重試次數。
 * @property {number} [timeout] - 請求的超時時間（毫秒）。
 * @property {string} [cacheKey] - 緩存鍵，用於識別緩存的響應。
 * @property {boolean} [useCache] - 是否使用緩存。
 * @property {number} [cacheTTL] - 緩存的存活時間（秒）。
 * @property {boolean} [skipAuthRefresh] - 是否跳過身份驗證刷新。
 * @property {boolean} [useInterceptors] - 是否使用攔截器。
 * @property {boolean} [useAbortController] - 是否使用中止控制器。
 */

import { withTimeout } from '../core/withTimeout';
import { applyRequestInterceptors } from '../interceptors/requestInterceptor';
import { applyResponseInterceptors } from '../interceptors/responseInterceptor';
import { getCached, setCached } from '../core/cache';


export interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
  retries?: number;
  timeout?: number;
  cacheKey?: string;
  useCache?: boolean;
  cacheTTL?: number;
  skipAuthRefresh?: boolean;
  useInterceptors?: boolean;
  useAbortController?: boolean;
}

/**
 * @function httpClient
 * 通用的 HTTP 客戶端，用於發送 HTTP 請求，支持緩存、重試、攔截器和超時控制。
 *
 * @template T - 預期的響應類型。
 * @param {string} url - 請求的 URL。
 * @param {FetchOptions} [options={}] - 請求的選項。
 * @returns {Promise<T>} - 返回一個 Promise，解析為請求的響應。
 */
export async function httpClient<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const {
    retries = 0,
    timeout = 10000,
    cacheKey,
    useCache = false,
    cacheTTL = 60,
    skipAuthRefresh = false,
    useInterceptors = true,
    useAbortController = true,
    ...fetchOptions
  } = options;

  // 檢查並返回緩存的響應
  if (useCache && cacheKey) {
    const cached = getCached<T>(cacheKey);
    if (cached) return cached;
  }

  // 設置中止控制器
  let controller: AbortController | undefined;
  if (useAbortController) {
    controller = new AbortController();
    fetchOptions.signal = controller.signal;
  }

  // 構建最終的請求選項
  let finalOptions: RequestInit = {
    ...fetchOptions,
    method: (fetchOptions.method || 'GET').toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
  };

  // 將非 GET 請求的 body 轉換為 JSON 字符串
  if (
    finalOptions.method !== 'GET' &&
    fetchOptions.body &&
    typeof fetchOptions.body !== 'string'
  ) {
    finalOptions.body = JSON.stringify(fetchOptions.body);
  }

  // 應用請求攔截器
  if (useInterceptors) {
    finalOptions = applyRequestInterceptors(finalOptions);
  }

  // 定義 fetch 請求的調用
  const fetchCall = async (): Promise<T> => {
    try {
      const response = useAbortController
        ? await withTimeout(fetch(url, finalOptions), timeout, controller as AbortController)
        : await fetch(url, finalOptions);

      const data = useInterceptors
        ? await applyResponseInterceptors<T>(response, skipAuthRefresh)
        : await response.json();

      // 緩存響應數據
      if (useCache && cacheKey) {
        setCached(cacheKey, data, cacheTTL);
      }

      return data;
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        throw { status: 408, message: 'Request timed out' };
      }
      throw error;
    }
  };

  // 定義重試邏輯
  const retry = async (fn: () => Promise<T>, attempts: number): Promise<T> => {
    try {
      return await fn();
    } catch (e) {
      if (attempts <= 0) throw e;
      return retry(fn, attempts - 1);
    }
  };

  // 根據重試次數調用 fetch
  return retries > 0 ? retry(fetchCall, retries) : fetchCall();
}
