const path = require('path');
const walkSync = require('walk-sync');
const dashify = require('dashify');
const commandLineUsage = require('command-line-usage');
const commandLineOptions = require('./commandLineOptions');
const packageJson = require('../package.json');

module.exports = () => {
  const runnerDir = path.join(__dirname, 'runners');
  const runnerList = walkSync(runnerDir, { globs: ['*.js'] }).map((f) => {
    return dashify(path.parse(f).name)
  });
  const sections = [
    {
      header: 'DB Console',
      content: packageJson.description
    },
    {
      header: 'Options',
      optionList: commandLineOptions
    },
    {
      header: 'Supported ORMs',
      content: runnerList.join(', ')
    }
  ];
  const usage = commandLineUsage(sections);
  console.log(usage);
};
