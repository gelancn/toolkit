let _modifyKey = "_modified_object_";
/**
 * 修改
 * @param target
 */
function _modify(target: Record<string, unknown>): Record<string, unknown> {
    if (target[_modifyKey] == null) {
        Object.defineProperty(target, _modifyKey, {
            value: {},
            configurable: true,
            enumerable: false,
        });
    }
    return target[_modifyKey] as Record<string, unknown>;
}

/**
 * 改变key
 * @param value
 */
export function setModifyKey(value: string): void {
    if (!value || typeof value !== "string") {
        return;
    }
    _modifyKey = value;
}

export const ModifyObject = {
    /**
     * 获取一个值
     * @param object
     * @param key
     */
    get(object: InstanceType<typeof Object>, key: string): unknown {
        const target = object as Record<string, unknown>;
        let modifyMap = target[_modifyKey] as Record<string, unknown>;
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
    set(object: InstanceType<typeof Object>, key: string, value: unknown): void {
        const target = object as Record<string, unknown>;
        let modifyMap = target[_modifyKey] as Record<string, unknown>;
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
    delete(object: InstanceType<typeof Object>, key: string): void {
        const target = object as Record<string, unknown>;
        const modifyMap = target[_modifyKey] as Record<string, unknown>;
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
    deleteAll(object: InstanceType<typeof Object>): void {
        const target = object as Record<string, unknown>;
        delete target[_modifyKey];
    },
};
