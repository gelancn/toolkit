/** 实例 */
var Instance = /** @class */ (function () {
    function Instance() {
        this._keyMap = {};
    }
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    Instance.set = function (key, value) {
        return Instance.instance.set(key, value);
    };
    /**
     * 获取一个实例
     * @param key
     */
    Instance.get = function (key) {
        return Instance.instance.get(key);
    };
    /**
     * 移除一个实例
     * @param key
     */
    Instance.delete = function (key) {
        return Instance.instance.delete(key);
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
    Instance.instance = new Instance();
    return Instance;
}());
export { Instance };
