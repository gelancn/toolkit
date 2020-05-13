export class AudioTagFactory {
    /** 音频标签唯一id */
    private _uidCount = 0;

    /** 音频标签池子 */
    private _audioPool: Array<HTMLAudio> = [];
    /** 所有音频标签 */
    private _audioList: Array<HTMLAudio> = [];

    private _muted = false;
    /**
     * 设置静音
     * @param value 
     */
    setMute(value: boolean): void {
        value = !!value;
        if (this._muted === value) {
            return;
        }
        this._muted = value;
        this._audioList.forEach((audio: HTMLAudio) => {
            if (value) {
                if (audio.muted) {
                    audio.cacheMuted = true;
                } else {
                    audio.muted = true;
                    audio.cacheMuted = false;
                }
            } else {
                if (audio.cacheMuted == null) {
                    audio.muted = false;
                } else {
                    audio.muted = audio.cacheMuted;
                    audio.cacheMuted = null;
                }
            }
        });
    }

    private _limit = 30;
    /** 设置池子上限 */
    set limit(value: number) {
        if (value < 10) {
            return;
        }
        this._limit = value;
    }
    /** 获取池子上限 */
    get limit(): number {
        return this._limit;
    }

    /** 解锁 */
    unlock(): void {
        const audiosPool = this._audioPool;
        const limit = this._limit;
        if (audiosPool.length >= limit) {
            return;
        }
        for (let i = 0, length = limit - audiosPool.length; i < length; i += 1) {
            const tag = document.createElement("audio") as HTMLAudio;
            tag.uid = this._uidCount;
            this._audioList[tag.uid] = tag;
            this._uidCount += 1;
            tag.load();
            tag.inUse = false;
            audiosPool.push(tag);
        }
    }

    /** 获取一个 HTMLAudioElement */
    get(): HTMLAudioElement | null {
        const tag = this._audioPool.pop();
        if (tag == null) {
            return null;
        }
        tag.inUse = true;
        return tag;
    }

    /**
     * 回收一个 HTMLAudioElement
     * @param value
     */
    recovery(value: HTMLAudioElement): void {
        const tag = value as HTMLAudio;
        if (tag.uid == null && tag === this._audioList[tag.uid]) {
            return;
        }
        tag.inUse = false;
        this._audioPool.push(tag);
    }
}

interface HTMLAudio extends HTMLAudioElement {
    uid: number;
    inUse: boolean;
    cacheMuted: boolean | null;
}
