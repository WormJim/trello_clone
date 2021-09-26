import type { AppProps } from 'next/app';
import '../styles/globals.css';

function TrelloClone({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default TrelloClone;
