import { ModifyObject } from "../util/ModifyObject";

/** 单例 */
export class Singleton {
    /** 实例 */
    private static _instance: Singleton = new Singleton();
    /**
     * 替换实例，尽量不要使用
     * @param value
     */
    static setInstance(value: Singleton): void {
        Singleton._instance = value;
    }

    /**
     * 添加一个实例
     * @param cls
     * @param value
     */
    static set<T>(cls: TypeCtor<T>, value: T): void {
        return Singleton._instance.set(cls, value);
    }

    /**
     * 获取一个实例
     * @param cls
     */
    static get<T>(cls: TypeCtor<T>): T {
        return Singleton._instance.get(cls);
    }

    /**
     * 移除一个实例
     * @param cls
     */
    static delete<T>(cls: TypeCtor<T>): T | undefined {
        return Singleton._instance.delete(cls);
    }

    private _singletonKey = "_singleton_";

    /**
     * 添加一个单例
     * @param cls
     * @param value
     */
    set<T>(cls: TypeCtor<T>, value: T): void {
        ModifyObject.set(cls, this._singletonKey, value);
    }

    /**
     * 获取一个单例
     * @param cls
     */
    get<T>(cls: TypeCtor<T>): T {
        let instance = ModifyObject.get(cls, this._singletonKey) as T;
        if (instance == null) {
            instance = new cls();
            ModifyObject.set(cls, this._singletonKey, instance);
        }
        return instance;
    }

    /**
     * 移除一个单例
     * @param cls
     */
    delete<T>(cls: TypeCtor<T>): T | undefined {
        const value = ModifyObject.get(cls, this._singletonKey) as T | undefined;
        ModifyObject.delete(cls, this._singletonKey);
        return value;
    }
}

type TypeCtor<T> = new (...args: Array<never>) => T;
