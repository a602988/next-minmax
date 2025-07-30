import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

//這是在 Next.js 導航 API 基礎上，考量到路由設定的輕量級封裝。
export const {Link, redirect, usePathname, useRouter, getPathname} =
    createNavigation(routing);
