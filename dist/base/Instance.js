var _keyMap = {};
/** 实例 */
export var Instance = {
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    set: function (key, value) {
        _keyMap[key] = value;
    },
    /**
     * 获取一个实例
     * @param key
     */
    get: function (key) {
        return _keyMap[key];
    },
    /**
     * 移除一个实例
     * @param key
     */
    delete: function (key) {
        var value = _keyMap[key];
        delete _keyMap[key];
        return value;
    },
};
