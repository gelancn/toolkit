import * as tslib_1 from 'tslib';
import { Emitter } from '../base/Emitter';
import { EnumProcess } from '../enum/EnumProcess';
var ImageLoader = /** @class */ (function(_super) {
    tslib_1.__extends(ImageLoader, _super);
    function ImageLoader() {
        return (_super !== null && _super.apply(this, arguments)) || this;
    }
    /**
     * 加载
     * @param config
     */
    ImageLoader.prototype.load = function(config) {
        var _this = this;
        if (config == null || this._image != null) {
            return;
        }
        var img = document.createElement('img');
        if (config.crossOrigin != null) {
            img.crossOrigin = config.crossOrigin;
        }
        this._image = img;
        img.src = config.url;
        img.onload = function() {
            _this.emit(EnumProcess.END, _this._image);
        };
        img.onprogress = function(evt) {
            var total = evt.total;
            var loaded = evt.loaded;
            _this.emit(EnumProcess.PROGRESS, loaded, total);
        };
        img.onerror = function() {
            _this.reset();
            _this.emit(EnumProcess.ERROR);
        };
        this.emit(EnumProcess.START);
    };
    /** 重置 */
    ImageLoader.prototype.reset = function() {
        if (this._image == null) {
            return;
        }
        this._image.onload = null;
        this._image.onprogress = null;
        this._image.onerror = null;
        this._image = null;
    };
    return ImageLoader;
})(Emitter);
export { ImageLoader };
