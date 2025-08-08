import { API_CONFIG } from '@/config';
import { Language } from '@/types';

/**
 * 語系服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */
class LanguageService {
    /**
     * 取得語系清單
     * @returns Promise<Language[]>
     */
    async getLanguages(): Promise<Language[]> {
        const url = this.buildApiUrl();

        try {
            console.log(`🌍 語系 API 呼叫: ${url} (Mock: ${API_CONFIG.USE_MOCK})`);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                // 只有正式 API 需要超時設定
                ...(API_CONFIG.USE_MOCK ? {} : {
                    signal: AbortSignal.timeout(API_CONFIG.TIMEOUT.DEFAULT)
                })
            });

            if (!response.ok) {
                throw new Error(`語系 API 請求失敗: ${response.status} ${response.statusText}`);
            }

            const apiResponse = await response.json();

            // 處理 API 回應格式 { code, message, data }
            const data = apiResponse.data || apiResponse; // 兼容不同的回應格式

            if (API_CONFIG.LOGGING) {
                console.log('✅ 語系資料載入成功:', data.length, '個語系');
            }

            return data;
        } catch (error) {
            console.error('❌ 語系 API 呼叫失敗:', error);
            throw error;
        }
    }

    /**
     * 根據環境變數建構 API 網址
     */
    private buildApiUrl(): string {
        if (API_CONFIG.USE_MOCK) {
            // Mock API - 使用內部 Next.js API Routes
            return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.MOCK.LANGUAGE}`;
        } else {
            // 正式 API - 使用外部後端 API
            return `${API_CONFIG.EXTERNAL_BASE_URL}${API_CONFIG.ENDPOINTS.EXTERNAL.LANGUAGE}`;
        }
    }
}

// 匯出單例實例
export const languageService = new LanguageService();