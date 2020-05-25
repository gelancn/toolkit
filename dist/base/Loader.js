/** 加载器 */
export class Loader {
    /**
     * 发送http请求
     * @param param
     */
    static sendHttpRequest(param) {
        const url = param.url;
        const method = param.method || "GET";
        const data = param.data;
        const requestHeader = param.requestHeader;
        let sendData = null;
        if (data != null) {
            const contentType = param.contentType || (requestHeader && requestHeader["Content-Type"]);
            switch (method) {
                case "POST":
                    switch (contentType) {
                        case "application/x-www-form-urlencoded":
                            const params = Object.keys(data).map((key) => {
                                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
                            });
                            sendData = params.join("&");
                            break;
                        case "multipart/form-data":
                            sendData = new FormData();
                            Object.keys(data).forEach((key) => {
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
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (param.withCredentials) {
            xhr.withCredentials = param.withCredentials;
        }
        if (param.responseType != null) {
            xhr.responseType = param.responseType;
        }
        if (requestHeader != null) {
            const dict = requestHeader;
            Object.keys(dict).forEach((key) => {
                xhr.setRequestHeader(key, dict[key]);
            });
        }
        if (param.contentType != null) {
            xhr.overrideMimeType(param.contentType);
        }
        const clearListener = () => {
            delete xhr.onload;
            delete xhr.onprogress;
            delete xhr.onerror;
        };
        const onError = (err) => {
            clearListener();
            param.onError && param.onError(err);
        };
        xhr.onload = (evt) => {
            const status = xhr.status;
            if (status === 200) {
                clearListener();
                const data = xhr.response || xhr.responseText;
                param.onEnd && param.onEnd(data);
            }
            else {
                onError(evt);
            }
        };
        xhr.onprogress = (evt) => {
            const total = evt.total;
            const loaded = evt.loaded;
            param.onProgress && param.onProgress(loaded, total);
        };
        xhr.onerror = (evt) => {
            onError(evt);
        };
        xhr.send(sendData);
    }
    /**
     * 加载图片
     * @param param
     */
    static loadImage(param) {
        const el = document.createElement("img");
        if (param.crossOrigin != null) {
            el.crossOrigin = param.crossOrigin;
        }
        el.src = param.url;
        const clearListener = () => {
            delete el.onload;
            delete el.onprogress;
            delete el.onerror;
        };
        el.onload = () => {
            clearListener();
            param.onEnd && param.onEnd(el);
        };
        el.onprogress = (evt) => {
            const total = evt.total;
            const loaded = evt.loaded;
            param.onProgress && param.onProgress(loaded, total);
        };
        el.onerror = (err) => {
            clearListener();
            param.onError && param.onError(err);
        };
    }
    /**
     * 加载脚本
     * @param param
     */
    static loadScript(param) {
        const el = document.createElement("script");
        el.src = param.url;
        const clearListener = () => {
            delete el.onload;
            delete el.onprogress;
            delete el.onerror;
        };
        el.onload = () => {
            clearListener();
            param.onEnd && param.onEnd(el);
        };
        el.onprogress = (evt) => {
            const total = evt.total;
            const loaded = evt.loaded;
            param.onProgress && param.onProgress(loaded, total);
        };
        el.onerror = (err) => {
            clearListener();
            param.onError && param.onError(err);
        };
        if (param.appendTo == null) {
            document.body.appendChild(el);
        }
        else {
            param.appendTo.appendChild(el);
        }
    }
}
