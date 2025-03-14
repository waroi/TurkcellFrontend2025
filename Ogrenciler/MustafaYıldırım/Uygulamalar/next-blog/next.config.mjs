/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn1.vectorstock.com",
      },
      {
        protocol: "https",
        hostname: "cdn3.vectorstock.com",
      },
    ],
  },
};

export default nextConfig;
