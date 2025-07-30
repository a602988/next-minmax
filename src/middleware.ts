import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 匹配所有路徑，除了以下情況：
  // - 以 `/api`、`/trpc`、`/_next` 或 `/_vercel` 開頭的路徑
  // - 包含點號的路徑（例如 `favicon.ico`）
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
