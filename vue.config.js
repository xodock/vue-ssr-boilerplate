module.exports = {
  publicPath: '/',
  css: {
    sourceMap: true,
  },

  lintOnSave: undefined,

  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
};
