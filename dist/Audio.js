import * as tslib_1 from "tslib";
import { Emitter } from "./Emitter";
import { Loader } from "./Loader";
import { Singleton } from "./Singleton";
/** 音频资源数据 */
var AudioResData = /** @class */ (function (_super) {
    tslib_1.__extends(AudioResData, _super);
    function AudioResData(url) {
        var _this = _super.call(this) || this;
        _this.state = AudioResData.UNLOAD;
        _this.url = url;
        return _this;
    }
    AudioResData.UNLOAD = "unload";
    AudioResData.LOADING = "loading";
    AudioResData.LOADED = "loaded";
    AudioResData.ERROR = "error";
    return AudioResData;
}(Emitter));
/** 音频资源管理器 */
var AudioRes = /** @class */ (function () {
    function AudioRes() {
        /** 设置加载成功后转化数据类型 */
        this.convertTypes = {
            base64: true,
            arrayBuffer: false,
        };
        this._resourceMap = {};
    }
    /**
     * 获取音频资源
     * @param url
     */
    AudioRes.prototype.get = function (url) {
        var res = this._resourceMap[url];
        if (res != null && res.state === AudioResData.LOADED) {
            return res;
        }
        else {
            return null;
        }
    };
    /**
     * 加载音频数据
     * @param url
     * @param cache
     * @param onProgress
     */
    AudioRes.prototype.load = function (url, cache, onProgress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (url == null) {
                reject();
            }
            var resourceMap = _this._resourceMap;
            var res = resourceMap[url];
            if (res == null) {
                res = new AudioResData(url);
                resourceMap[url] = res;
            }
            switch (res.state) {
                case AudioResData.LOADED:
                    resolve(res);
                    break;
                case AudioResData.UNLOAD:
                case AudioResData.ERROR:
                    res.on(AudioResData.LOADED, resolve);
                    res.on(AudioResData.ERROR, reject);
                    onProgress && res.on(AudioResData.LOADING, onProgress);
                    res.state = AudioResData.LOADING;
                    var onEnd = function (response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var blob, needBase64, needArrayBuffer;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    blob = response;
                                    res.blob = blob;
                                    needBase64 = this.convertTypes.base64;
                                    needArrayBuffer = this.convertTypes.arrayBuffer;
                                    if (!needBase64) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.readAsDataURL(blob)
                                            .then(function (data) {
                                            res.base64 = data;
                                        })
                                            .catch(function (evt) {
                                            return;
                                        })];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2:
                                    if (!needArrayBuffer) return [3 /*break*/, 4];
                                    return [4 /*yield*/, this.readAsArrayBuffer(blob)
                                            .then(function (data) {
                                            res.arrayBuffer = data;
                                        })
                                            .catch(function (evt) {
                                            return;
                                        })];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
                                    res.state = AudioResData.LOADED;
                                    if (!cache) {
                                        delete resourceMap[res.url];
                                    }
                                    res.emit(AudioResData.LOADED, res);
                                    res.offAll();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    var onError = function (evt) {
                        res.state = AudioResData.ERROR;
                        if (!cache) {
                            delete resourceMap[res.url];
                        }
                        res.emit(AudioResData.ERROR, evt);
                    };
                    Loader.sendHttpRequest({
                        url: url,
                        method: "GET",
                        responseType: "blob",
                        onProgress: function (current, total) {
                            res.emit(AudioResData.LOADING, current, total);
                        },
                    })
                        .then(onEnd)
                        .catch(onError);
                    break;
                case AudioResData.LOADING:
                    res.on(AudioResData.LOADED, resolve);
                    res.on(AudioResData.ERROR, reject);
                    onProgress && res.on(AudioResData.LOADING, onProgress);
                    break;
                default:
            }
        });
    };
    /**
     * 转化成base64
     * @param blob
     */
    AudioRes.prototype.readAsDataURL = function (blob) {
        return new Promise(function (resolve, reject) {
            var stringReader = new FileReader();
            stringReader.readAsDataURL(blob);
            stringReader.onload = function () {
                var base64 = stringReader.result;
                resolve(base64);
            };
            stringReader.onerror = function (evt) {
                reject(evt);
            };
        });
    };
    /**
     * 转化成ArrayBuffer
     * @param blob
     */
    AudioRes.prototype.readAsArrayBuffer = function (blob) {
        return new Promise(function (resolve, reject) {
            var bufferReader = new FileReader();
            bufferReader.readAsArrayBuffer(blob);
            bufferReader.onload = function () {
                var arrayBuffer = bufferReader.result;
                resolve(arrayBuffer);
            };
            bufferReader.onerror = function (evt) {
                reject(evt);
            };
        });
    };
    return AudioRes;
}());
export { AudioRes };
/** 音频标签 */
var AudioTags = /** @class */ (function () {
    function AudioTags() {
        this._tags = [];
        this.limit = 12;
    }
    /** 获取一个标签 */
    AudioTags.prototype.get = function () {
        return this._tags.pop() || document.createElement("audio");
    };
    /** 回收一个标签 */
    AudioTags.prototype.recovery = function (value) {
        if (!value.dataset.uid) {
            return;
        }
        this._tags.push(value);
    };
    /** 解锁 */
    AudioTags.prototype.unlock = function () {
        if (this._tags.length * 2 >= this.limit) {
            return;
        }
        var length = this.limit - this._tags.length;
        for (var i = 0; i < length; i += 1) {
            var el = document.createElement("audio");
            el.dataset.uid = i.toString();
            el.load();
            this._tags.push(el);
        }
    };
    return AudioTags;
}());
export { AudioTags };
/** 音频控制器 */
var AudioController = /** @class */ (function (_super) {
    tslib_1.__extends(AudioController, _super);
    function AudioController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._el = null;
        _this._playing = false;
        _this._loop = false;
        _this._volume = 1;
        _this._muted = false;
        _this._currentTime = 0;
        return _this;
    }
    Object.defineProperty(AudioController.prototype, "loop", {
        /** 循环播放 */
        get: function () {
            return this._loop;
        },
        /** 循环播放 */
        set: function (value) {
            this._loop = value;
            var el = this._getTag();
            el.loop = this._loop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioController.prototype, "volume", {
        /** 音量 */
        get: function () {
            return this._volume;
        },
        /** 音量 */
        set: function (value) {
            this._volume = value;
            var el = this._getTag();
            el.volume = this._volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioController.prototype, "muted", {
        /** 是否静音 */
        get: function () {
            return this._muted;
        },
        /** 是否静音 */
        set: function (value) {
            this._muted = value;
            var el = this._getTag();
            el.muted = this._muted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioController.prototype, "currentTime", {
        /** 当前播放进度 */
        get: function () {
            return this._currentTime;
        },
        /** 当前播放进度 */
        set: function (value) {
            this._currentTime = value;
            var el = this._getTag();
            el.currentTime = this._currentTime;
        },
        enumerable: true,
        configurable: true
    });
    /** 播放 */
    AudioController.prototype.play = function (source) {
        var el = this._getTag();
        if (!source && !el.src) {
            return;
        }
        source && (el.src = source);
        el.play().catch(function () {
            // 音频标签实现会有预加载过程，预加载期间更换src后再执行play会导致报错，捕获后不影响正常功能
        });
    };
    /** 暂停 */
    AudioController.prototype.stop = function () {
        var el = this._getTag();
        el.pause();
    };
    AudioController.prototype._getTag = function () {
        var _this = this;
        if (this._el) {
            return this._el;
        }
        var el = Singleton.get(AudioTags).get();
        this._el = el;
        el.loop = this.loop;
        el.volume = this.volume;
        el.muted = this.muted;
        el.onplay = function (evt) {
            _this._playing = true;
            _this.emit(AudioController.ON_PLAY);
        };
        el.onpause = function (evt) {
            _this._playing = false;
            var el = evt.target;
            if (el.duration && el.currentTime === el.duration) {
                return;
            }
            _this.emit(AudioController.ON_STOP);
            _this._recoveryTag();
        };
        el.ontimeupdate = function (evt) {
            var el = evt.target;
            _this._currentTime = el.currentTime;
            if (!_this._playing) {
                return;
            }
            _this.emit(AudioController.ON_PROGRESS, el.currentTime, el.duration || 0);
        };
        el.onended = function (evt) {
            _this._playing = false;
            _this.emit(AudioController.ON_END);
            _this._recoveryTag();
        };
        el.onerror = function (event, source, lineno, colno, error) {
            _this.emit(AudioController.ON_ERROR, { event: event, source: source, lineno: lineno, colno: colno, error: error });
            _this._recoveryTag();
        };
        return this._el;
    };
    AudioController.prototype._recoveryTag = function () {
        this._currentTime = 0;
        var el = this._el;
        this._el = null;
        if (el) {
            el.pause();
            el.muted = false;
            el.volume = 1;
            el.loop = false;
            el.currentTime = 0;
            el.onplaying = null;
            el.onpause = null;
            el.ontimeupdate = null;
            el.onended = null;
            el.onerror = null;
            Singleton.get(AudioTags).recovery(el);
        }
    };
    AudioController.ON_PLAY = "onPlay";
    AudioController.ON_STOP = "onStop";
    AudioController.ON_END = "onEnd";
    AudioController.ON_PROGRESS = "onProgress";
    AudioController.ON_ERROR = "onError";
    return AudioController;
}(Emitter));
export { AudioController };
/** 音频 */
var Audio = /** @class */ (function () {
    function Audio() {
        /** 音频标签 */
        this.tags = Singleton.get(AudioTags);
        /** 音频资源 */
        this.res = Singleton.get(AudioRes);
        this._playingCtrl = {};
    }
    /**
     * 播放一个音频
     * @param url
     */
    Audio.prototype.play = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ctrl = _this._playingCtrl[url];
            var playing = false;
            if (ctrl) {
                playing = true;
            }
            else {
                ctrl = new AudioController();
                _this._playingCtrl[url] = ctrl;
            }
            if (!playing) {
                var source = _this.res.get(url);
                if (source) {
                    ctrl.play(source.base64);
                }
                else {
                    ctrl.play(url);
                }
            }
            ctrl.on(AudioController.ON_END, function () {
                delete _this._playingCtrl[url];
                ctrl.offAll();
                resolve();
            });
            var onError = function () {
                delete _this._playingCtrl[url];
                ctrl.offAll();
                reject();
            };
            ctrl.on(AudioController.ON_STOP, onError);
            ctrl.on(AudioController.ON_ERROR, onError);
        });
    };
    /**
     * 停止一个音频
     * @param url
     */
    Audio.prototype.stop = function (url) {
        var ctrl = this._playingCtrl[url];
        if (ctrl == null) {
            return;
        }
        ctrl.stop();
    };
    return Audio;
}());
export { Audio };
