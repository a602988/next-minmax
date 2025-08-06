import { NextRequest, NextResponse } from 'next/server';
import { languagesData } from '../_data/languages.data';
import { extractStandardParams, simulateApiDelay, createCacheHeaders, deepClone } from '../_utils/api-helpers';
import { API_CONFIG, MOCK_DELAYS } from '../_utils/config';

/**
 * 語系清單 API
 * 
 * 用途：提供網站支援的語系清單
 * 參數：
 *   - project: 專案代碼
 *   - language: 當前語系
 * 
 * 回傳：語系清單資料，包含 id, title, native, default, current 等資訊
 */
export async function GET(request: NextRequest) {
  // 取得標準參數
  const { project, language } = extractStandardParams(request);

  // 模擬 API 延遲
  await simulateApiDelay(MOCK_DELAYS.LANGUAGES);

  // 根據當前語系設置 current 屬性
  const data = deepClone(languagesData);
  
  if (data.data && Array.isArray(data.data)) {
    data.data = data.data.map((lang: { id: string; [key: string]: unknown }) => ({
      ...lang,
      current: lang.id === language
    }));
  }

  return NextResponse.json(data, {
    headers: createCacheHeaders(API_CONFIG.CACHE.DEFAULT_TTL)
  });
}