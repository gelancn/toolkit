/** 派发器 */
export declare class Emitter {
    private _handlerMap;
    /**
     * 监听
     * @param type
     * @param handler
     * @param context
     * @param once
     */
    on(type: string, handler: Handler, context?: unknown, once?: boolean): void;
    /**
     * 取消监听
     * @param type
     * @param handler
     */
    off(type: string, handler?: Handler): void;
    /**
     * 监听一次
     * @param type
     * @param handler
     * @param context
     */
    once(type: string, handler: Handler, context?: unknown): void;
    /**
     * 是否注册过
     * @param type
     * @param handler
     */
    has(type: string, handler: Handler): boolean;
    /**
     * 派发
     * @param type
     * @param params
     */
    emit(
        type: string,
        arg1?: any,
        arg2?: any,
        arg3?: any,
        arg4?: any,
        arg5?: any,
    ): void;
    private _getHandlerList;
}
declare type Handler = (...params: Array<any>) => void;
export {};
