// lib/getPageData.ts
import { PageType } from "@/types/pageType";
import { apiFetch } from "@/lib/apiClient";

/**
 * 取得頁面資料
 * @param project - 專案名稱
 * @param language - 語言代碼（例如 zh-TW）
 * @param uri - 頁面 URI（例如 '/'）
 * @param params - 額外的參數，預設為空字串
 * @returns 回傳 API 回傳的 data 內容，型別為 PageType 或 null
 */
export async function getPageData(
    project: string,
    language: string,
    uri: string,
    params: string = ""
): Promise<PageType | null> {
    const baseUrl = process.env.NEXT_SERVER_API_URL;
    if (!baseUrl) {
        throw new Error("NEXT_SERVER_API_URL is not defined");
    }

    const url = `${baseUrl}/ssr/page/detail?project=${encodeURIComponent(project)}&language=${encodeURIComponent(language)}&uri=${encodeURIComponent(uri)}&params=${encodeURIComponent(params)}`;

    try {
        // 假設 API 回傳的 JSON 格式為 { data: PageType }
        const result = await apiFetch<{ data: PageType }>(url);
        // console.log(result);
        return result.data;
    } catch (error) {
        console.error('Error fetching page data:', error);
        throw error;
    }
}
