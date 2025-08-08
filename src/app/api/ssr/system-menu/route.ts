import { NextRequest, NextResponse } from 'next/server';
import { LOCALE_CONFIG } from '@/config';
import { systemMenusData } from '../_data/system-menus.data';

/**
 * 系統選單 API
 *
 * 用途：提供網站導航選單的階層結構資料
 * 參數：
 *   - project: 專案代碼
 *   - language: 當前語系
 *
 * 回傳：系統選單資料，包含完整的階層結構與選單項目設定
 */
export async function GET(request: NextRequest) {
    // 取得查詢參數，使用統一配置的預設值
    const searchParams = request.nextUrl.searchParams;
    const language = searchParams.get('language') || LOCALE_CONFIG.DEFAULT_LOCALE;

    // 驗證語系參數
    if (!LOCALE_CONFIG.isValidLocale(language)) {
        return NextResponse.json({
            code: "4000",
            message: `不支援的語系: ${language}`,
            data: null
        }, { status: 400 });
    }

    // 模擬 API 延遲 (開發測試用)
    await new Promise(resolve => setTimeout(resolve, 200));

    // 深拷貝資料以避免修改原始資料
    const data = JSON.parse(JSON.stringify(systemMenusData));

    // 設置 Cache-Control 標頭
    return NextResponse.json(data, {
        headers: {
            'Cache-Control': 'public, max-age=3600, s-maxage=3600'
        }
    });
}