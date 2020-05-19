/** Promise代理 */
export class PromiseProxy<T> {
    constructor(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void) => void) {
        this._promise = new Promise<T>((resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: unknown) => void) => {
            this._resolve = resolve;
            this._reject = reject;
            executor(this.resolve, this.reject);
        });
    }

    private _promise: Promise<T>;
    /** 获取Promise对象 */
    get promise(): Promise<T> {
        return this._promise;
    }

    private _resolve: ((value?: T | PromiseLike<T>) => void) | null = null;
    /**
     * resolve方法
     * @param value
     */
    resolve = (value?: T | PromiseLike<T> | undefined) => {
        const res = this._resolve;
        this._resolve = null;
        if (res != null) {
            res(value);
        }
    };

    private _reject: ((reason?: unknown) => void) | null = null;
    /**
     * reject方法
     * @param reason
     */
    reject = (reason?: unknown) => {
        const rej = this._reject;
        this._reject = null;
        if (rej != null) {
            rej(reason);
        }
    };
}
