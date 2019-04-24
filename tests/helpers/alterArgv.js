const alterArgv = () => {
  process.savedArgv = process.argv;
  process.argv = process.argv.slice(0, 2);
};

module.exports = alterArgv;
