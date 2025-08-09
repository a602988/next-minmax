import { API_CONFIG } from '@/config';
import { BaseApiService } from './base/api-service.base';

// 定義系統選單項目型別
interface SystemMenuItem {
    id: string;
    title: string;
    url?: string;
    type: 'link' | 'dropdown' | 'button';
    children?: SystemMenuItem[];
    icon?: string;
    order: number;
    isActive: boolean;
    level?: number; // 選單層級 (第一層、第二層)
    parentId?: string; // 上層選單 ID
}

/**
 * 系統選單服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */
class SystemMenuService extends BaseApiService {
    constructor() {
        super('系統選單');
    }

    /**
     * 取得系統選單資料
     * @returns Promise<SystemMenuItem[]>
     */
    async getSystemMenu(): Promise<SystemMenuItem[]> {
        const endpoint = {
            mock: API_CONFIG.ENDPOINTS.MOCK.SYSTEM_MENUS,
            external: API_CONFIG.ENDPOINTS.EXTERNAL.SYSTEM_MENUS
        };

        return this.apiRequest<SystemMenuItem[]>(endpoint);
    }

    /**
     * 根據層級取得選單項目
     * @param level 選單層級 (1 或 2)
     * @returns Promise<SystemMenuItem[]>
     */
    async getMenuByLevel(level: number): Promise<SystemMenuItem[]> {
        try {
            const allMenus = await this.getSystemMenu();
            return allMenus.filter(menu => menu.level === level);
        } catch (error) {
            console.error(`❌ 無法取得第 ${level} 層選單:`, error);
            return [];
        }
    }

    /**
     * 根據上層選單 ID 取得子選單
     * @param parentId 上層選單 ID
     * @returns Promise<SystemMenuItem[]>
     */
    async ㄓㄜ(parentId: string): Promise<SystemMenuItem[]> {
        try {
            const allMenus = await this.getSystemMenu();
            return allMenus.filter(menu => menu.parentId === parentId);
        } catch (error) {
            console.error(`❌ 無法取得上層選單 ${parentId} 的子選單:`, error);
            return [];
        }
    }

    /**
     * 根據選單 ID 取得特定選單項目
     * @param menuId 選單項目 ID
     * @returns Promise<SystemMenuItem | null>
     */
    async getMenuItemById(menuId: string): Promise<SystemMenuItem | null> {
        try {
            const allMenus = await this.getSystemMenu();
            return allMenus.find(menu => menu.id === menuId) || null;
        } catch (error) {
            console.error(`❌ 無法找到選單項目 ${menuId}:`, error);
            return null;
        }
    }

    /**
     * 覆寫成功日誌，顯示選單項目統計
     */
    protected logSuccess(data: SystemMenuItem[]): void {
        if (API_CONFIG.LOGGING) {
            const level1Count = data.filter(menu => menu.level === 1).length;
            const level2Count = data.filter(menu => menu.level === 2).length;

            console.log(`✅ ${this.serviceName}資料載入成功:`,
                `總計 ${data.length} 個選單項目 (第一層:${level1Count}, 第二層:${level2Count})`
            );
        }
    }
}

// 匯出單例實例
export const systemMenuService = new SystemMenuService();