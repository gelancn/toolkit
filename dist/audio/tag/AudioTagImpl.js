import { AudioTagController } from "./AudioTagController";
/** 音频标签实现 */
var AudioTagImpl = /** @class */ (function () {
    function AudioTagImpl(limit) {
        this._limit = 25;
        this._muted = false;
        /** 所有音频标签 */
        this._audioMap = {};
        /** 音频池子 */
        this._audioPool = [];
        if (limit != null && limit > 10) {
            this._limit = limit;
        }
    }
    AudioTagImpl.prototype.getType = function () {
        return "tag";
    };
    /** 获取一个音频标签代理 */
    AudioTagImpl.prototype.get = function () {
        if (this._audioPool.length === 0) {
            return null;
        }
        return this._audioPool.pop();
    };
    /** 回收一个音频标签代理 */
    AudioTagImpl.prototype.recovery = function (value) {
        if (!(value instanceof AudioTagController)) {
            return;
        }
        value.reset();
        value.offAll();
        this._audioPool.push(value);
    };
    /** 设置静音 */
    AudioTagImpl.prototype.setMuted = function (value) {
        var _this = this;
        value = !!value;
        this._muted = value;
        Object.keys(this._audioMap).forEach(function (v) {
            var ctrl = _this._audioMap[v];
            ctrl.muted = value;
        });
    };
    /** 获取静音 */
    AudioTagImpl.prototype.getMuted = function () {
        return this._muted;
    };
    /** 解锁音频标签，通常需要在用户主动操作方法中触发此方法 */
    AudioTagImpl.prototype.unlock = function () {
        var limit = this._limit;
        var length = this._audioPool.length;
        if (length >= limit) {
            return;
        }
        for (var i = 0; i < limit - length; i += 1) {
            var tag = document.createElement("audio");
            tag.load();
            var ctrl = new AudioTagController(tag, i);
            this._audioPool.push(ctrl);
            this._audioMap[i] = ctrl;
        }
    };
    return AudioTagImpl;
}());
export { AudioTagImpl };
