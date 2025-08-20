/**
 * Next.js Middleware - 國際化與地理位置偵測
 *
 * 此 middleware 整合了 next-intl 的國際化功能與自訂的地理位置偵測，
 * 在每個請求的早期階段執行以下處理：
 *
 * 1. 國際化處理：透過 next-intl 處理語系路由、重導向等
 * 2. 地理偵測：根據環境變數決定是否執行，避免不必要的處理
 * 3. 容錯設計：地理偵測失敗不影響主要的國際化流程
 *
 * 執行順序：
 * - 先執行 next-intl middleware 取得基礎回應
 * - 檢查地理偵測開關，決定是否執行偵測邏輯
 * - 在同一回應上追加地理偵測結果的 Cookie
 * - 確保原有的重導向、重寫等行為不受影響
 *
 * 地理偵測特性：
 * - 受 GEO_DETECTION_ENABLED 環境變數控制
 * - 使用 api-only 策略（透過第三方 API）
 * - 800ms 超時限制，避免阻塞請求
 * - 偵測結果存入 detected_country Cookie（1天有效期）
 * - 偵測失敗時清除舊的 Cookie 避免過期資料
 */

import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing';
import {detectCountryByStrategy} from '@/features/geo/strategy/geo-strategy'; // 地理位置的策略函數
import {getClientIpFromRequest} from '@/features/geo/utils/ip'; // 取得 IP 位置的函數
import {env} from '@/env.mjs';


// 先建立 next-intl 的既有 middleware
const intlMiddleware = createMiddleware(routing);

// 在模組層定義：將 NODE_ENV 正規化成一般字串再比較，避免字面量型別引發 TS2367
const isDevEnv = (() => {
    const v = String(process.env.NODE_ENV || '').toLowerCase();
    return v === 'development';
})();


export default async function middleware(req: NextRequest) {
    // 1) 先執行 next-intl 的 middleware，保留其 redirect/rewrite 等行為
    const res = intlMiddleware(req) as NextResponse;


    // 2) 依環境開關決定是否執行地理偵測
    if (!env.INTERNATIONALIZATION_ENABLED || !env.GEO_DETECTION_ENABLED) {
        return res;
    }

    // 3) 在同一個回應上追加 geo 偵測（api-only）與 Cookie 寫入
    try {
        const ip = getClientIpFromRequest(req);
        const timeoutMs = env.GEO_API_TIMEOUT; // 來自環境的逾時（毫秒）
        const country = await detectCountryByStrategy({ip, timeoutMs}, 'api-only');
        // 僅在開發模式寫入 debug 用的 detected_ip Cookie
        if (process.env.NODE_ENV === 'development') {
            const detectedIp = ip ?? '';
            res.cookies.set('detected_ip', detectedIp, {
                maxAge: 60 * 60 * 24, // 1 天（秒）
                path: '/',
                sameSite: 'lax',
                secure: !isDevEnv,
                httpOnly: false
            });
        }

        if (country) {
            res.cookies.set('detected_country', country, {
                maxAge: 60 * 60 * 24, // 1 天（秒）
                path: '/',
                sameSite: 'lax',
                secure: process.env.NODE_ENV === 'production',
                httpOnly: false
            });
        } else {
            res.cookies.set('detected_country', '', {
                maxAge: 0,
                path: '/',
                sameSite: 'lax'
            });
        }
    } catch {
        // 靜默失敗，不影響 i18n 的流程
    }

    return res;
}




/**
 * Middleware 配置
 *
 * 匹配所有路徑，除了以下情況：
 * - 以 `/api`、`/trpc`、`/_next` 或 `/_vercel` 開頭的路徑
 * - 包含點號的路徑（例如 `favicon.ico`、靜態檔案）
 *
 * 這樣的配置確保：
 * - API 路由不受國際化影響
 * - Next.js 內部路徑不被處理
 * - 靜態資源直接提供，不經過 middleware
 */
export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};