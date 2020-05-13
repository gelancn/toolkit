var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define("src/base/Emitter", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                        handler.call.apply(handler, [target].concat(params));
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
define("src/base/Singleton", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                return this.instance.setInstance(key, value);
            }
            else {
                return this.instance.setSingleton(key, value);
            }
        };
        /**
         * 获取一个实例
         * @param key
         */
        Singleton.get = function (key) {
            if (typeof key === "string") {
                return this.instance.getInstance(key);
            }
            else {
                return this.instance.getSingleton(key);
            }
        };
        /**
         * 移除一个实例
         * @param key
         */
        Singleton.delete = function (key) {
            if (typeof key === "string") {
                return this.instance.deleteInstance(key);
            }
            else {
                return this.instance.deleteSingleton(key);
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
    function default_2() {
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
    exports.default = default_2;
    ;
});
define("src/enum/EnumPromiseProxy", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** promise proxy 事件枚举 */
    var EnumPromiseProxy;
    (function (EnumPromiseProxy) {
        EnumPromiseProxy["ON_RESOLVE"] = "onResolve";
        EnumPromiseProxy["ON_REJECT"] = "onReject";
    })(EnumPromiseProxy = exports.EnumPromiseProxy || (exports.EnumPromiseProxy = {}));
});
define("src/base/PromiseProxy", ["require", "exports", "src/enum/EnumPromiseProxy", "src/base/Emitter"], function (require, exports, EnumPromiseProxy_1, Emitter_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /** Promise代理 */
    var PromiseProxy = /** @class */ (function (_super) {
        __extends(PromiseProxy, _super);
        function PromiseProxy(executor) {
            var _this = _super.call(this) || this;
            _this._resolve = null;
            /**
             * resolve方法
             * @param value
             */
            _this.resolve = function (value) {
                if (_this._resolve != null) {
                    _this.emit(EnumPromiseProxy_1.EnumPromiseProxy.ON_RESOLVE, value);
                    _this._resolve(value);
                    _this._resolve = null;
                }
            };
            _this._reject = null;
            /**
             * reject方法
             * @param reason
             */
            _this.reject = function (reason) {
                if (_this._reject != null) {
                    _this.emit(EnumPromiseProxy_1.EnumPromiseProxy.ON_REJECT, reason);
                    _this._reject(reason);
                    _this._reject = null;
                }
            };
            _this._promise = new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
                executor(_this.resolve, _this.reject);
            });
            return _this;
        }
        Object.defineProperty(PromiseProxy.prototype, "promise", {
            /** 获取Promise对象 */
            get: function () {
                return this._promise;
            },
            enumerable: true,
            configurable: true
        });
        return PromiseProxy;
    }(Emitter_2.Emitter));
    exports.PromiseProxy = PromiseProxy;
});
define("test/base/test_PromiseProxy", ["require", "exports", "src/base/PromiseProxy", "src/enum/EnumPromiseProxy"], function (require, exports, PromiseProxy_1, EnumPromiseProxy_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_3() {
        return __awaiter(this, void 0, void 0, function () {
            var proxy, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("…………………… test_PromiseProxy ……………………");
                        proxy = new PromiseProxy_1.PromiseProxy(function (resolve, reject) { });
                        proxy.on(EnumPromiseProxy_2.EnumPromiseProxy.ON_RESOLVE, function () {
                            console.log(EnumPromiseProxy_2.EnumPromiseProxy.ON_RESOLVE);
                        });
                        proxy.resolve("resolve data");
                        return [4 /*yield*/, proxy.promise];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        console.log("\n");
                        proxy = new PromiseProxy_1.PromiseProxy(function (resolve, reject) { });
                        proxy.on(EnumPromiseProxy_2.EnumPromiseProxy.ON_REJECT, function () {
                            console.log(EnumPromiseProxy_2.EnumPromiseProxy.ON_REJECT);
                        });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        proxy.reject("reject data");
                        return [4 /*yield*/, proxy.promise];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 5:
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
define("test/Test", ["require", "exports", "test/base/test_Emitter", "test/base/test_Singleton", "test/base/test_PromiseProxy"], function (require, exports, test_Emitter_1, test_Singleton_1, test_PromiseProxy_1) {
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
                        return [2 /*return*/];
                }
            });
        });
    }
    run();
});
//# sourceMappingURL=test.js.map