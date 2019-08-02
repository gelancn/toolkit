import { AudioTag, HTMLAudioFactory } from './HTMLAudioFactory';

/** 音频管理器 */
export class Audio {
    private _factory: HTMLAudioFactory = new HTMLAudioFactory();
    /** 获取音频工厂，尽量不要使用 */
    public get factory(): HTMLAudioFactory {
        return this._factory;
    }

    /**
     * 设置静音
     * @param value
     */
    public setMuted(value: boolean) {
        if (value) {
            this._factory.getAudioList().forEach((tag: AudioTag) => {
                tag.cacheMuted = tag.muted;
                tag.muted = true;
            });
        } else {
            this._factory.getAudioList().forEach((tag: AudioTag) => {
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
