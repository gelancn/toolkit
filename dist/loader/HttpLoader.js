import * as tslib_1 from 'tslib';
import { Emitter } from '../base/Emitter';
import { EnumEventLoader } from '../enum/EnumEventLoader';
import { EnumHttpMethod } from '../enum/EnumHttpMethod';
var HttpLoader = /** @class */ (function(_super) {
    tslib_1.__extends(HttpLoader, _super);
    function HttpLoader() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    /**
     * 加载
     * @param config
     */
    HttpLoader.prototype.load = function(config) {
        var _this = this;
        if (config == null || this._xhr != null) {
            return;
        }
        var url = config.url;
        var method = config.method || EnumHttpMethod.GET;
        var data = config.data;
        var requestHeader = config.requestHeader;
        var sendData = null;
        if (data != null) {
            var contentType = requestHeader && requestHeader['Content-Type'];
            switch (method) {
                case EnumHttpMethod.POST:
                    switch (contentType) {
                        case 'application/x-www-form-urlencoded':
                            var params = Object.keys(data).map(function(key) {
                                return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                            });
                            sendData = params.join('&');
                            break;
                        case 'multipart/form-data':
                            sendData = new FormData();
                            Object.keys(data).forEach(function(key) {
                                sendData.append(key, data[key]);
                            });
                            break;
                        default:
                            sendData = JSON.stringify(data);
                            break;
                    }
                    break;
                case EnumHttpMethod.GET:
                    // TODO 支持data变量变为参数拼接至url后面
                    break;
                default:
                    break;
            }
        }
        var xhr = new XMLHttpRequest();
        this._xhr = xhr;
        xhr.open(method, url, true);
        if (config.withCredentials) {
            xhr.withCredentials = config.withCredentials;
        }
        if (config.responseType != null) {
            xhr.responseType = config.responseType;
        }
        if (requestHeader != null) {
            var dict_1 = requestHeader;
            Object.keys(dict_1).forEach(function(key) {
                xhr.setRequestHeader(key, dict_1[key]);
            });
        }
        var onError = function() {
            _this.reset();
            _this.emit(EnumEventLoader.ERROR);
        };
        xhr.onreadystatechange = function() {
            var readyState = xhr.readyState;
            var status = xhr.status;
            if (readyState === 4) {
                if (status === 200) {
                    var data_1 = xhr.response || xhr.responseText;
                    _this.emit(EnumEventLoader.COMPLETE, data_1);
                } else {
                    onError();
                }
            } else {
                if (status >= 400) {
                    onError();
                }
            }
        };
        xhr.onprogress = function(evt) {
            var total = evt.total;
            var loaded = evt.loaded;
            _this.emit(EnumEventLoader.PROGRESS, loaded, total);
        };
        xhr.onerror = function(evt) {
            onError();
        };
        xhr.send(sendData);
        this.emit(EnumEventLoader.START);
    };
    /** 重置 */
    HttpLoader.prototype.reset = function() {
        if (this._xhr == null) {
            return;
        }
        this._xhr.onreadystatechange = null;
        this._xhr.onprogress = null;
        this._xhr.onerror = null;
        this._xhr = null;
    };
    return HttpLoader;
})(Emitter);
export { HttpLoader };
