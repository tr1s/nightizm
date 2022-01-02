import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import ResetStyles from '../styles/styled-reset';
import TypographyStyles from '../styles/styled-typography';
import GlobalStyles from '../styles/styled-global';

import theme from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

      {/* Global styles that get injected in the <head> */}
      <ResetStyles />
      <TypographyStyles />
      <GlobalStyles theme={theme} />
    </>
  );
}
