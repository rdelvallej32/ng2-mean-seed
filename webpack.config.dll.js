'use strict';

const path = require('path');
const Webpack = require('webpack');
const buildPath = path.resolve(__dirname, '.tmp', 'client', 'app', 'js');

module.exports = {
  // create 3rd party library bundles, one for angular, rxjs, etc.
  entry: {
    polyfills: ['./client/app/polyfills.ts'],
    vendor: ['./client/app/vendor.ts']
  },

  output: {
    filename: '[name].dll.js',
    path: buildPath,
    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]_lib'
  },

  plugins: [
    new Webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: `${buildPath}/[name]-manifest.json`,
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]_lib'
    })
  ]
};
