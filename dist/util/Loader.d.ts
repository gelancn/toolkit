/** 加载器 */
export declare const Loader: {
    /**
     * 发送http请求
     * @param param
     */
    sendHttpRequest(param: HttpParam): Promise<unknown>;
    /**
     * 加载图片
     * @param param
     */
    loadImage(url: string, crossOrigin?: string | undefined): Promise<HTMLImageElement>;
    /**
     * 加载脚本
     * @param param
     */
    loadScript(url: string, appendTo?: HTMLElement | undefined): Promise<HTMLScriptElement>;
    /**
     * 加载样式
     * @param param
     */
    loadCSS(url: string, appendTo?: HTMLElement | undefined): Promise<HTMLLinkElement>;
};
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
