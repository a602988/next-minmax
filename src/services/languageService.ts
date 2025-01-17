import { LanguagesType } from '@/types/languages';

export async function fetchLanguages(
    url: string = `${process.env.NEXT_PUBLIC_API_URL}/languages`,
    revalidateTime: number = 60 * 60 * 24 * 30, // Default to 30 days
    timeout: number = 5000 // 5 seconds timeout
): Promise<LanguagesType[]> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const res = await fetch(url, {
            next: {
                revalidate: revalidateTime,
                tags: ['languages']
            },
            signal: controller.signal
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const { code, data } = await res.json();
        if (code === "0000" && Array.isArray(data)) {
            return data;
        }
        throw new Error('Invalid data format received');
    } catch (error) {
        console.error('Failed to fetch languages:', error);
        return [];
    } finally {
        clearTimeout(timeoutId);
    }
}