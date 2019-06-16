/** 派发器 */
export declare class Emitter {
    private _handlerMap;
    /**
     * 监听
     * @param type
     * @param handler
     * @param target
     * @param once
     */
    on(type: string, handler: Handler, target?: unknown, once?: boolean): void;
    /**
     * 取消监听
     * @param type
     * @param handler
     */
    off(type: string, handler: Handler, target?: unknown): void;
    /**
     * 按类型取消监听
     * @param type
     */
    offByType(type: string): void;
    /**
     * 按目标对象取消监听
     * @param target
     */
    offByTarget(target: unknown): void;
    /**
     * 按监听函数取消监听
     * @param handler
     */
    offByHandler(handler: Handler): void;
    /**
     * 监听一次
     * @param type
     * @param handler
     * @param target
     */
    once(type: string, handler: Handler, target?: unknown): void;
    /**
     * 派发
     * @param type
     * @param params
     */
    emit(type: string, arg1?: Any, arg2?: Any, arg3?: Any, arg4?: Any, arg5?: Any): void;
    private _getHandlerList;
}
declare type Handler = (...params: Array<any>) => void;
declare type Any = any;
export {};
