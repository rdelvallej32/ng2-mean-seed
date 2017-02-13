'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import http from 'http';
import config from './config/environments';
import mainRoute from './routes';
import apiRoutes from './routes/api-routes';

//Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error ${err}`);
  process.exit(-1); // eslint-disable-line no-process-exit
});

let app = express();
let server = http.createServer(app);
let io = require('socket.io').listen(server);

// Require any middleware here
require('./config/express').default(app);
require('./config/socket-io').default(io);

// import routes
app.use('/', mainRoute);
app.use('/api', apiRoutes);

// Initialize the server
function startServer() {
  server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port} in ${app.get('env')}`);
  });
}

setImmediate(startServer);

exports = module.exports = app;
