const { assert } = require('chai');
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

  describe('for file without extension', function() {
    it('loads json', function() {
      assert.deepEqual(
        loadIt('./noext/json'),
        {
          'you': 'know'
        }
      );
    });
    it('loads cson', function() {
      assert.deepEqual(
        loadIt('./noext/cson'),
        {
          'greatOnes': ['you', 'me']
        }
      );
    });
    it('loads yaml', function() {
      assert.deepEqual(
        loadIt('./noext/yaml'),
        {
          'understand': 'right'
        }
      );
    });
  });
});
