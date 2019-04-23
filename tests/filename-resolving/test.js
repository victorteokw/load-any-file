const path = require('path');
const { assert } = require('chai');
const loadFile = require('../../index');

describe('Resolve filename: ', function() {

  it('relative with . (a dot)', function() {
    assert.deepEqual(
      loadFile('./config.json'),
      {
        'behavior': true
      }
    );
  });

  it('relative with .. (two dots)', function() {
    assert.deepEqual(
      loadFile('../imhere.json'),
      {
        'iam': 'here'
      }
    );
  });

  it('absolute with extension', function() {
    assert.deepEqual(
      loadFile(path.join(__dirname, 'heart.cson')),
      {
        'love': 'heart'
      }
    );
  });

  it('absolute without extension', function() {
    assert.deepEqual(
      loadFile(path.join(__dirname, 'heart')),
      {
        'love': 'heart'
      }
    );
  });

  it('relative without extension', function() {
    assert.deepEqual(
      loadFile('./heart'),
      {
        'love': 'heart'
      }
    );
  });

  it('relative with extension', function() {
    assert.deepEqual(
      loadFile('./heart.cson'),
      {
        'love': 'heart'
      }
    );
  });

  it('index file in the directory', function() {
    assert.deepEqual(
      loadFile('./sagittarius'),
      {
        'zodiac': 'sagittarius'
      }
    );
  });

  it('resolve to file first if same name dir exist', function() {
    assert.deepEqual(
      loadFile('./aquarius'),
      {
        'here': 'right'
      }
    );
  });

});
