export class HTMLAudioFactory {
    constructor() {
        this._onTouch = () => {
            if (this._audiosPool.length < this._poolLimit) {
                for (let i: number = 0, length: number = this._poolLimit - this._audiosPool.length; i < length; i += 1) {
                    const tag: AudioTag = this._createTag();
                    tag.load();
                    tag.unLocked = true;
                    this._audiosPool.push(tag);
                }
            }
            if (this._audiosUnLocked.length > 0) {
                for (let i: number = 0, length: number = this._audiosUnLocked.length; i < length; i += 1) {
                    const tag: AudioTag = this._audiosUnLocked[i];
                    if (!tag.unLocked || tag.currentTime <= 0) {
                        tag.load();
                    }
                    tag.unLocked = true;
                    if (!tag.inUse) {
                        this.recovery(tag);
                    }
                }
                this._audiosUnLocked.length = 0;
            }
        };
        this.listen();
    }

    /** 所有标签的map */
    private _audiosMap: { [key: string]: AudioTag } = {};
    /** 获取标签列表 */
    public getAudioList(): Array<HTMLAudioElement> {
        const list: Array<AudioTag> = [];
        Object.keys(this._audiosMap).forEach((key: string) => {
            list.push(this._audiosMap[key]);
        });
        return list;
    }

    /** 音频标签池子 */
    private _audiosPool: Array<AudioTag> = [];
    /** 被锁定的标签 */
    private _audiosUnLocked: Array<AudioTag> = [];

    /** 记录id */
    private _markUid: number = 0;
    /** 池子容量 */
    private _poolLimit: number = 30;

    /** 生成一个audio */
    public get(): HTMLAudioElement {
        let tag: AudioTag;
        if (this._audiosPool.length > 0) {
            tag = this._audiosPool.pop();
        } else {
            tag = this._createTag();
            this._audiosUnLocked.push(tag);
        }
        tag.inUse = true;
        return tag;
    }

    /**
     * 回收一个audio
     * @param value
     */
    public recovery(value: HTMLAudioElement): void {
        const tag: AudioTag = value as AudioTag;
        if (tag.uid == null || this._audiosMap[tag.uid] !== tag) {
            return;
        }
        if (tag.unLocked) {
            if (this._audiosPool.indexOf(tag) >= 0) {
                return;
            }
            this._audiosPool.push(tag);
        } else {
            if (this._audiosUnLocked.indexOf(tag) >= 0) {
                return;
            }
            this._audiosUnLocked.push(tag);
        }
        tag.inUse = false;
    }

    private _createTag(): AudioTag {
        const tag: AudioTag = document.createElement('audio') as AudioTag;
        tag.uid = this._markUid++;
        this._audiosMap[tag.uid] = tag;
        return tag;
    }

    private _onTouch: (evt: MouseEvent | TouchEvent) => void;

    public listen(): void {
        window.addEventListener('mousedown', this._onTouch, false);
        window.addEventListener('touchstart', this._onTouch, false);
    }

    public unListen(): void {
        window.removeEventListener('mousedown', this._onTouch, false);
        window.removeEventListener('touchstart', this._onTouch, false);
    }
}

export interface AudioTag extends HTMLAudioElement {
    uid: number;
    unLocked: boolean;
    inUse: boolean;
    cacheMuted: boolean;
}
