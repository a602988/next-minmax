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
import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import {I18nIntegrationService} from '@/services/i18n-integration.service';
import {LOCALE_CONFIG} from '@/config';

export default getRequestConfig(async ({requestLocale}) => {
    const requested = await requestLocale;
    let locale = routing.defaultLocale;

    // 🔄 動態語系驗證流程
    if (LOCALE_CONFIG.DETECTION.ENABLED) {
        try {
            // 取得動態語系清單
            const supportedLocales = await I18nIntegrationService.getSupportedLocales();
            const dynamicDefaultLocale = await I18nIntegrationService.getDefaultLocale();

            // 使用動態語系清單驗證
            if (requested && supportedLocales.includes(requested)) {
                // 確保 requested 是有效的 locale
                locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
            } else {
                // 確保 dynamicDefaultLocale 是有效的 locale
                locale = hasLocale(routing.locales, dynamicDefaultLocale) ? dynamicDefaultLocale : routing.defaultLocale;
            }

            console.log(`🌍 動態語系決策: 請求=${requested} → 最終=${locale}`);
        } catch (error) {
            console.warn('⚠️ 動態語系載入失敗，使用靜態配置', error);
            // 降級至靜態驗證
            locale = hasLocale(routing.locales, requested)
                ? requested
                : routing.defaultLocale;
        }
    } else {
        // 使用靜態驗證
        locale = hasLocale(routing.locales, requested)
            ? requested
            : routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});