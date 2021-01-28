import Head from 'next/head';

import '../styles/normalize.scss';
import '../styles/typography.scss';
import '../styles/global.scss';

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
      <Component {...pageProps} />
    </>
  );
}
