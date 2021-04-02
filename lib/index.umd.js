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

/***/ "07b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_631d2194_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8d0d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_631d2194_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_631d2194_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "8d0d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bb97":
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11e9ad65-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdButton/src/index.vue?vue&type=template&id=68606856&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11e9ad65-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdCard/src/index.vue?vue&type=template&id=2e064b4b&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11e9ad65-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdProgress/src/index.vue?vue&type=template&id=80545816&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11e9ad65-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vdLink/src/index.vue?vue&type=template&id=e15e90ac&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"11e9ad65-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/xes-image-viewer/src/index.vue?vue&type=template&id=631d2194&scoped=true&
var srcvue_type_template_id_631d2194_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[(_vm.imgList.length && _vm.value)?_c('div',{staticClass:"image-viewer__wrapper",style:({ 'z-index': _vm.zIndex })},[_c('div',{staticClass:"image-viewer__mask",on:{"click":function($event){_vm.closeOnClickMask && _vm.hide()}}}),(_vm.loading)?_c('div',{staticClass:"image-viewer__loading"},[_c('svg',{staticClass:"image-viewer__loading__lodingSvg",attrs:{"t":"1617243714833","viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","p-id":"2206","width":"100","height":"100"}},[_c('path',{attrs:{"d":"M395.636364 157.533091a157.533091 155.159273 90 1 0 310.318545 0 157.533091 155.159273 90 1 0-310.318545 0Z","p-id":"2207","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M46.545455 551.377455a118.155636 116.363636 90 1 0 232.727272 0 118.155636 116.363636 90 1 0-232.727272 0Z","p-id":"2208","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M802.909091 275.688727a19.688727 19.386182 90 1 0 38.772364 0 19.688727 19.386182 90 1 0-38.772364 0Z","p-id":"2209","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M366.778182 186.088727a121.483636 121.483636 0 0 0-174.778182 0c-48.244364 49.477818-48.244364 129.722182 0 179.2a121.483636 121.483636 0 0 0 174.778182 0c48.244364-49.477818 48.244364-129.722182 0-179.2z","p-id":"2210","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M899.863273 551.377455a39.377455 38.795636 90 1 0 77.591272 0 39.377455 38.795636 90 1 0-77.591272 0Z","p-id":"2211","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M766.557091 829.533091a59.066182 58.181818 90 1 0 116.363636 0 59.066182 58.181818 90 1 0-116.363636 0Z","p-id":"2212","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M473.227636 945.221818a78.778182 77.568 90 1 0 155.136 0 78.778182 77.568 90 1 0-155.136 0Z","p-id":"2213","fill":"#e6e6e6"}}),_c('path',{attrs:{"d":"M182.295273 827.066182a98.466909 96.977455 90 1 0 193.954909 0 98.466909 96.977455 90 1 0-193.954909 0Z","p-id":"2214","fill":"#e6e6e6"}})])]):_vm._e(),_c('span',{staticClass:"image-viewer__btn image-viewer__close",on:{"click":_vm.hide}},[_c('i',{staticClass:"icon xes-close-icon"})]),(!_vm.isSingle && _vm.showPreNextBar)?[_c('span',{staticClass:"image-viewer__btn image-viewer__prev",class:{ 'is-disabled': !_vm.infinite && _vm.isFirst },on:{"click":_vm.prev}},[_c('i',{staticClass:"imgs-viewer-icon imgs-viewer-icon-arrow-left-bold imgs-prev"})]),_c('span',{staticClass:"image-viewer__btn image-viewer__next",class:{ 'is-disabled': !_vm.infinite && _vm.isLast },on:{"click":_vm.next}},[_c('i',{staticClass:"imgs-viewer-icon imgs-viewer-icon-arrow-right-bold imgs-next"})])]:_vm._e(),(_vm.currentTitle)?_c('div',{staticClass:"image-viewer__title"},[_vm._v(" "+_vm._s(_vm.currentTitle)+" ")]):_vm._e(),_c('div',{staticClass:"image-viewer__btn image-viewer__actions"},[_c('div',{staticClass:"image-viewer__actions__inner"},[_c('div',{staticClass:"actions-block"},[_c('i',{staticClass:"icon left-rotation",on:{"click":function($event){return _vm.handleActions('anticlocelise')}}}),_c('span',{staticClass:"font-tip"},[_vm._v("左旋转")])]),_c('div',{staticClass:"actions-block"},[_c('i',{staticClass:"icon right-rotation",on:{"click":function($event){return _vm.handleActions('clocelise')}}}),_c('span',{staticClass:"font-tip"},[_vm._v("右旋转")])]),_c('i',{staticClass:"image-viewer__actions__divider"}),_c('div',{staticClass:"actions-block"},[_c('i',{staticClass:"icon zoom-out",on:{"click":function($event){return _vm.handleActions('zoomIn')}}}),_c('span',{staticClass:"font-tip"},[_vm._v("放大")])]),_c('div',{staticClass:"actions-block"},[_c('i',{staticClass:"icon zoom-in",on:{"click":function($event){return _vm.handleActions('zoomOut')}}}),_c('span',{staticClass:"font-tip"},[_vm._v("缩小")])])])]),_c('div',{staticClass:"image-viewer__canvas"},[_c('img',{key:_vm.currentImg,ref:"img",staticClass:"image-viewer__img",style:(_vm.imgStyle),attrs:{"src":_vm.currentImg},on:{"load":_vm.handleImgLoad,"error":_vm.handleImgError,"mousedown":_vm.handleMouseDown}})])],2):_vm._e()])}
var srcvue_type_template_id_631d2194_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/xes-image-viewer/src/index.vue?vue&type=template&id=631d2194&scoped=true&

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
    initialIndex: {
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
        offsetX: 0,
        offsetY: 0,
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
        'margin-left': `${offsetX}px`,
        'margin-top': `${offsetY}px`,
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
    initialIndex(i) {
      if (this.imgList.length && i < this.imgList.length) {
        this.index = i
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
    handleImgLoad(e) {
      this.loading = false
    },
    handleImgError(e) {
      this.loading = false
      e.target.alt = '加载失败'
    },
    handleMouseDown(e) {
      if (this.loading || e.button !== 0) return
      const { offsetX, offsetY } = this.transform
      const startX = e.pageX
      const startY = e.pageY
      this._dragHandler = rafThrottle((ev) => {
        this.transform.offsetX = offsetX + ev.pageX - startX
        this.transform.offsetY = offsetY + ev.pageY - startY
      })
      on(document, 'mousemove', this._dragHandler)
      on(document, 'mouseup', (ev) => {
        off(document, 'mousemove', this._dragHandler)
      })
      e.preventDefault()
    },
    reset() {
      this.transform = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
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
// EXTERNAL MODULE: ./packages/xes-image-viewer/src/index.vue?vue&type=style&index=0&id=631d2194&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_631d2194_lang_scss_scoped_true_ = __webpack_require__("07b6");

// CONCATENATED MODULE: ./packages/xes-image-viewer/src/index.vue






/* normalize component */

var xes_image_viewer_src_component = normalizeComponent(
  packages_xes_image_viewer_srcvue_type_script_lang_js_,
  srcvue_type_template_id_631d2194_scoped_true_render,
  srcvue_type_template_id_631d2194_scoped_true_staticRenderFns,
  false,
  null,
  "631d2194",
  null
  
)

/* harmony default export */ var xes_image_viewer_src = (xes_image_viewer_src_component.exports);
// CONCATENATED MODULE: ./packages/xes-image-viewer/index.js


xes_image_viewer_src.install = function (Vue) {
  Vue.component( xes_image_viewer_src.name, xes_image_viewer_src )
}

/* harmony default export */ var xes_image_viewer = (xes_image_viewer_src);
// EXTERNAL MODULE: ./common/style/index.scss
var style = __webpack_require__("bb97");

// CONCATENATED MODULE: ./packages/index.js








const components = [
    vdButton,
    vdCard,
    vdInput,
    vdProgress,
    vdLink,
    xes_image_viewer
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
//# sourceMappingURL=index.umd.js.map