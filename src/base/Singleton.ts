/** 单例 */
export class Singleton {
    /** 单例的实例 */
    public static instance: Singleton = new Singleton();

    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    static set<T>(key: TypeCtor<T> | string, value: T): void {
        if (typeof key === "string") {
            return this.instance.setInstance(key, value);
        } else {
            return this.instance.setSingleton(key, value);
        }
    }

    /**
     * 获取一个实例
     * @param key
     */
    static get<T>(key: TypeCtor<T> | string): T {
        if (typeof key === "string") {
            return this.instance.getInstance(key);
        } else {
            return this.instance.getSingleton(key);
        }
    }

    /**
     * 移除一个实例
     * @param key
     */
    static delete<T>(key: TypeCtor<T> | string): void {
        if (typeof key === "string") {
            return this.instance.deleteInstance(key);
        } else {
            return this.instance.deleteSingleton(key);
        }
    }

    private _classMap: Map<Function, unknown> = new Map();

    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    setSingleton<T>(cls: TypeCtor<T>, value: T): void {
        this._classMap.set(cls, value);
    }

    /**
     * 获取一个单例
     * @param cls
     */
    getSingleton<T>(cls: TypeCtor<T>): T {
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
    deleteSingleton<T>(cls: TypeCtor<T>): void {
        this._classMap.delete(cls);
    }

    private _keyMap: { [key: string]: unknown } = {};

    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    setInstance<T>(key: string, value: T): void {
        this._keyMap[key] = value;
    }

    /**
     * 获取一个实例
     * @param key
     */
    getInstance<T>(key: string): T {
        return this._keyMap[key] as T;
    }

    /**
     * 移除一个实例
     * @param key
     */
    deleteInstance<T>(key: string): void {
        delete this._keyMap[key];
    }
}

type TypeCtor<T> = new (...args: Array<unknown>) => T;
