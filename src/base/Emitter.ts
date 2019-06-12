/** 派发器 */
export class Emitter {
    private _handlerMap: { [key: string]: Array<HandlerData> } = {};

    /**
     * 监听
     * @param type
     * @param handler
     * @param target
     * @param once
     */
    public on(type: string, handler: Handler, target?: unknown, once?: boolean): void {
        if (type == null || handler == null) {
            return;
        }
        const handlerList: Array<HandlerData> = this._getHandlerList(type);
        if (target == null) {
            target = this;
        }
        for (let i: number = handlerList.length - 1; i >= 0; i -= 1) {
            const data: HandlerData = handlerList[i];
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
     */
    public off(type: string, handler: Handler, target?: unknown): void {
        const handlerList: Array<HandlerData> = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        if (target == null) {
            target = this;
        }
        for (let i: number = handlerList.length - 1; i >= 0; i -= 1) {
            const data: HandlerData = handlerList[i];
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
    public offByType(type: string): void {
        const handlerList: Array<HandlerData> = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        handlerList.length = 0;
    }

    /**
     * 按目标对象取消监听
     * @param target
     */
    public offByTarget(target: unknown): void {
        Object.keys(this._handlerMap).forEach((key: string) => {
            const handlerList: Array<HandlerData> = this._handlerMap[key];
            for (let i: number = handlerList.length - 1; i >= 0; i -= 1) {
                const data: HandlerData = handlerList[i];
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
    public offByHandler(handler: Handler): void {
        Object.keys(this._handlerMap).forEach((key: string) => {
            const handlerList: Array<HandlerData> = this._handlerMap[key];
            for (let i: number = handlerList.length - 1; i >= 0; i -= 1) {
                const data: HandlerData = handlerList[i];
                if (data.handler === handler) {
                    handlerList.splice(i, 1);
                }
            }
        });
    }

    /**
     * 监听一次
     * @param type
     * @param handler
     * @param target
     */
    public once(type: string, handler: Handler, target?: unknown): void {
        this.on(type, handler, target, true);
    }

    /**
     * 派发
     * @param type
     * @param params
     */
    public emit(type: string, arg1?: Any, arg2?: Any, arg3?: Any, arg4?: Any, arg5?: Any): void {
        const handlerList: Array<HandlerData> = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        let needClean: boolean = false;
        const argLength: number = arguments.length;
        handlerList.forEach((data: HandlerData) => {
            const handler: Handler = data.handler;
            const target: unknown = data.target;
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
            const newHandlerList: Array<HandlerData> = [];
            for (let i: number = 0, length: number = handlerList.length; i < length; i += 1) {
                const handler: HandlerData = handlerList[i];
                if (handler.once) {
                    continue;
                }
                newHandlerList.push(handler);
            }
            this._handlerMap[type] = newHandlerList;
        }
    }

    private _getHandlerList(type: string): Array<HandlerData> {
        let list: Array<HandlerData> = this._handlerMap[type];
        if (list == null) {
            list = [];
            this._handlerMap[type] = list;
        }
        return list;
    }
}

interface HandlerData {
    type: string;
    handler: Handler;
    target?: unknown;
    once?: boolean;
}

// tslint:disable-next-line:no-any
type Handler = (...params: Array<any>) => void;
// tslint:disable-next-line:no-any
type Any = any;
