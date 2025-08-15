import { NextResponse } from 'next/server';
import { languagesData } from '../_data/languages.data';
import { simulateApiDelay, createCacheHeaders, deepClone } from '../_utils/api-helpers';
import { MOCK_DELAYS } from '../_utils/mock.config';
import { env } from '@/env.mjs';
import { getServerCacheTtl } from '@/config/cache.server.config';

// 型別守衛：{ data: unknown[] } 結構
function hasArrayData(obj: unknown): obj is { data: unknown[] } {
    return typeof obj === 'object' && obj !== null && 'data' in obj && Array.isArray((obj as { data: unknown }).data);
}

// 取得語系列表長度（支援 Array 或 {data: Array}）
function getLanguagesCount(value: unknown): number {
    if (Array.isArray(value)) return value.length;
    if (hasArrayData(value)) return value.data.length;
    return 0;
}

/**
 * 語系清單 Mock API
 * - 不重複 env，僅在此處做必要業務邏輯
 */
export async function GET() {
    await simulateApiDelay(MOCK_DELAYS.LANGUAGES);

    // 回傳深拷貝，避免外部改動
    const data = deepClone(languagesData);

    if (env.API_LOGGING_ENABLED) {
        console.log(`🌐 語系列表回應：${getLanguagesCount(data)} 筆`);
    }

    const ttlSeconds = getServerCacheTtl('languages');
    return NextResponse.json(data, {
        headers: createCacheHeaders(ttlSeconds)
    });
}

export async function POST() {
    // 未實作
}