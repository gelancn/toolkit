import { Emitter } from "../../Emitter";
import { AudioController, EnumAudioEvent } from "../Audio";

/** 音频标签控制器 */
export class AudioTagController extends Emitter implements AudioController {
    constructor(tag: HTMLAudioElement, uid: number) {
        super();
        this._uid = uid;
        this._el = tag;
        tag.onplay = (evt: Event) => {
            this.emit(EnumAudioEvent.ON_PLAY, evt);
        };
        let timeID = -1;
        tag.onpause = (evt: Event) => {
            const el = evt.target as HTMLAudioElement;
            if (!el.dataset.isStop) {
                return;
            }
            el.dataset.isStop = void 0;
            timeID >= 0 && clearTimeout(timeID);
            timeID = window.setTimeout(() => {
                timeID = -1;
                this.emit(EnumAudioEvent.ON_STOP);
            }, 0);
        };
        tag.ontimeupdate = (evt: Event) => {
            const el = evt.target as HTMLAudioElement;
            this.emit(EnumAudioEvent.ON_PROGRESS, el.currentTime, el.duration || 0);
        };
        tag.onended = (evt: Event) => {
            this.emit(EnumAudioEvent.ON_END, evt);
        };
        tag.onerror = (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
            this.emit(EnumAudioEvent.ON_ERROR, { event, source, lineno, colno, error });
        };
    }

    private _uid: number;
    /** 获取唯一id */
    get uid(): number {
        return this._uid;
    }

    private _el: HTMLAudioElement;

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
    play(source: string): void {
        if (!source) {
            return;
        }
        const el = this._el;
        if (el.src && el.src === source) {
            return;
        }
        el.src = source;
        this._el.play().catch(() => {
            // 音频标签实现会有预加载过程，预加载期间更换src后再执行play会导致报错，捕获后不影响正常功能
        });
    }

    /** 停止 */
    stop(): void {
        this._el.dataset.isStop = "true";
        this._el.pause();
        this._el.currentTime = 0;
    }

    reset(): void {
        this._el.pause();
        this.muted = false;
        this.volume = 1;
        this.loop = false;
        this.currentTime = 0;
    }
}
