#!/usr/bin/env node

const repl = require('repl');
const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');
const fs = require('fs');
const each = require('lodash.foreach');

// Get requirer file name
const requirer = module.parent ? module.parent.filename : process.cwd();
// Get project root
const findDominantFile = function(dir, filename, retDir = false) {
  while (dir !== '/') {
    const maybe = path.join(dir, filename);
    if (fs.existsSync(maybe)) return retDir ? dir : maybe;
    dir = path.dirname(dir);
  }
};
const projRoot = findDominantFile(requirer, 'package.json', true);
// Get config file
const configFile = path.join(projRoot, 'dobukulbira.config.js');
if (!fs.existsSync(configFile)) {
  throw `Cannot find configuration file ${configFile}`;
}
// Get config object
const config = require(configFile);

// Connect database
mongoose.connect(config.mongodb.url, config.mongodb.options)
  .then(function(_) {
    global.mongoose = mongoose;
    global.print = console.log;
    global.as = function(name) {
      return function(v) {
        global[name] = v;
      };
    };
    each(glob.sync(path.resolve(projRoot, config.modelsDir, '**/*.js')), require);
    each(mongoose.models, function(m, k) {
      global[k] = m;
    });
    const replServer = repl.start({ useGlobal: true });
    replServer.on('exit', () => {
      console.log("");
      process.exit();
    });
  }).catch(function(err) {
    console.warn(err);
    process.exit(1);
  });
