var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("src/base/Emitter", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitter = void 0;
    /** 派发器 */
    var Emitter = /** @class */ (function () {
        function Emitter() {
            this._handlerMap = {};
        }
        /**
         * 监听
         * @param type
         * @param handler
         * @param target
         * @param once
         */
        Emitter.prototype.on = function (type, handler, target, once) {
            if (type == null || handler == null) {
                return;
            }
            if (target == null) {
                target = this;
            }
            var handlerList = this._getHandlerList(type);
            for (var i = handlerList.length - 1; i >= 0; i -= 1) {
                var data = handlerList[i];
                if (data.handler === handler && data.target === target) {
                    return;
                }
            }
            handlerList.push({
                type: type,
                handler: handler,
                target: target,
                once: once,
            });
        };
        /**
         * 取消监听
         * @param type
         * @param handler
         * @param target
         */
        Emitter.prototype.off = function (type, handler, target) {
            var handlerList = this._getHandlerList(type);
            if (handlerList.length === 0) {
                return;
            }
            if (target == null) {
                target = this;
            }
            for (var i = handlerList.length - 1; i >= 0; i -= 1) {
                var data = handlerList[i];
                if (data.handler === handler && data.target === target) {
                    handlerList.splice(i, 1);
                    break;
                }
            }
        };
        /**
         * 按类型取消监听
         * @param type
         */
        Emitter.prototype.offByType = function (type) {
            var handlerList = this._getHandlerList(type);
            if (handlerList.length === 0) {
                return;
            }
            handlerList.length = 0;
        };
        /**
         * 按目标对象取消监听
         * @param target
         */
        Emitter.prototype.offByTarget = function (target) {
            var _this = this;
            Object.keys(this._handlerMap).forEach(function (key) {
                var handlerList = _this._handlerMap[key];
                for (var i = handlerList.length - 1; i >= 0; i -= 1) {
                    var data = handlerList[i];
                    if (data.target === target) {
                        handlerList.splice(i, 1);
                    }
                }
            });
        };
        /**
         * 按监听函数取消监听
         * @param handler
         */
        Emitter.prototype.offByHandler = function (handler) {
            var _this = this;
            Object.keys(this._handlerMap).forEach(function (key) {
                var handlerList = _this._handlerMap[key];
                for (var i = handlerList.length - 1; i >= 0; i -= 1) {
                    var data = handlerList[i];
                    if (data.handler === handler) {
                        handlerList.splice(i, 1);
                    }
                }
            });
        };
        /**
         * 取消所有监听
         */
        Emitter.prototype.offAll = function () {
            var _this = this;
            Object.keys(this._handlerMap).forEach(function (key) {
                delete _this._handlerMap[key];
            });
        };
        /**
         * 监听一次
         * @param type
         * @param handler
         * @param target
         */
        Emitter.prototype.once = function (type, handler, target) {
            this.on(type, handler, target, true);
        };
        /**
         * 派发
         * @param type
         * @param params
         */
        Emitter.prototype.emit = function (type) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            var handlerList = this._getHandlerList(type);
            if (handlerList.length === 0) {
                return;
            }
            var needClean = false;
            var argLength = params.length;
            handlerList.forEach(function (data) {
                var handler = data.handler;
                var target = data.target;
                switch (argLength) {
                    case 0:
                        handler.call(target);
                        break;
                    case 1:
                        handler.call(target, params[0]);
                        break;
                    case 2:
                        handler.call(target, params[0], params[1]);
                        break;
                    case 3:
                        handler.call(target, params[0], params[1], params[2]);
                        break;
                    case 4:
                        handler.call(target, params[0], params[1], params[2], params[3]);
                        break;
                    case 5:
                        handler.call(target, params[0], params[1], params[2], params[3], params[4]);
                        break;
                    default:
                        handler.call.apply(handler, __spreadArrays([target], params));
                }
                if (data.once) {
                    needClean = true;
                }
            });
            if (needClean) {
                var newHandlerList = [];
                for (var i = 0, length_1 = handlerList.length; i < length_1; i += 1) {
                    var handler = handlerList[i];
                    if (handler.once) {
                        continue;
                    }
                    newHandlerList.push(handler);
                }
                this._handlerMap[type] = newHandlerList;
            }
        };
        Emitter.prototype._getHandlerList = function (type) {
            var list = this._handlerMap[type];
            if (list == null) {
                list = [];
                this._handlerMap[type] = list;
            }
            return list;
        };
        return Emitter;
    }());
    exports.Emitter = Emitter;
});
define("test/base/test_Emitter", ["require", "exports", "src/base/Emitter"], function (require, exports, Emitter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1() {
        return __awaiter(this, void 0, void 0, function () {
            function send() {
                console.log("send:", mark);
                emitter.emit(TEST, mark);
                mark++;
            }
            function onListen(value) {
                console.log("received:", value);
            }
            var mark, TEST, emitter, target;
            return __generator(this, function (_a) {
                console.log("…………………… test_Emitter ……………………");
                mark = 0;
                TEST = "TEST";
                emitter = new Emitter_1.Emitter();
                console.log("once");
                emitter.once(TEST, onListen);
                send();
                send();
                console.log("\n");
                console.log("on");
                emitter.on(TEST, onListen);
                send();
                send();
                console.log("\n");
                console.log("off");
                emitter.off(TEST, onListen);
                send();
                send();
                console.log("\n");
                console.log("offByHandler");
                emitter.on(TEST, onListen);
                send();
                emitter.offByHandler(onListen);
                send();
                console.log("\n");
                console.log("offByTarget");
                target = {};
                emitter.on(TEST, onListen, target);
                send();
                emitter.offByTarget(target);
                send();
                console.log("\n");
                console.log("offByType");
                emitter.on(TEST, onListen);
                send();
                emitter.offByType(TEST);
                send();
                console.log("\n");
                console.log("…………………… test_Emitter ……………………");
                console.log("\n\n");
                return [2 /*return*/];
            });
        });
    }
    exports.default = default_1;
    ;
});
define("src/base/Loader", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Loader = void 0;
    /** 加载器 */
    var Loader = /** @class */ (function () {
        function Loader() {
        }
        /**
         * 发送http请求
         * @param param
         */
        Loader.sendHttpRequest = function (param) {
            return new Promise(function (resolve, reject) {
                var url = param.url;
                var method = param.method || "GET";
                var data = param.data;
                var requestHeader = param.requestHeader;
                var sendData = null;
                if (data != null) {
                    var contentType = param.contentType || (requestHeader && requestHeader["Content-Type"]);
                    switch (method) {
                        case "POST":
                            switch (contentType) {
                                case "application/x-www-form-urlencoded":
                                    var params = Object.keys(data).map(function (key) {
                                        return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
                                    });
                                    sendData = params.join("&");
                                    break;
                                case "multipart/form-data":
                                    sendData = new FormData();
                                    Object.keys(data).forEach(function (key) {
                                        sendData.append(key, data[key]);
                                    });
                                    break;
                                default:
                                    sendData = JSON.stringify(data);
                                    break;
                            }
                            break;
                        case "GET":
                            // TODO 支持data变量变为参数拼接至url后面
                            break;
                        default:
                            break;
                    }
                }
                var xhr = new XMLHttpRequest();
                xhr.open(method, url, true);
                if (param.withCredentials) {
                    xhr.withCredentials = param.withCredentials;
                }
                if (param.responseType != null) {
                    xhr.responseType = param.responseType;
                }
                if (requestHeader != null) {
                    var dict_1 = requestHeader;
                    Object.keys(dict_1).forEach(function (key) {
                        xhr.setRequestHeader(key, dict_1[key]);
                    });
                }
                if (param.contentType != null) {
                    xhr.overrideMimeType(param.contentType);
                }
                var clearListener = function () {
                    delete xhr.onload;
                    delete xhr.onprogress;
                    delete xhr.onerror;
                };
                var onError = function (err) {
                    clearListener();
                    param.onError && param.onError(err);
                    reject(err);
                };
                xhr.onload = function (evt) {
                    var status = xhr.status;
                    if (status === 200) {
                        clearListener();
                        var data_1 = xhr.response || xhr.responseText;
                        param.onEnd && param.onEnd(data_1);
                        resolve(data_1);
                    }
                    else {
                        onError(evt);
                    }
                };
                xhr.onprogress = function (evt) {
                    var total = evt.total;
                    var loaded = evt.loaded;
                    param.onProgress && param.onProgress(loaded, total);
                };
                xhr.onerror = function (evt) {
                    onError(evt);
                };
                xhr.send(sendData);
            });
        };
        /**
         * 加载图片
         * @param param
         */
        Loader.loadImage = function (url, crossOrigin) {
            return new Promise(function (resolve, reject) {
                var el = document.createElement("img");
                if (crossOrigin != null) {
                    el.crossOrigin = crossOrigin;
                }
                el.src = url;
                var clearListener = function () {
                    delete el.onload;
                    delete el.onerror;
                };
                el.onload = function () {
                    clearListener();
                    resolve(el);
                };
                el.onerror = function (err) {
                    clearListener();
                    reject(err);
                };
            });
        };
        /**
         * 加载脚本
         * @param param
         */
        Loader.loadScript = function (url, appendTo) {
            return new Promise(function (resolve, reject) {
                var el = document.createElement("script");
                el.src = url;
                var clearListener = function () {
                    delete el.onload;
                    delete el.onerror;
                };
                el.onload = function () {
                    clearListener();
                    resolve(el);
                };
                el.onerror = function (err) {
                    clearListener();
                    reject(err);
                };
                if (appendTo == null) {
                    document.body.appendChild(el);
                }
                else {
                    appendTo.appendChild(el);
                }
            });
        };
        /**
         * 加载样式
         * @param param
         */
        Loader.loadCSS = function (url, appendTo) {
            return new Promise(function (resolve, reject) {
                var el = document.createElement("link");
                el.href = url;
                el.rel = "stylesheet";
                var clearListener = function () {
                    delete el.onload;
                    delete el.onerror;
                };
                el.onload = function () {
                    clearListener();
                    resolve(el);
                };
                el.onerror = function (err) {
                    clearListener();
                    reject(err);
                };
                if (appendTo == null) {
                    document.body.appendChild(el);
                }
                else {
                    appendTo.appendChild(el);
                }
            });
        };
        return Loader;
    }());
    exports.Loader = Loader;
});
define("test/base/test_Loader", ["require", "exports", "src/base/Loader"], function (require, exports, Loader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_2() {
        return __awaiter(this, void 0, void 0, function () {
            var imgUrl, img, err_1, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("…………………… test_Loader ……………………");
                        imgUrl = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";
                        console.log("loadImage");
                        return [4 /*yield*/, Loader_1.Loader.loadImage(imgUrl)];
                    case 1:
                        img = _a.sent();
                        document.body.appendChild(img);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, Loader_1.Loader.loadImage("???")];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        console.log("\n");
                        console.log("loadScript");
                        return [4 /*yield*/, Loader_1.Loader.loadScript("test.js")];
                    case 6:
                        _a.sent();
                        console.log("\n");
                        console.log("loadCSS");
                        return [4 /*yield*/, Loader_1.Loader.loadCSS("https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/css/components/user_quit_dialog-527f3ede74.css")];
                    case 7:
                        _a.sent();
                        console.log("\n");
                        console.log("sendHttpRequest");
                        return [4 /*yield*/, Loader_1.Loader.sendHttpRequest({
                                method: "GET",
                                url: "http://localhost:3000/index.html",
                                onProgress: function (c, t) { console.log(c, t); },
                            })];
                    case 8:
                        response = _a.sent();
                        console.log(response);
                        document.body.removeChild(img);
                        console.log("…………………… test_Loader ……………………");
                        console.log("\n\n");
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.default = default_2;
    ;
});
define("src/base/PromiseProxy", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PromiseProxy = void 0;
    /** Promise代理 */
    var PromiseProxy = /** @class */ (function () {
        function PromiseProxy(executor) {
            var _this = this;
            this._resolve = null;
            /**
             * resolve方法
             * @param value
             */
            this.resolve = function (value) {
                var res = _this._resolve;
                _this._resolve = null;
                if (res != null) {
                    res(value);
                }
            };
            this._reject = null;
            /**
             * reject方法
             * @param reason
             */
            this.reject = function (reason) {
                var rej = _this._reject;
                _this._reject = null;
                if (rej != null) {
                    rej(reason);
                }
            };
            this._promise = new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
                executor(_this.resolve, _this.reject);
            });
        }
        Object.defineProperty(PromiseProxy.prototype, "promise", {
            /** 获取Promise对象 */
            get: function () {
                return this._promise;
            },
            enumerable: false,
            configurable: true
        });
        return PromiseProxy;
    }());
    exports.PromiseProxy = PromiseProxy;
});
define("test/base/test_PromiseProxy", ["require", "exports", "src/base/PromiseProxy"], function (require, exports, PromiseProxy_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_3() {
        return __awaiter(this, void 0, void 0, function () {
            var proxy, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("…………………… test_PromiseProxy ……………………");
                        proxy = new PromiseProxy_1.PromiseProxy(function (resolve, reject) { });
                        proxy.resolve("resolve data");
                        return [4 /*yield*/, proxy.promise];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        console.log("\n");
                        proxy = new PromiseProxy_1.PromiseProxy(function (resolve, reject) { });
                        proxy.reject("reject data");
                        return [4 /*yield*/, proxy.promise.catch(function (data) {
                                console.log(data);
                            })];
                    case 2:
                        _a.sent();
                        console.log("…………………… test_PromiseProxy ……………………");
                        console.log("\n\n");
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.default = default_3;
    ;
});
define("src/base/Singleton", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Singleton = void 0;
    /** 单例 */
    var Singleton = /** @class */ (function () {
        function Singleton() {
            this._classMap = new Map();
            this._keyMap = {};
        }
        /**
         * 添加一个实例
         * @param key
         * @param value
         */
        Singleton.set = function (key, value) {
            if (typeof key === "string") {
                return Singleton.instance.setInstance(key, value);
            }
            else {
                return Singleton.instance.setSingleton(key, value);
            }
        };
        /**
         * 获取一个实例
         * @param key
         */
        Singleton.get = function (key) {
            if (typeof key === "string") {
                return Singleton.instance.getInstance(key);
            }
            else {
                return Singleton.instance.getSingleton(key);
            }
        };
        /**
         * 移除一个实例
         * @param key
         */
        Singleton.delete = function (key) {
            if (typeof key === "string") {
                return Singleton.instance.deleteInstance(key);
            }
            else {
                return Singleton.instance.deleteSingleton(key);
            }
        };
        /**
         * 添加一个单例
         * @param cls
         * @param value
         */
        Singleton.prototype.setSingleton = function (cls, value) {
            this._classMap.set(cls, value);
        };
        /**
         * 获取一个单例
         * @param cls
         */
        Singleton.prototype.getSingleton = function (cls) {
            var classMap = this._classMap;
            var instance = classMap.get(cls);
            if (instance == null) {
                instance = new cls();
                classMap.set(cls, instance);
            }
            return instance;
        };
        /**
         * 移除一个单例
         * @param cls
         */
        Singleton.prototype.deleteSingleton = function (cls) {
            this._classMap.delete(cls);
        };
        /**
         * 添加一个实例
         * @param key
         * @param value
         */
        Singleton.prototype.setInstance = function (key, value) {
            this._keyMap[key] = value;
        };
        /**
         * 获取一个实例
         * @param key
         */
        Singleton.prototype.getInstance = function (key) {
            return this._keyMap[key];
        };
        /**
         * 移除一个实例
         * @param key
         */
        Singleton.prototype.deleteInstance = function (key) {
            delete this._keyMap[key];
        };
        /** 单例的实例 */
        Singleton.instance = new Singleton();
        return Singleton;
    }());
    exports.Singleton = Singleton;
});
define("test/base/test_Singleton", ["require", "exports", "src/base/Singleton"], function (require, exports, Singleton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_4() {
        return __awaiter(this, void 0, void 0, function () {
            var A, B, C, singleton;
            return __generator(this, function (_a) {
                console.log("…………………… test_Singleton ……………………");
                A = /** @class */ (function () {
                    function A() {
                    }
                    return A;
                }());
                B = /** @class */ (function () {
                    function B() {
                    }
                    return B;
                }());
                C = /** @class */ (function () {
                    function C() {
                    }
                    return C;
                }());
                ;
                console.log('new Singleton()');
                singleton = new Singleton_1.Singleton();
                singleton.setInstance("A", new A());
                console.log(singleton.getInstance("A"));
                singleton.deleteInstance("A");
                console.log(singleton.getInstance("A"));
                singleton.setSingleton(B, new B());
                console.log(singleton.getSingleton(B));
                console.log(singleton.getSingleton(C));
                console.log('\n');
                console.log('static Singleton');
                Singleton_1.Singleton.set("A", new A());
                console.log(Singleton_1.Singleton.get("A"));
                Singleton_1.Singleton.delete("A");
                console.log(Singleton_1.Singleton.get("A"));
                Singleton_1.Singleton.set(B, new B());
                console.log(Singleton_1.Singleton.get(B));
                console.log(Singleton_1.Singleton.get(C));
                console.log("…………………… test_Singleton ……………………");
                console.log("\n\n");
                return [2 /*return*/];
            });
        });
    }
    exports.default = default_4;
    ;
});
define("src/Audio/tag/AudioTagController", ["require", "exports", "src/base/Emitter", "src/Audio/Audio"], function (require, exports, Emitter_2, Audio_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AudioTagController = void 0;
    /** 音频标签控制器 */
    var AudioTagController = /** @class */ (function (_super) {
        __extends(AudioTagController, _super);
        function AudioTagController(tag, uid) {
            var _this = _super.call(this) || this;
            _this._uid = uid;
            _this._el = tag;
            tag.onplay = function (evt) {
                _this.emit(Audio_1.EnumAudioEvent.ON_PLAY, evt);
            };
            tag.onpause = function (evt) {
                var el = evt.target;
                if (el.isStop) {
                    el.isStop = false;
                    _this.emit(Audio_1.EnumAudioEvent.ON_STOP, evt);
                }
                else {
                    _this.emit(Audio_1.EnumAudioEvent.ON_PAUSE, evt);
                }
            };
            tag.ontimeupdate = function (evt) {
                var el = evt.target;
                _this.emit(Audio_1.EnumAudioEvent.ON_PROGRESS, el.currentTime, el.duration);
            };
            tag.onended = function (evt) {
                _this.emit(Audio_1.EnumAudioEvent.ON_END, evt);
            };
            tag.onerror = function (event, source, lineno, colno, error) {
                _this.emit(Audio_1.EnumAudioEvent.ON_ERROR, { event: event, source: source, lineno: lineno, colno: colno, error: error });
            };
            return _this;
        }
        Object.defineProperty(AudioTagController.prototype, "uid", {
            /** 获取唯一id */
            get: function () {
                return this._uid;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AudioTagController.prototype, "src", {
            /** 设置源 */
            set: function (value) {
                if (!value) {
                    return;
                }
                var el = this._el;
                if (el.src) {
                    if (el.src === value) {
                        return;
                    }
                    this.stop();
                    el.src = value;
                }
                else {
                    el.src = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AudioTagController.prototype, "loop", {
            /** 循环播放 */
            get: function () {
                return this._el.loop;
            },
            /** 循环播放 */
            set: function (value) {
                this._el.loop = value;
                this.emit(Audio_1.EnumAudioEvent.ON_LOOP_CHANGE, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AudioTagController.prototype, "volume", {
            /** 音量 */
            get: function () {
                return this._el.volume;
            },
            /** 音量 */
            set: function (value) {
                this._el.volume = value;
                this.emit(Audio_1.EnumAudioEvent.ON_VOLUME_CHANGE, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AudioTagController.prototype, "muted", {
            /** 是否静音 */
            get: function () {
                return this._el.muted;
            },
            /** 是否静音 */
            set: function (value) {
                this._el.muted = value;
                this.emit(Audio_1.EnumAudioEvent.ON_MUTED_CHANGE, value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AudioTagController.prototype, "duration", {
            /** 音频长度 */
            get: function () {
                return this._el.duration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AudioTagController.prototype, "currentTime", {
            /** 当前播放进度 */
            get: function () {
                return this._el.currentTime;
            },
            /** 当前播放进度 */
            set: function (value) {
                this._el.currentTime = value;
                this.emit(Audio_1.EnumAudioEvent.ON_CURRENT_TIME_CHANGE, value);
            },
            enumerable: false,
            configurable: true
        });
        /** 播放 */
        AudioTagController.prototype.play = function () {
            return this._el.play();
        };
        /** 停止 */
        AudioTagController.prototype.stop = function () {
            this._el.isStop = true;
            this._el.pause();
            this.currentTime = 0;
        };
        /** 暂停 */
        AudioTagController.prototype.pause = function () {
            this._el.pause();
        };
        /** 恢复播放 */
        AudioTagController.prototype.resume = function () {
            this._el.play();
        };
        AudioTagController.prototype.reset = function () {
            this._el.pause();
            this.muted = false;
            this.volume = 1;
            this.loop = false;
            this.currentTime = 0;
        };
        return AudioTagController;
    }(Emitter_2.Emitter));
    exports.AudioTagController = AudioTagController;
});
define("src/Audio/tag/AudioTagImpl", ["require", "exports", "src/Audio/tag/AudioTagController"], function (require, exports, AudioTagController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AudioTagImpl = void 0;
    /** 音频标签实现 */
    var AudioTagImpl = /** @class */ (function () {
        function AudioTagImpl(limit) {
            this._limit = 25;
            this._muted = false;
            /** 所有音频标签 */
            this._audioMap = {};
            /** 音频池子 */
            this._audioPool = [];
            if (limit != null && limit > 10) {
                this._limit = limit;
            }
        }
        AudioTagImpl.prototype.getType = function () {
            return "tag";
        };
        /** 获取一个音频标签代理 */
        AudioTagImpl.prototype.get = function () {
            if (this._audioPool.length === 0) {
                return null;
            }
            return this._audioPool.pop();
        };
        /** 回收一个音频标签代理 */
        AudioTagImpl.prototype.recovery = function (value) {
            if (!(value instanceof AudioTagController_1.AudioTagController)) {
                return;
            }
            value.reset();
            value.offAll();
            this._audioPool.push(value);
        };
        /** 设置静音 */
        AudioTagImpl.prototype.setMuted = function (value) {
            var _this = this;
            value = !!value;
            this._muted = value;
            Object.keys(this._audioMap).forEach(function (v) {
                var ctrl = _this._audioMap[v];
                ctrl.muted = value;
            });
        };
        /** 获取静音 */
        AudioTagImpl.prototype.getMuted = function () {
            return this._muted;
        };
        /** 解锁音频标签，通常需要在用户主动操作方法中触发此方法 */
        AudioTagImpl.prototype.unlock = function () {
            var limit = this._limit;
            var length = this._audioPool.length;
            if (length >= limit) {
                return;
            }
            for (var i = 0; i < limit - length; i += 1) {
                var tag = document.createElement("audio");
                tag.load();
                var ctrl = new AudioTagController_1.AudioTagController(tag, i);
                this._audioPool.push(ctrl);
                this._audioMap[i] = ctrl;
            }
        };
        return AudioTagImpl;
    }());
    exports.AudioTagImpl = AudioTagImpl;
});
define("src/Audio/Audio", ["require", "exports", "src/Audio/tag/AudioTagImpl"], function (require, exports, AudioTagImpl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Audio = exports.EnumAudioEvent = void 0;
    /** 音频事件 */
    var EnumAudioEvent;
    (function (EnumAudioEvent) {
        EnumAudioEvent["ON_PLAY"] = "ON_PLAY";
        EnumAudioEvent["ON_STOP"] = "ON_STOP";
        EnumAudioEvent["ON_PAUSE"] = "ON_PAUSE";
        EnumAudioEvent["ON_END"] = "ON_END";
        EnumAudioEvent["ON_PROGRESS"] = "ON_PROGRESS";
        EnumAudioEvent["ON_ERROR"] = "ON_ERROR";
        EnumAudioEvent["ON_MUTED_CHANGE"] = "ON_MUTED_CHANGE";
        EnumAudioEvent["ON_VOLUME_CHANGE"] = "ON_VOLUME_CHANGE";
        EnumAudioEvent["ON_LOOP_CHANGE"] = "ON_LOOP_CHANGE";
        EnumAudioEvent["ON_CURRENT_TIME_CHANGE"] = "ON_CURRENT_TIME_CHANGE";
    })(EnumAudioEvent = exports.EnumAudioEvent || (exports.EnumAudioEvent = {}));
    /** 音频 */
    var Audio = /** @class */ (function () {
        function Audio(impl) {
            if (impl == null) {
                impl = new AudioTagImpl_1.AudioTagImpl();
            }
            this._impl = impl;
        }
        /**
         * 设置一个音频实现
         * @param value
         */
        Audio.prototype.setAudioImpl = function (value) {
            if (value != null) {
                this._impl = value;
            }
        };
        /** 设置静音 */
        Audio.prototype.setMuted = function (value) {
            value = !!value;
            this._impl.setMuted(value);
        };
        /** 获取静音 */
        Audio.prototype.getMuted = function () {
            return this._impl.getMuted();
        };
        /** 获取一个音频控制器 */
        Audio.prototype.getController = function () {
            return this._impl.get();
        };
        /** 回收一个音频控制器 */
        Audio.prototype.recoveryController = function (ctrl) {
            this._impl.recovery(ctrl);
        };
        /** 解锁 */
        Audio.prototype.unlock = function () {
            this._impl.unlock();
        };
        return Audio;
    }());
    exports.Audio = Audio;
});
define("src/Audio/AudioRes", ["require", "exports", "src/base/Emitter", "src/base/Loader"], function (require, exports, Emitter_3, Loader_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AudioRes = exports.AudioResData = void 0;
    var EnumLoadState;
    (function (EnumLoadState) {
        EnumLoadState["UNLOAD"] = "UNLOAD";
        EnumLoadState["LOADING"] = "LOADING";
        EnumLoadState["LOADED"] = "LOADED";
        EnumLoadState["ERROR"] = "ERROR";
    })(EnumLoadState || (EnumLoadState = {}));
    /** 音频资源数据 */
    var AudioResData = /** @class */ (function (_super) {
        __extends(AudioResData, _super);
        function AudioResData(url) {
            var _this = _super.call(this) || this;
            _this.state = EnumLoadState.UNLOAD;
            _this.url = url;
            return _this;
        }
        return AudioResData;
    }(Emitter_3.Emitter));
    exports.AudioResData = AudioResData;
    /** 音频资源管理器 */
    var AudioRes = /** @class */ (function () {
        function AudioRes() {
            /** 设置加载成功后转化数据类型 */
            this.convertTypes = {
                base64: true,
                arrayBuffer: false,
            };
            this._resourceMap = {};
        }
        /**
         * 获取音频资源
         * @param url
         */
        AudioRes.prototype.get = function (url) {
            var res = this._resourceMap[url];
            if (res != null && res.state === EnumLoadState.LOADED) {
                return res;
            }
            else {
                return null;
            }
        };
        /**
         * 加载音频数据
         * @param url
         * @param cache
         * @param onProgress
         */
        AudioRes.prototype.load = function (url, cache, onProgress) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (url == null) {
                    reject();
                }
                var resourceMap = _this._resourceMap;
                var res = resourceMap[url];
                if (res == null) {
                    res = new AudioResData(url);
                    resourceMap[url] = res;
                }
                switch (res.state) {
                    case EnumLoadState.LOADED:
                        resolve(res);
                        break;
                    case EnumLoadState.UNLOAD:
                    case EnumLoadState.ERROR:
                        res.on(EnumLoadState.LOADED, resolve);
                        res.on(EnumLoadState.ERROR, reject);
                        onProgress && res.on(EnumLoadState.LOADING, onProgress);
                        res.state = EnumLoadState.LOADING;
                        Loader_2.Loader.sendHttpRequest({
                            url: url,
                            method: "GET",
                            responseType: "blob",
                            onEnd: function (response) { return __awaiter(_this, void 0, void 0, function () {
                                var blob, needBase64, needArrayBuffer;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            blob = response;
                                            res.blob = blob;
                                            needBase64 = this.convertTypes.base64;
                                            needArrayBuffer = this.convertTypes.arrayBuffer;
                                            if (!needBase64) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.readAsDataURL(blob)
                                                    .then(function (data) {
                                                    res.base64 = data;
                                                })
                                                    .catch(function (evt) {
                                                    return;
                                                })];
                                        case 1:
                                            _a.sent();
                                            _a.label = 2;
                                        case 2:
                                            if (!needArrayBuffer) return [3 /*break*/, 4];
                                            return [4 /*yield*/, this.readAsArrayBuffer(blob)
                                                    .then(function (data) {
                                                    res.arrayBuffer = data;
                                                })
                                                    .catch(function (evt) {
                                                    return;
                                                })];
                                        case 3:
                                            _a.sent();
                                            _a.label = 4;
                                        case 4:
                                            res.state = EnumLoadState.LOADED;
                                            if (!cache) {
                                                delete resourceMap[res.url];
                                            }
                                            res.emit(EnumLoadState.LOADED, res);
                                            res.offAll();
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                            onProgress: function (current, total) {
                                res.emit(EnumLoadState.LOADING, current, total);
                            },
                            onError: function (evt) {
                                res.state = EnumLoadState.ERROR;
                                if (!cache) {
                                    delete resourceMap[res.url];
                                }
                                res.emit(EnumLoadState.ERROR, evt);
                            },
                        });
                        break;
                    case EnumLoadState.LOADING:
                        res.on(EnumLoadState.LOADED, resolve);
                        res.on(EnumLoadState.ERROR, reject);
                        onProgress && res.on(EnumLoadState.LOADING, onProgress);
                        break;
                    default:
                }
            });
        };
        /**
         * 加载很多个音频
         * @param list
         * @param cache
         * @param onProgress
         */
        AudioRes.prototype.loadList = function (list, cache, onProgress) {
            var _this = this;
            return new Promise(function (resolve) {
                var tempList = list.concat();
                var length = list.length;
                var resultMap = {};
                var checkLoaded = function (source) {
                    var url;
                    if (source instanceof AudioResData) {
                        url = source.url;
                        resultMap[url] = source;
                    }
                    else {
                        url = source;
                        resultMap[source] = null;
                    }
                    var index = tempList.indexOf(url);
                    if (index >= 0) {
                        tempList.splice(index, 1);
                    }
                    onProgress && onProgress(length - tempList.length, length);
                    if (tempList.length === 0) {
                        resolve(resultMap);
                    }
                };
                var _loop_1 = function (i, length_2) {
                    var url = tempList[i];
                    var src = _this.get(url);
                    if (src == null) {
                        _this.load(url, cache)
                            .then(function (source) {
                            checkLoaded(source);
                        })
                            .catch(function () {
                            checkLoaded(url);
                        });
                    }
                    else {
                        checkLoaded(src);
                    }
                };
                for (var i = 0, length_2 = tempList.length; i < length_2; i += 1) {
                    _loop_1(i, length_2);
                }
            });
        };
        /**
         * 转化成base64
         * @param blob
         */
        AudioRes.prototype.readAsDataURL = function (blob) {
            return new Promise(function (resolve, reject) {
                var stringReader = new FileReader();
                stringReader.readAsDataURL(blob);
                stringReader.onload = function () {
                    var base64 = stringReader.result;
                    resolve(base64);
                };
                stringReader.onerror = function (evt) {
                    reject(evt);
                };
            });
        };
        /**
         * 转化成ArrayBuffer
         * @param blob
         */
        AudioRes.prototype.readAsArrayBuffer = function (blob) {
            return new Promise(function (resolve, reject) {
                var bufferReader = new FileReader();
                bufferReader.readAsArrayBuffer(blob);
                bufferReader.onload = function () {
                    var arrayBuffer = bufferReader.result;
                    resolve(arrayBuffer);
                };
                bufferReader.onerror = function (evt) {
                    reject(evt);
                };
            });
        };
        return AudioRes;
    }());
    exports.AudioRes = AudioRes;
});
define("test/audio/test_Audio", ["require", "exports", "src/Audio/Audio", "src/Audio/AudioRes"], function (require, exports, Audio_2, AudioRes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_5() {
        return __awaiter(this, void 0, void 0, function () {
            var audio, audioRes, ctrl, url, container;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("…………………… test_Audio ……………………");
                        audio = new Audio_2.Audio();
                        audioRes = new AudioRes_1.AudioRes();
                        url = "assets/test.mp3";
                        container = document.createElement("div");
                        document.body.appendChild(container);
                        window.onmousedown = function () {
                            audio.unlock();
                            ctrl = audio.getController();
                            ctrl.on(Audio_2.EnumAudioEvent.ON_PLAY, function (evt) {
                                console.log(evt.type);
                            });
                            ctrl.on(Audio_2.EnumAudioEvent.ON_STOP, function (evt) {
                                console.log(evt.type);
                            });
                            ctrl.on(Audio_2.EnumAudioEvent.ON_END, function (evt) {
                                console.log(evt.type);
                            });
                            ctrl.on(Audio_2.EnumAudioEvent.ON_PROGRESS, function (cur, total) {
                                console.log(cur, total);
                            });
                            console.log("onmousedown");
                        };
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var btnConfig = [
                                    {
                                        title: "预加载并播放",
                                        handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var res;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        console.log("预加载并播放");
                                                        return [4 /*yield*/, audioRes.load(url)];
                                                    case 1:
                                                        res = _a.sent();
                                                        console.log(res);
                                                        ctrl.src = res.base64;
                                                        ctrl.play();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); },
                                    },
                                    {
                                        title: "播放音频",
                                        handler: function () {
                                            console.log("播放音频");
                                            ctrl.src = url;
                                            ctrl.play();
                                        },
                                    },
                                    {
                                        title: "结束测试",
                                        handler: function () {
                                            console.log("结束测试");
                                            if (ctrl != null) {
                                                audio.recoveryController(ctrl);
                                            }
                                            resolve();
                                        },
                                    },
                                ];
                                btnConfig.forEach(function (value) {
                                    var btn = document.createElement("button");
                                    btn.textContent = value.title;
                                    btn.onclick = value.handler;
                                    container.appendChild(btn);
                                });
                            })];
                    case 1:
                        _a.sent();
                        document.body.removeChild(container);
                        console.log("…………………… test_Audio ……………………");
                        console.log("\n\n");
                        return [2 /*return*/];
                }
            });
        });
    }
    exports.default = default_5;
    ;
});
define("test/test", ["require", "exports", "test/base/test_Emitter", "test/base/test_Loader", "test/base/test_PromiseProxy", "test/base/test_Singleton", "test/audio/test_Audio"], function (require, exports, test_Emitter_1, test_Loader_1, test_PromiseProxy_1, test_Singleton_1, test_Audio_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function run() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, test_Singleton_1.default()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, test_Emitter_1.default()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, test_PromiseProxy_1.default()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, test_Loader_1.default()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, test_Audio_1.default()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    run();
});
//# sourceMappingURL=test.js.map