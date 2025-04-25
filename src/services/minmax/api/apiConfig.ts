
export const API_ENDPOINTS = {
    // 系統相關
    LANGUAGES: `languages`,
    WEB_DATA: `web-data`,
    // 可以添加更多 API 端點
    // 用戶相關
    USER: {
        LOGIN: `/auth/login`,
        REGISTER: `/auth/register`,
        PROFILE: `user/profile`,
    },

    // 內容相關
    CONTENT: {
        ARTICLES: `/content/articles`,
        CATEGORIES: `/content/categories`,
    },

};

export default API_ENDPOINTS;
