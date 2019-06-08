import { Emitter } from '../base/Emitter';
import { ILoader } from './ILoader';
export declare class ImageLoader extends Emitter implements ILoader {
    private _image;
    /**
     * 加载
     * @param config
     */
    load(config: ImageLoaderParams): void;
    /** 重置 */
    reset(): void;
}
export interface ImageLoaderParams {
    url: string;
    crossOrigin?: string;
}
