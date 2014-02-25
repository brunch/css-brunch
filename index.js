function CSSCompiler(config) {}

CSSCompiler.prototype.brunchPlugin = true;
CSSCompiler.prototype.type = 'stylesheet';
CSSCompiler.prototype.extension = 'css';

CSSCompiler.prototype.compile = function(params, callback) {
  return callback(null, params);
};

module.exports = CSSCompiler;
