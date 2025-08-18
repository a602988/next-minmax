import { BaseApiService } from './base/api-service.base';
import { apiConfig } from '@/config/api.config';
import { devInspect, apiSuccess, apiError, devSuccess } from '@/lib/dev-logger';

// 國家語系對照表
export interface CountryLocaleMapping {
    [countryCode: string]: string;
}

/**
 * 國家語系對應服務
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

        return await this.apiRequest<CountryLocaleMapping>(endpoint);
    }

    /**
     * 覆寫成功日誌，提供業務特定的資訊
     */
    protected logSuccess(data?: unknown): void {
        // 業務日誌：使用統一的 apiSuccess 函數
        if (data && typeof data === 'object' && !Array.isArray(data)) {
            const keys = Object.keys(data);
            apiSuccess(`${this.serviceName} 資料載入成功: ${keys.length} 個國家對照`);
        } else {
            apiSuccess(`${this.serviceName} 資料載入成功`);
        }

        // 開發日誌：使用統一的 devSuccess 函數
        if (data && typeof data === 'object') {
            devSuccess(`${this.serviceName} 成功載入國家語系對照表`);

            // 開發環境的詳細檢查
            devInspect('國家語系對照表詳細資訊', {
                總數量: Object.keys(data).length,
                前5個國家: Object.keys(data).slice(0, 5),
                範例對照: Object.entries(data).slice(0, 3),
                完整資料: data
            });
        }
    }

    /**
     * 根據國家代碼取得對應語系
     */
    async getLocaleByCountry(countryCode: string): Promise<string | null> {
        try {
            const locales = await this.getLocales();
            const result = locales[countryCode] || null;

            // 開發環境記錄查詢結果
            devInspect(`國家代碼查詢: ${countryCode}`, {
                輸入: countryCode,
                結果: result,
                是否找到: !!result,
                可用國家: Object.keys(locales).slice(0, 10) // 顯示前10個可用國家
            });

            return result;
        } catch (error) {
            // 使用統一的錯誤日誌函數
            apiError(`無法取得國家 ${countryCode} 對應的語系`, {
                countryCode,
                error: error instanceof Error ? error.message : error
            });
            return null;
        }
    }
}

export const localesService = new LocalesService();