import * as tslib_1 from 'tslib';
import { Emitter } from '../base/Emitter';
import { EnumProcess } from '../enum/EnumProcess';
import { EnumType } from '../enum/EnumType';
import { AudioSource } from './AudioSource';
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
            _this.emit(EnumProcess.START, evt);
        };
        _this.onpause = function(evt) {
            _this._playing = false;
            if (_this._currentTime === 0) {
                _this.emit(EnumProcess.STOP);
            } else {
                _this.emit(EnumProcess.PAUSE, evt);
            }
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
            _this.emit(EnumProcess.END, evt);
            _this._recoveryTag();
        };
        _this.onerror = function(event, source, lineno, colno, error) {
            _this.emit(EnumProcess.ERROR, { event: event, source: source, lineno: lineno, colno: colno, error: error });
        };
        return _this;
    }
    /**
     * 设置静音
     * @param value
     */
    AudioController.setMuted = function(value) {
        var factory = this.factory;
        var audioList = factory.getAudioList();
        if (value) {
            audioList.forEach(function(tag) {
                tag.cacheMuted = tag.muted;
                tag.muted = true;
            });
        } else {
            audioList.forEach(function(tag) {
                if (tag.cacheMuted != null) {
                    tag.muted = tag.cacheMuted;
                    tag.cacheMuted = null;
                } else {
                    tag.muted = false;
                }
            });
        }
    };
    /**
     * 播放声音
     * @param url
     */
    AudioController.playAudio = function(url) {
        var _this = this;
        return new Promise(function(resolve, reject) {
            if (url == null) {
                reject();
                return;
            }
            var source;
            var audioSource = AudioSource.get(url);
            if (audioSource == null) {
                source = url;
            } else {
                source = audioSource.base64;
            }
            var controller = _this._playingMap[url];
            if (controller == null) {
                controller = new AudioController();
                _this._playingMap[url] = controller;
            }
            controller.play(source);
            controller.once(EnumProcess.END, function() {
                delete _this._playingMap[url];
                controller.dispose();
                resolve();
            });
            controller.once(EnumProcess.ERROR, function() {
                delete _this._playingMap[url];
                controller.dispose();
                reject();
            });
        });
    };
    /**
     * 停止声音
     * @param url
     */
    AudioController.stopAudio = function(url) {
        var controller = this._playingMap[url];
        if (controller == null) {
            return;
        }
        controller.offByType(EnumProcess.END);
        controller.offByType(EnumProcess.ERROR);
        delete this._playingMap[url];
        controller.dispose();
    };
    /**
     * 按队列播放声音
     * @param list
     * @param id
     */
    AudioController.playAudios = function(list, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
            var controller, _loop_1, i, length_1;
            return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                    case 0:
                        controller = new AudioController();
                        if (id != null) {
                            if (this._playingMap[id] != null) {
                                this.stopAudios(id);
                            }
                            this._playingMap[id] = controller;
                        }
                        _loop_1 = function(i, length_1) {
                            var url, source, audioSource;
                            return tslib_1.__generator(this, function(_a) {
                                switch (_a.label) {
                                    case 0:
                                        url = list[i];
                                        audioSource = AudioSource.get(url);
                                        if (audioSource == null) {
                                            source = url;
                                        } else {
                                            source = audioSource.base64;
                                        }
                                        return [
                                            4 /*yield*/,
                                            new Promise(function(resolve, reject) {
                                                controller.play(source);
                                                controller.once(EnumProcess.END, resolve);
                                                controller.once(EnumProcess.ERROR, reject);
                                            }),
                                        ];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        (i = 0), (length_1 = list.length);
                        _a.label = 1;
                    case 1:
                        if (!(i < length_1)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i, length_1)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i += 1;
                        return [3 /*break*/, 1];
                    case 4:
                        this.stopAudios(id);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 停止播放队列声音
     * @param id
     */
    AudioController.stopAudios = function(id) {
        var controller = this._playingMap[id];
        if (controller == null) {
            return;
        }
        delete this._playingMap[id];
        controller.offByType(EnumProcess.END);
        controller.offByType(EnumProcess.ERROR);
        controller.dispose();
    };
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
    AudioController.prototype.dispose = function() {
        this.stop();
        this._recoveryTag();
    };
    AudioController.prototype._getTag = function() {
        if (this._audioTag != null) {
            return;
        }
        var el = AudioController.factory.get();
        el.loop = this._loop;
        el.volume = this._volume;
        el.muted = this._muted;
        el.currentTime = this._currentTime;
        el.onplay = this.onplay;
        el.onpause = this.onpause;
        el.ontimeupdate = this.ontimeupdate;
        el.onended = this.onended;
        el.onerror = this.onerror;
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
        el.onerror = null;
        AudioController.factory.recovery(el);
    };
    /** 音频工厂 */
    AudioController.factory = new AudioTagFactory();
    AudioController._playingMap = {};
    return AudioController;
})(Emitter);
export { AudioController };
