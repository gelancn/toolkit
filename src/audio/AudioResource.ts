enum EnumLoadState {
    UNLOAD = "UNLOAD",
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
}

export class AudioResource {
    /** 设置加载成功后转化数据类型 */
    static convertTypes: { base64: boolean; arrayBuffer: boolean } = {
        base64: true,
        arrayBuffer: false,
    };

    private static _resourceMap: { [key: string]: Resource } = {};
    /**
     * 加载音频数据
     * @param config
     */
    static load(config: LoadConfig): Resource {
        const { url } = config;
        let res: Resource = AudioResource._resourceMap[url];
        if (res == null) {
            res = { url, state: EnumLoadState.UNLOAD };
            AudioResource._resourceMap[url] = res;
        }
        if (res.state !== EnumLoadState.LOADED) {
            
        }
        return res;
    }
}

interface LoadConfig {
    url: string;
    onProgress?: (current: number, total: number) => void;
    onEnd?(data?: unknown): void;
    onError?: (err: unknown) => void;
}

export interface Resource {
    url: string;
    base64?: string;
    blob?: Blob;
    arrayBuffer?: ArrayBuffer;
    state: EnumLoadState;
}
