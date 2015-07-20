global.expect = require('chai').expect;
global.Plugin = require('../lib');
var HTMLStringifyBrunch = require('../lib/index');

var assert = require("assert")

describe('Test HTML-stringify-brunch plugin', function() {
  var plugin;

  beforeEach(function () {
    plugin = new Plugin({paths: {"public": 'build'}});
  });

  it('should be an object', function () {
    expect(plugin).to.be.ok;
  });

  it('should have #compile method', function () {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('should stringify things passed into the compile method', function(){
      var result = plugin.compile('data', 'path', function (error) {
        expect(error).not.to.be.ok;
      });
      expect(result).to.equal('"data"');
    });

  it('should stringify empty things passed into the compile method', function(){
      var result = plugin.compile('', 'path', function (error) {
        expect(error).not.to.be.ok;
      });
      expect(result).to.equal('""');
  });

});
