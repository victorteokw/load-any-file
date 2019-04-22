const path = require('path');
const fs = require('fs');
const getCallerFilename = require('./lib/getCallerFilename');
const matchExt = require('./lib/matchExt');
const loaders = require('./lib/loaders');
const LoadItError = require('./lib/LoadItError');

const loadIt = (location) => {
  const callerFile = getCallerFilename();
  const requirerDirectory =
    path.resolve(callerFile) === callerFile ?
      path.dirname(callerFile) :
      process.cwd();
  let finalPath = path.resolve(requirerDirectory, location);
  if (path.extname(finalPath) === '') {
    finalPath = matchExt(finalPath);
  }
  if (!fs.existsSync(finalPath) || fs.lstatSync(finalPath).isDirectory()) {
    throw new LoadItError(`Cannot find file '${finalPath}'.`);
  }
  const ext = path.extname(finalPath).substr(1);
  const loader = loaders[ext];
  if (!loader) {
    throw new LoadItError(`Unsupported file type '.${ext}'.`);
  }
  return loader(finalPath);
};

module.exports = loadIt;
module.exports.default = loadIt;
