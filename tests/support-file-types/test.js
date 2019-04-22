const assert = require('assert');
const loadIt = require('../../index');

describe('Support file type: ', function() {

  it('json', function() {
    assert.deepEqual(
      loadIt('./config.json'),
      {
        'key': 'value'
      }
    );
  });

  it('js', function() {
    assert.deepEqual(
      loadIt('./config.js'),
      {
        'girlfriend': 'requested'
      }
    );
  });

  it('ts', function() {
    assert.deepEqual(
      loadIt('./config.ts'),
      {
        'what': 'ts'
      }
    );
  });

  it('cson', function() {
    assert.deepEqual(
      loadIt('./config.cson'),
      {
        'love': 'you',
        'your': 'heart'
      }
    );
  });

  it('coffee', function() {
    assert.deepEqual(
      loadIt('./config.coffee'),
      {
        'who': 'love',
        'you': 'me'
      }
    );
  });

  it('yaml', function() {
    assert.deepEqual(
      loadIt('./config.yaml'),
      {
        'name': 'Ya ML',
        'age': 18
      }
    );
  });
});
