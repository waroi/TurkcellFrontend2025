import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import '@/i18n';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
