// TypeScript
// src/i18n/locale-cookie.ts
export const NEXT_LOCALE_COOKIE = {
    NAME: 'NEXT_LOCALE',
    PATH: '/',
    MAX_AGE_SECONDS: 60 * 60 * 24 * 180, // 180 天；與資料快取 TTL 無關
    SAME_SITE: 'Lax' as const,
    // 在 HTTPS 環境建議設為 true；本地可視情況調整
    SECURE: typeof window !== 'undefined' ? window.location.protocol === 'https:' : true,
};

export function buildNextLocaleCookie(value: string): string {
    const parts = [
        `${NEXT_LOCALE_COOKIE.NAME}=${encodeURIComponent(value)}`,
        `Path=${NEXT_LOCALE_COOKIE.PATH}`,
        `Max-Age=${NEXT_LOCALE_COOKIE.MAX_AGE_SECONDS}`,
        `SameSite=${NEXT_LOCALE_COOKIE.SAME_SITE}`,
    ];
    if (NEXT_LOCALE_COOKIE.SECURE) parts.push('Secure');
    return parts.join('; ');
}