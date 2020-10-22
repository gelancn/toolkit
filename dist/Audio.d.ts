import { Emitter } from "./Emitter";
/** 音频资源数据 */
declare class AudioResData extends Emitter {
    static UNLOAD: string;
    static LOADING: string;
    static LOADED: string;
    static ERROR: string;
    constructor(url: string);
    readonly url: string;
    base64?: string;
    blob?: Blob;
    arrayBuffer?: ArrayBuffer;
    state: string;
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
/** 音频标签 */
export declare class AudioTags {
    private _tags;
    /** 获取一个标签 */
    get(): HTMLAudioElement;
    /** 回收一个标签 */
    recovery(value: HTMLAudioElement): void;
    limit: number;
    /** 解锁 */
    unlock(): void;
}
/** 音频控制器 */
export declare class AudioController extends Emitter {
    static ON_PLAY: string;
    static ON_STOP: string;
    static ON_END: string;
    static ON_PROGRESS: string;
    static ON_ERROR: string;
    private _el;
    private _playing;
    private _loop;
    /** 循环播放 */
    /** 循环播放 */
    loop: boolean;
    private _volume;
    /** 音量 */
    /** 音量 */
    volume: number;
    private _muted;
    /** 是否静音 */
    /** 是否静音 */
    muted: boolean;
    private _currentTime;
    /** 当前播放进度 */
    /** 当前播放进度 */
    currentTime: number;
    /** 播放 */
    play(source?: string): void;
    /** 暂停 */
    stop(): void;
    private _getTag;
    private _recoveryTag;
}
/** 音频 */
export declare class Audio {
    /** 音频标签 */
    tags: AudioTags;
    /** 音频资源 */
    res: AudioRes;
    private _playingCtrl;
    /**
     * 播放一个音频
     * @param url
     */
    play(url: string): Promise<void>;
    /**
     * 停止一个音频
     * @param url
     */
    stop(url: string): void;
}
export {};
