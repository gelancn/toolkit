import { ObjectAddition } from "./ObjectAddition";
/** 单例 */
var Singleton = /** @class */ (function () {
    function Singleton() {
        this._singletonKey = "_singleton_";
    }
    /**
     * 替换实例，尽量不要使用
     * @param value
     */
    Singleton.setInstance = function (value) {
        Singleton._instance = value;
    };
    /**
     * 添加一个实例
     * @param cls
     * @param value
     */
    Singleton.set = function (cls, value) {
        return Singleton._instance.set(cls, value);
    };
    /**
     * 获取一个实例
     * @param cls
     */
    Singleton.get = function (cls) {
        return Singleton._instance.get(cls);
    };
    /**
     * 移除一个实例
     * @param cls
     */
    Singleton.delete = function (cls) {
        return Singleton._instance.delete(cls);
    };
    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    Singleton.prototype.set = function (cls, value) {
        ObjectAddition.set(cls, this._singletonKey, value);
    };
    /**
     * 获取一个单例
     * @param cls
     */
    Singleton.prototype.get = function (cls) {
        var instance = ObjectAddition.get(cls, this._singletonKey);
        if (instance == null) {
            instance = new cls();
            ObjectAddition.set(cls, this._singletonKey, instance);
        }
        return instance;
    };
    /**
     * 移除一个单例
     * @param cls
     */
    Singleton.prototype.delete = function (cls) {
        var value = ObjectAddition.get(cls, this._singletonKey);
        ObjectAddition.delete(cls, this._singletonKey);
        return value;
    };
    /** 实例 */
    Singleton._instance = new Singleton();
    return Singleton;
}());
export { Singleton };
