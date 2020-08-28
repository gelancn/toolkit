interface TypeMap {
    [key: string]: unknown;
}

export const ModifyObject = {
    _key: "__modified_object__",
    /**
     * 修改
     * @param target
     */
    _modify(target: unknown): TypeMap {
        const temp = target as TypeMap;
        const key = ModifyObject._key;
        if (!temp[key]) {
            Object.defineProperty(temp, key, {
                value: {},
                configurable: true,
                enumerable: false,
            });
        }
        return temp[key] as TypeMap;
    },
    /**
     * 还原
     * @param target
     */
    _restore(target: unknown): void {
        if (typeof target !== "object") {
            return;
        }
        delete (target as TypeMap)[ModifyObject._key];
    },
    /**
     * 获取一个值
     * @param target
     * @param key
     */
    get(target: unknown, key: string): unknown {
        let modifyMap = (target as TypeMap)[ModifyObject._key] as TypeMap;
        if (!modifyMap) {
            modifyMap = ModifyObject._modify(target) as TypeMap;
        }
        return modifyMap[key];
    },
    /**
     * 设置一个值
     * @param target
     * @param key
     * @param value
     */
    set(target: unknown, key: string, value: unknown): void {
        let modifyMap = (target as TypeMap)[ModifyObject._key] as TypeMap;
        if (!modifyMap) {
            modifyMap = ModifyObject._modify(target) as TypeMap;
        }
        modifyMap[key] = value;
    },
    /**
     * 检测是否被改造过
     * @param target
     */
    modified(target: unknown): boolean {
        return !!(target as TypeMap)[ModifyObject._key];
    },
};
