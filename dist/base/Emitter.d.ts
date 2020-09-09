/** 派发器 */
export declare class Emitter implements IEmitter {
    private _handlerMap;
    /**
     * 监听
     * @param type
     * @param handler
     * @param target
     * @param once
     */
    on(type: string, handler: Function, target?: unknown, once?: boolean): void;
    /**
     * 取消监听
     * @param type
     * @param handler
     * @param target
     */
    off(type: string, handler: Function, target?: unknown): void;
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
    offByHandler(handler: Function): void;
    /**
     * 取消所有监听
     */
    offAll(): void;
    /**
     * 监听一次
     * @param type
     * @param handler
     * @param target
     */
    once(type: string, handler: Function, target?: unknown): void;
    /**
     * 派发
     * @param type
     * @param params
     */
    emit(type: string, ...params: Array<unknown>): void;
    private _getHandlerList;
}
export interface IEmitter {
    /**
     * 监听
     * @param type
     * @param handler
     * @param target
     * @param once
     */
    on(type: string, handler: Function, target?: unknown, once?: boolean): void;
    /**
     * 取消监听
     * @param type
     * @param handler
     * @param target
     */
    off(type: string, handler: Function, target?: unknown): void;
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
    offByHandler(handler: Function): void;
    /**
     * 取消所有监听
     */
    offAll(): void;
    /**
     * 监听一次
     * @param type
     * @param handler
     * @param target
     */
    once(type: string, handler: Function, target?: unknown): void;
    /**
     * 派发
     * @param type
     * @param params
     */
    emit(type: string, ...params: Array<unknown>): void;
}
