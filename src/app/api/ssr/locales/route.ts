import { NextRequest, NextResponse } from 'next/server';
import { localesData } from '../_data/locales.data';
import { simulateApiDelay, createCacheHeaders, deepClone, extractStandardParams } from '../_utils/api-helpers';
import { MOCK_DELAYS } from '../_utils/mock.config';
import { API_CONFIG, CACHE_CONFIG } from '@/config';

/**
 * 國家語系對照表 Mock API
 *
 * 🔄 開發階段使用，與正式 API 格式完全一致
 * 🚀 透過環境變數 USE_MOCK_API 控制是否使用此端點
 *
 * 用途：提供國家代碼與語系代碼的對應關係
 * 參數：
 *   - project: 專案代碼
 *   - language: 當前語系
 *
 * 回傳：國家語系對照表，格式為 { "TW": "zh-TW", "US": "en-US" }
 */
export async function GET(request: NextRequest) {
    // 提取標準參數 (使用統一的參數處理)
    const { project, language } = extractStandardParams(request);

    // 開發環境才模擬延遲
    await simulateApiDelay(MOCK_DELAYS.LOCALES);

    // 回傳深拷貝的資料，避免原始資料被修改
    const data = deepClone(localesData);

    if (API_CONFIG.LOGGING) {
        const countryCount = Object.keys(data.data || data).length;
        console.log(`📍 地區語系資料回應 [${project}/${language}]:`, countryCount, '個國家對照');
    }

    return NextResponse.json(data, {
        headers: createCacheHeaders(CACHE_CONFIG.TTL.LOCALES)
    });
}