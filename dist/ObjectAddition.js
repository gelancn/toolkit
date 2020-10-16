var _additionKey = "_ObjectAddition_";
/**
 * 修改
 * @param target
 */
function _add(target) {
    if (target[_additionKey] == null) {
        Object.defineProperty(target, _additionKey, {
            value: {},
            configurable: true,
            enumerable: false,
        });
    }
    return target[_additionKey];
}
/**
 * 改变key
 * @param value
 */
export function setModifyKey(value) {
    if (!value || typeof value !== "string") {
        return;
    }
    _additionKey = value;
}
export var ObjectAddition = {
    /**
     * 获取一个值
     * @param object
     * @param key
     */
    get: function (object, key) {
        var target = object;
        var modifyMap = target[_additionKey];
        if (modifyMap == null) {
            modifyMap = _add(target);
        }
        return modifyMap[key];
    },
    /**
     * 设置一个值
     * @param object
     * @param key
     * @param value
     */
    set: function (object, key, value) {
        var target = object;
        var modifyMap = target[_additionKey];
        if (modifyMap == null) {
            modifyMap = _add(target);
        }
        modifyMap[key] = value;
    },
    /**
     * 删除一个值
     * @param object
     * @param key
     */
    delete: function (object, key) {
        var target = object;
        var modifyMap = target[_additionKey];
        if (modifyMap == null) {
            return;
        }
        delete modifyMap[key];
        if (Object.getOwnPropertyNames(modifyMap).length > 0) {
            return;
        }
        delete target[_additionKey];
    },
    /**
     * 删除所有
     * @param object
     */
    deleteAll: function (object) {
        var target = object;
        delete target[_additionKey];
    },
};
