const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: './dist/client/app/js',
    filename: 'bundle.js',
    publicPath: '/client/app/js',
    chunkFilename: '[id].chunk.js'
  }
});
