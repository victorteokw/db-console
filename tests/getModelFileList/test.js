const path = require('path');
const { assert } = require('chai');
const getModelFileList = require('../../lib/getModelFileList');

describe('Get model file list: ', function() {

  it('supports glob pattern', function() {
    const files = getModelFileList(__dirname, '**/*.ts', 'glob').map((f) => {
      return path.relative(__dirname, f);
    });
    assert.deepEqual(files, [
      'glob/file1.ts',
      'glob/file2.ts',
      'glob/subfolder/file1.ts'
    ]);
  });

  it('supports regular expression', function() {
    const files = getModelFileList(__dirname, '**/*.ts', 'glob').map((f) => {
      return path.relative(__dirname, f);
    });
    assert.deepEqual(files, [
      'glob/file1.ts',
      'glob/file2.ts',
      'glob/subfolder/file1.ts'
    ]);
  });
});
