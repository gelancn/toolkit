import { Emitter } from '../base/Emitter';
import { AudioController } from './AudioController';

/** 过程枚举 */
export enum EnumAudioProcess {
    START = "start",
    STOP = "stop",
    PAUSE = "pause",
    END = "end",
    PROGRESS = "progress",
    ERROR = "error",
}


export class Audio extends Emitter {
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
        this._audioList.forEach((ctrl: AudioController) => {
            ctrl.muted = value;
        });
    }
    /** 获取静音 */
    get muted(): boolean {
        return this._muted;
    }


    /** 所有音频标签 */
    private _audioList!: Array<AudioController>;

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
            const ctrl = new AudioController(tag, i);
            audioList.push(ctrl);
        }
        this._unlocked = true;
        this._audioList = audioList;
    }

}
