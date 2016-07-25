/**
 * 基础对象
 */

var Class = require('Class');

var Object = Class.inherit('Object');

Object.prototype.get = function(key,defaultValue) {
	var v = this[key];
	if(v === undefined) {
		return defaultValue;
	}
	return v;
};

Object.prototype.set = function(key,value) {
	this[key] = value;
};

module.exports = Object;
