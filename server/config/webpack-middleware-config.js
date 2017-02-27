'use strict';

import path from 'path';
import webpack  from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.config.dev.js';

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  quiet: false,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  stats: {
    colors: true
  }
});

const bundlePath = path.join(__dirname, '../../.tmp/client/app/test/index.html');

module.exports = {
  compiler,
  middleware,
  bundlePath
};
