const LoadItError = require('../LoadItError');

module.exports = (filepath) => {
  try {
    require('coffeescript/register');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new LoadItError(
        "Dependency missing. Please install 'coffeescript'."
      );
    } else { /* istanbul ignore next */
      throw e;
    }
  }
  return require(filepath);
};
