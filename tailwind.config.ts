import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },

    extend: {
      maxWidth: ({ theme }) => ({
        'xs': theme('screens.xs'),
        'sm': theme('screens.sm'),
        'md': theme('screens.md'),
        'lg': theme('screens.lg'),
        'xl': theme('screens.xl'),
        '2xl': theme('screens.2xl'),
        '3xl': theme('screens.3xl'),
        'tablet': theme('screens.tablet'),
        'laptop': theme('screens.laptop'),
        'desktop': theme('screens.desktop'),
      }),

      colors:{
        'body-color': {//主體：預設文字
          DEFAULT:  'var(--m-body-color)',
        },
        'body': {//主體：預設背景顏色
          DEFAULT:  'var(--m-body-color)',
        },
        'primary': {//主要顏色，深淺此為範例，請自行運用擴增刪減
          light: 'rgb(var(--m-primary-light-rgb) / <alpha-value>)',//淡
          subtle:'rgb(var(--m-primary-subtle-rgb) / <alpha-value>)',//一點淡
          DEFAULT:  'rgb(var(--m-primary-rgb))',
          emphasis: 'rgb(var(--m-primary-emphasis-rgb) / <alpha-value>)',//一點深
          dark: 'rgb(var(--m-primary-dark-rgb) / <alpha-value>)',//深
        },
        'secondary': {//次要顏色
          light: 'rgb(var(--m-secondary-light-rgb) / <alpha-value>)',
          DEFAULT:  'rgb(var(--m-secondary-rgb) / <alpha-value>)',
          dark: 'rgb(var(--m-secondary-dark-rgb) / <alpha-value>)',
        },
        'tertiary': {//第三級顏色
          light: 'rgb(var(--m-tertiary-light-rgb) / <alpha-value>)',
          DEFAULT:  'rgb(var(--m-tertiary-rgb) / <alpha-value>)',
          dark: 'rgb(var(--m-tertiary-dark-rgb) / <alpha-value>)',
        },
        // 'quaternary': {//第四級顏色
        //   DEFAULT:  'rgb(var(--m-quaternary-rgb) / <alpha-value>)',
        // },
        // 'quinary': {//第五級顏色
        //   DEFAULT:  'rgb(var(--m-quinary-rgb) / <alpha-value>)',
        // },
        // 'success': {
        //   DEFAULT:  'rgb(var(--m-success-rgb) / <alpha-value>)',
        // },
        // 'danger': {
        //   DEFAULT:  'rgb(var(--m-danger-rgb) / <alpha-value>)',
        // },
        // 'info': {
        //   DEFAULT:  'rgb(var(--m-info-rgb) / <alpha-value>)',
        // },
        // 'warning': {
        //   DEFAULT:  'rgb(var(--m-warning-rgb) / <alpha-value>)',
        // },
        // 'light': {
        //   DEFAULT:  'rgb(var(--m-light-rgb) / <alpha-value>)',
        // },
        // 'dark': {
        //   DEFAULT:  'rgb(var(--m-dark-rgb) / <alpha-value>)',
        // },
        // 'error': {
        //   DEFAULT:  'rgb(var(--m-error-rgb) / <alpha-value>)',
        // },
      },

    },
  },
};
export default config;
