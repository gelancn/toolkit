interface TypeMap {
    [key: string]: unknown;
}
export declare const ModifyObject: {
    key: string;
    /**
     * 修改
     * @param target
     */
    modify(target: unknown): TypeMap;
    /**
     * 还原
     * @param target
     */
    restore(target: unknown): void;
    /**
     * 获取一个值
     * @param target
     * @param key
     */
    getValue(target: unknown, key: string): unknown;
    /**
     * 设置一个值
     * @param target
     * @param key
     * @param value
     */
    setValue(target: unknown, key: string, value: unknown): void;
    /**
     * 检测是否被改造过
     * @param target
     */
    modified(target: unknown): boolean;
};
export {};
