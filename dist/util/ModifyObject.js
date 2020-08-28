export var ModifyObject = {
    key: "__modified_object__",
    /**
     * 修改
     * @param target
     */
    modify: function (target) {
        var temp = target;
        var key = ModifyObject.key;
        if (!temp[key]) {
            Object.defineProperty(temp, key, {
                value: {},
                configurable: true,
                enumerable: false,
            });
        }
        return temp[key];
    },
    /**
     * 还原
     * @param target
     */
    restore: function (target) {
        if (typeof target !== "object") {
            return;
        }
        delete target[ModifyObject.key];
    },
    /**
     * 获取一个值
     * @param target
     * @param key
     */
    getValue: function (target, key) {
        var modifyMap = target[ModifyObject.key];
        if (!modifyMap) {
            modifyMap = ModifyObject.modify(target);
        }
        return modifyMap[key];
    },
    /**
     * 设置一个值
     * @param target
     * @param key
     * @param value
     */
    setValue: function (target, key, value) {
        var modifyMap = target[ModifyObject.key];
        if (!modifyMap) {
            modifyMap = ModifyObject.modify(target);
        }
        modifyMap[key] = value;
    },
    /**
     * 检测是否被改造过
     * @param target
     */
    modified: function (target) {
        return !!target[ModifyObject.key];
    },
};
