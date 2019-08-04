import * as tslib_1 from 'tslib';
import { Singleton } from '../base/Singleton';
import { EnumProcess } from '../enum/EnumProcess';
import { AudioController } from './AudioController';
import { AudioSource } from './AudioSource';
import { AudioTagFactory } from './AudioTagFactory';
/** 音频管理器 */
var Audio = /** @class */ (function() {
    function Audio() {
        this._playingQueueMap = {};
    }
    /**
     * 设置静音
     * @param value
     */
    Audio.prototype.setMuted = function(value) {
        var factory = Singleton.instance.get(AudioTagFactory);
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
     * 预加载音频
     * @param list
     * @param cache
     */
    Audio.prototype.load = function(list, cache) {
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
    /**
     * 按队列播放声音
     * @param list
     * @param id
     */
    Audio.prototype.playQueue = function(list, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function() {
            var controller, _loop_2, i, length_2;
            return tslib_1.__generator(this, function(_a) {
                switch (_a.label) {
                    case 0:
                        controller = new AudioController();
                        if (id != null) {
                            this._playingQueueMap[id] = controller;
                        }
                        _loop_2 = function(i, length_2) {
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
                                            new Promise(function(resolve) {
                                                controller.play(source);
                                                controller.once(EnumProcess.END, resolve);
                                            }),
                                        ];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        (i = 0), (length_2 = list.length);
                        _a.label = 1;
                    case 1:
                        if (!(i < length_2)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_2(i, length_2)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i += 1;
                        return [3 /*break*/, 1];
                    case 4:
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 停止播放队列声音
     * @param id
     */
    Audio.prototype.stopQueue = function(id) {
        var controller = this._playingQueueMap[id];
        if (controller == null) {
            return;
        }
        delete this._playingQueueMap[id];
        controller.offByType(EnumProcess.END);
        controller.stop();
    };
    return Audio;
})();
export { Audio };
