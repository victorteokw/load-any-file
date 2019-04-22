module.exports = (filepath) => {
  try {
    require('ts-node/register');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new Error("Dependency missing. Please install 'ts-node'.");
    } else {
      throw e;
    }
  }
  return require(filepath);
};
