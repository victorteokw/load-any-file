const path = require('path');
const { assert } = require('chai');
const loadIt = require('../../index');
const LoadItError = require('../../lib/LoadItError');

describe('Throws error: ', function() {

  it('if the absolute file cannot be found with extension', function() {
    assert.throws(
      () => loadIt(path.join(__dirname, './config.json')),
      LoadItError,
      /Cannot find file '.+\/config\.json'\./
    );
  });

  it('if the absolute file cannot be found without extension', function() {
    assert.throws(
      () => loadIt(path.join(__dirname, './config')),
      LoadItError,
      /Cannot find file '.+\/config\'\./
    );
  });

  it('if the relative file cannot be found with extension', function() {
    assert.throws(
      () => loadIt('./config.json'),
      LoadItError,
      /Cannot find file '.+\/config\.json'\./
    );
  });

  it('if the relative file cannot be found without extension', function() {
    assert.throws(
      () => loadIt('./config'),
      LoadItError,
      /Cannot find file '.+\/config'\./
    );
  });

  it('if directory is found but index is not exist', function() {
    assert.throws(
      () => loadIt('./aries'),
      LoadItError,
      /Cannot find file '.+\/aries'\./
    );
  });

  it('if file type not supported', function() {
    assert.throws(
      () => loadIt('./config.ini'),
      LoadItError,
      'Unsupported file type \'.ini\'.'
    );
  });

  it('if type of file with no extension cannot be recognized', function() {
    assert.throws(
      () => loadIt('./iniconf'),
      LoadItError,
      /File type of .+\/iniconf' unrecognized\./
    );
  });

});
