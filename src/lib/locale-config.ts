import { Language, LanguagesResponse } from '@/types';

export interface LocaleConfig {
  supportedLocales: string[];
  defaultLocale: string;
  fallbackLocale: string;
}

// 靜態配置作為後備
export const STATIC_LOCALE_CONFIG: LocaleConfig = {
  supportedLocales: ['zh-TW', 'zh-CN', 'en', 'ja'],
  defaultLocale: 'zh-TW',
  fallbackLocale: 'zh-TW'
};

// 從 API 獲取動態配置
export async function getLocaleConfig(): Promise<LocaleConfig> {
  try {
    // 嘗試從 API 獲取語系配置
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME;

      const response = await fetch(
          `${apiBaseUrl}/api/ssr/languages?project=${projectName}&language=zh-TW`,
          { next: { revalidate: 3600 } }
      );

      if (response.ok) {
          const data: LanguagesResponse = await response.json();
          if (data.code === '0000' && data.data) {
              const languages: Language[] = data.data;
              const defaultLang = languages.find((lang: Language) => lang.default);

              return {
                  supportedLocales: languages.map((lang: Language) => lang.id),
                  defaultLocale: defaultLang?.id || STATIC_LOCALE_CONFIG.defaultLocale,
                  fallbackLocale: defaultLang?.id || STATIC_LOCALE_CONFIG.fallbackLocale
              };
          }
      }
  } catch (error) {
    console.warn('Failed to fetch locale config from API, using static config:', error);
  }

  // API 失敗時使用靜態配置
  return STATIC_LOCALE_CONFIG;
}
