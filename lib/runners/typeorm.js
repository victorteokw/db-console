const path = require('path');

module.exports = async (projRoot, url, files) => {
  const type = url.match(/^[a-z-]+/)[0];
  module.paths.push(path.join(projRoot, 'node_modules'));
  require('ts-node/register');
  const { createConnection } = require('typeorm');
  let connection, models;
  try {
    connection = await createConnection({
      type,
      url,
      'synchronize': true,
      'logging': false,
      'entities': files
    });
    for (const file of files) {
      const content = require(file);
      if (!models) models = {}; // make sure return undefined for error
      Object.assign(models, content);
    }
  } catch(e) {
    console.log(e);
    await connection.close();
  }
  return [models, async () => {
    await connection.close();
  }];
};
