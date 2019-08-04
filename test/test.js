/******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {},
            /******/
        }); // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true; // Return the exports of the module
        /******/
        /******/ /******/ return module.exports;
        /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(value, mode) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function(key) {
                        return value[key];
                    }.bind(null, key),
                );
        /******/ return ns;
        /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default'];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = './test/test.ts'));
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ './node_modules/tslib/tslib.es6.js':
            /*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
            /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__extends', function() {
                    return __extends;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__assign', function() {
                    return __assign;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__rest', function() {
                    return __rest;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__decorate', function() {
                    return __decorate;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__param', function() {
                    return __param;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__metadata', function() {
                    return __metadata;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__awaiter', function() {
                    return __awaiter;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__generator', function() {
                    return __generator;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__exportStar', function() {
                    return __exportStar;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__values', function() {
                    return __values;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__read', function() {
                    return __read;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__spread', function() {
                    return __spread;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__await', function() {
                    return __await;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__asyncGenerator', function() {
                    return __asyncGenerator;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__asyncDelegator', function() {
                    return __asyncDelegator;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__asyncValues', function() {
                    return __asyncValues;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__makeTemplateObject', function() {
                    return __makeTemplateObject;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__importStar', function() {
                    return __importStar;
                });
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__importDefault', function() {
                    return __importDefault;
                });
                /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
                /* global Reflect, Promise */

                var extendStatics = function(d, b) {
                    extendStatics =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function(d, b) {
                                d.__proto__ = b;
                            }) ||
                        function(d, b) {
                            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        };
                    return extendStatics(d, b);
                };

                function __extends(d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
                }

                var __assign = function() {
                    __assign =
                        Object.assign ||
                        function __assign(t) {
                            for (var s, i = 1, n = arguments.length; i < n; i++) {
                                s = arguments[i];
                                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                            }
                            return t;
                        };
                    return __assign.apply(this, arguments);
                };

                function __rest(s, e) {
                    var t = {};
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
                    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
                        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
                    return t;
                }

                function __decorate(decorators, target, key, desc) {
                    var c = arguments.length,
                        r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
                        d;
                    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc);
                    else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                }

                function __param(paramIndex, decorator) {
                    return function(target, key) {
                        decorator(target, key, paramIndex);
                    };
                }

                function __metadata(metadataKey, metadataValue) {
                    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(metadataKey, metadataValue);
                }

                function __awaiter(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator['throw'](value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            result.done
                                ? resolve(result.value)
                                : new P(function(resolve) {
                                      resolve(result.value);
                                  }).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }

                function __generator(thisArg, body) {
                    var _ = {
                            label: 0,
                            sent: function() {
                                if (t[0] & 1) throw t[1];
                                return t[1];
                            },
                            trys: [],
                            ops: [],
                        },
                        f,
                        y,
                        t,
                        g;
                    return (
                        (g = { next: verb(0), throw: verb(1), return: verb(2) }),
                        typeof Symbol === 'function' &&
                            (g[Symbol.iterator] = function() {
                                return this;
                            }),
                        g
                    );
                    function verb(n) {
                        return function(v) {
                            return step([n, v]);
                        };
                    }
                    function step(op) {
                        if (f) throw new TypeError('Generator is already executing.');
                        while (_)
                            try {
                                if (
                                    ((f = 1),
                                    y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                )
                                    return t;
                                if (((y = 0), t)) op = [op[0] & 2, t.value];
                                switch (op[0]) {
                                    case 0:
                                    case 1:
                                        t = op;
                                        break;
                                    case 4:
                                        _.label++;
                                        return { value: op[1], done: false };
                                    case 5:
                                        _.label++;
                                        y = op[1];
                                        op = [0];
                                        continue;
                                    case 7:
                                        op = _.ops.pop();
                                        _.trys.pop();
                                        continue;
                                    default:
                                        if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                                            _ = 0;
                                            continue;
                                        }
                                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                            _.label = op[1];
                                            break;
                                        }
                                        if (op[0] === 6 && _.label < t[1]) {
                                            _.label = t[1];
                                            t = op;
                                            break;
                                        }
                                        if (t && _.label < t[2]) {
                                            _.label = t[2];
                                            _.ops.push(op);
                                            break;
                                        }
                                        if (t[2]) _.ops.pop();
                                        _.trys.pop();
                                        continue;
                                }
                                op = body.call(thisArg, _);
                            } catch (e) {
                                op = [6, e];
                                y = 0;
                            } finally {
                                f = t = 0;
                            }
                        if (op[0] & 5) throw op[1];
                        return { value: op[0] ? op[1] : void 0, done: true };
                    }
                }

                function __exportStar(m, exports) {
                    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }

                function __values(o) {
                    var m = typeof Symbol === 'function' && o[Symbol.iterator],
                        i = 0;
                    if (m) return m.call(o);
                    return {
                        next: function() {
                            if (o && i >= o.length) o = void 0;
                            return { value: o && o[i++], done: !o };
                        },
                    };
                }

                function __read(o, n) {
                    var m = typeof Symbol === 'function' && o[Symbol.iterator];
                    if (!m) return o;
                    var i = m.call(o),
                        r,
                        ar = [],
                        e;
                    try {
                        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
                    } catch (error) {
                        e = { error: error };
                    } finally {
                        try {
                            if (r && !r.done && (m = i['return'])) m.call(i);
                        } finally {
                            if (e) throw e.error;
                        }
                    }
                    return ar;
                }

                function __spread() {
                    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
                    return ar;
                }

                function __await(v) {
                    return this instanceof __await ? ((this.v = v), this) : new __await(v);
                }

                function __asyncGenerator(thisArg, _arguments, generator) {
                    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
                    var g = generator.apply(thisArg, _arguments || []),
                        i,
                        q = [];
                    return (
                        (i = {}),
                        verb('next'),
                        verb('throw'),
                        verb('return'),
                        (i[Symbol.asyncIterator] = function() {
                            return this;
                        }),
                        i
                    );
                    function verb(n) {
                        if (g[n])
                            i[n] = function(v) {
                                return new Promise(function(a, b) {
                                    q.push([n, v, a, b]) > 1 || resume(n, v);
                                });
                            };
                    }
                    function resume(n, v) {
                        try {
                            step(g[n](v));
                        } catch (e) {
                            settle(q[0][3], e);
                        }
                    }
                    function step(r) {
                        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
                    }
                    function fulfill(value) {
                        resume('next', value);
                    }
                    function reject(value) {
                        resume('throw', value);
                    }
                    function settle(f, v) {
                        if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
                    }
                }

                function __asyncDelegator(o) {
                    var i, p;
                    return (
                        (i = {}),
                        verb('next'),
                        verb('throw', function(e) {
                            throw e;
                        }),
                        verb('return'),
                        (i[Symbol.iterator] = function() {
                            return this;
                        }),
                        i
                    );
                    function verb(n, f) {
                        i[n] = o[n]
                            ? function(v) {
                                  return (p = !p) ? { value: __await(o[n](v)), done: n === 'return' } : f ? f(v) : v;
                              }
                            : f;
                    }
                }

                function __asyncValues(o) {
                    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
                    var m = o[Symbol.asyncIterator],
                        i;
                    return m
                        ? m.call(o)
                        : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
                          (i = {}),
                          verb('next'),
                          verb('throw'),
                          verb('return'),
                          (i[Symbol.asyncIterator] = function() {
                              return this;
                          }),
                          i);
                    function verb(n) {
                        i[n] =
                            o[n] &&
                            function(v) {
                                return new Promise(function(resolve, reject) {
                                    (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                                });
                            };
                    }
                    function settle(resolve, reject, d, v) {
                        Promise.resolve(v).then(function(v) {
                            resolve({ value: v, done: d });
                        }, reject);
                    }
                }

                function __makeTemplateObject(cooked, raw) {
                    if (Object.defineProperty) {
                        Object.defineProperty(cooked, 'raw', { value: raw });
                    } else {
                        cooked.raw = raw;
                    }
                    return cooked;
                }

                function __importStar(mod) {
                    if (mod && mod.__esModule) return mod;
                    var result = {};
                    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                    result.default = mod;
                    return result;
                }

                function __importDefault(mod) {
                    return mod && mod.__esModule ? mod : { default: mod };
                }

                /***/
            },

        /***/ './src/audio/AudioController.ts':
            /*!**************************************!*\
  !*** ./src/audio/AudioController.ts ***!
  \**************************************/
            /*! exports provided: AudioController */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AudioController', function() {
                    return AudioController;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _base_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Emitter */ './src/base/Emitter.ts');
                /* harmony import */ var _enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/EnumProcess */ './src/enum/EnumProcess.ts');
                /* harmony import */ var _enum_EnumType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enum/EnumType */ './src/enum/EnumType.ts');
                /* harmony import */ var _AudioSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioSource */ './src/audio/AudioSource.ts');
                /* harmony import */ var _AudioTagFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudioTagFactory */ './src/audio/AudioTagFactory.ts');

                /** 音频控制器 */
                var AudioController = /** @class */ (function(_super) {
                    tslib__WEBPACK_IMPORTED_MODULE_0__['__extends'](AudioController, _super);
                    function AudioController() {
                        var _this = _super.call(this) || this;
                        _this._loop = false;
                        _this._volume = 1;
                        _this._muted = false;
                        _this._duration = 0;
                        _this._playing = false;
                        _this._currentTime = 0;
                        _this.onplay = function(evt) {
                            _this._playing = true;
                            var el = evt.target;
                            if (_this._currentTime > el.currentTime) {
                                el.currentTime = _this._currentTime;
                            }
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].START);
                        };
                        _this.onpause = function(evt) {
                            _this._playing = false;
                            if (_this._currentTime === 0) {
                                _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].STOP);
                            } else {
                                _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].PAUSE);
                            }
                            _this._recoveryTag();
                        };
                        _this.ontimeupdate = function(evt) {
                            if (!_this._playing) {
                                _this._playing = true;
                            }
                            var el = evt.target;
                            _this._duration = el.duration;
                            _this._currentTime = el.currentTime;
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].PROGRESS, el.currentTime, el.duration);
                        };
                        _this.onended = function(evt) {
                            _this._currentTime = 0;
                            _this._playing = false;
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].END);
                            _this._recoveryTag();
                        };
                        return _this;
                    }
                    /**
                     * 设置静音
                     * @param value
                     */
                    AudioController.setMuted = function(value) {
                        var factory = AudioController.factory;
                        var audioList = factory.getAudioList();
                        if (value) {
                            audioList.forEach(function(tag) {
                                tag.cacheMuted = tag.muted;
                                tag.muted = true;
                            });
                        } else {
                            audioList.forEach(function(tag) {
                                if (tag.cacheMuted != null) {
                                    tag.muted = tag.cacheMuted;
                                    tag.cacheMuted = null;
                                } else {
                                    tag.muted = false;
                                }
                            });
                        }
                    };
                    /**
                     * 按队列播放声音
                     * @param list
                     * @param id
                     */
                    AudioController.playQueue = function(list, id) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'](this, void 0, Promise, function() {
                            var controller, _loop_1, i, length;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                                switch (_a.label) {
                                    case 0:
                                        controller = new AudioController();
                                        if (id != null) {
                                            this._playingQueueMap[id] = controller;
                                        }
                                        _loop_1 = function(i, length) {
                                            var url, source, audioSource;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        url = list[i];
                                                        audioSource = _AudioSource__WEBPACK_IMPORTED_MODULE_4__['AudioSource'].get(url);
                                                        if (audioSource == null) {
                                                            source = url;
                                                        } else {
                                                            source = audioSource.base64;
                                                        }
                                                        return [
                                                            4 /*yield*/,
                                                            new Promise(function(resolve) {
                                                                controller.play(source);
                                                                controller.once(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].END, resolve);
                                                            }),
                                                        ];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        };
                                        (i = 0), (length = list.length);
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < length)) return [3 /*break*/, 4];
                                        return [5 /*yield**/, _loop_1(i, length)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        i += 1;
                                        return [3 /*break*/, 1];
                                    case 4:
                                        return [2 /*return*/];
                                }
                            });
                        });
                    };
                    /**
                     * 停止播放队列声音
                     * @param id
                     */
                    AudioController.stopQueue = function(id) {
                        var controller = this._playingQueueMap[id];
                        if (controller == null) {
                            return;
                        }
                        delete this._playingQueueMap[id];
                        controller.offByType(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].END);
                        controller.stop();
                    };
                    Object.defineProperty(AudioController.prototype, 'loop', {
                        /** 循环播放 */
                        get: function() {
                            return this._loop;
                        },
                        /** 循环播放 */
                        set: function(value) {
                            this._loop = !!value;
                            var el = this._audioTag;
                            if (el == null) {
                                return;
                            }
                            el.loop = this._loop;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioController.prototype, 'volume', {
                        /** 音量 */
                        get: function() {
                            return this._volume;
                        },
                        /** 音量 */
                        set: function(value) {
                            this._volume = value;
                            var el = this._audioTag;
                            if (el == null) {
                                return;
                            }
                            el.volume = this._volume;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioController.prototype, 'muted', {
                        /** 是否静音 */
                        get: function() {
                            return this._muted;
                        },
                        /** 是否静音 */
                        set: function(value) {
                            this._muted = !!value;
                            var el = this._audioTag;
                            if (el == null) {
                                return;
                            }
                            el.muted = this._muted;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioController.prototype, 'duration', {
                        /** 音频长度 */
                        get: function() {
                            var el = this._audioTag;
                            if (el == null) {
                                return this._duration;
                            }
                            return el.duration;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioController.prototype, 'playing', {
                        /** 是否播放中 */
                        get: function() {
                            return this._playing;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioController.prototype, 'currentTime', {
                        /** 当前播放进度 */
                        get: function() {
                            return this._currentTime;
                        },
                        /** 当前播放进度 */
                        set: function(value) {
                            if (value == null || typeof value !== _enum_EnumType__WEBPACK_IMPORTED_MODULE_3__['EnumType'].NUMBER) {
                                return;
                            }
                            this._currentTime = value;
                            var el = this._audioTag;
                            if (el == null) {
                                return;
                            }
                            if (el.readyState > 0) {
                                el.currentTime = value;
                            }
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    /**
                     * 播放一个音频
                     * @param source
                     */
                    AudioController.prototype.play = function(source) {
                        if (source == null) {
                            if (this._source == null) {
                                return;
                            } else {
                                this._getTag();
                                var el = this._audioTag;
                                el.play();
                            }
                        } else {
                            this._getTag();
                            var el = this._audioTag;
                            if (this._source === source) {
                                el.play();
                            } else {
                                this._currentTime = el.currentTime = 0;
                                this._source = source;
                                el.src = this._source;
                                el.play();
                            }
                        }
                    };
                    /** 停止 */
                    AudioController.prototype.stop = function() {
                        var el = this._audioTag;
                        if (el == null) {
                            return;
                        }
                        el.pause();
                        if (el.readyState > 0) {
                            el.currentTime = 0;
                            this._currentTime = 0;
                        }
                    };
                    /** 暂停 */
                    AudioController.prototype.pause = function() {
                        var el = this._audioTag;
                        if (el == null) {
                            return;
                        }
                        el.pause();
                    };
                    AudioController.prototype._getTag = function() {
                        if (this._audioTag != null) {
                            return;
                        }
                        var el = AudioController.factory.get();
                        el.loop = this._loop;
                        el.volume = this._volume;
                        el.muted = this._muted;
                        el.currentTime = this._currentTime;
                        el.onplay = this.onplay;
                        el.onpause = this.onpause;
                        el.ontimeupdate = this.ontimeupdate;
                        el.onended = this.onended;
                        this._audioTag = el;
                    };
                    AudioController.prototype._recoveryTag = function() {
                        var el = this._audioTag;
                        if (el == null) {
                            return;
                        }
                        this._audioTag = null;
                        el.currentTime = 0;
                        el.loop = false;
                        el.volume = 1;
                        el.muted = false;
                        el.onplay = null;
                        el.onpause = null;
                        el.ontimeupdate = null;
                        el.onended = null;
                        AudioController.factory.recovery(el);
                    };
                    /** 音频工厂 */
                    AudioController.factory = new _AudioTagFactory__WEBPACK_IMPORTED_MODULE_5__['AudioTagFactory']();
                    AudioController._playingQueueMap = {};
                    return AudioController;
                })(_base_Emitter__WEBPACK_IMPORTED_MODULE_1__['Emitter']);

                /***/
            },

        /***/ './src/audio/AudioSource.ts':
            /*!**********************************!*\
  !*** ./src/audio/AudioSource.ts ***!
  \**********************************/
            /*! exports provided: AudioSource */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AudioSource', function() {
                    return AudioSource;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ './src/index.ts');
                /* harmony import */ var _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/EnumHttpMethod */ './src/enum/EnumHttpMethod.ts');
                /* harmony import */ var _enum_EnumLoadState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enum/EnumLoadState */ './src/enum/EnumLoadState.ts');
                /* harmony import */ var _enum_EnumProcess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enum/EnumProcess */ './src/enum/EnumProcess.ts');

                /** 音频源数据 */
                var AudioSource = /** @class */ (function() {
                    function AudioSource(url) {
                        this._loadState = _enum_EnumLoadState__WEBPACK_IMPORTED_MODULE_3__['EnumLoadState'].UNLOAD;
                        this._loader = new ___WEBPACK_IMPORTED_MODULE_1__['HttpLoader']();
                        this._url = url;
                    }
                    /**
                     * 加载音频数据
                     * @param url
                     * @param cache
                     */
                    AudioSource.load = function(url, cache) {
                        if (cache === void 0) {
                            cache = true;
                        }
                        return tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'](this, void 0, Promise, function() {
                            var data;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = AudioSource._sourceMap[url];
                                        if (data == null) {
                                            data = new AudioSource(url);
                                            AudioSource._sourceMap[url] = data;
                                        }
                                        if (!(data.loadState !== _enum_EnumLoadState__WEBPACK_IMPORTED_MODULE_3__['EnumLoadState'].LOADED)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, data.load()];
                                    case 1:
                                        _a.sent();
                                        if (!cache) {
                                            delete AudioSource._sourceMap[url];
                                        }
                                        _a.label = 2;
                                    case 2:
                                        return [2 /*return*/, data];
                                }
                            });
                        });
                    };
                    /**
                     * 获取音频数据
                     * @param url
                     */
                    AudioSource.get = function(url) {
                        var data = AudioSource._sourceMap[url];
                        if (data != null && data._loadState === _enum_EnumLoadState__WEBPACK_IMPORTED_MODULE_3__['EnumLoadState'].LOADED) {
                            return data;
                        } else {
                            return null;
                        }
                    };
                    /**
                     * 预加载音频列表
                     * @param list
                     * @param cache
                     */
                    AudioSource.loadList = function(list, cache) {
                        return new Promise(function(resolve) {
                            var tempList = list.concat();
                            var resultMap = {};
                            var checkLoaded = function(source) {
                                var url;
                                if (source instanceof AudioSource) {
                                    url = source.url;
                                    resultMap[source.url] = source;
                                } else {
                                    url = source;
                                    resultMap[source] = null;
                                }
                                var index = tempList.indexOf(url);
                                if (index >= 0) {
                                    tempList.splice(index, 1);
                                }
                                if (tempList.length === 0) {
                                    resolve(resultMap);
                                }
                            };
                            var _loop_1 = function(i, length) {
                                var url = tempList[i];
                                var src = AudioSource.get(url);
                                if (src == null) {
                                    AudioSource.load(url, cache)
                                        .then(function(source) {
                                            checkLoaded(source);
                                        })
                                        .catch(function() {
                                            checkLoaded(url);
                                        });
                                } else {
                                    checkLoaded(src);
                                }
                            };
                            for (var i = 0, length = tempList.length; i < length; i += 1) {
                                _loop_1(i, length);
                            }
                        });
                    };
                    Object.defineProperty(AudioSource.prototype, 'url', {
                        /** url */
                        get: function() {
                            return this._url;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioSource.prototype, 'blob', {
                        /** blob数据 */
                        get: function() {
                            return this._blob;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioSource.prototype, 'base64', {
                        /** base64数据 */
                        get: function() {
                            return this._base64;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioSource.prototype, 'arrayBuffer', {
                        /** ArrayBuffer数据 */
                        get: function() {
                            return this._arrayBuffer;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioSource.prototype, 'loadState', {
                        /** 是否加载完成 */
                        get: function() {
                            return this._loadState;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    /** 加载 */
                    AudioSource.prototype.load = function() {
                        var _this = this;
                        return new Promise(function(resolve, reject) {
                            if (_this._loadState === _enum_EnumLoadState__WEBPACK_IMPORTED_MODULE_3__['EnumLoadState'].LOADED) {
                                resolve(_this);
                                return;
                            }
                            if (_this._loadState !== _enum_EnumLoadState__WEBPACK_IMPORTED_MODULE_3__['EnumLoadState'].LOADING) {
                                _this._loadState = _enum_EnumLoadState__WEBPACK_IMPORTED_MODULE_3__['EnumLoadState'].LOADING;
                                _this._loader.load({
                                    url: _this._url,
                                    method: _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_2__['EnumHttpMethod'].GET,
                                    responseType: 'blob',
                                });
                            }
                            var completeHandler = function(response) {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'](_this, void 0, void 0, function() {
                                    var blob;
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                                        switch (_a.label) {
                                            case 0:
                                                blob = response;
                                                this._blob = blob;
                                                if (!AudioSource.convertTypes.base64) return [3 /*break*/, 2];
                                                return [4 /*yield*/, this.readAsDataURL()];
                                            case 1:
                                                _a.sent();
                                                _a.label = 2;
                                            case 2:
                                                if (!AudioSource.convertTypes.arrayBuffer) return [3 /*break*/, 4];
                                                return [4 /*yield*/, this.readAsArrayBuffer()];
                                            case 3:
                                                _a.sent();
                                                _a.label = 4;
                                            case 4:
                                                this._loadState = _enum_EnumLoadState__WEBPACK_IMPORTED_MODULE_3__['EnumLoadState'].LOADED;
                                                resolve(this);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            };
                            var errorHandler = function() {
                                _this._loader.reset();
                                _this._loadState = _enum_EnumLoadState__WEBPACK_IMPORTED_MODULE_3__['EnumLoadState'].ERROR;
                                reject();
                            };
                            _this._loader.once(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_4__['EnumProcess'].END, completeHandler, _this);
                            _this._loader.once(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_4__['EnumProcess'].ERROR, errorHandler, _this);
                        });
                    };
                    /** 转化成base64 */
                    AudioSource.prototype.readAsDataURL = function() {
                        var _this = this;
                        return new Promise(function(resolve) {
                            if (_this._blob == null || _this._base64 != null) {
                                resolve(_this._base64);
                                return;
                            }
                            var stringReader = new FileReader();
                            stringReader.readAsDataURL(_this._blob);
                            stringReader.onload = function() {
                                _this._base64 = stringReader.result;
                                resolve(_this._base64);
                            };
                        });
                    };
                    /** 转化成ArrayBuffer */
                    AudioSource.prototype.readAsArrayBuffer = function() {
                        var _this = this;
                        return new Promise(function(resolve) {
                            if (_this._blob == null || _this._arrayBuffer != null) {
                                resolve(_this._arrayBuffer);
                                return;
                            }
                            var bufferReader = new FileReader();
                            bufferReader.readAsArrayBuffer(_this._blob);
                            bufferReader.onload = function() {
                                _this._arrayBuffer = bufferReader.result;
                                resolve(_this._arrayBuffer);
                            };
                        });
                    };
                    /** 设置加载成功后转化数据类型 */
                    AudioSource.convertTypes = {
                        base64: true,
                        arrayBuffer: false,
                    };
                    AudioSource._sourceMap = {};
                    return AudioSource;
                })();

                /***/
            },

        /***/ './src/audio/AudioTagFactory.ts':
            /*!**************************************!*\
  !*** ./src/audio/AudioTagFactory.ts ***!
  \**************************************/
            /*! exports provided: AudioTagFactory */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AudioTagFactory', function() {
                    return AudioTagFactory;
                });
                /** 音频标签工厂 */
                var AudioTagFactory = /** @class */ (function() {
                    function AudioTagFactory() {
                        var _this = this;
                        /** 所有标签的map */
                        this._audiosMap = {};
                        /** 音频标签池子 */
                        this._audiosPool = [];
                        /** 被锁定的标签 */
                        this._audiosUnLocked = [];
                        /** 记录id */
                        this._markUid = 0;
                        /** 池子容量 */
                        this._poolLimit = 30;
                        this._onTouch = function() {
                            if (_this._audiosPool.length < _this._poolLimit) {
                                for (var i = 0, length = _this._poolLimit - _this._audiosPool.length; i < length; i += 1) {
                                    var tag = _this._createTag();
                                    tag.load();
                                    tag.unLocked = true;
                                    _this._audiosPool.push(tag);
                                }
                            }
                            if (_this._audiosUnLocked.length > 0) {
                                for (var i = 0, length = _this._audiosUnLocked.length; i < length; i += 1) {
                                    var tag = _this._audiosUnLocked[i];
                                    if (!tag.unLocked || tag.currentTime <= 0) {
                                        tag.load();
                                    }
                                    tag.unLocked = true;
                                    if (!tag.inUse) {
                                        _this.recovery(tag);
                                    }
                                }
                                _this._audiosUnLocked.length = 0;
                            }
                        };
                        this.listen();
                    }
                    /** 获取标签列表 */
                    AudioTagFactory.prototype.getAudioList = function() {
                        var _this = this;
                        var list = [];
                        Object.keys(this._audiosMap).forEach(function(key) {
                            list.push(_this._audiosMap[key]);
                        });
                        return list;
                    };
                    /** 生成一个audio */
                    AudioTagFactory.prototype.get = function() {
                        var tag;
                        if (this._audiosPool.length > 0) {
                            tag = this._audiosPool.pop();
                        } else {
                            tag = this._createTag();
                            this._audiosUnLocked.push(tag);
                        }
                        tag.inUse = true;
                        return tag;
                    };
                    /**
                     * 回收一个audio
                     * @param value
                     */
                    AudioTagFactory.prototype.recovery = function(value) {
                        var tag = value;
                        if (tag.uid == null || this._audiosMap[tag.uid] !== tag) {
                            return;
                        }
                        if (tag.unLocked) {
                            if (this._audiosPool.indexOf(tag) >= 0) {
                                return;
                            }
                            this._audiosPool.push(tag);
                        } else {
                            if (this._audiosUnLocked.indexOf(tag) >= 0) {
                                return;
                            }
                            this._audiosUnLocked.push(tag);
                        }
                        tag.inUse = false;
                    };
                    AudioTagFactory.prototype._createTag = function() {
                        var tag = document.createElement('audio');
                        tag.uid = this._markUid++;
                        this._audiosMap[tag.uid] = tag;
                        return tag;
                    };
                    /** 监听 */
                    AudioTagFactory.prototype.listen = function() {
                        window.addEventListener('mousedown', this._onTouch, false);
                        window.addEventListener('touchstart', this._onTouch, false);
                    };
                    /** 取消监听 */
                    AudioTagFactory.prototype.unListen = function() {
                        window.removeEventListener('mousedown', this._onTouch, false);
                        window.removeEventListener('touchstart', this._onTouch, false);
                    };
                    return AudioTagFactory;
                })();

                /***/
            },

        /***/ './src/base/Emitter.ts':
            /*!*****************************!*\
  !*** ./src/base/Emitter.ts ***!
  \*****************************/
            /*! exports provided: Emitter */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Emitter', function() {
                    return Emitter;
                });
                /** 派发器 */
                var Emitter = /** @class */ (function() {
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
                    Emitter.prototype.on = function(type, handler, target, once) {
                        if (type == null || handler == null) {
                            return;
                        }
                        var handlerList = this._getHandlerList(type);
                        if (target == null) {
                            target = this;
                        }
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
                     */
                    Emitter.prototype.off = function(type, handler, target) {
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
                    Emitter.prototype.offByType = function(type) {
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
                    Emitter.prototype.offByTarget = function(target) {
                        var _this = this;
                        Object.keys(this._handlerMap).forEach(function(key) {
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
                    Emitter.prototype.offByHandler = function(handler) {
                        var _this = this;
                        Object.keys(this._handlerMap).forEach(function(key) {
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
                    Emitter.prototype.once = function(type, handler, target) {
                        this.on(type, handler, target, true);
                    };
                    /**
                     * 派发
                     * @param type
                     * @param params
                     */
                    Emitter.prototype.emit = function(type, arg1, arg2, arg3, arg4, arg5) {
                        var handlerList = this._getHandlerList(type);
                        if (handlerList.length === 0) {
                            return;
                        }
                        var needClean = false;
                        var argLength = arguments.length;
                        handlerList.forEach(function(data) {
                            var handler = data.handler;
                            var target = data.target;
                            switch (argLength) {
                                case 0:
                                    handler.call(target);
                                    break;
                                case 1:
                                    handler.call(target, arg1);
                                    break;
                                case 2:
                                    handler.call(target, arg1, arg2);
                                    break;
                                case 3:
                                    handler.call(target, arg1, arg2, arg3);
                                    break;
                                case 4:
                                    handler.call(target, arg1, arg2, arg3, arg4);
                                    break;
                                case 5:
                                    handler.call(target, arg1, arg2, arg3, arg4, arg5);
                                    break;
                                default:
                            }
                            if (data.once) {
                                needClean = true;
                            }
                        });
                        if (needClean) {
                            var newHandlerList = [];
                            for (var i = 0, length = handlerList.length; i < length; i += 1) {
                                var handler = handlerList[i];
                                if (handler.once) {
                                    continue;
                                }
                                newHandlerList.push(handler);
                            }
                            this._handlerMap[type] = newHandlerList;
                        }
                    };
                    Emitter.prototype._getHandlerList = function(type) {
                        var list = this._handlerMap[type];
                        if (list == null) {
                            list = [];
                            this._handlerMap[type] = list;
                        }
                        return list;
                    };
                    return Emitter;
                })();

                /***/
            },

        /***/ './src/base/Singleton.ts':
            /*!*******************************!*\
  !*** ./src/base/Singleton.ts ***!
  \*******************************/
            /*! exports provided: Singleton */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Singleton', function() {
                    return Singleton;
                });
                /** 单例 */
                var Singleton = /** @class */ (function() {
                    function Singleton() {
                        this._singletonMap = new Map();
                    }
                    /**
                     * 添加一个单例
                     * @param value 类
                     * @param instance 实例(可传入非参数1 类的实例)
                     */
                    Singleton.prototype.map = function(value, instance) {
                        if (instance == null) {
                            instance = this._singletonMap.get(value);
                            if (instance == null) {
                                instance = new value();
                                this._singletonMap.set(value, instance);
                            }
                        } else {
                            this._singletonMap.set(value, instance);
                        }
                    };
                    /**
                     * 获取一个单例
                     * @param value
                     */
                    Singleton.prototype.get = function(value) {
                        var instance = this._singletonMap.get(value);
                        if (instance == null) {
                            instance = instance = new value();
                            this._singletonMap.set(value, instance);
                        }
                        return instance;
                    };
                    /**
                     * 移除一个单例
                     * @param value
                     */
                    Singleton.prototype.remove = function(value) {
                        this._singletonMap.delete(value);
                    };
                    /** 单例的实例 */
                    Singleton.instance = new Singleton();
                    return Singleton;
                })();

                /***/
            },

        /***/ './src/enum/EnumHttpMethod.ts':
            /*!************************************!*\
  !*** ./src/enum/EnumHttpMethod.ts ***!
  \************************************/
            /*! exports provided: EnumHttpMethod */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EnumHttpMethod', function() {
                    return EnumHttpMethod;
                });
                /** http method */
                var EnumHttpMethod;
                (function(EnumHttpMethod) {
                    EnumHttpMethod['HEAD'] = 'HEAD';
                    EnumHttpMethod['GET'] = 'GET';
                    EnumHttpMethod['POST'] = 'POST';
                    EnumHttpMethod['OPTIONS'] = 'OPTIONS';
                    EnumHttpMethod['PUT'] = 'PUT';
                    EnumHttpMethod['PATCH'] = 'PATCH';
                    EnumHttpMethod['DELETE'] = 'DELETE';
                    EnumHttpMethod['TRACE'] = 'TRACE';
                    EnumHttpMethod['CONNECT'] = 'CONNECT';
                })(EnumHttpMethod || (EnumHttpMethod = {}));

                /***/
            },

        /***/ './src/enum/EnumLoadState.ts':
            /*!***********************************!*\
  !*** ./src/enum/EnumLoadState.ts ***!
  \***********************************/
            /*! exports provided: EnumLoadState */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EnumLoadState', function() {
                    return EnumLoadState;
                });
                /** 加载状态 */
                var EnumLoadState;
                (function(EnumLoadState) {
                    EnumLoadState['UNLOAD'] = 'unload';
                    EnumLoadState['LOADING'] = 'loading';
                    EnumLoadState['LOADED'] = 'loaded';
                    EnumLoadState['ERROR'] = 'error';
                })(EnumLoadState || (EnumLoadState = {}));

                /***/
            },

        /***/ './src/enum/EnumProcess.ts':
            /*!*********************************!*\
  !*** ./src/enum/EnumProcess.ts ***!
  \*********************************/
            /*! exports provided: EnumProcess */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EnumProcess', function() {
                    return EnumProcess;
                });
                /** 过程枚举 */
                var EnumProcess;
                (function(EnumProcess) {
                    EnumProcess['START'] = 'start';
                    EnumProcess['STOP'] = 'stop';
                    EnumProcess['PAUSE'] = 'pause';
                    EnumProcess['END'] = 'end';
                    EnumProcess['PROGRESS'] = 'progress';
                    EnumProcess['ERROR'] = 'error';
                })(EnumProcess || (EnumProcess = {}));

                /***/
            },

        /***/ './src/enum/EnumType.ts':
            /*!******************************!*\
  !*** ./src/enum/EnumType.ts ***!
  \******************************/
            /*! exports provided: EnumType */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'EnumType', function() {
                    return EnumType;
                });
                /** js类型 */
                var EnumType;
                (function(EnumType) {
                    EnumType['STRING'] = 'string';
                    EnumType['NUMBER'] = 'number';
                    EnumType['BOOLEAN'] = 'boolean';
                    EnumType['FUNCTION'] = 'function';
                    EnumType['OBJECT'] = 'object';
                })(EnumType || (EnumType = {}));

                /***/
            },

        /***/ './src/index.ts':
            /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
            /*! exports provided: Emitter, Singleton, HttpLoader, ScriptLoader, ImageLoader */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _base_Emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/Emitter */ './src/base/Emitter.ts');
                /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'Emitter', function() {
                    return _base_Emitter__WEBPACK_IMPORTED_MODULE_0__['Emitter'];
                });

                /* harmony import */ var _base_Singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/Singleton */ './src/base/Singleton.ts');
                /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'Singleton', function() {
                    return _base_Singleton__WEBPACK_IMPORTED_MODULE_1__['Singleton'];
                });

                /* harmony import */ var _loader_HttpLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/HttpLoader */ './src/loader/HttpLoader.ts');
                /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'HttpLoader', function() {
                    return _loader_HttpLoader__WEBPACK_IMPORTED_MODULE_2__['HttpLoader'];
                });

                /* harmony import */ var _loader_ImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/ImageLoader */ './src/loader/ImageLoader.ts');
                /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'ImageLoader', function() {
                    return _loader_ImageLoader__WEBPACK_IMPORTED_MODULE_3__['ImageLoader'];
                });

                /* harmony import */ var _loader_ScriptLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader/ScriptLoader */ './src/loader/ScriptLoader.ts');
                /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'ScriptLoader', function() {
                    return _loader_ScriptLoader__WEBPACK_IMPORTED_MODULE_4__['ScriptLoader'];
                });

                /***/
            },

        /***/ './src/loader/HttpLoader.ts':
            /*!**********************************!*\
  !*** ./src/loader/HttpLoader.ts ***!
  \**********************************/
            /*! exports provided: HttpLoader */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'HttpLoader', function() {
                    return HttpLoader;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _base_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Emitter */ './src/base/Emitter.ts');
                /* harmony import */ var _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/EnumHttpMethod */ './src/enum/EnumHttpMethod.ts');
                /* harmony import */ var _enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enum/EnumProcess */ './src/enum/EnumProcess.ts');

                var HttpLoader = /** @class */ (function(_super) {
                    tslib__WEBPACK_IMPORTED_MODULE_0__['__extends'](HttpLoader, _super);
                    function HttpLoader() {
                        return (_super !== null && _super.apply(this, arguments)) || this;
                    }
                    /**
                     * 加载
                     * @param config
                     */
                    HttpLoader.prototype.load = function(config) {
                        var _this = this;
                        if (config == null || this._xhr != null) {
                            return;
                        }
                        var url = config.url;
                        var method = config.method || _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_2__['EnumHttpMethod'].GET;
                        var data = config.data;
                        var requestHeader = config.requestHeader;
                        var sendData = null;
                        if (data != null) {
                            var contentType = config.contentType || (requestHeader && requestHeader['Content-Type']);
                            switch (method) {
                                case _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_2__['EnumHttpMethod'].POST:
                                    switch (contentType) {
                                        case 'application/x-www-form-urlencoded':
                                            var params = Object.keys(data).map(function(key) {
                                                return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                                            });
                                            sendData = params.join('&');
                                            break;
                                        case 'multipart/form-data':
                                            sendData = new FormData();
                                            Object.keys(data).forEach(function(key) {
                                                sendData.append(key, data[key]);
                                            });
                                            break;
                                        default:
                                            sendData = JSON.stringify(data);
                                            break;
                                    }
                                    break;
                                case _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_2__['EnumHttpMethod'].GET:
                                    // TODO 支持data变量变为参数拼接至url后面
                                    break;
                                default:
                                    break;
                            }
                        }
                        var xhr = new XMLHttpRequest();
                        this._xhr = xhr;
                        xhr.open(method, url, true);
                        if (config.withCredentials) {
                            xhr.withCredentials = config.withCredentials;
                        }
                        if (config.responseType != null) {
                            xhr.responseType = config.responseType;
                        }
                        if (requestHeader != null) {
                            var dict_1 = requestHeader;
                            Object.keys(dict_1).forEach(function(key) {
                                xhr.setRequestHeader(key, dict_1[key]);
                            });
                        }
                        if (config.contentType != null) {
                            xhr.overrideMimeType(config.contentType);
                        }
                        var onError = function() {
                            _this.reset();
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].ERROR);
                        };
                        xhr.onload = function() {
                            var status = xhr.status;
                            if (status === 200) {
                                var data_1 = xhr.response || xhr.responseText;
                                _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].END, data_1);
                            } else {
                                onError();
                            }
                        };
                        xhr.onprogress = function(evt) {
                            var total = evt.total;
                            var loaded = evt.loaded;
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].PROGRESS, loaded, total);
                        };
                        xhr.onerror = function(evt) {
                            onError();
                        };
                        xhr.send(sendData);
                        this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].START);
                    };
                    /** 重置 */
                    HttpLoader.prototype.reset = function() {
                        if (this._xhr == null) {
                            return;
                        }
                        this._xhr.onreadystatechange = null;
                        this._xhr.onload = null;
                        this._xhr.onprogress = null;
                        this._xhr.onerror = null;
                        this._xhr = null;
                    };
                    return HttpLoader;
                })(_base_Emitter__WEBPACK_IMPORTED_MODULE_1__['Emitter']);

                /***/
            },

        /***/ './src/loader/ImageLoader.ts':
            /*!***********************************!*\
  !*** ./src/loader/ImageLoader.ts ***!
  \***********************************/
            /*! exports provided: ImageLoader */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ImageLoader', function() {
                    return ImageLoader;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _base_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Emitter */ './src/base/Emitter.ts');
                /* harmony import */ var _enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/EnumProcess */ './src/enum/EnumProcess.ts');

                var ImageLoader = /** @class */ (function(_super) {
                    tslib__WEBPACK_IMPORTED_MODULE_0__['__extends'](ImageLoader, _super);
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
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].END, _this._image);
                        };
                        img.onprogress = function(evt) {
                            var total = evt.total;
                            var loaded = evt.loaded;
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].PROGRESS, loaded, total);
                        };
                        img.onerror = function() {
                            _this.reset();
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].ERROR);
                        };
                        this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].START);
                    };
                    /** 重置 */
                    ImageLoader.prototype.reset = function() {
                        this._image.onload = null;
                        this._image.onprogress = null;
                        this._image.onerror = null;
                        this._image = null;
                    };
                    return ImageLoader;
                })(_base_Emitter__WEBPACK_IMPORTED_MODULE_1__['Emitter']);

                /***/
            },

        /***/ './src/loader/ScriptLoader.ts':
            /*!************************************!*\
  !*** ./src/loader/ScriptLoader.ts ***!
  \************************************/
            /*! exports provided: ScriptLoader */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'ScriptLoader', function() {
                    return ScriptLoader;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _base_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Emitter */ './src/base/Emitter.ts');
                /* harmony import */ var _enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enum/EnumProcess */ './src/enum/EnumProcess.ts');

                var ScriptLoader = /** @class */ (function(_super) {
                    tslib__WEBPACK_IMPORTED_MODULE_0__['__extends'](ScriptLoader, _super);
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
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].END, _this._script);
                        };
                        script.onprogress = function(evt) {
                            var total = evt.total;
                            var loaded = evt.loaded;
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].PROGRESS, loaded, total);
                        };
                        script.onerror = function() {
                            _this.reset();
                            _this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].ERROR);
                        };
                        if (config.appendTo == null) {
                            document.body.appendChild(script);
                        } else {
                            config.appendTo.appendChild(script);
                        }
                        this.emit(_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].START);
                    };
                    /** 重置 */
                    ScriptLoader.prototype.reset = function() {
                        this._script.onload = null;
                        this._script.onprogress = null;
                        this._script.onerror = null;
                        this._script = null;
                    };
                    return ScriptLoader;
                })(_base_Emitter__WEBPACK_IMPORTED_MODULE_1__['Emitter']);

                /***/
            },

        /***/ './test/TestAudio.ts':
            /*!***************************!*\
  !*** ./test/TestAudio.ts ***!
  \***************************/
            /*! exports provided: TestAudio */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TestAudio', function() {
                    return TestAudio;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _src_audio_AudioController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../src/audio/AudioController */ './src/audio/AudioController.ts',
                );
                /* harmony import */ var _src_audio_AudioSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/audio/AudioSource */ './src/audio/AudioSource.ts');
                /* harmony import */ var _src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/enum/EnumProcess */ './src/enum/EnumProcess.ts');

                function TestAudio() {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'](this, void 0, Promise, function() {
                        var url, source, controller;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('---------- TestAudio ----------');
                                    console.log('\n');
                                    url = './test_audio.mp3';
                                    return [4 /*yield*/, _src_audio_AudioSource__WEBPACK_IMPORTED_MODULE_2__['AudioSource'].load(url)];
                                case 1:
                                    source = _a.sent();
                                    console.log(source);
                                    controller = new _src_audio_AudioController__WEBPACK_IMPORTED_MODULE_1__['AudioController']();
                                    controller.loop = true;
                                    controller.play(source.base64);
                                    controller.on(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].START, function() {
                                        console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].START);
                                    });
                                    controller.on(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].STOP, function() {
                                        console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].STOP);
                                    });
                                    controller.on(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].PAUSE, function() {
                                        console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].PAUSE);
                                    });
                                    controller.on(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].END, function() {
                                        console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].END);
                                    });
                                    controller.on(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_3__['EnumProcess'].PROGRESS, function(cur, total) {
                                        // console.log(EnumProcess.PROGRESS, cur, total);
                                    });
                                    setTimeout(function() {
                                        controller.pause();
                                        _src_audio_AudioController__WEBPACK_IMPORTED_MODULE_1__['AudioController'].factory.get();
                                        setTimeout(function() {
                                            controller.play();
                                        }, 3000);
                                    }, 3000);
                                    console.log('\n');
                                    console.log('---------- ---------- ----------');
                                    console.log('\n\n');
                                    return [2 /*return*/];
                            }
                        });
                    });
                }

                /***/
            },

        /***/ './test/TestEmitter.ts':
            /*!*****************************!*\
  !*** ./test/TestEmitter.ts ***!
  \*****************************/
            /*! exports provided: TestEmitter */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TestEmitter', function() {
                    return TestEmitter;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index */ './src/index.ts');

                function TestEmitter() {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'](this, void 0, Promise, function() {
                        var emitter, type, handler;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                            console.log('---------- TestEmitter ----------');
                            console.log('\n');
                            emitter = new _src_index__WEBPACK_IMPORTED_MODULE_1__['Emitter']();
                            type = 'test';
                            handler = function() {
                                console.log('This is handler');
                            };
                            console.log('on');
                            emitter.on(type, handler, null);
                            console.log('emit ' + type);
                            emitter.emit(type);
                            console.log('\n');
                            console.log('off');
                            emitter.off(type, handler, null);
                            console.log('emit ' + type);
                            emitter.emit(type);
                            console.log('\n');
                            console.log('once');
                            emitter.once(type, handler, null);
                            console.log('emit ' + type + ' 1');
                            emitter.emit(type);
                            console.log('emit ' + type + ' 2');
                            emitter.emit(type);
                            console.log('\n');
                            console.log('---------- ---------- ----------');
                            console.log('\n\n');
                            return [2 /*return*/];
                        });
                    });
                }

                /***/
            },

        /***/ './test/TestHttpLoader.ts':
            /*!********************************!*\
  !*** ./test/TestHttpLoader.ts ***!
  \********************************/
            /*! exports provided: TestHttpLoader */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TestHttpLoader', function() {
                    return TestHttpLoader;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _src_enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../src/enum/EnumHttpMethod */ './src/enum/EnumHttpMethod.ts',
                );
                /* harmony import */ var _src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/enum/EnumProcess */ './src/enum/EnumProcess.ts');
                /* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/index */ './src/index.ts');

                function TestHttpLoader() {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'](this, void 0, Promise, function() {
                        var httpLoader, url, config;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('---------- TestHttpLoader ----------');
                                    console.log('\n');
                                    httpLoader = new _src_index__WEBPACK_IMPORTED_MODULE_3__['HttpLoader']();
                                    url = 'http://www.test.17zuoye.net/resources/apps/student/megrez/assets/full_reading_loading_ske-7f463979.json';
                                    config = {
                                        url: url,
                                        method: _src_enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_1__['EnumHttpMethod'].GET,
                                        responseType: 'json',
                                    };
                                    console.log('send', config);
                                    return [
                                        4 /*yield*/,
                                        new Promise(function(resolve) {
                                            httpLoader.load(config);
                                            httpLoader.on(
                                                _src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].END,
                                                function(data) {
                                                    console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].END);
                                                    resolve();
                                                },
                                                null,
                                            );
                                            httpLoader.on(
                                                _src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].ERROR,
                                                function(err) {
                                                    console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_2__['EnumProcess'].ERROR, err);
                                                    resolve();
                                                },
                                                null,
                                            );
                                        }),
                                    ];
                                case 1:
                                    _a.sent();
                                    console.log('---------- ---------- ----------');
                                    console.log('\n\n');
                                    return [2 /*return*/];
                            }
                        });
                    });
                }

                /***/
            },

        /***/ './test/TestImageLoader.ts':
            /*!*********************************!*\
  !*** ./test/TestImageLoader.ts ***!
  \*********************************/
            /*! exports provided: TestImageLoader */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TestImageLoader', function() {
                    return TestImageLoader;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/enum/EnumProcess */ './src/enum/EnumProcess.ts');
                /* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/index */ './src/index.ts');

                function TestImageLoader() {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'](this, void 0, Promise, function() {
                        var imageLoader, config;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('---------- TestImageLoader ----------');
                                    console.log('\n');
                                    imageLoader = new _src_index__WEBPACK_IMPORTED_MODULE_2__['ImageLoader']();
                                    config = {
                                        url: 'https://www.baidu.com/img/xinshouye_1aa82cd448e4c0aee0961ed6e290baaf.gif',
                                    };
                                    console.log('send', config);
                                    return [
                                        4 /*yield*/,
                                        new Promise(function(resolve) {
                                            imageLoader.load(config);
                                            imageLoader.on(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__['EnumProcess'].END, function(data) {
                                                console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__['EnumProcess'].END, data);
                                                resolve();
                                            });
                                            imageLoader.on(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__['EnumProcess'].ERROR, function(err) {
                                                console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__['EnumProcess'].ERROR, err);
                                                resolve();
                                            });
                                        }),
                                    ];
                                case 1:
                                    _a.sent();
                                    console.log('---------- ---------- ----------');
                                    console.log('\n\n');
                                    return [2 /*return*/];
                            }
                        });
                    });
                }

                /***/
            },

        /***/ './test/TestScriptLoader.ts':
            /*!**********************************!*\
  !*** ./test/TestScriptLoader.ts ***!
  \**********************************/
            /*! exports provided: TestScriptLoader */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TestScriptLoader', function() {
                    return TestScriptLoader;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/enum/EnumProcess */ './src/enum/EnumProcess.ts');
                /* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/index */ './src/index.ts');

                function TestScriptLoader() {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'](this, void 0, Promise, function() {
                        var scriptLoader, config;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('---------- TestScriptLoader ----------');
                                    console.log('\n');
                                    scriptLoader = new _src_index__WEBPACK_IMPORTED_MODULE_2__['ScriptLoader']();
                                    config = {
                                        url: './test_scriptloader.js',
                                    };
                                    console.log('send', config);
                                    return [
                                        4 /*yield*/,
                                        new Promise(function(resolve) {
                                            scriptLoader.load(config);
                                            scriptLoader.on(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__['EnumProcess'].END, function(data) {
                                                console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__['EnumProcess'].END, data);
                                                resolve();
                                            });
                                            scriptLoader.on(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__['EnumProcess'].ERROR, function(err) {
                                                console.log(_src_enum_EnumProcess__WEBPACK_IMPORTED_MODULE_1__['EnumProcess'].ERROR, err);
                                                resolve();
                                            });
                                        }),
                                    ];
                                case 1:
                                    _a.sent();
                                    console.log('---------- ---------- ----------');
                                    console.log('\n\n');
                                    return [2 /*return*/];
                            }
                        });
                    });
                }

                /***/
            },

        /***/ './test/TestSingleton.ts':
            /*!*******************************!*\
  !*** ./test/TestSingleton.ts ***!
  \*******************************/
            /*! exports provided: TestSingleton */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'TestSingleton', function() {
                    return TestSingleton;
                });
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js');
                /* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index */ './src/index.ts');

                function TestSingleton() {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'](this, void 0, Promise, function() {
                        var singleton;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__['__generator'](this, function(_a) {
                            console.log('---------- TestSingleton ----------');
                            console.log('\n');
                            singleton = new _src_index__WEBPACK_IMPORTED_MODULE_1__['Singleton']();
                            console.log('map Emitter');
                            singleton.map(_src_index__WEBPACK_IMPORTED_MODULE_1__['Emitter']);
                            console.log('get', singleton.get(_src_index__WEBPACK_IMPORTED_MODULE_1__['Emitter']));
                            console.log('\n');
                            console.log('map Emitter -> new HttpLoader()');
                            singleton.map(_src_index__WEBPACK_IMPORTED_MODULE_1__['Emitter'], new _src_index__WEBPACK_IMPORTED_MODULE_1__['HttpLoader']());
                            console.log('get', singleton.get(_src_index__WEBPACK_IMPORTED_MODULE_1__['Emitter']));
                            console.log('\n');
                            console.log('remove Emitter');
                            singleton.remove(_src_index__WEBPACK_IMPORTED_MODULE_1__['Emitter']);
                            console.log('\n');
                            console.log('---------- ---------- ----------');
                            console.log('\n\n');
                            return [2 /*return*/];
                        });
                    });
                }

                /***/
            },

        /***/ './test/test.ts':
            /*!**********************!*\
  !*** ./test/test.ts ***!
  \**********************/
            /*! no exports provided */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _TestAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestAudio */ './test/TestAudio.ts');
                /* harmony import */ var _TestEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestEmitter */ './test/TestEmitter.ts');
                /* harmony import */ var _TestHttpLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestHttpLoader */ './test/TestHttpLoader.ts');
                /* harmony import */ var _TestImageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestImageLoader */ './test/TestImageLoader.ts');
                /* harmony import */ var _TestScriptLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TestScriptLoader */ './test/TestScriptLoader.ts');
                /* harmony import */ var _TestSingleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TestSingleton */ './test/TestSingleton.ts');

                var configs = [
                    {
                        title: 'TestAudio',
                        handler: _TestAudio__WEBPACK_IMPORTED_MODULE_0__['TestAudio'],
                    },
                    {
                        title: 'TestEmitter',
                        handler: _TestEmitter__WEBPACK_IMPORTED_MODULE_1__['TestEmitter'],
                    },
                    {
                        title: 'TestHttpLoader',
                        handler: _TestHttpLoader__WEBPACK_IMPORTED_MODULE_2__['TestHttpLoader'],
                    },
                    {
                        title: 'TestScriptLoader',
                        handler: _TestScriptLoader__WEBPACK_IMPORTED_MODULE_4__['TestScriptLoader'],
                    },
                    {
                        title: 'TestImageLoader',
                        handler: _TestImageLoader__WEBPACK_IMPORTED_MODULE_3__['TestImageLoader'],
                    },
                    {
                        title: 'TestSingleton',
                        handler: _TestSingleton__WEBPACK_IMPORTED_MODULE_5__['TestSingleton'],
                    },
                ];
                configs.forEach(function(value) {
                    var btn = document.createElement('button');
                    btn.style.display = 'block';
                    btn.style.margin = '10px';
                    btn.textContent = value.title;
                    btn.onclick = function() {
                        value.handler();
                    };
                    document.body.append(btn);
                });

                /***/
            },

        /******/
    },
);
//# sourceMappingURL=test.js.map
