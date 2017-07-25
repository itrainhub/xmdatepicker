/*!
 * jQuery xmDatePicker Plugin v1.0.0
 * https://github.com/itrainhub/xmdatepicker
 *
 * Copyright 2017 isaac
 * Released under the MIT license
 */
;
(function(factory){
	if (typeof define === "function" && define.amd) {
		// 支持AMD规范
		define(["jquery"], factory);
	} else if (typeof exports === "object"){
		// 支持CommonJS规范
		factory(require("jquery"));
	} else {
		// 不支持模块化开发
		factory(jQuery);
	}
}(function($){
	
}));