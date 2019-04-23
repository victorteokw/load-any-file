const path = require('path');
const { assert } = require('chai');
const loadFile = require('../../index');
const LoadAnyFileError = require('../../lib/LoadAnyFileError');

describe('Throws error: ', function() {

  it('if the absolute file cannot be found with extension', function() {
    assert.throws(
      () => loadFile(path.join(__dirname, './config.json')),
      LoadAnyFileError,
      /Cannot find file '.+\/config\.json'\./
    );
  });

  it('if the absolute file cannot be found without extension', function() {
    assert.throws(
      () => loadFile(path.join(__dirname, './config')),
      LoadAnyFileError,
      /Cannot find file '.+\/config\'\./
    );
  });

  it('if the relative file cannot be found with extension', function() {
    assert.throws(
      () => loadFile('./config.json'),
      LoadAnyFileError,
      /Cannot find file '.+\/config\.json'\./
    );
  });

  it('if the relative file cannot be found without extension', function() {
    assert.throws(
      () => loadFile('./config'),
      LoadAnyFileError,
      /Cannot find file '.+\/config'\./
    );
  });

  it('if directory is found but index is not exist', function() {
    assert.throws(
      () => loadFile('./aries'),
      LoadAnyFileError,
      /Cannot find file '.+\/aries'\./
    );
  });

  it('if file type not supported', function() {
    assert.throws(
      () => loadFile('./config.ini'),
      LoadAnyFileError,
      'Unsupported file type \'.ini\'.'
    );
  });

  it('if type of file with no extension cannot be recognized', function() {
    assert.throws(
      () => loadFile('./iniconf'),
      LoadAnyFileError,
      /File type of .+\/iniconf' unrecognized\./
    );
  });

});
