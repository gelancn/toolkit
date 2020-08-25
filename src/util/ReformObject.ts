/** 改造对象，给对象添加额外信息 */
export class ReformObject {
    private static _reformObjectKey: string = "__reform_object__";
    /**
     * 设置改造key
     * @param value
     */
    static setReformKey(value: string): void {
        if (!value) {
            return;
        }
        ReformObject._reformObjectKey = value;
    }

    /**
     * 给对象添加一个改造属性
     * @param target
     * @param key
     * @param value
     */
    static setValue(target: Object, key: string, value: unknown): void {
        const map = ReformObject.execute(target as { [key: string]: unknown });
        map[key] = value;
    }

    /**
     * 获取一个对象改造属性
     * @param target
     * @param key
     */
    static getValue(target: Object, key: string): unknown {
        const map = ReformObject.execute(target as { [key: string]: unknown });
        return map[key];
    }

    /**
     * 改造一个对象
     * @param target
     */
    static execute(target: { [key: string]: unknown }): { [key: string]: unknown } {
        const reformObjectKey = ReformObject._reformObjectKey;
        if (target[reformObjectKey] == null) {
            target[reformObjectKey] = {};
        }
        return target[reformObjectKey] as { [key: string]: unknown };
    }

    /**
     * 恢复一个对象
     * @param target
     */
    static recovery(target: Object): void {
        delete (target as { [key: string]: unknown })[ReformObject._reformObjectKey];
    }
}
