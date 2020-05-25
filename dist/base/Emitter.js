/** 派发器 */
export class Emitter {
    constructor() {
        this._handlerMap = {};
    }
    /**
     * 监听
     * @param type
     * @param handler
     * @param target
     * @param once
     */
    on(type, handler, target, once) {
        if (type == null || handler == null) {
            return;
        }
        if (target == null) {
            target = this;
        }
        const handlerList = this._getHandlerList(type);
        for (let i = handlerList.length - 1; i >= 0; i -= 1) {
            const data = handlerList[i];
            if (data.handler === handler && data.target === target) {
                return;
            }
        }
        handlerList.push({
            type,
            handler,
            target,
            once,
        });
    }
    /**
     * 取消监听
     * @param type
     * @param handler
     * @param target
     */
    off(type, handler, target) {
        const handlerList = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        if (target == null) {
            target = this;
        }
        for (let i = handlerList.length - 1; i >= 0; i -= 1) {
            const data = handlerList[i];
            if (data.handler === handler && data.target === target) {
                handlerList.splice(i, 1);
                break;
            }
        }
    }
    /**
     * 按类型取消监听
     * @param type
     */
    offByType(type) {
        const handlerList = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        handlerList.length = 0;
    }
    /**
     * 按目标对象取消监听
     * @param target
     */
    offByTarget(target) {
        Object.keys(this._handlerMap).forEach((key) => {
            const handlerList = this._handlerMap[key];
            for (let i = handlerList.length - 1; i >= 0; i -= 1) {
                const data = handlerList[i];
                if (data.target === target) {
                    handlerList.splice(i, 1);
                }
            }
        });
    }
    /**
     * 按监听函数取消监听
     * @param handler
     */
    offByHandler(handler) {
        Object.keys(this._handlerMap).forEach((key) => {
            const handlerList = this._handlerMap[key];
            for (let i = handlerList.length - 1; i >= 0; i -= 1) {
                const data = handlerList[i];
                if (data.handler === handler) {
                    handlerList.splice(i, 1);
                }
            }
        });
    }
    /**
     * 取消所有监听
     */
    offAll() {
        Object.keys(this._handlerMap).forEach((key) => {
            delete this._handlerMap[key];
        });
    }
    /**
     * 监听一次
     * @param type
     * @param handler
     * @param target
     */
    once(type, handler, target) {
        this.on(type, handler, target, true);
    }
    /**
     * 派发
     * @param type
     * @param params
     */
    emit(type, ...params) {
        const handlerList = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        let needClean = false;
        const argLength = params.length;
        handlerList.forEach((data) => {
            const handler = data.handler;
            const target = data.target;
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
                    handler.call(target, ...params);
            }
            if (data.once) {
                needClean = true;
            }
        });
        if (needClean) {
            const newHandlerList = [];
            for (let i = 0, length = handlerList.length; i < length; i += 1) {
                const handler = handlerList[i];
                if (handler.once) {
                    continue;
                }
                newHandlerList.push(handler);
            }
            this._handlerMap[type] = newHandlerList;
        }
    }
    _getHandlerList(type) {
        let list = this._handlerMap[type];
        if (list == null) {
            list = [];
            this._handlerMap[type] = list;
        }
        return list;
    }
}
