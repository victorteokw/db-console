const path = require('path');

module.exports = async (projRoot, url, files) => {
  module.paths.push(path.join(projRoot, 'node_modules'));
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize(url);
  await sequelize.authenticate();

  for (const file of files) {
    sequelize.import(file);
  }
  return sequelize.models;
};
