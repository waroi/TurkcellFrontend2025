/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/undici/,
      type: "javascript/auto",
    });

    return config;
  },
};

module.exports = nextConfig;
