// lib/basicApiClient.ts

/**
 * 基礎 API 請求工具（不包含快取邏輯）
 * 處理重複請求去重、錯誤處理與重試機制
 */

const inFlightRequests: Map<string, Promise<Response>> = new Map();

/**
 * 延遲工具函式
 * @param ms 延遲毫秒數
 */
function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 帶重試機制的 fetch 函式
 * @param url API URL
 * @param options fetch 選項（例如 headers、method、body 等）
 * @param retries 重試次數，預設 3 次
 * @param backoff 初始延遲時間（毫秒），預設 300
 * @returns 回傳 fetch 的 Response
 */
export async function fetchWithRetry(
    url: string,
    options: RequestInit = {},
    retries: number = 3,
    backoff: number = 300
): Promise<Response> {
    let lastError: unknown;
    for (let i = 0; i <= retries; i++) {
        try {
            const response = await fetch(url, options);
            // 若 response.ok (200～299) 或 304 (未修改) 則返回
            if (response.ok || response.status === 304) {
                return response;
            } else {
                // 4xx 錯誤通常不重試，直接返回 Response
                if (response.status >= 400 && response.status < 500) {
                    return response;
                }
                throw new Error(`伺服器錯誤: ${response.status}`);
            }
        } catch (error) {
            lastError = error;
            if (i < retries) {
                // 指數退避延遲：300ms, 600ms, 1200ms...
                await sleep(backoff * Math.pow(2, i));
            }
        }
    }
    throw lastError;
}

/**
 * 基礎 API 請求函式，包含重複請求去重機制
 * @param url API URL
 * @param options fetch 選項
 * @returns Promise<Response>
 */
export async function basicApiFetch(
    url: string,
    options: RequestInit = {}
): Promise<Response> {
    // 使用 URL 與 options 生成唯一 key
    const key = JSON.stringify({ url, options });

    if (inFlightRequests.has(key)) {
        return inFlightRequests.get(key)!;
    }

    const promise = fetchWithRetry(url, options).finally(() => {
        inFlightRequests.delete(key);
    });
    inFlightRequests.set(key, promise);
    return promise;
}
