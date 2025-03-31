/**
 * @component LanguageSwitcher
 * 語言切換組件，支持下拉和按鈕兩種顯示變體。
 *
 * 1. 支持語言選項的動態加載和本地化。
 * 2. 提供鍵盤導航和無障礙支持。
 * 3. 支持顯示國旗圖標。
 * 4. 提供加載和錯誤狀態的反饋。
 * 5. 提供下拉式介面與清單介面。
 */

'use client';

import { usePathname } from 'next/navigation';
import {
  useTransition,
  useState,
  useEffect,
  useRef,
  KeyboardEvent,
  useCallback,
  useMemo
} from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing'; // 使用 next-intl 的 Link 組件
import { routing } from '@/i18n/routing';
import styles from './LanguageSwitcher.module.css';
import defaultLanguages from '@/data/json/defaultLanguages.json';
import API_ENDPOINTS from '@/services/api/clients/minmax/apiConfig';
import { apiClientMinmax } from '@/services/api/clients/minmax/apiClient';
import { isApiError } from '@/services/api/core/ApiError';
// 定義 API 返回的語言選項類型
interface LanguageOption {
  id: string;        // 語言代碼，如 'zh-TW'
  title: string;     // 顯示名稱，如 '中文(繁體)'
  native: string;    // 本地名稱縮寫，如 'TW'
  icon: string;      // 圖標類名，如 'flag-icon-tw'
  default: boolean;  // 是否為預設語言
  current: boolean;  // 是否為當前語言
}

interface LanguageApiResponse {
  code: string;
  message: string;
  data: LanguageOption[];
}

/**
 * 自定義 Hook：負責從 API 或備用資料中抓取語言選項
 */
function useLanguageOptions(apiUrlKey: keyof typeof API_ENDPOINTS, locale: string) {
  const [languageOptions, setLanguageOptions] = useState<LanguageOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController(); // 初始化 AbortController
    const fetchLanguages = async () => {
      try {
        setIsLoading(true);

        // 構建完整的 API 請求 URL

        // 使用 minmaxApiClient 來獲取語言選項，啟用緩存和中止控制器
        const result: LanguageApiResponse = await apiClientMinmax<LanguageApiResponse>(apiUrlKey, {
          params: { language: locale },
          useCache: true, // 啟用緩存
          cacheTTL: 300, // 緩存時間（秒）
          useAbortController: true, // 開啟
          signal: controller.signal, // 傳入 signal
        });

        if (result.code === '0000') {
          // 更新當前語言標記
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

    // 清理函數，在組件卸載時取消請求
    return () => {
      controller.abort(); // ✅ 組件 unmount 時取消請求
    };

  }, [apiUrlKey, locale]);

  return { languageOptions, isLoading, error };
}

export default function LanguageSwitcher({
                                           variant = 'dropdown',
                                           showFlags = true,
                                           className = '',
                                             apiUrl = 'LANGUAGES',
                                         }: {
  variant?: 'dropdown' | 'buttons';
  showFlags?: boolean;
  className?: string;
  apiUrl?: keyof typeof API_ENDPOINTS;  // Update the type to match the expected keys
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  const { languageOptions, isLoading, error } = useLanguageOptions(apiUrl, locale);

  // 計算不含語言前綴的路徑
  const pathnameWithoutLocale = useMemo(() => {
    const regex = new RegExp(`^/(${routing.locales.join('|')})`);
    return pathname.replace(regex, '') || '/';
  }, [pathname]);

  // 取得當前語言
  const currentLanguage = useMemo(() => {
    return (
        languageOptions.find(option => option.current) ||
        languageOptions.find(option => option.default) ||
        (languageOptions.length > 0 ? languageOptions[0] : null)
    );
  }, [languageOptions]);

  // 處理語言切換，使用 useCallback 避免重複創建
  const handleLanguageChange = useCallback(
      (newLocale: string) => {
        setIsOpen(false);
        if (newLocale === locale) return;
        startTransition(() => {
          // 實際的導航由 Link 組件處理，此處僅作標記
          console.log(`切換語言: ${locale} -> ${newLocale}, 路徑: ${pathnameWithoutLocale}`);
        });
      },
      [locale, pathnameWithoutLocale, startTransition]
  );

  // 處理鍵盤導航
  const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLButtonElement | HTMLDivElement | HTMLUListElement>) => {
        if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
          setIsOpen(true);
          e.preventDefault();
          return;
        }
        if (!isOpen) return;

        switch (e.key) {
          case 'Escape':
            setIsOpen(false);
            break;
          case 'ArrowDown':
            e.preventDefault();
            setActiveIndex(prev => (prev < languageOptions.length - 1 ? prev + 1 : 0));
            break;
          case 'ArrowUp':
            e.preventDefault();
            setActiveIndex(prev => (prev > 0 ? prev - 1 : languageOptions.length - 1));
            break;
          case 'Enter':
          case ' ':
            if (activeIndex >= 0) {
              e.preventDefault();
              handleLanguageChange(languageOptions[activeIndex].id);
            }
            break;
          case 'Tab':
            if (!e.shiftKey) {
              setIsOpen(false);
            }
            break;
          default:
            break;
        }
      },
      [activeIndex, isOpen, languageOptions, handleLanguageChange]
  );

  // 每次下拉選單開關時重置活動索引
  useEffect(() => {
    setActiveIndex(-1);
  }, [isOpen]);

  // 當活動索引變化時，自動聚焦對應的選項
  useEffect(() => {
    if (isOpen && activeIndex >= 0 && optionRefs.current[activeIndex]) {
      optionRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex, isOpen]);

  // 點擊外部時關閉下拉選單
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  // 渲染國旗圖標
  const renderFlag = useCallback(
      (iconClass: string) => {
        if (!showFlags) return null;
        return <span className={`${styles.flag} ${iconClass}`} aria-hidden="true"></span>;
      },
      [showFlags]
  );

  // 載入中狀態
  if (isLoading) {
    return (
        <div className={`${styles.loading} ${className}`} role="status">
          <div className={styles.spinner} aria-hidden="true"></div>
          <span className={styles.loadingText}>載入語言選項...</span>
        </div>
    );
  }

  // 錯誤狀態（僅在無法取得任何選項時顯示）
  if (error && languageOptions.length === 0) {
    return (
        <div className={`${styles.error} ${className}`} role="alert">
          無法載入語言選項
        </div>
    );
  }

  if (languageOptions.length === 0 || !currentLanguage) {
    return null;
  }

  // 下拉選單變體
  if (variant === 'dropdown') {
    return (
        <div className={`${styles.container} ${className}`} ref={dropdownRef}>
          <button
              type="button"
              className={`${styles.dropdownButton} ${isPending ? styles.pending : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              onKeyDown={handleKeyDown}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              disabled={isPending}
              aria-label="選擇語言"
          >
          <span className="flex items-center">
            {renderFlag(currentLanguage.icon)}
            <span>{currentLanguage.title}</span>
          </span>
          </button>

          {isOpen && (
              <ul
                  className={styles.dropdown}
                  role="listbox"
                  aria-label="語言選項"
                  aria-activedescendant={
                    activeIndex >= 0 ? `language-option-${languageOptions[activeIndex].id}` : undefined
                  }
                  tabIndex={-1}
                  onKeyDown={handleKeyDown}
              >
                {languageOptions.map((option, index) => (
                    <li
                        key={option.id}
                        id={`language-option-${option.id}`}
                        className={`${styles.dropdownItem} ${
                            option.current ? styles.dropdownItemActive : ''
                        } ${activeIndex === index ? styles.dropdownItemFocused : ''}`}
                        role="option"
                        aria-selected={option.current}
                        tabIndex={-1}
                        ref={el => {
                          optionRefs.current[index] = el;
                        }}
                    >
                      <Link
                          href={pathnameWithoutLocale}
                          locale={option.id}
                          onClick={() => handleLanguageChange(option.id)}
                          className="block w-full h-full"
                          lang={option.id}
                          hrefLang={option.id}
                          title={`切換至${option.title}`}
                      >
                        <div className="flex items-center">
                          {renderFlag(option.icon)}
                          <span className={option.current ? styles.itemTextActive : styles.itemText}>
                      {option.title}
                    </span>
                        </div>
                      </Link>
                    </li>
                ))}
              </ul>
          )}
        </div>
    );
  }

  // 按鈕變體
  return (
      <div className={`${styles.buttonsContainer}  ${className}`} role="group" aria-label="語言選擇">
        {languageOptions.map(option => (
            <Link
                key={option.id}
                href={pathnameWithoutLocale}
                locale={option.id}
                onClick={() => handleLanguageChange(option.id)}
                className={`${styles.variantButton} ${
                    option.current ? styles.variantButtonActive : styles.variantButtonInactive
                } ${isPending ? styles.pending : ''}`}
                aria-current={option.current ? 'true' : 'false'}
                aria-disabled={option.current ? 'true' : 'false'}
                lang={option.id}
                hrefLang={option.id}
                title={`切換至${option.title}`}
            >
              {renderFlag(option.icon)}
              <span>{option.title}</span>
            </Link>
        ))}
      </div>
  );
}
