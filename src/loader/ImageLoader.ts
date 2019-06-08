import { Emitter } from '../base/Emitter';
import { EnumEventLoader } from '../enum/EnumEventLoader';
import { ILoader } from './ILoader';

export class ImageLoader extends Emitter implements ILoader {
    private _image: HTMLImageElement;

    /**
     * 加载
     * @param config
     */
    public load(config: ImageLoaderParams): void {
        if (config == null || this._image != null) {
            return;
        }
        const img: HTMLImageElement = document.createElement('img');
        img.crossOrigin = config.crossOrigin || 'anonymous';
        this._image = img;
        img.src = config.url;
        img.onload = () => {
            this.emit(EnumEventLoader.COMPLETE, this._image);
        };
        img.onprogress = (evt: ProgressEvent) => {
            const total = evt.total;
            const loaded = evt.loaded;
            this.emit(EnumEventLoader.PROGRESS, loaded, total);
        };
        img.onerror = () => {
            this.reset();
            this.emit(EnumEventLoader.ERROR);
        };
        this.emit(EnumEventLoader.START);
    }

    /** 重置 */
    public reset(): void {
        this._image.onload = null;
        this._image.onprogress = null;
        this._image.onerror = null;
        this._image = null;
    }
}

export interface ImageLoaderParams {
    url: string;
    crossOrigin?: string;
}
