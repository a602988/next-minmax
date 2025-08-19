import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';
import {detectCountryByStrategy} from '@/features/geo/strategy/geo-strategy';




// 先建立 next-intl 的既有 middleware
const intlMiddleware = createMiddleware(routing);

/**
 * 取得客戶端 IP（優先 X-Forwarded-For 第一個）
 */
function getClientIp(req: NextRequest): string | undefined {
    const xff = req.headers.get('x-forwarded-for');
    if (xff) {
        const first = xff.split(',')[0]?.trim();
        if (first) return first;
    }
    const xri = req.headers.get('x-real-ip');
    if (xri) return xri.trim();

    // 部分環境可能存在 req.ip（非標準），以寬鬆轉型讀取，無則回 undefined
    const possibleIp = (req as unknown as { ip?: string })?.ip;
    return possibleIp && typeof possibleIp === 'string' && possibleIp.length ? possibleIp : undefined;
}

export default async function middleware(req: NextRequest) {
    // 先執行 next-intl 的 middleware，保留其 redirect/rewrite 等行為
    let res = intlMiddleware(req);
    if (res instanceof Promise) {
        res = await res;
    }

    // 在同一個回應上追加 geo 偵測與 Cookie（api-only）
    try {
        const ip = getClientIp(req);
        const country = await detectCountryByStrategy({ip, timeoutMs: 800}, 'api-only');

        if (country) {
            (res as NextResponse).cookies.set('detected_country', country, {
                maxAge: 60 * 60 * 24, // 1 天（秒）
                path: '/',
                sameSite: 'lax',
                secure: process.env.NODE_ENV === 'production',
                httpOnly: false,
            });
        } else {
            (res as NextResponse).cookies.set('detected_country', '', {
                maxAge: 0,
                path: '/',
                sameSite: 'lax',
            });
        }
    } catch {
        // 靜默失敗，不影響原本 next-intl 流程
    }

    return res;
}


export const config = {
  // 匹配所有路徑，除了以下情況：
  // - 以 `/api`、`/trpc`、`/_next` 或 `/_vercel` 開頭的路徑
  // - 包含點號的路徑（例如 `favicon.ico`）
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
