import { SystemMenuType } from '@/types/systemMenuType';
import { FetchApiOptions, fetchApi } from "./apiService";

// 緩存整個菜單樹
let cachedMenuTree: SystemMenuType[] | null = null;

/**
 * 獲取系統菜單數據
 *
 * 此函數從 API 獲取系統菜單數據，並將結果緩存。
 * 如果緩存中已有數據，則直接返回緩存的數據。
 *
 * @async
 * @param {Partial<FetchApiOptions>} [options={}] - 自定義 API 請求選項
 * @returns {Promise<SystemMenuType[]>} 返回菜單數據數組
 * @throws {Error} 當 API 調用失敗或返回格式不正確時拋出錯誤
 */
export async function getSystemMenus(
    options: Partial<FetchApiOptions> = {}
): Promise<SystemMenuType[]> {
  // 如果緩存中有數據，直接返回
  if (cachedMenuTree) {
    return cachedMenuTree;
  }

  // 設置默認的 API 請求選項
  const defaultOptions: Partial<FetchApiOptions> = {
    tags: ['system-menus'],
    timeout: 5000,
  };

  // 合併默認選項和用戶提供的選項
  const mergedOptions: FetchApiOptions = {
    ...defaultOptions,
    ...options,
  };

  try {
    // 調用 API 獲取菜單數據
    const data = await fetchApi<SystemMenuType[]>('/system-menus', mergedOptions);
    
    // 驗證 API 返回的數據格式
    if (!Array.isArray(data)) {
      throw new Error('API 返回格式錯誤：預期數組');
    }
    
    // 更新緩存
    cachedMenuTree = data;
    return data;
  } catch (error) {
    console.error('獲取系統菜單數據失敗:', error);
    throw error;
  }
}

/**
 * 在菜單樹中按路徑查找特定菜單項及其子菜單
 *
 * 此函數首先確保菜單樹已加載，然後在樹中搜索指定路徑的菜單項。
 * 可以指定要返回的子菜單層級深度。
 *
 * @param {string} path - 要查找的路徑
 * @param {number} [depth=-1] - 要獲取的子菜單層級數，默認為-1（獲取所有層級）
 * @returns {Promise<SystemMenuType | null>} 返回找到的菜單項及指定層級的子菜單，如果未找到則返回 null
 */
export async function findMenuByPath(path: string, depth: number = -1): Promise<SystemMenuType | null> {
  // 確保菜單樹已加載
  if (!cachedMenuTree) {
    await getSystemMenus();
  }

  /**
   * 遞歸搜索菜單樹
   *
   * @param {SystemMenuType[]} menus - 要搜索的菜單數組
   * @param {string} targetPath - 目標路徑
   * @param {number} currentDepth - 當前深度
   * @returns {SystemMenuType | null} 找到的菜單項或 null
   */
  const findInTree = (menus: SystemMenuType[], targetPath: string, currentDepth: number): SystemMenuType | null => {
    for (const menu of menus) {
      if (menu.path === targetPath) {
        return currentDepth === -1 ? menu : pruneMenuTree(menu, currentDepth);
      }
      if (menu.children && menu.children.length > 0) {
        const found = findInTree(menu.children, targetPath, currentDepth);
        if (found) return found;
      }
    }
    return null;
  };

  /**
   * 修剪菜單樹到指定深度
   *
   * @param {SystemMenuType} menu - 要修剪的菜單項
   * @param {number} remainingDepth - 剩餘深度
   * @returns {SystemMenuType} 修剪後的菜單項
   */
  const pruneMenuTree = (menu: SystemMenuType, remainingDepth: number): SystemMenuType => {
    // 如果剩餘層級為 0，移除所有子菜單
    if (remainingDepth === 0) {
      // 創建一個新對象，排除 children 屬性
      return Object.fromEntries(
          Object.entries(menu).filter(([key]) => key !== 'children')
      ) as SystemMenuType;
    }
    // 否則，保留當前層級，並遞歸處理子菜單
    return {
      ...menu,
      children: menu.children ? menu.children.map(child => pruneMenuTree(child, remainingDepth - 1)) : []
    };
  };

  return cachedMenuTree ? findInTree(cachedMenuTree, path, depth) : null;
}

/**
 * 清除菜單樹緩存
 *
 * 此函數用於清除緩存的菜單樹數據，通常在需要刷新菜單數據時調用。
 */
export function clearMenuCache(): void {
  cachedMenuTree = null;
}
