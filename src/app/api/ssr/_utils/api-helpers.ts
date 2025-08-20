import { NextRequest } from 'next/server';
import { env } from '@/env.mjs';

// 本檔內部使用的簡單別名（避免外部依賴）
type SupportedLocale = string;

/**
 * 模組級衍生：支援語系清單（從 env 轉換一次即可）
 */
const supportedLocales: SupportedLocale[] = env.NEXT_PUBLIC_SUPPORTED_LOCALES
    .split(',')
    .map((l) => l.trim() as SupportedLocale);

/**
 * 標準參數接口
 */
export interface StandardParams {
    project: string;
    language: SupportedLocale;
}

/**
 * 從請求中提取標準參數
 * 原則：
 * - 不重複 env，原始值直接取 env
 * - 只做必要的業務邏輯（語系驗證與回退）
 */
export function extractStandardParams(request: NextRequest): StandardParams {
    const { searchParams } = new URL(request.url);

    const project = searchParams.get('project') || env.PROJECT_CODE;

    const rawLanguage = searchParams.get('language');
    const language = isSupportedLocale(rawLanguage)
        ? (rawLanguage as SupportedLocale)
        : (env.DEFAULT_LANGUAGE as SupportedLocale);

    return { project, language };
}

/**
 * 語系驗證（使用本模組的衍生 supportedLocales）
 */
export function isSupportedLocale(locale: string | null | undefined): locale is SupportedLocale {
    if (!locale) return false;
    return supportedLocales.includes(locale as SupportedLocale);
}

/**
 * 模擬 API 延遲（僅開發環境）
 */
export async function simulateApiDelay(delay: number): Promise<void> {
    if (process.env.NODE_ENV === 'development') {
        await new Promise((resolve) => setTimeout(resolve, delay));
    }
}

/**
 * 建立快取標頭
 * - 預設 TTL 使用 env.CACHE_DEFAULT_TTL（秒）
 */
export function createCacheHeaders(ttl: number = env.CACHE_DEFAULT_TTL): Record<string, string> {
    return {
        'Cache-Control': `public, max-age=${ttl}, s-maxage=${ttl}`,
        Vary: 'Accept-Language, Accept-Encoding',
    };
}

/**
 * 深度複製物件（型別安全、無 any）
 */
export function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') return obj;

    if (obj instanceof Date) {
        return new Date(obj.getTime()) as unknown as T;
    }

    if (Array.isArray(obj)) {
        return (obj as unknown as unknown[]).map((item) => deepClone(item)) as unknown as T;
    }

    const source = obj as Record<string, unknown>;
    const cloned: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(source)) {
        cloned[key] = deepClone(value);
    }
    return cloned as T;
}

/**
 * 檢查是否應該模擬錯誤（依 env 設定）
 */
export function shouldSimulateError(): boolean {
    if (!env.MOCK_ERROR_ENABLED) return false;
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
            },
        },
        {
            status,
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
            },
        },
    );
}