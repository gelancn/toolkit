import { AudioTagController } from "./AudioTagController";
/** 音频标签实现 */
var AudioTagImpl = /** @class */ (function () {
    function AudioTagImpl(limit) {
        this._limit = 25;
        this._muted = false;
        /** 所有音频标签 */
        this._audioMap = {};
        this._unlocked = false;
        if (limit != null && limit > 10) {
            this._limit = limit;
        }
    }
    AudioTagImpl.prototype.getType = function () {
        return "tag";
    };
    /** 获取一个音频标签代理 */
    AudioTagImpl.prototype.get = function () {
        if (!this._unlocked || this._audioPool.length === 0) {
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
        if (!this._unlocked) {
            return;
        }
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
        if (this._unlocked) {
            return;
        }
        this._audioPool = [];
        for (var i = 0; i < this._limit; i += 1) {
            var tag = document.createElement("audio");
            tag.load();
            var ctrl = new AudioTagController(tag, i);
            this._audioPool.push(ctrl);
            this._audioMap[i] = ctrl;
        }
        this._unlocked = true;
    };
    return AudioTagImpl;
}());
export { AudioTagImpl };
