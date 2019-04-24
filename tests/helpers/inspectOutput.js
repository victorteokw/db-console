module.exports = (func) => {
  const originalWrite = process.stdout.write;
  let data = '';
  process.stdout.write = (chunk) => {
    data = data + chunk;
  };
  try {
    func();
  } catch(e) {
    throw e;
  } finally {
    process.stdout.write = originalWrite;
  }
  return data;
};
