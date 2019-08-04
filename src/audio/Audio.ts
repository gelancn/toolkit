import { Singleton } from '../base/Singleton';
import { EnumProcess } from '../enum/EnumProcess';
import { AudioController } from './AudioController';
import { AudioSource } from './AudioSource';
import { AudioTag, AudioTagFactory } from './AudioTagFactory';

/** 音频管理器 */
export class Audio {
    /**
     * 设置静音
     * @param value
     */
    public setMuted(value: boolean) {
        const factory: AudioTagFactory = Singleton.instance.get(AudioTagFactory);
        const audioList: Array<AudioTag> = factory.getAudioList() as Array<AudioTag>;
        if (value) {
            audioList.forEach((tag: AudioTag) => {
                tag.cacheMuted = tag.muted;
                tag.muted = true;
            });
        } else {
            audioList.forEach((tag: AudioTag) => {
                if (tag.cacheMuted != null) {
                    tag.muted = tag.cacheMuted;
                    tag.cacheMuted = null;
                } else {
                    tag.muted = false;
                }
            });
        }
    }

    /**
     * 预加载音频
     * @param list
     * @param cache
     */
    public load(list: Array<string>, cache?: boolean): Promise<{ [key: string]: AudioSource }> {
        return new Promise((resolve: (sourceMap: { [key: string]: AudioSource }) => void) => {
            const tempList: Array<string> = list.concat();
            const resultMap: { [key: string]: AudioSource } = {};
            const checkLoaded = (source: AudioSource | string) => {
                let url: string;
                if (source instanceof AudioSource) {
                    url = source.url;
                    resultMap[source.url] = source;
                } else {
                    url = source;
                    resultMap[source] = null;
                }
                const index: number = tempList.indexOf(url);
                if (index >= 0) {
                    tempList.splice(index, 1);
                }
                if (tempList.length === 0) {
                    resolve(resultMap);
                }
            };
            for (let i: number = 0, length: number = tempList.length; i < length; i += 1) {
                const url: string = tempList[i];
                const src: AudioSource = AudioSource.get(url);
                if (src == null) {
                    AudioSource.load(url, cache)
                        .then((source: AudioSource) => {
                            checkLoaded(source);
                        })
                        .catch(() => {
                            checkLoaded(url);
                        });
                } else {
                    checkLoaded(src);
                }
            }
        });
    }

    private _playingQueueMap: { [key: string]: AudioController } = {};
    /**
     * 按队列播放声音
     * @param list
     * @param id
     */
    public async playQueue(list: Array<string>, id?: string): Promise<void> {
        const controller: AudioController = new AudioController();
        if (id != null) {
            this._playingQueueMap[id] = controller;
        }
        for (let i: number = 0, length: number = list.length; i < length; i += 1) {
            const url: string = list[i];
            let source: string;
            const audioSource: AudioSource = AudioSource.get(url);
            if (audioSource == null) {
                source = url;
            } else {
                source = audioSource.base64;
            }
            await new Promise((resolve: () => void) => {
                controller.play(source);
                controller.once(EnumProcess.END, resolve);
            });
        }
    }

    /**
     * 停止播放队列声音
     * @param id
     */
    public stopQueue(id: string): void {
        const controller: AudioController = this._playingQueueMap[id];
        if (controller == null) {
            return;
        }
        delete this._playingQueueMap[id];
        controller.offByType(EnumProcess.END);
        controller.stop();
    }
}
