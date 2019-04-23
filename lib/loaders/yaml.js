const LoadItError = require('../LoadItError');
const fs = require('fs');

module.exports = (filepath) => {
  let YAML;
  try {
    YAML = require('js-yaml');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new LoadItError("Dependency missing. Please install 'js-yaml'.");
    } else { /* istanbul ignore next */
      throw e;
    }
  }
  return YAML.load(fs.readFileSync(filepath).toString());
};
