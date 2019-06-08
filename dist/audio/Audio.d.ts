import { AudioSourceData } from './AudioSourceData';
import { AudioTagFactory } from './AudioTagFactory';
/** 音频管理器 */
export declare class Audio {
    private _factory;
    /** 获取音频工厂，尽量不要使用 */
    readonly factory: AudioTagFactory;
    /**
     * 设置标签缓存的上限
     * @param value
     */
    setTagLimit(value: number): void;
    /** 获取一个audio标签 */
    getTag(): HTMLAudioElement;
    /**
     * 回收一个audio标签
     * @param value
     */
    recoveryTag(value: HTMLAudioElement): void;
    /**
     * 设置静音
     * @param value
     */
    setMuted(value: boolean): void;
    private _sourceMap;
    /**
     * 通过url获取一个音频资源数据
     * @param url
     */
    getSource(url: string): AudioSourceData;
    /**
     * 移除一个音频资源数据
     * @param url
     */
    removeSource(url: string): void;
    private _loadingMap;
    /**
     * 加载一个音频
     * @param params
     */
    load(params: LoadAudioParams): void;
    private _playingMap;
    /**
     * 播放一个音频
     * @param params
     */
    play(params: PlayAudioParams): void;
    /**
     * 停止一个音频
     * @param url
     */
    stop(url: string): void;
    private _disposeTag;
}
export interface LoadAudioParams {
    url: string;
    onComplete?(data: AudioSourceData): void;
    onProgress?(loaded: number, total: number): void;
    onError?(): void;
}
export interface PlayAudioParams {
    url: string;
    loop?: boolean;
    progressHandler?(current: number, duration: number): void;
    endedHandler?(): void;
    errorHandler?(): void;
}
