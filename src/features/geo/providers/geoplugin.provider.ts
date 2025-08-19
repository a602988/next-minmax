/**
 * geoplugin.com 地理位置偵測供應商實作
 *
 * 此模組實作了 geoplugin.com 的地理位置偵測服務，將其 API 回應轉換為
 * 標準化的 GeoResult 格式。geoplugin 是一個免費的 IP 地理位置服務，
 * 無需 API 金鑰即可使用，適合開發和測試環境。
 *
 * 主要特性：
 * - 免費服務，無需註冊或 API 金鑰
 * - 支援 IPv4 和 IPv6 地址查詢
 * - 提供國家、地區、城市、經緯度等資訊
 * - 包含時區和貨幣資訊
 * - 支援自訂逾時控制和 fetch 實作
 *
 * 使用限制：
 * - 免費服務可能有請求頻率限制
 * - 準確度可能不如付費服務
 * - 生產環境建議搭配快取和備援策略
 *
 * API 端點：https://www.geoplugin.net/json.gp
 * 文件：http://www.geoplugin.com/webservices/json
 */

import { GeoProvider, GeoLookupParams, GeoResult } from '../types/geo.types';

/**
 * geoplugin.com 的回應型別（僅列常用欄位，保留額外欄位以防未來擴充）
 */
interface GeoPluginResponse {
    geoplugin_request?: string;        // 回傳之請求 IP
    geoplugin_countryCode?: string;    // 國家代碼（ISO 3166-1 alpha-2）
    geoplugin_countryName?: string;    // 國家名稱
    geoplugin_region?: string;         // 州/省/行政區（名稱）
    geoplugin_regionCode?: string;     // 州/省/行政區（代碼）
    geoplugin_city?: string;           // 城市
    geoplugin_latitude?: string | number;   // 緯度
    geoplugin_longitude?: string | number;  // 經度
    geoplugin_timezone?: string;       // 時區（例如 Asia/Taipei）
    geoplugin_currencyCode?: string;   // 貨幣代碼（例如 TWD、USD）
    geoplugin_currencySymbol?: string; // 貨幣符號（例如 NT$、$）
    [key: string]: unknown;            // 允許其他未列舉的欄位
}

/**
 * geoplugin.com Provider 實作
 * - 目標：將 geoplugin 的回應轉換為標準化的 GeoResult
 * - 特性：無需 API Key；適合開發/測試；生產請搭配快取與備援策略
 */
export const geoPluginProvider: GeoProvider = {
    name: 'geoplugin', // 供應商識別字串（方便記錄與切換）

    async lookup({ ip, timeoutMs, fetchImpl }: GeoLookupParams): Promise<GeoResult | null> {
        const baseUrl = 'https://www.geoplugin.net/json.gp';                   // geoplugin JSON 端點
        const url = ip ? `${baseUrl}?ip=${encodeURIComponent(ip)}` : baseUrl;  // 可選：指定 IP，未指定則以來源 IP 判斷

        // 逾時控制：避免阻塞 SSR / 中介層
        const controller = new AbortController();                               // 用於中止 fetch 的控制器
        const timer = setTimeout(() => controller.abort(), Math.max(1, timeoutMs)); // 在 timeoutMs 後中止請求
        const started = Date.now();                                             // 記錄起始時間以計算耗時

        try {
            // 可注入自訂 fetch（測試用或加代理/重試），預設使用全域 fetch
            const fetchFn = fetchImpl ?? fetch;                                 // 若未提供則採用全域 fetch
            const res = await fetchFn(url, {
                method: 'GET',
                headers: { Accept: 'application/json' },                        // 明確要求 JSON
                signal: controller.signal,                                      // 綁定中止訊號
            });

            // HTTP 非 2xx 視為失敗，降級為 null（不拋例外，保持上層流程平順）
            if (!res.ok) {
                return null;                                                    // 回傳 null 表示未取得有效資料
            }

            const json: GeoPluginResponse = await res.json();                   // 解析 JSON 回應
            const elapsedMs = Date.now() - started;                             // 計算本次請求耗時（毫秒）

            // 將 geoplugin 回應映射到標準 GeoResult
            const result: GeoResult = {
                ip: safeString(json?.geoplugin_request),                        // 偵測到的 IP（若回傳）
                countryCode: safeString(json?.geoplugin_countryCode) ?? null,   // 國家代碼（失敗則 null）
                countryName: safeString(json?.geoplugin_countryName) ?? null,   // 國家名稱
                region: safeString(json?.geoplugin_region)                      // 優先採用名稱
                    ?? safeString(json?.geoplugin_regionCode)               // 次選代碼
                    ?? null,                                                // 最終無資料
                city: safeString(json?.geoplugin_city) ?? null,                 // 城市
                latitude: safeNumber(json?.geoplugin_latitude),                 // 緯度（字串/數字 → number|null）
                longitude: safeNumber(json?.geoplugin_longitude),               // 經度（字串/數字 → number|null）
                timeZone: safeString(json?.geoplugin_timezone) ?? null,         // 時區（例如 Asia/Taipei）
                currency: normalizeCurrency(json),                               // 貨幣資訊（皆無時回傳 null）
                raw: json,                                                      // 保留原始回應以利除錯（不建議直接曝露至前端）
                provider: 'geoplugin',                                          // 供應商識別（統一格式）
                fromCache: false,                                               // Provider 本身不處理快取；由外層服務負責
                elapsedMs,                                                      // 本次查詢耗時（毫秒）
            };

            return result;                                                      // 回傳標準化結果
        } catch {
            // 包含逾時（AbortError）在內的任何錯誤皆降級為 null，避免中斷流程
            return null;                                                        // 回傳 null 交由上層兜底
        } finally {
            clearTimeout(timer);                                                // 清理逾時計時器，避免資源洩漏
        }
    },
};

/* 工具函式（純函式，便於測試與重用） */

/**
 * 將未知值安全轉為非空字串
 * - 空字串、null、undefined 皆回傳 undefined
 */
function safeString(val: unknown): string | undefined {
    if (val === null || val === undefined) return undefined;                    // 無值直接回 undefined
    const s = String(val).trim();                                               // 轉字串並去除前後空白
    return s.length ? s : undefined;                                            // 空字串視為無效
}

/**
 * 將未知值安全轉為 number
 * - 非有限數字或無值回傳 null
 */
function safeNumber(val: unknown): number | null {
    if (val === null || val === undefined) return null;                         // 無值回 null
    const n = Number(val);                                                      // 嘗試轉為數字
    return Number.isFinite(n) ? n : null;                                       // 非有限數字視為無效
}

/**
 * 正規化 geoplugin 的貨幣資訊
 * - 若 code 與 symbol 皆缺失則回傳 null，避免產生空物件
 */
function normalizeCurrency(json: GeoPluginResponse): { code?: string | null; symbol?: string | null } | null {
    const code = safeString(json?.geoplugin_currencyCode) ?? null;              // 貨幣代碼（例如 TWD、USD）
    const symbol = safeString(json?.geoplugin_currencySymbol) ?? null;          // 貨幣符號（例如 NT$、$）
    if (code === null && symbol === null) return null;                          // 兩者皆無 → 視為無資料
    return { code, symbol };                                                    // 至少有一項則回傳物件
}