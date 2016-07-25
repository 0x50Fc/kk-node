/**
 * 服务
 */

var Object = require('Object');

var Service = Class.inherit('Service',Object);

Service.prototype.plugin = function() {
	return this._plugin;
};

Service.prototype.setPlugin = function(plugin) {
	this._plugin = plugin;
};

Service.prototype.handle = function(app,task) {
	var name = task.constructor.name;
	var i = name.lastIndexOf('.');
	if(i >=0){
		name = name.substr(i + 1);
	}
	var fn = this['handle' + name];
	if(typeof fn == 'function') {
		return fn.apply(this,arguments);
	}
};

module.exports = Service;
