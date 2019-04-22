module.exports = class LoadItError extends Error {
  constructor(...args) {
    super(...args);
    this.name = 'LoadItError';
    this.code = 'LOAD_IT_ERROR';
  }
};
