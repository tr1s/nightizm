module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    styledComponents: true,
    urlImports: ['https://cdn.skypack.dev'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    plugins: [new RemoveServiceWorkerPlugin()];
    return config;
  },
};
