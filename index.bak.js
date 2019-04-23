#!/usr/bin/env node
const loadConfig = require('./lib/loadConfig');
const repl = require('repl');
const history = require('repl.history');
const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const each = require('lodash.foreach');

// Get config object
const config = loadConfig();

// Connect database
mongoose.connect(
  config.mongodb.url,
  Object.assign(config.mongodb.options || {}, {
    useNewUrlParser: true
  }))
  .then(function(_) {
    global.mongoose = mongoose;
    each(glob.sync(path.resolve(projRoot, config.modelsDir, '**/*.js')),
      require);
    each(mongoose.models, function(m, k) {
      global[k] = m;
    });
    const replServer = repl.start({
      useGlobal: true,
      prompt: '>>> '
    });
    history(replServer, path.join(projRoot, '.dbconsole.history'));
    replServer.on('exit', () => {
      console.log("");
      process.exit();
    });
  }).catch(function(err) {
    console.warn(err);
    process.exit(1);
  });
