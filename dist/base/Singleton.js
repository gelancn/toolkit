/** 单例 */
var Singleton = /** @class */ (function () {
    function Singleton() {
        this._classMap = new Map();
        this._keyMap = {};
    }
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    Singleton.set = function (key, value) {
        if (typeof key === "string") {
            return Singleton.instance.setInstance(key, value);
        }
        else {
            return Singleton.instance.setSingleton(key, value);
        }
    };
    /**
     * 获取一个实例
     * @param key
     */
    Singleton.get = function (key) {
        if (typeof key === "string") {
            return Singleton.instance.getInstance(key);
        }
        else {
            return Singleton.instance.getSingleton(key);
        }
    };
    /**
     * 移除一个实例
     * @param key
     */
    Singleton.delete = function (key) {
        if (typeof key === "string") {
            return Singleton.instance.deleteInstance(key);
        }
        else {
            return Singleton.instance.deleteSingleton(key);
        }
    };
    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    Singleton.prototype.setSingleton = function (cls, value) {
        this._classMap.set(cls, value);
    };
    /**
     * 获取一个单例
     * @param cls
     */
    Singleton.prototype.getSingleton = function (cls) {
        var classMap = this._classMap;
        var instance = classMap.get(cls);
        if (instance == null) {
            instance = new cls();
            classMap.set(cls, instance);
        }
        return instance;
    };
    /**
     * 移除一个单例
     * @param cls
     */
    Singleton.prototype.deleteSingleton = function (cls) {
        this._classMap.delete(cls);
    };
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    Singleton.prototype.setInstance = function (key, value) {
        this._keyMap[key] = value;
    };
    /**
     * 获取一个实例
     * @param key
     */
    Singleton.prototype.getInstance = function (key) {
        return this._keyMap[key];
    };
    /**
     * 移除一个实例
     * @param key
     */
    Singleton.prototype.deleteInstance = function (key) {
        delete this._keyMap[key];
    };
    /** 单例的实例 */
    Singleton.instance = new Singleton();
    return Singleton;
}());
export { Singleton };
