const LoadAnyFileError = require('../LoadAnyFileError');

module.exports = (filepath) => {
  try {
    require('coffeescript/register');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new LoadAnyFileError(
        "Dependency missing. Please install 'coffeescript'."
      );
    } else { /* istanbul ignore next */
      throw e;
    }
  }
  return require(filepath);
};
