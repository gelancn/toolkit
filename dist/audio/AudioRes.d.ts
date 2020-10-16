import { Emitter } from "../Emitter";
declare enum EnumLoadState {
    UNLOAD = "UNLOAD",
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR"
}
/** 音频资源数据 */
export declare class AudioResData extends Emitter {
    constructor(url: string);
    readonly url: string;
    base64?: string;
    blob?: Blob;
    arrayBuffer?: ArrayBuffer;
    state: EnumLoadState;
}
/** 音频资源管理器 */
export declare class AudioRes {
    /** 设置加载成功后转化数据类型 */
    convertTypes: {
        base64: boolean;
        arrayBuffer: boolean;
    };
    private _resourceMap;
    /**
     * 获取音频资源
     * @param url
     */
    get(url: string): AudioResData | null;
    /**
     * 加载音频数据
     * @param url
     * @param cache
     * @param onProgress
     */
    load(url: string, cache?: boolean, onProgress?: (current: number, total: number) => void): Promise<AudioResData>;
    /**
     * 加载很多个音频
     * @param list
     * @param cache
     * @param onProgress
     */
    loadList(list: Array<string>, cache?: boolean, onProgress?: (current: number, total: number) => void): Promise<{
        [key: string]: AudioResData | null;
    }>;
    /**
     * 转化成base64
     * @param blob
     */
    readAsDataURL(blob: Blob): Promise<string>;
    /**
     * 转化成ArrayBuffer
     * @param blob
     */
    readAsArrayBuffer(blob: Blob): Promise<ArrayBuffer>;
}
export {};
