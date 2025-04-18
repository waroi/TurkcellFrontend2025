import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["coin-images.coingecko.com", "cryptologos.cc"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
