import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's2.coinmarketcap.com',
                pathname: '/static/img/coins/64x64/**',
            },
        ],
    },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
