const fs = require('fs');

module.exports = (filepath) => {
  let YAML;
  try {
    YAML = require('js-yaml');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new Error("Dependency missing. Please install 'js-yaml'.");
    } else {
      throw e;
    }
  }
  return YAML.load(fs.readFileSync(filepath).toString());
};
