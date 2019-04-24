const path = require('path');
const commandLineArgs = require('command-line-args');
const loadFile = require('load-any-file');
const commandLineOptions = require('./commandLineOptions');

const loadConfig = (projRoot) => {

  const configFromArgv = commandLineArgs(commandLineOptions, {
    camelCase: true,
    partial: true,
    argv: process.argv
  });
  if (configFromArgv._unknown) delete configFromArgv._unknown;

  // Load config from package.json
  const pkgJson = path.join(projRoot, 'package.json');
  const configFromPkgJson = require(pkgJson).dbConsole;

  // Load config from config file
  let configFromConfFile;
  try {
    configFromConfFile =
      loadFile(path.join(projRoot, configFromArgv.configFile));
  } catch(e) {}

  return Object.assign({},
    configFromPkgJson,
    configFromConfFile,
    configFromArgv
  );
};

module.exports = loadConfig;
