import { Emitter } from '../base/Emitter';
import { AudioTagFactory } from './AudioTagFactory';
/** 音频控制器 */
export declare class AudioController extends Emitter {
    /** 音频工厂 */
    static factory: AudioTagFactory;
    /**
     * 设置静音
     * @param value
     */
    static setMuted(value: boolean): void;
    private static _playingQueueMap;
    /**
     * 按队列播放声音
     * @param list
     * @param id
     */
    static playQueue(list: Array<string>, id?: string): Promise<void>;
    /**
     * 停止播放队列声音
     * @param id
     */
    static stopQueue(id: string): void;
    constructor();
    private _audioTag;
    private _source;
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
    private _duration;
    /** 音频长度 */
    readonly duration: number;
    private _playing;
    /** 是否播放中 */
    readonly playing: boolean;
    private _currentTime;
    /** 当前播放进度 */
    /** 当前播放进度 */
    currentTime: number;
    /**
     * 播放一个音频
     * @param source
     */
    play(source?: string): void;
    /** 停止 */
    stop(): void;
    /** 暂停 */
    pause(): void;
    private _getTag;
    private _recoveryTag;
    protected ontimeupdate: (evt: Event) => void;
    protected onplay: (evt: Event) => void;
    protected onpause: (evt: Event) => void;
    protected onended: (evt: Event) => void;
}
