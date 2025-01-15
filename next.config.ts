const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { 
        taint: true,//防止敏感資料洩露給客戶端(實驗性功能)
      },
};
 
module.exports = withNextIntl(nextConfig);