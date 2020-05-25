import { Emitter } from "../base/Emitter";
/** 音频事件 */
export declare enum EnumAudioEvent {
    ON_PLAY = "ON_PLAY",
    ON_STOP = "ON_STOP",
    ON_PAUSE = "ON_PAUSE",
    ON_END = "ON_END",
    ON_PROGRESS = "ON_PROGRESS",
    ON_ERROR = "ON_ERROR",
    ON_MUTED_CHANGE = "ON_MUTED_CHANGE",
    ON_VOLUME_CHANGE = "ON_VOLUME_CHANGE",
    ON_LOOP_CHANGE = "ON_LOOP_CHANGE",
    ON_CURRENT_TIME_CHANGE = "ON_CURRENT_TIME_CHANGE"
}
/** 音频 */
export declare class Audio {
    private _impl;
    /**
     * 设置一个音频实现
     * @param value
     */
    setAudioImpl(value: AudioImpl): void;
    /** 设置静音 */
    setMuted(value: boolean): void;
    /** 获取静音 */
    getMuted(): boolean;
    /** 获取一个音频控制器 */
    getController(): AudioController | null;
    /** 回收一个音频控制器 */
    recoveryController(ctrl: AudioController): void;
}
export interface AudioController extends Emitter {
    readonly uid: number;
    src: string;
    loop: boolean;
    volume: number;
    muted: boolean;
    currentTime: number;
    play(): void;
    stop(): void;
    pause(): void;
    resume(): void;
}
export interface AudioImpl {
    getMuted(): boolean;
    setMuted(value: boolean): void;
    get(): AudioController | null;
    recovery(value: AudioController): void;
    unlock(): void;
}
