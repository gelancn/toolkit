import * as tslib_1 from 'tslib';
import { HttpLoader } from '..';
import { EnumHttpMethod } from '../enum/EnumHttpMethod';
import { EnumLoadState } from '../enum/EnumLoadState';
import { EnumProcess } from '../enum/EnumProcess';
/** 音频源数据 */
var AudioSource = /** @class */ (function() {
    function AudioSource(url) {
        this._loadState = EnumLoadState.UNLOAD;
        this._loader = new HttpLoader();
        this._url = url;
    }
    /**
     * 加载音频数据
     * @param url
     * @param cache
     */
    AudioSource.load = function(url, cache) {
        if (cache === void 0) {
            cache = true;
        }
        return tslib_1.__awaiter(this, void 0, void 0, function() {
            var data;
            return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                    case 0:
                        data = AudioSource._sourceMap[url];
                        if (data == null) {
                            data = new AudioSource(url);
                            AudioSource._sourceMap[url] = data;
                        }
                        if (!(data.loadState !== EnumLoadState.LOADED)) return [3 /*break*/, 2];
                        return [4 /*yield*/, data.load()];
                    case 1:
                        _a.sent();
                        if (!cache) {
                            delete AudioSource._sourceMap[url];
                        }
                        _a.label = 2;
                    case 2:
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * 获取音频数据
     * @param url
     */
    AudioSource.get = function(url) {
        var data = AudioSource._sourceMap[url];
        if (data != null && data._loadState === EnumLoadState.LOADED) {
            return data;
        } else {
            return null;
        }
    };
    /**
     * 预加载音频列表
     * @param list
     * @param cache
     */
    AudioSource.loadList = function(list, cache) {
        return new Promise(function(resolve) {
            var tempList = list.concat();
            var resultMap = {};
            var checkLoaded = function(source) {
                var url;
                if (source instanceof AudioSource) {
                    url = source.url;
                    resultMap[source.url] = source;
                } else {
                    url = source;
                    resultMap[source] = null;
                }
                var index = tempList.indexOf(url);
                if (index >= 0) {
                    tempList.splice(index, 1);
                }
                if (tempList.length === 0) {
                    resolve(resultMap);
                }
            };
            var _loop_1 = function(i, length_1) {
                var url = tempList[i];
                var src = AudioSource.get(url);
                if (src == null) {
                    AudioSource.load(url, cache)
                        .then(function(source) {
                            checkLoaded(source);
                        })
                        .catch(function() {
                            checkLoaded(url);
                        });
                } else {
                    checkLoaded(src);
                }
            };
            for (var i = 0, length_1 = tempList.length; i < length_1; i += 1) {
                _loop_1(i, length_1);
            }
        });
    };
    Object.defineProperty(AudioSource.prototype, 'url', {
        /** url */
        get: function() {
            return this._url;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioSource.prototype, 'blob', {
        /** blob数据 */
        get: function() {
            return this._blob;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioSource.prototype, 'base64', {
        /** base64数据 */
        get: function() {
            return this._base64;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioSource.prototype, 'arrayBuffer', {
        /** ArrayBuffer数据 */
        get: function() {
            return this._arrayBuffer;
        },
        enumerable: true,
        configurable: true,
    });
    Object.defineProperty(AudioSource.prototype, 'loadState', {
        /** 是否加载完成 */
        get: function() {
            return this._loadState;
        },
        enumerable: true,
        configurable: true,
    });
    /** 加载 */
    AudioSource.prototype.load = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
            if (_this._loadState === EnumLoadState.LOADED) {
                resolve(_this);
                return;
            }
            if (_this._loadState !== EnumLoadState.LOADING) {
                _this._loadState = EnumLoadState.LOADING;
                _this._loader.load({
                    url: _this._url,
                    method: EnumHttpMethod.GET,
                    responseType: 'blob',
                });
            }
            var completeHandler = function(response) {
                return tslib_1.__awaiter(_this, void 0, void 0, function() {
                    var blob;
                    return tslib_1.__generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                blob = response;
                                this._blob = blob;
                                if (!AudioSource.convertTypes.base64) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.readAsDataURL()];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!AudioSource.convertTypes.arrayBuffer) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.readAsArrayBuffer()];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4:
                                this._loadState = EnumLoadState.LOADED;
                                resolve(this);
                                return [2 /*return*/];
                        }
                    });
                });
            };
            var errorHandler = function() {
                _this._loader.reset();
                _this._loadState = EnumLoadState.ERROR;
                reject();
            };
            _this._loader.once(EnumProcess.END, completeHandler, _this);
            _this._loader.once(EnumProcess.ERROR, errorHandler, _this);
        });
    };
    /** 转化成base64 */
    AudioSource.prototype.readAsDataURL = function() {
        var _this = this;
        return new Promise(function(resolve) {
            if (_this._blob == null || _this._base64 != null) {
                resolve(_this._base64);
                return;
            }
            var stringReader = new FileReader();
            stringReader.readAsDataURL(_this._blob);
            stringReader.onload = function() {
                _this._base64 = stringReader.result;
                resolve(_this._base64);
            };
        });
    };
    /** 转化成ArrayBuffer */
    AudioSource.prototype.readAsArrayBuffer = function() {
        var _this = this;
        return new Promise(function(resolve) {
            if (_this._blob == null || _this._arrayBuffer != null) {
                resolve(_this._arrayBuffer);
                return;
            }
            var bufferReader = new FileReader();
            bufferReader.readAsArrayBuffer(_this._blob);
            bufferReader.onload = function() {
                _this._arrayBuffer = bufferReader.result;
                resolve(_this._arrayBuffer);
            };
        });
    };
    /** 设置加载成功后转化数据类型 */
    AudioSource.convertTypes = {
        base64: true,
        arrayBuffer: false,
    };
    AudioSource._sourceMap = {};
    return AudioSource;
})();
export { AudioSource };
