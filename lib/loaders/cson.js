const fs = require('fs');
const LoadItError = require('../LoadItError');

module.exports = (filepath) => {
  let Coffee;
  try {
    Coffee = require('coffeescript');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new LoadItError(
        "Dependency missing. Please install 'coffeescript'."
      );
    } else { /* istanbul ignore next */
      throw e;
    }
  }
  return Coffee.eval(fs.readFileSync(filepath).toString());
};
