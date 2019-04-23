const fs = require('fs');

module.exports = (filepath) => {
  return JSON.parse(fs.readFileSync(filepath).toString());
};
