const path = require('path');

module.exports = async (projRoot, url, files) => {
  module.paths.push(path.join(projRoot, 'node_modules'));
  require('ts-node/register');
  const mongoose = require('mongoose');
  await mongoose.connect(url, { useNewUrlParser: true });
  try {
    for (const file of files) {
      require(file);
    }
  } catch(e) {
    console.log(e);
    await mongoose.disconnect();
    return [undefined, () => {}];
  }
  return [mongoose.models, async () => {
    await mongoose.disconnect();
  }];
};
