import { NextRequest } from 'next/server';
import { SERVER_APP_CONFIG } from '@/config/app.server.config';
import { SERVER_LOCALE_CONFIG } from '@/config/locale.server.config';
import { SERVER_CACHE_CONFIG } from '@/config/cache.server.config';
import { type SupportedLocale } from '@/config/locale.config';
import { env } from '@/env.mjs';

/**
 * 標準參數接口
 */
export interface StandardParams {
    project: string;
    language: SupportedLocale;
}

/**
 * 從請求中提取標準參數
 */
export function extractStandardParams(request: NextRequest): StandardParams {
    const { searchParams } = new URL(request.url);

    return {
        // 優先使用 URL 參數，沒有的話使用統一配置的預設值
        project: searchParams.get('project') || SERVER_APP_CONFIG.PROJECT_NAME,
        language: (searchParams.get('language') as SupportedLocale) || SERVER_LOCALE_CONFIG.DEFAULT_LOCALE,
    };
}

/**
 * 模擬 API 延遲
 */
export async function simulateApiDelay(delay: number): Promise<void> {
    // 開發環境才模擬延遲
    if (process.env.NODE_ENV === 'development') {
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

/**
 * 建立快取標頭
 */
export function createCacheHeaders(ttl: number = SERVER_CACHE_CONFIG.DEFAULT_TTL): Record<string, string> {
    return {
        'Cache-Control': `public, max-age=${ttl}, s-maxage=${ttl}`,
        'Vary': 'Accept-Language, Accept-Encoding',
    };
}

/**
 * 深度複製物件
 */
export function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime()) as unknown as T;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item)) as unknown as T;
    }

    const cloned = {} as T;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }

    return cloned;
}

/**
 * 檢查是否應該模擬錯誤
 */
export function shouldSimulateError(): boolean {
    // 直接使用 env 中的錯誤模擬設定
    if (!env.MOCK_ERROR_ENABLED) {
        return false;
    }
    return Math.random() < env.MOCK_ERROR_RATE;
}

/**
 * 建立錯誤回應
 */
export function createErrorResponse(status: number = 500, message: string = 'Internal Server Error') {
    return Response.json(
        {
            success: false,
            error: {
                code: status,
                message,
                timestamp: new Date().toISOString(),
            }
        },
        {
            status,
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
            }
        }
    );
}