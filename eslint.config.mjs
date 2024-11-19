import { getPresets } from 'eslint-config-molindo';

const baseConfig = await getPresets('typescript', 'react', 'tailwind');

export default [
  ...baseConfig,
  {
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
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^next-intl/'],
        },
      ],
    },
  },
];
