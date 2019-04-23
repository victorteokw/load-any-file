const jsonLoader = require('./json');
const csonLoader = require('./cson');
const yamlLoader = require('./yaml');
const LoadAnyFileError = require('../LoadAnyFileError');

module.exports = (filepath) => {
  try {
    return jsonLoader(filepath);
  } catch(e) {}
  try {
    return yamlLoader(filepath);
  } catch(e) {}
  try {
    return csonLoader(filepath);
  } catch(e) {}
  throw new LoadAnyFileError(
    `File type of '${filepath}' unrecognized.`
  );
};
