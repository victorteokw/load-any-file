const fs = require('fs');
const path = require('path');
const loaders = require('./loaders');

const matchExt = (filename) => {
  if (fs.existsSync(filename)) {
    if (fs.lstatSync(filename).isDirectory()) {
      return matchExt(path.join(filename, 'index'));
    } else {
      return filename;
    }
  } else {
    const supportedExts = Object.keys(loaders);
    for (const ext of supportedExts) {
      const filenameWithExt = filename + '.' + ext;
      if (fs.existsSync(filenameWithExt)) {
        return filenameWithExt;
      }
    }
    return filename;
  }
};

module.exports = matchExt;
