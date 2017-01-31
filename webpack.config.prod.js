'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge.smart(commonConfig, {
  entry: {
    app: './client/app/main.aot.ts'
  },

  output: {
    path: './dist/client/app/js',
    filename: 'bundle.js',
    publicPath: '/client/app/js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader?aot=true&genDir=dist/client/app/js'
        ]
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false
    })
  ]
});
