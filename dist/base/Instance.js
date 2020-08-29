/** 实例 */
var Instance = /** @class */ (function () {
    function Instance() {
        this._keyMap = {};
    }
    /**
     * 替换实例，尽量不要使用
     * @param value
     */
    Instance.setInstance = function (value) {
        Instance._instance = value;
    };
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    Instance.set = function (key, value) {
        return Instance._instance.set(key, value);
    };
    /**
     * 获取一个实例
     * @param key
     */
    Instance.get = function (key) {
        return Instance._instance.get(key);
    };
    /**
     * 移除一个实例
     * @param key
     */
    Instance.delete = function (key) {
        return Instance._instance.delete(key);
    };
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    Instance.prototype.set = function (key, value) {
        this._keyMap[key] = value;
    };
    /**
     * 获取一个实例
     * @param key
     */
    Instance.prototype.get = function (key) {
        return this._keyMap[key];
    };
    /**
     * 移除一个实例
     * @param key
     */
    Instance.prototype.delete = function (key) {
        var value = this._keyMap[key];
        delete this._keyMap[key];
        return value;
    };
    /** 实例 */
    Instance._instance = new Instance();
    return Instance;
}());
export { Instance };
