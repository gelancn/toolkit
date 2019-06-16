import { Emitter } from '../base/Emitter';
import { ILoader } from './ILoader';
export declare class ScriptLoader extends Emitter implements ILoader {
    private _script;
    /**
     * 加载
     * @param config
     */
    load(config: ScriptLoaderParams): void;
    /** 重置 */
    reset(): void;
}
export interface ScriptLoaderParams {
    url: string;
    appendTo?: HTMLElement;
}
