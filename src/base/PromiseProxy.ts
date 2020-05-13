import { Emitter } from "./Emitter";

export enum EnumPromiseProxy {
    ON_RESOLVE = "onResolve",
    ON_REJECT = "onReject",
}

/** Promise代理 */
export class PromiseProxy<T> extends Emitter {
    constructor(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) {
        super();
        this._promise = new Promise<T>((resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => {
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
        if (this._resolve != null) {
            this.emit(EnumPromiseProxy.ON_RESOLVE, value);
            this._resolve(value);
            this._resolve = null;
        }
    };

    private _reject: ((reason?: any) => void) | null = null;
    /**
     * reject方法
     * @param reason
     */
    reject = (reason?: any) => {
        if (this._reject != null) {
            this.emit(EnumPromiseProxy.ON_REJECT, reason);
            this._reject(reason);
            this._reject = null;
        }
    };
}
