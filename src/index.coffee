sysPath = require 'path'

module.exports = class HTMLStringifyBrunch
  brunchPlugin: yes
  type: 'template'
  extension: 'html'
  pattern: /\.(?:html|htm)$/

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    try
      # don't do anything special with the data, just stringify
      # and pass back
      result = "#{JSON.stringify(data)}"
    catch err
      error = err
    finally
      callback error, result
