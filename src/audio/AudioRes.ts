import { Emitter } from "../base/Emitter";
import { Loader } from "../base/Loader";

enum EnumLoadState {
    UNLOAD = "UNLOAD",
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
}

/** 音频资源数据 */
export class AudioResData extends Emitter {
    constructor(url: string) {
        super();
        this.url = url;
    }
    readonly url: string;
    base64?: string;
    blob?: Blob;
    arrayBuffer?: ArrayBuffer;
    state: EnumLoadState = EnumLoadState.UNLOAD;
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
        if (res != null && res.state === EnumLoadState.LOADED) {
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
                case EnumLoadState.LOADED:
                    resolve(res);
                    break;
                case EnumLoadState.UNLOAD:
                case EnumLoadState.ERROR:
                    res.on(EnumLoadState.LOADED, resolve);
                    res.on(EnumLoadState.ERROR, reject);
                    onProgress && res.on(EnumLoadState.LOADING, onProgress);
                    res.state = EnumLoadState.LOADING;
                    Loader.sendHttpRequest({
                        url: url,
                        method: "GET",
                        responseType: "blob",
                        onEnd: async (response: unknown) => {
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
                            res.state = EnumLoadState.LOADED;
                            if (!cache) {
                                delete resourceMap[res.url];
                            }
                            res.emit(EnumLoadState.LOADED, res);
                            res.offAll();
                        },
                        onProgress: (current: number, total: number) => {
                            res.emit(EnumLoadState.LOADING, current, total);
                        },
                        onError: (evt: unknown) => {
                            res.state = EnumLoadState.ERROR;
                            if (!cache) {
                                delete resourceMap[res.url];
                            }
                            res.emit(EnumLoadState.ERROR, evt);
                        },
                    });
                    break;
                case EnumLoadState.LOADING:
                    res.on(EnumLoadState.LOADED, resolve);
                    res.on(EnumLoadState.ERROR, reject);
                    onProgress && res.on(EnumLoadState.LOADING, onProgress);
                    break;
                default:
            }
        });
    }

    /**
     * 加载很多个音频
     * @param list
     * @param cache
     * @param onProgress
     */
    loadList(list: Array<string>, cache?: boolean, onProgress?: (current: number, total: number) => void): Promise<{ [key: string]: AudioResData | null }> {
        return new Promise((resolve: (sourceMap: { [key: string]: AudioResData | null }) => void) => {
            const tempList: Array<string> = list.concat();
            const length: number = list.length;
            const resultMap: { [key: string]: AudioResData | null } = {};
            const checkLoaded = (source: AudioResData | string) => {
                let url: string;
                if (source instanceof AudioResData) {
                    url = source.url;
                    resultMap[url] = source;
                } else {
                    url = source;
                    resultMap[source] = null;
                }
                const index = tempList.indexOf(url);
                if (index >= 0) {
                    tempList.splice(index, 1);
                }
                onProgress && onProgress(length - tempList.length, length);
                if (tempList.length === 0) {
                    resolve(resultMap);
                }
            };
            for (let i = 0, length = tempList.length; i < length; i += 1) {
                const url: string = tempList[i];
                const src = this.get(url);
                if (src == null) {
                    this.load(url, cache)
                        .then((source: AudioResData) => {
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
