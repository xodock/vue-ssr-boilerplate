/* eslint-disable global-require */
const path = require('path');

module.exports = {
  publicPath: '/',
  css: {
    sourceMap: true,
  },

  lintOnSave: undefined,

  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
    },
  },
  pluginOptions: {
    html: {
      template: './public/index.html.template',
    },
    ssr: {
      // Listening port for `serve` command
      port: null,
      // Listening host for `serve` command
      host: null,
      // Entry for each target
      entry: target => `./src/entry-${target}`,
      // Default title
      defaultTitle: 'Bordodel',
      // Path to favicon
      favicon: './public/favicon.ico',
      // Skip some requests from being server-side rendered
      skipRequests: req => req.originalUrl === '/graphql',
      // See https://ssr.vuejs.org/guide/build-config.html#externals-caveats
      nodeExternalsWhitelist: [/\.css$/, /\?vue&type=style/],
      // Function to connect custom middlewares
      extendServer: (app) => {
        const cookieParser = require('cookie-parser');
        app.use(cookieParser());
      },
      // Paths
      distPath: path.resolve(__dirname, './dist'),
      error500Html: null,
      templatePath: path.resolve(__dirname, './dist/index.html.template'),
      serviceWorkerPath: path.resolve(__dirname, './dist/service-worker.js'),
      // Directives fallback
      directives: {
        // See 'Directive' chapter
      },
    },
  },
};
