/** 派发器 */
var Emitter = /** @class */ (function () {
    function Emitter() {
        this._handlerMap = {};
    }
    /**
     * 监听
     * @param type
     * @param handler
     * @param target
     * @param once
     */
    Emitter.prototype.on = function (type, handler, target, once) {
        if (type == null || handler == null) {
            return;
        }
        if (target == null) {
            target = this;
        }
        var handlerList = this._getHandlerList(type);
        for (var i = handlerList.length - 1; i >= 0; i -= 1) {
            var data = handlerList[i];
            if (data.handler === handler && data.target === target) {
                return;
            }
        }
        handlerList.push({
            type: type,
            handler: handler,
            target: target,
            once: once,
        });
    };
    /**
     * 取消监听
     * @param type
     * @param handler
     * @param target
     */
    Emitter.prototype.off = function (type, handler, target) {
        var handlerList = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        if (target == null) {
            target = this;
        }
        for (var i = handlerList.length - 1; i >= 0; i -= 1) {
            var data = handlerList[i];
            if (data.handler === handler && data.target === target) {
                handlerList.splice(i, 1);
                break;
            }
        }
    };
    /**
     * 按类型取消监听
     * @param type
     */
    Emitter.prototype.offByType = function (type) {
        var handlerList = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        handlerList.length = 0;
    };
    /**
     * 按目标对象取消监听
     * @param target
     */
    Emitter.prototype.offByTarget = function (target) {
        var _this = this;
        Object.keys(this._handlerMap).forEach(function (key) {
            var handlerList = _this._handlerMap[key];
            for (var i = handlerList.length - 1; i >= 0; i -= 1) {
                var data = handlerList[i];
                if (data.target === target) {
                    handlerList.splice(i, 1);
                }
            }
        });
    };
    /**
     * 按监听函数取消监听
     * @param handler
     */
    Emitter.prototype.offByHandler = function (handler) {
        var _this = this;
        Object.keys(this._handlerMap).forEach(function (key) {
            var handlerList = _this._handlerMap[key];
            for (var i = handlerList.length - 1; i >= 0; i -= 1) {
                var data = handlerList[i];
                if (data.handler === handler) {
                    handlerList.splice(i, 1);
                }
            }
        });
    };
    /**
     * 取消所有监听
     */
    Emitter.prototype.offAll = function () {
        var _this = this;
        Object.keys(this._handlerMap).forEach(function (key) {
            delete _this._handlerMap[key];
        });
    };
    /**
     * 监听一次
     * @param type
     * @param handler
     * @param target
     */
    Emitter.prototype.once = function (type, handler, target) {
        this.on(type, handler, target, true);
    };
    /**
     * 派发
     * @param type
     * @param params
     */
    Emitter.prototype.emit = function (type) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var handlerList = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        var needClean = false;
        var argLength = params.length;
        handlerList.forEach(function (data) {
            var handler = data.handler;
            var target = data.target;
            switch (argLength) {
                case 0:
                    handler.call(target);
                    break;
                case 1:
                    handler.call(target, params[0]);
                    break;
                case 2:
                    handler.call(target, params[0], params[1]);
                    break;
                case 3:
                    handler.call(target, params[0], params[1], params[2]);
                    break;
                case 4:
                    handler.call(target, params[0], params[1], params[2], params[3]);
                    break;
                case 5:
                    handler.call(target, params[0], params[1], params[2], params[3], params[4]);
                    break;
                default:
                    handler.call.apply(handler, [target].concat(params));
            }
            if (data.once) {
                needClean = true;
            }
        });
        if (needClean) {
            var newHandlerList = [];
            for (var i = 0, length_1 = handlerList.length; i < length_1; i += 1) {
                var handler = handlerList[i];
                if (handler.once) {
                    continue;
                }
                newHandlerList.push(handler);
            }
            this._handlerMap[type] = newHandlerList;
        }
    };
    Emitter.prototype._getHandlerList = function (type) {
        var list = this._handlerMap[type];
        if (list == null) {
            list = [];
            this._handlerMap[type] = list;
        }
        return list;
    };
    return Emitter;
}());
export { Emitter };
