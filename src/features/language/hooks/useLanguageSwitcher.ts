'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import type { Language } from '@/types';

/**
 * 語言切換器相關資料的自定義 Hook
 */
export function useLanguageSwitcher() {
    // 取得當前路徑，用於生成語言切換連結
    const pathname = usePathname() || '/';
    // 取得當前語系
    const currentLocale = useLocale();
    // 取得 URL 查詢參數，用於保持切換語言時的參數
    const searchParams = useSearchParams();

    // 語言列表狀態
    const [languages, setLanguages] = useState<Language[]>([]);
    // 載入狀態
    const [isLoading, setIsLoading] = useState(true);
    // 錯誤狀態
    const [error, setError] = useState<string | null>(null);

    // 載入語言列表
    useEffect(() => {
        let isMounted = true;

        const loadLanguages = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // 使用客戶端 API 路由來獲取語言列表
                const response = await fetch('/api/languages');
                if (!response.ok) {
                    throw new Error('Failed to fetch languages');
                }
                const languageList = await response.json();

                if (isMounted) {
                    setLanguages(languageList);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : '載入語言列表失敗');
                    console.error('Failed to load languages:', err);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        loadLanguages();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        pathname,
        currentLocale,
        searchParams,
        languages,
        isLoading,
        error,
    };
}