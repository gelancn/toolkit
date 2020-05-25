import { AudioTagController } from "./AudioTagController";
/** 音频标签实现 */
export class AudioTagImpl {
    constructor(limit) {
        this._limit = 25;
        this._muted = false;
        /** 所有音频标签 */
        this._audioMap = {};
        this._unlocked = false;
        if (limit != null && limit > 10) {
            this._limit = limit;
        }
    }
    /** 获取一个音频标签代理 */
    get() {
        if (!this._unlocked || this._audioPool.length === 0) {
            return null;
        }
        return this._audioPool.pop();
    }
    /** 回收一个音频标签代理 */
    recovery(value) {
        if (!(value instanceof AudioTagController)) {
            return;
        }
        value.reset();
        value.offAll();
        this._audioPool.push(value);
    }
    /** 设置静音 */
    setMuted(value) {
        if (!this._unlocked) {
            return;
        }
        value = !!value;
        this._muted = value;
        Object.keys(this._audioMap).forEach((v) => {
            const ctrl = this._audioMap[v];
            ctrl.muted = value;
        });
    }
    /** 获取静音 */
    getMuted() {
        return this._muted;
    }
    /** 解锁音频标签，通常需要在用户主动操作方法中触发此方法 */
    unlock() {
        if (this._unlocked) {
            return;
        }
        this._audioPool = [];
        for (let i = 0; i < this._limit; i += 1) {
            const tag = document.createElement("audio");
            tag.load();
            const ctrl = new AudioTagController(tag, i);
            this._audioPool.push(ctrl);
            this._audioMap[i] = ctrl;
        }
        this._unlocked = true;
    }
}
