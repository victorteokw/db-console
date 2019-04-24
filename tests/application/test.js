const path = require('path');
const { assert } = require('chai');
const sinon = require('sinon');
const app = require('../../index');
const runProcessSync = require('../helpers/runProcessSync');
const packageJson = require('../../package.json');

describe('Output version: ', function() {

  it('with --version, outputs version and exit', function() {
    const response = runProcessSync(
      'node', path.join(__dirname, '../../index.js'), '--version'
    );
    assert.equal(response.stdout.toString(), `${packageJson.version}\n`);
    assert.equal(response.stderr.toString(), '');
  });

  it('with -v, outputs version and exit', function() {
    const response = runProcessSync(
      'node', path.join(__dirname, '../../index.js'), '-v'
    );
    assert.equal(response.stdout.toString(), `${packageJson.version}\n`);
    assert.equal(response.stderr.toString(), '');
  });

});

describe('Output help: ', function() {

  describe('content of help: ', function() {
    let output;
    before(function() {
      const response = runProcessSync(
        'node', path.join(__dirname, '../../index.js'), '--help'
      );
      output = response.stdout.toString();
    });

    it("has section 'DB Console'", function() {
      assert.match(output, /DB Console/);
    });

    it('has version', function() {
      assert.match(output, new RegExp(packageJson.version));
    });

    it('has description', function() {
      assert.match(output, new RegExp(packageJson.description));
    });

    it("has section 'Options'", function() {
      assert.match(output, /Options/);
    });

    it("has option 'help'", function() {
      assert.match(output, /-h, +--help +view db-console's help/);
    });

    it("has section 'Supported ORMs'", function() {
      assert.match(output, /Supported ORMs/);
    });

  });

  it('with --help, outputs help and exit', function() {
    const response = runProcessSync(
      'node', path.join(__dirname, '../../index.js'), '--help'
    );
    assert.match(response.stdout.toString(), /DB Console/);
    assert.match(response.stdout.toString(), /Options/);
    assert.match(response.stdout.toString(), /Supported ORMs/);
    assert.equal(response.stderr.toString(), '');
  });

  it('with -h, outputs help and exit', function() {
    const response = runProcessSync(
      'node', path.join(__dirname, '../../index.js'), '-h'
    );
    assert.match(response.stdout.toString(), /DB Console/);
    assert.match(response.stdout.toString(), /Options/);
    assert.match(response.stdout.toString(), /Supported ORMs/);
    assert.equal(response.stderr.toString(), '');
  });

});
