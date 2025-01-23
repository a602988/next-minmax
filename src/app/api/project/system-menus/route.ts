import { NextRequest } from 'next/server';
import { SystemMenuType } from '@/types/systemMenuType';
import { getFromCache, setInCache } from '@/services/cacheService';
import { query } from '@/services/databaseService';
import { createSuccessResponse, createErrorResponse } from '@/services/apiResponseService';

export async function GET(req: NextRequest) {
  const startTime = Date.now();
  const language = req.nextUrl.searchParams.get('language');
  const fallbackToDefault = req.nextUrl.searchParams.get('fallbackToDefault') !== 'false';
  const defaultTableName = 'system_menu';
  const databaseFile = 'project-base-seeder.sqlite3';

  const tableName = language ? `${defaultTableName}_${language}` : defaultTableName;
  const cacheKey = `menus_${tableName}`;

  try {
    // 檢查緩存
    const cachedMenus = getFromCache<SystemMenuType[]>(cacheKey);
    if (cachedMenus) {
      console.log(`從緩存中獲取菜單數據 ${tableName}`);
      return createSuccessResponse(cachedMenus, startTime);
    }

    // 檢查表是否存在並獲取菜單數據
    const sqlQuery = `
      SELECT * FROM ${tableName}
      WHERE EXISTS (SELECT 1 FROM sqlite_master WHERE type='table' AND name='${tableName}')
    `;
    const menus = await query<SystemMenuType>(databaseFile, sqlQuery);

    if (menus.length > 0) {
      setInCache(cacheKey, menus);
      return createSuccessResponse(menus, startTime);
    }

    // 如果沒有找到數據或表不存在
    if (fallbackToDefault && tableName !== defaultTableName) {
      console.log(`Table '${tableName}' 不存在或為空，嘗試使用默認表 '${defaultTableName}'`);
      const newUrl = new URL(req.url);
      newUrl.searchParams.delete('language');
      // 遞歸調用 GET 函數，但使用修改後的 URL
      return GET(new NextRequest(newUrl, req));
    }

    console.log(`表中未找到選單 ${tableName}`);
    return createErrorResponse(`表 '${tableName}' 不存在或為空${!fallbackToDefault ? '，且預設表已停用' : ''}`, 404, startTime);

  } catch (err: unknown) {
    console.error(`取得選單時出錯: ${err}`);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return createErrorResponse('內部伺服器錯誤', 500, startTime, errorMessage);
  }
}
