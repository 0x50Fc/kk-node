/**
 * 类
 */

var kk = {};

var Class = {};

Class.get = function(name) {
	return kk[name];
};

Class.inherit = function(name,su) {
	var fn = function(){};
	fn.name = name;
	if(su !== undefined) {
		fn.prototype = new su();
	}
	kk.name = fn;
	return fn;
};

module.exports = Class;
