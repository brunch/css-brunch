module.exports = class CSSCompiler
  compilerType: 'stylesheet'
  extension: 'css'

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    callback null, data
