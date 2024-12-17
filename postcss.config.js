/* eslint-env node */

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    'autoprefixer',
  ],
};

// 生產環境特定配置
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push([
    'cssnano',
    {
      preset: 'default',
    },
  ]);
}
