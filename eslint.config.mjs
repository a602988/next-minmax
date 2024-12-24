import { getPresets } from 'eslint-config-molindo';

const baseConfig = await getPresets('typescript', 'react', 'tailwind');

export default [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        process: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    settings: {
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['src']
        }
      }
    },
    rules: {
      'tailwindcss/classnames-order': 'off', // 關閉css字母排序的警告
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^next-intl/'],
        },
      ],
    },
  },
];
