const path = require('path');
const assert = require('assert');
const loadIt = require('../../index');

describe('Throws error: ', function() {

  it('if the absolute file cannot be found with extension', function() {
    assert.throws(
      () => loadIt(path.join(__dirname, './config.json')),
      {
        name: 'LoadItError',
        message: /Cannot find file '.+\/config\.json'\./
      }
    );
  });

  it('if the absolute file cannot be found without extension', function() {
    assert.throws(
      () => loadIt(path.join(__dirname, './config')),
      {
        name: 'LoadItError',
        message: /Cannot find file '.+\/config\'\./
      }
    );
  });

  it('if the relative file cannot be found with extension', function() {
    assert.throws(
      () => loadIt('./config.json'),
      {
        name: 'LoadItError',
        message: /Cannot find file '.+\/config\.json'\./
      }
    );
  });

  it('if the relative file cannot be found without extension', function() {
    assert.throws(
      () => loadIt('./config'),
      {
        name: 'LoadItError',
        message: /Cannot find file '.+\/config'\./
      }
    );
  });

  it('if directory is found but index is not exist', function() {
    assert.throws(
      () => loadIt('./aries'),
      {
        name: 'LoadItError',
        message: /Cannot find file '.+\/aries\/index'\./
      }
    );
  });

  it('if file type not supported', function() {
    assert.throws(
      () => loadIt('./config.ini'),
      {
        name: 'LoadItError',
        message: 'Unsupported file type \'.ini\'.'
      }
    );
  });

});
