/** 加载器 */
export declare class Loader {
    /**
     * 发送http请求
     * @param param
     */
    static sendHttpRequest(param: HttpParam): Promise<unknown>;
    /**
     * 加载图片
     * @param param
     */
    static loadImage(url: string, crossOrigin?: string): Promise<HTMLImageElement>;
    /**
     * 加载脚本
     * @param param
     */
    static loadScript(url: string, appendTo?: HTMLElement): Promise<HTMLScriptElement>;
    /**
     * 加载样式
     * @param param
     */
    static loadCSS(url: string, appendTo?: HTMLElement): Promise<HTMLLinkElement>;
}
interface HttpParam {
    url: string;
    onProgress?: (current: number, total: number) => void;
    onEnd?(data?: unknown): void;
    onError?: (err: unknown) => void;
    method?: "POST" | "GET";
    withCredentials?: boolean;
    requestHeader?: unknown;
    data?: {
        [key: string]: unknown;
    };
    responseType?: XMLHttpRequestResponseType;
    contentType?: string;
}
export {};
