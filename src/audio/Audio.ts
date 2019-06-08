import { EnumEventLoader } from '../enum/EnumEventLoader';
import { EnumHttpMethod } from '../enum/EnumHttpMethod';
import { HttpLoader } from '../loader/HttpLoader';
import { AudioSourceData } from './AudioSourceData';
import { AudioTag, AudioTagFactory } from './AudioTagFactory';

/** 音频管理器 */
export class Audio {
    private _factory: AudioTagFactory = new AudioTagFactory();

    /**
     * 设置标签缓存的上限
     * @param value
     */
    public setTagLimit(value: number): void {
        this._factory.setLimit(value);
    }

    /** 获取一个audio标签 */
    public getTag(): HTMLAudioElement {
        return this._factory.get();
    }

    /**
     * 回收一个audio标签
     * @param value
     */
    public recoveryTag(value: HTMLAudioElement): void {
        this._factory.recovery(value);
    }

    /**
     * 设置静音
     * @param value
     */
    public setMuted(value: boolean) {
        if (value) {
            this._factory.getTagsList().forEach((tag: AudioTag) => {
                tag.ext.mutedState = !!tag.muted;
                tag.muted = true;
            });
        } else {
            this._factory.getTagsList().forEach((tag: AudioTag) => {
                if (tag.ext.mutedState != null) {
                    tag.muted = tag.ext.mutedState;
                    tag.ext.mutedState = null;
                } else {
                    tag.muted = false;
                }
            });
        }
    }

    private _sourceMap: { [key: string]: AudioSourceData } = {};

    /**
     * 通过url获取一个音频资源数据
     * @param url
     */
    public getSource(url: string): AudioSourceData {
        return this._sourceMap[url];
    }
    /**
     * 移除一个音频资源数据
     * @param url
     */
    public removeSource(url: string): void {
        delete this._sourceMap[url];
    }

    private _loadingMap: { [key: string]: HttpLoader } = {};

    /**
     * 加载一个音频
     * @param params
     */
    public load(params: LoadAudioParams): void {
        const url: string = params.url;
        const data: AudioSourceData = this._sourceMap[url];
        if (data != null) {
            params.onComplete && params.onComplete(data);
            return;
        }
        let loader: HttpLoader = this._loadingMap[url];
        if (loader == null) {
            loader = new HttpLoader();
            this._loadingMap[url] = loader;
            loader.load({
                url,
                method: EnumHttpMethod.GET,
                responseType: 'blob',
                withCredentials: true,
                requestHeader: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
        }
        const progressHandler = (loaded: number, total: number) => {
            params.onProgress && params.onProgress(loaded, total);
        };
        const completeHandler = (response: unknown) => {
            let data: AudioSourceData = this._sourceMap[url];
            if (data == null) {
                delete this._loadingMap[url];
                const blob: Blob = response as Blob;
                data = new AudioSourceData(url, blob);
                this._sourceMap[url] = data;
                data.readAsDataURL(() => {
                    params.onComplete && params.onComplete(data);
                });
            } else {
                params.onComplete && params.onComplete(data);
            }
            loader.off(EnumEventLoader.PROGRESS, progressHandler);
        };
        const errorHandler = () => {
            delete this._loadingMap[url];
            params.onError && params.onError();
        };
        loader.on(EnumEventLoader.PROGRESS, progressHandler);
        loader.once(EnumEventLoader.COMPLETE, completeHandler);
        loader.once(EnumEventLoader.ERROR, errorHandler);
    }

    private _playingMap: { [key: string]: HTMLAudioElement } = {};

    /**
     * 播放一个音频
     * @param params
     */
    public play(params: PlayAudioParams): void {
        const url: string = params.url;
        if (this._playingMap[url] != null) {
            return;
        }
        const tag: HTMLAudioElement = this.getTag();
        const sourceData: AudioSourceData = this.getSource(url);
        const base64: string = sourceData && sourceData.base64;
        if (base64 == null) {
            tag.src = url;
        } else {
            tag.src = base64;
        }
        const onProgress = () => {
            if (params.progressHandler != null) {
                const currentTime: number = tag.currentTime || 0;
                const duration: number = tag.duration || 0;
                params.progressHandler(currentTime, duration);
            }
        };
        tag.ontimeupdate = () => {
            onProgress();
        };
        tag.onseeked = () => {
            onProgress();
        };
        tag.onerror = () => {
            if (params.errorHandler != null) {
                params.errorHandler();
            }
        };
        tag.onended = () => {
            this._disposeTag(url);
            if (params.endedHandler != null) {
                params.endedHandler();
            }
        };
        tag.loop = !!params.loop;
        tag.play();
        this._playingMap[url] = tag;
    }

    /**
     * 停止一个音频
     * @param url
     */
    public stop(url: string): void {
        const tag: HTMLAudioElement = this._playingMap[url];
        if (tag == null) {
            return;
        }
        tag.pause();
        tag.currentTime = 0;
        this._disposeTag(url);
    }

    private _disposeTag(url: string): void {
        const tag: HTMLAudioElement = this._playingMap[url];
        if (tag == null) {
            return;
        }
        tag.ontimeupdate = null;
        tag.onseeked = null;
        tag.onerror = null;
        tag.onended = null;
        delete this._playingMap[url];
        this.recoveryTag(tag);
    }
}

interface LoadAudioParams {
    url: string;
    onComplete?(data: AudioSourceData): void;
    onProgress?(loaded: number, total: number): void;
    onError?(): void;
}

interface PlayAudioParams {
    url: string;
    loop?: boolean;
    progressHandler?(current: number, duration: number): void;
    endedHandler?(): void;
    errorHandler?(): void;
}
