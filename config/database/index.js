'use strict';

const mongo = require('mongodb'),
      monk  = require('monk'),
      db    = monk('127.0.0.1:27017/task');

module.exports = (app) => {
  app.use((req, res, next) => {
    let url = req.url.substring(1),
        baseUrl = url.substring(0, url.indexOf('/')) || url;

    res.locals.db = db.get(baseUrl);
    //req.db = db;
    next();
  });
};