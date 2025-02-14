import { PageType } from "@/types/pageType";
import nodeFetch, { RequestInit as NodeFetchRequestInit } from 'node-fetch';
import https from 'https';

// 定義一個通用的 Fetch 類型
type UniversalFetch = typeof fetch | typeof nodeFetch;

// 創建一個通用的 fetch 函數
const universalFetch: UniversalFetch = process.env.NODE_ENV === 'development' ? nodeFetch : global.fetch;

// 只在開發模式下創建 httpsAgent
const httpsAgent = process.env.NODE_ENV === 'development' ? new https.Agent({
    rejectUnauthorized: false
}) : undefined;

// 定義一個通用的 RequestInit 類型
type UniversalRequestInit = RequestInit & NodeFetchRequestInit;

export async function getPageData(): Promise<PageType | null> {
    const url = `${process.env.NEXT_SERVER_API_URL}/ssr/page/detail?project=minmax2025&language=zh-TW&uri=/&params=`;

    const fetchOptions: UniversalRequestInit = process.env.NODE_ENV === 'development'
        ? { agent: httpsAgent as any }
        : {};

    try {
        const response = await universalFetch(url, fetchOptions);


        // api路徑有問題回傳錯誤
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 轉為json格式
        const data = await response.json();
        console.log(data);
        return data.data;
    } catch (error) {
        console.error('Error fetching page data:', error);
        throw error;
    }
}
