module.exports = (filepath) => {
  try {
    require('coffeescript/register');
  } catch(e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      throw new Error("Dependency missing. Please install 'coffeescript'.");
    } else {
      throw e;
    }
  }
  return require(filepath);
};
