import { API_CONFIG } from '@/config';
import { BaseApiService } from './base/api-service.base';

// 定義 Locales 型別 (國家語系對照表)
interface CountryLocaleMapping {
    [countryCode: string]: string; // 例如: { "TW": "zh-TW", "US": "en-US" }
}

/**
 * 國家語系對應服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */
class LocalesService extends BaseApiService {
    constructor() {
        super('國家語系對應');
    }

    /**
     * 取得國家語系對照表
     * @returns Promise<CountryLocaleMapping>
     */
    async getLocales(): Promise<CountryLocaleMapping> {
        const endpoint = {
            mock: API_CONFIG.ENDPOINTS.MOCK.LOCALES,
            external: API_CONFIG.ENDPOINTS.EXTERNAL.LOCALES
        };

        return this.apiRequest<CountryLocaleMapping>(endpoint);
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
     * 覆寫成功日誌，顯示國家數量
     */
    protected logSuccess(data: CountryLocaleMapping): void {
        if (API_CONFIG.LOGGING) {
            const countryCount = Object.keys(data).length;
            console.log(`✅ ${this.serviceName}資料載入成功:`, countryCount, '個國家對照');
        }
    }
}

// 匯出單例實例
export const localesService = new LocalesService();