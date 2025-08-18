import type { Language } from '@/types';
import { apiConfig } from '@/config/api.config';
import { BaseApiService } from './base/api-service.base';
import { env } from '@/env.mjs';

/**
 * 支援語系服務 - 抽象化 API 呼叫
 * - 不重複 env：基底類別負責超時與 baseUrl 邏輯
 * - 本類別只決定端點 path 與成功日誌格式
 */
class LanguageService extends BaseApiService {
    constructor() {
        super('支援語系');
    }

    /**
     * 取得支援的語系清單
     */
    async getLanguages(): Promise<Language[]> {
        // 端點 path 已由 apiConfig 依 USE_MOCK_API 切換
        const endpoint = {
            mock: apiConfig.endpoints.language,
            external: apiConfig.endpoints.language,
        };

        const data = await this.apiRequest<Language[]>(endpoint);

        // 成功日誌（不覆寫 base 的 logSuccess，以避免簽名不一致）
        if (env.API_LOGGING_ENABLED) {
            console.log(`✅ ${this.serviceName}資料載入成功:`, data.length, '個語系');
        }

        return data;
    }
}

// 匯出單例實例
export const languageService = new LanguageService();