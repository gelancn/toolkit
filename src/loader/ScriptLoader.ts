import { Emitter } from '../base/Emitter';
import { EnumEventLoader } from '../enum/EnumEventLoader';
import { ILoader } from './ILoader';

export class ScriptLoader extends Emitter implements ILoader {
    private _script: HTMLScriptElement;

    /**
     * 加载
     * @param config
     */
    public load(config: ScriptLoaderParams): void {
        if (config == null || this._script != null) {
            return;
        }
        const script: HTMLScriptElement = document.createElement('script');
        this._script = script;
        script.src = config.url;
        script.onload = () => {
            this.emit(EnumEventLoader.COMPLETE, this._script);
        };
        script.onprogress = (evt: ProgressEvent) => {
            const total = evt.total;
            const loaded = evt.loaded;
            this.emit(EnumEventLoader.PROGRESS, loaded, total);
        };
        script.onerror = () => {
            this.reset();
            this.emit(EnumEventLoader.ERROR);
        };
        document.body.appendChild(script);
        this.emit(EnumEventLoader.START);
    }

    /** 重置 */
    public reset(): void {
        this._script.onload = null;
        this._script.onprogress = null;
        this._script.onerror = null;
        this._script = null;
    }
}

interface ScriptLoaderParams {
    url: string;
}
