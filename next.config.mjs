import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/static/images/**',
        search: '',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
