import { BaseApiService } from './base/api-service.base';
import { apiConfig } from '@/config/api.config';
import { env } from '@/env.mjs';

// 國家語系對照表
export interface CountryLocaleMapping {
    [countryCode: string]: string; // 例如: { "TW": "zh-TW", "US": "en-US" }
}

/**
 * 國家語系對應服務 - 抽象化 API 呼叫
 * - 不重複 env：基底類別負責超時與 baseUrl 邏輯
 * - 本類別只決定端點 path 與成功日誌格式
 */
class LocalesService extends BaseApiService {
    constructor() {
        super('國家語系對應');
    }

    /**
     * 取得國家語系對照表
     */
    async getLocales(): Promise<CountryLocaleMapping> {
        const endpoint = {
            mock: apiConfig.endpoints.locales,
            external: apiConfig.endpoints.locales,
        };

        const data = await this.apiRequest<CountryLocaleMapping>(endpoint);

        if (env.API_LOGGING_ENABLED) {
            console.log(`✅ ${this.serviceName}資料載入成功:`, Object.keys(data).length, '個國家對照');
        }

        return data;
    }

    /**
     * 根據國家代碼取得對應語系
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
}

export const localesService = new LocalesService();