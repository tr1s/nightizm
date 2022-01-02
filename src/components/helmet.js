import { useRouter } from 'next/router';
import Head from 'next/head';

const Helmet = ({ title, description, image, imageDescription }) => {
  const router = useRouter();
  const url = router.asPath;
  const siteName = 'Nightizm';
  const twitterHandle = '@nightizm';

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />

      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description ? description : 'Seize the Night'} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content={`https://nightizm.com${url}`} key="ogurl" />
      <meta property="og:title" content={title ? title : siteName} key="ogtitle" />
      <meta
        property="og:description"
        content={description ? description : 'Seize the Night'}
        key="ogdesc"
      />
      <meta
        property="og:image"
        content={image ? image : 'https://i.imgur.com/8U7TTkU.jpg'}
        key="ogimage"
      />
      <meta
        property="og:image:alt"
        content={imageDescription ? imageDescription : 'Portrait photo of Nightizm.'}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
    </Head>
  );
};

export default Helmet;
