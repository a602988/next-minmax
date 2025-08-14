import { defineRouting } from 'next-intl/routing';
import { SERVER_LOCALE_CONFIG } from '@/config/locale.server.config';

export const routing = defineRouting({
    // 支援的語系 - 從環境變數讀取，會被 API 動態覆蓋
    locales: SERVER_LOCALE_CONFIG.SUPPORTED_LOCALES as [string, ...string[]],

    // 預設語系 - 從環境變數讀取，會被 API 動態覆蓋
    defaultLocale: SERVER_LOCALE_CONFIG.DEFAULT_LOCALE,

    // 語系前綴模式 - 從環境變數讀取
    localePrefix: SERVER_LOCALE_CONFIG.LOCALE_PREFIX_MODE,

    // 啟用語系檢測 - 從環境變數讀取
    localeDetection: SERVER_LOCALE_CONFIG.DETECTION.ENABLED
});