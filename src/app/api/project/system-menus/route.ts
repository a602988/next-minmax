import { NextRequest, NextResponse } from 'next/server';
import { SystemMenuType } from '@/types/systemMenuType';
import { query } from '@/utils/databaseService';

const databaseFile = 'project-base-seeder.sqlite3';

export async function GET(req: NextRequest) {
  const language = req.nextUrl.searchParams.get('language');
  const fallbackToDefault = req.nextUrl.searchParams.get('fallbackToDefault') !== 'false';
  const defaultTableName = 'system_menu';

  const tableName = language ? `${defaultTableName}_${language}` : defaultTableName;

  try {
    // 檢查表是否存在並獲取菜單數據
    const sqlQuery = `
      SELECT * FROM ${tableName}
      WHERE EXISTS (SELECT 1 FROM sqlite_master WHERE type='table' AND name='${tableName}')
    `;
    const menus = await query<SystemMenuType>(databaseFile, sqlQuery);

    if (menus.length > 0) {
      const menuTree = getMenuTree(null, menus);
      return NextResponse.json({ menus: menuTree }, { status: 200 });
    }

    // 如果沒有找到數據或表不存在，且允許回退到默認
    if (fallbackToDefault && tableName !== defaultTableName) {
      console.log(`Table '${tableName}' 不存在或為空，嘗試使用默認表 '${defaultTableName}'`);
      const defaultQuery = `SELECT * FROM ${defaultTableName}`;
      const defaultMenus = await query<SystemMenuType>(databaseFile, defaultQuery);
      if (defaultMenus.length > 0) {
        const menuTree = getMenuTree(null, defaultMenus);
        return NextResponse.json({ menus: menuTree }, { status: 200 });
      }
    }

    console.log(`未找到選單數據 ${tableName}`);
    return NextResponse.json({ error: `表 '${tableName}' 不存在或為空${!fallbackToDefault ? '，且預設表已停用' : ''}` }, { status: 404 });

  } catch (err: unknown) {
    console.error(`取得選單時出錯: ${err}`);
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: '內部伺服器錯誤', details: errorMessage }, { status: 500 });
  }
}

interface ExtendedSystemMenuType extends SystemMenuType {
  parent_id: string | null;
  children?: ExtendedSystemMenuType[];
}

function getMenuTree(root: string | null, allMenus: Array<ExtendedSystemMenuType>): Array<ExtendedSystemMenuType> {
  if (allMenus.length === 0) return [];

  try {
    return allMenus
      .filter(menu => menu.parent_id === root)
      .map(menu => ({
        ...menu,
        target: menu.url && !String(menu.url).startsWith("http") ? '_self' : '_blank',
        children: getMenuTree(menu.code, allMenus)
      }));
  } catch (error) {
    console.error('Error in getMenuTree:', error);
    return [];
  }
}
