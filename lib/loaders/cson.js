const fs = require('fs');

module.exports = (filepath) => {
  let Coffee;
  try {
    Coffee = require('coffeescript');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new Error("Dependency missing. Please install 'coffeescript'.");
    } else {
      throw e;
    }
  }
  return Coffee.eval(fs.readFileSync(filepath).toString());
};
