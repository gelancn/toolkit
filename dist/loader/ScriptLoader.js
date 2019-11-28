import * as tslib_1 from 'tslib';
import { Emitter } from '../base/Emitter';
import { EnumProcess } from '../enum/EnumProcess';
var ScriptLoader = /** @class */ (function(_super) {
    tslib_1.__extends(ScriptLoader, _super);
    function ScriptLoader() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    /**
     * 加载
     * @param config
     */
    ScriptLoader.prototype.load = function(config) {
        var _this = this;
        if (config == null || this._script != null) {
            return;
        }
        var script = document.createElement('script');
        this._script = script;
        script.src = config.url;
        script.onload = function() {
            _this.emit(EnumProcess.END, _this._script);
        };
        script.onprogress = function(evt) {
            var total = evt.total;
            var loaded = evt.loaded;
            _this.emit(EnumProcess.PROGRESS, loaded, total);
        };
        script.onerror = function() {
            _this.reset();
            _this.emit(EnumProcess.ERROR);
        };
        if (config.appendTo == null) {
            document.body.appendChild(script);
        } else {
            config.appendTo.appendChild(script);
        }
        this.emit(EnumProcess.START);
    };
    /** 重置 */
    ScriptLoader.prototype.reset = function() {
        if (this._script == null) {
            return;
        }
        this._script.onload = null;
        this._script.onprogress = null;
        this._script.onerror = null;
        this._script = null;
    };
    return ScriptLoader;
})(Emitter);
export { ScriptLoader };
