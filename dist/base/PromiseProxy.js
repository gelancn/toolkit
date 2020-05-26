/** Promise代理 */
var PromiseProxy = /** @class */ (function () {
    function PromiseProxy(executor) {
        var _this = this;
        this._resolve = null;
        /**
         * resolve方法
         * @param value
         */
        this.resolve = function (value) {
            var res = _this._resolve;
            _this._resolve = null;
            if (res != null) {
                res(value);
            }
        };
        this._reject = null;
        /**
         * reject方法
         * @param reason
         */
        this.reject = function (reason) {
            var rej = _this._reject;
            _this._reject = null;
            if (rej != null) {
                rej(reason);
            }
        };
        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
            executor(_this.resolve, _this.reject);
        });
    }
    Object.defineProperty(PromiseProxy.prototype, "promise", {
        /** 获取Promise对象 */
        get: function () {
            return this._promise;
        },
        enumerable: true,
        configurable: true
    });
    return PromiseProxy;
}());
export { PromiseProxy };
