import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import config from './environments';

export default function(app) {
  let env = app.get('env');

  if(env === 'development') {
  }

  if(env === 'production') {
  }

  // view engine setup
  app.set('views', path.join(config.root, './server/views'));
  app.set('view engine', 'hbs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  // set the path for the client code
  app.set('appPath', path.join(config.root, 'client'));
  console.log(app.get('appPath'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  console.log(path.join(`${__dirname}`, '../../dist'));
  app.use(express.static(path.join(`${__dirname}`, '../../dist')));


  // error handler
  if(env === 'development') {
    app.use(errorHandler());
  }
}
