/** 派发器 */
export class Emitter {
    private _handlerMap: { [key: string]: Array<HandlerExt> } = {};

    /**
     * 监听
     * @param type
     * @param handler
     * @param context
     * @param once
     */
    public on(
        type: string,
        handler: Handler,
        context?: unknown,
        once?: boolean,
    ): void {
        const handlerList: Array<HandlerExt> = this._getHandlerList(type);
        const handlerExt: HandlerExt = handler as HandlerExt;
        const index: number = handlerList.indexOf(handlerExt);
        if (index === -1) {
            handlerExt.type = type;
            handlerExt.once = !!once;
            handlerExt.context = context;
            handlerList.push(handlerExt);
        }
    }

    /**
     * 取消监听
     * @param type
     * @param handler
     */
    public off(type: string, handler?: Handler): void {
        const handlerList: Array<HandlerExt> = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        if (handler == null) {
            handlerList.length = 0;
        } else {
            const index: number = handlerList.indexOf(handler as HandlerExt);
            if (index === -1) {
                return;
            }
            delete (handler as HandlerExt).type;
            delete (handler as HandlerExt).once;
            delete (handler as HandlerExt).context;
            handlerList.splice(index, 1);
        }
    }

    /**
     * 监听一次
     * @param type
     * @param handler
     * @param context
     */
    public once(type: string, handler: Handler, context?: unknown): void {
        this.on(type, handler, context, true);
    }

    /**
     * 是否注册过
     * @param type
     * @param handler
     */
    public has(type: string, handler: Handler): boolean {
        const handlerList: Array<HandlerExt> = this._getHandlerList(type);
        const index: number = handlerList.indexOf(handler as Handler);
        return index === -1;
    }

    /**
     * 派发
     * @param type
     * @param params
     */
    // tslint:disable-next-line:no-any
    public emit(
        type: string,
        arg1?: any,
        arg2?: any,
        arg3?: any,
        arg4?: any,
        arg5?: any,
    ): void {
        const handlerList: Array<HandlerExt> = this._getHandlerList(type);
        if (handlerList.length === 0) {
            return;
        }
        let needClean: boolean = false;
        for (
            let i: number = 0, length: number = handlerList.length;
            i < length;
            i += 1
        ) {
            const handler: HandlerExt = handlerList[i];
            switch (arguments.length) {
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
        }
        if (needClean) {
            const newHandlerList: Array<HandlerExt> = [];
            for (
                let i: number = 0, length: number = handlerList.length;
                i < length;
                i += 1
            ) {
                const handler: HandlerExt = handlerList[i];
                if (handler.once) {
                    continue;
                }
                newHandlerList.push(handler);
            }
            this._handlerMap[type] = newHandlerList;
        }
    }

    private _getHandlerList(type: string): Array<HandlerExt> {
        let list: Array<HandlerExt> = this._handlerMap[type];
        if (list == null) {
            list = [];
            this._handlerMap[type] = list;
        }
        return list;
    }
}

// tslint:disable-next-line:no-any
type Handler = (...params: Array<any>) => void;

interface HandlerExt extends Handler {
    context?: unknown;
    once?: boolean;
    type?: string;
}
