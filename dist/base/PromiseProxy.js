/** Promise代理 */
export class PromiseProxy {
    constructor(executor) {
        this._resolve = null;
        /**
         * resolve方法
         * @param value
         */
        this.resolve = (value) => {
            const res = this._resolve;
            this._resolve = null;
            if (res != null) {
                res(value);
            }
        };
        this._reject = null;
        /**
         * reject方法
         * @param reason
         */
        this.reject = (reason) => {
            const rej = this._reject;
            this._reject = null;
            if (rej != null) {
                rej(reason);
            }
        };
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
            executor(this.resolve, this.reject);
        });
    }
    /** 获取Promise对象 */
    get promise() {
        return this._promise;
    }
}
