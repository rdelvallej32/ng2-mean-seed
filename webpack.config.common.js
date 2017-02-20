'use strict';

const webpack = require('webpack');

module.exports = {
  entry: {
    'polyfills': './client/app/polyfills.ts',
    'vendor': './client/app/vendor.ts',
    'app': './client/app/main.ts',
  },

  resolve: {
    extensions: ['.js', '.ts', '.json']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.html$/,
        loaders: [
          'html-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'raw-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            './src' // location of your src
        ),
    // new webpack.optimize.CommonsChunkPlugin({name: ['app', 'vendor', 'polyfills']})
  ]
};
