/** 单例 */
export class Singleton {
    constructor() {
        this._classMap = new Map();
        this._keyMap = {};
    }
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    static set(key, value) {
        if (typeof key === "string") {
            return this.instance.setInstance(key, value);
        }
        else {
            return this.instance.setSingleton(key, value);
        }
    }
    /**
     * 获取一个实例
     * @param key
     */
    static get(key) {
        if (typeof key === "string") {
            return this.instance.getInstance(key);
        }
        else {
            return this.instance.getSingleton(key);
        }
    }
    /**
     * 移除一个实例
     * @param key
     */
    static delete(key) {
        if (typeof key === "string") {
            return this.instance.deleteInstance(key);
        }
        else {
            return this.instance.deleteSingleton(key);
        }
    }
    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    setSingleton(cls, value) {
        this._classMap.set(cls, value);
    }
    /**
     * 获取一个单例
     * @param cls
     */
    getSingleton(cls) {
        const classMap = this._classMap;
        let instance = classMap.get(cls);
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
    deleteSingleton(cls) {
        this._classMap.delete(cls);
    }
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    setInstance(key, value) {
        this._keyMap[key] = value;
    }
    /**
     * 获取一个实例
     * @param key
     */
    getInstance(key) {
        return this._keyMap[key];
    }
    /**
     * 移除一个实例
     * @param key
     */
    deleteInstance(key) {
        delete this._keyMap[key];
    }
}
/** 单例的实例 */
Singleton.instance = new Singleton();
