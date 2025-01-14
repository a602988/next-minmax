/**
 * @file route.tsx
 * @description DEMO 網頁數據 API 路由處理
 * @author jeffy
 * @created 2024-10-20
 * @last-modified 2024-10-23
 */

import { NextRequest, NextResponse } from "next/server";
import { apiGetOne, newConnection } from "../database";

// 連接到數據庫
// 注意：在生產環境中，應考慮使用環境變量來存儲數據庫連接信息
const dbBase = newConnection('project-base-seeder.sqlite3');
/**
 * 定義網頁數據的結構
 * @interface WebData
 * @property {string} id - 唯一標識符
 * @property {string} [title] - 可選的標題
 * @property {string} [description] - 可選的描述
 */
interface WebData {
  id: string;
  title?: string;
  description?: string;
}

/**
 * 定義網頁數據響應的結構
 * @interface WebDataResponse
 * @property {number} status - HTTP 狀態碼
 * @property {WebData | string} body - 響應主體，可能是 WebData 對象或錯誤信息
 */
interface WebDataResponse {
  status: number;
  body: WebData | string;
}

/**
 * 獲取網頁數據
 * @async
 * @function getWebData
 * @param {NextRequest} req - NextRequest 對象，包含請求信息
 * @returns {Promise<WebDataResponse>} 包含狀態碼和數據或錯誤信息的響應
 */
async function getWebData(req: NextRequest): Promise<WebDataResponse> {
  // 從 URL 查詢參數中獲取語言設置
  const language = req.nextUrl.searchParams.get('language');

  // 根據語言選擇合適的表名
  // 注意：確保數據庫中存在相應的表
  const tableName = language ? `web_data_${language}` : 'web_data';
  const query = `
    SELECT * FROM ${tableName} WHERE id = 'web'
  `;

  try {
    // 執行數據庫查詢
    const resp = await apiGetOne(dbBase, query) as WebData;
    return { status: 200, body: resp };
  } catch (err) {
    // 錯誤處理：返回 400 狀態碼和錯誤信息
    return { status: 400, body: err instanceof Error ? err.message : String(err) };
  }
};

/**
 * GET 請求處理函數
 * @async
 * @function GET
 * @param {NextRequest} req - NextRequest 對象，包含請求信息
 * @returns {Promise<NextResponse>} NextResponse 對象，包含響應數據
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    // 獲取網頁數據
    const respWebData = await getWebData(req);

    // 檢查響應狀態
    if (respWebData.status !== 200) {
      // 如果狀態不是 200，返回錯誤響應
      return NextResponse.json({ error: respWebData.body }, { status: respWebData.status });
    }

    // 返回成功響應
    return NextResponse.json({
      web_data: respWebData.body
    }, { status: 200 });
  } catch (error) {
    // 捕獲並處理任何未預期的錯誤
    return NextResponse.json({
      error: error instanceof Error ? error.message : String(error)
    }, { status: 400 });
  }
}
