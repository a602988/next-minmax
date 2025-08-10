import { languageService } from './language.service';
import { Language } from '@/types';
import { routing } from '@/i18n/routing';
import { LOCALE_CONFIG } from '@/config';

export class I18nIntegrationService {
    private static cachedLanguages: Language[] | null = null;
    private static lastFetchTime: number = 0;

    /**
     * 取得動態語系清單並快取
     */
    static async getLanguages(): Promise<Language[]> {
        const now = Date.now();
        const cacheExpiry = LOCALE_CONFIG.CACHE.TTL * 1000; // 轉為毫秒

        // 檢查快取是否有效
        if (this.cachedLanguages && (now - this.lastFetchTime) < cacheExpiry) {
            return this.cachedLanguages;
        }

        try {
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
     */
    static async getSupportedLocales(): Promise<string[]> {
        const languages = await this.getLanguages();
        return languages.map(lang => lang.id);
    }

    /**
     * 取得預設語系
     */
    static async getDefaultLocale(): Promise<string> {
        const languages = await I18nIntegrationService.getLanguages();
        const defaultLang = languages.find(lang => lang.default);
        return defaultLang?.id || LOCALE_CONFIG.DEFAULT_LOCALE;
    }

    /**
     * 靜態備援語系資料
     */
    /**
     * 靜態備援語系資料
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