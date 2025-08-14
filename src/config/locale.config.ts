/**
 * 統一的語系配置入口
 * 根據執行環境動態導入適當的配置
 */

// 動態導入，避免客戶端打包服務端配置
export const getLocaleConfig = async () => {
    if (typeof window === 'undefined') {
        // 服務端：導入服務端配置
        const { SERVER_LOCALE_CONFIG } = await import('./locale.server.config');
        return SERVER_LOCALE_CONFIG;
    } else {
        // 客戶端：導入客戶端配置
        const { CLIENT_LOCALE_CONFIG } = await import('./locale.client.config');
        return CLIENT_LOCALE_CONFIG;
    }
};

// 同步版本（僅供客戶端使用）
export const getClientLocaleConfig = async () => {
    if (typeof window === 'undefined') {
        throw new Error('getClientLocaleConfig 只能在客戶端調用');
    }
    // 使用動態 import 替代 require
    const { CLIENT_LOCALE_CONFIG } = await import('./locale.client.config');
    return CLIENT_LOCALE_CONFIG;
};

// 直接導出客戶端配置（供客戶端組件使用）
export { CLIENT_LOCALE_CONFIG } from './locale.client.config';

export type SupportedLocale = string;