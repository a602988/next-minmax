import { LanguagesResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://v5.jeffy.test';
const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME || 'minmax2025';

export class ApiService {
  private static async fetchApi<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
    const url = new URL(endpoint, API_BASE_URL);

    // 添加基本參數
    url.searchParams.append('project', PROJECT_NAME);

    // 添加其他參數
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json();
  }

  static async getLanguages(currentLanguage: string = 'zh-TW'): Promise<LanguagesResponse> {
    return this.fetchApi<LanguagesResponse>('/api/ssr/languages', {
      language: currentLanguage
    });
  }
}
