/** 单例 */
export declare class Singleton {
    /** 实例 */
    private static _instance;
    /**
     * 替换实例，尽量不要使用
     * @param value
     */
    static setInstance(value: Singleton): void;
    /**
     * 添加一个实例
     * @param cls
     * @param value
     */
    static set<T>(cls: TypeCtor<T>, value: T): void;
    /**
     * 获取一个实例
     * @param cls
     */
    static get<T>(cls: TypeCtor<T>): T;
    /**
     * 移除一个实例
     * @param cls
     */
    static delete<T>(cls: TypeCtor<T>): T | undefined;
    private _singletonKey;
    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    set<T>(cls: TypeCtor<T>, value: T): void;
    /**
     * 获取一个单例
     * @param cls
     */
    get<T>(cls: TypeCtor<T>): T;
    /**
     * 移除一个单例
     * @param cls
     */
    delete<T>(cls: TypeCtor<T>): T | undefined;
}
declare type TypeCtor<T> = new (...args: Array<never>) => T;
export {};
