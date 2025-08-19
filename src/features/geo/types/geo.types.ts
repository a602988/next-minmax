/**
 * 標準化的地理位置查詢結果，系統的「標準化內部資料模型」
 */

export interface GeoResult {
    ip?: string;                         // 偵測到的 IP（供應商回傳或指定；避免長期保存以符隱私）
    countryCode: string | null;          // 兩碼國家代碼（ISO 3166-1 alpha-2），如：TW/US/JP；失敗為 null
    countryName?: string | null;         // 國家名稱（通常為英文或供應商原樣字串），如：Taiwan、United States
    region?: string | null;              // 州/省/行政區（供應商格式不一，可能為名稱或代碼）
    city?: string | null;                // 城市名稱；若無法判定則為 null
    latitude?: number | null;            // 緯度（十進位度）；若無法判定則為 null
    longitude?: number | null;           // 經度（十進位度）；若無法判定則為 null
    timeZone?: string | null;            // 時區字串，如：Asia/Taipei；若無法判定則為 null
    currency?: {                         // 貨幣資訊；供應商未提供時為 null
        code?: string | null;            // 貨幣代碼，如：TWD、USD；未提供為 null
        symbol?: string | null;          // 貨幣符號，如：NT$、$；未提供為 null
    } | null;
    raw?: unknown;                       // 供應商原始回應（供除錯用；不建議直接回傳到前端）
    provider: "geoplugin";               // 實際使用的地理位置供應商識別（本階段為 geoplugin）
    fromCache: boolean;                  // 是否來自快取（提升效能並降低外部依賴）
    elapsedMs: number;                   // 本次查詢耗時（毫秒），用於監控與調校逾時/快取策略
}


/**
 * Provider 查詢參數
 */
export interface GeoLookupParams {
    ip?: string;                          // 指定要查詢的 IP；不給則由 geoplugin 依呼叫來源判定
    timeoutMs: number;                    // 逾時時間（毫秒）；建議 500–800ms（避免阻塞 SSR）
    fetchImpl?: typeof fetch;             // 可選：注入自訂 fetch（單元測試、Proxy、重試策略等）
}


/**
 * 地理位置 Provider 介面
 */
export interface GeoProvider {
    name: "geoplugin";                    // 供應商名稱識別（固定字面量，便於日後擴充與追蹤）
    lookup(params: GeoLookupParams): Promise<GeoResult | null>; // 查詢地理資訊；失敗或逾時回傳 null
}