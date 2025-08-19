
// 功能：從已快取的「國家→語系」對照表中，解析建議語言代碼
import { I18nIntegration } from '@/i18n/i18n-integration';

export async function resolveSuggestedLanguage(countryCode: string | null | undefined): Promise<string | null> {
    if (!countryCode) return null;
    try {
        const map = await I18nIntegration.getLocales(); // 已含記憶體快取
        // 假設 map 形如 { 'TW': 'zh-TW', 'US': 'en-US' }
        const lang = map[countryCode as keyof typeof map];
        return typeof lang === 'string' && lang.length ? lang : null;
    } catch {
        return null;
    }
}