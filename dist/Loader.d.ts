/** 加载器 */
export declare const Loader: {
    /**
     * 发送http请求
     * @param param
     */
    sendHttpRequest(param: {
        url: string;
        onProgress?: ((current: number, total: number) => void) | undefined;
        method?: "POST" | "GET" | undefined;
        withCredentials?: boolean | undefined;
        requestHeader?: unknown;
        data?: {
            [key: string]: unknown;
        } | undefined;
        responseType?: "" | "text" | "document" | "blob" | "arraybuffer" | "json" | undefined;
        contentType?: string | undefined;
    }): Promise<unknown>;
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
