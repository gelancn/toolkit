/** 实例 */
export declare const Instance: {
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    set<T>(key: string, value: T): void;
    /**
     * 获取一个实例
     * @param key
     */
    get<T>(key: string): T | undefined;
    /**
     * 移除一个实例
     * @param key
     */
    delete<T>(key: string): T | undefined;
};
