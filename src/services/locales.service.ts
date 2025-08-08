import { API_CONFIG } from '@/config';

// 定義 Locales 型別 (國家語系對照表)
interface CountryLocaleMapping {
    [countryCode: string]: string; // 例如: { "TW": "zh-TW", "US": "en-US" }
}

/**
 * 地區語系服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */
class LocalesService {
    /**
     * 取得國家語系對照表
     * @returns Promise<CountryLocaleMapping>
     */
    async getLocales(): Promise<CountryLocaleMapping> {
        const url = this.buildApiUrl();

        try {
            console.log(`🌏 地區語系 API 呼叫: ${url} (Mock: ${API_CONFIG.USE_MOCK})`);

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
                throw new Error(`地區語系 API 請求失敗: ${response.status} ${response.statusText}`);
            }

            const apiResponse = await response.json();

            // 處理 API 回應格式 { code, message, data }
            const data = apiResponse.data || apiResponse; // 兼容不同的回應格式

            if (API_CONFIG.LOGGING) {
                const countryCount = Object.keys(data).length;
                console.log('✅ 地區語系資料載入成功:', countryCount, '個國家對照');
            }

            return data;
        } catch (error) {
            console.error('❌ 地區語系 API 呼叫失敗:', error);
            throw error;
        }
    }

    /**
     * 根據國家代碼取得對應語系
     * @param countryCode 國家代碼 (如 "TW", "US")
     * @returns Promise<string | null>
     */
    async getLocaleByCountry(countryCode: string): Promise<string | null> {
        try {
            const locales = await this.getLocales();
            return locales[countryCode] || null;
        } catch (error) {
            console.error(`❌ 無法取得國家 ${countryCode} 對應的語系:`, error);
            return null;
        }
    }

    /**
     * 根據環境變數建構 API 網址
     */
    private buildApiUrl(): string {
        if (API_CONFIG.USE_MOCK) {
            // Mock API - 使用內部 Next.js API Routes
            return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.MOCK.LOCALES}`;
        } else {
            // 正式 API - 使用外部後端 API
            return `${API_CONFIG.EXTERNAL_BASE_URL}${API_CONFIG.ENDPOINTS.EXTERNAL.LOCALES}`;
        }
    }
}

// 匯出單例實例
export const localesService = new LocalesService();