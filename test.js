var expect = require('chai').expect;
var Plugin = require('./');

describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok;
  });

  it('should has #compile method', function() {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('should compile and produce valid result', function(done) {
    var content = '#id {color: #6b0;}';
    var expected = '#id {color: #6b0;}';

    plugin.compile({data: content, path: 'file.css'}, function(error, result) {
      var data = result.data;
      expect(error).not.to.be.ok;
      expect(data).to.equal(expected);
      done();
    });
  });
});