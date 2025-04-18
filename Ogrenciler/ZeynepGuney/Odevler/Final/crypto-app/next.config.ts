import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // TypeScript hatalarını build sırasında göz ardı eder
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;