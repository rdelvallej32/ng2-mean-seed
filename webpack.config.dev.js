const Webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');;
const path = require('path');
const buildPath = path.resolve(__dirname, '.tmp', 'client', 'app', 'js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath: '/client/app/js',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[file].map',
  },

  plugins: [
    new Webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./.tmp/client/app/js/polyfills-manifest.json')
    }),

    new Webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./.tmp/client/app/js/vendor-manifest.json')
    })
  ]
});
