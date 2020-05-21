import { Emitter } from '../base/Emitter';
import { Loader } from '../base/Loader';

enum EnumLoadState {
    UNLOAD = "UNLOAD",
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
}

export class AudioResource extends Emitter {
    /** 设置加载成功后转化数据类型 */
    static convertTypes: { base64: boolean; arrayBuffer: boolean } = {
        base64: true,
        arrayBuffer: false,
    };

    private static _resourceMap: { [key: string]: AudioResource } = {};
    /**
     * 加载音频数据
     * @param config
     */
    static load(config: LoadConfig): AudioResource {
        const { url } = config;
        if (url == null) {
            throw new Error("AudioResource.load(): url is null.");
        }
        let res: AudioResource = AudioResource._resourceMap[url];
        if (res == null) {
            res = new AudioResource(url);
            AudioResource._resourceMap[url] = res;
        }
        switch (res.state) {
            case EnumLoadState.UNLOAD:
            case EnumLoadState.ERROR:
                config.onEnd && res.on(EnumLoadState.LOADED, config.onEnd);
                config.onProgress && res.on(EnumLoadState.LOADING, config.onProgress);
                config.onError && res.on(EnumLoadState.ERROR, config.onError);
                res.state = EnumLoadState.LOADING;
                Loader.sendHttpRequest({
                    url: url,
                    method: "GET",
                    responseType: "blob",
                    onEnd: (response: unknown) => {
                        const blob: Blob = response as Blob;
                        res.blob = blob;
                        const needBase64: boolean = AudioResource.convertTypes.base64;
                        const needArrayBuffer: boolean = AudioResource.convertTypes.arrayBuffer;
                        const judgeOver = () => {
                            if (needBase64 && res.base64 == null) {
                                return;
                            }
                            if (needArrayBuffer && res.arrayBuffer == null) {
                                return;
                            }
                            res.offAll();
                            res.state = EnumLoadState.LOADED;
                            res.emit(EnumLoadState.LOADED, res);
                        };
                        if (needBase64) {
                            AudioResource.readAsDataURL(blob, (base64: string) => {
                                res.base64 = base64;
                                judgeOver();
                            });
                        }
                        if (needArrayBuffer) {
                            AudioResource.readAsArrayBuffer(blob, (arrayBuffer: ArrayBuffer) => {
                                res.arrayBuffer = arrayBuffer;
                                judgeOver();
                            });
                        }
                        judgeOver();
                    },
                    onProgress: (current: number, total: number) => {
                        res.emit(EnumLoadState.LOADING, current, total);
                    },
                    onError: (evt: unknown) => {
                        res.state = EnumLoadState.ERROR;
                        res.emit(EnumLoadState.ERROR, evt);
                    },
                });
                break;
            case EnumLoadState.LOADING:
                config.onEnd && res.on(EnumLoadState.LOADED, config.onEnd);
                config.onProgress && res.on(EnumLoadState.LOADING, config.onProgress);
                config.onError && res.on(EnumLoadState.ERROR, config.onError);
                break;
            default:
        }
        return res;
    }

    /** 转化成base64 */
    static readAsDataURL(blob: Blob, onEnd: (base64: string) => void, onError?: (evt: Event) => void): void {
        const stringReader: FileReader = new FileReader();
        stringReader.readAsDataURL(blob);
        stringReader.onload = () => {
            const base64 = stringReader.result as string;
            onEnd && onEnd(base64);
        };
        stringReader.onerror = (evt: Event) => {
            onError && onError(evt);
        };
    }

    /** 转化成ArrayBuffer */
    static readAsArrayBuffer(blob: Blob, onEnd: (arrayBuffer: ArrayBuffer) => void, onError?: (evt: Event) => void): void {
        const bufferReader: FileReader = new FileReader();
        bufferReader.readAsArrayBuffer(blob);
        bufferReader.onload = () => {
            const arrayBuffer = bufferReader.result as ArrayBuffer;
            onEnd && onEnd(arrayBuffer);
        };
        bufferReader.onerror = (evt: Event) => {
            onError && onError(evt);
        };
    }

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

interface LoadConfig {
    url: string;
    onProgress?: (current: number, total: number) => void;
    onEnd?(data?: AudioResource): void;
    onError?: (err: Event) => void;
}
