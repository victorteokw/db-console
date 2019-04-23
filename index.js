#!/usr/bin/env node
const loadConfig = require('./lib/loadConfig');
const showHelp = require('./lib/showHelp');
const showVersion = require('./lib/showVersion');
const getModelFileList = require('./lib/getModelFileList');
const getRunner = require('./lib/getRunner');
const attachToGlobal = require('./lib/attachToGlobal');
const startREPL = require('./lib/startREPL');

async function startup() {
  // Get config object
  const config = loadConfig();

  // Show help and exit
  if (config.help) {
    showHelp();
    process.exit(0);
  }

  // Show version and exit
  if (config.version) {
    showVersion();
    process.exit(0);
  }

  // Get a filename list of models
  const modelFiles = getModelFileList(config.models, config.modelBaseDirectory);

  // Connect database and get models from model files
  const connect = getRunner(config.orm);
  const models = await connect(config.url, modelFiles);

  // Attach models to global object
  attachToGlobal(models);

  // Start REPL
  startREPL(config.prompt, config.historyFile);
}

startup();
