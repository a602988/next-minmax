const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

export const API_ENDPOINTS = {
    // 系統相關
    LANGUAGES: `${API_BASE_URL}/languages`,

    // 可以添加更多 API 端點
    // 用戶相關
    USER: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        REGISTER: `${API_BASE_URL}/auth/register`,
        PROFILE: `${API_BASE_URL}/user/profile`,
    },

    // 內容相關
    CONTENT: {
        ARTICLES: `${API_BASE_URL}/content/articles`,
        CATEGORIES: `${API_BASE_URL}/content/categories`,
    },

};

export default API_ENDPOINTS;
