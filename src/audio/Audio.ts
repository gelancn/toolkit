import { Emitter } from "../Emitter";
import { AudioTagImpl } from "./tag/AudioTagImpl";

/** 音频事件 */
export enum EnumAudioEvent {
    ON_PLAY = "onPlay",
    ON_STOP = "onStop",
    ON_END = "onEnd",
    ON_PROGRESS = "onProgress",
    ON_ERROR = "onError",

    ON_MUTED_CHANGE = "onMutedChange",
    ON_VOLUME_CHANGE = "onVolumeChange",
    ON_LOOP_CHANGE = "onLoopChange",
    ON_CURRENT_TIME_CHANGE = "onCurrentTimeChange",
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
    loop: boolean;
    volume: number;
    muted: boolean;
    currentTime: number;
    play(source: string): unknown;
    stop(): void;
}

export interface AudioImpl {
    getType(): string;
    getMuted(): boolean;
    setMuted(value: boolean): void;
    get(): AudioController | null;
    recovery(value: AudioController): void;
    unlock(): void;
}
