import createNextIntlPlugin from 'next-intl/plugin';
import { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    experimental: {
        taint: true, // 防止敏感資料洩露給客戶端(實驗性功能)
    },
    env: {
        NEXT_SERVER_API_URL: process.env.NEXT_SERVER_API_URL,
    },
    serverRuntimeConfig: {
        projectName: process.env.PROJECT_NAME || 'minmax2025',
        // 在這裡添加其他服務器端配置項
    },
    publicRuntimeConfig: {
        // 在這裡添加可以在客戶端使用的配置項
    },
};

export default withNextIntl(nextConfig);
