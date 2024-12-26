import createNextIntlPlugin from 'next-intl/plugin';
import TerserPlugin from 'terser-webpack-plugin';

// 創建 next-intl 插件實例
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack 配置
  webpack: (config, { dev, isServer }) => {
    // SVG 文件處理配置
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    // 生產環境優化配置
    if (!dev && !isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // 移除 console 語句
            },
            output: {
              comments: false, // 移除註釋
            },
          },
        }),
      ];
    }

    return config;
  },

  // 啟用 React 嚴格模式
  reactStrictMode: true,

  // 在生產環境中生成源映射
  productionBrowserSourceMaps: true,

  // 圖片域名配置
  images: {
    domains: ['localhost'], // 允許從 localhost 加載圖片
    dangerouslyAllowSVG: true, // 允許加載和優化 SVG 文件，但可能存在安全風險
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // 內容安全策略（CSP）配置：
    // - default-src 'self': 默認只允許從當前域名加載資源
    // - script-src 'none': 禁止執行任何腳本
    // - sandbox: 為處理後的圖片啟用最嚴格的沙箱保護
    // 這個配置提供了強大的安全保護，但可能會影響某些功能，請根據需求調整
  },
};

// 導出配置，並應用 next-intl 插件
export default withNextIntl(nextConfig);
