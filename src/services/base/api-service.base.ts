import { env } from '@/env.mjs';
import { apiConfig } from '@/config/api.config';

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
     * @param endpoint 端點配置 { mock: string, external: string }
     * @param options 額外的 fetch 選項
     */
    protected async apiRequest<T>(
        endpoint: { mock: string; external: string },
        options: RequestInit = {}
    ): Promise<T> {
        const url = this.buildApiUrl(endpoint);

        try {
            this.logApiCall(url);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
                // 只有正式 API 需要超時設定
                ...(env.USE_MOCK_API
                    ? {}
                    : {
                        signal: AbortSignal.timeout(apiConfig.timeouts.api),
                    }),
                ...options,
            });

            if (!response.ok) {
                throw new Error(`${this.serviceName} API 請求失敗: ${response.status} ${response.statusText}`);
            }

            const apiResponse = await response.json();

            // 處理 API 回應格式 { code, message, data }
            const data: T = apiResponse.data ?? apiResponse;

            this.logSuccess();
            return data;
        } catch (error) {
            this.logError(error);
            throw error;
        }
    }

    /**
     * 根據環境變數建構 API 網址
     */
    private buildApiUrl(endpoint: { mock: string; external: string }): string {
        // apiConfig.baseUrl 會依 env.USE_MOCK_API 自動對應內外 base
        // 但 endpoint path 仍依 mock/external 切換
        const path = env.USE_MOCK_API ? endpoint.mock : endpoint.external;
        return `${apiConfig.baseUrl}${path}`;
    }

    /**
     * 記錄 API 呼叫日誌
     */
    protected logApiCall(url: string): void {
        console.log(`🌐 ${this.serviceName} API 呼叫: ${url} (mock: ${env.USE_MOCK_API})`);
    }

    /**
     * 記錄成功日誌 - 子類別可以覆寫自定義格式
     */
    protected logSuccess(): void {
        if (env.API_LOGGING_ENABLED) {
            console.log(`✅ ${this.serviceName} 資料載入成功`);
        }
    }

    /**
     * 記錄錯誤日誌
     */
    protected logError(error: unknown): void {
        console.error(`❌ ${this.serviceName} API 呼叫失敗:`, error);
    }
}