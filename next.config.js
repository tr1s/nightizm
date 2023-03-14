module.exports = {
  compiler: {
    styledComponents: true,
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
        destination: 'https://nightizm.fanlink.to/jinx',
        permanent: false,
      },
    ];
  },
};
