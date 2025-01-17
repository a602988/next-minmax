import { LanguagesType } from '@/types/languages';

export async function fetchLanguages(
    revalidateTime: number = 60 * 60 * 24 * 30 // Default to 30 days
): Promise<LanguagesType[]> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/demo/languages`, {
            next: {
                revalidate: revalidateTime,
                tags: ['languages']
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        if (data.code === "0000" && Array.isArray(data.data)) {
            return data.data;
        }
        throw new Error('Invalid data format received');
    } catch (error) {
        console.error('Failed to fetch languages:', error);
        return [];
    }
}
