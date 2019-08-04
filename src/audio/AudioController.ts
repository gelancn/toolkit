import { Singleton } from '..';
import { Emitter } from '../base/Emitter';
import { EnumProcess } from '../enum/EnumProcess';
import { EnumType } from '../enum/EnumType';
import { AudioTag, AudioTagFactory } from './AudioTagFactory';

/** 音频控制器 */
export class AudioController extends Emitter {
    constructor() {
        super();
        this.onplay = (evt: Event) => {
            this._playing = true;
            const el: AudioTag = evt.target as AudioTag;
            if (this._currentTime > el.currentTime) {
                el.currentTime = this._currentTime;
            }
            this.emit(EnumProcess.START);
        };
        this.onpause = (evt: Event) => {
            this._playing = false;
            if (this._currentTime === 0) {
                this.emit(EnumProcess.STOP);
            } else {
                this.emit(EnumProcess.PAUSE);
            }
            this._recoveryTag();
        };
        this.ontimeupdate = (evt: Event) => {
            if (!this._playing) {
                this._playing = true;
            }
            const el: AudioTag = evt.target as AudioTag;
            this._duration = el.duration;
            this._currentTime = el.currentTime;
            this.emit(EnumProcess.PROGRESS, el.currentTime, el.duration);
        };
        this.onended = (evt: Event) => {
            this._currentTime = 0;
            this._playing = false;
            this.emit(EnumProcess.END);
            this._recoveryTag();
        };
    }

    private _audioTag: AudioTag;
    private _source: string;

    private _loop: boolean = false;
    /** 循环播放 */
    public get loop(): boolean {
        return this._loop;
    }
    /** 循环播放 */
    public set loop(value: boolean) {
        this._loop = !!value;
        const el: AudioTag = this._audioTag;
        if (el == null) {
            return;
        }
        el.loop = this._loop;
    }

    private _volume: number = 1;
    /** 音量 */
    public get volume(): number {
        return this._volume;
    }
    /** 音量 */
    public set volume(value: number) {
        this._volume = value;
        const el: AudioTag = this._audioTag;
        if (el == null) {
            return;
        }
        el.volume = this._volume;
    }

    private _muted: boolean = false;
    /** 是否静音 */
    public get muted(): boolean {
        return this._muted;
    }
    /** 是否静音 */
    public set muted(value: boolean) {
        this._muted = !!value;
        const el: AudioTag = this._audioTag;
        if (el == null) {
            return;
        }
        el.muted = this._muted;
    }

    private _duration: number = 0;
    /** 音频长度 */
    public get duration(): number {
        const el: AudioTag = this._audioTag;
        if (el == null) {
            return this._duration;
        }
        return el.duration;
    }

    private _playing: boolean = false;
    /** 是否播放中 */
    public get playing(): boolean {
        return this._playing;
    }

    private _currentTime: number = 0;
    /** 当前播放进度 */
    public get currentTime(): number {
        return this._currentTime;
    }
    /** 当前播放进度 */
    public set currentTime(value: number) {
        if (value == null || typeof value !== EnumType.NUMBER) {
            return;
        }
        this._currentTime = value;
        const el: AudioTag = this._audioTag;
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
    public play(source?: string): void {
        if (source == null) {
            if (this._source == null) {
                return;
            } else {
                this._getTag();
                const el: AudioTag = this._audioTag;
                el.play();
            }
        } else {
            this._getTag();
            const el: AudioTag = this._audioTag;
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
    public stop(): void {
        const el: AudioTag = this._audioTag;
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
    public pause(): void {
        const el: AudioTag = this._audioTag;
        if (el == null) {
            return;
        }
        el.pause();
    }

    private _getTag(): void {
        if (this._audioTag != null) {
            return;
        }
        const factory: AudioTagFactory = Singleton.instance.get(AudioTagFactory);
        const el: AudioTag = factory.get() as AudioTag;
        el.loop = this._loop;
        el.volume = this._volume;
        el.muted = this._muted;
        el.currentTime = this._currentTime;
        el.onplay = this.onplay;
        el.onpause = this.onpause;
        el.ontimeupdate = this.ontimeupdate;
        el.onended = this.onended;
        this._audioTag = el;
    }

    private _recoveryTag(): void {
        const el: AudioTag = this._audioTag;
        if (el == null) {
            return;
        }
        this._audioTag = null;
        el.currentTime = 0;
        el.loop = false;
        el.volume = 1;
        el.muted = false;
        el.onplay = null;
        el.onpause = null;
        el.ontimeupdate = null;
        el.onended = null;
        const factory: AudioTagFactory = Singleton.instance.get(AudioTagFactory);
        factory.recovery(el);
    }

    protected ontimeupdate: (evt: Event) => void;
    protected onplay: (evt: Event) => void;
    protected onpause: (evt: Event) => void;
    protected onended: (evt: Event) => void;
}
