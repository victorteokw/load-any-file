const fs = require('fs');
const path = require('path');
const loaders = require('./loaders');

const matchExt = (filename, stripIndexOnNotFound = false) => {
  const exist = fs.existsSync(filename);
  // found a file without extension
  if (exist && !fs.lstatSync(filename).isDirectory()) {
    return filename;
  }
  // found a file with extension
  const supportedExts = Object.keys(loaders);
  for (const ext of supportedExts) {
    const filenameWithExt = filename + '.' + ext;
    if (fs.existsSync(filenameWithExt)) {
      return filenameWithExt;
    }
  }
  // found a directory and enter it
  if (exist && fs.lstatSync(filename).isDirectory()) {
    return matchExt(path.join(filename, 'index'), true);
  }
  // not found
  return !stripIndexOnNotFound ? filename : path.dirname(filename);
};

module.exports = matchExt;
