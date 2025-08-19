/**
 * GeoService（地理位置偵測服務）
 *
 * 作用與說明：
 * - 提供對外「單一入口」以取得使用者的地理資訊（國家代碼為主）。
 * - 封裝第三方供應商（目前 geoplugin）呼叫邏輯，並統一回傳標準化結果 GeoResult。
 * - 內建逾時控制（避免 SSR / Middleware 被外部 API 阻塞）、錯誤降級（失敗回傳 null）。
 * - 整合共用快取系統（CacheAdapter）：支援 memory/redis/none，並區分成功與失敗結果 TTL。
 * - 具粗粒度 IP 快取鍵（/24 for IPv4、前 4 段 for IPv6）以降低碎片與隱私風險。
 * - 提供便捷 API：detectGeo（完整資訊）、detectCountry（只取國碼）。
 * - 預留 tags（'geo', providerName），方便後續批次清除快取（delByTag）。
 *
 * 何時使用：
 * - Middleware 中進行「建議語系/站點」的前置偵測與 Cookie 寫入。
 * - SSR 流程中需要依國別做內容或語系的初步決策。
 *
 * 重要設計：
 * - 成功結果 TTL 較長（預設 15 分鐘）、失敗結果（null）負面快取 TTL 較短（預設 5 分鐘）。
 * - fromCache 與 elapsedMs 由服務層賦值，對上層提供可觀測性與除錯資訊。
 * - 可透過 forceRefresh 避開快取（除錯/緊急重查）。
 */

import {geoPluginProvider} from '../providers/geoplugin.provider';
import type {GeoLookupParams, GeoProvider, GeoResult} from '../types/geo.types';
import {getCacheAdapter} from '@/lib/cache/factory';

// 預設逾時（毫秒）。避免 SSR / Middleware 因第三方 API 卡住。
const GEO_DEFAULT_TIMEOUT_MS = 800;

// 成功結果快取時間（毫秒）。Geo IP 通常穩定，可設定較長（例如 15 分鐘）。
const GEO_SUCCESS_TTL_MS = 15 * 60 * 1000;

// 失敗（null）結果的「負面快取」時間（毫秒）。短一些可降低雪崩與重試風暴（例如 5 分鐘）。
const GEO_NEGATIVE_TTL_MS = 5 * 60 * 1000;

/**
 * 快取系統（CacheAdapter）使用秒為單位，因此需將毫秒轉為秒。
 * - 最小回傳 1 秒，避免 0 導致立即過期。
 */
function msToSec(ms: number): number {
    return Math.max(1, Math.ceil(ms / 1000));
}

/**
 * 將 IP 正規化為較粗粒度的 key，避免快取碎片過多與隱私風險。
 * - IPv4: a.b.c.d → a.b.c.0
 * - IPv6: 取前 4 段 → xxxx:xxxx:xxxx:xxxx::
 * - 未指定 IP：使用 'self'
 */
function toCoarseIpKey(ip?: string): string {
    if (!ip) return 'self';
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) {
        const [a, b, c] = ip.split('.');
        return `${a}.${b}.${c}.0`;
        // IPv4 使用 /24 粒度，有效降低 key 數量，同時仍具區域代表性。
    }
    if (ip.includes(':')) {
        return ip.split(':').slice(0, 4).join(':') + '::';
        // IPv6 只取前 4 段作為粗粒度，精確性與隱私的折衷。
    }
    return ip;
}

// ...  code ...

export type DetectOptions = {
    ip?: string;               // 指定查詢 IP；不填則由供應商以來源 IP 判斷
    timeoutMs?: number;        // 自訂逾時（毫秒），不填採用預設
    forceRefresh?: boolean;    // 強制忽略快取（除錯/緊急）
    fetchImpl?: typeof fetch;  // 可注入 fetch（測試/代理）
};

export class GeoService {
    // 預設供應商：geoplugin。之後可依環境變數改為 ipapi、ipinfo...等。
    private provider: GeoProvider = geoPluginProvider;

    // 使用專案的快取抽象層（可切換 memory/redis/none）
    private cache = getCacheAdapter();

    /**
     * 取得完整地理資訊（標準化結果）。
     * - 具備：快取、逾時、降級（失敗回 null）
     * - 快取 Key 設計：geo:{provider}:{coarseIpKey}
     */
    async detectGeo(opts: DetectOptions = {}): Promise<GeoResult | null> {
        const { ip, forceRefresh, fetchImpl } = opts;
        const timeoutMs = opts.timeoutMs ?? GEO_DEFAULT_TIMEOUT_MS;
        const key = `geo:${this.provider.name}:${toCoarseIpKey(ip)}`;

        // 1) 讀取快取（若非強制刷新）
        //   - CacheAdapter.get 規格：回傳 T | null（沒有 undefined）
        if (!forceRefresh) {
            const cached = await this.cache.get<GeoResult | null>(key);
            if (cached !== null) {
                // 命中快取：補上 fromCache 標記；若為負面快取（null），直接回 null。
                return cached ? { ...cached, fromCache: true } : null;
            }
        }

        // 2) 未命中快取 → 呼叫供應商
        const started = Date.now();
        let result: GeoResult | null = null;

        try {
            const params: GeoLookupParams = { ip, timeoutMs, fetchImpl };
            const providerResult = await this.provider.lookup(params);

            // 標準化結果：確保 fromCache 與 elapsedMs 由服務層賦值
            result = providerResult
                ? { ...providerResult, fromCache: false, elapsedMs: Date.now() - started }
                : null;

            // 3) 寫入快取（使用秒作為單位；附帶 tags 便於日後群組清除）
            await this.cache.set(
                key,
                result,
                {
                    ttl: msToSec(result ? GEO_SUCCESS_TTL_MS : GEO_NEGATIVE_TTL_MS), // 成功長、失敗短
                    tags: ['geo', this.provider.name], // 例如可 delByTag('geo') 做批次清除
                }
            );
        } catch {
            // 4) 任何錯誤（含逾時）都降級為 null，並做短期負面快取以防雪崩
            await this.cache.set(
                key,
                null,
                {
                    ttl: msToSec(GEO_NEGATIVE_TTL_MS),
                    tags: ['geo', this.provider.name],
                }
            );
            return null;
        }

        return result;
    }

    /**
     * 便捷方法：僅返回國家代碼（TW/US/JP...），失敗回 null。
     */
    async detectCountry(opts: DetectOptions = {}): Promise<string | null> {
        const geo = await this.detectGeo(opts);
        return geo?.countryCode ?? null;
    }

    /**
     * 失效特定 IP 的快取（管理/除錯用）。
     */
    async invalidate(ip?: string): Promise<void> {
        const key = `geo:${this.provider.name}:${toCoarseIpKey(ip)}`;
        await this.cache.del(key);
    }

    /**
     * 清除所有快取（謹慎使用；可優先考慮 delByTag('geo')）。
     */
    async clearAll(): Promise<void> {
        await this.cache.clear();
    }
}

// 導出單例，便於直接使用。
export const geoService = new GeoService();
