/** 单例 */
export declare class Singleton {
    /** 实例 */
    static instance: Singleton;
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    static set<T>(key: TypeCtor<T>, value: T): void;
    /**
     * 获取一个实例
     * @param key
     */
    static get<T>(key: TypeCtor<T>): T;
    /**
     * 移除一个实例
     * @param key
     */
    static delete<T>(key: TypeCtor<T>): T | undefined;
    private _classMap;
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
