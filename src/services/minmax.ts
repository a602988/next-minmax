/* minmax API 服務 - 專門處理 v5.minmax.test 的 API */

import { BaseApiService } from './base';
import { LanguagesResponse } from '@/types';

const MINMAX_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://v5.jeffy.test',
  defaultParams: {
    project: process.env.NEXT_PUBLIC_PROJECT_NAME || 'minmax2025'
  }
};

export class MinmaxApiService extends BaseApiService {
    constructor() {
        super(MINMAX_CONFIG);
    }

    async getLanguages(currentLanguage: string = 'zh-TW'): Promise<LanguagesResponse> {
        return this.fetchApi<LanguagesResponse>('/api/ssr/languages', {
            language: currentLanguage
        });
    }

    async getWebData(language: string = 'zh-TW') {
        return this.fetchApi('/api/ssr/web-data', {
            language
        });
    }

    async getSystemMenus(language: string = 'zh-TW') {
        return this.fetchApi('/api/ssr/system-menus', {
            language
        });
    }

    async getPageDetail(language: string = 'zh-TW', uri: string, params: string = '') {
        return this.fetchApi('/api/ssr/page/detail', {
            language,
            uri,
            params
        });
    }
}
