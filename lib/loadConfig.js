const path = require('path');
const commandLineArgs = require('command-line-args');
const findDominantFile = require('find-dominant-file');
const loadFile = require('load-any-file');
const commandLineOptions = require('./commandLineOptions');

const loadConfig = () => {
  // Locate project root directory
  const projRoot = findDominantFile(process.cwd(), 'package.json', true);

  const configFromArgv = commandLineArgs(commandLineOptions, {
    camelCase: true,
    partial: true,
    argv: process.argv
  });

  // Load config from package.json
  const pkgJson = path.join(projRoot, 'package.json');
  const configFromPkgJson = require(pkgJson).dbConsole;

  // Load config from config file
  let configFromConfFile;
  try {
    configFromConfFile = loadFile(configFromArgv.configFile);
  } catch(e) {}

  return Object.assign({},
    configFromPkgJson,
    configFromConfFile,
    configFromArgv
  );
};

module.exports = loadConfig;
