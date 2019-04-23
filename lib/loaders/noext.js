const jsonLoader = require('./json');
const csonLoader = require('./cson');
const yamlLoader = require('./yaml');
const LoadItError = require('../LoadItError');

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
  throw new LoadItError(
    `File type of '${filepath}' unrecognized.`
  );
};
