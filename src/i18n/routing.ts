import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // 支援的語系
  locales: ['en', 'zh-TW'],

  // 預設的語系
  defaultLocale: 'zh-TW',

  // 預設語系不加前綴
   localePrefix: 'as-needed'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
