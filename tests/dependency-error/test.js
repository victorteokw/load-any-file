const path = require('path');
const fs = require('fs');
const assert = require('assert');
const loadIt = require('../../index');

describe('Throws error: ', function() {
  let original;
  beforeEach(function() {
    original = path.join(__dirname, '../../node_modules/coffeescript');
    fs.renameSync(original, original + '_alt');
  });
  afterEach(function() {
    fs.renameSync(original + '_alt', original);
  });
  it('if requires cson file and coffeescript is not installed', function() {
    assert.throws(
      () => loadIt(path.join(__dirname, './config.cson')),
      {
        name: 'LoadItError',
        message: "Dependency missing. Please install 'coffeescript'."
      }
    );
  });

});
