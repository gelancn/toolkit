/** 单例 */
var Singleton = /** @class */ (function() {
    function Singleton() {
        this._singletonMap = new Map();
    }
    /**
     * 添加一个单例
     * @param value 类
     * @param instance 实例(可传入非参数1 类的实例)
     */
    Singleton.prototype.map = function(value, instance) {
        if (instance == null) {
            instance = this._singletonMap.get(value);
            if (instance == null) {
                instance = new value();
                this._singletonMap.set(value, instance);
            }
        } else {
            this._singletonMap.set(value, instance);
        }
    };
    /**
     * 获取一个单例
     * @param value
     */
    Singleton.prototype.get = function(value) {
        var instance = this._singletonMap.get(value);
        if (instance == null) {
            instance = instance = new value();
            this._singletonMap.set(value, instance);
        }
        return instance;
    };
    /**
     * 移除一个单例
     * @param value
     */
    Singleton.prototype.remove = function(value) {
        this._singletonMap.delete(value);
    };
    /** 单例的实例 */
    Singleton.instance = new Singleton();
    return Singleton;
})();
export { Singleton };
