/** 加载器 */
export declare class Loader {
    /**
     * 发送http请求
     * @param param
     */
    static sendHttpRequest(param: HttpParam): void;
    /**
     * 加载图片
     * @param param
     */
    static loadImage(param: ImageParam): void;
    /**
     * 加载脚本
     * @param param
     */
    static loadScript(param: ScriptParam): void;
}
interface LoaderParam {
    url: string;
    onProgress?: (current: number, total: number) => void;
    onEnd?(data?: unknown): void;
    onError?: (err: unknown) => void;
}
interface HttpParam extends LoaderParam {
    method?: "POST" | "GET";
    withCredentials?: boolean;
    requestHeader?: unknown;
    data?: {
        [key: string]: unknown;
    };
    responseType?: XMLHttpRequestResponseType;
    contentType?: string;
}
interface ImageParam extends LoaderParam {
    crossOrigin?: string;
    onEnd?(data: HTMLImageElement): void;
}
interface ScriptParam extends LoaderParam {
    onEnd?(data: HTMLScriptElement): void;
    appendTo?: HTMLElement;
}
export {};
