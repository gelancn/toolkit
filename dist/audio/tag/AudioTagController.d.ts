import { Emitter } from "../../Emitter";
import { AudioController } from "../Audio";
/** 音频标签控制器 */
export declare class AudioTagController extends Emitter implements AudioController {
    constructor(tag: HTMLAudioElement, uid: number);
    private _uid;
    /** 获取唯一id */
    readonly uid: number;
    private _el;
    /** 设置源 */
    src: string;
    /** 循环播放 */
    /** 循环播放 */
    loop: boolean;
    /** 音量 */
    /** 音量 */
    volume: number;
    /** 是否静音 */
    /** 是否静音 */
    muted: boolean;
    /** 音频长度 */
    readonly duration: number;
    /** 当前播放进度 */
    /** 当前播放进度 */
    currentTime: number;
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
