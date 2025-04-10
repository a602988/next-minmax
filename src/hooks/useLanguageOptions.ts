import { useState, useEffect } from 'react';
import API_ENDPOINTS from '@/services/api/clients/minmax/apiConfig';
import { apiClientMinmax } from '@/services/api/clients/minmax/apiClient';
import { isApiError, ApiError } from '@/services/api/core/ApiError';
import { loadFallbackData, isFallbackEnabled } from '@/services/fallback/fallbackDataJsonLoader';

export interface LanguageOption {
  id: string;
  title: string;
  native: string;
  default: boolean;
  current: boolean;
}

interface LanguageApiResponse {
  code: string;
  message: string;
  data: LanguageOption[];
}

export function useLanguageOptions(apiUrlKey: keyof typeof API_ENDPOINTS, locale: string) {
  const [languageOptions, setLanguageOptions] = useState<LanguageOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchLanguages = async () => {
      try {
        setIsLoading(true);

        const result = await apiClientMinmax<LanguageApiResponse>(apiUrlKey, {
          params: { language: locale },
          useCache: true,
          cacheTTL: 300,
          useAbortController: true,
          signal: controller.signal,
        });

        if (result.code === '0000') {
          const updatedLanguages: LanguageOption[] = result.data.map(lang => ({
            ...lang,
            current: lang.id === locale,
          }));
          setLanguageOptions(updatedLanguages);
        } else {
          throw new Error(`API 返回錯誤: ${result.message}`);
        }
      } catch (err: unknown) {
        console.error('獲取語言選項失敗:', err);
        if (isApiError(err)) {
          setError(`API 錯誤 ${(err as ApiError).status}：${(err as ApiError).message}`);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('獲取語言選項失敗');
        }
        
        if (isFallbackEnabled()) {
          try {
            const fileName = locale === 'default' ? 'defaultLanguages' : `defaultLanguages_${locale}`;
            const fallbackData = await loadFallbackData<LanguageOption[]>(fileName);

            if (fallbackData && fallbackData.length > 0) {
              const updatedFallbackData: LanguageOption[] = fallbackData.map(lang => ({
                ...lang,
                current: lang.id === locale,
              }));
              setLanguageOptions(updatedFallbackData);
            } else {
              setLanguageOptions([]);
            }
          } catch (fallbackError) {
            console.error(`加載回退數據失敗:`, fallbackError);
            setLanguageOptions([]);
          }
        } else {
          setLanguageOptions([]);
        }
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
