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
        /******/ /******/ modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__,
        ); // Flag the module as loaded
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
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter,
            });
            /******/
        }
        /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module',
            });
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
        value,
        mode,
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
            mode & 4 &&
            typeof value === 'object' &&
            value &&
            value.__esModule
        )
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value,
        });
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
    /******/ /******/ return __webpack_require__(
        (__webpack_require__.s = './test/test.ts'),
    );
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
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__extends',
                    function() {
                        return __extends;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__assign',
                    function() {
                        return __assign;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__rest',
                    function() {
                        return __rest;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__decorate',
                    function() {
                        return __decorate;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__param',
                    function() {
                        return __param;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__metadata',
                    function() {
                        return __metadata;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__awaiter',
                    function() {
                        return __awaiter;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__generator',
                    function() {
                        return __generator;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__exportStar',
                    function() {
                        return __exportStar;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__values',
                    function() {
                        return __values;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__read',
                    function() {
                        return __read;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__spread',
                    function() {
                        return __spread;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__await',
                    function() {
                        return __await;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__asyncGenerator',
                    function() {
                        return __asyncGenerator;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__asyncDelegator',
                    function() {
                        return __asyncDelegator;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__asyncValues',
                    function() {
                        return __asyncValues;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__makeTemplateObject',
                    function() {
                        return __makeTemplateObject;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__importStar',
                    function() {
                        return __importStar;
                    },
                );
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__importDefault',
                    function() {
                        return __importDefault;
                    },
                );
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
                            for (var p in b)
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                        };
                    return extendStatics(d, b);
                };

                function __extends(d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype =
                        b === null
                            ? Object.create(b)
                            : ((__.prototype = b.prototype), new __());
                }

                var __assign = function() {
                    __assign =
                        Object.assign ||
                        function __assign(t) {
                            for (
                                var s, i = 1, n = arguments.length;
                                i < n;
                                i++
                            ) {
                                s = arguments[i];
                                for (var p in s)
                                    if (
                                        Object.prototype.hasOwnProperty.call(
                                            s,
                                            p,
                                        )
                                    )
                                        t[p] = s[p];
                            }
                            return t;
                        };
                    return __assign.apply(this, arguments);
                };

                function __rest(s, e) {
                    var t = {};
                    for (var p in s)
                        if (
                            Object.prototype.hasOwnProperty.call(s, p) &&
                            e.indexOf(p) < 0
                        )
                            t[p] = s[p];
                    if (
                        s != null &&
                        typeof Object.getOwnPropertySymbols === 'function'
                    )
                        for (
                            var i = 0, p = Object.getOwnPropertySymbols(s);
                            i < p.length;
                            i++
                        )
                            if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
                    return t;
                }

                function __decorate(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(
                                      target,
                                      key,
                                  ))
                                : desc,
                        d;
                    if (
                        typeof Reflect === 'object' &&
                        typeof Reflect.decorate === 'function'
                    )
                        r = Reflect.decorate(decorators, target, key, desc);
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r =
                                    (c < 3
                                        ? d(r)
                                        : c > 3
                                        ? d(target, key, r)
                                        : d(target, key)) || r;
                    return (
                        c > 3 && r && Object.defineProperty(target, key, r), r
                    );
                }

                function __param(paramIndex, decorator) {
                    return function(target, key) {
                        decorator(target, key, paramIndex);
                    };
                }

                function __metadata(metadataKey, metadataValue) {
                    if (
                        typeof Reflect === 'object' &&
                        typeof Reflect.metadata === 'function'
                    )
                        return Reflect.metadata(metadataKey, metadataValue);
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
                        step(
                            (generator = generator.apply(
                                thisArg,
                                _arguments || [],
                            )).next(),
                        );
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
                        (g = {
                            next: verb(0),
                            throw: verb(1),
                            return: verb(2),
                        }),
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
                        if (f)
                            throw new TypeError(
                                'Generator is already executing.',
                            );
                        while (_)
                            try {
                                if (
                                    ((f = 1),
                                    y &&
                                        (t =
                                            op[0] & 2
                                                ? y['return']
                                                : op[0]
                                                ? y['throw'] ||
                                                  ((t = y['return']) &&
                                                      t.call(y),
                                                  0)
                                                : y.next) &&
                                        !(t = t.call(y, op[1])).done)
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
                                        if (
                                            !((t = _.trys),
                                            (t =
                                                t.length > 0 &&
                                                t[t.length - 1])) &&
                                            (op[0] === 6 || op[0] === 2)
                                        ) {
                                            _ = 0;
                                            continue;
                                        }
                                        if (
                                            op[0] === 3 &&
                                            (!t ||
                                                (op[1] > t[0] && op[1] < t[3]))
                                        ) {
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
                    for (var p in m)
                        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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
                        while (
                            (n === void 0 || n-- > 0) &&
                            !(r = i.next()).done
                        )
                            ar.push(r.value);
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
                    for (var ar = [], i = 0; i < arguments.length; i++)
                        ar = ar.concat(__read(arguments[i]));
                    return ar;
                }

                function __await(v) {
                    return this instanceof __await
                        ? ((this.v = v), this)
                        : new __await(v);
                }

                function __asyncGenerator(thisArg, _arguments, generator) {
                    if (!Symbol.asyncIterator)
                        throw new TypeError(
                            'Symbol.asyncIterator is not defined.',
                        );
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
                        r.value instanceof __await
                            ? Promise.resolve(r.value.v).then(fulfill, reject)
                            : settle(q[0][2], r);
                    }
                    function fulfill(value) {
                        resume('next', value);
                    }
                    function reject(value) {
                        resume('throw', value);
                    }
                    function settle(f, v) {
                        if ((f(v), q.shift(), q.length))
                            resume(q[0][0], q[0][1]);
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
                                  return (p = !p)
                                      ? {
                                            value: __await(o[n](v)),
                                            done: n === 'return',
                                        }
                                      : f
                                      ? f(v)
                                      : v;
                              }
                            : f;
                    }
                }

                function __asyncValues(o) {
                    if (!Symbol.asyncIterator)
                        throw new TypeError(
                            'Symbol.asyncIterator is not defined.',
                        );
                    var m = o[Symbol.asyncIterator],
                        i;
                    return m
                        ? m.call(o)
                        : ((o =
                              typeof __values === 'function'
                                  ? __values(o)
                                  : o[Symbol.iterator]()),
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
                                    (v = o[n](v)),
                                        settle(
                                            resolve,
                                            reject,
                                            v.done,
                                            v.value,
                                        );
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
                    if (mod != null)
                        for (var k in mod)
                            if (Object.hasOwnProperty.call(mod, k))
                                result[k] = mod[k];
                    result.default = mod;
                    return result;
                }

                function __importDefault(mod) {
                    return mod && mod.__esModule ? mod : { default: mod };
                }

                /***/
            },

        /***/ './src/audio/Audio.ts':
            /*!****************************!*\
  !*** ./src/audio/Audio.ts ***!
  \****************************/
            /*! exports provided: Audio */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Audio',
                    function() {
                        return Audio;
                    },
                );
                /* harmony import */ var _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../enum/EnumEventLoader */ './src/enum/EnumEventLoader.ts',
                );
                /* harmony import */ var _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../enum/EnumHttpMethod */ './src/enum/EnumHttpMethod.ts',
                );
                /* harmony import */ var _loader_HttpLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../loader/HttpLoader */ './src/loader/HttpLoader.ts',
                );
                /* harmony import */ var _AudioSourceData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./AudioSourceData */ './src/audio/AudioSourceData.ts',
                );
                /* harmony import */ var _AudioTagFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./AudioTagFactory */ './src/audio/AudioTagFactory.ts',
                );

                /** 音频管理器 */
                var Audio = /** @class */ (function() {
                    function Audio() {
                        this._factory = new _AudioTagFactory__WEBPACK_IMPORTED_MODULE_4__[
                            'AudioTagFactory'
                        ]();
                        this._sourceMap = {};
                        this._loadingMap = {};
                        this._playingMap = {};
                    }
                    /**
                     * 设置标签缓存的上限
                     * @param value
                     */
                    Audio.prototype.setTagLimit = function(value) {
                        this._factory.setLimit(value);
                    };
                    /** 获取一个audio标签 */
                    Audio.prototype.getTag = function() {
                        return this._factory.get();
                    };
                    /**
                     * 回收一个audio标签
                     * @param value
                     */
                    Audio.prototype.recoveryTag = function(value) {
                        this._factory.recovery(value);
                    };
                    /**
                     * 设置静音
                     * @param value
                     */
                    Audio.prototype.setMuted = function(value) {
                        if (value) {
                            this._factory.getTagsList().forEach(function(tag) {
                                tag.ext.mutedState = !!tag.muted;
                                tag.muted = true;
                            });
                        } else {
                            this._factory.getTagsList().forEach(function(tag) {
                                if (tag.ext.mutedState != null) {
                                    tag.muted = tag.ext.mutedState;
                                    tag.ext.mutedState = null;
                                } else {
                                    tag.muted = false;
                                }
                            });
                        }
                    };
                    /**
                     * 通过url获取一个音频资源数据
                     * @param url
                     */
                    Audio.prototype.getSource = function(url) {
                        return this._sourceMap[url];
                    };
                    /**
                     * 移除一个音频资源数据
                     * @param url
                     */
                    Audio.prototype.removeSource = function(url) {
                        delete this._sourceMap[url];
                    };
                    /**
                     * 加载一个音频
                     * @param params
                     */
                    Audio.prototype.load = function(params) {
                        var _this = this;
                        var url = params.url;
                        var data = this._sourceMap[url];
                        if (data != null) {
                            params.onComplete && params.onComplete(data);
                            return;
                        }
                        var loader = this._loadingMap[url];
                        if (loader == null) {
                            loader = new _loader_HttpLoader__WEBPACK_IMPORTED_MODULE_2__[
                                'HttpLoader'
                            ]();
                            this._loadingMap[url] = loader;
                            loader.load({
                                url: url,
                                method:
                                    _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_1__[
                                        'EnumHttpMethod'
                                    ].GET,
                                responseType: 'blob',
                                withCredentials: true,
                                requestHeader: {
                                    'Content-Type':
                                        'application/x-www-form-urlencoded',
                                },
                            });
                        }
                        var progressHandler = function(loaded, total) {
                            params.onProgress &&
                                params.onProgress(loaded, total);
                        };
                        var completeHandler = function(response) {
                            var data = _this._sourceMap[url];
                            if (data == null) {
                                delete _this._loadingMap[url];
                                var blob = response;
                                data = new _AudioSourceData__WEBPACK_IMPORTED_MODULE_3__[
                                    'AudioSourceData'
                                ](url, blob);
                                _this._sourceMap[url] = data;
                                data.readAsDataURL(function() {
                                    params.onComplete &&
                                        params.onComplete(data);
                                });
                            } else {
                                params.onComplete && params.onComplete(data);
                            }
                            loader.off(
                                _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_0__[
                                    'EnumEventLoader'
                                ].PROGRESS,
                                progressHandler,
                            );
                        };
                        var errorHandler = function() {
                            delete _this._loadingMap[url];
                            params.onError && params.onError();
                        };
                        loader.on(
                            _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_0__[
                                'EnumEventLoader'
                            ].PROGRESS,
                            progressHandler,
                        );
                        loader.once(
                            _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_0__[
                                'EnumEventLoader'
                            ].COMPLETE,
                            completeHandler,
                        );
                        loader.once(
                            _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_0__[
                                'EnumEventLoader'
                            ].ERROR,
                            errorHandler,
                        );
                    };
                    /**
                     * 播放一个音频
                     * @param params
                     */
                    Audio.prototype.play = function(params) {
                        var _this = this;
                        var url = params.url;
                        if (this._playingMap[url] != null) {
                            return;
                        }
                        var tag = this.getTag();
                        var sourceData = this.getSource(url);
                        var base64 = sourceData && sourceData.base64;
                        if (base64 == null) {
                            tag.src = url;
                        } else {
                            tag.src = base64;
                        }
                        var onProgress = function() {
                            if (params.progressHandler != null) {
                                var currentTime = tag.currentTime || 0;
                                var duration = tag.duration || 0;
                                params.progressHandler(currentTime, duration);
                            }
                        };
                        tag.ontimeupdate = function() {
                            onProgress();
                        };
                        tag.onseeked = function() {
                            onProgress();
                        };
                        tag.onerror = function() {
                            if (params.errorHandler != null) {
                                params.errorHandler();
                            }
                        };
                        tag.onended = function() {
                            _this._disposeTag(url);
                            if (params.endedHandler != null) {
                                params.endedHandler();
                            }
                        };
                        tag.loop = !!params.loop;
                        tag.play();
                        this._playingMap[url] = tag;
                    };
                    /**
                     * 停止一个音频
                     * @param url
                     */
                    Audio.prototype.stop = function(url) {
                        var tag = this._playingMap[url];
                        if (tag == null) {
                            return;
                        }
                        tag.pause();
                        tag.currentTime = 0;
                        this._disposeTag(url);
                    };
                    Audio.prototype._disposeTag = function(url) {
                        var tag = this._playingMap[url];
                        if (tag == null) {
                            return;
                        }
                        tag.ontimeupdate = null;
                        tag.onseeked = null;
                        tag.onerror = null;
                        tag.onended = null;
                        delete this._playingMap[url];
                        this.recoveryTag(tag);
                    };
                    return Audio;
                })();

                /***/
            },

        /***/ './src/audio/AudioSourceData.ts':
            /*!**************************************!*\
  !*** ./src/audio/AudioSourceData.ts ***!
  \**************************************/
            /*! exports provided: AudioSourceData */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AudioSourceData',
                    function() {
                        return AudioSourceData;
                    },
                );
                /** 音频源数据 */
                var AudioSourceData = /** @class */ (function() {
                    function AudioSourceData(url, blob) {
                        this._url = url;
                        this._blob = blob;
                    }
                    Object.defineProperty(AudioSourceData.prototype, 'url', {
                        /** url */
                        get: function() {
                            return this._url;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioSourceData.prototype, 'blob', {
                        /** blob数据 */
                        get: function() {
                            return this._blob;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioSourceData.prototype, 'base64', {
                        /** base64数据 */
                        get: function() {
                            return this._base64;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(AudioSourceData.prototype, 'buffer', {
                        /** ArrayBuffer数据 */
                        get: function() {
                            return this._buffer;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                    /**
                     * 转化成base64
                     * @param onComplete
                     */
                    AudioSourceData.prototype.readAsDataURL = function(
                        onComplete,
                    ) {
                        var _this = this;
                        if (this._blob == null) {
                            return;
                        }
                        if (this._base64 != null) {
                            onComplete(this._base64);
                            return;
                        }
                        var stringReader = new FileReader();
                        stringReader.readAsDataURL(this.blob);
                        stringReader.onload = function() {
                            _this._base64 = stringReader.result;
                            onComplete(_this._base64);
                        };
                    };
                    /**
                     * 转化成ArrayBuffer
                     * @param onComplete
                     */
                    AudioSourceData.prototype.readAsArrayBuffer = function(
                        onComplete,
                    ) {
                        var _this = this;
                        if (this._blob == null) {
                            return;
                        }
                        if (this._buffer != null) {
                            onComplete(this._buffer);
                            return;
                        }
                        var bufferReader = new FileReader();
                        bufferReader.readAsArrayBuffer(this._blob);
                        bufferReader.onload = function() {
                            _this._buffer = bufferReader.result;
                            onComplete(_this._buffer);
                        };
                    };
                    return AudioSourceData;
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
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'AudioTagFactory',
                    function() {
                        return AudioTagFactory;
                    },
                );
                /* harmony import */ var _enum_EnumType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../enum/EnumType */ './src/enum/EnumType.ts',
                );

                /** 音频标签工厂 */
                var AudioTagFactory = /** @class */ (function() {
                    function AudioTagFactory() {
                        var _this = this;
                        /** 所有标签的map */
                        this._tagsMap = {};
                        /** 记录id */
                        this._mark = 0;
                        /** 音频标签池子 */
                        this._tagsPool = [];
                        /** 被锁定的标签 */
                        this._tagsLocked = [];
                        this._limit = 30;
                        this._onTouch = function() {
                            if (_this._tagsPool.length >= _this._limit) {
                                return;
                            }
                            var count = _this._limit - _this._tagsPool.length;
                            for (var i = 0; i < count; i += 1) {
                                var tag = _this._createTag(true);
                                _this._tagsPool.push(tag);
                            }
                            for (
                                var i = 0, length = _this._tagsLocked.length;
                                i < length;
                                i += 1
                            ) {
                                var tag = _this._tagsLocked[i];
                                var ext = tag.ext;
                                if (ext.enabled) {
                                    continue;
                                }
                                ext.enabled = true;
                                if (tag.currentTime <= 0) {
                                    tag.load();
                                }
                                if (!ext.inUse) {
                                    _this.recovery(tag);
                                }
                            }
                            _this._tagsLocked.length = 0;
                        };
                        this.listen();
                    }
                    /** 获取标签列表 */
                    AudioTagFactory.prototype.getTagsList = function() {
                        var _this = this;
                        var list = [];
                        Object.keys(this._tagsMap).forEach(function(key) {
                            list.push(_this._tagsMap[key]);
                        });
                        return list;
                    };
                    AudioTagFactory.prototype._createTag = function(doLoad) {
                        var tag = document.createElement('audio');
                        var id = this._mark++;
                        var ext = {
                            id: id,
                            enabled: false,
                            inUse: false,
                        };
                        tag.ext = ext;
                        ext.enabled = !!doLoad;
                        if (doLoad) {
                            tag.load();
                        }
                        this._tagsMap[ext.id] = tag;
                        return tag;
                    };
                    /** 设置限制数量 */
                    AudioTagFactory.prototype.setLimit = function(value) {
                        if (
                            typeof value ===
                                _enum_EnumType__WEBPACK_IMPORTED_MODULE_0__[
                                    'EnumType'
                                ].NUMBER &&
                            value > 0
                        ) {
                            this._limit = value;
                        }
                    };
                    /** 获取限制数量 */
                    AudioTagFactory.prototype.getLimit = function() {
                        return this._limit;
                    };
                    /** 生成一个audio */
                    AudioTagFactory.prototype.get = function() {
                        var tag;
                        if (this._tagsPool.length > 0) {
                            tag = this._tagsPool.pop();
                        } else {
                            tag = this._createTag(false);
                            this._tagsLocked.push(tag);
                        }
                        var ext = tag.ext;
                        ext.inUse = true;
                        return tag;
                    };
                    /**
                     * 回收一个audio,回收前请移除各种事件监听让audio标签回到初始状态
                     * @param value
                     */
                    AudioTagFactory.prototype.recovery = function(value) {
                        var tag = value;
                        var ext = tag.ext;
                        if (ext == null || this._tagsMap[ext.id] !== tag) {
                            return;
                        }
                        if (ext.enabled) {
                            if (this._tagsPool.indexOf(tag) >= 0) {
                                return;
                            }
                            this._tagsPool.push(tag);
                        } else {
                            if (this._tagsLocked.indexOf(tag) >= 0) {
                                return;
                            }
                            this._tagsLocked.push(tag);
                        }
                        ext.inUse = false;
                    };
                    /** 开启解锁监听 */
                    AudioTagFactory.prototype.listen = function() {
                        window.addEventListener(
                            'mousedown',
                            this._onTouch,
                            false,
                        );
                        window.addEventListener(
                            'touchstart',
                            this._onTouch,
                            false,
                        );
                    };
                    /** 关闭解锁监听 */
                    AudioTagFactory.prototype.unlisten = function() {
                        window.removeEventListener(
                            'mousedown',
                            this._onTouch,
                            false,
                        );
                        window.removeEventListener(
                            'touchstart',
                            this._onTouch,
                            false,
                        );
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
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Emitter',
                    function() {
                        return Emitter;
                    },
                );
                /** 派发器 */
                var Emitter = /** @class */ (function() {
                    function Emitter() {
                        this._handlerMap = {};
                    }
                    /**
                     * 监听
                     * @param type
                     * @param handler
                     * @param context
                     * @param once
                     */
                    Emitter.prototype.on = function(
                        type,
                        handler,
                        context,
                        once,
                    ) {
                        var handlerList = this._getHandlerList(type);
                        var handlerExt = handler;
                        var index = handlerList.indexOf(handlerExt);
                        if (index === -1) {
                            handlerExt.type = type;
                            handlerExt.once = !!once;
                            handlerExt.context = context;
                            handlerList.push(handlerExt);
                        }
                    };
                    /**
                     * 取消监听
                     * @param type
                     * @param handler
                     */
                    Emitter.prototype.off = function(type, handler) {
                        var handlerList = this._getHandlerList(type);
                        if (handlerList.length === 0) {
                            return;
                        }
                        if (handler == null) {
                            handlerList.length = 0;
                        } else {
                            var index = handlerList.indexOf(handler);
                            if (index === -1) {
                                return;
                            }
                            delete handler.type;
                            delete handler.once;
                            delete handler.context;
                            handlerList.splice(index, 1);
                        }
                    };
                    /**
                     * 监听一次
                     * @param type
                     * @param handler
                     * @param context
                     */
                    Emitter.prototype.once = function(type, handler, context) {
                        this.on(type, handler, context, true);
                    };
                    /**
                     * 是否注册过
                     * @param type
                     * @param handler
                     */
                    Emitter.prototype.has = function(type, handler) {
                        var handlerList = this._getHandlerList(type);
                        var index = handlerList.indexOf(handler);
                        return index === -1;
                    };
                    /**
                     * 派发
                     * @param type
                     * @param params
                     */
                    // tslint:disable-next-line:no-any
                    Emitter.prototype.emit = function(
                        type,
                        arg1,
                        arg2,
                        arg3,
                        arg4,
                        arg5,
                    ) {
                        var handlerList = this._getHandlerList(type);
                        if (handlerList.length === 0) {
                            return;
                        }
                        var needClean = false;
                        for (
                            var i = 0, length = handlerList.length;
                            i < length;
                            i += 1
                        ) {
                            var handler = handlerList[i];
                            switch (arguments.length) {
                                case 0:
                                    handler.call(handler.context);
                                    break;
                                case 1:
                                    handler.call(handler.context, arg1);
                                    break;
                                case 2:
                                    handler.call(handler.context, arg1, arg2);
                                    break;
                                case 3:
                                    handler.call(
                                        handler.context,
                                        arg1,
                                        arg2,
                                        arg3,
                                    );
                                    break;
                                case 4:
                                    handler.call(
                                        handler.context,
                                        arg1,
                                        arg2,
                                        arg3,
                                        arg4,
                                    );
                                    break;
                                case 5:
                                    handler.call(
                                        handler.context,
                                        arg1,
                                        arg2,
                                        arg3,
                                        arg4,
                                        arg5,
                                    );
                                    break;
                                default:
                            }
                            if (handler.once) {
                                needClean = true;
                            }
                        }
                        if (needClean) {
                            var newHandlerList = [];
                            for (
                                var i = 0, length = handlerList.length;
                                i < length;
                                i += 1
                            ) {
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
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Singleton',
                    function() {
                        return Singleton;
                    },
                );
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
                    return Singleton;
                })();

                /***/
            },

        /***/ './src/enum/EnumEventLoader.ts':
            /*!*************************************!*\
  !*** ./src/enum/EnumEventLoader.ts ***!
  \*************************************/
            /*! exports provided: EnumEventLoader */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'EnumEventLoader',
                    function() {
                        return EnumEventLoader;
                    },
                );
                /** 加载事件 */
                var EnumEventLoader;
                (function(EnumEventLoader) {
                    EnumEventLoader['START'] = 'start';
                    EnumEventLoader['PROGRESS'] = 'progress';
                    EnumEventLoader['COMPLETE'] = 'complete';
                    EnumEventLoader['ERROR'] = 'error';
                })(EnumEventLoader || (EnumEventLoader = {}));

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
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'EnumHttpMethod',
                    function() {
                        return EnumHttpMethod;
                    },
                );
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

        /***/ './src/enum/EnumType.ts':
            /*!******************************!*\
  !*** ./src/enum/EnumType.ts ***!
  \******************************/
            /*! exports provided: EnumType */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'EnumType',
                    function() {
                        return EnumType;
                    },
                );
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
            /*! exports provided: Emitter, Singleton, HttpLoader, ScriptLoader, ImageLoader, Audio */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _audio_Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./audio/Audio */ './src/audio/Audio.ts',
                );
                /* harmony reexport (safe) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Audio',
                    function() {
                        return _audio_Audio__WEBPACK_IMPORTED_MODULE_0__[
                            'Audio'
                        ];
                    },
                );

                /* harmony import */ var _base_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ./base/Emitter */ './src/base/Emitter.ts',
                );
                /* harmony reexport (safe) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Emitter',
                    function() {
                        return _base_Emitter__WEBPACK_IMPORTED_MODULE_1__[
                            'Emitter'
                        ];
                    },
                );

                /* harmony import */ var _base_Singleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ./base/Singleton */ './src/base/Singleton.ts',
                );
                /* harmony reexport (safe) */ __webpack_require__.d(
                    __webpack_exports__,
                    'Singleton',
                    function() {
                        return _base_Singleton__WEBPACK_IMPORTED_MODULE_2__[
                            'Singleton'
                        ];
                    },
                );

                /* harmony import */ var _loader_HttpLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ./loader/HttpLoader */ './src/loader/HttpLoader.ts',
                );
                /* harmony reexport (safe) */ __webpack_require__.d(
                    __webpack_exports__,
                    'HttpLoader',
                    function() {
                        return _loader_HttpLoader__WEBPACK_IMPORTED_MODULE_3__[
                            'HttpLoader'
                        ];
                    },
                );

                /* harmony import */ var _loader_ImageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ./loader/ImageLoader */ './src/loader/ImageLoader.ts',
                );
                /* harmony reexport (safe) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ImageLoader',
                    function() {
                        return _loader_ImageLoader__WEBPACK_IMPORTED_MODULE_4__[
                            'ImageLoader'
                        ];
                    },
                );

                /* harmony import */ var _loader_ScriptLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ./loader/ScriptLoader */ './src/loader/ScriptLoader.ts',
                );
                /* harmony reexport (safe) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ScriptLoader',
                    function() {
                        return _loader_ScriptLoader__WEBPACK_IMPORTED_MODULE_5__[
                            'ScriptLoader'
                        ];
                    },
                );

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
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'HttpLoader',
                    function() {
                        return HttpLoader;
                    },
                );
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! tslib */ './node_modules/tslib/tslib.es6.js',
                );
                /* harmony import */ var _base_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../base/Emitter */ './src/base/Emitter.ts',
                );
                /* harmony import */ var _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../enum/EnumEventLoader */ './src/enum/EnumEventLoader.ts',
                );
                /* harmony import */ var _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../enum/EnumHttpMethod */ './src/enum/EnumHttpMethod.ts',
                );

                var HttpLoader = /** @class */ (function(_super) {
                    tslib__WEBPACK_IMPORTED_MODULE_0__['__extends'](
                        HttpLoader,
                        _super,
                    );
                    function HttpLoader() {
                        return (
                            (_super !== null &&
                                _super.apply(this, arguments)) ||
                            this
                        );
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
                        var method =
                            config.method ||
                            _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_3__[
                                'EnumHttpMethod'
                            ].GET;
                        var data = config.data;
                        var requestHeader = config.requestHeader;
                        var sendData = null;
                        if (data != null) {
                            var contentType =
                                requestHeader && requestHeader['Content-Type'];
                            switch (method) {
                                case _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_3__[
                                    'EnumHttpMethod'
                                ].POST:
                                    switch (contentType) {
                                        case 'application/x-www-form-urlencoded':
                                            var params = Object.keys(data).map(
                                                function(key) {
                                                    return (
                                                        encodeURIComponent(
                                                            key,
                                                        ) +
                                                        '=' +
                                                        encodeURIComponent(
                                                            data[key],
                                                        )
                                                    );
                                                },
                                            );
                                            sendData = params.join('&');
                                            break;
                                        case 'multipart/form-data':
                                            sendData = new FormData();
                                            Object.keys(data).forEach(function(
                                                key,
                                            ) {
                                                sendData.append(key, data[key]);
                                            });
                                            break;
                                        default:
                                            sendData = JSON.stringify(data);
                                            break;
                                    }
                                    break;
                                case _enum_EnumHttpMethod__WEBPACK_IMPORTED_MODULE_3__[
                                    'EnumHttpMethod'
                                ].GET:
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
                        var onError = function() {
                            _this.reset();
                            _this.emit(
                                _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                    'EnumEventLoader'
                                ].ERROR,
                            );
                        };
                        xhr.onreadystatechange = function() {
                            var readyState = xhr.readyState;
                            var status = xhr.status;
                            if (readyState === 4) {
                                if (status === 200) {
                                    var data_1 =
                                        xhr.response || xhr.responseText;
                                    _this.emit(
                                        _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                            'EnumEventLoader'
                                        ].COMPLETE,
                                        data_1,
                                    );
                                } else {
                                    onError();
                                }
                            } else {
                                if (status >= 400) {
                                    onError();
                                }
                            }
                        };
                        xhr.onprogress = function(evt) {
                            var total = evt.total;
                            var loaded = evt.loaded;
                            _this.emit(
                                _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                    'EnumEventLoader'
                                ].PROGRESS,
                                loaded,
                                total,
                            );
                        };
                        xhr.onerror = function(evt) {
                            onError();
                        };
                        xhr.send(sendData);
                        this.emit(
                            _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                'EnumEventLoader'
                            ].START,
                        );
                    };
                    /** 重置 */
                    HttpLoader.prototype.reset = function() {
                        if (this._xhr == null) {
                            return;
                        }
                        this._xhr.onreadystatechange = null;
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
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ImageLoader',
                    function() {
                        return ImageLoader;
                    },
                );
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! tslib */ './node_modules/tslib/tslib.es6.js',
                );
                /* harmony import */ var _base_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../base/Emitter */ './src/base/Emitter.ts',
                );
                /* harmony import */ var _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../enum/EnumEventLoader */ './src/enum/EnumEventLoader.ts',
                );

                var ImageLoader = /** @class */ (function(_super) {
                    tslib__WEBPACK_IMPORTED_MODULE_0__['__extends'](
                        ImageLoader,
                        _super,
                    );
                    function ImageLoader() {
                        return (
                            (_super !== null &&
                                _super.apply(this, arguments)) ||
                            this
                        );
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
                            _this.emit(
                                _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                    'EnumEventLoader'
                                ].COMPLETE,
                                _this._image,
                            );
                        };
                        img.onprogress = function(evt) {
                            var total = evt.total;
                            var loaded = evt.loaded;
                            _this.emit(
                                _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                    'EnumEventLoader'
                                ].PROGRESS,
                                loaded,
                                total,
                            );
                        };
                        img.onerror = function() {
                            _this.reset();
                            _this.emit(
                                _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                    'EnumEventLoader'
                                ].ERROR,
                            );
                        };
                        this.emit(
                            _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                'EnumEventLoader'
                            ].START,
                        );
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
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'ScriptLoader',
                    function() {
                        return ScriptLoader;
                    },
                );
                /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! tslib */ './node_modules/tslib/tslib.es6.js',
                );
                /* harmony import */ var _base_Emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../base/Emitter */ './src/base/Emitter.ts',
                );
                /* harmony import */ var _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! ../enum/EnumEventLoader */ './src/enum/EnumEventLoader.ts',
                );

                var ScriptLoader = /** @class */ (function(_super) {
                    tslib__WEBPACK_IMPORTED_MODULE_0__['__extends'](
                        ScriptLoader,
                        _super,
                    );
                    function ScriptLoader() {
                        return (
                            (_super !== null &&
                                _super.apply(this, arguments)) ||
                            this
                        );
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
                            _this.emit(
                                _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                    'EnumEventLoader'
                                ].COMPLETE,
                                _this._script,
                            );
                        };
                        script.onprogress = function(evt) {
                            var total = evt.total;
                            var loaded = evt.loaded;
                            _this.emit(
                                _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                    'EnumEventLoader'
                                ].PROGRESS,
                                loaded,
                                total,
                            );
                        };
                        script.onerror = function() {
                            _this.reset();
                            _this.emit(
                                _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                    'EnumEventLoader'
                                ].ERROR,
                            );
                        };
                        document.body.appendChild(script);
                        this.emit(
                            _enum_EnumEventLoader__WEBPACK_IMPORTED_MODULE_2__[
                                'EnumEventLoader'
                            ].START,
                        );
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

        /***/ './test/test.ts':
            /*!**********************!*\
  !*** ./test/test.ts ***!
  \**********************/
            /*! no exports provided */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict';
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ../src/index */ './src/index.ts',
                );

                var audio = new _src_index__WEBPACK_IMPORTED_MODULE_0__[
                    'Audio'
                ]();
                var emitter = new _src_index__WEBPACK_IMPORTED_MODULE_0__[
                    'Emitter'
                ]();
                var httpLoader = new _src_index__WEBPACK_IMPORTED_MODULE_0__[
                    'HttpLoader'
                ]();
                var scriptLoader = new _src_index__WEBPACK_IMPORTED_MODULE_0__[
                    'ScriptLoader'
                ]();
                var imageLoader = new _src_index__WEBPACK_IMPORTED_MODULE_0__[
                    'ImageLoader'
                ]();
                var singleton = new _src_index__WEBPACK_IMPORTED_MODULE_0__[
                    'Singleton'
                ]();
                console.log(audio);

                /***/
            },

        /******/
    },
);
//# sourceMappingURL=test.js.map
