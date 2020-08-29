/**
 * 改变key
 * @param value
 */
export declare function setModifyKey(value: string): void;
export declare const ModifyObject: {
    /**
     * 获取一个值
     * @param object
     * @param key
     */
    get(object: Object, key: string): unknown;
    /**
     * 设置一个值
     * @param object
     * @param key
     * @param value
     */
    set(object: Object, key: string, value: unknown): void;
    /**
     * 删除一个值
     * @param object
     * @param key
     */
    delete(object: Object, key: string): void;
    /**
     * 删除所有
     * @param object
     */
    deleteAll(object: Object): void;
};
