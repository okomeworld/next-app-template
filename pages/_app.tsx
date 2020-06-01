import { AppProps } from 'next/app';
import 'tailwindcss/dist/base.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
