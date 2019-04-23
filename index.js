#!/usr/bin/env node
const loadConfig = require('./lib/loadConfig');
const showHelp = require('./lib/showHelp');
const showVersion = require('./lib/showVersion');

// Get config object
const config = loadConfig();

if (config.help) {
  showHelp();
  process.exit(0);
}

if (config.version) {
  showVersion();
  process.exit(0);
}
