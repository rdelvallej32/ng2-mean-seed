const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const path = require('path');
const buildPath = path.resolve(__dirname, '.tmp', 'client', 'app', 'js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client?reload=true',
    './client/app/main.ts'
  ],

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/client/app/js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
