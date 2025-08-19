/**
 * 地理位置偵測策略管理模組
 *
 * 此模組提供統一的地理位置偵測策略介面，抽象化不同的偵測方法，
 * 讓上層應用程式可以透過策略模式選擇最適合的地理偵測方式。
 *
 * 支援的偵測策略：
 * 1. api-only: 純第三方 API 偵測（目前實作 geoplugin）
 * 2. cdn-only: 僅使用 CDN 標頭偵測（預留擴充）
 * 3. cdn-fallback: CDN 優先，失敗時降級至 API（預留擴充）
 *
 * 設計原則：
 * - 策略模式：封裝不同偵測方法，便於切換和擴充
 * - 統一介面：提供一致的 API，隱藏底層實作細節
 * - 漸進增強：優先使用快速方法，失敗時自動降級
 * - 容錯設計：偵測失敗不阻塞主流程，回傳 null 讓上層處理
 *
 * 使用場景：
 * - middleware: 在請求初期快速偵測使用者地理位置
 * - SSR: 根據地理位置決定預設語系和內容
 * - 個人化: 提供地區相關的內容和服務
 *
 * 效能考量：
 * - API 偵測：準確但較慢，適合首次訪問或精確需求
 * - CDN 偵測：快速但精度較低，適合即時決策
 * - 混合策略：平衡速度與準確性，提供最佳使用者體驗
 *
 * 擴充性：
 * - 新增策略只需實作對應的 case 分支
 * - 參數結構支援各種偵測需求（IP、超時、快取等）
 * - 可注入自訂 fetch 實作，便於測試和代理
 */

// 作用：
// - 地理偵測策略的統一入口（目前先支援 api-only）
// - 抽象未來策略：cdn-only / cdn-fallback，讓上層呼叫端不需改動
// - 封裝 geoService，提供 detectCountry / detectGeo 便捷方法

import { geoService } from '@/features/geo/services/geo.service';
import type { GeoResult } from '@/features/geo/types/geo.types';

/**
 * 地理偵測策略
 * - api-only：只呼叫第三方 Geo API（目前使用 geoplugin）
 * - cdn-only：僅讀取 CDN 標頭（預留）
 * - cdn-fallback：優先 CDN，失敗改走 API（預留）
 */
export type GeoDetectionStrategy = 'api-only' | 'cdn-only' | 'cdn-fallback';

/**
 * 偵測參數
 * - ip：可選指定查詢 IP；不填則由供應商依來源 IP 判定
 * - timeoutMs：第三方 API 逾時（毫秒）
 * - forceRefresh：是否忽略快取強制重查
 * - fetchImpl：可注入自定 fetch（測試/代理）
 */
export type GeoDetectParams = {
    ip?: string;
    timeoutMs?: number;
    forceRefresh?: boolean;
    fetchImpl?: typeof fetch;
};

/**
 * 依策略偵測完整地理資訊（目前先支援 api-only）
 * - 回傳標準化結果 GeoResult 或 null
 */
export async function detectGeoByStrategy(
    params: GeoDetectParams = {},
    strategy: GeoDetectionStrategy = 'api-only'
): Promise<GeoResult | null> {
    switch (strategy) {
        case 'api-only':
            return geoService.detectGeo(params);

        // 預留：之後擴充 CDN 標頭偵測
        // case 'cdn-only':
        //   return detectViaCdnHeaders(...);

        // 預留：之後擴充 CDN 優先、API 備援
        // case 'cdn-fallback':
        //   return (await detectViaCdnHeaders(...)) ?? geoService.detectGeo(params);

        default:
            // 未知策略時，保守降級：不阻塞流程
            return null;
    }
}

/**
 * 依策略偵測國家代碼（TW/US/JP...）（目前先支援 api-only）
 * - 回傳 ISO-3166-1 alpha-2 的雙字母代碼或 null
 */
export async function detectCountryByStrategy(
    params: GeoDetectParams = {},
    strategy: GeoDetectionStrategy = 'api-only'
): Promise<string | null> {
    switch (strategy) {
        case 'api-only':
            return geoService.detectCountry(params);

        // 預留：之後擴充 CDN 標頭偵測
        // case 'cdn-only':
        //   return detectCountryViaCdnHeaders(...);

        // 預留：之後擴充 CDN 優先、API 備援
        // case 'cdn-fallback':
        //   // 先嘗試 CDN，取不到再走 API
        //   return (await detectCountryViaCdnHeaders(...)) ?? geoService.detectCountry(params);

        default:
            return null;
    }
}