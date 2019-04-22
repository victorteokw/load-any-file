const LoadItError = require('../LoadItError');

module.exports = (filepath) => {
  try {
    require('typescript');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new LoadItError("Dependency missing. Please install 'typescript'.");
    } else {
      throw e;
    }
  }
  try {
    require('ts-node/register');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new LoadItError("Dependency missing. Please install 'ts-node'.");
    } else {
      throw e;
    }
  }
  return require(filepath);
};
