const path = require('path');
const { assert } = require('chai');
const loadConfig = require('../../lib/loadConfig');
const alterArgv = require('../helpers/alterArgv');
const recoverArgv = require('../helpers/recoverArgv');

describe('Load config: ', function() {

  beforeEach(alterArgv);
  afterEach(recoverArgv);

  it("from 'dbConsole' field in package.json", function() {
    const config = loadConfig(path.join(__dirname, 'package'));
    assert.equal(config.orm, 'mongoose');
    assert.equal(config.custom, true);
  });

  it ('from rc file .dbconsolerc', function() {
    const config = loadConfig(path.join(__dirname, 'rcfile'));
    assert.equal(config.orm, 'sequelize-typescript');
    assert.equal(config.unexist, true);
  });

  it ('from rc file .dbconsolerc.json', function() {
    const config = loadConfig(path.join(__dirname, 'rcfilejson'));
    assert.equal(config.orm, 'some-other-orm');
    assert.equal(config.some, true);
  });

  it ('from rc file .dbconsolerc.js', function() {
    const config = loadConfig(path.join(__dirname, 'rcfilejs'));
    assert.equal(config.orm, 'some-unexist-orm');
    assert.equal(config.models, 'nowhere');
  });

  it('from command line arguments', function() {
    process.argv = process.argv.concat(['--orm', 'typeorm', '-H', '.his']);
    const config = loadConfig(path.join(__dirname, 'clargs'));
    assert.equal(config.orm, 'typeorm');
    assert.equal(config.historyFile, '.his');
  });

  it('config file takes precedence over package.json', function() {
    const config = loadConfig(path.join(__dirname, 'confoverpack'));
    assert.equal(config.orm, 'inconf');
  });

  it('command line arguments takes precedence over config file', function() {
    process.argv = process.argv.concat(['--orm', 'inargs']);
    const config = loadConfig(path.join(__dirname, 'argsoverconf'));
    assert.equal(config.orm, 'inargs');
  });

  it('command line arguments takes precedence over package.json', function() {
    process.argv = process.argv.concat(['--orm', 'inargs']);
    const config = loadConfig(path.join(__dirname, 'argsoverpack'));
    assert.equal(config.orm, 'inargs');
  });

  it('customize conf file through --config-file', function() {
    process.argv = process.argv.concat(['--config-file', 'myconf']);
    const config = loadConfig(path.join(__dirname, 'myconf'));
    assert.equal(config.orm, 'different');
  });

  it('customize conf file through -c', function() {
    process.argv = process.argv.concat(['-c', 'myconf']);
    const config = loadConfig(path.join(__dirname, 'myconf'));
    assert.equal(config.orm, 'different');
  });

  it('when customize conf load, do not load original', function() {
    process.argv = process.argv.concat(['-c', 'myconf']);
    const config = loadConfig(path.join(__dirname, 'cusvsori'));
    assert.equal(config.orm, 'altered');
  });
});
