import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
    // 支援的語系
    locales: ['en', 'zh-TW','zh-CN'],

    // 預設的語系
    defaultLocale: 'zh-TW',

    // 預設語系不加前綴
    localePrefix: 'as-needed'
});


export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
