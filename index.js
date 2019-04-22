const path = require('path');
const fs = require('fs');
const matchExt = require('./lib/matchExt');
const loaders = require('./lib/loaders');

const loadIt = (location) => {
  const requirerDirectory =
    module.parent.filename ?
      path.dirname(module.parent.filename) :
      process.cwd();
  let finalPath = path.resolve(requirerDirectory, location);
  if (path.extname(finalPath) === '') {
    finalPath = matchExt(finalPath);
  }
  if (!fs.existsSync(finalPath)) {
    throw new Error(`Cannot find file '${finalPath}'.`);
  }
  const ext = path.extname(finalPath).substr(1);
  const loader = loaders[ext];
  if (!loader) {
    throw new Error(`Unsupported file type '.${ext}'`);
  }
  return loader(finalPath);
};

module.exports = loadIt;
module.exports.default = loadIt;
