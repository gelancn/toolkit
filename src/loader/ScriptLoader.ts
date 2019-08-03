import { Emitter } from '../base/Emitter';
import { EnumProcess } from '../enum/EnumProcess';
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
            this.emit(EnumProcess.END, this._script);
        };
        script.onprogress = (evt: ProgressEvent) => {
            const total = evt.total;
            const loaded = evt.loaded;
            this.emit(EnumProcess.PROGRESS, loaded, total);
        };
        script.onerror = () => {
            this.reset();
            this.emit(EnumProcess.ERROR);
        };
        if (config.appendTo == null) {
            document.body.appendChild(script);
        } else {
            config.appendTo.appendChild(script);
        }
        this.emit(EnumProcess.START);
    }

    /** 重置 */
    public reset(): void {
        this._script.onload = null;
        this._script.onprogress = null;
        this._script.onerror = null;
        this._script = null;
    }
}

export interface ScriptLoaderParams {
    url: string;
    appendTo?: HTMLElement;
}
