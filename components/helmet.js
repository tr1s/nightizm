import Head from 'next/head';

const Helmet = ({ title, description, image, imageDescription }) => {
  const siteName = 'Nightizm';
  const twitterHandle = '@nightizm';

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />

      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      {/* <meta property="og:url" content={{`https://nightizm.com/${url}`} key="ogurl" /> */}
      <meta
        property="og:image"
        content={image ? image : 'https://i.imgur.com/CMlpCzE.jpg'}
        key="ogimage"
      />
      <meta property="og:image:alt" content="Sailor Moon holding a floppy disc." />
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:title" content={title ? title : siteName} key="ogtitle" />
      <meta
        property="og:description"
        content={description ? description : 'Seize the Night'}
        key="ogdesc"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
    </Head>
  );
};

export default Helmet;
