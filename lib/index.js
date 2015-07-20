(function() {
  var HTMLStringifyBrunch, sysPath;

  sysPath = require('path');

  module.exports = HTMLStringifyBrunch = (function() {
    HTMLStringifyBrunch.prototype.brunchPlugin = true;
    HTMLStringifyBrunch.prototype.type = 'template';
    HTMLStringifyBrunch.prototype.extension = 'html';
    HTMLStringifyBrunch.prototype.pattern = /\.(?:html|htm)$/;

    function HTMLStringifyBrunch(config) {
      this.config = config;
      null;
    }

    HTMLStringifyBrunch.prototype.compile = function(data, path, callback) {
      var err, error, result;
      try {
        // uncomment if you want to debug
        //console.log('Stringifying ' + path);

        // don't do anything special with the data, just stringify
        // and pass back
        return result = JSON.stringify(data);
      } catch (_error) {
        return error = _error;
      } finally {
        callback(error, result);
      }
    };

    return HTMLStringifyBrunch;

  })();

}).call(this);
