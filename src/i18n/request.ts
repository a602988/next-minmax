import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {I18nIntegration} from './i18n-integration';
import {cookies} from 'next/headers';
import {env} from '@/env.mjs';
import {devLog, devWarn} from '@/lib/dev-logger';

/**
 * Next.js 國際化請求配置
 *
 * 功能：
 * - 處理每個請求的語系偵測與驗證
 * - 載入對應的翻譯訊息檔案
 * - 根據多語系開關決定是否整合動態語系
 * - 提供語系降級機制
 */
export default getRequestConfig(async ({requestLocale}) => {
    // 取得請求中的語系參數（來自 URL 路徑、Accept-Language Header 或 Cookie）
    const requested = await requestLocale;

    // 檢查是否啟用多語系功能
    if (!env.MULTI_LANGUAGE_ENABLED) {
        // 單語系模式：直接使用預設語系，不執行動態語系邏輯
        const locale = routing.defaultLocale;

        devLog(`🌍 單語系模式: 使用預設語系 ${locale}`);

        return {
            locale,
            // 載入預設語系的翻譯檔案
            messages: (await import(`../../messages/${locale}.json`)).default
        };
    }

    // 多語系模式：執行完整的動態語系邏輯
    devLog(`🌍 多語系模式: 開始動態語系處理`);

    // 1) 取得動態有效語系與動態預設語系（內含快取機制）
    let supportedLocales: string[] = [];
    let dynamicDefaultLocale = routing.defaultLocale;

    try {
        // 從 API 取得最新的支援語系清單
        supportedLocales = await I18nIntegration.getSupportedLocales();
        // 從 API 取得動態設定的預設語系
        dynamicDefaultLocale = await I18nIntegration.getDefaultLocale();
    } catch (e) {
        // 動態載入失敗時，使用 routing 的靜態預設作為兜底
        devWarn('⚠️ 載入動態 locales 失敗，使用靜態 routing 作為兜底', e);
        supportedLocales = [...routing.locales]; // 建立可變副本
        dynamicDefaultLocale = routing.defaultLocale;
    }

    // 2) 依優先序決定候選語系：URL 參數 → Cookie 儲存 → 動態預設 → 靜態預設
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

    const candidate = requested ||  // 優先使用 URL 中的語系
        (routing.localeDetection ? cookieLocale : undefined) ||  // 若啟用偵測則使用 Cookie
        dynamicDefaultLocale ||  // 使用 API 設定的預設語系
        routing.defaultLocale;   // 最後回退到靜態預設

    // 3) 嚴格驗證候選語系是否在支援清單中，無效則依序回退
    const isValid = supportedLocales.includes(candidate);
    const locale = isValid
        ? candidate  // 候選語系有效，直接使用
        : supportedLocales.includes(dynamicDefaultLocale)
            ? dynamicDefaultLocale  // 回退到動態預設語系
            : routing.defaultLocale;  // 最終回退到靜態預設語系

    // 4) 載入對應語系的翻譯檔案，失敗時回退到預設語系檔案
    let messages;
    try {
        // 嘗試載入目標語系的翻譯檔案
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (e) {
        // 翻譯檔案不存在時，回退到預設語系的翻譯檔案
        devWarn(`⚠️ 找不到 ${locale}.json，回退至 ${routing.defaultLocale}.json`, e);
        messages = (await import(`../../messages/${routing.defaultLocale}.json`)).default;
    }

    // 開發環境下輸出語系決策過程，便於除錯
    devLog(`🌍 語系決策: requested=${requested} cookie=${cookieLocale} final=${locale}`);

    return {
        locale,    // 最終確定的語系
        messages   // 對應的翻譯訊息
    };
});