import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com', // ← burası önemli
        pathname: '/**',
      },
    ],
  },};

export default nextConfig;
