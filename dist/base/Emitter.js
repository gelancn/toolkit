/** 派发器 */
var Emitter = /** @class */ (function() {
    function Emitter() {
        this._handlerMap = {};
    }
    /**
     * 监听
     * @param type
     * @param handler
     * @param context
     * @param once
     */
    Emitter.prototype.on = function(type, handler, context, once) {
        var handlerList = this._getHandlerList(type);
        var handlerExt = handler;
        var index = handlerList.indexOf(handlerExt);
        if (index === -1) {
            handlerExt.type = type;
            handlerExt.once = !!once;
            handlerExt.context = context;
            handlerList.push(handlerExt);
        }
    };
    /**
     * 取消监听
     * @param type
     * @param handler
     */
    Emitter.prototype.off = function(type, handler) {
        var handlerList = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        if (handler == null) {
            handlerList.length = 0;
        } else {
            var index = handlerList.indexOf(handler);
            if (index === -1) {
                return;
            }
            delete handler.type;
            delete handler.once;
            delete handler.context;
            handlerList.splice(index, 1);
        }
    };
    /**
     * 监听一次
     * @param type
     * @param handler
     * @param context
     */
    Emitter.prototype.once = function(type, handler, context) {
        this.on(type, handler, context, true);
    };
    /**
     * 是否注册过
     * @param type
     * @param handler
     */
    Emitter.prototype.has = function(type, handler) {
        var handlerList = this._getHandlerList(type);
        var index = handlerList.indexOf(handler);
        return index !== -1;
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
        handlerList.forEach(function(handler) {
            switch (argLength) {
                case 0:
                    handler.call(handler.context);
                    break;
                case 1:
                    handler.call(handler.context, arg1);
                    break;
                case 2:
                    handler.call(handler.context, arg1, arg2);
                    break;
                case 3:
                    handler.call(handler.context, arg1, arg2, arg3);
                    break;
                case 4:
                    handler.call(handler.context, arg1, arg2, arg3, arg4);
                    break;
                case 5:
                    handler.call(handler.context, arg1, arg2, arg3, arg4, arg5);
                    break;
                default:
            }
            if (handler.once) {
                needClean = true;
            }
        });
        if (needClean) {
            var newHandlerList = [];
            for (
                var i = 0, length_1 = handlerList.length;
                i < length_1;
                i += 1
            ) {
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
//# sourceMappingURL=Emitter.js.map
