"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.transformAlpha=transformAlpha;exports.transformOmega=transformOmega;exports.default=transform;var _debug=_interopRequireDefault(require("debug"));var _shinkansenSignals=require("shinkansen-signals");var _shinkansenRails=require("shinkansen-rails");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const log=(0,_debug.default)('zashiki:transformer:to-back-link');function transformAlpha(resource={},pattern=_shinkansenSignals.Signals.ALPHA_PATTERN,text){log('transformAlpha');return transform(resource,pattern,text);}function transformOmega(resource={},pattern=_shinkansenSignals.Signals.OMEGA_PATTERN,text){log('transformOmega');return transform(resource,pattern,text);}function transform(resource={},pattern,text='Back'){log('transform');if(_shinkansenRails.Rails.go(resource,pattern)){return{href:_shinkansenRails.Rails.to(resource,pattern),text};}}