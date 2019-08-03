import { Emitter } from '../base/Emitter';
import { EnumProcess } from '../enum/EnumProcess';
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
        if (config.crossOrigin != null) {
            img.crossOrigin = config.crossOrigin;
        }
        this._image = img;
        img.src = config.url;
        img.onload = () => {
            this.emit(EnumProcess.END, this._image);
        };
        img.onprogress = (evt: ProgressEvent) => {
            const total = evt.total;
            const loaded = evt.loaded;
            this.emit(EnumProcess.PROGRESS, loaded, total);
        };
        img.onerror = () => {
            this.reset();
            this.emit(EnumProcess.ERROR);
        };
        this.emit(EnumProcess.START);
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
    crossOrigin?: string; // anonymous
}
