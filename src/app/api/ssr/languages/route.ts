import { NextResponse } from 'next/server';
import { languagesData } from '../_data/languages.data';
import { simulateApiDelay, createCacheHeaders, deepClone } from '../_utils/api-helpers';
import { MOCK_DELAYS } from '../_utils/mock.config';
import { CACHE_CONFIG } from '@/config';

/**
 * 語系清單 Mock API
 *
 * 🔄 開發階段使用，與正式 API 格式完全一致
 * 🚀 透過環境變數 USE_MOCK_API 控制是否使用此端點
 */
export async function GET() {
    // 開發環境才模擬延遲
    await simulateApiDelay(MOCK_DELAYS.LANGUAGES);

    // 回傳深拷貝的資料，避免原始資料被修改
    const data = deepClone(languagesData);

    return NextResponse.json(data, {
        headers: createCacheHeaders(CACHE_CONFIG.TTL.LANGUAGES)
    });
}

// 如果需要其他 HTTP 方法，可以這樣定義：
export async function POST() {
    // POST 請求的處理邏輯
}
