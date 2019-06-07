/** 音频源数据 */
export declare class AudioSourceData {
    constructor(url: string, blob: Blob);
    private _url;
    /** url */
    readonly url: string;
    private _blob;
    /** blob数据 */
    readonly blob: Blob;
    private _base64;
    /** base64数据 */
    readonly base64: string;
    private _buffer;
    /** ArrayBuffer数据 */
    readonly buffer: ArrayBuffer;
    /**
     * 转化成base64
     * @param onComplete
     */
    readAsDataURL(onComplete: (value: string) => void): void;
    /**
     * 转化成ArrayBuffer
     * @param onComplete
     */
    readAsArrayBuffer(onComplete: (value: ArrayBuffer) => void): void;
}
