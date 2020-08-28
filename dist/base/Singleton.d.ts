/** 单例 */
export declare const Singleton: {
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
};
declare type TypeCtor<T> = new (...args: Array<never>) => T;
export {};
