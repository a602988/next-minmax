import { env } from '@/env.mjs';
import { apiConfig } from '@/config/api.config';
import {
    devLog,
    devWarn,
    devError,
    devDebug,
    devSuccess,
    DevTimer,
    apiLog,
    apiSuccess,
    apiError
} from '@/lib/dev-logger';

/**
 * API 服務基底類別
 * 提供通用的 API 請求處理邏輯
 */
export abstract class BaseApiService {
    protected readonly serviceName: string;

    constructor(serviceName: string) {
        this.serviceName = serviceName;
    }

    /**
     * 通用的 API 請求方法
     */
    protected async apiRequest<T>(
        endpoint: { mock: string; external: string },
        options: RequestInit = {}
    ): Promise<T> {
        const url = this.buildApiUrl(endpoint);

        // 開發環境的詳細除錯日誌
        devDebug(`開始 API 請求: ${this.serviceName}`, { url, options });

        // 效能監控（僅開發環境）
        const timer = new DevTimer(`${this.serviceName} API 請求`);

        try {
            this.logApiCall(url);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                ...(env.USE_MOCK_API
                    ? {}
                    : {
                        signal: AbortSignal.timeout(apiConfig.timeouts.api),
                    }),
                ...options,
            });

            // HTTP 狀態碼錯誤處理
            if (!response.ok) {
                const errorDetails = {
                    url,
                    status: response.status,
                    statusText: response.statusText,
                    headers: Object.fromEntries(response.headers.entries())
                };

                // 根據狀態碼決定日誌等級
                if (response.status >= 500) {
                    // 5xx 伺服器錯誤 - 使用 error 等級
                    devError(`伺服器錯誤 (${response.status}): ${this.serviceName}`, errorDetails);
                } else if (response.status >= 400) {
                    // 4xx 客戶端錯誤 - 使用 warn 等級
                    devWarn(`客戶端錯誤 (${response.status}): ${this.serviceName}`, {
                        ...errorDetails,
                        possibleCauses: this.getPossibleCauses(response.status)
                    });
                } else {
                    // 其他非 2xx 狀態碼
                    devWarn(`非預期回應 (${response.status}): ${this.serviceName}`, errorDetails);
                }

                throw new Error(`${this.serviceName} API 請求失敗: ${response.status} ${response.statusText}`);
            }

            const apiResponse = await response.json();
            const data: T = apiResponse.data ?? apiResponse;

            // 開發環境的回應資料檢查
            devDebug(`API 回應資料: ${this.serviceName}`, data);

            this.logSuccess(data);
            timer.end(); // 結束效能計時

            return data;
        } catch (error) {
            timer.end(); // 即使錯誤也要結束計時

            // 區分不同類型的錯誤
            if (error instanceof TypeError && error.message.includes('fetch')) {
                // 網路連線錯誤
                devError(`網路連線失敗: ${this.serviceName}`, {
                    url,
                    error: error.message,
                    possibleCauses: ['網路斷線', 'DNS 解析失敗', '防火牆阻擋', 'CORS 問題']
                });
            } else if (error instanceof DOMException && error.name === 'AbortError') {
                // 請求超時
                devWarn(`API 請求超時: ${this.serviceName}`, {
                    url,
                    timeout: env.USE_MOCK_API ? 'N/A' : `${apiConfig.timeouts.api}ms`,
                    suggestion: '考慮增加超時時間或檢查網路狀況'
                });
            } else if (error instanceof SyntaxError) {
                // JSON 解析錯誤
                devError(`回應格式錯誤: ${this.serviceName}`, {
                    url,
                    error: error.message,
                    suggestion: '檢查 API 回應是否為有效的 JSON 格式'
                });
            } else if (error instanceof Error && error.message.includes('API 請求失敗')) {
                // HTTP 狀態碼錯誤（已在上面處理過日誌）
                // 這裡不需要額外的開發日誌
            } else {
                // 其他未知錯誤
                devError(`未知錯誤: ${this.serviceName}`, {
                    url,
                    error,
                    stack: error instanceof Error ? error.stack : null
                });
            }

            this.logError(error);
            throw error;
        }
    }

    /**
     * 根據環境變數建構 API 網址
     */
    private buildApiUrl(endpoint: { mock: string; external: string }): string {
        const path = env.USE_MOCK_API ? endpoint.mock : endpoint.external;
        const fullUrl = `${apiConfig.baseUrl}${path}`;

        // 開發環境顯示 URL 建構過程
        devDebug(`建構 API URL: ${this.serviceName}`, {
            baseUrl: apiConfig.baseUrl,
            path,
            fullUrl,
            useMock: env.USE_MOCK_API
        });

        return fullUrl;
    }

    /**
     * 記錄 API 呼叫日誌
     */
    protected logApiCall(url: string): void {
        // 業務日誌：使用統一的 apiLog 函數
        apiLog(`${this.serviceName} API 呼叫: ${url} (mock: ${env.USE_MOCK_API})`);

        // 開發日誌：僅開發環境，提供更詳細的資訊
        devLog(`啟動 ${this.serviceName} API 請求: ${url}`);
    }

    /**
     * 記錄成功日誌
     */
    protected logSuccess(data?: unknown): void {
        // 業務日誌：使用統一的 apiSuccess 函數
        apiSuccess(`${this.serviceName} 資料載入成功`);

        // 開發日誌：僅開發環境，提供更多細節
        devSuccess(`${this.serviceName} 成功取得資料`, {
            dataType: typeof data,
            hasData: !!data,
            dataKeys: data && typeof data === 'object' ? Object.keys(data) : null
        });
    }

    /**
     * 記錄錯誤日誌
     */
    protected logError(error: unknown): void {
        // 業務日誌：使用統一的 apiError 函數（總是記錄）
        apiError(`${this.serviceName} API 呼叫失敗`, error);

        // 開發日誌：提供更詳細的錯誤資訊（僅開發環境）
        devError(`${this.serviceName} 詳細錯誤資訊`, {
            error,
            stack: error instanceof Error ? error.stack : null,
            timestamp: new Date().toISOString()
        });
    }

    /**
     * 根據 HTTP 狀態碼提供可能的原因
     */
    private getPossibleCauses(status: number): string[] {
        switch (status) {
            case 400:
                return ['請求參數錯誤', '請求格式不正確', '缺少必要參數'];
            case 401:
                return ['未授權', 'API 金鑰無效', '登入狀態過期', 'Token 失效'];
            case 403:
                return ['權限不足', '資源被禁止存取', '帳號被停用'];
            case 404:
                return ['API 端點不存在', '資源未找到', 'URL 路徑錯誤'];
            case 405:
                return ['HTTP 方法不被允許', '檢查請求方法 (GET/POST/PUT/DELETE)'];
            case 409:
                return ['資源衝突', '重複的資料', '併發更新衝突'];
            case 422:
                return ['請求格式正確但語義錯誤', '驗證失敗', '業務邏輯錯誤'];
            case 429:
                return ['請求頻率過高', '超過 API 限制', '需要等待後重試'];
            case 500:
                return ['伺服器內部錯誤', '後端程式異常', '資料庫連線問題'];
            case 502:
                return ['閘道錯誤', '上游伺服器無回應', '負載平衡器問題'];
            case 503:
                return ['服務暫時無法使用', '伺服器維護中', '系統過載'];
            case 504:
                return ['閘道超時', '上游伺服器回應太慢', '網路延遲過高'];
            default:
                return ['請檢查 API 文件', '聯絡後端開發人員', '檢查網路連線'];
        }
    }
}