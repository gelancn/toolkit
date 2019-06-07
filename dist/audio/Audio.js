import { EnumEventLoader } from '../enum/EnumEventLoader';
import { EnumHttpMethod } from '../enum/EnumHttpMethod';
import { HttpLoader } from '../loader/HttpLoader';
import { AudioSourceData } from './AudioSourceData';
import { AudioTagFactory } from './AudioTagFactory';
/** 音频管理器 */
var Audio = /** @class */ (function() {
    function Audio() {
        this._factory = new AudioTagFactory();
        this._sourceMap = {};
        this._loadingMap = {};
        this._playingMap = {};
    }
    /**
     * 设置标签缓存的上限
     * @param value
     */
    Audio.prototype.setTagLimit = function(value) {
        this._factory.setLimit(value);
    };
    /** 获取一个audio标签 */
    Audio.prototype.getTag = function() {
        return this._factory.get();
    };
    /**
     * 回收一个audio标签
     * @param value
     */
    Audio.prototype.recoveryTag = function(value) {
        this._factory.recovery(value);
    };
    /**
     * 设置静音
     * @param value
     */
    Audio.prototype.setMuted = function(value) {
        if (value) {
            this._factory.getTagsList().forEach(function(tag) {
                tag.ext.mutedState = !!tag.muted;
                tag.muted = true;
            });
        } else {
            this._factory.getTagsList().forEach(function(tag) {
                if (tag.ext.mutedState != null) {
                    tag.muted = tag.ext.mutedState;
                    tag.ext.mutedState = null;
                } else {
                    tag.muted = false;
                }
            });
        }
    };
    /**
     * 通过url获取一个音频资源数据
     * @param url
     */
    Audio.prototype.getSource = function(url) {
        return this._sourceMap[url];
    };
    /**
     * 移除一个音频资源数据
     * @param url
     */
    Audio.prototype.removeSource = function(url) {
        delete this._sourceMap[url];
    };
    /**
     * 加载一个音频
     * @param params
     */
    Audio.prototype.load = function(params) {
        var _this = this;
        var url = params.url;
        var data = this._sourceMap[url];
        if (data != null) {
            params.onComplete && params.onComplete(data);
            return;
        }
        var loader = this._loadingMap[url];
        if (loader == null) {
            loader = new HttpLoader();
            this._loadingMap[url] = loader;
            loader.load({
                url: url,
                method: EnumHttpMethod.GET,
                responseType: 'blob',
                withCredentials: true,
                requestHeader: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
        }
        var progressHandler = function(loaded, total) {
            params.onProgress && params.onProgress(loaded, total);
        };
        var completeHandler = function(response) {
            var data = _this._sourceMap[url];
            if (data == null) {
                delete _this._loadingMap[url];
                var blob = response;
                data = new AudioSourceData(url, blob);
                _this._sourceMap[url] = data;
                data.readAsDataURL(function() {
                    params.onComplete && params.onComplete(data);
                });
            } else {
                params.onComplete && params.onComplete(data);
            }
            loader.off(EnumEventLoader.PROGRESS, progressHandler);
        };
        var errorHandler = function() {
            delete _this._loadingMap[url];
            params.onError && params.onError();
        };
        loader.on(EnumEventLoader.PROGRESS, progressHandler);
        loader.once(EnumEventLoader.COMPLETE, completeHandler);
        loader.once(EnumEventLoader.ERROR, errorHandler);
    };
    /**
     * 播放一个音频
     * @param params
     */
    Audio.prototype.play = function(params) {
        var _this = this;
        var url = params.url;
        var tag = this.getTag();
        var sourceData = this.getSource(url);
        var base64 = sourceData && sourceData.base64;
        if (base64 == null) {
            tag.src = url;
        } else {
            tag.src = base64;
        }
        var onProgress = function() {
            if (params.progressHandler != null) {
                var currentTime = tag.currentTime || 0;
                var duration = tag.duration || 0;
                params.progressHandler(currentTime, duration);
            }
        };
        tag.ontimeupdate = function() {
            onProgress();
        };
        tag.onseeked = function() {
            onProgress();
        };
        tag.onerror = function() {
            if (params.errorHandler != null) {
                params.errorHandler();
            }
        };
        tag.onended = function() {
            _this._disposeTag(url);
            if (params.endedHandler != null) {
                params.endedHandler();
            }
        };
        tag.loop = !!params.loop;
        tag.play();
    };
    /**
     * 停止一个音频
     * @param url
     */
    Audio.prototype.stop = function(url) {
        var tag = this._playingMap[url];
        if (tag == null) {
            return;
        }
        tag.pause();
        tag.currentTime = 0;
        this._disposeTag(url);
    };
    Audio.prototype._disposeTag = function(url) {
        var tag = this._playingMap[url];
        if (tag == null) {
            return;
        }
        tag.ontimeupdate = null;
        tag.onseeked = null;
        tag.onerror = null;
        tag.onended = null;
        delete this._playingMap[url];
        this.recoveryTag(tag);
    };
    return Audio;
})();
export { Audio };
//# sourceMappingURL=Audio.js.map
