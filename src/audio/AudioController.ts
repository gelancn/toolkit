import { Emitter } from '../base/Emitter';
import { EnumProcess } from '../enum/EnumProcess';
import { EnumType } from '../enum/EnumType';
import { AudioSource } from './AudioSource';
import { AudioTag, AudioTagFactory } from './AudioTagFactory';

/** 音频控制器 */
export class AudioController extends Emitter {
    /** 音频工厂 */
    public static factory: AudioTagFactory = new AudioTagFactory();
    /**
     * 设置静音
     * @param value
     */
    public static setMuted(value: boolean): void {
        const factory: AudioTagFactory = AudioController.factory;
        const audioList: Array<AudioTag> = factory.getAudioList() as Array<AudioTag>;
        if (value) {
            audioList.forEach((tag: AudioTag) => {
                tag.cacheMuted = tag.muted;
                tag.muted = true;
            });
        } else {
            audioList.forEach((tag: AudioTag) => {
                if (tag.cacheMuted != null) {
                    tag.muted = tag.cacheMuted;
                    tag.cacheMuted = null;
                } else {
                    tag.muted = false;
                }
            });
        }
    }

    private static _playingQueueMap: { [key: string]: AudioController } = {};
    /**
     * 按队列播放声音
     * @param list
     * @param id
     */
    public static async playQueue(list: Array<string>, id?: string): Promise<void> {
        const controller: AudioController = new AudioController();
        if (id != null) {
            this._playingQueueMap[id] = controller;
        }
        for (let i: number = 0, length: number = list.length; i < length; i += 1) {
            const url: string = list[i];
            let source: string;
            const audioSource: AudioSource = AudioSource.get(url);
            if (audioSource == null) {
                source = url;
            } else {
                source = audioSource.base64;
            }
            await new Promise((resolve: () => void) => {
                controller.play(source);
                controller.once(EnumProcess.END, resolve);
            });
        }
    }

    /**
     * 停止播放队列声音
     * @param id
     */
    public static stopQueue(id: string): void {
        const controller: AudioController = this._playingQueueMap[id];
        if (controller == null) {
            return;
        }
        delete this._playingQueueMap[id];
        controller.offByType(EnumProcess.END);
        controller.stop();
    }

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

    public dispose(): void {
        this.stop();
        this._recoveryTag();
    }

    private _getTag(): void {
        if (this._audioTag != null) {
            return;
        }
        const el: AudioTag = AudioController.factory.get() as AudioTag;
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
        AudioController.factory.recovery(el);
    }

    protected ontimeupdate: (evt: Event) => void;
    protected onplay: (evt: Event) => void;
    protected onpause: (evt: Event) => void;
    protected onended: (evt: Event) => void;
}
