/**
 * 任务
 */

var Object = require('Object');

var Task = Class.inherit('Task',Object);

Task.prototype.on = function(name,fn) {
	if(this._fns === undefined) {
		this._fns = {};
	}
	var fns = this._fns[name];
	if(fns === undefined) {
		fns = [];
		this._fns[name] = fns;
	}
	fns.push(fn);
};

Task.prototype.off = function(name,fn) {
	if(name === undefined && fn === undefined) {
		delete this._fns;
	}
	else if(fn === undefined && this._fns) {
		delete this._fns[name];
	}
	else if(this._fns){
		var fns = this._fns[name];
		if(fns !== undefined) {
			var vs = [];
			for(var i in fns) {
				var f =fns[i];
				if(f != fn) {
					vs.push(f);
				}
			}
			this._fns[name] = vs;
		}
	}
};

Task.prototype.emit = function(name) {
	if(this._fns) {
		var fns = this._fns[name];
		if(fns) {
			fns = fns.slice();
			var args = arguments.slice(1);
			for(var i in fns) {
				fns[i].apply(this,args);
			}
		}
	}
};

module.exports = Task;
