import { useRouter } from 'next/router';
import Head from 'next/head';

const Helmet = ({ title, description, image, imageDescription }) => {
  const router = useRouter();
  const path = router.asPath;
  const siteName = 'Nightizm';
  const twitterHandle = '@nightizm';
  const permalink = 'https://nightizm.com';
  const defaultImage = 'https://i.imgur.com/8U7TTkU.jpg';
  const defaultDescription = 'Seize the Night';

  return (
    <Head>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description ? description : defaultDescription} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content={`${permalink}${path}`} key="ogurl" />
      <meta property="og:title" content={title ? title : siteName} key="ogtitle" />
      <meta property="og:image" content={image ? image : defaultImage} key="ogimage" />
      <meta
        property="og:image:alt"
        content={imageDescription ? imageDescription : 'Portrait photo of Nightizm.'}
      />
      <meta
        property="og:description"
        content={description ? description : defaultDescription}
        key="ogdesc"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:url" content={`${permalink}${path}`} />
      <meta property="twitter:image" content={image ? image : defaultImage} />
      <meta
        property="twitter:description"
        content={description ? description : defaultDescription}
      />
    </Head>
  );
};

export default Helmet;
