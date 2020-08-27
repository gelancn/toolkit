interface TypeMap {
    [key: string]: unknown;
}

export const ModifyObject = {
    _key: "__modified_object__",
    _modify(target: Object): TypeMap {
        const temp = target as TypeMap;
        const key = ModifyObject._key;
        if (!temp[key]) {
            temp[key] = {};
        }
        return temp[key] as TypeMap;
    },
    _restore(target: Object): void {
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
    getValue(target: Object, key: string): unknown {
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
    setValue(target: Object, key: string, value: unknown): void {
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
    modified(target: Object): boolean {
        return !!(target as TypeMap)[ModifyObject._key];
    }
};
