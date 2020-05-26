import { AudioTagImpl } from "./tag/AudioTagImpl";
/** 音频事件 */
export var EnumAudioEvent;
(function (EnumAudioEvent) {
    EnumAudioEvent["ON_PLAY"] = "ON_PLAY";
    EnumAudioEvent["ON_STOP"] = "ON_STOP";
    EnumAudioEvent["ON_PAUSE"] = "ON_PAUSE";
    EnumAudioEvent["ON_END"] = "ON_END";
    EnumAudioEvent["ON_PROGRESS"] = "ON_PROGRESS";
    EnumAudioEvent["ON_ERROR"] = "ON_ERROR";
    EnumAudioEvent["ON_MUTED_CHANGE"] = "ON_MUTED_CHANGE";
    EnumAudioEvent["ON_VOLUME_CHANGE"] = "ON_VOLUME_CHANGE";
    EnumAudioEvent["ON_LOOP_CHANGE"] = "ON_LOOP_CHANGE";
    EnumAudioEvent["ON_CURRENT_TIME_CHANGE"] = "ON_CURRENT_TIME_CHANGE";
})(EnumAudioEvent || (EnumAudioEvent = {}));
/** 音频 */
var Audio = /** @class */ (function () {
    function Audio(impl) {
        if (impl == null) {
            impl = new AudioTagImpl();
        }
        this._impl = impl;
    }
    /**
     * 设置一个音频实现
     * @param value
     */
    Audio.prototype.setAudioImpl = function (value) {
        if (value != null) {
            this._impl = value;
        }
    };
    /** 设置静音 */
    Audio.prototype.setMuted = function (value) {
        value = !!value;
        this._impl.setMuted(value);
    };
    /** 获取静音 */
    Audio.prototype.getMuted = function () {
        return this._impl.getMuted();
    };
    /** 获取一个音频控制器 */
    Audio.prototype.getController = function () {
        return this._impl.get();
    };
    /** 回收一个音频控制器 */
    Audio.prototype.recoveryController = function (ctrl) {
        this._impl.recovery(ctrl);
    };
    /** 解锁 */
    Audio.prototype.unlock = function () {
        this._impl.unlock();
    };
    return Audio;
}());
export { Audio };
