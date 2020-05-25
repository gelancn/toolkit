/** Promise代理 */
export declare class PromiseProxy<T> {
    constructor(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void) => void);
    private _promise;
    /** 获取Promise对象 */
    get promise(): Promise<T>;
    private _resolve;
    /**
     * resolve方法
     * @param value
     */
    resolve: (value?: T | PromiseLike<T> | undefined) => void;
    private _reject;
    /**
     * reject方法
     * @param reason
     */
    reject: (reason?: unknown) => void;
}
