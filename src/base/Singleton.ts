import { ModifyObject } from '../util/ModifyObject';

/** 单例 */
export const Singleton = {
    _key: "__singleton__",
    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    set<T>(cls: TypeCtor<T>, value: T): void {
        ModifyObject.set(cls, Singleton._key, value);
    },
    /**
     * 获取一个单例
     * @param cls
     */
    get<T>(cls: TypeCtor<T>): T {
        const key = Singleton._key;
        let instance = ModifyObject.get(cls, key) as T;
        if (instance == null) {
            instance = new cls();
            ModifyObject.set(cls, key, instance);
        }
        return instance;
    },
    /**
     * 移除一个单例
     * @param cls
     */
    delete<T>(cls: TypeCtor<T>): T | undefined {
        // const value = _classMap.get(cls) as T | undefined;
        // _classMap.delete(cls);
        // return value;
    },
};

type TypeCtor<T> = new (...args: Array<never>) => T;
