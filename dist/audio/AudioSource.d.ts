import { EnumLoadState } from '../enum/EnumLoadState';
/** 音频源数据 */
export declare class AudioSource {
    /** 设置加载成功后转化数据类型 */
    static convertTypes: {
        base64: boolean;
        arrayBuffer: boolean;
    };
    private static _sourceMap;
    /**
     * 加载音频数据
     * @param url
     * @param cache
     */
    static load(url: string, cache?: boolean): Promise<AudioSource>;
    /**
     * 获取音频数据
     * @param url
     */
    static get(url: string): AudioSource | null;
    /**
     * 预加载音频列表
     * @param list
     * @param cache
     */
    static loadList(
        list: Array<string>,
        cache?: boolean,
    ): Promise<{
        [key: string]: AudioSource;
    }>;
    constructor(url: string);
    private _url;
    /** url */
    readonly url: string;
    private _blob;
    /** blob数据 */
    readonly blob: Blob;
    private _base64;
    /** base64数据 */
    readonly base64: string;
    private _arrayBuffer;
    /** ArrayBuffer数据 */
    readonly arrayBuffer: ArrayBuffer;
    private _loadState;
    /** 是否加载完成 */
    readonly loadState: EnumLoadState;
    private _loader;
    /** 加载 */
    load(): Promise<AudioSource>;
    /** 转化成base64 */
    readAsDataURL(): Promise<string>;
    /** 转化成ArrayBuffer */
    readAsArrayBuffer(): Promise<ArrayBuffer>;
}
