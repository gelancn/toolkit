/** 音频源数据 */
export class AudioSourceData {
    constructor(url: string, blob: Blob) {
        this._url = url;
        this._blob = blob;
    }

    private _url: string;
    /** url */
    public get url(): string {
        return this._url;
    }
    private _blob: Blob;
    /** blob数据 */
    public get blob(): Blob {
        return this._blob;
    }
    private _base64: string;
    /** base64数据 */
    public get base64(): string {
        return this._base64;
    }
    private _buffer: ArrayBuffer;
    /** ArrayBuffer数据 */
    public get buffer(): ArrayBuffer {
        return this._buffer;
    }

    /**
     * 转化成base64
     * @param onComplete
     */
    public readAsDataURL(onComplete: (value: string) => void): void {
        if (this._blob == null) {
            return;
        }
        if (this._base64 != null) {
            onComplete(this._base64);
            return;
        }
        const stringReader: FileReader = new FileReader();
        stringReader.readAsDataURL(this.blob);
        stringReader.onload = () => {
            this._base64 = stringReader.result as string;
            onComplete(this._base64);
        };
    }

    /**
     * 转化成ArrayBuffer
     * @param onComplete
     */
    public readAsArrayBuffer(onComplete: (value: ArrayBuffer) => void): void {
        if (this._blob == null) {
            return;
        }
        if (this._buffer != null) {
            onComplete(this._buffer);
            return;
        }
        const bufferReader: FileReader = new FileReader();
        bufferReader.readAsArrayBuffer(this._blob);
        bufferReader.onload = () => {
            this._buffer = bufferReader.result as ArrayBuffer;
            onComplete(this._buffer);
        };
    }
}
