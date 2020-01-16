/** 音频标签工厂 */
export declare class AudioTagFactory {
    constructor();
    onAvailabled: () => void;
    private _available;
    /** 已经触摸解锁 可用 */
    readonly available: boolean;
    /** 所有标签的map */
    private _audiosMap;
    /** 获取标签列表 */
    getAudioList(): Array<HTMLAudioElement>;
    /** 音频标签池子 */
    private _audiosPool;
    /** 被锁定的标签 */
    private _audiosUnLocked;
    /** 记录id */
    private _markUid;
    /** 池子容量 */
    private _poolLimit;
    /** 生成一个audio */
    get(): HTMLAudioElement;
    /**
     * 回收一个audio
     * @param value
     */
    recovery(value: HTMLAudioElement): void;
    private _createTag;
    private _onTouch;
    /** 监听 */
    listen(): void;
    /** 取消监听 */
    unListen(): void;
}
export interface AudioTag extends HTMLAudioElement {
    uid: number;
    unLocked: boolean;
    inUse: boolean;
    cacheMuted: boolean;
}
