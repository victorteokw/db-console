const path = require('path');
const findDominantFile = require('find-dominant-file');

module.exports = async (url, files) => {
  const projRoot = findDominantFile(process.cwd(), 'package.json', true);
  module.paths.push(path.join(projRoot, 'node_modules'));
  const Sequelize = require('sequelize');
  const sequelize = new Sequelize(url);
  await sequelize.authenticate();

  for (const file of files) {
    sequelize.import(file);
  }
  return sequelize.models;
};
