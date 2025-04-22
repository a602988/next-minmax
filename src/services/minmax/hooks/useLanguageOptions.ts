import { apiClientMinmax } from '@/services/minmax/api/apiClient';
import { loadFallbackData, isFallbackEnabled } from '@/services/fallback/fallbackDataJsonLoader';
import { useState, useEffect } from 'react';
import { LanguageOption } from '@/services/minmax/types/language';
import { ApiResponse } from '@/services/minmax/types/api';
import { handleApiError } from '@/services/core/ApiError';
import { handleMinmaxApiResponse } from '@/services/minmax/utils/apiResponseHandler';

// 定義最大重試次數和重試延遲時間
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 秒

export function useLanguageOptions(locale: string) {
  // 狀態管理：語言選項、加載狀態和錯誤信息
  const [languageOptions, setLanguageOptions] = useState<LanguageOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 創建 AbortController 用於取消請求
    const controller = new AbortController();
    let retryCount = 0;

    const fetchLanguages = async () => {
      try {
        setIsLoading(true);

        // 調用 API 獲取語言選項
        const result = await apiClientMinmax<ApiResponse<LanguageOption[]>>('LANGUAGES', {
          params: { language: locale },
          useCache: true,
          cacheTTL: 300,
          useAbortController: true,
          signal: controller.signal,
        });

        // 處理 API 響應
        handleMinmaxApiResponse(result, (data) => {
          // 更新語言選項，標記當前語言
          const updatedLanguages: LanguageOption[] = data.map(lang => ({
            ...lang,
            current: lang.id === locale,
          }));
          setLanguageOptions(updatedLanguages);
          setError(null);
        });

      } catch (err: unknown) {
        // 處理 API 錯誤
        const errorMessage = handleApiError(err);
        console.error('API 獲取選項失敗:', errorMessage);

        // 重試邏輯
        if (retryCount < MAX_RETRIES) {
          retryCount++;
          console.log(`重試 (${retryCount}/${MAX_RETRIES})...`);
          setTimeout(fetchLanguages, RETRY_DELAY);
          return;
        }

        setError(errorMessage);

        // 如果啟用了回退機制，嘗試加載回退數據
        if (isFallbackEnabled()) {
          try {
            const fileName = locale === 'default' ? 'defaultLanguages' : `defaultLanguages_${locale}`;
            const fallbackData = await loadFallbackData<LanguageOption[]>(fileName);

            if (fallbackData && fallbackData.length > 0) {
              // 更新回退數據，標記當前語言
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

    // 清理函數：取消請求
    return () => {
      controller.abort();
    };
  }, [locale]); // 依賴項：當 locale 改變時重新執行

  return { languageOptions, isLoading, error };
}
