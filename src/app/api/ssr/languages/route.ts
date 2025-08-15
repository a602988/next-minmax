import { NextResponse } from 'next/server';
import { languagesData } from '../_data/languages.data';
import { simulateApiDelay, createCacheHeaders, deepClone } from '../_utils/api-helpers';
import { MOCK_DELAYS } from '../_utils/mock.config';
import { env } from '@/env.mjs';
import { getServerCacheTtl } from '@/config/cache.server.config';

// Define the possible data structures
type LanguagesResponse = {
    data: unknown[];
} | unknown[];

/**
 * 語系清單 Mock API
 * - 不重複 env，僅在此處做必要業務邏輯
 * - 命名採小寫
 */
export async function GET() {
    // 開發環境才模擬延遲
    await simulateApiDelay(MOCK_DELAYS.LANGUAGES);

    // 回傳深拷貝的資料，避免原始資料被修改
    const data = deepClone(languagesData) as LanguagesResponse;

    // 依環境開關記錄日誌
    if (env.API_LOGGING_ENABLED) {
        const count = Array.isArray(data)
            ? data.length
            : (typeof data === 'object' && data !== null && 'data' in data && Array.isArray(data.data))
                ? data.data.length
                : 0;
        console.log(`🌐 語系列表回應：${count} 筆`);
    }

    // 使用服務端快取設定的 TTL（秒）
    const ttlSeconds = getServerCacheTtl('languages');

    return NextResponse.json(data, {
        headers: createCacheHeaders(ttlSeconds)
    });
}

// 如果需要其他 HTTP 方法，可以這樣定義：
export async function POST() {
    // POST 請求的處理邏輯（暫不實作）
}