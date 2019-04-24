#!/usr/bin/env node
const findDominantFile = require('find-dominant-file');
const loadConfig = require('./lib/loadConfig');
const showHelp = require('./lib/showHelp');
const showVersion = require('./lib/showVersion');
const getModelFileList = require('./lib/getModelFileList');
const getRunner = require('./lib/getRunner');
const attachToGlobal = require('./lib/attachToGlobal');
const startREPL = require('./lib/startREPL');

async function startup() {

  // Locate project root directory
  const projRoot = findDominantFile(process.cwd(), 'package.json', true);

  // Get config object
  const config = loadConfig(projRoot);

  // Show help and exit
  if (config.help) {
    showHelp();
    return;
  }

  // Show version and exit
  if (config.version) {
    showVersion();
    return;
  }

  // Get a filename list of models
  const modelFiles = getModelFileList(
    projRoot,
    config.models,
    config.modelBaseDirectory
  );

  // Connect database and get models from model files
  const connect = getRunner(config.orm);
  const models = await connect(projRoot, config.url, modelFiles);

  // Attach models to global object
  attachToGlobal(models);

  // Start REPL
  startREPL(projRoot, config.prompt, config.historyFile);
}

if (require.main === module) {
  startup();
}

module.exports = startup;
