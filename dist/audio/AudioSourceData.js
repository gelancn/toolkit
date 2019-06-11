/** 音频源数据 */
var AudioSourceData = /** @class */ (function() {
    function AudioSourceData(url, blob) {
        this._url = url;
        this._blob = blob;
    }
    Object.defineProperty(AudioSourceData.prototype, 'url', {
        /** url */
        get: function() {
            return this._url;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioSourceData.prototype, 'blob', {
        /** blob数据 */
        get: function() {
            return this._blob;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioSourceData.prototype, 'base64', {
        /** base64数据 */
        get: function() {
            return this._base64;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioSourceData.prototype, 'buffer', {
        /** ArrayBuffer数据 */
        get: function() {
            return this._buffer;
        },
        enumerable: true,
        configurable: true,
    });
    /**
     * 转化成base64
     * @param onComplete
     */
    AudioSourceData.prototype.readAsDataURL = function(onComplete) {
        var _this = this;
        if (this._blob == null) {
            return;
        }
        if (this._base64 != null) {
            onComplete(this._base64);
            return;
        }
        var stringReader = new FileReader();
        stringReader.readAsDataURL(this.blob);
        stringReader.onload = function() {
            _this._base64 = stringReader.result;
            onComplete(_this._base64);
        };
    };
    /**
     * 转化成ArrayBuffer
     * @param onComplete
     */
    AudioSourceData.prototype.readAsArrayBuffer = function(onComplete) {
        var _this = this;
        if (this._blob == null) {
            return;
        }
        if (this._buffer != null) {
            onComplete(this._buffer);
            return;
        }
        var bufferReader = new FileReader();
        bufferReader.readAsArrayBuffer(this._blob);
        bufferReader.onload = function() {
            _this._buffer = bufferReader.result;
            onComplete(_this._buffer);
        };
    };
    return AudioSourceData;
})();
export { AudioSourceData };
