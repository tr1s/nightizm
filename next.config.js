module.exports = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    urlImports: ['https://cdn.skypack.dev'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/jinx',
        destination: 'https://nightizm.bandcamp.com/album/jinx',
        permanent: false,
      },
    ];
  },
};
