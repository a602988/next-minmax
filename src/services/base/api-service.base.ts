import { API_CONFIG } from '@/config';

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
     * @returns Promise<T>
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
                ...(API_CONFIG.USE_MOCK ? {} : {
                    signal: AbortSignal.timeout(API_CONFIG.TIMEOUT.DEFAULT)
                }),
                ...options,
            });

            if (!response.ok) {
                throw new Error(`${this.serviceName} API 請求失敗: ${response.status} ${response.statusText}`);
            }

            const apiResponse = await response.json();

            // 處理 API 回應格式 { code, message, data }
            const data = apiResponse.data || apiResponse; // 兼容不同的回應格式

            this.logSuccess(data);

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
        if (API_CONFIG.USE_MOCK) {
            // Mock API - 使用內部 Next.js API Routes
            return `${API_CONFIG.BASE_URL}${endpoint.mock}`;
        } else {
            // 正式 API - 使用外部後端 API
            return `${API_CONFIG.EXTERNAL_BASE_URL}${endpoint.external}`;
        }
    }

    /**
     * 記錄 API 呼叫日誌
     */
    protected logApiCall(url: string): void {
        console.log(`🌐 ${this.serviceName} API 呼叫: ${url} (Mock: ${API_CONFIG.USE_MOCK})`);
    }

    /**
     * 記錄成功日誌 - 子類別可以覆寫自定義格式
     */
    protected logSuccess(data: any): void {
        if (API_CONFIG.LOGGING) {
            console.log(`✅ ${this.serviceName}資料載入成功`);
        }
    }

    /**
     * 記錄錯誤日誌
     */
    protected logError(error: any): void {
        console.error(`❌ ${this.serviceName} API 呼叫失敗:`, error);
    }
}