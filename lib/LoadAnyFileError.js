module.exports = class LoadAnyFileError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'LoadAnyFileError';
    this.code = 'LOAD_ANY_FILE_ERROR';
  }
};
