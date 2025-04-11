import { useState, useEffect } from 'react';
import API_ENDPOINTS from '@/services/minmax/api/apiConfig';
import { apiClientMinmax } from '@/services/minmax/api/apiClient';
import { loadFallbackData, isFallbackEnabled } from '@/services/fallback/fallbackDataJsonLoader';
import { LanguageOption } from '@/services/minmax/types/language';
import { ApiResponse } from '@/services/minmax/types/api';
import { handleApiError, createApiError } from '@/services/core/ApiError';




export function useLanguageOptions(apiUrlKey: keyof typeof API_ENDPOINTS, locale: string) {
  const [languageOptions, setLanguageOptions] = useState<LanguageOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchLanguages = async () => {
      try {
        setIsLoading(true);

        const result = await apiClientMinmax<ApiResponse<LanguageOption[]>>(apiUrlKey, {
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
          throw createApiError(400, result.message, result.code);
        }
      } catch (err: unknown) {
        const errorMessage = handleApiError(err);
        console.error('API 獲取選項失敗:', errorMessage);
        setError(errorMessage);

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
