import { getPresets } from 'eslint-config-molindo';
import next from 'eslint-plugin-next';

const baseConfig = await getPresets('typescript', 'react', 'tailwind');

export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx'], // Specify the files this configuration applies to
    plugins: {
      next, // Add Next.js plugin
    },
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
      ...next.configs.recommended.rules, // Apply Next.js recommended rules
      'tailwindcss/classnames-order': 'off', // Disable CSS class name order warning
      'react/jsx-sort-props': 'off', // Disable prop sorting warning
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^next-intl/'],
        },
      ],
      'import/order': 'off', // Disable import order warning
    },
  },
];
