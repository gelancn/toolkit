import { Emitter } from "../base/Emitter";
import { HTMLAudioElementProxy } from "./HTMLAudioElementProxy";

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

export class HTMLAudio extends Emitter {
    constructor(limit?: number) {
        super();
        if (limit != null && limit > 10) {
            this._limit = limit;
        }
    }

    private _limit = 25;
    /** 获取音频控制器限制数量 */
    get limit(): number {
        return this._limit;
    }

    private _muted = false;
    /** 设置静音 */
    set muted(value: boolean) {
        if (!this._unlocked) {
            return;
        }
        value = !!value;
        this._muted = value;
        this._audioList.forEach((proxy: HTMLAudioElementProxy) => {
            proxy.muted = value;
        });
    }
    /** 获取静音 */
    get muted(): boolean {
        return this._muted;
    }

    /** 所有音频标签 */
    private _audioList!: Array<HTMLAudioElementProxy>;

    private _unlocked = false;
    /** 获取是否解锁 */
    public get unlockd(): boolean {
        return this._unlocked;
    }
    /** 解锁音频标签 */
    unlock(): void {
        if (this._unlocked) {
            return;
        }
        const audioList = [];
        for (let i = 0; i < this._limit; i += 1) {
            const tag = document.createElement("audio");
            tag.load();
            const proxy = new HTMLAudioElementProxy(tag, i);
            audioList.push(proxy);
        }
        this._unlocked = true;
        this._audioList = audioList;
    }
}
