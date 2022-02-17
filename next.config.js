const RemoveServiceWorkerPlugin = require('webpack-remove-serviceworker-plugin');

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
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    plugins: [new RemoveServiceWorkerPlugin()];
    return config;
  },
};
