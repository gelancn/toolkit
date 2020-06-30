import { __extends } from "tslib";
import { Emitter } from "../../base/Emitter";
import { EnumAudioEvent } from "../Audio";
/** 音频标签控制器 */
var AudioTagController = /** @class */ (function (_super) {
    __extends(AudioTagController, _super);
    function AudioTagController(tag, uid) {
        var _this = _super.call(this) || this;
        _this._uid = uid;
        _this._el = tag;
        tag.onplay = function (evt) {
            _this.emit(EnumAudioEvent.ON_PLAY, evt);
        };
        tag.onpause = function (evt) {
            var el = evt.target;
            if (el.isStop) {
                el.isStop = false;
                _this.emit(EnumAudioEvent.ON_STOP, evt);
            }
            else {
                _this.emit(EnumAudioEvent.ON_PAUSE, evt);
            }
        };
        tag.ontimeupdate = function (evt) {
            var el = evt.target;
            _this.emit(EnumAudioEvent.ON_PROGRESS, el.currentTime, el.duration);
        };
        tag.onended = function (evt) {
            _this.emit(EnumAudioEvent.ON_END, evt);
        };
        tag.onerror = function (event, source, lineno, colno, error) {
            _this.emit(EnumAudioEvent.ON_ERROR, { event: event, source: source, lineno: lineno, colno: colno, error: error });
        };
        return _this;
    }
    Object.defineProperty(AudioTagController.prototype, "uid", {
        /** 获取唯一id */
        get: function () {
            return this._uid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTagController.prototype, "src", {
        /** 设置源 */
        set: function (value) {
            if (!value) {
                return;
            }
            var el = this._el;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTagController.prototype, "loop", {
        /** 循环播放 */
        get: function () {
            return this._el.loop;
        },
        /** 循环播放 */
        set: function (value) {
            this._el.loop = value;
            this.emit(EnumAudioEvent.ON_LOOP_CHANGE, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTagController.prototype, "volume", {
        /** 音量 */
        get: function () {
            return this._el.volume;
        },
        /** 音量 */
        set: function (value) {
            this._el.volume = value;
            this.emit(EnumAudioEvent.ON_VOLUME_CHANGE, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTagController.prototype, "muted", {
        /** 是否静音 */
        get: function () {
            return this._el.muted;
        },
        /** 是否静音 */
        set: function (value) {
            this._el.muted = value;
            this.emit(EnumAudioEvent.ON_MUTED_CHANGE, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTagController.prototype, "duration", {
        /** 音频长度 */
        get: function () {
            return this._el.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioTagController.prototype, "currentTime", {
        /** 当前播放进度 */
        get: function () {
            return this._el.currentTime;
        },
        /** 当前播放进度 */
        set: function (value) {
            this._el.currentTime = value;
            this.emit(EnumAudioEvent.ON_CURRENT_TIME_CHANGE, value);
        },
        enumerable: true,
        configurable: true
    });
    /** 播放 */
    AudioTagController.prototype.play = function () {
        return this._el.play();
    };
    /** 停止 */
    AudioTagController.prototype.stop = function () {
        this._el.isStop = true;
        this._el.pause();
        this.currentTime = 0;
    };
    /** 暂停 */
    AudioTagController.prototype.pause = function () {
        this._el.pause();
    };
    /** 恢复播放 */
    AudioTagController.prototype.resume = function () {
        this._el.play();
    };
    AudioTagController.prototype.reset = function () {
        this._el.pause();
        this.muted = false;
        this.volume = 1;
        this.loop = false;
        this.currentTime = 0;
    };
    return AudioTagController;
}(Emitter));
export { AudioTagController };
