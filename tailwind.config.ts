import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
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
    fontSize: {
      xs: ['0.75rem', '1rem'],//12,16
      sm: ['0.875rem', '1.25rem'],//14,22
      base: ['1rem', '1.5rem'],//16,24
      lg:['1.125rem', '1.75rem'],//18,28
      xl: ['1.25rem', '1.75rem'],//20,28
      '2xl': ['1.5rem', '2rem'],//24,32
      '3xl': ['1.875rem', '2.25rem'],//30,36
      '4xl': ['2.25rem', '2.5rem'],//36,40
      '5xl': ['3rem', '1'],//36
      '6xl': ['3.75rem', '1'],//48
      '7xl': ['4.5rem', '1'],//60
      '8xl': ['6rem', '1'],//96
      '9xl': ['8rem', '1'],//128
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
          DEFAULT:  'rgb(var(--m-primary-rgb) / <alpha-value>)',//預設
          emphasis: 'rgb(var(--m-primary-emphasis-rgb) / <alpha-value>)',//一點深
          dark: 'rgb(var(--m-primary-dark-rgb) / <alpha-value>)',//深
        },
        'secondary': {//次要顏色
          light: 'rgb(var(--m-secondary-light-rgb) / <alpha-value>)',
          DEFAULT:  'rgb(var(--m-secondary-rgb) / <alpha-value>)',
          dark: 'rgb(var(--m-secondary-dark-rgb) / <alpha-value>)',
        },
        'tertiary': {//第三級顏色
          light: 'rgb(var(--m-tertiary-light-rg) / <alpha-value>)',
          DEFAULT:  'rgb(var(--m-tertiary-rg) / <alpha-value>)',
          dark: 'rgb(var(--m-tertiary-dark-rg) / <alpha-value>)',
        },
        'quaternary': {//第四級顏色
          DEFAULT:  'rgb(var(--m-quaternary-rg) / <alpha-value>)',
        },
        'quinary': {//第五級顏色
          DEFAULT:  'rgb(var(--m-quinary-rg) / <alpha-value>)',
        },
        'success': {
          DEFAULT:  'rgb(var(--m-success-rgb) / <alpha-value>)',
        },
        'danger': {
          DEFAULT:  'rgb(var(--m-danger-rgb) / <alpha-value>)',
        },
        'info': {
          DEFAULT:  'rgb(var(--m-info-rgb) / <alpha-value>)',
        },
        'warning': {
          DEFAULT:  'rgb(var(--m-warning-rgb) / <alpha-value>)',
        },
        'light': {
          DEFAULT:  'rgb(var(--m-light-rgb) / <alpha-value>)',
        },
        'dark': {
          DEFAULT:  'rgb(var(--m-dark-rgb) / <alpha-value>)',
        },
        'error': {
          DEFAULT:  'rgb(var(--m-error-rgb) / <alpha-value>)',
        },
      },

    },
  },
};
export default config;
