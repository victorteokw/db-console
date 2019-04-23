const repl = require('repl');
const history = require('repl.history');
const path = require('path');
const findDominantFile = require('find-dominant-file');

module.exports = (prompt, historyFile) => {
  const projRoot = findDominantFile(process.cwd(), 'package.json', true);
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
