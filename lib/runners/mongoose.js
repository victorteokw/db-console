const path = require('path');
const findDominantFile = require('find-dominant-file');

module.exports = async (url, files) => {
  const projRoot = findDominantFile(process.cwd(), 'package.json', true);
  module.paths.push(path.join(projRoot, 'node_modules'));
  const mongoose = require('mongoose');
  await mongoose.connect(url, { useNewUrlParser: true });
  for (const file of files) {
    require(file);
  }
  return mongoose.models;
};
