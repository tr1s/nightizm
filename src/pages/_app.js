import Head from 'next/head';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';
import ResetStyles from '../styles/styled-reset';
import TypographyStyles from '../styles/styled-typography';
import GlobalStyles from '../styles/styled-global';

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
        <Script id="remove-service-worker">
          {`
          if(window.navigator && navigator.serviceWorker) {
            navigator.serviceWorker.getRegistrations()
            .then(function(registrations) {
              for(let registration of registrations) {
                registration.unregister();
              }
            });
          }
        `}
        </Script>
        <Component {...pageProps} />
      </ThemeProvider>

      {/* Global styles get injected in the <head> */}
      <ResetStyles />
      <TypographyStyles />
      <GlobalStyles theme={theme} />
    </>
  );
}
