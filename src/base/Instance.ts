const _keyMap: { [key: string]: unknown } = {};

/** 实例 */
export const Instance = {
    /**
     * 添加一个实例
     * @param key
     * @param value
     */
    set<T>(key: string, value: T): void {
        _keyMap[key] = value;
    },
    /**
     * 获取一个实例
     * @param key
     */
    get<T>(key: string): T | undefined {
        return _keyMap[key] as T | undefined;
    },
    /**
     * 移除一个实例
     * @param key
     */
    delete<T>(key: string): T | undefined {
        const value = _keyMap[key] as T | undefined;
        delete _keyMap[key];
        return value;
    },
};
