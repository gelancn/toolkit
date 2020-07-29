/** 单例 */
var Singleton = /** @class */ (function () {
    function Singleton() {
        this._classMap = new Map();
    }
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    Singleton.set = function (key, value) {
        return Singleton.instance.set(key, value);
    };
    /**
     * 获取一个实例
     * @param key
     */
    Singleton.get = function (key) {
        return Singleton.instance.get(key);
    };
    /**
     * 移除一个实例
     * @param key
     */
    Singleton.delete = function (key) {
        return Singleton.instance.delete(key);
    };
    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    Singleton.prototype.set = function (cls, value) {
        this._classMap.set(cls, value);
    };
    /**
     * 获取一个单例
     * @param cls
     */
    Singleton.prototype.get = function (cls) {
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
    Singleton.prototype.delete = function (cls) {
        var value = this._classMap.get(cls);
        this._classMap.delete(cls);
        return value;
    };
    /** 实例 */
    Singleton.instance = new Singleton();
    return Singleton;
}());
export { Singleton };
