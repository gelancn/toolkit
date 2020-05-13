import { Emitter } from "../base/Emitter";
import { EnumAudioProcess } from './Audio';

/** 音频控制器 */
export class AudioController extends Emitter {
    private static _uidCount = 0;
    constructor(tag: HTMLAudioElement) {
        super();
        this._uid = AudioController._uidCount++;
        this._audioTag = tag;
        this.onplay = (evt: Event) => {
            this._playing = true;
            const el = evt.target as HTMLAudioElement;
            if (this._currentTime > el.currentTime) {
                el.currentTime = this._currentTime;
            }
            this.emit(EnumAudioProcess.START, evt);
        };
        this.onpause = (evt: Event) => {
            this._playing = false;
            if (this._currentTime === 0) {
                this.emit(EnumAudioProcess.STOP);
            } else {
                this.emit(EnumAudioProcess.PAUSE, evt);
            }
        };
        this.ontimeupdate = (evt: Event) => {
            if (!this._playing) {
                this._playing = true;
            }
            const el = evt.target as HTMLAudioElement;
            this._duration = el.duration;
            this._currentTime = el.currentTime;
            this.emit(EnumAudioProcess.PROGRESS, el.currentTime, el.duration);
        };
        this.onended = (evt: Event) => {
            this._currentTime = 0;
            this._playing = false;
            this.emit(EnumAudioProcess.END, evt);
        };
        this.onerror = (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
            this.emit(EnumAudioProcess.ERROR, { event, source, lineno, colno, error });
        };
    }

    private _uid: number;
    /** 获取唯一id */
    get uid(): number {
        return this._uid;
    }

    private _audioTag: HTMLAudioElement;
    private _source!: string;

    private _loop = false;
    /** 循环播放 */
    get loop(): boolean {
        return this._loop;
    }
    /** 循环播放 */
    set loop(value: boolean) {
        this._loop = !!value;
        const el = this._audioTag;
        if (el == null) {
            return;
        }
        el.loop = this._loop;
    }

    private _volume = 1;
    /** 音量 */
    get volume(): number {
        return this._volume;
    }
    /** 音量 */
    set volume(value: number) {
        this._volume = value;
        const el = this._audioTag;
        if (el == null) {
            return;
        }
        el.volume = this._volume;
    }

    private _muted = false;
    /** 是否静音 */
    get muted(): boolean {
        return this._muted;
    }
    /** 是否静音 */
    set muted(value: boolean) {
        const el = this._audioTag as (HTMLAudioElement & { cacheMuted: boolean | null });
        if (el == null || el.cacheMuted != null) {
            return;
        }
        this._muted = !!value;
        el.muted = this._muted;
    }

    private _duration = 0;
    /** 音频长度 */
    get duration(): number {
        const el = this._audioTag;
        if (el == null) {
            return this._duration;
        }
        return el.duration;
    }

    private _playing = false;
    /** 是否播放中 */
    get playing(): boolean {
        return this._playing;
    }

    private _currentTime = 0;
    /** 当前播放进度 */
    get currentTime(): number {
        return this._currentTime;
    }
    /** 当前播放进度 */
    set currentTime(value: number) {
        if (value == null) {
            return;
        }
        value = +value;
        this._currentTime = value;
        const el = this._audioTag;
        if (el == null) {
            return;
        }
        if (el.readyState > 0) {
            el.currentTime = value;
        }
    }

    /**
     * 播放一个音频
     * @param source
     */
    play(source?: string): void {
        const el = this._audioTag;
        if (el == null) {
            return;
        }
        if (source == null) {
            if (this._source == null) {
                return;
            } else {
                el.play();
            }
        } else {
            if (this._source === source) {
                el.play();
            } else {
                this._currentTime = el.currentTime = 0;
                this._source = source;
                el.src = this._source;
                el.play();
            }
        }
    }

    /** 停止 */
    stop(): void {
        const el = this._audioTag;
        if (el == null) {
            return;
        }
        el.pause();
        if (el.readyState > 0) {
            el.currentTime = 0;
            this._currentTime = 0;
        }
    }

    /** 暂停 */
    pause(): void {
        const el = this._audioTag;
        if (el == null) {
            return;
        }
        el.pause();
    }

    /** 释放 */
    dispose(): HTMLAudioElement | undefined {
        this.stop();
        const el = this._audioTag;
        if (el == null) {
            return;
        }
        delete this._audioTag;
        el.currentTime = 0;
        el.loop = false;
        el.volume = 1;
        el.muted = false;
        el.onplay = null;
        el.onpause = null;
        el.ontimeupdate = null;
        el.onended = null;
        el.onerror = null;
        return el;
    }

    protected ontimeupdate: (evt: Event) => void;
    protected onplay: (evt: Event) => void;
    protected onpause: (evt: Event) => void;
    protected onended: (evt: Event) => void;
    protected onerror: (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => void;
}
