import createNextIntlPlugin from 'next-intl/plugin';
import TerserPlugin from 'terser-webpack-plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // 現有的 SVG 處理配置
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    // 使用預先處理器
    if (!dev && !isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
            output: {
              comments: false,
            },
          },
        }),
      ];
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });

      config.devtool = 'source-map';
    }

    return config;
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: true,

  images: {
    domains: ['localhost'], // 如果您的圖片是從本地服務器加載的
  },
};

export default withNextIntl(nextConfig);
