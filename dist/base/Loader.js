/** 加载器 */
var Loader = /** @class */ (function () {
    function Loader() {
    }
    /**
     * 发送http请求
     * @param param
     */
    Loader.sendHttpRequest = function (param) {
        var url = param.url;
        var method = param.method || "GET";
        var data = param.data;
        var requestHeader = param.requestHeader;
        var sendData = null;
        if (data != null) {
            var contentType = param.contentType || (requestHeader && requestHeader["Content-Type"]);
            switch (method) {
                case "POST":
                    switch (contentType) {
                        case "application/x-www-form-urlencoded":
                            var params = Object.keys(data).map(function (key) {
                                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
                            });
                            sendData = params.join("&");
                            break;
                        case "multipart/form-data":
                            sendData = new FormData();
                            Object.keys(data).forEach(function (key) {
                                sendData.append(key, data[key]);
                            });
                            break;
                        default:
                            sendData = JSON.stringify(data);
                            break;
                    }
                    break;
                case "GET":
                    // TODO 支持data变量变为参数拼接至url后面
                    break;
                default:
                    break;
            }
        }
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (param.withCredentials) {
            xhr.withCredentials = param.withCredentials;
        }
        if (param.responseType != null) {
            xhr.responseType = param.responseType;
        }
        if (requestHeader != null) {
            var dict_1 = requestHeader;
            Object.keys(dict_1).forEach(function (key) {
                xhr.setRequestHeader(key, dict_1[key]);
            });
        }
        if (param.contentType != null) {
            xhr.overrideMimeType(param.contentType);
        }
        var clearListener = function () {
            delete xhr.onload;
            delete xhr.onprogress;
            delete xhr.onerror;
        };
        var onError = function (err) {
            clearListener();
            param.onError && param.onError(err);
        };
        xhr.onload = function (evt) {
            var status = xhr.status;
            if (status === 200) {
                clearListener();
                var data_1 = xhr.response || xhr.responseText;
                param.onEnd && param.onEnd(data_1);
            }
            else {
                onError(evt);
            }
        };
        xhr.onprogress = function (evt) {
            var total = evt.total;
            var loaded = evt.loaded;
            param.onProgress && param.onProgress(loaded, total);
        };
        xhr.onerror = function (evt) {
            onError(evt);
        };
        xhr.send(sendData);
    };
    /**
     * 加载图片
     * @param param
     */
    Loader.loadImage = function (param) {
        var el = document.createElement("img");
        if (param.crossOrigin != null) {
            el.crossOrigin = param.crossOrigin;
        }
        el.src = param.url;
        var clearListener = function () {
            delete el.onload;
            delete el.onprogress;
            delete el.onerror;
        };
        el.onload = function () {
            clearListener();
            param.onEnd && param.onEnd(el);
        };
        el.onprogress = function (evt) {
            var total = evt.total;
            var loaded = evt.loaded;
            param.onProgress && param.onProgress(loaded, total);
        };
        el.onerror = function (err) {
            clearListener();
            param.onError && param.onError(err);
        };
    };
    /**
     * 加载脚本
     * @param param
     */
    Loader.loadScript = function (param) {
        var el = document.createElement("script");
        el.src = param.url;
        var clearListener = function () {
            delete el.onload;
            delete el.onprogress;
            delete el.onerror;
        };
        el.onload = function () {
            clearListener();
            param.onEnd && param.onEnd(el);
        };
        el.onprogress = function (evt) {
            var total = evt.total;
            var loaded = evt.loaded;
            param.onProgress && param.onProgress(loaded, total);
        };
        el.onerror = function (err) {
            clearListener();
            param.onError && param.onError(err);
        };
        if (param.appendTo == null) {
            document.body.appendChild(el);
        }
        else {
            param.appendTo.appendChild(el);
        }
    };
    return Loader;
}());
export { Loader };
