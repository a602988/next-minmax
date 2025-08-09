import { NextRequest, NextResponse } from 'next/server';
import { systemMenusData } from '../_data/system-menus.data';
import { simulateApiDelay, createCacheHeaders, deepClone, extractStandardParams } from '../_utils/api-helpers';
import { MOCK_DELAYS } from '../_utils/mock.config';
import { API_CONFIG, CACHE_CONFIG } from '@/config';

/**
 * 系統選單 Mock API
 *
 * 🔄 開發階段使用，與正式 API 格式完全一致
 * 🚀 透過環境變數 USE_MOCK_API 控制是否使用此端點
 *
 * 用途：提供網站選單結構資料，包含多層級選單配置
 * 參數：
 *   - project: 專案代碼
 *   - language: 當前語系
 *
 * 回傳：系統選單資料，包含階層結構、連結、選項等完整配置
 */
export async function GET(request: NextRequest) {
    // 提取標準參數 (使用統一的參數處理)
    const { project, language } = extractStandardParams(request);

    // 開發環境才模擬延遲
    await simulateApiDelay(MOCK_DELAYS.MENUS);

    // 回傳深拷貝的資料，避免原始資料被修改
    const data = deepClone(systemMenusData);

    if (API_CONFIG.LOGGING) {
        const menuCount = data.data?.data?.length || 0;
        const totalMenuItems = countMenuItems(data.data?.data || []);
        console.log(`🧭 系統選單資料回應 [${project}/${language}]:`, `${menuCount} 個主選單，共 ${totalMenuItems} 個項目`);
    }

    return NextResponse.json(data, {
        headers: createCacheHeaders(CACHE_CONFIG.TTL.MENUS)
    });
}

/**
 * 遞迴計算選單項目總數
 */
function countMenuItems(menus: any[]): number {
    let count = 0;
    for (const menu of menus) {
        count += 1; // 當前項目
        if (menu.children && Array.isArray(menu.children)) {
            count += countMenuItems(menu.children); // 遞迴計算子項目
        }
    }
    return count;
}