import { Emitter } from "../../base/Emitter";
import { AudioController } from "../Audio";
/** 音频标签控制器 */
export declare class AudioTagController extends Emitter implements AudioController {
    constructor(tag: HTMLAudioElement, uid: number);
    private _uid;
    /** 获取唯一id */
    get uid(): number;
    private _el;
    /** 设置源 */
    set src(value: string);
    /** 循环播放 */
    get loop(): boolean;
    /** 循环播放 */
    set loop(value: boolean);
    /** 音量 */
    get volume(): number;
    /** 音量 */
    set volume(value: number);
    /** 是否静音 */
    get muted(): boolean;
    /** 是否静音 */
    set muted(value: boolean);
    /** 音频长度 */
    get duration(): number;
    /** 当前播放进度 */
    get currentTime(): number;
    /** 当前播放进度 */
    set currentTime(value: number);
    /** 播放 */
    play(): Promise<void>;
    /** 停止 */
    stop(): void;
    /** 暂停 */
    pause(): void;
    /** 恢复播放 */
    resume(): void;
    reset(): void;
}
