const path = require('path');
const { assert } = require('chai');
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

  it('absolute with extension', function() {
    assert.deepEqual(
      loadIt(path.join(__dirname, 'heart.cson')),
      {
        'love': 'heart'
      }
    );
  });

  it('absolute without extension', function() {
    assert.deepEqual(
      loadIt(path.join(__dirname, 'heart')),
      {
        'love': 'heart'
      }
    );
  });

  it('relative without extension', function() {
    assert.deepEqual(
      loadIt('./heart'),
      {
        'love': 'heart'
      }
    );
  });

  it('relative with extension', function() {
    assert.deepEqual(
      loadIt('./heart.cson'),
      {
        'love': 'heart'
      }
    );
  });

  it('index file in the directory', function() {
    assert.deepEqual(
      loadIt('./sagittarius'),
      {
        'zodiac': 'sagittarius'
      }
    );
  });

  it('resolve to file first if same name dir exist', function() {
    assert.deepEqual(
      loadIt('./aquarius'),
      {
        'here': 'right'
      }
    );
  });

});
