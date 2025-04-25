import { useState, useEffect } from 'react';
import { apiClientMinmax } from '@/services/minmax/api/apiClient';
import { loadFallbackData } from '@/services/fallback/fallbackDataJsonLoader';
import { ApiResponse } from '@/services/minmax/types/api';
import { handleApiError } from '@/services/core/ApiError';
import { handleMinmaxApiResponse } from '@/services/minmax/utils/apiResponseHandler';
import { WebData } from '@/services/minmax/types/webData';

// 定義最大重試次數和重試延遲時間
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 秒



export function useWebData(locale: string) {
  const [webData, setWebData] = useState<WebData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let retryCount = 0;

    const fetchWebData = async () => {
      try {
        setIsLoading(true);

        const result = await apiClientMinmax<ApiResponse<WebData>>('WEB_DATA', {
          params: { language: locale },
          useCache: true,
          cacheTTL: 300,
          useAbortController: true,
          signal: controller.signal,
        });

        handleMinmaxApiResponse(result, (data) => {
          setWebData(data);
          setError(null);
        });

      } catch (err: unknown) {
        const errorMessage = handleApiError(err);
        console.error('API 獲取網站數據失敗:', errorMessage);

        if (retryCount < MAX_RETRIES) {
          retryCount++;
          console.log(`重試 (${retryCount}/${MAX_RETRIES})...`);
          setTimeout(fetchWebData, RETRY_DELAY);
          return;
        }

        setError(errorMessage);

        try {
          const fileName = locale === 'default' ? 'defaultWebData' : `defaultWebData_${locale}`;
          const fallbackData = await loadFallbackData<WebData>(fileName);

          if (fallbackData) {
            setWebData(fallbackData);
            setError(null);
          } else {
            setWebData(null);
          }
        } catch (fallbackError) {
          console.error(`加載回退數據失敗:`, fallbackError);
          setWebData(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    void fetchWebData();

    return () => {
      controller.abort();
    };
  }, [locale]);

  return { webData, isLoading, error };
}
