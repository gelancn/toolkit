var _classMap = new Map();
/** 单例 */
export var Singleton = {
    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    set: function (cls, value) {
        _classMap.set(cls, value);
    },
    /**
     * 获取一个单例
     * @param cls
     */
    get: function (cls) {
        var classMap = _classMap;
        var instance = classMap.get(cls);
        if (instance == null) {
            instance = new cls();
            classMap.set(cls, instance);
        }
        return instance;
    },
    /**
     * 移除一个单例
     * @param cls
     */
    delete: function (cls) {
        var value = _classMap.get(cls);
        _classMap.delete(cls);
        return value;
    },
};
