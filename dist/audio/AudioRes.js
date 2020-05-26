import { __awaiter, __extends, __generator } from "tslib";
import { Emitter } from "../base/Emitter";
import { Loader } from "../base/Loader";
var EnumLoadState;
(function (EnumLoadState) {
    EnumLoadState["UNLOAD"] = "UNLOAD";
    EnumLoadState["LOADING"] = "LOADING";
    EnumLoadState["LOADED"] = "LOADED";
    EnumLoadState["ERROR"] = "ERROR";
})(EnumLoadState || (EnumLoadState = {}));
/** 音频资源数据 */
var AudioResData = /** @class */ (function (_super) {
    __extends(AudioResData, _super);
    function AudioResData(url) {
        var _this = _super.call(this) || this;
        _this.state = EnumLoadState.UNLOAD;
        _this.url = url;
        return _this;
    }
    return AudioResData;
}(Emitter));
export { AudioResData };
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
        if (res != null && res.state === EnumLoadState.LOADED) {
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
                case EnumLoadState.LOADED:
                    resolve(res);
                    break;
                case EnumLoadState.UNLOAD:
                case EnumLoadState.ERROR:
                    res.on(EnumLoadState.LOADED, resolve);
                    res.on(EnumLoadState.ERROR, reject);
                    onProgress && res.on(EnumLoadState.LOADING, onProgress);
                    res.state = EnumLoadState.LOADING;
                    Loader.sendHttpRequest({
                        url: url,
                        method: "GET",
                        responseType: "blob",
                        onEnd: function (response) { return __awaiter(_this, void 0, void 0, function () {
                            var blob, needBase64, needArrayBuffer;
                            return __generator(this, function (_a) {
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
                                        res.state = EnumLoadState.LOADED;
                                        if (!cache) {
                                            delete resourceMap[res.url];
                                        }
                                        res.emit(EnumLoadState.LOADED, res);
                                        res.offAll();
                                        return [2 /*return*/];
                                }
                            });
                        }); },
                        onProgress: function (current, total) {
                            res.emit(EnumLoadState.LOADING, current, total);
                        },
                        onError: function (evt) {
                            res.state = EnumLoadState.ERROR;
                            if (!cache) {
                                delete resourceMap[res.url];
                            }
                            res.emit(EnumLoadState.ERROR, evt);
                        },
                    });
                    break;
                case EnumLoadState.LOADING:
                    res.on(EnumLoadState.LOADED, resolve);
                    res.on(EnumLoadState.ERROR, reject);
                    onProgress && res.on(EnumLoadState.LOADING, onProgress);
                    break;
                default:
            }
        });
    };
    /**
     * 加载很多个音频
     * @param list
     * @param cache
     * @param onProgress
     */
    AudioRes.prototype.loadList = function (list, cache, onProgress) {
        var _this = this;
        return new Promise(function (resolve) {
            var tempList = list.concat();
            var length = list.length;
            var resultMap = {};
            var checkLoaded = function (source) {
                var url;
                if (source instanceof AudioResData) {
                    url = source.url;
                    resultMap[url] = source;
                }
                else {
                    url = source;
                    resultMap[source] = null;
                }
                var index = tempList.indexOf(url);
                if (index >= 0) {
                    tempList.splice(index, 1);
                }
                onProgress && onProgress(length - tempList.length, length);
                if (tempList.length === 0) {
                    resolve(resultMap);
                }
            };
            var _loop_1 = function (i, length_1) {
                var url = tempList[i];
                var src = _this.get(url);
                if (src == null) {
                    _this.load(url, cache)
                        .then(function (source) {
                        checkLoaded(source);
                    })
                        .catch(function () {
                        checkLoaded(url);
                    });
                }
                else {
                    checkLoaded(src);
                }
            };
            for (var i = 0, length_1 = tempList.length; i < length_1; i += 1) {
                _loop_1(i, length_1);
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
