const camelCase = require('camelcase');

module.exports = (name) => {
  let runner;
  try {
    runner = require('./runners/' + camelCase(name));
  } catch(e) {
    throw new Error(`Unsupported orm '${name}'.`);
  }
  return runner;
};
