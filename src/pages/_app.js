import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles';
import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/amarante-v8-latin-regular.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

      {/* Global styles get injected in the <head> */}
      <GlobalStyles theme={theme} />
    </>
  );
}
