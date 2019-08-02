import { Singleton } from '../base/Singleton';
import { AudioController } from './AudioController';
import { AudioTag, HTMLAudioFactory } from './HTMLAudioFactory';

/** 音频管理器 */
export class Audio {
    /**
     * 设置静音
     * @param value
     */
    public setMuted(value: boolean) {
        const factory: HTMLAudioFactory = Singleton.instance.get(HTMLAudioFactory);
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
}
