const { assert } = require('chai');
const loadFile = require('../../index');

describe('Support file type: ', function() {

  it('json', function() {
    assert.deepEqual(
      loadFile('./config.json'),
      {
        'key': 'value'
      }
    );
  });

  it('js', function() {
    assert.deepEqual(
      loadFile('./config.js'),
      {
        'girlfriend': 'requested'
      }
    );
  });

  it('ts', function() {
    assert.deepEqual(
      loadFile('./config.ts'),
      {
        'what': 'ts'
      }
    );
  });

  it('cson', function() {
    assert.deepEqual(
      loadFile('./config.cson'),
      {
        'love': 'you',
        'your': 'heart'
      }
    );
  });

  it('coffee', function() {
    assert.deepEqual(
      loadFile('./config.coffee'),
      {
        'who': 'love',
        'you': 'me'
      }
    );
  });

  it('yaml', function() {
    assert.deepEqual(
      loadFile('./config.yaml'),
      {
        'name': 'Ya ML',
        'age': 18
      }
    );
  });

  describe('for file without extension', function() {
    it('loads json', function() {
      assert.deepEqual(
        loadFile('./noext/json'),
        {
          'you': 'know'
        }
      );
    });
    it('loads cson', function() {
      assert.deepEqual(
        loadFile('./noext/cson'),
        {
          'greatOnes': ['you', 'me']
        }
      );
    });
    it('loads yaml', function() {
      assert.deepEqual(
        loadFile('./noext/yaml'),
        {
          'understand': 'right'
        }
      );
    });
  });
});
