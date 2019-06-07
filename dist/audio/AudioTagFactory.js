import { EnumType } from '../enum/EnumType';
/** 音频标签工厂 */
var AudioTagFactory = /** @class */ (function() {
    function AudioTagFactory() {
        var _this = this;
        /** 所有标签的map */
        this._tagsMap = {};
        /** 记录id */
        this._mark = 0;
        /** 音频标签池子 */
        this._tagsPool = [];
        /** 被锁定的标签 */
        this._tagsLocked = [];
        this._limit = 30;
        this._onTouch = function() {
            if (_this._tagsPool.length >= _this._limit) {
                return;
            }
            var count = _this._limit - _this._tagsPool.length;
            for (var i = 0; i < count; i += 1) {
                var tag = _this._createTag(true);
                _this._tagsPool.push(tag);
            }
            for (
                var i = 0, length_1 = _this._tagsLocked.length;
                i < length_1;
                i += 1
            ) {
                var tag = _this._tagsLocked[i];
                var ext = tag.ext;
                if (ext.enabled) {
                    continue;
                }
                ext.enabled = true;
                if (tag.currentTime <= 0) {
                    tag.load();
                }
                if (!ext.inUse) {
                    _this.recovery(tag);
                }
            }
            _this._tagsLocked.length = 0;
        };
        this.listen();
    }
    /** 获取标签列表 */
    AudioTagFactory.prototype.getTagsList = function() {
        var _this = this;
        var list = [];
        Object.keys(this._tagsMap).forEach(function(key) {
            list.push(_this._tagsMap[key]);
        });
        return list;
    };
    AudioTagFactory.prototype._createTag = function(doLoad) {
        var tag = document.createElement('audio');
        var id = this._mark++;
        var ext = {
            id: id,
            enabled: false,
            inUse: false,
        };
        tag.ext = ext;
        ext.enabled = !!doLoad;
        if (doLoad) {
            tag.load();
        }
        this._tagsMap[ext.id] = tag;
        return tag;
    };
    /** 设置限制数量 */
    AudioTagFactory.prototype.setLimit = function(value) {
        if (typeof value === EnumType.NUMBER && value > 0) {
            this._limit = value;
        }
    };
    /** 获取限制数量 */
    AudioTagFactory.prototype.getLimit = function() {
        return this._limit;
    };
    /** 生成一个audio */
    AudioTagFactory.prototype.get = function() {
        var tag;
        if (this._tagsPool.length > 0) {
            tag = this._tagsPool.pop();
        } else {
            tag = this._createTag(false);
            this._tagsLocked.push(tag);
        }
        var ext = tag.ext;
        ext.inUse = true;
        return tag;
    };
    /**
     * 回收一个audio,回收前请移除各种事件监听让audio标签回到初始状态
     * @param value
     */
    AudioTagFactory.prototype.recovery = function(value) {
        var tag = value;
        var ext = tag.ext;
        if (ext == null || this._tagsMap[ext.id] !== tag) {
            return;
        }
        if (ext.enabled) {
            if (this._tagsPool.indexOf(tag) >= 0) {
                return;
            }
            this._tagsPool.push(tag);
        } else {
            if (this._tagsLocked.indexOf(tag) >= 0) {
                return;
            }
            this._tagsLocked.push(tag);
        }
        ext.inUse = false;
    };
    /** 开启解锁监听 */
    AudioTagFactory.prototype.listen = function() {
        window.addEventListener('mousedown', this._onTouch, false);
        window.addEventListener('touchstart', this._onTouch, false);
    };
    /** 关闭解锁监听 */
    AudioTagFactory.prototype.unlisten = function() {
        window.removeEventListener('mousedown', this._onTouch, false);
        window.removeEventListener('touchstart', this._onTouch, false);
    };
    return AudioTagFactory;
})();
export { AudioTagFactory };
//# sourceMappingURL=AudioTagFactory.js.map
