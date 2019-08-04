/** 音频标签工厂 */
var AudioTagFactory = /** @class */ (function() {
    function AudioTagFactory() {
        var _this = this;
        /** 所有标签的map */
        this._audiosMap = {};
        /** 音频标签池子 */
        this._audiosPool = [];
        /** 被锁定的标签 */
        this._audiosUnLocked = [];
        /** 记录id */
        this._markUid = 0;
        /** 池子容量 */
        this._poolLimit = 30;
        this._onTouch = function() {
            if (_this._audiosPool.length < _this._poolLimit) {
                for (var i = 0, length_1 = _this._poolLimit - _this._audiosPool.length; i < length_1; i += 1) {
                    var tag = _this._createTag();
                    tag.load();
                    tag.unLocked = true;
                    _this._audiosPool.push(tag);
                }
            }
            if (_this._audiosUnLocked.length > 0) {
                for (var i = 0, length_2 = _this._audiosUnLocked.length; i < length_2; i += 1) {
                    var tag = _this._audiosUnLocked[i];
                    if (!tag.unLocked || tag.currentTime <= 0) {
                        tag.load();
                    }
                    tag.unLocked = true;
                    if (!tag.inUse) {
                        _this.recovery(tag);
                    }
                }
                _this._audiosUnLocked.length = 0;
            }
        };
        this.listen();
    }
    /** 获取标签列表 */
    AudioTagFactory.prototype.getAudioList = function() {
        var _this = this;
        var list = [];
        Object.keys(this._audiosMap).forEach(function(key) {
            list.push(_this._audiosMap[key]);
        });
        return list;
    };
    /** 生成一个audio */
    AudioTagFactory.prototype.get = function() {
        var tag;
        if (this._audiosPool.length > 0) {
            tag = this._audiosPool.pop();
        } else {
            tag = this._createTag();
            this._audiosUnLocked.push(tag);
        }
        tag.inUse = true;
        return tag;
    };
    /**
     * 回收一个audio
     * @param value
     */
    AudioTagFactory.prototype.recovery = function(value) {
        var tag = value;
        if (tag.uid == null || this._audiosMap[tag.uid] !== tag) {
            return;
        }
        if (tag.unLocked) {
            if (this._audiosPool.indexOf(tag) >= 0) {
                return;
            }
            this._audiosPool.push(tag);
        } else {
            if (this._audiosUnLocked.indexOf(tag) >= 0) {
                return;
            }
            this._audiosUnLocked.push(tag);
        }
        tag.inUse = false;
    };
    AudioTagFactory.prototype._createTag = function() {
        var tag = document.createElement('audio');
        tag.uid = this._markUid++;
        this._audiosMap[tag.uid] = tag;
        return tag;
    };
    /** 监听 */
    AudioTagFactory.prototype.listen = function() {
        window.addEventListener('mousedown', this._onTouch, false);
        window.addEventListener('touchstart', this._onTouch, false);
    };
    /** 取消监听 */
    AudioTagFactory.prototype.unListen = function() {
        window.removeEventListener('mousedown', this._onTouch, false);
        window.removeEventListener('touchstart', this._onTouch, false);
    };
    return AudioTagFactory;
})();
export { AudioTagFactory };
