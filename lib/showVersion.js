const packageJson = require('../package.json');

module.exports = () => {
  console.log(`db-console ${packageJson.version}`);
};
