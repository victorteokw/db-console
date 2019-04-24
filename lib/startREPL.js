const repl = require('repl');
const history = require('repl.history');
const path = require('path');

module.exports = (projRoot, prompt, historyFile) => {
  const replServer = repl.start({
    useGlobal: true,
    prompt
  });
  history(replServer, path.join(projRoot, historyFile));
  replServer.on('exit', () => {
    console.log('');
    process.exit();
  });
};
