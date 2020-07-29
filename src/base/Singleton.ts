/** 单例 */
export class Singleton {
    /** 实例 */
    public static instance: Singleton = new Singleton();

    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    static set<T>(key: TypeCtor<T>, value: T): void {
        return Singleton.instance.set(key, value);
    }

    /**
     * 获取一个实例
     * @param key
     */
    static get<T>(key: TypeCtor<T>): T {
        return Singleton.instance.get(key);
    }

    /**
     * 移除一个实例
     * @param key
     */
    static delete<T>(key: TypeCtor<T>): T | undefined {
        return Singleton.instance.delete(key);
    }

    private _classMap: Map<Function, unknown> = new Map();

    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    set<T>(cls: TypeCtor<T>, value: T): void {
        this._classMap.set(cls, value);
    }

    /**
     * 获取一个单例
     * @param cls
     */
    get<T>(cls: TypeCtor<T>): T {
        const classMap: Map<Function, unknown> = this._classMap;
        let instance = classMap.get(cls) as T;
        if (instance == null) {
            instance = new cls();
            classMap.set(cls, instance);
        }
        return instance;
    }

    /**
     * 移除一个单例
     * @param cls
     */
    delete<T>(cls: TypeCtor<T>): T | undefined {
        const value = this._classMap.get(cls) as T | undefined;
        this._classMap.delete(cls);
        return value;
    }
}

type TypeCtor<T> = new (...args: Array<never>) => T;
