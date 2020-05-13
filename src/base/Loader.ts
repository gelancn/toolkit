/** 加载器 */
export class Loader {
    /**
     * 发送http请求
     * @param param 
     */
    static sendHttpRequest(param: HttpParam): Promise<unknown> {
        return new Promise((resolve: Function, reject: Function) => {
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
            }
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
                    param.onLoaded && param.onLoaded(data);
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
    }

    /**
     * 加载图片
     * @param param 
     */
    static loadImage(param: ImageParam): Promise<HTMLImageElement> {
        return new Promise((resolve: Function, reject: Function) => {
            const el = document.createElement("img") as HTMLImageElement;
            if (param.crossOrigin != null) {
                el.crossOrigin = param.crossOrigin;
            }
            el.src = param.url;
            const clearListener = () => {
                delete el.onload;
                delete el.onprogress;
                delete el.onerror;
            }
            el.onload = () => {
                clearListener();
                param.onLoaded && param.onLoaded(el);
                resolve(el);
            };
            el.onprogress = (evt: ProgressEvent) => {
                const total = evt.total;
                const loaded = evt.loaded;
                param.onProgress && param.onProgress(loaded, total);
            };
            el.onerror = (err: string | Event) => {
                clearListener();
                param.onError && param.onError(err);
                reject(err);
            };
        });
    }

    /**
     * 加载脚本
     * @param param 
     */
    static loadScript(param: ScriptParam): Promise<HTMLScriptElement> {
        return new Promise((resolve: Function, reject: Function) => {
            const el = document.createElement("script") as HTMLScriptElement;
            el.src = param.url;
            const clearListener = () => {
                delete el.onload;
                delete el.onprogress;
                delete el.onerror;
            }
            el.onload = () => {
                clearListener();
                param.onLoaded && param.onLoaded(el);
                resolve(el);
            };
            el.onprogress = (evt: ProgressEvent) => {
                const total = evt.total;
                const loaded = evt.loaded;
                param.onProgress && param.onProgress(loaded, total);
            };
            el.onerror = (err: string | Event) => {
                clearListener();
                param.onError && param.onError(err);
                reject(err);
            };
            if (param.appendTo == null) {
                document.body.appendChild(el);
            } else {
                param.appendTo.appendChild(el);
            }
        });
    }
}

interface LoaderParam {
    url: string;
    onProgress?: (loaded: number, total: number) => void;
    onLoaded?: (data?: any) => void;
    onError?: (err: unknown) => void;
}

interface HttpParam extends LoaderParam {
    method?: "POST" | "GET";
    withCredentials?: boolean;
    requestHeader?: unknown;
    data?: { [key: string]: unknown };
    responseType?: XMLHttpRequestResponseType;
    contentType?: string;
}

interface ImageParam extends LoaderParam {
    crossOrigin?: string; // anonymous
    onLoaded?: (data: HTMLImageElement) => void;
}

interface ScriptParam extends LoaderParam {
    onLoaded?: (data: HTMLScriptElement) => void;
    appendTo?: HTMLElement;
}


