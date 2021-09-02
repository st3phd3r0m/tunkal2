"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["linkForm"],{

/***/ "./assets/components/admin/links/linkForm.js":
/*!***************************************************!*\
  !*** ./assets/components/admin/links/linkForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _CategoriesPostsFields_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesPostsFields.vue */ "./assets/components/admin/links/CategoriesPostsFields.vue");


new vue__WEBPACK_IMPORTED_MODULE_1__.default({
  el: '#linkForm',
  delimiters: ['${', '}$'],
  components: {
    CategoriesPostsFields: _CategoriesPostsFields_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: {
    type: '',
    selectFieldValue: '',
    updatedFile: "",
    updated: false
  },
  mounted: function mounted() {
    this.selectFieldValue = this.$el.dataset.linkurl;
  },
  methods: {
    onGetLinkType: function onGetLinkType(event) {
      this.type = event.target.value;
      this.selectFieldValue = '';
    },
    onClickChild: function onClickChild(value) {
      this.selectFieldValue = value;
    },
    updateFile: function updateFile(event) {
      var _this = this;

      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = function (e) {
        _this.updatedFile = e.target.result;
        _this.updated = true;
      };
    }
  }
});

/***/ }),

/***/ "./assets/linkForm.js":
/*!****************************!*\
  !*** ./assets/linkForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_admin_links_linkForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/admin/links/linkForm.js */ "./assets/components/admin/links/linkForm.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "categories-posts-fields",
  delimiters: ["${", "}$"],
  props: {
    fieldtype: String
  },
  data: function data() {
    return {
      apiurl: [],
      _token: '',
      items: null
    };
  },
  mounted: function mounted() {
    this.apiurl = JSON.parse(this.$el.dataset.apiurl);
    this._token = this.$el.dataset._token;
  },
  methods: {
    ajaxCall: function ajaxCall() {
      var _this = this;

      var _token = this._token;
      var url = this.apiurl[this.fieldtype];

      if (null != url) {
        fetch(url, {
          method: 'GET',
          mode: 'same-origin',
          headers: {
            "X-Requested-With": 'XMLHttpRequest',
            "Authorization": _token
          }
        }).then(function (response) {
          return response.text();
        }).then(function (value) {
          var items = JSON.parse(value);

          if (items.data.length == 0) {
            //Message utilisateur au cas où la requete ajax retourne un tableau vide 
            _this.items = 'Aucun élément de ce type en bdd';
          } else {
            _this.items = items.data;
          }
        });
      }
    },
    onClickedEvent: function onClickedEvent(event) {
      var value = event.target.value;
      value = '/' + this.fieldtype + '/' + value;
      this.$emit('clicked', value);
    }
  },
  watch: {
    fieldtype: function fieldtype() {
      this.ajaxCall();
    }
  }
});

/***/ }),

/***/ "./assets/components/admin/links/CategoriesPostsFields.vue":
/*!*****************************************************************!*\
  !*** ./assets/components/admin/links/CategoriesPostsFields.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CategoriesPostsFields_vue_vue_type_template_id_5c2c4daf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesPostsFields.vue?vue&type=template&id=5c2c4daf& */ "./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=template&id=5c2c4daf&");
/* harmony import */ var _CategoriesPostsFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesPostsFields.vue?vue&type=script&lang=js& */ "./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CategoriesPostsFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CategoriesPostsFields_vue_vue_type_template_id_5c2c4daf___WEBPACK_IMPORTED_MODULE_0__.render,
  _CategoriesPostsFields_vue_vue_type_template_id_5c2c4daf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/admin/links/CategoriesPostsFields.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPostsFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoriesPostsFields.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPostsFields_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=template&id=5c2c4daf&":
/*!************************************************************************************************!*\
  !*** ./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=template&id=5c2c4daf& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPostsFields_vue_vue_type_template_id_5c2c4daf___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPostsFields_vue_vue_type_template_id_5c2c4daf___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesPostsFields_vue_vue_type_template_id_5c2c4daf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CategoriesPostsFields.vue?vue&type=template&id=5c2c4daf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=template&id=5c2c4daf&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=template&id=5c2c4daf&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/links/CategoriesPostsFields.vue?vue&type=template&id=5c2c4daf& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.fieldtype == "category"
      ? _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "category" } }, [
            _vm._v("Sélectionnez une catégorie")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: { id: "category", name: "category" },
              on: { click: _vm.onClickedEvent }
            },
            _vm._l(_vm.items, function(item) {
              return _c(
                "option",
                { key: item.id, domProps: { value: item.slug } },
                [_vm._v(_vm._s(item.name))]
              )
            }),
            0
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.fieldtype == "post"
      ? _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "post" } }, [
            _vm._v("Sélectionnez un article")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              staticClass: "form-control",
              attrs: { id: "post", name: "post" },
              on: { click: _vm.onClickedEvent }
            },
            _vm._l(_vm.items, function(item) {
              return _c(
                "option",
                { key: item.id, domProps: { value: item.slug } },
                [_vm._v(_vm._s(item.title))]
              )
            }),
            0
          )
        ])
      : _vm._e()
  ])
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_html_js","vendors-node_modules_core-js_internals_check-correctness-of-iteration_js-node_modules_core-js-13ab7c","vendors-node_modules_core-js_modules_es_promise_js"], () => (__webpack_exec__("./assets/linkForm.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2FkbWluL2xpbmtzL2xpbmtGb3JtLmpzIiwid2VicGFjazovLy9hc3NldHMvY29tcG9uZW50cy9hZG1pbi9saW5rcy9DYXRlZ29yaWVzUG9zdHNGaWVsZHMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2FkbWluL2xpbmtzL0NhdGVnb3JpZXNQb3N0c0ZpZWxkcy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vbGlua3MvQ2F0ZWdvcmllc1Bvc3RzRmllbGRzLnZ1ZT9kNzEyIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2FkbWluL2xpbmtzL0NhdGVnb3JpZXNQb3N0c0ZpZWxkcy52dWU/MTY3ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBDYXRlZ29yaWVzUG9zdHNGaWVsZHMgZnJvbSAnLi9DYXRlZ29yaWVzUG9zdHNGaWVsZHMudnVlJztcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2xpbmtGb3JtJyxcbiAgZGVsaW1pdGVyczogWyckeycsICd9JCddLFxuICBjb21wb25lbnRzOiB7XG4gICAgQ2F0ZWdvcmllc1Bvc3RzRmllbGRzXG4gIH0sXG4gIGRhdGE6IHtcbiAgICB0eXBlOiAnJyxcbiAgICBzZWxlY3RGaWVsZFZhbHVlOicnLFxuICAgIHVwZGF0ZWRGaWxlOiBcIlwiLFxuICAgIHVwZGF0ZWQ6IGZhbHNlLFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuc2VsZWN0RmllbGRWYWx1ZSA9IHRoaXMuJGVsLmRhdGFzZXQubGlua3VybDtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uR2V0TGlua1R5cGU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLnR5cGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2VsZWN0RmllbGRWYWx1ZSA9Jyc7XG4gICAgfSxcbiAgICBvbkNsaWNrQ2hpbGQgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNlbGVjdEZpZWxkVmFsdWUgPSB2YWx1ZTtcbiAgICB9LFxuICAgIHVwZGF0ZUZpbGU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGV2ZW50LnRhcmdldC5maWxlc1swXSk7XG4gICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVkRmlsZSA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgdGhpcy51cGRhdGVkID0gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn0pIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgdi1pZj1cImZpZWxkdHlwZT09J2NhdGVnb3J5J1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhdGVnb3J5XCI+U8OpbGVjdGlvbm5leiB1bmUgY2F0w6lnb3JpZTwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2F0ZWdvcnlcIiBuYW1lPVwiY2F0ZWdvcnlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtb246Y2xpY2s9XCJvbkNsaWNrZWRFdmVudFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cIml0ZW0uaWRcIiA6dmFsdWU9XCJpdGVtLnNsdWdcIj57eyBpdGVtLm5hbWUgfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiB2LWlmPVwiZmllbGR0eXBlPT0ncG9zdCdcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwb3N0XCI+U8OpbGVjdGlvbm5leiB1biBhcnRpY2xlPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwb3N0XCIgbmFtZT1cInBvc3RcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtb246Y2xpY2s9XCJvbkNsaWNrZWRFdmVudFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cIml0ZW0uaWRcIiA6dmFsdWU9XCJpdGVtLnNsdWdcIj57eyBpdGVtLnRpdGxlIH19PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiY2F0ZWdvcmllcy1wb3N0cy1maWVsZHNcIixcbiAgICBkZWxpbWl0ZXJzOiBbXCIke1wiLCBcIn0kXCJdLFxuICAgIHByb3BzOntcbiAgICAgICAgZmllbGR0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhcGl1cmw6W10sXG4gICAgICAgICAgICBfdG9rZW46ICcnLFxuICAgICAgICAgICAgaXRlbXM6IG51bGwsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuYXBpdXJsID0gSlNPTi5wYXJzZSh0aGlzLiRlbC5kYXRhc2V0LmFwaXVybCk7XG4gICAgICAgIHRoaXMuX3Rva2VuID0gdGhpcy4kZWwuZGF0YXNldC5fdG9rZW47XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFqYXhDYWxsOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgbGV0IF90b2tlbiA9IHRoaXMuX3Rva2VuO1xuICAgICAgICAgICAgbGV0IHVybCA9IHRoaXMuYXBpdXJsW3RoaXMuZmllbGR0eXBlXTtcbiAgICAgICAgICAgIGlmKG51bGwgIT0gdXJsKXtcbiAgICAgICAgICAgICAgICBmZXRjaChcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogX3Rva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKVxuICAgICAgICAgICAgICAgICkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXMuZGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTWVzc2FnZSB1dGlsaXNhdGV1ciBhdSBjYXMgb8O5IGxhIHJlcXVldGUgYWpheCByZXRvdXJuZSB1biB0YWJsZWF1IHZpZGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9ICdBdWN1biDDqWzDqW1lbnQgZGUgY2UgdHlwZSBlbiBiZGQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gaXRlbXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tlZEV2ZW50OiBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICB2YWx1ZSA9ICcvJyt0aGlzLmZpZWxkdHlwZSsnLycrdmFsdWU7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGlja2VkJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBmaWVsZHR5cGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5hamF4Q2FsbCgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2F0ZWdvcmllc1Bvc3RzRmllbGRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzJjNGRhZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DYXRlZ29yaWVzUG9zdHNGaWVsZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXRlZ29yaWVzUG9zdHNGaWVsZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9zdDNwaC9wcm9qZXRzU3ltZm9ueS90dW5rYWwyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVjMmM0ZGFmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVjMmM0ZGFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVjMmM0ZGFmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9DYXRlZ29yaWVzUG9zdHNGaWVsZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjMmM0ZGFmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVjMmM0ZGFmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9hZG1pbi9saW5rcy9DYXRlZ29yaWVzUG9zdHNGaWVsZHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhdGVnb3JpZXNQb3N0c0ZpZWxkcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXRlZ29yaWVzUG9zdHNGaWVsZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLmZpZWxkdHlwZSA9PSBcImNhdGVnb3J5XCJcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiY2F0ZWdvcnlcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlPDqWxlY3Rpb25uZXogdW5lIGNhdMOpZ29yaWVcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNhdGVnb3J5XCIsIG5hbWU6IFwiY2F0ZWdvcnlcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQ2xpY2tlZEV2ZW50IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLml0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgIHsga2V5OiBpdGVtLmlkLCBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS5zbHVnIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5maWVsZHR5cGUgPT0gXCJwb3N0XCJcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwicG9zdFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiU8OpbGVjdGlvbm5leiB1biBhcnRpY2xlXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwb3N0XCIsIG5hbWU6IFwicG9zdFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25DbGlja2VkRXZlbnQgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgeyBrZXk6IGl0ZW0uaWQsIGRvbVByb3BzOiB7IHZhbHVlOiBpdGVtLnNsdWcgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udGl0bGUpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAob3B0aW9ucy5mdW5jdGlvbmFsID8gdGhpcy5wYXJlbnQgOiB0aGlzKS4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290XG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb25hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iXSwibmFtZXMiOlsiVnVlIiwiQ2F0ZWdvcmllc1Bvc3RzRmllbGRzIiwiZWwiLCJkZWxpbWl0ZXJzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ0eXBlIiwic2VsZWN0RmllbGRWYWx1ZSIsInVwZGF0ZWRGaWxlIiwidXBkYXRlZCIsIm1vdW50ZWQiLCIkZWwiLCJkYXRhc2V0IiwibGlua3VybCIsIm1ldGhvZHMiLCJvbkdldExpbmtUeXBlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2xpY2tDaGlsZCIsInVwZGF0ZUZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsImZpbGVzIiwib25sb2FkIiwiZSIsInJlc3VsdCJdLCJzb3VyY2VSb290IjoiIn0=