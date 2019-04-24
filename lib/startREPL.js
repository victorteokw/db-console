const repl = require('repl');
const history = require('repl.history');
const path = require('path');

module.exports = (projRoot, prompt, historyFile, options = {}) => {
  const replServer = repl.start({
    useGlobal: true,
    prompt,
    ...options
  });
  history(replServer, path.join(projRoot, historyFile));
  replServer.on('exit', () => {
    console.log('');
    process.exit();
  });
};
