const path = require('path');
const { assert } = require('chai');
const walkSync = require('walk-sync');
const getRunner = require('../../../lib/getRunner');
const config = require('noenv');

describe('Runner: ', function() {

  describe('typegoose: ', function() {

    let models, close;
    before(async () => {
      if (config.ciBuild) return;
      const projDir = path.join(__dirname, 'proj');
      const url = config.typegoose;
      const files = walkSync(projDir, { globs: ['*.ts'] })
        .map((f) => path.join(projDir, f));
      const runner = getRunner('typegoose');
      [models, close] = await runner(projDir, url, files);
    });

    after(async () => {
      if (config.ciBuild) return;
      await close();
    });

    it('connects to database and returns model', function() {
      if (config.ciBuild) return;
      assert.isOk(models.ModelOne);
      assert.isOk(models.ModelTwo);
    });

  });

});
