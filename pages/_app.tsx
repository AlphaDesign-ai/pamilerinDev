import '../styles/globals.scss';
import { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
