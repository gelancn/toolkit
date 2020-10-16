let _additionKey = "_ObjectAddition_";
/**
 * 修改
 * @param target
 */
function _add(target: Record<string, unknown>): Record<string, unknown> {
    if (target[_additionKey] == null) {
        Object.defineProperty(target, _additionKey, {
            value: {},
            configurable: true,
            enumerable: false,
        });
    }
    return target[_additionKey] as Record<string, unknown>;
}

/**
 * 改变key
 * @param value
 */
export function setModifyKey(value: string): void {
    if (!value || typeof value !== "string") {
        return;
    }
    _additionKey = value;
}

export const ObjectAddition = {
    /**
     * 获取一个值
     * @param object
     * @param key
     */
    get(object: InstanceType<typeof Object>, key: string): unknown {
        const target = object as Record<string, unknown>;
        let modifyMap = target[_additionKey] as Record<string, unknown>;
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
    set(object: InstanceType<typeof Object>, key: string, value: unknown): void {
        const target = object as Record<string, unknown>;
        let modifyMap = target[_additionKey] as Record<string, unknown>;
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
    delete(object: InstanceType<typeof Object>, key: string): void {
        const target = object as Record<string, unknown>;
        const modifyMap = target[_additionKey] as Record<string, unknown>;
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
    deleteAll(object: InstanceType<typeof Object>): void {
        const target = object as Record<string, unknown>;
        delete target[_additionKey];
    },
};
