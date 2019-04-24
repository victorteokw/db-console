const { assert } = require('chai');
const attachToGlobal = require('../../lib/attachToGlobal');

describe('Attach to global: ', function() {

  it('attach an object key value pairs to global', function() {
    assert.equal(global._unexist_random_name_111, undefined);
    assert.equal(global._unexist_random_name_222, undefined);
    assert.equal(global._unexist_random_name_333, undefined);
    attachToGlobal({
      _unexist_random_name_111: '1',
      _unexist_random_name_222: '2',
      _unexist_random_name_333: '3'
    });
    assert.equal(global._unexist_random_name_111, '1');
    assert.equal(global._unexist_random_name_222, '2');
    assert.equal(global._unexist_random_name_333, '3');
  });

});
