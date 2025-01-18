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
};

export default withNextIntl(nextConfig);
