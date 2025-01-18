import { LanguagesType } from '@/types/languages';
import { FetchApiOptions, fetchApi } from "./apiService";

export async function getLanguagesData(
    options: FetchApiOptions = {}
): Promise<Array<LanguagesType> | null> {
    const url = '/languages';

    const defaultOptions: FetchApiOptions = {
        revalidate: 60 * 60 * 24 * 30, // Default to 30 days
        tags: ['languages'],
        ...options
    };

    try {
        return await fetchApi<Array<LanguagesType>>(url, defaultOptions);
    } catch (error) {
        console.error('Failed to fetch languages:', error);
        return null;
    }
}
