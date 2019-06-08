import { Emitter } from '../base/Emitter';
import { EnumHttpMethod } from '../enum/EnumHttpMethod';
import { ILoader } from './ILoader';
export declare class HttpLoader extends Emitter implements ILoader {
    private _xhr;
    /**
     * 加载
     * @param config
     */
    load(config: HttpLoaderParams): void;
    /** 重置 */
    reset(): void;
}
export interface HttpLoaderParams {
    url: string;
    method?: EnumHttpMethod;
    withCredentials?: boolean;
    requestHeader?: Object;
    data?: Object;
    responseType?: XMLHttpRequestResponseType;
}
