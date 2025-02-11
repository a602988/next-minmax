import { cachedApiFetch } from '@/lib/cachedApiClient';
import { SystemMenuType } from '@/types/systemMenuType';


/**
 * 取得選單資料：
 * - 若使用者未登入，ctx.req.headers.cookie 為 undefined 或不包含會員資訊，
 *   此時第三方 API 回傳公共選單（共用快取）。
 * - 若使用者已登入，Cookie 中有會員帳號資訊，則第三方 API 根據此資訊返回個人化選單。
 *
 * @param ctx Next.js 頁面上下文（例如 getServerSideProps 的 context）
 * @returns 選單項目陣列
 */
export async function getMenuData(ctx?: { req?: any }): Promise<SystemMenuType[]> {
    // 第三方 API 的 URL（請依實際 API 調整）
    const apiUrl = `${process.env.NEXT_SERVER_API_URL}/system-menus`;

    // 準備 fetch 選項
    const options: RequestInit = {};

    // 若在伺服器端並有請求物件，就將 cookie 傳遞出去
    if (ctx?.req && ctx.req.headers?.cookie) {
        options.headers = {
            // 將原始 cookie 傳遞給第三方 API，
            // 第三方 API 會根據 cookie 判斷是否為會員請求並返回對應資料
            'Cookie': ctx.req.headers.cookie
        };
    }

    // 直接返回 cachedApiFetch 的結果，不再使用中間變數 data
    return cachedApiFetch(apiUrl, options);
}
