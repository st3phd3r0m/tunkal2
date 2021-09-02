"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["commentsTable"],{

/***/ "./assets/commentsTable.js":
/*!*********************************!*\
  !*** ./assets/commentsTable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_admin_comments_deleteComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/admin/comments/deleteComments.js */ "./assets/components/admin/comments/deleteComments.js");


/***/ }),

/***/ "./assets/components/admin/comments/deleteComments.js":
/*!************************************************************!*\
  !*** ./assets/components/admin/comments/deleteComments.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _MessageApi_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MessageApi.vue */ "./assets/components/admin/comments/MessageApi.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
















new vue__WEBPACK_IMPORTED_MODULE_14__.default({
  el: '#commentsTable',
  delimiters: ['${', '}$'],
  components: {
    MessageApi: _MessageApi_vue__WEBPACK_IMPORTED_MODULE_13__.default
  },
  data: {
    commentsToDelete: [],
    messageApi: '',
    successApi: false,
    failApi: false
  },
  methods: {
    onStoreCommentsToDelete: function onStoreCommentsToDelete(event) {
      var checkBox = event.target;
      var object = {
        'id': checkBox.dataset.commentid,
        'token': checkBox.dataset._token
      };

      if (checkBox.checked) {
        this.commentsToDelete.push(object);
      } else {
        this.commentsToDelete = this.commentsToDelete.filter(function (el) {
          return el.id != object.id && el.token != object.token;
        });
      }
    },
    deleteComments: function deleteComments() {
      var _this = this;

      var doneCount = 0;

      var _iterator = _createForOfIteratorHelper(this.commentsToDelete),
          _step;

      try {
        var _loop = function _loop() {
          var comment = _step.value;
          fetch('/admin/api/comments/' + comment.id, {
            method: 'DELETE',
            mode: 'same-origin',
            headers: {
              "Authorization": comment.token,
              "X-Requested-With": 'XMLHttpRequest'
            }
          }).then(function (response) {
            if (response.status == 200) {
              $("#comment_" + comment.id).parents("tr").remove();
              _this.messageApi = 'Elément(s) supprimés';
              _this.successApi = true;
              _this.failApi = false;
            } else {
              _this.messageApi = "Une erreur est survenue: " + response.status + " " + response.statusText;
              _this.successApi = false;
              _this.failApi = true;
            }

            doneCount++;

            if (doneCount == _this.commentsToDelete.length) {
              _this.tryToRefresh();
            }
          })["catch"](function (error) {
            _this.messageApi = "Une erreur est survenue: " + error.message;
            _this.successApi = false;
            _this.failApi = true;
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },
    tryToRefresh: function tryToRefresh() {
      this.commentsToDelete = [];

      try {
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/comments/MessageApi.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/comments/MessageApi.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "message-api",
  delimiters: ["${", "}$"],
  props: {
    message: String,
    success: Boolean,
    fail: Boolean
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./assets/components/admin/comments/MessageApi.vue":
/*!*********************************************************!*\
  !*** ./assets/components/admin/comments/MessageApi.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MessageApi_vue_vue_type_template_id_3ecd49a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MessageApi.vue?vue&type=template&id=3ecd49a3& */ "./assets/components/admin/comments/MessageApi.vue?vue&type=template&id=3ecd49a3&");
/* harmony import */ var _MessageApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageApi.vue?vue&type=script&lang=js& */ "./assets/components/admin/comments/MessageApi.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MessageApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MessageApi_vue_vue_type_template_id_3ecd49a3___WEBPACK_IMPORTED_MODULE_0__.render,
  _MessageApi_vue_vue_type_template_id_3ecd49a3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/admin/comments/MessageApi.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/admin/comments/MessageApi.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/components/admin/comments/MessageApi.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageApi.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/comments/MessageApi.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageApi_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/admin/comments/MessageApi.vue?vue&type=template&id=3ecd49a3&":
/*!****************************************************************************************!*\
  !*** ./assets/components/admin/comments/MessageApi.vue?vue&type=template&id=3ecd49a3& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageApi_vue_vue_type_template_id_3ecd49a3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageApi_vue_vue_type_template_id_3ecd49a3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MessageApi_vue_vue_type_template_id_3ecd49a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MessageApi.vue?vue&type=template&id=3ecd49a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/comments/MessageApi.vue?vue&type=template&id=3ecd49a3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/comments/MessageApi.vue?vue&type=template&id=3ecd49a3&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/comments/MessageApi.vue?vue&type=template&id=3ecd49a3& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "alert",
      class: { "alert-success": _vm.success, "alert-warning": _vm.fail },
      attrs: { role: "alert" }
    },
    [_vm._v(_vm._s(_vm.message))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_html_js","vendors-node_modules_core-js_internals_check-correctness-of-iteration_js-node_modules_core-js-13ab7c","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-3637c8","vendors-node_modules_core-js_modules_es_promise_js"], () => (__webpack_exec__("./assets/commentsTable.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUN0QzJNLENBQUMsaUVBQWUsNE1BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E5TztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBeUQ7QUFDeEUsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbi9jb21tZW50cy9kZWxldGVDb21tZW50cy5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vY29tbWVudHMvTWVzc2FnZUFwaS52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vY29tbWVudHMvTWVzc2FnZUFwaS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vY29tbWVudHMvTWVzc2FnZUFwaS52dWU/MjE3YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbi9jb21tZW50cy9NZXNzYWdlQXBpLnZ1ZT85NGZmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IE1lc3NhZ2VBcGkgZnJvbSAnLi9NZXNzYWdlQXBpLnZ1ZSc7XG5cbm5ldyBWdWUoe1xuICBlbDogJyNjb21tZW50c1RhYmxlJyxcbiAgZGVsaW1pdGVyczogWyckeycsICd9JCddLFxuICBjb21wb25lbnRzOiB7XG4gICAgTWVzc2FnZUFwaVxuICB9LFxuICBkYXRhOiB7XG4gICAgY29tbWVudHNUb0RlbGV0ZTogW10sXG4gICAgbWVzc2FnZUFwaTonJyxcbiAgICBzdWNjZXNzQXBpOiBmYWxzZSxcbiAgICBmYWlsQXBpOiBmYWxzZVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25TdG9yZUNvbW1lbnRzVG9EZWxldGU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgY2hlY2tCb3ggPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGxldCBvYmplY3QgPSB7XG4gICAgICAgICAgICAnaWQnOiBjaGVja0JveC5kYXRhc2V0LmNvbW1lbnRpZCxcbiAgICAgICAgICAgICd0b2tlbic6IGNoZWNrQm94LmRhdGFzZXQuX3Rva2VuXG4gICAgICAgIH07XG4gICAgICAgIGlmIChjaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzVG9EZWxldGUucHVzaChvYmplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21tZW50c1RvRGVsZXRlID0gdGhpcy5jb21tZW50c1RvRGVsZXRlLmZpbHRlciggZWwgPT4geyByZXR1cm4gKGVsLmlkICE9IG9iamVjdC5pZCkgJiYgKGVsLnRva2VuICE9IG9iamVjdC50b2tlbik7IH0gKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlQ29tbWVudHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBkb25lQ291bnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBjb21tZW50IG9mIHRoaXMuY29tbWVudHNUb0RlbGV0ZSkge1xuICAgICAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICAgICAgJy9hZG1pbi9hcGkvY29tbWVudHMvJyArIGNvbW1lbnQuaWQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogY29tbWVudC50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb21tZW50X1wiICsgY29tbWVudC5pZCkucGFyZW50cyhcInRyXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VBcGkgPSAnRWzDqW1lbnQocykgc3VwcHJpbcOpcyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc0FwaT10cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxBcGk9ZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQXBpID0gXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZTogXCIgKyByZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2Vzc0FwaT1mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsQXBpPXRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvbmVDb3VudCsrO1xuICAgICAgICAgICAgICAgIGlmIChkb25lQ291bnQgPT0gdGhpcy5jb21tZW50c1RvRGVsZXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyeVRvUmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUFwaSA9IFwiVW5lIGVycmV1ciBlc3Qgc3VydmVudWU6IFwiICsgZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3NBcGk9ZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5mYWlsQXBpPXRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0cnlUb1JlZnJlc2g6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuY29tbWVudHNUb0RlbGV0ZSA9IFtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gIH0sXG59KSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImFsZXJ0XCIgOmNsYXNzPVwieydhbGVydC1zdWNjZXNzJzogc3VjY2VzcywgJ2FsZXJ0LXdhcm5pbmcnOiBmYWlsIH1cIiByb2xlPVwiYWxlcnRcIj57e21lc3NhZ2V9fTwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJtZXNzYWdlLWFwaVwiLFxuICBkZWxpbWl0ZXJzOiBbXCIke1wiLCBcIn0kXCJdLFxuICBwcm9wczoge1xuICAgIG1lc3NhZ2U6IFN0cmluZyxcbiAgICBzdWNjZXNzOiBCb29sZWFuLFxuICAgIGZhaWw6IEJvb2xlYW5cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVzc2FnZUFwaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VjZDQ5YTMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVzc2FnZUFwaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lc3NhZ2VBcGkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9zdDNwaC9wcm9qZXRzU3ltZm9ueS90dW5rYWwyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNlY2Q0OWEzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNlY2Q0OWEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNlY2Q0OWEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NZXNzYWdlQXBpLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWNkNDlhMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZWNkNDlhMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vY29tbWVudHMvTWVzc2FnZUFwaS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVzc2FnZUFwaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZXNzYWdlQXBpLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhbGVydFwiLFxuICAgICAgY2xhc3M6IHsgXCJhbGVydC1zdWNjZXNzXCI6IF92bS5zdWNjZXNzLCBcImFsZXJ0LXdhcm5pbmdcIjogX3ZtLmZhaWwgfSxcbiAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9XG4gICAgfSxcbiAgICBbX3ZtLl92KF92bS5fcyhfdm0ubWVzc2FnZSkpXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWdWUiLCJNZXNzYWdlQXBpIiwiZWwiLCJkZWxpbWl0ZXJzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21tZW50c1RvRGVsZXRlIiwibWVzc2FnZUFwaSIsInN1Y2Nlc3NBcGkiLCJmYWlsQXBpIiwibWV0aG9kcyIsIm9uU3RvcmVDb21tZW50c1RvRGVsZXRlIiwiZXZlbnQiLCJjaGVja0JveCIsInRhcmdldCIsIm9iamVjdCIsImRhdGFzZXQiLCJjb21tZW50aWQiLCJfdG9rZW4iLCJjaGVja2VkIiwicHVzaCIsImZpbHRlciIsImlkIiwidG9rZW4iLCJkZWxldGVDb21tZW50cyIsImRvbmVDb3VudCIsImNvbW1lbnQiLCJmZXRjaCIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiJCIsInBhcmVudHMiLCJyZW1vdmUiLCJzdGF0dXNUZXh0IiwibGVuZ3RoIiwidHJ5VG9SZWZyZXNoIiwiZXJyb3IiLCJtZXNzYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==