import { useState, useEffect } from 'react';
import API_ENDPOINTS from '@/services/api/clients/minmax/apiConfig';
import { apiClientMinmax } from '@/services/api/clients/minmax/apiClient';
import { isApiError } from '@/services/api/core/ApiError';
import defaultLanguages from '@/data/json/defaultLanguages.json';
import { LanguageOption } from '@/components/layout/LanguageSwitcher/LanguageSwitcher';

interface LanguageApiResponse {
  code: string;
  message: string;
  data: LanguageOption[];
}

/**
 * 自定義 Hook：負責從 API 或備用資料中抓取語言選項
 */
export function useLanguageOptions(apiUrlKey: keyof typeof API_ENDPOINTS, locale: string) {
  const [languageOptions, setLanguageOptions] = useState<LanguageOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchLanguages = async () => {
      try {
        setIsLoading(true);

        const result: LanguageApiResponse = await apiClientMinmax<LanguageApiResponse>(apiUrlKey, {
          params: { language: locale },
          useCache: true,
          cacheTTL: 300,
          useAbortController: true,
          signal: controller.signal,
        });

        if (result.code === '0000') {
          const updatedLanguages = result.data.map(lang => ({
            ...lang,
            current: lang.id === locale,
          }));
          setLanguageOptions(updatedLanguages);
        } else {
          throw new Error(`API 返回錯誤: ${result.message}`);
        }
      } catch (err) {
        console.error('獲取語言選項失敗:', err);
        if (isApiError(err)) {
          setError(`API 錯誤 ${err.status}：${err.message}`);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('獲取語言選項失敗');
        }
        // 當 API 失敗時，回退到預設資料
        setLanguageOptions(
          defaultLanguages.map(lang => ({
            ...lang,
            current: lang.id === locale,
          }))
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchLanguages();

    return () => {
      controller.abort();
    };
  }, [apiUrlKey, locale]);

  return { languageOptions, isLoading, error };
}
