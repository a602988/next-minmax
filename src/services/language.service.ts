import { API_CONFIG } from '@/config';
import type { Language } from '@/types';
import { BaseApiService } from './base/api-service.base';

/**
 * 支援語系服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */
class LanguageService extends BaseApiService {
    constructor() {
        super('支援語系');
    }

    /**
     * 取得支援的語系清單
     * @returns Promise<Language[]>
     */
    async getLanguages(): Promise<Language[]> {
        const endpoint = {
            mock: API_CONFIG.ENDPOINTS.MOCK.LANGUAGE,
            external: API_CONFIG.ENDPOINTS.EXTERNAL.LANGUAGE
        };

        return this.apiRequest<Language[]>(endpoint);
    }

    /**
     * 覆寫成功日誌，顯示語系數量
     */
    protected logSuccess(data: Language[]): void {
        if (API_CONFIG.LOGGING) {
            console.log(`✅ ${this.serviceName}資料載入成功:`, data.length, '個語系');
        }
    }
}

// 匯出單例實例
export const languageService = new LanguageService();