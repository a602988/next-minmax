/**
 * 地理位置相關 Cookie 管理模組
 *
 * 此模組統一管理地理位置偵測相關的 Cookie 操作，包含偵測到的國家、
 * 建議的語言和建議的站點等資訊。主要用於在 middleware 中儲存地理
 * 偵測結果，並在 SSR 階段讀取這些資訊作為語系和站點決策的依據。
 *
 * 管理的 Cookie：
 * - detected_country: 偵測到的使用者國家代碼
 * - suggested_language: 根據地理位置建議的語言
 * - suggested_site: 根據地理位置建議的站點
 *
 * 特性：
 * - 預設保存 1 天，可自訂保存期限
 * - 生產環境自動啟用 secure 模式
 * - 預設 sameSite='lax' 提供適當的安全性
 * - httpOnly=false 允許前端讀取建議值
 * - 支援跨子網域設定（透過 domain 參數）
 *
 * 使用場景：
 * - middleware: 寫入地理偵測結果和建議值
 * - SSR: 讀取 Cookie 作為語系/站點決策參考
 * - 使用者手動切換: 清除建議值避免干擾
 */

import { cookies } from 'next/headers';

/* ==============================
 * 常數與型別定義
 * ============================== */

/**
 * 地理位置相關 Cookie 名稱常數
 * 統一管理 Cookie 名稱，避免拼寫錯誤和不一致
 */
export const GEO_COOKIE = {
    /** 偵測到的國家代碼 Cookie 名稱 */
    detectedCountry: 'detected_country',
    /** 建議的語言 Cookie 名稱 */
    suggestedLanguage: 'suggested_language',
    /** 建議的站點 Cookie 名稱 */
    suggestedSite: 'suggested_site',
} as const;

/**
 * Cookie 基礎設定選項
 * 提供彈性的 Cookie 配置，適應不同的使用場景
 */
type CookieBaseOptions = {
    /** 保存天數，預設 1 天 */
    days?: number;
    /** Cookie 路徑，預設 '/' */
    path?: string;
    /** 站點網域（如需跨子網域可設定為頂層網域） */
    domain?: string;
    /** 強制 HTTPS，預設：生產環境自動 true */
    secure?: boolean;
    /** SameSite 屬性，控制跨站請求時的 Cookie 傳送 */
    sameSite?: 'lax' | 'strict' | 'none';
    /** 是否僅允許伺服器端讀取，預設 false（前端需要讀取建議值） */
    httpOnly?: boolean;
};

/* ==============================
 * 工具函式：環境檢測與時間轉換
 * ============================== */

/**
 * 檢測是否為生產環境
 * 用於自動決定是否啟用 secure 模式
 *
 * @returns 是否為生產環境
 */
function isProd(): boolean {
    return process.env.NODE_ENV === 'production';
}

/**
 * 將天數轉換為秒數（Max-Age 格式）
 * Next.js cookies API 使用秒為單位
 *
 * @param days 天數
 * @returns 對應的秒數，最小值為 1 秒
 */
function maxAgeFromDays(days: number): number {
    // 以秒為單位（Next.js cookies API 使用秒）
    return Math.max(1, Math.round(days * 24 * 60 * 60));
}

/**
 * 產生預設的 Cookie 選項
 * 合併使用者提供的選項與系統預設值
 *
 * @param overrides 使用者自訂的選項
 * @returns 完整的 Cookie 設定選項
 */
function defaultCookieOptions(overrides?: CookieBaseOptions) {
    const {
        days = 1,                // 預設保存 1 天
        path = '/',              // 預設根路徑
        domain,                  // 預設不設定 domain
        secure = isProd(),       // 生產環境預設啟用 secure
        sameSite = 'lax',        // 預設 lax 模式，平衡安全性與功能性
        httpOnly = false,        // 預設允許前端讀取
    } = overrides ?? {};

    return {
        maxAge: maxAgeFromDays(days),
        path,
        domain,
        secure,
        sameSite,
        httpOnly,
    } as const;
}

/* ==============================
 * 讀取工具函式
 * ============================== */

/**
 * 取得偵測到的國家代碼
 *
 * @returns 國家代碼字串，如果未設定則回傳 null
 */
export async function getDetectedCountry(): Promise<string | null> {
    const store = await cookies(); // cookies() 型別為 Promise<ReadonlyRequestCookies>
    return store.get(GEO_COOKIE.detectedCountry)?.value ?? null;
}

/**
 * 取得建議的語言代碼
 *
 * @returns 語言代碼字串，如果未設定則回傳 null
 */
export async function getSuggestedLanguage(): Promise<string | null> {
    const store = await cookies();
    return store.get(GEO_COOKIE.suggestedLanguage)?.value ?? null;
}

/**
 * 取得建議的站點代碼
 *
 * @returns 站點代碼字串，如果未設定則回傳 null
 */
export async function getSuggestedSite(): Promise<string | null> {
    const store = await cookies();
    return store.get(GEO_COOKIE.suggestedSite)?.value ?? null;
}

/**
 * 批次取得目前的地理建議 Cookie 狀態
 * 方便一次性取得所有相關資訊，用於除錯或決策邏輯
 *
 * @returns 包含所有地理建議 Cookie 值的物件
 */
export async function getGeoSuggestionCookies(): Promise<{
    detectedCountry: string | null;
    suggestedLanguage: string | null;
    suggestedSite: string | null;
}> {
    const store = await cookies();
    return {
        detectedCountry: store.get(GEO_COOKIE.detectedCountry)?.value ?? null,
        suggestedLanguage: store.get(GEO_COOKIE.suggestedLanguage)?.value ?? null,
        suggestedSite: store.get(GEO_COOKIE.suggestedSite)?.value ?? null,
    };
}

/* ==============================
 * 寫入工具函式
 * ============================== */

/**
 * 設定偵測到的國家代碼
 *
 * @param value 國家代碼，null 表示清除 Cookie
 * @param opts 自訂 Cookie 選項
 */
export async function setDetectedCountry(value: string | null, opts?: CookieBaseOptions): Promise<void> {
    const store = await cookies();
    if (value === null) {
        // 清除 Cookie：設定空值並將 maxAge 設為 0
        await store.set(GEO_COOKIE.detectedCountry, '', { maxAge: 0, path: '/', sameSite: 'lax' });
        return;
    }
    await store.set(GEO_COOKIE.detectedCountry, value, defaultCookieOptions(opts));
}

/**
 * 設定建議的語言代碼
 *
 * @param value 語言代碼，null 表示清除 Cookie
 * @param opts 自訂 Cookie 選項
 */
export async function setSuggestedLanguage(value: string | null, opts?: CookieBaseOptions): Promise<void> {
    const store = await cookies();
    if (value === null) {
        // 清除 Cookie：設定空值並將 maxAge 設為 0
        await store.set(GEO_COOKIE.suggestedLanguage, '', { maxAge: 0, path: '/', sameSite: 'lax' });
        return;
    }
    await store.set(GEO_COOKIE.suggestedLanguage, value, defaultCookieOptions(opts));
}

/**
 * 設定建議的站點代碼
 *
 * @param value 站點代碼，null 表示清除 Cookie
 * @param opts 自訂 Cookie 選項
 */
export async function setSuggestedSite(value: string | null, opts?: CookieBaseOptions): Promise<void> {
    const store = await cookies();
    if (value === null) {
        // 清除 Cookie：設定空值並將 maxAge 設為 0
        await store.set(GEO_COOKIE.suggestedSite, '', { maxAge: 0, path: '/', sameSite: 'lax' });
        return;
    }
    await store.set(GEO_COOKIE.suggestedSite, value, defaultCookieOptions(opts));
}

/**
 * 批次寫入地理建議 Cookie
 * 常用於 middleware 在一次地理偵測後統一寫入所有建議值
 *
 * @param params 要設定的 Cookie 值物件
 *   - undefined: 表示「不變更」該 Cookie
 *   - null: 表示「清除」該 Cookie
 *   - string: 表示「設定」該 Cookie 為指定值
 * @param opts 共用的 Cookie 選項
 */
export async function setGeoSuggestionCookies(
    params: {
        detectedCountry?: string | null;
        suggestedLanguage?: string | null;
        suggestedSite?: string | null;
    },
    opts?: CookieBaseOptions
): Promise<void> {
    const { detectedCountry, suggestedLanguage, suggestedSite } = params;

    // 只處理明確指定的值，undefined 表示不變更
    if (detectedCountry !== undefined) {
        await setDetectedCountry(detectedCountry, opts);
    }
    if (suggestedLanguage !== undefined) {
        await setSuggestedLanguage(suggestedLanguage, opts);
    }
    if (suggestedSite !== undefined) {
        await setSuggestedSite(suggestedSite, opts);
    }
}
/* ==============================
 * 清除工具函式（全部或單個）
 * ============================== */

/**
 * 清除偵測到的國家代碼 Cookie
 * 將 Cookie 設為空值並立即過期
 */
export async function clearDetectedCountry(): Promise<void> {
    const store = await cookies();
    await store.set(GEO_COOKIE.detectedCountry, '', { maxAge: 0, path: '/', sameSite: 'lax' });
}

/**
 * 清除建議的語言代碼 Cookie
 * 將 Cookie 設為空值並立即過期
 */
export async function clearSuggestedLanguage(): Promise<void> {
    const store = await cookies();
    await store.set(GEO_COOKIE.suggestedLanguage, '', { maxAge: 0, path: '/', sameSite: 'lax' });
}

/**
 * 清除建議的站點代碼 Cookie
 * 將 Cookie 設為空值並立即過期
 */
export async function clearSuggestedSite(): Promise<void> {
    const store = await cookies();
    await store.set(GEO_COOKIE.suggestedSite, '', { maxAge: 0, path: '/', sameSite: 'lax' });
}

/**
 * 清除全部地理建議 Cookie
 * 一次性清除所有地理位置相關的 Cookie，常用於使用者手動重置或
 * 系統需要重新進行地理偵測時
 */
export async function clearAllGeoSuggestionCookies(): Promise<void> {
    const store = await cookies();
    // 批次清除所有地理相關 Cookie
    await store.set(GEO_COOKIE.detectedCountry, '', { maxAge: 0, path: '/', sameSite: 'lax' });
    await store.set(GEO_COOKIE.suggestedLanguage, '', { maxAge: 0, path: '/', sameSite: 'lax' });
    await store.set(GEO_COOKIE.suggestedSite, '', { maxAge: 0, path: '/', sameSite: 'lax' });
}