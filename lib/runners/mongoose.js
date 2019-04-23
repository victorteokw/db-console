module.exports = async (url, files) => {
  const mongoose = require('mongoose');
  await mongoose.connect(url, { useNewUrlParser: true });
  for (const file of files) {
    require(file);
  }
  return mongoose.models;
};
