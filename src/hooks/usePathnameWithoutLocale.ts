import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';

/**
 * 自定義 Hook：用於獲取不包含語言前綴的路徑
 * 
 * @returns 當前路徑去除語言前綴後的字符串
 */
export function usePathnameWithoutLocale() {
  // 使用 Next.js 的 usePathname hook 獲取當前完整路徑
  const pathname = usePathname();

  return useMemo(() => {
    // 創建一個正則表達式，用於匹配路徑開頭的語言代碼
    // 例如，如果支持的語言有 'en' 和 'zh'，則正則表達式會是 /^(\/en|\/zh)/
    const regex = new RegExp(`^/(${routing.locales.join('|')})`);

    // 使用正則表達式替換掉路徑開頭的語言代碼
    // 如果替換後的結果為空字符串（即原路徑只有語言代碼），則返回 '/'
    return pathname.replace(regex, '') || '/';
  }, [pathname]); // 依賴數組：只有當 pathname 變化時才重新執行
}
