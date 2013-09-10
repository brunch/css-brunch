module.exports = class CSSCompiler
  brunchPlugin: yes
  type: 'stylesheet'
  extension: 'css'

  constructor: (@config) ->
    null

  compile: (params, callback) ->
    callback null, params
