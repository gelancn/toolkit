/** 派发器 */
var Emitter = /** @class */ (function() {
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
    Emitter.prototype.on = function(type, handler, target, once) {
        if (type == null || handler == null) {
            return;
        }
        var handlerList = this._getHandlerList(type);
        if (target === undefined) {
            target = null;
        }
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
     */
    Emitter.prototype.off = function(type, handler, target) {
        var handlerList = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        if (target === undefined) {
            target = null;
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
    Emitter.prototype.offType = function(type) {
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
    Emitter.prototype.offTarget = function(target) {
        var _this = this;
        Object.keys(this._handlerMap).forEach(function(key) {
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
     * 监听一次
     * @param type
     * @param handler
     * @param target
     */
    Emitter.prototype.once = function(type, handler, target) {
        this.on(type, handler, target, true);
    };
    /**
     * 派发
     * @param type
     * @param params
     */
    Emitter.prototype.emit = function(type, arg1, arg2, arg3, arg4, arg5) {
        var handlerList = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        var needClean = false;
        var argLength = arguments.length;
        handlerList.forEach(function(data) {
            var handler = data.handler;
            var target = data.target;
            switch (argLength) {
                case 0:
                    handler.call(target);
                    break;
                case 1:
                    handler.call(target, arg1);
                    break;
                case 2:
                    handler.call(target, arg1, arg2);
                    break;
                case 3:
                    handler.call(target, arg1, arg2, arg3);
                    break;
                case 4:
                    handler.call(target, arg1, arg2, arg3, arg4);
                    break;
                case 5:
                    handler.call(target, arg1, arg2, arg3, arg4, arg5);
                    break;
                default:
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
    Emitter.prototype._getHandlerList = function(type) {
        var list = this._handlerMap[type];
        if (list == null) {
            list = [];
            this._handlerMap[type] = list;
        }
        return list;
    };
    return Emitter;
})();
export { Emitter };
