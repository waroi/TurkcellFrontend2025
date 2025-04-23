// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        pathname: '/coins/images/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
