/** 加载器 */
export const Loader = {
    /**
     * 发送http请求
     * @param param
     */
    sendHttpRequest(param: HttpParam): Promise<unknown> {
        return new Promise((resolve: (data: unknown) => void, reject: (err: string | Event) => void) => {
            const url: string = param.url;
            const method: string = param.method || "GET";
            const data = param.data;
            const requestHeader = param.requestHeader as { [key: string]: string };
            let sendData: unknown = null;
            if (data != null) {
                const contentType: string = param.contentType || (requestHeader && requestHeader["Content-Type"]);
                switch (method) {
                    case "POST":
                        switch (contentType) {
                            case "application/x-www-form-urlencoded":
                                const params: Array<string> = Object.keys(data).map((key: string) => {
                                    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key] as string);
                                });
                                sendData = params.join("&");
                                break;
                            case "multipart/form-data":
                                sendData = new FormData();
                                Object.keys(data).forEach((key: string) => {
                                    (sendData as FormData).append(key, data[key] as string);
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
            const xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open(method, url, true);
            if (param.withCredentials) {
                xhr.withCredentials = param.withCredentials;
            }
            if (param.responseType != null) {
                xhr.responseType = param.responseType;
            }
            if (requestHeader != null) {
                const dict: { [key: string]: string } = requestHeader;
                Object.keys(dict).forEach((key: string) => {
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
            const onError = (err: string | Event) => {
                clearListener();
                param.onError && param.onError(err);
                reject(err);
            };
            xhr.onload = (evt: Event) => {
                const status = xhr.status;
                if (status === 200) {
                    clearListener();
                    const data: unknown = xhr.response || xhr.responseText;
                    param.onEnd && param.onEnd(data);
                    resolve(data);
                } else {
                    onError(evt);
                }
            };
            xhr.onprogress = (evt: ProgressEvent) => {
                const total = evt.total;
                const loaded = evt.loaded;
                param.onProgress && param.onProgress(loaded, total);
            };
            xhr.onerror = (evt: ProgressEvent) => {
                onError(evt);
            };
            xhr.send(sendData as Document);
        });
    },

    /**
     * 加载图片
     * @param param
     */
    loadImage(url: string, crossOrigin?: string): Promise<HTMLImageElement> {
        return new Promise((resolve: (data: HTMLImageElement) => void, reject: (evt: string | Event) => void) => {
            const el = document.createElement("img");
            if (crossOrigin != null) {
                el.crossOrigin = crossOrigin;
            }
            el.src = url;
            const clearListener = () => {
                delete el.onload;
                delete el.onerror;
            };
            el.onload = () => {
                clearListener();
                resolve(el);
            };
            el.onerror = (err: string | Event) => {
                clearListener();
                reject(err);
            };
        });
    },

    /**
     * 加载脚本
     * @param param
     */
    loadScript(url: string, appendTo?: HTMLElement): Promise<HTMLScriptElement> {
        return new Promise((resolve: (data: HTMLScriptElement) => void, reject: (evt: string | Event) => void) => {
            const el = document.createElement("script");
            el.src = url;
            const clearListener = () => {
                delete el.onload;
                delete el.onerror;
            };
            el.onload = () => {
                clearListener();
                resolve(el);
            };
            el.onerror = (err: string | Event) => {
                clearListener();
                reject(err);
            };
            if (appendTo == null) {
                document.body.appendChild(el);
            } else {
                appendTo.appendChild(el);
            }
        });
    },

    /**
     * 加载样式
     * @param param
     */
    loadCSS(url: string, appendTo?: HTMLElement): Promise<HTMLLinkElement> {
        return new Promise((resolve: (data: HTMLLinkElement) => void, reject: (evt: string | Event) => void) => {
            const el = document.createElement("link");
            el.href = url;
            el.rel = "stylesheet";
            const clearListener = () => {
                delete el.onload;
                delete el.onerror;
            };
            el.onload = () => {
                clearListener();
                resolve(el);
            };
            el.onerror = (err: string | Event) => {
                clearListener();
                reject(err);
            };
            if (appendTo == null) {
                document.body.appendChild(el);
            } else {
                appendTo.appendChild(el);
            }
        });
    },
};

interface HttpParam {
    url: string;
    onProgress?: (current: number, total: number) => void;
    onEnd?(data?: unknown): void;
    onError?: (err: unknown) => void;
    method?: "POST" | "GET";
    withCredentials?: boolean;
    requestHeader?: unknown;
    data?: { [key: string]: unknown };
    responseType?: XMLHttpRequestResponseType;
    contentType?: string;
}
