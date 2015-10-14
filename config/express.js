'use strict';

const express = require('express'),
      path    = require('path'),
      logger  = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser   = require('body-parser'),
      errorHandler = require('errorhandler');

module.exports = (app) => {
  let env = app.get('env');

  //Middlewares
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  //CORS Filter
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  if ('development' === env || 'test' === env) {
    app.use(errorHandler()); // Error handler - has to be last
  }
};