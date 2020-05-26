import { AudioImpl } from "../Audio";
import { AudioTagController } from "./AudioTagController";

/** 音频标签实现 */
export class AudioTagImpl implements AudioImpl {
    constructor(limit?: number) {
        if (limit != null && limit > 10) {
            this._limit = limit;
        }
    }

    private _limit = 25;

    getType(): string {
        return "tag";
    }

    /** 获取一个音频标签代理 */
    get(): AudioTagController | null {
        if (!this._unlocked || this._audioPool.length === 0) {
            return null;
        }
        return this._audioPool.pop() as AudioTagController;
    }

    /** 回收一个音频标签代理 */
    recovery(value: AudioTagController): void {
        if (!(value instanceof AudioTagController)) {
            return;
        }
        value.reset();
        value.offAll();
        this._audioPool.push(value);
    }

    private _muted = false;
    /** 设置静音 */
    setMuted(value: boolean) {
        if (!this._unlocked) {
            return;
        }
        value = !!value;
        this._muted = value;
        Object.keys(this._audioMap).forEach((v: string) => {
            const ctrl: AudioTagController = this._audioMap[v];
            ctrl.muted = value;
        });
    }
    /** 获取静音 */
    getMuted(): boolean {
        return this._muted;
    }

    /** 所有音频标签 */
    private _audioMap: { [key: string]: AudioTagController } = {};
    /** 音频池子 */
    private _audioPool!: Array<AudioTagController>;

    private _unlocked = false;
    /** 解锁音频标签，通常需要在用户主动操作方法中触发此方法 */
    unlock(): void {
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
