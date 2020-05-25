/** 单例 */
export declare class Singleton {
    /** 单例的实例 */
    static instance: Singleton;
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    static set<T>(key: TypeCtor<T> | string, value: T): void;
    /**
     * 获取一个实例
     * @param key
     */
    static get<T>(key: TypeCtor<T> | string): T;
    /**
     * 移除一个实例
     * @param key
     */
    static delete<T>(key: TypeCtor<T> | string): void;
    private _classMap;
    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    setSingleton<T>(cls: TypeCtor<T>, value: T): void;
    /**
     * 获取一个单例
     * @param cls
     */
    getSingleton<T>(cls: TypeCtor<T>): T;
    /**
     * 移除一个单例
     * @param cls
     */
    deleteSingleton<T>(cls: TypeCtor<T>): void;
    private _keyMap;
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    setInstance<T>(key: string, value: T): void;
    /**
     * 获取一个实例
     * @param key
     */
    getInstance<T>(key: string): T;
    /**
     * 移除一个实例
     * @param key
     */
    deleteInstance<T>(key: string): void;
}
declare type TypeCtor<T> = new (...args: Array<never>) => T;
export {};
