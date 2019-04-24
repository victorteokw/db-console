const { spawnSync } = require('child_process');

module.exports = (...args) => {
  const response = spawnSync(args[0], args.slice(1));
  if (response.signal === 'SIGINT') {
    process.exit(0);
  }
  return response;
};
