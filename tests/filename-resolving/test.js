const assert = require('assert');
const loadIt = require('../../index');

describe('Resolve filename: ', function() {

  it('relative with . (a dot)', function() {
    assert.deepEqual(
      loadIt('./config.json'),
      {
        'behavior': true
      }
    );
  });

  it('relative with .. (two dots)', function() {
    assert.deepEqual(
      loadIt('../imhere.json'),
      {
        'iam': 'here'
      }
    );
  });

});
