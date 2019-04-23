module.exports = (obj) => {
  for (const key in obj) {
    global[key] = obj[key];
  }
};
