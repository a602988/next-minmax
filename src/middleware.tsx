import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 匹配“/”，以及所有以語言環境（如“/en”）開頭的路徑
  const shouldHandle =
    pathname === '/' ||
    new RegExp(`^/(${routing.locales.join('|')})(/.*)?$`).test(
      request.nextUrl.pathname
    );
  if (!shouldHandle) return;

  return handleI18nRouting(request);
}

// 配置匹配的路徑
export const config = {
  // 匹配所有路徑，除了以下路徑：
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/users/(.+)',
  ]
};