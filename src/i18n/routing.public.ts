import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
import {defaultLocale, locales} from '@/i18n/config';

export const routing = defineRouting({
  locales,
  defaultLocale,

  localePrefix: 'as-needed',

  localeDetection: true,
  // 指定翻譯文件的位置

});

// Should only be used on public routes in the `[locale]` segment
export const {Link, usePathname} = createNavigation(routing);
