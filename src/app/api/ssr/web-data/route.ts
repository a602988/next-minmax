import { NextRequest, NextResponse } from 'next/server';
import { localesData } from '../_data/locales.data';

/**
 * 國家語系對照表 API
 * 
 * 用途：提供國家代碼與語系代碼的對應關係
 * 參數：
 *   - project: 專案代碼
 *   - language: 當前語系
 * 
 * 回傳：國家語系對照表，格式為 { "TW": "zh-TW", "US": "en" }
 */
export async function GET(request: NextRequest) {
  // 取得查詢參數
  const searchParams = request.nextUrl.searchParams;
  const project = searchParams.get('project') || 'minmax2025';
  const language = searchParams.get('language') || 'zh-TW';

  // 模擬 API 延遲 (開發測試用)
  await new Promise(resolve => setTimeout(resolve, 100));

  // 深拷貝資料以避免修改原始資料
  const data = JSON.parse(JSON.stringify(localesData));

  // 設置 Cache-Control 標頭
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  });
}