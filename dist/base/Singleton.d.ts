/** 单例 */
export declare class Singleton {
    /** 单例的实例 */
    static instance: Singleton;
    private _singletonMap;
    /**
     * 添加一个单例
     * @param value 类
     * @param instance 实例(可传入非参数1 类的实例)
     */
    map<T>(value: new () => T, instance?: T | Object): void;
    /**
     * 获取一个单例
     * @param value
     */
    get<T>(value: new () => T): T;
    /**
     * 移除一个单例
     * @param value
     */
    remove<T>(value: new () => T): void;
}
