import { Emitter } from "./Emitter";
import { Loader } from "./Loader";
import { Singleton } from "./Singleton";

/** 音频资源数据 */
class AudioResData extends Emitter {
    static UNLOAD = "unload";
    static LOADING = "loading";
    static LOADED = "loaded";
    static ERROR = "error";

    constructor(url: string) {
        super();
        this.url = url;
    }
    readonly url: string;
    base64?: string;
    blob?: Blob;
    arrayBuffer?: ArrayBuffer;
    state = AudioResData.UNLOAD;
}

/** 音频资源管理器 */
export class AudioRes {
    /** 设置加载成功后转化数据类型 */
    convertTypes: { base64: boolean; arrayBuffer: boolean } = {
        base64: true,
        arrayBuffer: false,
    };

    private _resourceMap: { [key: string]: AudioResData } = {};
    /**
     * 获取音频资源
     * @param url
     */
    get(url: string): AudioResData | null {
        const res = this._resourceMap[url];
        if (res != null && res.state === AudioResData.LOADED) {
            return res;
        } else {
            return null;
        }
    }

    /**
     * 加载音频数据
     * @param url
     * @param cache
     * @param onProgress
     */
    load(url: string, cache?: boolean, onProgress?: (current: number, total: number) => void): Promise<AudioResData> {
        return new Promise((resolve: Function, reject: Function) => {
            if (url == null) {
                reject();
            }
            const resourceMap: { [key: string]: AudioResData } = this._resourceMap;
            let res: AudioResData = resourceMap[url];
            if (res == null) {
                res = new AudioResData(url);
                resourceMap[url] = res;
            }
            switch (res.state) {
                case AudioResData.LOADED:
                    resolve(res);
                    break;
                case AudioResData.UNLOAD:
                case AudioResData.ERROR:
                    res.on(AudioResData.LOADED, resolve);
                    res.on(AudioResData.ERROR, reject);
                    onProgress && res.on(AudioResData.LOADING, onProgress);
                    res.state = AudioResData.LOADING;
                    const onEnd = async (response: unknown) => {
                        const blob: Blob = response as Blob;
                        res.blob = blob;
                        const needBase64: boolean = this.convertTypes.base64;
                        const needArrayBuffer: boolean = this.convertTypes.arrayBuffer;
                        if (needBase64) {
                            await this.readAsDataURL(blob)
                                .then((data: string) => {
                                    res.base64 = data;
                                })
                                .catch((evt: Event) => {
                                    return;
                                });
                        }
                        if (needArrayBuffer) {
                            await this.readAsArrayBuffer(blob)
                                .then((data: ArrayBuffer) => {
                                    res.arrayBuffer = data;
                                })
                                .catch((evt: Event) => {
                                    return;
                                });
                        }
                        res.state = AudioResData.LOADED;
                        if (!cache) {
                            delete resourceMap[res.url];
                        }
                        res.emit(AudioResData.LOADED, res);
                        res.offAll();
                    };
                    const onError = (evt: unknown) => {
                        res.state = AudioResData.ERROR;
                        if (!cache) {
                            delete resourceMap[res.url];
                        }
                        res.emit(AudioResData.ERROR, evt);
                    };
                    Loader.sendHttpRequest({
                        url: url,
                        method: "GET",
                        responseType: "blob",
                        onProgress: (current: number, total: number) => {
                            res.emit(AudioResData.LOADING, current, total);
                        },
                    })
                        .then(onEnd)
                        .catch(onError);
                    break;
                case AudioResData.LOADING:
                    res.on(AudioResData.LOADED, resolve);
                    res.on(AudioResData.ERROR, reject);
                    onProgress && res.on(AudioResData.LOADING, onProgress);
                    break;
                default:
            }
        });
    }

    /**
     * 转化成base64
     * @param blob
     */
    readAsDataURL(blob: Blob): Promise<string> {
        return new Promise((resolve: (base64: string) => void, reject: (evt: Event) => void) => {
            const stringReader: FileReader = new FileReader();
            stringReader.readAsDataURL(blob);
            stringReader.onload = () => {
                const base64 = stringReader.result as string;
                resolve(base64);
            };
            stringReader.onerror = (evt: Event) => {
                reject(evt);
            };
        });
    }

    /**
     * 转化成ArrayBuffer
     * @param blob
     */
    readAsArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
        return new Promise((resolve: (arrayBuffer: ArrayBuffer) => void, reject: (evt: Event) => void) => {
            const bufferReader: FileReader = new FileReader();
            bufferReader.readAsArrayBuffer(blob);
            bufferReader.onload = () => {
                const arrayBuffer = bufferReader.result as ArrayBuffer;
                resolve(arrayBuffer);
            };
            bufferReader.onerror = (evt: Event) => {
                reject(evt);
            };
        });
    }
}

/** 音频标签 */
export class AudioTags {
    private _tags: Array<HTMLAudioElement> = [];
    /** 获取一个标签 */
    get(): HTMLAudioElement {
        return this._tags.pop() || document.createElement("audio");
    }
    /** 回收一个标签 */
    recovery(value: HTMLAudioElement): void {
        if (!value.dataset.uid) {
            return;
        }
        this._tags.push(value);
    }
    limit = 12;
    /** 解锁 */
    unlock(): void {
        if (this._tags.length * 2 >= this.limit) {
            return;
        }
        const length = this.limit - this._tags.length;
        for (let i = 0; i < length; i += 1) {
            const el = document.createElement("audio");
            el.dataset.uid = i.toString();
            el.load();
            this._tags.push(el);
        }
    }
}

/** 音频控制器 */
export class AudioController extends Emitter {
    static ON_PLAY = "onPlay";
    static ON_STOP = "onStop";
    static ON_END = "onEnd";
    static ON_PROGRESS = "onProgress";
    static ON_ERROR = "onError";

    private _el: HTMLAudioElement | null = null;
    private _playing = false;

    private _loop = false;
    /** 循环播放 */
    get loop(): boolean {
        return this._loop;
    }
    /** 循环播放 */
    set loop(value: boolean) {
        this._loop = value;
        const el = this._getTag();
        el.loop = this._loop;
    }

    private _volume = 1;
    /** 音量 */
    get volume(): number {
        return this._volume;
    }
    /** 音量 */
    set volume(value: number) {
        this._volume = value;
        const el = this._getTag();
        el.volume = this._volume;
    }

    private _muted = false;
    /** 是否静音 */
    get muted(): boolean {
        return this._muted;
    }
    /** 是否静音 */
    set muted(value: boolean) {
        this._muted = value;
        const el = this._getTag();
        el.muted = this._muted;
    }

    private _currentTime = 0;
    /** 当前播放进度 */
    get currentTime(): number {
        return this._currentTime;
    }
    /** 当前播放进度 */
    set currentTime(value: number) {
        this._currentTime = value;
        const el = this._getTag();
        el.currentTime = this._currentTime;
    }

    /** 播放 */
    play(source?: string): void {
        const el = this._getTag();
        if (!source && !el.src) {
            return;
        }
        source && (el.src = source);
        el.play().catch(() => {
            // 音频标签实现会有预加载过程，预加载期间更换src后再执行play会导致报错，捕获后不影响正常功能
        });
    }

    /** 暂停 */
    stop(): void {
        const el = this._getTag();
        el.pause();
    }

    private _getTag(): HTMLAudioElement {
        if (this._el) {
            return this._el;
        }
        const el = Singleton.get(AudioTags).get();
        this._el = el;
        el.loop = this.loop;
        el.volume = this.volume;
        el.muted = this.muted;
        el.onplay = (evt: Event) => {
            this._playing = true;
            this.emit(AudioController.ON_PLAY);
        };
        el.onpause = (evt: Event) => {
            this._playing = false;
            const el = evt.target as HTMLAudioElement;
            if (el.duration && el.currentTime === el.duration) {
                return;
            }
            this.emit(AudioController.ON_STOP);
            this._recoveryTag();
        };
        el.ontimeupdate = (evt: Event) => {
            const el = evt.target as HTMLAudioElement;
            this._currentTime = el.currentTime;
            if (!this._playing) {
                return;
            }
            this.emit(AudioController.ON_PROGRESS, el.currentTime, el.duration || 0);
        };
        el.onended = (evt: Event) => {
            this._playing = false;
            this.emit(AudioController.ON_END);
            this._recoveryTag();
        };
        el.onerror = (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error) => {
            this.emit(AudioController.ON_ERROR, { event, source, lineno, colno, error });
            this._recoveryTag();
        };
        return this._el;
    }

    private _recoveryTag(): void {
        this._currentTime = 0;
        const el = this._el;
        this._el = null;
        if (el) {
            el.pause();
            el.muted = false;
            el.volume = 1;
            el.loop = false;
            el.currentTime = 0;
            el.onplaying = null;
            el.onpause = null;
            el.ontimeupdate = null;
            el.onended = null;
            el.onerror = null;
            Singleton.get(AudioTags).recovery(el);
        }
    }
}

/** 音频 */
export class Audio {
    /** 音频标签 */
    tags = Singleton.get(AudioTags);
    /** 音频资源 */
    res = Singleton.get(AudioRes);

    private _playingCtrl: { [key: string]: AudioController } = {};
    /**
     * 播放一个音频
     * @param url
     */
    play(url: string): Promise<void> {
        return new Promise((resolve: Function, reject: Function) => {
            let ctrl = this._playingCtrl[url];
            let playing = false;
            if (ctrl) {
                playing = true;
            } else {
                ctrl = new AudioController();
                this._playingCtrl[url] = ctrl;
            }
            if (!playing) {
                const source = this.res.get(url);
                if (source) {
                    ctrl.play(source.base64);
                } else {
                    ctrl.play(url);
                }
            }
            ctrl.on(AudioController.ON_END, () => {
                delete this._playingCtrl[url];
                ctrl.offAll();
                resolve();
            });
            const onError = () => {
                delete this._playingCtrl[url];
                ctrl.offAll();
                reject();
            };
            ctrl.on(AudioController.ON_STOP, onError);
            ctrl.on(AudioController.ON_ERROR, onError);
        });
    }
    /**
     * 停止一个音频
     * @param url
     */
    stop(url: string): void {
        const ctrl = this._playingCtrl[url];
        if (ctrl == null) {
            return;
        }
        ctrl.stop();
    }
}
