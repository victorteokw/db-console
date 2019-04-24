const path = require('path');
const { assert } = require('chai');
const getModelFileList = require('../../lib/getModelFileList');

describe('Get model file list: ', function() {

  it('supports glob pattern', function() {
    const files = getModelFileList(__dirname, '**/*.ts', 'glob').map((f) => {
      return path.relative(path.join(__dirname, 'glob'), f);
    });
    assert.deepEqual(files, [
      'file1.ts',
      'file2.ts',
      'subfolder/file1.ts'
    ]);
  });

  it('supports regular expression', function() {
    const files = getModelFileList(__dirname, /^[a-z]+\.js$/, 'regexp')
      .map((f) => {
        return path.relative(path.join(__dirname, 'regexp'), f);
      });
    assert.deepEqual(files, [
      'abc.js',
      'def.js',
      'ghi.js'
    ]);
  });

  it('supports array', function() {
    const files = getModelFileList(
      __dirname,
      ['1.js', '3.ts', '6.json'],
      'array'
    )
      .map((f) => {
        return path.relative(path.join(__dirname, 'array'), f);
      });
    assert.deepEqual(files, [
      '1.js',
      '3.ts',
      '6.json'
    ]);
  });
});
