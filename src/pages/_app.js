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
          self.addEventListener('install', function(e) {
            self.skipWaiting();
          });

          self.addEventListener('activate', function(e) {
            self.registration.unregister()
              .then(function() {
                return self.clients.matchAll();
              })
              .then(function(clients) {
                clients.forEach(client => client.navigate(client.url))
              });
          });
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
