const json = require('./json');
const js = require('./js');
const ts = require('./ts');
const cson = require('./cson');
const coffee = require('./coffee');
const yaml = require('./yaml');
const noext = require('./noext');

module.exports = {
  json,
  js,
  ts,
  cson,
  coffee,
  yaml,
  '': noext
};
