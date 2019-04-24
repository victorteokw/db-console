const path = require('path');

module.exports = async (projRoot, url, files) => {
  module.paths.push(path.join(projRoot, 'node_modules'));
  const mongoose = require('mongoose');
  await mongoose.connect(url, { useNewUrlParser: true });
  for (const file of files) {
    require(file);
  }
  return [mongoose.models, async () => {
    await mongoose.disconnect();
  }];
};
