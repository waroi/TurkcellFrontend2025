import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { AuthProvider } from '@/context/AuthContext';
import '@/styles/globals.scss';
import '@/i18n';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
