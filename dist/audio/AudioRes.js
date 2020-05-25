import { Emitter } from "../base/Emitter";
import { Loader } from "../base/Loader";
var EnumLoadState;
(function (EnumLoadState) {
    EnumLoadState["UNLOAD"] = "UNLOAD";
    EnumLoadState["LOADING"] = "LOADING";
    EnumLoadState["LOADED"] = "LOADED";
    EnumLoadState["ERROR"] = "ERROR";
})(EnumLoadState || (EnumLoadState = {}));
/** 音频资源数据 */
export class AudioResData extends Emitter {
    constructor(url) {
        super();
        this.state = EnumLoadState.UNLOAD;
        this.url = url;
    }
}
/** 音频资源管理器 */
export class AudioRes {
    constructor() {
        /** 设置加载成功后转化数据类型 */
        this.convertTypes = {
            base64: true,
            arrayBuffer: false,
        };
        this._resourceMap = {};
    }
    /**
     * 获取音频资源
     * @param url
     */
    get(url) {
        const res = this._resourceMap[url];
        if (res != null && res.state === EnumLoadState.LOADED) {
            return res;
        }
        else {
            return null;
        }
    }
    /**
     * 加载音频数据
     * @param url
     * @param cache
     * @param onProgress
     */
    load(url, cache, onProgress) {
        return new Promise((resolve, reject) => {
            if (url == null) {
                reject();
            }
            const resourceMap = this._resourceMap;
            let res = resourceMap[url];
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
                        onEnd: async (response) => {
                            const blob = response;
                            res.blob = blob;
                            const needBase64 = this.convertTypes.base64;
                            const needArrayBuffer = this.convertTypes.arrayBuffer;
                            if (needBase64) {
                                await this.readAsDataURL(blob)
                                    .then((data) => {
                                    res.base64 = data;
                                })
                                    .catch((evt) => {
                                    return;
                                });
                            }
                            if (needArrayBuffer) {
                                await this.readAsArrayBuffer(blob)
                                    .then((data) => {
                                    res.arrayBuffer = data;
                                })
                                    .catch((evt) => {
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
                        onProgress: (current, total) => {
                            res.emit(EnumLoadState.LOADING, current, total);
                        },
                        onError: (evt) => {
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
    loadList(list, cache, onProgress) {
        return new Promise((resolve) => {
            const tempList = list.concat();
            const length = list.length;
            const resultMap = {};
            const checkLoaded = (source) => {
                let url;
                if (source instanceof AudioResData) {
                    url = source.url;
                    resultMap[url] = source;
                }
                else {
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
                const url = tempList[i];
                const src = this.get(url);
                if (src == null) {
                    this.load(url, cache)
                        .then((source) => {
                        checkLoaded(source);
                    })
                        .catch(() => {
                        checkLoaded(url);
                    });
                }
                else {
                    checkLoaded(src);
                }
            }
        });
    }
    /**
     * 转化成base64
     * @param blob
     */
    readAsDataURL(blob) {
        return new Promise((resolve, reject) => {
            const stringReader = new FileReader();
            stringReader.readAsDataURL(blob);
            stringReader.onload = () => {
                const base64 = stringReader.result;
                resolve(base64);
            };
            stringReader.onerror = (evt) => {
                reject(evt);
            };
        });
    }
    /**
     * 转化成ArrayBuffer
     * @param blob
     */
    readAsArrayBuffer(blob) {
        return new Promise((resolve, reject) => {
            const bufferReader = new FileReader();
            bufferReader.readAsArrayBuffer(blob);
            bufferReader.onload = () => {
                const arrayBuffer = bufferReader.result;
                resolve(arrayBuffer);
            };
            bufferReader.onerror = (evt) => {
                reject(evt);
            };
        });
    }
}
