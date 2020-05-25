import { Emitter } from "../base/Emitter";
import { AudioTagImpl } from "./AudioTagImpl";

/** 音频事件 */
export enum EnumAudioEvent {
    ON_PLAY = "ON_PLAY",
    ON_STOP = "ON_STOP",
    ON_PAUSE = "ON_PAUSE",
    ON_END = "ON_END",
    ON_PROGRESS = "ON_PROGRESS",
    ON_ERROR = "ON_ERROR",

    ON_MUTED_CHANGE = "ON_MUTED_CHANGE",
    ON_VOLUME_CHANGE = "ON_VOLUME_CHANGE",
    ON_LOOP_CHANGE = "ON_LOOP_CHANGE",
    ON_CURRENT_TIME_CHANGE = "ON_CURRENT_TIME_CHANGE",
}

/** 音频 */
export class Audio {
    constructor(impl?: AudioImpl) {
        if (impl == null) {
            impl = new AudioTagImpl();
        }
        this._impl = impl;
    }

    private _impl: AudioImpl;
    /**
     * 设置一个音频实现
     * @param value
     */
    setAudioImpl(value: AudioImpl): void {
        if (value != null) {
            this._impl = value;
        }
    }

    /** 设置静音 */
    setMuted(value: boolean) {
        value = !!value;
        this._impl.setMuted(value);
    }
    /** 获取静音 */
    getMuted(): boolean {
        return this._impl.getMuted();
    }

    /** 获取一个音频控制器 */
    getController(): AudioController | null {
        return this._impl.get();
    }
    /** 回收一个音频控制器 */
    recoveryController(ctrl: AudioController): void {
        this._impl.recovery(ctrl);
    }

    /** 解锁 */
    unlock(): void {
        this._impl.unlock();
    }
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
