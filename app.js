'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express'),
      config  = require('./config/environment');

// Setup server
const app    = express(),
      server = require('http').createServer(app);

require('./config/express')(app);
require('./config/database')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
});

// Expose app
exports = module.exports = app;