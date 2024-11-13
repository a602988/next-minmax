import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing.public';


const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {

    return handleI18nRouting(request);
}

export const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)',
        '/([\\w-]+)?/users/(.+)'
    ]
};
