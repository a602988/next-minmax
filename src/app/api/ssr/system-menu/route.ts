import { NextRequest, NextResponse } from 'next/server';
import { systemMenusData } from '../_data/system-menus.data';
import { simulateApiDelay, createCacheHeaders, deepClone, extractStandardParams } from '../_utils/api-helpers';
import { MOCK_DELAYS } from '../_utils/mock.config';
import { env } from '@/env.mjs';
import { getServerCacheTtl } from '@/config/cache.server.config';

// 最小必要的型別，避免 any
type MenuNode = {
    children?: MenuNode[];
    // 其他欄位不影響計數，可視需求擴充
};

/**
 * 遞迴計算選單項目總數（無 any）
 */
function countMenuItems(menus: readonly MenuNode[]): number {
    let count = 0;
    for (const menu of menus) {
        count += 1;
        if (Array.isArray(menu.children) && menu.children.length > 0) {
            count += countMenuItems(menu.children);
        }
    }
    return count;
}

/**
 * 系統選單 Mock API
 * - 不重複 env，僅做必要業務邏輯
 * - config 改為使用 env + server cache config 的薄層
 */
export async function GET(request: NextRequest) {
    // 1) 提取標準參數
    const { project, language } = extractStandardParams(request);

    // 2) 開發環境模擬延遲
    await simulateApiDelay(MOCK_DELAYS.MENUS);

    // 3) 深拷貝資料，避免修改原始
    const data = deepClone(systemMenusData);

    // 4) 日誌（受環境開關控制）
    if (env.API_LOGGING_ENABLED) {
        // 嘗試支援 data.data?.data 為陣列的結構；否則視為空陣列
        const menus: MenuNode[] = (data as { data?: { data?: unknown } })?.data?.data as MenuNode[] || [];
        const menuCount = Array.isArray(menus) ? menus.length : 0;
        const totalMenuItems = Array.isArray(menus) ? countMenuItems(menus) : 0;
        console.log(`🧭 系統選單資料回應 [${project}/${language}]: ${menuCount} 個主選單，共 ${totalMenuItems} 個項目`);
    }

    // 5) 使用服務端快取設定的 TTL（秒）
    const ttlSeconds = getServerCacheTtl('menus');

    return NextResponse.json(data, {
        headers: createCacheHeaders(ttlSeconds)
    });
}