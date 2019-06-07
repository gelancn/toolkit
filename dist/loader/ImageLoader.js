import * as tslib_1 from 'tslib';
import { Emitter } from '../base/Emitter';
import { EnumEventLoader } from '../enum/EnumEventLoader';
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
        this._image = img;
        img.src = config.url;
        img.onload = function() {
            _this.emit(EnumEventLoader.COMPLETE, _this._image);
        };
        img.onprogress = function(evt) {
            var total = evt.total;
            var loaded = evt.loaded;
            _this.emit(EnumEventLoader.PROGRESS, loaded, total);
        };
        img.onerror = function() {
            _this.reset();
            _this.emit(EnumEventLoader.ERROR);
        };
        this.emit(EnumEventLoader.START);
    };
    /** 重置 */
    ImageLoader.prototype.reset = function() {
        this._image.onload = null;
        this._image.onprogress = null;
        this._image.onerror = null;
        this._image = null;
    };
    return ImageLoader;
})(Emitter);
export { ImageLoader };
//# sourceMappingURL=ImageLoader.js.map
