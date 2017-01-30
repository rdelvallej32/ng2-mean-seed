'use strict';

import mongoose, {Schema} from 'mongoose';
const Promise = require('bluebird');
Promise.promisifyAll(mongoose);

let exampleSchema = new Schema({
  message: {
    type: String
  }
});

export default mongoose.model('Example', exampleSchema);
