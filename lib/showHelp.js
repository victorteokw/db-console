const commandLineUsage = require('command-line-usage');
const commandLineOptions = require('./commandLineOptions');
const packageJson = require('../package.json');

module.exports = () => {
  const sections = [
    {
      header: 'DB Console',
      content: packageJson.description
    },
    {
      header: 'Options',
      optionList: commandLineOptions
    }
  ];
  const usage = commandLineUsage(sections);
  console.log(usage);
};
