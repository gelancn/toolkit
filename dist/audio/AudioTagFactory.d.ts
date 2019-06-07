/** 音频标签工厂 */
export declare class AudioTagFactory {
    constructor();
    /** 所有标签的map */
    private _tagsMap;
    /** 获取标签列表 */
    getTagsList(): Array<AudioTag>;
    /** 记录id */
    private _mark;
    /** 音频标签池子 */
    private _tagsPool;
    /** 被锁定的标签 */
    private _tagsLocked;
    private _createTag;
    private _limit;
    /** 设置限制数量 */
    setLimit(value: number): void;
    /** 获取限制数量 */
    getLimit(): number;
    /** 生成一个audio */
    get(): AudioTag;
    /**
     * 回收一个audio,回收前请移除各种事件监听让audio标签回到初始状态
     * @param value
     */
    recovery(value: HTMLAudioElement): void;
    private _onTouch;
    /** 开启解锁监听 */
    listen(): void;
    /** 关闭解锁监听 */
    unlisten(): void;
}
export interface AudioTag extends HTMLAudioElement {
    ext: {
        /** id */
        id: number;
        /** 是否启用 */
        enabled: boolean;
        /** 是否使用中 */
        inUse: boolean;
        /** 记录静音状态 */
        mutedState?: boolean;
    };
}
