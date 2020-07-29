/** 实例 */
export class Instance {
    /** 实例 */
    public static instance: Instance = new Instance();

    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    static set<T>(key: string, value: T): void {
        return Instance.instance.set(key, value);
    }

    /**
     * 获取一个实例
     * @param key
     */
    static get<T>(key: string): T | undefined {
        return Instance.instance.get(key);
    }

    /**
     * 移除一个实例
     * @param key
     */
    static delete<T>(key: string): T | undefined {
        return Instance.instance.delete(key);
    }

    private _keyMap: { [key: string]: unknown } = {};

    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    set<T>(key: string, value: T): void {
        this._keyMap[key] = value;
    }

    /**
     * 获取一个实例
     * @param key
     */
    get<T>(key: string): T | undefined {
        return this._keyMap[key] as T | undefined;
    }

    /**
     * 移除一个实例
     * @param key
     */
    delete<T>(key: string): T | undefined {
        const value = this._keyMap[key] as T | undefined;
        delete this._keyMap[key];
        return value;
    }
}
