import { Singleton } from '../base/Singleton';
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
}
