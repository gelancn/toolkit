import { Emitter } from "../base/Emitter";
import { AudioController, EnumAudioEvent } from "./Audio";

/** 音频标签控制器 */
export class AudioTagController extends Emitter implements AudioController {
    constructor(tag: HTMLAudioElement, uid: number) {
        super();
        this._uid = uid;
        this._el = tag as AudioTag;
        this.onplay = (evt: Event) => {
            this.emit(EnumAudioEvent.ON_PLAY, evt);
        };
        this.onpause = (evt: Event) => {
            const el = evt.target as AudioTag;
            if (el.isStop) {
                el.isStop = false;
                this.emit(EnumAudioEvent.ON_STOP, evt);
            } else {
                this.emit(EnumAudioEvent.ON_PAUSE, evt);
            }
        };
        this.ontimeupdate = (evt: Event) => {
            const el = evt.target as AudioTag;
            this.emit(EnumAudioEvent.ON_PROGRESS, el.currentTime, el.duration);
        };
        this.onended = (evt: Event) => {
            this.emit(EnumAudioEvent.ON_END, evt);
        };
        this.onerror = (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
            this.emit(EnumAudioEvent.ON_ERROR, { event, source, lineno, colno, error });
        };
    }

    private _uid: number;
    /** 获取唯一id */
    get uid(): number {
        return this._uid;
    }

    private _el: AudioTag;
    /** 设置源 */
    set src(value: string) {
        if (!value) {
            return;
        }
        const el = this._el;
        if (el.src) {
            if (el.src === value) {
                return;
            }
            this.stop();
            el.src = value;
        } else {
            el.src = value;
        }
    }

    /** 循环播放 */
    get loop(): boolean {
        return this._el.loop;
    }
    /** 循环播放 */
    set loop(value: boolean) {
        this._el.loop = value;
        this.emit(EnumAudioEvent.ON_LOOP_CHANGE, value);
    }

    /** 音量 */
    get volume(): number {
        return this._el.volume;
    }
    /** 音量 */
    set volume(value: number) {
        this._el.volume = value;
        this.emit(EnumAudioEvent.ON_VOLUME_CHANGE, value);
    }

    /** 是否静音 */
    get muted(): boolean {
        return this._el.muted;
    }
    /** 是否静音 */
    set muted(value: boolean) {
        this._el.muted = value;
        this.emit(EnumAudioEvent.ON_MUTED_CHANGE, value);
    }

    /** 音频长度 */
    get duration(): number {
        return this._el.duration;
    }

    /** 当前播放进度 */
    get currentTime(): number {
        return this._el.currentTime;
    }
    /** 当前播放进度 */
    set currentTime(value: number) {
        this._el.currentTime = value;
        this.emit(EnumAudioEvent.ON_CURRENT_TIME_CHANGE, value);
    }

    /** 播放 */
    play(): void {
        this._el.play();
    }

    /** 停止 */
    stop(): void {
        this._el.isStop = true;
        this._el.pause();
        this.currentTime = 0;
    }

    /** 暂停 */
    pause(): void {
        this._el.pause();
    }

    /** 恢复播放 */
    resume(): void {
        this._el.play();
    }

    reset(): void {
        this._el.pause();
        this.muted = false;
        this.volume = 1;
        this.loop = false;
        this.currentTime = 0;
    }

    protected ontimeupdate: (evt: Event) => void;
    protected onplay: (evt: Event) => void;
    protected onpause: (evt: Event) => void;
    protected onended: (evt: Event) => void;
    protected onerror: (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => void;
}

interface AudioTag extends HTMLAudioElement {
    isStop: boolean;
}
