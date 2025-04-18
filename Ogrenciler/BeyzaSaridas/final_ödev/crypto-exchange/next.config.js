/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.m?js$/,
      include: /node_modules\/(undici|firebase)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: [
            "@babel/plugin-proposal-private-methods",
            "@babel/plugin-proposal-private-fields",
          ],
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;
