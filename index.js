const path = require('path');
const fs = require('fs');
const getCallerFilename = require('./lib/getCallerFilename');
const matchExt = require('./lib/matchExt');
const loaders = require('./lib/loaders');
const LoadAnyFileError = require('./lib/LoadAnyFileError');

const resolve = (location) => {
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
    throw new LoadAnyFileError(`Cannot find file '${finalPath}'.`);
  }
  return finalPath;
};

const loadFile = (location) => {
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
    throw new LoadAnyFileError(`Cannot find file '${finalPath}'.`);
  }
  const ext = path.extname(finalPath).substr(1);
  const loader = loaders[ext];
  if (!loader) {
    throw new LoadAnyFileError(`Unsupported file type '.${ext}'.`);
  }
  return loader(finalPath);
};

loadFile.resolve = resolve;

module.exports = loadFile;
module.exports.default = loadFile;
