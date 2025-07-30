/**
 * Next.js 國際化請求配置
 * 
 * 處理流程：
 * 1. 使用者訪問帶有語言參數的路由 (例如: /zh/about, /en/about)
 * 2. Next.js 從 URL 路由段中提取語言識別碼
 * 3. 驗證語言識別碼是否在支援的語言清單中
 * 4. 動態載入對應的語言資源檔案
 * 5. 將語言配置和翻譯資源提供給應用程式
 */

import {getRequestConfig} from 'next-intl/server'; // Next.js 國際化請求配置工廠函數
import {hasLocale} from 'next-intl'; // 語言識別碼驗證工具函數
import {routing} from './routing'; // 路由配置模組，包含支援語言清單和預設語言

export default getRequestConfig(async ({requestLocale}) => {
    // 取得請求中的語言識別碼 (對應 [locale] 動態路由段)
    // 使用 await 處理可能的異步語言識別碼解析
    const requested = await requestLocale;
    
    // 語言識別碼驗證與回退策略
    // 若請求的語言在支援清單中則使用該語言，否則回退至預設語言
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    // 回傳國際化配置物件
    return {
        locale, // 最終確定的語言識別碼
        messages: (await import(`../../messages/${locale}.json`)).default // 動態載入語言資源檔案
    };
});
