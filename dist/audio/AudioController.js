import * as tslib_1 from 'tslib';
import { Singleton } from '..';
import { Emitter } from '../base/Emitter';
import { EnumProcess } from '../enum/EnumProcess';
import { EnumType } from '../enum/EnumType';
import { AudioTagFactory } from './AudioTagFactory';
/** 音频控制器 */
var AudioController = /** @class */ (function(_super) {
    tslib_1.__extends(AudioController, _super);
    function AudioController() {
        var _this = _super.call(this) || this;
        _this._loop = false;
        _this._volume = 1;
        _this._muted = false;
        _this._duration = 0;
        _this._playing = false;
        _this._currentTime = 0;
        _this.onplay = function(evt) {
            _this._playing = true;
            var el = evt.target;
            if (_this._currentTime > el.currentTime) {
                el.currentTime = _this._currentTime;
            }
            _this.emit(EnumProcess.START);
        };
        _this.onpause = function(evt) {
            _this._playing = false;
            if (_this._currentTime === 0) {
                _this.emit(EnumProcess.STOP);
            } else {
                _this.emit(EnumProcess.PAUSE);
            }
            _this._recoveryTag();
        };
        _this.ontimeupdate = function(evt) {
            if (!_this._playing) {
                _this._playing = true;
            }
            var el = evt.target;
            _this._duration = el.duration;
            _this._currentTime = el.currentTime;
            _this.emit(EnumProcess.PROGRESS, el.currentTime, el.duration);
        };
        _this.onended = function(evt) {
            _this._currentTime = 0;
            _this._playing = false;
            _this.emit(EnumProcess.END);
            _this._recoveryTag();
        };
        return _this;
    }
    Object.defineProperty(AudioController.prototype, 'loop', {
        /** 循环播放 */
        get: function() {
            return this._loop;
        },
        /** 循环播放 */
        set: function(value) {
            this._loop = !!value;
            var el = this._audioTag;
            if (el == null) {
                return;
            }
            el.loop = this._loop;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioController.prototype, 'volume', {
        /** 音量 */
        get: function() {
            return this._volume;
        },
        /** 音量 */
        set: function(value) {
            this._volume = value;
            var el = this._audioTag;
            if (el == null) {
                return;
            }
            el.volume = this._volume;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioController.prototype, 'muted', {
        /** 是否静音 */
        get: function() {
            return this._muted;
        },
        /** 是否静音 */
        set: function(value) {
            this._muted = !!value;
            var el = this._audioTag;
            if (el == null) {
                return;
            }
            el.muted = this._muted;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioController.prototype, 'duration', {
        /** 音频长度 */
        get: function() {
            var el = this._audioTag;
            if (el == null) {
                return this._duration;
            }
            return el.duration;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioController.prototype, 'playing', {
        /** 是否播放中 */
        get: function() {
            return this._playing;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioController.prototype, 'currentTime', {
        /** 当前播放进度 */
        get: function() {
            return this._currentTime;
        },
        /** 当前播放进度 */
        set: function(value) {
            if (value == null || typeof value !== EnumType.NUMBER) {
                return;
            }
            this._currentTime = value;
            var el = this._audioTag;
            if (el == null) {
                return;
            }
            if (el.readyState > 0) {
                el.currentTime = value;
            }
        },
        enumerable: true,
        configurable: true,
    });
    /**
     * 播放一个音频
     * @param source
     */
    AudioController.prototype.play = function(source) {
        if (source == null) {
            if (this._source == null) {
                return;
            } else {
                this._getTag();
                var el = this._audioTag;
                el.play();
            }
        } else {
            this._getTag();
            var el = this._audioTag;
            if (this._source === source) {
                el.play();
            } else {
                this._currentTime = el.currentTime = 0;
                this._source = source;
                el.src = this._source;
                el.play();
            }
        }
    };
    /** 停止 */
    AudioController.prototype.stop = function() {
        var el = this._audioTag;
        if (el == null) {
            return;
        }
        el.pause();
        if (el.readyState > 0) {
            el.currentTime = 0;
            this._currentTime = 0;
        }
    };
    /** 暂停 */
    AudioController.prototype.pause = function() {
        var el = this._audioTag;
        if (el == null) {
            return;
        }
        el.pause();
    };
    AudioController.prototype._getTag = function() {
        if (this._audioTag != null) {
            return;
        }
        var factory = Singleton.instance.get(AudioTagFactory);
        var el = factory.get();
        el.loop = this._loop;
        el.volume = this._volume;
        el.muted = this._muted;
        el.currentTime = this._currentTime;
        el.onplay = this.onplay;
        el.onpause = this.onpause;
        el.ontimeupdate = this.ontimeupdate;
        el.onended = this.onended;
        this._audioTag = el;
    };
    AudioController.prototype._recoveryTag = function() {
        var el = this._audioTag;
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
        var factory = Singleton.instance.get(AudioTagFactory);
        factory.recovery(el);
    };
    return AudioController;
})(Emitter);
export { AudioController };
