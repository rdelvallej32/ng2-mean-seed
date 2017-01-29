'use strict';
/*eslint no-process-env:0*/

import path from 'path';
import _ from 'lodash';

// Main Configuration Options //
var all = {
  // Environment Mode
  env: process.env.NODE_ENV,

  //Root Path of the Server
  root: path.normalize(`${__dirname}/../../..`),

  port: process.env.PORT || 3000,

  //MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }
};

module.exports = _.merge(
    all,
    require(`./${process.env.NODE_ENV}.js`) || {});
