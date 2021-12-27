import '../styles/globals.scss';
import { AppProps } from 'next/app';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
