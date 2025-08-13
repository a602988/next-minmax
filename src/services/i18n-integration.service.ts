import { languageService } from './language.service';
import { localesService } from './locales.service';
import { Language } from '@/types';
import { Locale} from '@/types';
import { routing } from '@/i18n/routing';
import { LOCALE_CONFIG } from '@/config';

/**
 * 國際化整合服務
 *
 * 功能說明：
 * - 統一管理動態語系資料與靜態路由配置的橋接
 * - 提供快取機制，減少 API 請求頻率
 * - 實現容錯降級，確保系統在 API 不可用時仍能正常運作
 * - 支援語系列表和國家地區對應關係的動態獲取
 *
 * 使用場景：
 * - 應用啟動時初始化語系配置
 * - 語系切換器組件獲取可用語系
 * - 中間件處理語系路由驗證
 * - SSR/SSG 伺服器端語系資料獲取
 * - 地理位置偵測後的語系重導
 */
export class I18nIntegrationService {
    // ==========================================
    // 語系資料快取
    // ==========================================

    /** 快取的語系列表 */
    private static cachedLanguages: Language[] | null = null;
    /** 語系資料最後更新時間 */
    private static lastFetchTime: number = 0;

    // ==========================================
    // 地區對應快取
    // ==========================================

    /** 快取的國家→語系對應表 */
    private static cachedCountryLocaleMap: Locale | null = null;
    /** 地區對應資料最後更新時間 */
    private static lastLocalesFetchTime: number = 0;

    // ==========================================
    // 語系管理方法
    // ==========================================

    /**
     * 取得動態語系清單並快取
     *
     * 功能：
     * - 從 API 獲取最新語系列表
     * - 實現記憶體快取，避免重複請求
     * - API 失敗時自動降級使用靜態配置
     *
     * @returns Promise<Language[]> 語系列表
     */
    static async getLanguages(): Promise<Language[]> {
        const now = Date.now();
        const cacheExpiry = LOCALE_CONFIG.CACHE.TTL * 1000; // 轉為毫秒

        // 檢查快取是否有效
        if (this.cachedLanguages && (now - this.lastFetchTime) < cacheExpiry) {
            return this.cachedLanguages;
        }

        try {
            // 從 API 獲取最新語系資料
            const languages = await languageService.getLanguages();
            this.cachedLanguages = languages;
            this.lastFetchTime = now;
            return languages;
        } catch (error) {
            console.warn('📦 無法載入動態語系，使用靜態配置', error);
            // 降級處理：返回靜態配置的語系
            return this.getStaticFallbackLanguages();
        }
    }

    /**
     * 將 Language[] 轉換為 next-intl 需要的 locales 陣列
     *
     * 用途：橋接動態語系資料與 Next.js 路由系統
     *
     * @returns Promise<string[]> 支援的語系代碼陣列
     */
    static async getSupportedLocales(): Promise<string[]> {
        const languages = await this.getLanguages();
        return languages.map(lang => lang.id);
    }

    /**
     * 取得預設語系
     *
     * 邏輯：
     * 1. 優先使用動態資料中標記為 default 的語系
     * 2. 找不到時使用配置檔的預設值
     *
     * @returns Promise<string> 預設語系代碼
     */
    static async getDefaultLocale(): Promise<string> {
        const languages = await I18nIntegrationService.getLanguages();
        const defaultLang = languages.find(lang => lang.default);
        return defaultLang?.id || LOCALE_CONFIG.DEFAULT_LOCALE;
    }

    // ==========================================
    // 地區對應管理方法
    // ==========================================

    /**
     * 取得國家→語系對應表並快取
     *
     * 功能：
     * - 從 API 獲取國家代碼與語系的對應關係
     * - 用於地理位置偵測後的語系重導
     * - 支援記憶體快取機制
     *
     * 使用場景：
     * - 中間件根據 IP 地理位置重導語系
     * - 語系切換器顯示地區相關選項
     *
     * @returns Promise<Locale> 國家語系對應表
     */
    static async getCountryLocaleMap(): Promise<Locale> {
        const now = Date.now();
        const cacheExpiry = LOCALE_CONFIG.CACHE.TTL * 1000;

        // 檢查快取是否有效
        if (this.cachedCountryLocaleMap && now - this.lastLocalesFetchTime < cacheExpiry) {
            return this.cachedCountryLocaleMap;
        }

        // 從 API 獲取最新對應表
        const map = await localesService.getLocales();
        this.cachedCountryLocaleMap = map;
        this.lastLocalesFetchTime = now;
        return map;
    }

    // ==========================================
    // 私有輔助方法
    // ==========================================

    /**
     * 靜態備援語系資料
     *
     * 當 API 不可用時的降級方案：
     * - 使用 routing.locales 的靜態配置
     * - 自動生成基本的語系資訊
     * - 確保系統基本功能不受影響
     *
     * @returns Language[] 靜態語系列表
     */
    private static getStaticFallbackLanguages(): Language[] {
        return routing.locales.map((locale, index) => ({
            id: locale,
            title: locale.toUpperCase(),
            native: locale.toUpperCase(),
            icon: '🌐',
            default: locale === routing.defaultLocale
        }));
    }
}