import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'coin-images.coingecko.com',
            pathname: '/coins/images/**'
        }]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);