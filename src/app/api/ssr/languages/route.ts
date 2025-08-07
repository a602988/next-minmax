import { NextResponse } from 'next/server';
import { languagesData } from '../_data/languages.data';
import { simulateApiDelay, createCacheHeaders, deepClone } from '../_utils/api-helpers';
import { MOCK_DELAYS } from '../_utils/config';
import { CACHE_CONFIG } from '@/lib/config';

/**
 * 語系清單 API
 *
 * 用途：提供網站支援的語系清單
 * 回傳：純粹的語系清單資料，不包含當前狀態
 *
 * 注意：current 屬性應該在後續的資料處理流程中決定，
 *      而不是在這個基礎 API 中處理
 */
export async function GET() {
    // 模擬 API 延遲
    await simulateApiDelay(MOCK_DELAYS.LANGUAGES);

    // 回傳純粹的語系資料
    const data = deepClone(languagesData);

    return NextResponse.json(data, {
        headers: createCacheHeaders(CACHE_CONFIG.TTL.LANGUAGES)
    });
}