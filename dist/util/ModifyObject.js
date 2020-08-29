var _modifyKey = "_modified_object_";
/**
 * 修改
 * @param target
 */
function _modify(target) {
    if (target[_modifyKey] == null) {
        Object.defineProperty(target, _modifyKey, {
            value: {},
            configurable: true,
            enumerable: false,
        });
    }
    return target[_modifyKey];
}
/**
 * 改变key
 * @param value
 */
export function setModifyKey(value) {
    if (!value || typeof value !== "string") {
        return;
    }
    _modifyKey = value;
}
export var ModifyObject = {
    /**
     * 获取一个值
     * @param object
     * @param key
     */
    get: function (object, key) {
        var target = object;
        var modifyMap = target[_modifyKey];
        if (modifyMap == null) {
            modifyMap = _modify(target);
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
        var modifyMap = target[_modifyKey];
        if (modifyMap == null) {
            modifyMap = _modify(target);
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
        var modifyMap = target[_modifyKey];
        if (modifyMap == null) {
            return;
        }
        delete modifyMap[key];
        if (Object.getOwnPropertyNames(modifyMap).length > 0) {
            return;
        }
        delete target[_modifyKey];
    },
    /**
     * 删除所有
     * @param object
     */
    deleteAll: function (object) {
        var target = object;
        delete target[_modifyKey];
    },
};
