import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  images: {
    domains: ['s2.coinmarketcap.com'],
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
