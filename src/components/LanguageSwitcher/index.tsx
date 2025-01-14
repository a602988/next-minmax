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