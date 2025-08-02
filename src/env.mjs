import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * 環境變數配置
 * 使用 @t3-oss/env-nextjs 進行型別安全的環境變數驗證
 */
export const env = createEnv({
    server: {
        // 地理重導功能開關
        // 控制是否啟用基於地理位置的自動重導功能
        ENABLE_GEO_REDIRECT: z.string().transform((val) => val === "true").default("false"),

        // 強制重導開關
        // 當啟用時，會強制執行重導而不考慮其他條件
        FORCE_REDIRECT: z.string().transform((val) => val === "true").default("false"),

        // 多語系功能開關
        // 控制整個應用程式是否支援多語系功能
        ENABLE_MULTI_LANGUAGE: z.string().transform((val) => val === "true").default("true"),

        // API 配置
        // 一般 API 請求的超時時間（毫秒）
        API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("5000"),

        // 內容 API 請求的超時時間（毫秒）
        // 通常內容 API 需要更長的處理時間
        CONTENT_API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("10000"),

        // 專案配置
        // 專案識別碼，用於區分不同的專案或環境
        PROJECT_CODE: z.string().default("minmax2025"),

        // 預設語系
        // 當無法偵測使用者語系時使用的預設語言
        DEFAULT_LANGUAGE: z.string().default("zh-TW"),

        // 國家子網域映射 (JSON 字串)
        // 定義國家代碼與對應子網域的映射關係
        // 格式: {"國家代碼": "子網域"}
        COUNTRY_SUBDOMAIN_MAP: z.string().default('{"TW": "tw", "US": "us", "JP": "jp"}'),
    },
    client: {
        // 前端需要的環境變數
        // 這些變數會暴露給瀏覽器端，必須以 NEXT_PUBLIC_ 開頭

        // 前端專案識別碼
        // 與伺服器端的 PROJECT_CODE 對應，供前端使用
        NEXT_PUBLIC_PROJECT_CODE: z.string().default("minmax2025"),

        // 前端多語系功能開關
        // 控制前端是否啟用多語系相關功能
        NEXT_PUBLIC_ENABLE_MULTI_LANGUAGE: z.string().transform((val) => val === "true").default("true"),
    },
    runtimeEnv: {
        // 運行時環境變數映射
        // 將 process.env 中的值映射到對應的配置項目

        // 伺服器端環境變數
        ENABLE_GEO_REDIRECT: process.env.ENABLE_GEO_REDIRECT,
        FORCE_REDIRECT: process.env.FORCE_REDIRECT,
        ENABLE_MULTI_LANGUAGE: process.env.ENABLE_MULTI_LANGUAGE,
        API_TIMEOUT: process.env.API_TIMEOUT,
        CONTENT_API_TIMEOUT: process.env.CONTENT_API_TIMEOUT,
        PROJECT_CODE: process.env.PROJECT_CODE,
        DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE,
        COUNTRY_SUBDOMAIN_MAP: process.env.COUNTRY_SUBDOMAIN_MAP,

        // 客戶端環境變數
        NEXT_PUBLIC_PROJECT_CODE: process.env.NEXT_PUBLIC_PROJECT_CODE,
        NEXT_PUBLIC_ENABLE_MULTI_LANGUAGE: process.env.NEXT_PUBLIC_ENABLE_MULTI_LANGUAGE,
    },
});