import { AudioSource } from './AudioSource';
/** 音频管理器 */
export declare class Audio {
    /**
     * 设置静音
     * @param value
     */
    setMuted(value: boolean): void;
    /**
     * 预加载音频
     * @param list
     * @param cache
     */
    load(
        list: Array<string>,
        cache?: boolean,
    ): Promise<{
        [key: string]: AudioSource;
    }>;
    private _playingQueueMap;
    /**
     * 按队列播放声音
     * @param list
     * @param id
     */
    playQueue(list: Array<string>, id?: string): Promise<void>;
    /**
     * 停止播放队列声音
     * @param id
     */
    stopQueue(id: string): void;
}
