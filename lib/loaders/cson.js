const fs = require('fs');
const LoadAnyFileError = require('../LoadAnyFileError');

module.exports = (filepath) => {
  let CSON;
  try {
    CSON = require('cson-parser');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new LoadAnyFileError(
        "Dependency missing. Please install 'cson-parser'."
      );
    } else { /* istanbul ignore next */
      throw e;
    }
  }
  return CSON.parse(fs.readFileSync(filepath).toString());
};
