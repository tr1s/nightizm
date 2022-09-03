const RemoveServiceWorkerPlugin = require('webpack-remove-serviceworker-plugin');

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
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
