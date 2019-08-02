import { HttpLoader } from '..';
import { EnumEventLoader } from '../enum/EnumEventLoader';
import { EnumHttpMethod } from '../enum/EnumHttpMethod';
import { EnumLoadState } from '../enum/EnumLoadState';

/** 音频源数据 */
export class AudioSource {
    /** 设置加载成功后转化数据类型 */
    public static convertTypes: { base64: boolean; arrayBuffer: boolean } = {
        base64: true,
        arrayBuffer: false,
    };

    private static _sourceMap: { [key: string]: AudioSource } = {};
    /**
     * 加载音频数据
     * @param url
     * @param cache
     */
    public static async load(url: string, cache: boolean = true): Promise<AudioSource> {
        let data: AudioSource = AudioSource._sourceMap[url];
        if (data == null) {
            data = new AudioSource(url);
            AudioSource._sourceMap[url] = data;
        }
        if (data.getLoadState() !== EnumLoadState.LOADED) {
            await data.load();
            if (!cache) {
                delete AudioSource._sourceMap[url];
            }
        }
        return data;
    }
    /**
     * 获取音频数据
     * @param url
     */
    public static get(url: string): AudioSource | null {
        let data: AudioSource = AudioSource._sourceMap[url];
        if (data != null && data._loadState === EnumLoadState.LOADED) {
            return data;
        } else {
            return null;
        }
    }

    constructor(url: string) {
        this._url = url;
    }

    private _url: string;
    /** url */
    public getUrl(): string {
        return this._url;
    }
    private _blob: Blob;
    /** blob数据 */
    public getBlob(): Blob {
        return this._blob;
    }
    private _base64: string;
    /** base64数据 */
    public getBase64(): string {
        return this._base64;
    }
    private _arrayBuffer: ArrayBuffer;
    /** ArrayBuffer数据 */
    public getArrayBuffer(): ArrayBuffer {
        return this._arrayBuffer;
    }

    private _loadState: EnumLoadState = EnumLoadState.UNLOAD;
    /** 是否加载完成 */
    public getLoadState(): EnumLoadState {
        return this._loadState;
    }

    private _loader: HttpLoader = new HttpLoader();
    /** 加载 */
    public load(): Promise<AudioSource> {
        return new Promise((resolve: (data: AudioSource) => void, reject: Function) => {
            if (this._loadState === EnumLoadState.LOADED) {
                resolve(this);
                return;
            }
            if (this._loadState !== EnumLoadState.LOADING) {
                this._loadState = EnumLoadState.LOADING;
                this._loader.load({
                    url: this._url,
                    method: EnumHttpMethod.GET,
                    responseType: 'blob',
                    contentType: 'application/x-www-form-urlencoded',
                });
            }
            const completeHandler = async (response: unknown) => {
                const blob: Blob = response as Blob;
                this._blob = blob;
                if (AudioSource.convertTypes.base64) {
                    await this.readAsDataURL();
                }
                if (AudioSource.convertTypes.arrayBuffer) {
                    await this.readAsArrayBuffer();
                }
                this._loadState = EnumLoadState.LOADED;
                resolve(this);
            };
            const errorHandler = () => {
                this._loader.reset();
                this._loadState = EnumLoadState.ERROR;
                reject();
            };
            this._loader.once(EnumEventLoader.COMPLETE, completeHandler, this);
            this._loader.once(EnumEventLoader.ERROR, errorHandler, this);
        });
    }

    /** 转化成base64 */
    public readAsDataURL(): Promise<string> {
        return new Promise((resolve: (data: string) => void) => {
            if (this._blob == null || this._base64 != null) {
                resolve(this._base64);
                return;
            }
            const stringReader: FileReader = new FileReader();
            stringReader.readAsDataURL(this._blob);
            stringReader.onload = () => {
                this._base64 = stringReader.result as string;
                resolve(this._base64);
            };
        });
    }

    /** 转化成ArrayBuffer */
    public readAsArrayBuffer(): Promise<ArrayBuffer> {
        return new Promise((resolve: (data: ArrayBuffer) => void) => {
            if (this._blob == null || this._arrayBuffer != null) {
                resolve(this._arrayBuffer);
                return;
            }
            const bufferReader: FileReader = new FileReader();
            bufferReader.readAsArrayBuffer(this._blob);
            bufferReader.onload = () => {
                this._arrayBuffer = bufferReader.result as ArrayBuffer;
                resolve(this._arrayBuffer);
            };
        });
    }
}
