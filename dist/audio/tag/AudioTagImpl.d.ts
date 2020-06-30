import { AudioImpl } from "../Audio";
import { AudioTagController } from "./AudioTagController";
/** 音频标签实现 */
export declare class AudioTagImpl implements AudioImpl {
    constructor(limit?: number);
    private _limit;
    getType(): string;
    /** 获取一个音频标签代理 */
    get(): AudioTagController | null;
    /** 回收一个音频标签代理 */
    recovery(value: AudioTagController): void;
    private _muted;
    /** 设置静音 */
    setMuted(value: boolean): void;
    /** 获取静音 */
    getMuted(): boolean;
    /** 所有音频标签 */
    private _audioMap;
    /** 音频池子 */
    private _audioPool;
    /** 解锁音频标签，通常需要在用户主动操作方法中触发此方法 */
    unlock(): void;
}
