const recoverArgv = () => {
  process.argv = process.savedArgv;
};

module.exports = recoverArgv;
