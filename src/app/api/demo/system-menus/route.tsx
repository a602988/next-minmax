/**
 * @file system-menus/route.tsx
 * @description DEMO 系統菜單 API 路由處理，抓不到語系對應的資料表，會先使用預設的語系資料表
 * @author jeffy
 * @created 2024-10-20
 * @last-modified 2024-10-23
 */

import { NextRequest } from "next/server";
import { SystemMenuType } from "@/types/systemMenus";
import { apiGetAll, newConnection } from "../database";

// Update the SystemMenuType to include the 'parent' property
interface ExtendedSystemMenuType extends SystemMenuType {
  parent: string | null;
}

/**
 * 遞歸構建菜單樹
 * @param root 根節點的代碼，為 null 時表示頂級菜單
 * @param allMenus 所有菜單項的數組
 * @returns 構建好的菜單樹
 */
function getMenuTree(root: string | null, allMenus: Array<ExtendedSystemMenuType> = []): Array<ExtendedSystemMenuType> {
  if (allMenus.length === 0) return [];

  return allMenus
    .filter(menu => menu.parent === root)
    .map(menu => ({
      ...menu,
      // 設置目標屬性：如果 URL 不是以 http 開頭，則在當前窗口打開，否則在新窗口打開
      target: menu.url && !String(menu.url).startsWith("http") ? '_self' : '_blank',
      // 遞歸獲取子菜單
      children: getMenuTree(menu.code, allMenus)
    }));
}

// 建立數據庫連接
const connection = newConnection('page-seeder-import.sqlite3');

/**
 * GET 請求處理函數
 * @param req Next.js 請求對象
 * @returns JSON 響應
 */
export async function GET(req: NextRequest): Promise<Response> {
  const language = req.nextUrl.searchParams.get('language');

  let tableName = 'menus';  // 默認表名
  let query = '';

  if (language) {
    const specificTableName = `menus_${language}`;

    // 檢查特定語言的表是否存在
    const tableExistsQuery = `
        SELECT name FROM sqlite_master
        WHERE type='table' AND name='${specificTableName}'
    `;

    try {
      const tableExists = await apiGetAll(connection, tableExistsQuery) as Array<{ name: string }>;
      if (tableExists.length > 0) {
        tableName = specificTableName;
      }
    } catch (err) {
      console.error(`Error checking table existence: ${err}`);
      // 如果檢查失敗，使用默認的 'menus' 表
    }
  }

  // 構建最終的查詢
  query = `SELECT * FROM ${tableName}`;

  let status: number;
  let respBody: Array<ExtendedSystemMenuType> | { error: string };

  try {
    const resp = await apiGetAll(connection, query) as Array<ExtendedSystemMenuType>;
    status = 200;
    respBody = getMenuTree(null, resp);
  } catch (err) {
    status = 400;
    respBody = { error: err instanceof Error ? err.message : String(err) };
  }

  return Response.json(respBody, { status });
}
