(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "43fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dc352a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5a17");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dc352a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dc352a80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5a17":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6cbf":
/***/ (function(module, exports, __webpack_require__) {

/*! @preserve sweet-scroll v4.0.0 - tsuyoshiwada | MIT License */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, function () { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    // @link https://github.com/JedWatson/exenv/blob/master/index.js
    var canUseDOM = !!(typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement);
    var canUseHistory = !canUseDOM
        ? false
        : window.history && 'pushState' in window.history && window.location.protocol !== 'file:';
    var canUsePassiveOption = (function () {
        var support = false;
        if (!canUseDOM) {
            return support;
        }
        /* tslint:disable:no-empty */
        try {
            var win = window;
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    support = true;
                },
            });
            win.addEventListener('test', null, opts);
            win.removeEventListener('test', null, opts);
        }
        catch (e) { }
        /* tslint:enable */
        return support;
    })();

    var isString = function (obj) { return typeof obj === 'string'; };
    var isFunction = function (obj) { return typeof obj === 'function'; };
    var isArray = function (obj) { return Array.isArray(obj); };
    var isNumeric = function (obj) { return !isArray(obj) && obj - parseFloat(obj) + 1 >= 0; };
    var hasProp = function (obj, key) { return obj && obj.hasOwnProperty(key); };

    var raf = canUseDOM
        ? window.requestAnimationFrame.bind(window)
        : null;
    var caf = canUseDOM
        ? window.cancelAnimationFrame.bind(window)
        : null;

    /* tslint:disable:curly */
    /* tslint:disable:no-conditional-assignment */
    var cos = Math.cos, sin = Math.sin, pow = Math.pow, sqrt = Math.sqrt, PI = Math.PI;
    var easings = {
        linear: function (p) { return p; },
        easeInQuad: function (_, t, b, c, d) { return c * (t /= d) * t + b; },
        easeOutQuad: function (_, t, b, c, d) { return -c * (t /= d) * (t - 2) + b; },
        easeInOutQuad: function (_, t, b, c, d) {
            return (t /= d / 2) < 1 ? (c / 2) * t * t + b : (-c / 2) * (--t * (t - 2) - 1) + b;
        },
        easeInCubic: function (_, t, b, c, d) { return c * (t /= d) * t * t + b; },
        easeOutCubic: function (_, t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b; },
        easeInOutCubic: function (_, t, b, c, d) {
            return (t /= d / 2) < 1 ? (c / 2) * t * t * t + b : (c / 2) * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function (_, t, b, c, d) { return c * (t /= d) * t * t * t + b; },
        easeOutQuart: function (_, t, b, c, d) { return -c * ((t = t / d - 1) * t * t * t - 1) + b; },
        easeInOutQuart: function (_, t, b, c, d) {
            return (t /= d / 2) < 1 ? (c / 2) * t * t * t * t + b : (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function (_, t, b, c, d) { return c * (t /= d) * t * t * t * t + b; },
        easeOutQuint: function (_, t, b, c, d) { return c * ((t = t / d - 1) * t * t * t * t + 1) + b; },
        easeInOutQuint: function (_, t, b, c, d) {
            return (t /= d / 2) < 1
                ? (c / 2) * t * t * t * t * t + b
                : (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function (_, t, b, c, d) { return -c * cos((t / d) * (PI / 2)) + c + b; },
        easeOutSine: function (_, t, b, c, d) { return c * sin((t / d) * (PI / 2)) + b; },
        easeInOutSine: function (_, t, b, c, d) { return (-c / 2) * (cos((PI * t) / d) - 1) + b; },
        easeInExpo: function (_, t, b, c, d) { return (t === 0 ? b : c * pow(2, 10 * (t / d - 1)) + b); },
        easeOutExpo: function (_, t, b, c, d) { return (t === d ? b + c : c * (-pow(2, (-10 * t) / d) + 1) + b); },
        easeInOutExpo: function (_, t, b, c, d) {
            if (t === 0)
                return b;
            if (t === d)
                return b + c;
            if ((t /= d / 2) < 1)
                return (c / 2) * pow(2, 10 * (t - 1)) + b;
            return (c / 2) * (-pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (_, t, b, c, d) { return -c * (sqrt(1 - (t /= d) * t) - 1) + b; },
        easeOutCirc: function (_, t, b, c, d) { return c * sqrt(1 - (t = t / d - 1) * t) + b; },
        easeInOutCirc: function (_, t, b, c, d) {
            return (t /= d / 2) < 1
                ? (-c / 2) * (sqrt(1 - t * t) - 1) + b
                : (c / 2) * (sqrt(1 - (t -= 2) * t) + 1) + b;
        },
    };

    var $$ = function (selector) {
        return Array.prototype.slice.call((!selector ? [] : document.querySelectorAll(selector)));
    };
    var $ = function (selector) { return $$(selector).shift() || null; };
    var isElement = function (obj) { return obj instanceof Element; };
    var isWindow = function ($el) { return $el === window; };
    var isRootContainer = function ($el) {
        return $el === document.documentElement || $el === document.body;
    };
    var matches = function ($el, selector) {
        if (isElement(selector)) {
            return $el === selector;
        }
        var results = $$(selector);
        var i = results.length;
        // tslint:disable-next-line no-empty
        while (--i >= 0 && results[i] !== $el) { }
        return i > -1;
    };

    var getHeight = function ($el) {
        return Math.max($el.scrollHeight, $el.clientHeight, $el.offsetHeight);
    };
    var getWidth = function ($el) {
        return Math.max($el.scrollWidth, $el.clientWidth, $el.offsetWidth);
    };
    var getSize = function ($el) { return ({
        width: getWidth($el),
        height: getHeight($el),
    }); };
    var getViewportAndElementSizes = function ($el) {
        var isRoot = isWindow($el) || isRootContainer($el);
        return {
            viewport: {
                width: isRoot
                    ? Math.min(window.innerWidth, document.documentElement.clientWidth)
                    : $el.clientWidth,
                height: isRoot ? window.innerHeight : $el.clientHeight,
            },
            size: isRoot
                ? {
                    width: Math.max(getWidth(document.body), getWidth(document.documentElement)),
                    height: Math.max(getHeight(document.body), getHeight(document.documentElement)),
                }
                : getSize($el),
        };
    };

    var directionMethodMap = {
        y: 'scrollTop',
        x: 'scrollLeft',
    };
    var directionPropMap = {
        y: 'pageYOffset',
        x: 'pageXOffset',
    };
    var getScroll = function ($el, direction) {
        return isWindow($el) ? $el[directionPropMap[direction]] : $el[directionMethodMap[direction]];
    };
    var setScroll = function ($el, offset, direction) {
        if (isWindow($el)) {
            var top_1 = direction === 'y';
            $el.scrollTo(!top_1 ? offset : $el.pageXOffset, top_1 ? offset : $el.pageYOffset);
        }
        else {
            $el[directionMethodMap[direction]] = offset;
        }
    };
    var getOffset = function ($el, $context) {
        var rect = $el.getBoundingClientRect();
        if (rect.width || rect.height) {
            var scroll_1 = { top: 0, left: 0 };
            var $ctx = void 0;
            if (isWindow($context) || isRootContainer($context)) {
                $ctx = document.documentElement;
                scroll_1.top = window[directionPropMap.y];
                scroll_1.left = window[directionPropMap.x];
            }
            else {
                $ctx = $context;
                var cRect = $ctx.getBoundingClientRect();
                scroll_1.top = cRect.top * -1 + $ctx[directionMethodMap.y];
                scroll_1.left = cRect.left * -1 + $ctx[directionMethodMap.x];
            }
            return {
                top: rect.top + scroll_1.top - $ctx.clientTop,
                left: rect.left + scroll_1.left - $ctx.clientLeft,
            };
        }
        return rect;
    };

    var wheelEventName = (function () {
        if (!canUseDOM) {
            return 'wheel';
        }
        return 'onwheel' in document ? 'wheel' : 'mousewheel';
    })();
    var eventName = function (name) { return (name === 'wheel' ? wheelEventName : name); };
    var apply = function ($el, method, event, listener, passive) {
        event.split(' ').forEach(function (name) {
            $el[method](eventName(name), listener, canUsePassiveOption ? { passive: passive } : false);
        });
    };
    var addEvent = function ($el, event, listener, passive) { return apply($el, 'addEventListener', event, listener, passive); };
    var removeEvent = function ($el, event, listener, passive) { return apply($el, 'removeEventListener', event, listener, passive); };

    var reRelativeToken = /^(\+|-)=(\d+(?:\.\d+)?)$/;
    var parseCoordinate = function (coordinate, enableVertical) {
        var res = { top: 0, left: 0, relative: false };
        // Object ({ top: {n}, left: {n} })
        if (hasProp(coordinate, 'top') || hasProp(coordinate, 'left')) {
            res = __assign({}, res, coordinate);
            // Array ([{n}, [{n}])
        }
        else if (isArray(coordinate)) {
            if (coordinate.length > 1) {
                res.top = coordinate[0];
                res.left = coordinate[1];
            }
            else if (coordinate.length === 1) {
                res.top = enableVertical ? coordinate[0] : 0;
                res.left = !enableVertical ? coordinate[0] : 0;
            }
            else {
                return null;
            }
            // Number
        }
        else if (isNumeric(coordinate)) {
            if (enableVertical) {
                res.top = coordinate;
            }
            else {
                res.left = coordinate;
            }
            // String ('+={n}', '-={n}')
        }
        else if (isString(coordinate)) {
            var m = coordinate.trim().match(reRelativeToken);
            if (!m) {
                return null;
            }
            var op = m[1];
            var val = parseInt(m[2], 10);
            if (op === '+') {
                res.top = enableVertical ? val : 0;
                res.left = !enableVertical ? val : 0;
            }
            else {
                res.top = enableVertical ? -val : 0;
                res.left = !enableVertical ? -val : 0;
            }
            res.relative = true;
        }
        else {
            return null;
        }
        return res;
    };

    var defaultOptions = {
        trigger: '[data-scroll]',
        header: '[data-scroll-header]',
        duration: 1000,
        easing: 'easeOutQuint',
        offset: 0,
        vertical: true,
        horizontal: false,
        cancellable: true,
        updateURL: false,
        preventDefault: true,
        stopPropagation: true,
        // Callbacks
        before: null,
        after: null,
        cancel: null,
        complete: null,
        step: null,
    };

    var CONTAINER_CLICK_EVENT = 'click';
    var CONTAINER_STOP_EVENT = 'wheel touchstart touchmove';
    var SweetScroll = /** @class */ (function () {
        /**
         * Constructor
         */
        function SweetScroll(options, container) {
            var _this = this;
            this.$el = null;
            this.ctx = {
                $trigger: null,
                opts: null,
                progress: false,
                pos: null,
                startPos: null,
                easing: null,
                start: 0,
                id: 0,
                cancel: false,
                hash: null,
            };
            /**
             * Handle each frame of the animation.
             */
            this.loop = function (time) {
                var _a = _this, $el = _a.$el, ctx = _a.ctx;
                if (!ctx.start) {
                    ctx.start = time;
                }
                if (!ctx.progress || !$el) {
                    _this.stop();
                    return;
                }
                var options = ctx.opts;
                var offset = ctx.pos;
                var start = ctx.start;
                var startOffset = ctx.startPos;
                var easing = ctx.easing;
                var duration = options.duration;
                var directionMap = { top: 'y', left: 'x' };
                var timeElapsed = time - start;
                var t = Math.min(1, Math.max(timeElapsed / duration, 0));
                Object.keys(offset).forEach(function (key) {
                    var value = offset[key];
                    var initial = startOffset[key];
                    var delta = value - initial;
                    if (delta !== 0) {
                        var val = easing(t, duration * t, 0, 1, duration);
                        setScroll($el, Math.round(initial + delta * val), directionMap[key]);
                    }
                });
                if (timeElapsed <= duration) {
                    _this.hook(options, 'step', t);
                    ctx.id = SweetScroll.raf(_this.loop);
                }
                else {
                    _this.stop(true);
                }
            };
            /**
             * Handling of container click event.
             */
            this.handleClick = function (e) {
                var opts = _this.opts;
                var $el = e.target;
                for (; $el && $el !== document; $el = $el.parentNode) {
                    if (!matches($el, opts.trigger)) {
                        continue;
                    }
                    var dataOptions = JSON.parse($el.getAttribute('data-scroll-options') || '{}');
                    var data = $el.getAttribute('data-scroll');
                    var to = data || $el.getAttribute('href');
                    var options = __assign({}, opts, dataOptions);
                    var preventDefault = options.preventDefault, stopPropagation = options.stopPropagation, vertical = options.vertical, horizontal = options.horizontal;
                    if (preventDefault) {
                        e.preventDefault();
                    }
                    if (stopPropagation) {
                        e.stopPropagation();
                    }
                    // Passes the trigger element to callback
                    _this.ctx.$trigger = $el;
                    if (horizontal && vertical) {
                        _this.to(to, options);
                    }
                    else if (vertical) {
                        _this.toTop(to, options);
                    }
                    else if (horizontal) {
                        _this.toLeft(to, options);
                    }
                    break;
                }
            };
            /**
             * Handling of container stop events.
             */
            this.handleStop = function (e) {
                var ctx = _this.ctx;
                var opts = ctx.opts;
                if (opts && opts.cancellable) {
                    ctx.cancel = true;
                    _this.stop();
                }
                else {
                    e.preventDefault();
                }
            };
            this.opts = __assign({}, defaultOptions, (options || {}));
            var $container = null;
            if (canUseDOM) {
                if (typeof container === 'string') {
                    $container = $(container);
                }
                else if (container != null) {
                    $container = container;
                }
                else {
                    $container = window;
                }
            }
            this.$el = $container;
            if ($container) {
                this.bind(true, false);
            }
        }
        /**
         * SweetScroll instance factory.
         */
        SweetScroll.create = function (options, container) {
            return new SweetScroll(options, container);
        };
        /**
         * Scroll animation to the specified position.
         */
        SweetScroll.prototype.to = function (distance, options) {
            if (!canUseDOM) {
                return;
            }
            var _a = this, $el = _a.$el, ctx = _a.ctx, currentOptions = _a.opts;
            var $trigger = ctx.$trigger;
            var opts = __assign({}, currentOptions, (options || {}));
            var optOffset = opts.offset, vertical = opts.vertical, horizontal = opts.horizontal;
            var $header = isElement(opts.header) ? opts.header : $(opts.header);
            var reg = /^#/;
            var hash = isString(distance) && reg.test(distance) ? distance : null;
            ctx.opts = opts; // Temporary options
            ctx.cancel = false; // Disable the call flag of `cancel`
            ctx.hash = hash;
            // Stop current animation
            this.stop();
            // Does not move if the container is not found
            if (!$el) {
                return;
            }
            // Get scroll offset
            var offset = parseCoordinate(optOffset, vertical);
            var coordinate = parseCoordinate(distance, vertical);
            var scroll = { top: 0, left: 0 };
            if (coordinate) {
                if (coordinate.relative) {
                    var current = getScroll($el, vertical ? 'y' : 'x');
                    scroll.top = vertical ? current + coordinate.top : coordinate.top;
                    scroll.left = !vertical ? current + coordinate.left : coordinate.left;
                }
                else {
                    scroll = coordinate;
                }
            }
            else if (isString(distance) && distance !== '#') {
                var $target = $(distance);
                if (!$target) {
                    return;
                }
                scroll = getOffset($target, $el);
            }
            if (offset) {
                scroll.top += offset.top;
                scroll.left += offset.left;
            }
            if ($header) {
                scroll.top = Math.max(0, scroll.top - getSize($header).height);
            }
            // Normalize scroll offset
            var _b = getViewportAndElementSizes($el), viewport = _b.viewport, size = _b.size;
            scroll.top = vertical
                ? Math.max(0, Math.min(size.height - viewport.height, scroll.top))
                : getScroll($el, 'y');
            scroll.left = horizontal
                ? Math.max(0, Math.min(size.width - viewport.width, scroll.left))
                : getScroll($el, 'x');
            // Call `before`
            // Stop scrolling when it returns false
            if (this.hook(opts, 'before', scroll, $trigger) === false) {
                ctx.opts = null;
                return;
            }
            // Set offset
            ctx.pos = scroll;
            // Run animation!!
            this.start(opts);
            // Bind stop events
            this.bind(false, true);
        };
        /**
         * Scroll animation to specified left position.
         */
        SweetScroll.prototype.toTop = function (distance, options) {
            this.to(distance, __assign({}, (options || {}), { vertical: true, horizontal: false }));
        };
        /**
         * Scroll animation to specified top position.
         */
        SweetScroll.prototype.toLeft = function (distance, options) {
            this.to(distance, __assign({}, (options || {}), { vertical: false, horizontal: true }));
        };
        /**
         * Scroll animation to specified element.
         */
        SweetScroll.prototype.toElement = function ($element, options) {
            var $el = this.$el;
            if (!canUseDOM || !$el) {
                return;
            }
            this.to(getOffset($element, $el), options || {});
        };
        /**
         * Stop the current scroll animation.
         */
        SweetScroll.prototype.stop = function (gotoEnd) {
            if (gotoEnd === void 0) { gotoEnd = false; }
            var _a = this, $el = _a.$el, ctx = _a.ctx;
            var pos = ctx.pos;
            if (!$el || !ctx.progress) {
                return;
            }
            SweetScroll.caf(ctx.id);
            ctx.progress = false;
            ctx.start = 0;
            ctx.id = 0;
            if (gotoEnd && pos) {
                setScroll($el, pos.left, 'x');
                setScroll($el, pos.top, 'y');
            }
            this.complete();
        };
        /**
         * Update options.
         */
        SweetScroll.prototype.update = function (options) {
            if (this.$el) {
                var opts = __assign({}, this.opts, options);
                this.stop();
                this.unbind(true, true);
                this.opts = opts;
                this.bind(true, false);
            }
        };
        /**
         * Destroy instance.
         */
        SweetScroll.prototype.destroy = function () {
            if (this.$el) {
                this.stop();
                this.unbind(true, true);
                this.$el = null;
            }
        };
        /**
         * Callback methods.
         */
        /* tslint:disable:no-empty */
        SweetScroll.prototype.onBefore = function (_, __) {
            return true;
        };
        SweetScroll.prototype.onStep = function (_) { };
        SweetScroll.prototype.onAfter = function (_, __) { };
        SweetScroll.prototype.onCancel = function () { };
        SweetScroll.prototype.onComplete = function (_) { };
        /* tslint:enable */
        /**
         * Start scrolling animation.
         */
        SweetScroll.prototype.start = function (opts) {
            var ctx = this.ctx;
            ctx.opts = opts;
            ctx.progress = true;
            ctx.easing = isFunction(opts.easing)
                ? opts.easing
                : easings[opts.easing];
            // Update start offset.
            var $container = this.$el;
            var start = {
                top: getScroll($container, 'y'),
                left: getScroll($container, 'x'),
            };
            ctx.startPos = start;
            // Loop
            ctx.id = SweetScroll.raf(this.loop);
        };
        /**
         * Handle the completion of scrolling animation.
         */
        SweetScroll.prototype.complete = function () {
            var _a = this, $el = _a.$el, ctx = _a.ctx;
            var hash = ctx.hash, cancel = ctx.cancel, opts = ctx.opts, pos = ctx.pos, $trigger = ctx.$trigger;
            if (!$el || !opts) {
                return;
            }
            if (hash != null && hash !== window.location.hash) {
                var updateURL = opts.updateURL;
                if (canUseDOM && canUseHistory && updateURL !== false) {
                    window.history[updateURL === 'replace' ? 'replaceState' : 'pushState'](null, '', hash);
                }
            }
            this.unbind(false, true);
            ctx.opts = null;
            ctx.$trigger = null;
            if (cancel) {
                this.hook(opts, 'cancel');
            }
            else {
                this.hook(opts, 'after', pos, $trigger);
            }
            this.hook(opts, 'complete', cancel);
        };
        /**
         * Callback function and method call.
         */
        SweetScroll.prototype.hook = function (options, type) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var _a;
            var callback = options[type];
            var callbackResult;
            var methodResult;
            // callback
            if (isFunction(callback)) {
                callbackResult = callback.apply(this, args.concat([this]));
            }
            // method
            methodResult = (_a = this)["on" + (type[0].toUpperCase() + type.slice(1))].apply(_a, args);
            return callbackResult !== undefined ? callbackResult : methodResult;
        };
        /**
         * Bind events of container element.
         */
        SweetScroll.prototype.bind = function (click, stop) {
            var _a = this, $el = _a.$el, opts = _a.ctx.opts;
            if ($el) {
                if (click) {
                    addEvent($el, CONTAINER_CLICK_EVENT, this.handleClick, false);
                }
                if (stop) {
                    addEvent($el, CONTAINER_STOP_EVENT, this.handleStop, opts ? opts.cancellable : true);
                }
            }
        };
        /**
         * Unbind events of container element.
         */
        SweetScroll.prototype.unbind = function (click, stop) {
            var _a = this, $el = _a.$el, opts = _a.ctx.opts;
            if ($el) {
                if (click) {
                    removeEvent($el, CONTAINER_CLICK_EVENT, this.handleClick, false);
                }
                if (stop) {
                    removeEvent($el, CONTAINER_STOP_EVENT, this.handleStop, opts ? opts.cancellable : true);
                }
            }
        };
        /**
         * You can set Polyfill (or Ponyfill) for browsers that do not support requestAnimationFrame.
         */
        SweetScroll.raf = raf;
        SweetScroll.caf = caf;
        return SweetScroll;
    }());

    return SweetScroll;

}));


/***/ }),

/***/ "7bc5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13f3f3ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c6fd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13f3f3ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13f3f3ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "bb97":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c6fd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "install", function() { return /* reexport */ install; });
__webpack_require__.d(__webpack_exports__, "vdButton", function() { return /* reexport */ vdButton; });
__webpack_require__.d(__webpack_exports__, "vdCard", function() { return /* reexport */ vdCard; });
__webpack_require__.d(__webpack_exports__, "vdInput", function() { return /* reexport */ vdInput; });
__webpack_require__.d(__webpack_exports__, "vdProgress", function() { return /* reexport */ vdProgress; });
__webpack_require__.d(__webpack_exports__, "vdLink", function() { return /* reexport */ vdLink; });
__webpack_require__.d(__webpack_exports__, "xesImageViewer", function() { return /* reexport */ xes_image_viewer; });
__webpack_require__.d(__webpack_exports__, "goTop", function() { return /* reexport */ goTop; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10f25dde-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdButton/src/index.vue?vue&type=template&id=68606856&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{class:[
        'vd-button', 
        ("button-type-" + _vm.type), 
        ("button-size-" + _vm.size),
        {
            'vd-disabled': _vm.disabled
        }
    ],attrs:{"disabled":_vm.prohibit},on:{"click":function($event){return _vm.vdClick($event)}}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vdButton/src/index.vue?vue&type=template&id=68606856&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdButton/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
    name: 'vd-button',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'medium'
        },
        disabled: Boolean
    },
    methods:{
        vdClick(e) {
            this.$emit('click',e)
        }
    },
    computed: {
        prohibit() {
            return this.disabled || undefined;
        }
    },
});

// CONCATENATED MODULE: ./packages/vdButton/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var vdButton_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/vdButton/src/index.vue





/* normalize component */

var component = normalizeComponent(
  vdButton_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vdButton_src = (component.exports);
// CONCATENATED MODULE: ./packages/vdButton/index.js


vdButton_src.install = function (Vue) {
  Vue.component(vdButton_src.name, vdButton_src)
}

/* harmony default export */ var vdButton = (vdButton_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10f25dde-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdCard/src/index.vue?vue&type=template&id=2e064b4b&
var srcvue_type_template_id_2e064b4b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vd-card"},[(_vm.$slots.header || _vm.header)?_c('div',{class:['vd-card_header',("card-type-" + _vm.type)]},[_vm._t("header",[_vm._v(" "+_vm._s(_vm.header)+" ")])],2):_vm._e(),_c('div',{staticClass:"vd-card__body",style:(_vm.bodyStyle)},[_vm._t("default")],2)])}
var srcvue_type_template_id_2e064b4b_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vdCard/src/index.vue?vue&type=template&id=2e064b4b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdCard/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vdCard_srcvue_type_script_lang_js_ = ({
    name:'vd-card',
    props: {
        header: {},
        shadow: {
            type: String
        },
        bodyStyle: {},
        type: {
            type: String,
            default: 'default'
        }
    }
});

// CONCATENATED MODULE: ./packages/vdCard/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_vdCard_srcvue_type_script_lang_js_ = (vdCard_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vdCard/src/index.vue





/* normalize component */

var src_component = normalizeComponent(
  packages_vdCard_srcvue_type_script_lang_js_,
  srcvue_type_template_id_2e064b4b_render,
  srcvue_type_template_id_2e064b4b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vdCard_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/vdCard/index.js


vdCard_src.install = function (Vue) {
  Vue.component( vdCard_src.name, vdCard_src )
}

/* harmony default export */ var vdCard = (vdCard_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdInput/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var vdInput_srcvue_type_script_lang_js_ = ({
    name: "vd-input",
    props: {
        vModel: [String,Number],
        type: {
            type: String,
            default: "text",
        },
        name: String,
        alt: String,
        maxlength: {
            type: [Number, String],
        },
        placeholder: String,
        width: {
            type: String,
            default: '300px'
        },
        after: String
    },
    data() {
        return {
            value: "",
            vdBorderErr: false,
        };
    },
    render(createElement) {
        return createElement("div", {
            class:['vd-input']
        }, 
        [
            createElement(
                "input",
                {
                    class: ["vd-input__inner", { "vd-border-err": this.vdBorderErr }],
                    domProps: {
                        value: this.value,
                        type: this.isCorrect,
                        name: this.name,
                        alt: this.alt,
                        placeholder: this.placeholder,
                        maxLength: this.maxlength,
                    },
                    style: {
                        width: this.width
                    },
                    on: {
                        input: (event) => {
                            this.value = event.target.value;
                            this.dispatch("input", event.target.value, event);
                            this.dispatch("change", event.target.value, event);
                        },
                        blur: (event) => this.dispatch("blur", event.target.value, event),
                        focus: (event) => this.dispatch("focus", event.target.value, event),
                        change: (event) => {
                            this.value = event.target.value;
                            this.dispatch("change", event.target.value, event);
                        },
                        keydown: (event) => {
                            if (event.keyCode === 13)
                                this.dispatch("enter", event.target.value, event);
                        },
                    },
                    ref: "vd-input-ref",
                }
            ),
            this.after === "length" && createElement("span", { class: ["vd-input-slot"] }, 
                    [
                        !!!this.maxlength
                        ? console.warn("If you want to use the length attribute, 'maxlength' is required\n ——vdInput")
                        : createElement("span",
                            {
                                class: "vd-input-slot__content"
                            },
                            `${String(this.value).length || 0 }/${this.maxlength}`
                        )
                    ]
                )
            ]
        );
    },
    methods: {
        dispatch(name, value, event) {
            this.$emit("update:vModel", this.valType === "number" ? Number(value) : String(value))
            this.$emit(name, this.valType === "number" ? Number(value) : String(value), event);
        }
    },
    computed: {
        isCorrect() {
            return this.type !== "password" && this.type !== "text" ? "text" : this.type
        },
    },
    created() {
        this.value = this.vModel || "";
        this.valType = typeof this.vModel
    },
});

// CONCATENATED MODULE: ./packages/vdInput/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_vdInput_srcvue_type_script_lang_js_ = (vdInput_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vdInput/src/index.vue
var src_render, src_staticRenderFns




/* normalize component */

var vdInput_src_component = normalizeComponent(
  packages_vdInput_srcvue_type_script_lang_js_,
  src_render,
  src_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vdInput_src = (vdInput_src_component.exports);
// CONCATENATED MODULE: ./packages/vdInput/index.js


vdInput_src.install = function (Vue) {
  Vue.component( vdInput_src.name, vdInput_src )
}

/* harmony default export */ var vdInput = (vdInput_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10f25dde-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdProgress/src/index.vue?vue&type=template&id=80545816&
var srcvue_type_template_id_80545816_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vd-progress-container"},[(_vm.title)?_c('span',{staticClass:"progress-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_c('div',{staticClass:"vd-progress",style:({ width: _vm.width })},[_c('div',{staticClass:"vd-progress-percent",style:({
                width: _vm.astrictPercent + '%',
                backgroundColor: _vm.getProgressColor
            })})]),_c('span',{staticClass:"percent-font"},[_vm._v(_vm._s(_vm.exhibition(_vm.percent) || _vm.astrictPercent + "%"))])])}
var srcvue_type_template_id_80545816_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vdProgress/src/index.vue?vue&type=template&id=80545816&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdProgress/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vdProgress_srcvue_type_script_lang_js_ = ({
    name: "vd-progress",
    props: {
        percent: {
            type: Number,
            default: 0,
        },
        width: String,
        color: {
            type: [Array, Function, String],
            default: "#214252",
        },
        title: String,
        exhibition: {
            type: Function,
            default: () => {
                return false;
            },
        },
    },
    computed: {
        getProgressColor() {
            let colorType = typeof this.color;
            switch (colorType) {
                case "object":
                    if (this.color.length > 0 && Array.isArray(this.color)) {
                        const colorActive = this.color.filter(
                            (item) => item.percent === this.percent
                        );
                        return colorActive.length > 0 ? colorActive[0].color : "#214252";
                    } else return "#214252";
                case "string":
                    return this.color;
                case "function":
                    return this.color(this.percent);
            }
        },
        astrictPercent() {
            if (this.percent > 100) return 100;
            else if (this.percent < 0) return 0;
            else return this.percent;
        },
    },
});

// CONCATENATED MODULE: ./packages/vdProgress/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_vdProgress_srcvue_type_script_lang_js_ = (vdProgress_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vdProgress/src/index.vue





/* normalize component */

var vdProgress_src_component = normalizeComponent(
  packages_vdProgress_srcvue_type_script_lang_js_,
  srcvue_type_template_id_80545816_render,
  srcvue_type_template_id_80545816_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vdProgress_src = (vdProgress_src_component.exports);
// CONCATENATED MODULE: ./packages/vdProgress/index.js


vdProgress_src.install = function (Vue) {
  Vue.component( vdProgress_src.name, vdProgress_src )
}

/* harmony default export */ var vdProgress = (vdProgress_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10f25dde-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdLink/src/index.vue?vue&type=template&id=e15e90ac&
var srcvue_type_template_id_e15e90ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:[
        'vd-link',
        ("vd-link-" + _vm.type),
        {
            'vd-link-boder': _vm.underline
        }
    ],attrs:{"href":_vm.href || undefined,"target":_vm.target}},[_vm._t("default")],2)}
var srcvue_type_template_id_e15e90ac_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vdLink/src/index.vue?vue&type=template&id=e15e90ac&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdLink/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var vdLink_srcvue_type_script_lang_js_ = ({
    name:"vd-link",
    props: {
        href: String,
        type: {
            type: String,
            default: 'default'
        },
        underline: {
            type: Boolean,
            default: true
        },
        target: {
            type: String,
            default: undefined
        }
    }
});

// CONCATENATED MODULE: ./packages/vdLink/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_vdLink_srcvue_type_script_lang_js_ = (vdLink_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/vdLink/src/index.vue





/* normalize component */

var vdLink_src_component = normalizeComponent(
  packages_vdLink_srcvue_type_script_lang_js_,
  srcvue_type_template_id_e15e90ac_render,
  srcvue_type_template_id_e15e90ac_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vdLink_src = (vdLink_src_component.exports);
// CONCATENATED MODULE: ./packages/vdLink/index.js


vdLink_src.install = function (Vue){
    Vue.component( vdLink_src.name, vdLink_src )
}

/* harmony default export */ var vdLink = (vdLink_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10f25dde-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/xes-image-viewer/src/index.vue?vue&type=template&id=dc352a80&scoped=true&
var srcvue_type_template_id_dc352a80_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.imgList.length && _vm.value)?_c('div',{staticClass:"image-viewer__wrapper",style:({ 'z-index': _vm.zIndex })},[_c('div',{staticClass:"image-viewer__mask",on:{"click":function($event){_vm.closeOnClickMask && _vm.hide()}}}),(_vm.loading)?_c('div',{staticClass:"image-viewer__loading"},[_c('svg',{staticClass:"image-viewer__loading__lodingSvg",attrs:{"t":"1617243714833","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2206","width":"100","height":"100"}},[_c('path',{attrs:{"d":"M395.636364 157.533091a157.533091 155.159273 90 1 0 310.318545 0 157.533091 155.159273 90 1 0-310.318545 0Z","p-id":"2207","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M46.545455 551.377455a118.155636 116.363636 90 1 0 232.727272 0 118.155636 116.363636 90 1 0-232.727272 0Z","p-id":"2208","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M802.909091 275.688727a19.688727 19.386182 90 1 0 38.772364 0 19.688727 19.386182 90 1 0-38.772364 0Z","p-id":"2209","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M366.778182 186.088727a121.483636 121.483636 0 0 0-174.778182 0c-48.244364 49.477818-48.244364 129.722182 0 179.2a121.483636 121.483636 0 0 0 174.778182 0c48.244364-49.477818 48.244364-129.722182 0-179.2z","p-id":"2210","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M899.863273 551.377455a39.377455 38.795636 90 1 0 77.591272 0 39.377455 38.795636 90 1 0-77.591272 0Z","p-id":"2211","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M766.557091 829.533091a59.066182 58.181818 90 1 0 116.363636 0 59.066182 58.181818 90 1 0-116.363636 0Z","p-id":"2212","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M473.227636 945.221818a78.778182 77.568 90 1 0 155.136 0 78.778182 77.568 90 1 0-155.136 0Z","p-id":"2213","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M182.295273 827.066182a98.466909 96.977455 90 1 0 193.954909 0 98.466909 96.977455 90 1 0-193.954909 0Z","p-id":"2214","fill":"#e6e6e6"}})])]):_vm._e(),_c('span',{staticClass:"image-viewer__btn image-viewer__close",on:{"click":_vm.hide}},[_c('i',{staticClass:"icon xes-close-icon"})]),(!_vm.isSingle && _vm.showPreNextBar)?[_c('span',{staticClass:"image-viewer__btn image-viewer__prev",class:{ 'is-disabled': !_vm.infinite && _vm.isFirst },on:{"click":_vm.prev}},[_c('i',{staticClass:"imgs-viewer-icon imgs-viewer-icon-arrow-left-bold imgs-prev"})]),_c('span',{staticClass:"image-viewer__btn image-viewer__next",class:{ 'is-disabled': !_vm.infinite && _vm.isLast },on:{"click":_vm.next}},[_c('i',{staticClass:"imgs-viewer-icon imgs-viewer-icon-arrow-right-bold imgs-next"})])]:_vm._e(),(_vm.currentTitle)?_c('div',{staticClass:"image-viewer__title"},[_vm._v(" "+_vm._s(_vm.currentTitle)+" ")]):_vm._e(),_c('div',{staticClass:"image-viewer__btn image-viewer__actions"},[_c('div',{staticClass:"image-viewer__actions__inner"},[_c('div',{staticClass:"actions-block"},[_c('i',{staticClass:"icon left-rotation",on:{"click":function($event){return _vm.handleActions('anticlocelise')}}}),_c('span',{staticClass:"font-tip"},[_vm._v("左旋转")])]),_c('div',{staticClass:"actions-block"},[_c('i',{staticClass:"icon right-rotation",on:{"click":function($event){return _vm.handleActions('clocelise')}}}),_c('span',{staticClass:"font-tip"},[_vm._v("右旋转")])]),_c('i',{staticClass:"image-viewer__actions__divider"}),_c('div',{staticClass:"actions-block"},[_c('i',{staticClass:"icon zoom-out",on:{"click":function($event){return _vm.handleActions('zoomIn')}}}),_c('span',{staticClass:"font-tip"},[_vm._v("放大")])]),_c('div',{staticClass:"actions-block"},[_c('i',{staticClass:"icon zoom-in",on:{"click":function($event){return _vm.handleActions('zoomOut')}}}),_c('span',{staticClass:"font-tip"},[_vm._v("缩小")])])])]),_c('div',{staticClass:"image-viewer__canvas"},[_c('img',{key:_vm.currentImg,ref:"img",staticClass:"image-viewer__img",style:(_vm.imgStyle),attrs:{"src":_vm.currentImg},on:{"load":_vm.handleImgLoad,"error":_vm.handleImgError,"mousedown":_vm.handleMouseDown}})])],2):_vm._e()])}
var srcvue_type_template_id_dc352a80_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/xes-image-viewer/src/index.vue?vue&type=template&id=dc352a80&scoped=true&

// CONCATENATED MODULE: ./common/utils/index.js
const on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

const off = (function() {
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

function rafThrottle(fn) {
  let locked = false;
  return function(...args) {
    if (locked) return;
    locked = true;
    window.requestAnimationFrame(_ => {
      fn.apply(this, args);
      locked = false;
    });
  };
}

const isFirefox = function() {
  return !!window.navigator.userAgent.match(/firefox/i);
};
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/xes-image-viewer/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let prevOverflow = ''
const Mode = {
  CONTAIN: {
    name: 'contain',
    icon: 'imgs-viewer-icon-full-screen',
  },
  ORIGINAL: {
    name: 'original',
    icon: 'imgs-viewer-icon-scale-to-original',
  },
}
const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel'
/* harmony default export */ var xes_image_viewer_srcvue_type_script_lang_js_ = ({
  name: 'xesImageViewer',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    imgList: {
      type: Array,
      default: () => [],
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
    closeOnClickMask: {
      type: Boolean,
      default: false,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    onSwitch: {
      type: Function,
      default: () => { },
    },
    currentImageIndex: {
      type: Number,
      default: 0,
    },
    showPreNextBar: {
      type: Boolean,
      default: false,
    },
    spaceAction: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      index: 0,
      isShow: false,
      infinite: true,
      loading: true,
      mode: Mode.CONTAIN,
      transform: {
        scale: 1,
        deg: 0,
        offsetX: null,
        offsetY: null,
        enableTransition: false,
      },

    }
  },
  computed: {
    isSingle() {
      return this.imgList.length <= 1
    },
    isFirst() {
      return this.index === 0
    },
    isLast() {
      return this.index === this.imgList.length - 1
    },
    isSimple() {
      return typeof this.imgList[0] === 'string'
    },
    currentImg() {
      if (this.imgList.length) {
        if (this.isSimple) {
          return this.imgList[this.index]
        } else {
          return this.imgList[this.index].url
        }
      }
      return null
    },
    currentTitle() {
      if (this.imgList.length && !this.isSimple) {
        return this.imgList[this.index].title
      }
      return ''
    },
    imgStyle() {
      const { scale, deg, offsetX, offsetY, enableTransition } = this.transform
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg)`,
        transition: enableTransition ? 'transform .3s' : '',
        'left': `${offsetX}px`,
        'top': `${offsetY}px`,
      }
      if (this.mode === Mode.CONTAIN) {
        style.maxWidth = style.maxHeight = '100%'
      }
      return style
    },
  },
  watch: {
    value(val) {
      if (this.imgList.length) {
        if (val) {
          this.deviceSupportInstall()
          document.body.appendChild(this.$el)
          prevOverflow = document.body.style.overflow
          document.body.style.overflow = 'hidden'
        } else {
          this.deviceSupportUninstall()
          document.body.removeChild(this.$el)
          document.body.style.overflow = prevOverflow
          this.reset()
        }
      } else {
        if (val) {
          this.hide()
        }
      }
    },
    index: {
      handler: function (val) {
        this.reset()
        this.onSwitch(val)
      },
    },
    currentImg(val) {
      this.$nextTick((_) => {
        const $img = this.$refs.img
        if ($img && !$img.complete) {
          this.loading = true
        }
      })
    },
  },
  created() {
    this.index = this.currentImageIndex
  },
  methods: {
    hide() {
      this.$emit('input', false)
    },
    deviceSupportInstall() {
      this._keyDownHandler = rafThrottle((e) => {
        const keyCode = e.keyCode
        switch (keyCode) {
          // ESC
          case 27:
            this.closeOnPressEscape && this.hide()
            break
          // SPACE
          case 32:
            if (this.spaceAction) {
              this.toggleMode()
            }

            break
          // LEFT_ARROW
          case 37:
            if (this.showPreNextBar) {
              this.prev()
            }
            break
          // UP_ARROW
          case 38:
            this.handleActions('zoomIn')
            break
          // RIGHT_ARROW
          case 39:
            if (this.showPreNextBar) {
              this.next()
            }
            break
          // DOWN_ARROW
          case 40:
            this.handleActions('zoomOut')
            break
        }
      })
      this._mouseWheelHandler = rafThrottle((e) => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail
        if (delta > 0) {
          this.handleActions('zoomIn', {
            zoomRate: 0.03,
            enableTransition: false,
          })
        } else {
          this.handleActions('zoomOut', {
            zoomRate: 0.03,
            enableTransition: false,
          })
        }
      })
      on(document, 'keydown', this._keyDownHandler)
      on(document, mousewheelEventName, this._mouseWheelHandler)
    },
    deviceSupportUninstall() {
      off(document, 'keydown', this._keyDownHandler)
      off(document, mousewheelEventName, this._mouseWheelHandler)
      this._keyDownHandler = null
      this._mouseWheelHandler = null
    },
    handleImgLoad() {
      this.transform.offsetX = null;
      this.transform.offsetY = null;
      const rect = this.$refs.img.getBoundingClientRect()
      const { width, height } = rect
      const { innerWidth, innerHeight } = window
      this.transform.offsetX = (innerWidth - width) / 2
      this.transform.offsetY = (innerHeight - height) / 2
      this.loading = false
    },
    handleImgError(e) {
      this.loading = false
      e.target.alt = '加载失败'
    },
    handleMouseDown(e) {
      if (this.loading || e.button !== 0) return
      e.stopPropagation()
      e.preventDefault()
      const { offsetX, offsetY } = this.transform
      const startX = e.clientX
      const startY = e.clientY
      this._dragHandler = rafThrottle((ev) => {
        this.transform.offsetX = Number(offsetX) + ev.clientX - startX
        this.transform.offsetY = Number(offsetY) + ev.clientY - startY
      })
      const up = () => {
        off(document, 'mouseup', up)
        off(document, 'mousemove', this._dragHandler)
      }
      on(document, 'mousemove', this._dragHandler)
      on(document, 'mouseup', up)

    },
    reset() {
      this.transform = {
        scale: 1,
        deg: 0,
        offsetX: null,
        offsetY: null,
        enableTransition: false,
      }
    },
    toggleMode() {
      if (this.loading) return
      const modeNames = Object.keys(Mode)
      const modeValues = Object.values(Mode)
      const index = modeValues.indexOf(this.mode)
      const nextIndex = (index + 1) % modeNames.length
      this.mode = Mode[modeNames[nextIndex]]
      this.reset()
    },
    prev() {
      if (this.isFirst && !this.infinite) return
      const len = this.imgList.length
      this.index = (this.index - 1 + len) % len
    },
    next() {
      if (this.isLast && !this.infinite) return
      const len = this.imgList.length
      this.index = (this.index + 1) % len
    },
    handleActions(action, options = {}) {
      if (this.loading) return
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true,
        ...options,
      }
      const { transform } = this
      switch (action) {
        case 'zoomOut':
          if (transform.scale > 0.2) {
            transform.scale = parseFloat(
              (transform.scale - zoomRate).toFixed(3)
            )
          }
          break
        case 'zoomIn':
          transform.scale = parseFloat((transform.scale + zoomRate).toFixed(3))
          break
        case 'clocelise':
          transform.deg += rotateDeg
          break
        case 'anticlocelise':
          transform.deg -= rotateDeg
          break
      }
      transform.enableTransition = enableTransition
    },
  },
});

// CONCATENATED MODULE: ./packages/xes-image-viewer/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_xes_image_viewer_srcvue_type_script_lang_js_ = (xes_image_viewer_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/xes-image-viewer/src/index.vue?vue&type=style&index=0&id=dc352a80&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_dc352a80_lang_scss_scoped_true_ = __webpack_require__("43fe");

// CONCATENATED MODULE: ./packages/xes-image-viewer/src/index.vue






/* normalize component */

var xes_image_viewer_src_component = normalizeComponent(
  packages_xes_image_viewer_srcvue_type_script_lang_js_,
  srcvue_type_template_id_dc352a80_scoped_true_render,
  srcvue_type_template_id_dc352a80_scoped_true_staticRenderFns,
  false,
  null,
  "dc352a80",
  null
  
)

/* harmony default export */ var xes_image_viewer_src = (xes_image_viewer_src_component.exports);
// CONCATENATED MODULE: ./packages/xes-image-viewer/index.js


xes_image_viewer_src.install = function (Vue) {
  Vue.component( xes_image_viewer_src.name, xes_image_viewer_src )
}

/* harmony default export */ var xes_image_viewer = (xes_image_viewer_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"10f25dde-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/goTop/src/index.vue?vue&type=template&id=13f3f3ef&scoped=true&
var srcvue_type_template_id_13f3f3ef_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"vue-go-top"}},[(_vm.isActive && _vm.enabled)?_c('div',{staticClass:"vue-go-top",style:(_vm.mainStyle),attrs:{"role":"button","tabindex":_vm.tabindex},on:{"click":function($event){$event.preventDefault();return _vm.clickHandle($event)},"keydown":function($event){$event.preventDefault();return _vm.keyEnter($event)}}},[(_vm.src !== null)?_c('div',{staticClass:"vue-go-top__icon"},[_c('img',{staticClass:"vue-go-top__image",attrs:{"src":_vm.src,"alt":_vm.alt}}),_c('div',{staticClass:"vue-go-top__ripple",style:(_vm.rippleStyle),attrs:{"is-active":_vm.isRippleActive}})]):_c('div',{staticClass:"vue-go-top__content"},[_c('div',{staticClass:"vue-go-top__ripple",style:(_vm.rippleStyle),attrs:{"is-active":_vm.isRippleActive}}),_vm._t("default")],2)]):_vm._e()])}
var srcvue_type_template_id_13f3f3ef_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/goTop/src/index.vue?vue&type=template&id=13f3f3ef&scoped=true&

// CONCATENATED MODULE: ./node_modules/throttle-debounce/dist/index.esm.js
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}  [atBegin]     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                  to `callback` when the debounced-function is executed.
 *
 * @return {Function} A new, debounced function.
 */

function debounce (delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}



// EXTERNAL MODULE: ./node_modules/sweet-scroll/sweet-scroll.js
var sweet_scroll = __webpack_require__("6cbf");
var sweet_scroll_default = /*#__PURE__*/__webpack_require__.n(sweet_scroll);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/goTop/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const KEY_ENTER = 13;
const KEY_SPACE = 32;
const RIPPLE_DURATION = 750;
const THROTTLE_DELAY = 100;

const makeBgImage = (weight, fgColor) => {
  const color = fgColor.replace(/^#/, '');
  if (weight === 'bold') {
    return 'data:image/svg+xml;charset=utf8, %3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 width=%2710px%27 height=%2710px%27%3E %3Cpolygon fill=%27%23' + color + '%27 stroke=%27none%27 points=%278.646,7.354 5,3.707 1.354,7.354 0.646,6.646 5,2.293 9.354,6.646%27 /%3E %3C/svg%3E';
  }
  return 'data:image/svg+xml;charset=utf8,%3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 width=%2710px%27 height=%2710px%27%3E %3Cpolygon fill=%27%23' + color + '%27 stroke=%27none%27 points=%278.589,6.945 5,3.22 1.413,6.945 1.052,6.598 5,2.499 8.948,6.598%27 /%3E %3C/svg%3E';
};

const fmtProp = (value, unit = 'px') => {
  return typeof value === 'number' ? value + unit : value;
};

const scroller = new sweet_scroll_default.a();

/* harmony default export */ var goTop_srcvue_type_script_lang_js_ = ({
  name: 'goTop',
  props: {
    size: {
      type: Number,
      default: 50
    },
    right: {
      type: [String, Number],
      default: 20
    },
    bottom: {
      type: [String, Number],
      default: 50
    },
    bottomGap: {
      type: [String, Number],
      default: 0
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    fgColor: {
      type: String,
      default: '#ffffff'
    },
    bgColor: {
      type: String,
      default: '#ffc966'
    },
    radius: {
      type: [String, Number],
      default: '50%'
    },
    weight: {
      type: String,
      default: 'normal'
    },
    rippleBg: {
      type: String,
      default: 'rgba(255, 255, 255, .5)'
    },
    boundary: {
      type: Number,
      default: 200
    },
    maxWidth: {
      type: Number,
      default: 640
    },
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: ''
    },
    hasOutline: {
      type: Boolean,
      default: true
    },
    boxShadow: {
      type: String,
      default: '1px 1px 2px rgba(0, 0, 0, .3)'
    },
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    const outline = this.hasOutline ? {} : { outline: '0 none' };
    return {
      enabled: false,
      isActive: false,
      isRippleActive: false,
      mainStyle: {
        width: fmtProp(this.size),
        height: fmtProp(this.size),
        right: fmtProp(this.right),
        bottom: `calc(${fmtProp(this.bottom)} - ${fmtProp(this.bottomGap)})`,
        zIndex: this.zIndex,
        color: this.fgColor,
        backgroundColor: this.bgColor,
        backgroundImage: this.bgImage(),
        backgroundSize: `${this.size} auto`,
        boxShadow: this.boxShadow,
        opacity: this.opacity,
        borderRadius: fmtProp(this.radius),
        ...outline,
      },
      rippleStyle: {
        top: fmtProp(-this.size),
        left: fmtProp(-this.size),
        width: '200%',
        height: '200%',
        backgroundColor: this.rippleBg
      },
      throttleScroll: null,
      throttleResize: null
    };
  },
  created() {
    this.handleResize();
    this.throttleScroll = throttle(THROTTLE_DELAY, this.handleScroll);
    this.throttleResize = throttle(THROTTLE_DELAY, this.handleResize);
    window.addEventListener('resize', this.throttleResize);
    window.addEventListener('scroll', this.throttleScroll);
  },
  beforeDestroy() {
    if (this.throttleResize) {
      window.removeEventListener('resize', this.throttleResize);
    }
    if (this.throttleScroll) {
      window.removeEventListener('scroll', this.throttleScroll);
    }
  },
  methods: {
    clickHandle(e) {
      if (!this.isRippleActive) {
        const elTarget = e.target;
        if (elTarget) {
          const rect = elTarget.getBoundingClientRect();
          const top = e.clientY - rect.top;
          const left = e.clientX - rect.left;
          this.rippleStyle.top = fmtProp(top - this.size);
          this.rippleStyle.left = fmtProp(left - this.size);
        }
        this.isRippleActive = true;
        setTimeout(() => {
          this.isRippleActive = false;
        }, RIPPLE_DURATION);
      }
      scroller.to(0);
    },
    handleScroll() { // toggle display by scrolling.
      this.isActive = window.pageYOffset > this.boundary;
    },
    handleResize() {
      if (this.maxWidth > 0) {
        this.enabled = !window.matchMedia(`(max-width: ${this.maxWidth}px)`).matches;
      } else {
        this.enabled = true;
      }
    },
    keyEnter(e) {
      if (e.keyCode === KEY_ENTER || e.keyCode === KEY_SPACE) {
        scroller.to(0);
      }
    },
    bgImage: function() {
      if (this.src !== null) {
        return 'none';
      }
      return `url("${makeBgImage(this.weight, this.fgColor)}")`;
    },
  },
});

// CONCATENATED MODULE: ./packages/goTop/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_goTop_srcvue_type_script_lang_js_ = (goTop_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/goTop/src/index.vue?vue&type=style&index=0&id=13f3f3ef&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_13f3f3ef_lang_scss_scoped_true_ = __webpack_require__("7bc5");

// CONCATENATED MODULE: ./packages/goTop/src/index.vue






/* normalize component */

var goTop_src_component = normalizeComponent(
  packages_goTop_srcvue_type_script_lang_js_,
  srcvue_type_template_id_13f3f3ef_scoped_true_render,
  srcvue_type_template_id_13f3f3ef_scoped_true_staticRenderFns,
  false,
  null,
  "13f3f3ef",
  null
  
)

/* harmony default export */ var goTop_src = (goTop_src_component.exports);
// CONCATENATED MODULE: ./packages/goTop/index.js


goTop_src.install = function (Vue){
    Vue.component( goTop_src.name, goTop_src )
}

/* harmony default export */ var goTop = (goTop_src);
// EXTERNAL MODULE: ./common/style/index.scss
var style = __webpack_require__("bb97");

// CONCATENATED MODULE: ./packages/index.js









const components = [
    vdButton,
    vdCard,
    vdInput,
    vdProgress,
    vdLink,
    goTop
]

// 全局注册
const install = function( Vue, opt = {} ) {
    components.forEach(item => {
        register( Vue, item )
    })
}

/* harmony default export */ var packages_0 = (install);

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
/**
 * 注册组件
 * @param { vue } _v
 * @param { component } com
 */
function register ( _v, com ) {
    if(typeof _v !== 'function' && typeof com !== 'object') return
    _v.component( com.name, com)
}
// 按需暴露

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});