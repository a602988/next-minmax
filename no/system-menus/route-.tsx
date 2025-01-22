/**
 * 引入database-sqlite3.ts，來存取@/data/project-base-seeder.sqlite3中的system_menu數據
 */
import { query } from '../database-sqlite3';
import { NextRequest } from 'next/server';
import { SystemMenuType } from '@/types/systemMenuType';

// Define an extended type for SystemMenuType that includes the 'parent' property
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

  try {
    return allMenus
        .filter(menu => menu.parent === root)
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

/**
 * GET 請求處理函數
 * @param req Next.js 請求對象
 * @returns JSON 響應
 */
export async function GET(req: NextRequest): Promise<Response> {
  const language = req.nextUrl.searchParams.get('language');

  let tableName = 'system_menu';  // 默認表名

  if (language) {
    const specificTableName = `system_menu_${language}`;

    try {
      const tableExists = await query<{ name: string }>('project-base-seeder.sqlite3',
          `SELECT name FROM sqlite_master WHERE type='table' AND name=?`,
          [specificTableName]
      );

      if (tableExists.length > 0) {
        tableName = specificTableName;
      }
    } catch (err) {
      console.error(`Error checking table existence: ${err}`);
    }
  }

  try {
    console.log(`Attempting to fetch menus from table: ${tableName}`);
    const menus = await query<ExtendedSystemMenuType>('project-base-seeder.sqlite3',
        `SELECT * FROM ${tableName}`
    );
    console.log(`Successfully fetched ${menus.length} menus`);
    const menuTree = getMenuTree(null, menus);
    console.log('Menu tree constructed successfully');
    return Response.json(menuTree, { status: 200 });
  } catch (err) {
    console.error(`Error fetching menus: ${err}`);
    if (err instanceof Error && err.message.includes('no such table')) {
      return Response.json({ error: `Table '${tableName}' does not exist` }, { status: 404 });
    }
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
