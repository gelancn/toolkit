import { Emitter } from "../base/Emitter";
import { EnumAudioEvent } from "./Audio";
/** 音频标签控制器 */
export class AudioTagController extends Emitter {
    constructor(tag, uid) {
        super();
        this._uid = uid;
        this._el = tag;
        this.onplay = (evt) => {
            this.emit(EnumAudioEvent.ON_PLAY, evt);
        };
        this.onpause = (evt) => {
            const el = evt.target;
            if (el.isStop) {
                el.isStop = false;
                this.emit(EnumAudioEvent.ON_STOP, evt);
            }
            else {
                this.emit(EnumAudioEvent.ON_PAUSE, evt);
            }
        };
        this.ontimeupdate = (evt) => {
            const el = evt.target;
            this.emit(EnumAudioEvent.ON_PROGRESS, el.currentTime, el.duration);
        };
        this.onended = (evt) => {
            this.emit(EnumAudioEvent.ON_END, evt);
        };
        this.onerror = (event, source, lineno, colno, error) => {
            this.emit(EnumAudioEvent.ON_ERROR, { event, source, lineno, colno, error });
        };
    }
    /** 获取唯一id */
    get uid() {
        return this._uid;
    }
    /** 设置源 */
    set src(value) {
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
        }
        else {
            el.src = value;
        }
    }
    /** 循环播放 */
    get loop() {
        return this._el.loop;
    }
    /** 循环播放 */
    set loop(value) {
        this._el.loop = value;
        this.emit(EnumAudioEvent.ON_LOOP_CHANGE, value);
    }
    /** 音量 */
    get volume() {
        return this._el.volume;
    }
    /** 音量 */
    set volume(value) {
        this._el.volume = value;
        this.emit(EnumAudioEvent.ON_VOLUME_CHANGE, value);
    }
    /** 是否静音 */
    get muted() {
        return this._el.muted;
    }
    /** 是否静音 */
    set muted(value) {
        this._el.muted = value;
        this.emit(EnumAudioEvent.ON_MUTED_CHANGE, value);
    }
    /** 音频长度 */
    get duration() {
        return this._el.duration;
    }
    /** 当前播放进度 */
    get currentTime() {
        return this._el.currentTime;
    }
    /** 当前播放进度 */
    set currentTime(value) {
        this._el.currentTime = value;
        this.emit(EnumAudioEvent.ON_CURRENT_TIME_CHANGE, value);
    }
    /** 播放 */
    play() {
        this._el.play();
    }
    /** 停止 */
    stop() {
        this._el.isStop = true;
        this._el.pause();
        this.currentTime = 0;
    }
    /** 暂停 */
    pause() {
        this._el.pause();
    }
    /** 恢复播放 */
    resume() {
        this._el.play();
    }
    reset() {
        this._el.pause();
        this.muted = false;
        this.volume = 1;
        this.loop = false;
        this.currentTime = 0;
    }
}
