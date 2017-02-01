'use strict';
/*eslint no-process-env:0*/

module.exports = {
  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI_DEV || 'mongodb://localhost/test'
  }
};
