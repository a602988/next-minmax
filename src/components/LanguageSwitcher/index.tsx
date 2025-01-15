/**
 * @description 語言切換器組件
 *
 * 這個組件允許用戶在不同的語言之間切換。
 * 它使用 next-intl 和 next/navigation 來處理國際化和路由。
 *
 * @author [Jean Lin]
 * @created [2025-01-15]
 * @last-modified [2025-01-15]將
 */

'use client';

import { usePathname } from 'next/navigation';
import { Link, routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';

const LanguageSwitcher = () => {
  // 取得目前路徑語言
  const pathname = usePathname();
  // 取得當前語言
  const locale = useLocale();

  console.log('pathname:', pathname);
  console.log('locale:', pathname);
  // 處理路徑，移除當前語言前綴（如果存在）
  const pathnameWithoutLocale = pathname.replace(new RegExp(`^/(${routing.locales.join('|')})`), '') || '/';

  return (
    <div className='flex gap-3'>
      {routing.locales.map((l) => (
        <Link
          key={l}
          href={pathnameWithoutLocale}
          locale={l}
          className={l === locale ? 'disabled' : ''}
        >
          {l}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;