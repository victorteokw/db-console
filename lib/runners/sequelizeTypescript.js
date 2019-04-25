const path = require('path');

module.exports = async (projRoot, url, files) => {
  module.paths.push(path.join(projRoot, 'node_modules'));
  require('ts-node/register');
  const { Sequelize } = require('sequelize-typescript');
  const sequelize = new Sequelize(url);
  try {
    await sequelize.authenticate();
    sequelize.addModels(files);
  } catch(e) {
    console.log(e);
    await sequelize.close();
    return [undefined, () => {}];
  }
  return [sequelize.models, async () => {
    await sequelize.close();
  }];
};
