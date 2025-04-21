import { apiClientMinmax } from '@/services/minmax/api/apiClient';
import { loadFallbackData, isFallbackEnabled } from '@/services/fallback/fallbackDataJsonLoader';
import { useState, useEffect } from 'react';
import { LanguageOption } from '@/services/minmax/types/language';
import { ApiResponse } from '@/services/minmax/types/api';
import { handleApiError, createApiError } from '@/services/core/ApiError';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

export function useLanguageOptions(locale: string) {
  const [languageOptions, setLanguageOptions] = useState<LanguageOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let retryCount = 0;

    const fetchLanguages = async () => {
      try {
        setIsLoading(true);

        const result = await apiClientMinmax<ApiResponse<LanguageOption[]>>('LANGUAGES', {
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
          setError(null);
        } else {
          throw createApiError(400, result.message, result.code);
        }
      } catch (err: unknown) {
        const errorMessage = handleApiError(err);
        console.error('API 獲取選項失敗:', errorMessage);

        if (retryCount < MAX_RETRIES) {
          retryCount++;
          console.log(`重試 (${retryCount}/${MAX_RETRIES})...`);
          setTimeout(fetchLanguages, RETRY_DELAY);
          return;
        }

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
              setError(null);
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

    void fetchLanguages();

    return () => {
      controller.abort();
    };
  }, [locale]);

  return { languageOptions, isLoading, error };
}
