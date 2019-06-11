import { EnumType } from '../enum/EnumType';

/** 音频标签工厂 */
export class AudioTagFactory {
    constructor() {
        this._onTouch = () => {
            if (this._tagsPool.length >= this._limit) {
                return;
            }
            const count: number = this._limit - this._tagsPool.length;
            for (let i: number = 0; i < count; i += 1) {
                const tag: AudioTag = this._createTag(true);
                this._tagsPool.push(tag);
            }
            for (let i: number = 0, length: number = this._tagsLocked.length; i < length; i += 1) {
                const tag: AudioTag = this._tagsLocked[i];
                const ext = tag.ext;
                if (ext.enabled) {
                    continue;
                }
                ext.enabled = true;
                if (tag.currentTime <= 0) {
                    tag.load();
                }
                if (!ext.inUse) {
                    this.recovery(tag);
                }
            }
            this._tagsLocked.length = 0;
        };
        this.listen();
    }

    /** 所有标签的map */
    private _tagsMap: { [key: string]: AudioTag } = {};
    /** 获取标签列表 */
    public getTagsList(): Array<AudioTag> {
        const list: Array<AudioTag> = [];
        Object.keys(this._tagsMap).forEach((key: string) => {
            list.push(this._tagsMap[key]);
        });
        return list;
    }
    /** 记录id */
    private _mark: number = 0;
    /** 音频标签池子 */
    private _tagsPool: Array<AudioTag> = [];
    /** 被锁定的标签 */
    private _tagsLocked: Array<AudioTag> = [];

    private _createTag(doLoad: boolean): AudioTag {
        const tag: AudioTag = document.createElement('audio') as AudioTag;
        const id: number = this._mark++;
        const ext = {
            id,
            enabled: false,
            inUse: false,
        };
        tag.ext = ext;
        ext.enabled = !!doLoad;
        if (doLoad) {
            tag.load();
        }
        this._tagsMap[ext.id] = tag;
        return tag;
    }

    private _limit: number = 30;
    /** 设置限制数量 */
    public setLimit(value: number) {
        if (typeof value === EnumType.NUMBER && value > 0) {
            this._limit = value;
        }
    }
    /** 获取限制数量 */
    public getLimit(): number {
        return this._limit;
    }

    /** 生成一个audio */
    public get(): AudioTag {
        let tag: AudioTag;
        if (this._tagsPool.length > 0) {
            tag = this._tagsPool.pop();
        } else {
            tag = this._createTag(false);
            this._tagsLocked.push(tag);
        }
        const ext = tag.ext;
        ext.inUse = true;
        return tag;
    }

    /**
     * 回收一个audio,回收前请移除各种事件监听让audio标签回到初始状态
     * @param value
     */
    public recovery(value: HTMLAudioElement): void {
        const tag: AudioTag = value as AudioTag;
        const ext = tag.ext;
        if (ext == null || this._tagsMap[ext.id] !== tag) {
            return;
        }
        if (ext.enabled) {
            if (this._tagsPool.indexOf(tag) >= 0) {
                return;
            }
            this._tagsPool.push(tag);
        } else {
            if (this._tagsLocked.indexOf(tag) >= 0) {
                return;
            }
            this._tagsLocked.push(tag);
        }
        ext.inUse = false;
    }

    private _onTouch: (evt: MouseEvent) => void;

    /** 开启解锁监听 */
    public listen(): void {
        window.addEventListener('mousedown', this._onTouch, false);
        window.addEventListener('touchstart', this._onTouch, false);
    }

    /** 关闭解锁监听 */
    public unlisten(): void {
        window.removeEventListener('mousedown', this._onTouch, false);
        window.removeEventListener('touchstart', this._onTouch, false);
    }
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
