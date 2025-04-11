import API_ENDPOINTS from '@/services/minmax/api/apiConfig';
const isDevelopment = process.env.NODE_ENV === 'development'; // 判斷當前環境是否為開發環境
const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME || 'minmax2025'; // 項目名稱
const ApiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://v5.jeffy.test/api/ssr'; // API 基本 URL

/**
 * 構建完整的 API 請求 URL
 * @param endpointKey - API 端點的鍵
 * @param params - 查詢參數
 * @returns 完整的 API 請求 URL
 */
export function buildMinmaxUrl(
    endpointKey: keyof typeof API_ENDPOINTS,
    params: Record<string, string> = {}
): string {
    const basePath = API_ENDPOINTS[endpointKey]; // 獲取 API 端點的基本路徑

    // 確保 basePath 是字符串
    if (typeof basePath !== 'string') {
        throw new Error(`Invalid endpoint key: ${endpointKey}`);
    }

    // 根據環境選擇基本 URL
    const baseUrl = ApiBaseUrl;

    // 在開發環境中添加項目名稱作為參數
    if (isDevelopment) {
        params.project = projectName;
    }

    // 將查詢參數轉換為字符串
    const searchParams = new URLSearchParams(params).toString();

    // 確保 baseUrl 和 basePath 之間有一個斜杠
    const separator = baseUrl.endsWith('/') || basePath.startsWith('/') ? '' : '/';

    // 返回完整的 URL
    return `${baseUrl}${separator}${basePath}${searchParams ? `?${searchParams}` : ''}`;
}
