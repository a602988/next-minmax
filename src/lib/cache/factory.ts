/**
 * 快取適配器工廠模組
 *
 * 此模組提供統一的快取適配器建立介面，根據環境變數配置動態選擇快取策略。
 * 支援記憶體快取、Redis 快取或無快取模式，並使用單例模式確保整個應用程式
 * 共用同一個快取實例，避免重複初始化和資源浪費。
 *
 * 支援的快取策略：
 * - memory: 使用記憶體快取，適合開發環境或小型應用
 * - redis: 使用 Redis 快取，適合生產環境或分散式部署（待實作）
 * - none: 無快取模式，所有操作都是 no-op，適合測試或特殊場景
 */

import type { CacheAdapter } from './types';
import { MemoryCacheAdapter } from './memory-adapter';
import { env } from '@/env.mjs';

// 單例實例，確保整個應用程式共用同一個快取適配器
let singleton: CacheAdapter | null = null;

/**
 * 取得快取適配器實例
 *
 * 根據環境變數 I18N_CACHE_STRATEGY 的設定，動態建立對應的快取適配器。
 * 使用單例模式，首次呼叫時建立實例，後續呼叫直接回傳已建立的實例。
 *
 * @returns {CacheAdapter} 快取適配器實例，實作統一的快取介面
 */
export function getCacheAdapter(): CacheAdapter {
    // 如果已有實例，直接回傳，避免重複建立
    if (singleton) return singleton;

    // 直接讀 env，避免依賴另一層 config 常量
    const strategy = env.I18N_CACHE_STRATEGY; // 'memory' | 'redis' | 'none'

    if (strategy === 'memory') {
        // 記憶體快取：適合開發環境，資料存在應用程式記憶體中
        singleton = new MemoryCacheAdapter();
    } else if (strategy === 'redis') {
        // Redis 快取：適合生產環境，支援分散式快取
        // TODO: 之後接 RedisAdapter
        singleton = new MemoryCacheAdapter();
    } else {
        // 無快取模式：所有操作都是 no-op，適合測試或禁用快取的場景
        singleton = {
            async get() { return null; },
            async set() { /* no-op */ },
            async del() { /* no-op */ },
            async delByTag() { /* no-op */ },
            async clear() { /* no-op */ }
        };
    }
    return singleton;
}