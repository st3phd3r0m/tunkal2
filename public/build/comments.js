"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["comments"],{

/***/ "./assets/comments.js":
/*!****************************!*\
  !*** ./assets/comments.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home_comments_commentList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/comments/commentList.js */ "./assets/components/home/comments/commentList.js");
/* harmony import */ var _components_home_comments_commentForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/comments/commentForm.js */ "./assets/components/home/comments/commentForm.js");



/***/ }),

/***/ "./assets/components/home/comments/commentForm.js":
/*!********************************************************!*\
  !*** ./assets/components/home/comments/commentForm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");




















function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


new vue__WEBPACK_IMPORTED_MODULE_19__.default({
  el: 'form',
  delimiters: ['${', '}$'],
  data: {
    _token: '',
    formConstraints: null,
    disabled: true,
    errormessages: {
      commentsPseudo: '',
      commentsContent: '',
      commentsNosiar: ''
    },
    messageapi: '',
    classCommentSent: ''
  },
  mounted: function mounted() {
    var form = this.$el;
    var formData = new FormData(form);
    this._token = formData.get('comments[_token]');
    var formConstraints = [];

    var _iterator = _createForOfIteratorHelper(formData.keys()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        var el = document.querySelector('[name="' + key + '"]');

        if (null != el.dataset.constraints) {
          formConstraints[key] = JSON.parse(el.dataset.constraints);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.formConstraints = formConstraints;
  },
  methods: {
    onCheckFields: function onCheckFields() {
      var form = this.$el;
      var formData = new FormData(form);

      for (var fieldName in this.formConstraints) {
        this.errormessages[this.normalizeFieldName(fieldName)] = '';

        var _iterator2 = _createForOfIteratorHelper(this.formConstraints[fieldName]),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var constraint = _step2.value;
            this.errormessages[this.normalizeFieldName(fieldName)] += this[constraint.name + 'Check'](constraint.constraintWidget, formData.get(fieldName));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      this.disabled = this.toggleButton();
    },
    normalizeFieldName: function normalizeFieldName(fieldName) {
      fieldName = fieldName.replace("]", '');
      fieldName = fieldName.split('[');
      fieldName[1] = fieldName[1].charAt(0).toUpperCase() + fieldName[1].slice(1);
      fieldName = fieldName.join('');
      return fieldName;
    },
    notBlankCheck: function notBlankCheck(constraintWidget, value) {
      if (value == '') {
        return constraintWidget.message + '; ';
      }

      return '';
    },
    lengthCheck: function lengthCheck(constraintWidget, value) {
      if (value.length < constraintWidget.min) {
        return constraintWidget.minMessage.replace('{{ limit }}', constraintWidget.min) + '; ';
      }

      if (value.length > constraintWidget.max) {
        return constraintWidget.minMessage.replace('{{ limit }}', constraintWidget.max) + '; ';
      }

      return '';
    },
    regexCheck: function regexCheck(constraintWidget, value) {
      var regex = new RegExp(constraintWidget.pattern.slice(1, -1));

      if (!regex.test(value)) {
        return constraintWidget.message + '; ';
      }

      return '';
    },
    blankCheck: function blankCheck(constraintWidget, value) {
      if (value != '') {
        return constraintWidget.message + '; ';
      }

      return '';
    },
    toggleButton: function toggleButton() {
      for (var fieldName in this.errormessages) {
        if (this.errormessages[fieldName] != '') {
          return true;
        }
      }

      return false;
    },
    onSendComment: function onSendComment(event) {
      event.preventDefault();
      this.onAjaxCall();
    },
    onAjaxCall: function onAjaxCall() {
      var _this = this;

      var form = this.$el;
      var slug = form.dataset.slug;
      var formData = new FormData(form);
      var dataToSend = {};

      var _iterator3 = _createForOfIteratorHelper(formData.entries()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var field = _step3.value;
          dataToSend[field[0].replace('comments[', '').replace(']', '')] = field[1];
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      fetch('/api/comments/post/' + slug, {
        method: 'POST',
        mode: 'same-origin',
        headers: {
          "Authorization": this._token,
          "Content-type": 'application/json',
          "X-Requested-With": 'XMLHttpRequest'
        },
        body: JSON.stringify(dataToSend)
      }).then(function (response) {
        if (response.status == 201) {
          form.reset();
          _this.messageapi = 'Commentaire enregistré';
          _this.classCommentSent = "success";
        } else {
          _this.messageapi = 'Un problème est surnenu. Le commentaire n\'a pas été enregistré.';
          _this.classCommentSent = "form-error-message";
        }

        _this.disabled = true;
        setTimeout(_this.resetApiMessage, 2000);
      });
    },
    resetApiMessage: function resetApiMessage() {
      this.messageapi = '';
      this.classCommentSent = '';
    }
  }
});

/***/ }),

/***/ "./assets/components/home/comments/commentList.js":
/*!********************************************************!*\
  !*** ./assets/components/home/comments/commentList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _CommentList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentList.vue */ "./assets/components/home/comments/CommentList.vue");
/* harmony import */ var _CommentButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentButton.vue */ "./assets/components/home/comments/CommentButton.vue");







new vue__WEBPACK_IMPORTED_MODULE_6__.default({
  el: '#commentsList',
  delimiters: ['${', '}$'],
  components: {
    CommentList: _CommentList_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    CommentButton: _CommentButton_vue__WEBPACK_IMPORTED_MODULE_5__.default
  },
  data: {
    slug: '',
    numberofpages: null,
    page: 0,
    data: [],
    showlist: true
  },
  mounted: function mounted() {
    this.slug = this.$el.dataset.slug;
    this.numberofpages = Number(this.$el.dataset.numberofpages);
  },
  methods: {
    onCallComments: function onCallComments() {
      var _this = this;

      if (this.data.length > 0 && !this.showlist) {
        this.showlist = true;
      }

      if (this.page < this.numberofpages && this.showlist) {
        this.page++;
        fetch('/api/comments/post/' + this.slug + '?page=' + this.page, {
          method: 'GET',
          mode: 'same-origin',
          headers: {
            "X-Requested-With": 'XMLHttpRequest'
          }
        }).then(function (response) {
          return response.text();
        }).then(function (value) {
          var object = JSON.parse(value);
          _this.data = _this.data.concat(object.data);
        });
      }
    },
    zeroPage: function zeroPage() {
      this.showlist = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);

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
  name: "comment-button",
  delimiters: ["${", "}$"],
  props: {
    numberofpages: Number,
    page: Number,
    showlist: Boolean
  },
  methods: {
    onClickCommentButton: function onClickCommentButton() {
      this.$emit('clicked');
    },
    onClickZero: function onClickZero() {
      this.$emit('clickedzero');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentList.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "comment-list",
  delimiters: ["${", "}$"],
  props: {
    comments: Array,
    showlist: Boolean
  }
});

/***/ }),

/***/ "./assets/components/home/comments/CommentButton.vue":
/*!***********************************************************!*\
  !*** ./assets/components/home/comments/CommentButton.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentButton_vue_vue_type_template_id_7790f21b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentButton.vue?vue&type=template&id=7790f21b& */ "./assets/components/home/comments/CommentButton.vue?vue&type=template&id=7790f21b&");
/* harmony import */ var _CommentButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentButton.vue?vue&type=script&lang=js& */ "./assets/components/home/comments/CommentButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CommentButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CommentButton_vue_vue_type_template_id_7790f21b___WEBPACK_IMPORTED_MODULE_0__.render,
  _CommentButton_vue_vue_type_template_id_7790f21b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/home/comments/CommentButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/home/comments/CommentList.vue":
/*!*********************************************************!*\
  !*** ./assets/components/home/comments/CommentList.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CommentList_vue_vue_type_template_id_5f2905c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentList.vue?vue&type=template&id=5f2905c7& */ "./assets/components/home/comments/CommentList.vue?vue&type=template&id=5f2905c7&");
/* harmony import */ var _CommentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentList.vue?vue&type=script&lang=js& */ "./assets/components/home/comments/CommentList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CommentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CommentList_vue_vue_type_template_id_5f2905c7___WEBPACK_IMPORTED_MODULE_0__.render,
  _CommentList_vue_vue_type_template_id_5f2905c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/home/comments/CommentList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/home/comments/CommentButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./assets/components/home/comments/CommentButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/home/comments/CommentList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./assets/components/home/comments/CommentList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/home/comments/CommentButton.vue?vue&type=template&id=7790f21b&":
/*!******************************************************************************************!*\
  !*** ./assets/components/home/comments/CommentButton.vue?vue&type=template&id=7790f21b& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentButton_vue_vue_type_template_id_7790f21b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentButton_vue_vue_type_template_id_7790f21b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentButton_vue_vue_type_template_id_7790f21b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentButton.vue?vue&type=template&id=7790f21b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentButton.vue?vue&type=template&id=7790f21b&");


/***/ }),

/***/ "./assets/components/home/comments/CommentList.vue?vue&type=template&id=5f2905c7&":
/*!****************************************************************************************!*\
  !*** ./assets/components/home/comments/CommentList.vue?vue&type=template&id=5f2905c7& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentList_vue_vue_type_template_id_5f2905c7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentList_vue_vue_type_template_id_5f2905c7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentList_vue_vue_type_template_id_5f2905c7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CommentList.vue?vue&type=template&id=5f2905c7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentList.vue?vue&type=template&id=5f2905c7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentButton.vue?vue&type=template&id=7790f21b&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentButton.vue?vue&type=template&id=7790f21b& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _vm.numberofpages == 0
      ? _c("p", [_vm._v("0 commentaire pour cet article.")])
      : _vm._e(),
    _vm._v(" "),
    (_vm.numberofpages > 0 && _vm.page == 0) || !_vm.showlist
      ? _c("p", { on: { click: _vm.onClickCommentButton } }, [
          _vm._v("Voir les commentaires "),
          _c("i", { staticClass: "fas fa-caret-down" })
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.numberofpages > 0 && _vm.page < _vm.numberofpages && _vm.page > 0
      ? _c("p", { on: { click: _vm.onClickCommentButton } }, [
          _vm._v("Voir les autres commentaires "),
          _c("i", { staticClass: "fas fa-caret-down" })
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.numberofpages > 0 && _vm.page == _vm.numberofpages && _vm.showlist
      ? _c("p", { on: { click: _vm.onClickZero } }, [
          _vm._v("Fermer les commentaires "),
          _c("i", { staticClass: "fas fa-caret-up" })
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentList.vue?vue&type=template&id=5f2905c7&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/home/comments/CommentList.vue?vue&type=template&id=5f2905c7& ***!
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
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showlist,
          expression: "showlist"
        }
      ]
    },
    _vm._l(_vm.comments, function(comment) {
      return _c("div", { key: comment.id, staticClass: "comment" }, [
        _c("p", [
          _c("span", { staticClass: "pseudo" }, [
            _vm._v(_vm._s(comment.pseudo))
          ]),
          _vm._v(", le "),
          _c("span", { staticClass: "sent_at" }, [
            _vm._v(_vm._s(comment.created_at))
          ]),
          _vm._v(" :")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "comment_content" }, [
          _vm._v(_vm._s(comment.content))
        ])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_html_js","vendors-node_modules_core-js_internals_check-correctness-of-iteration_js-node_modules_core-js-13ab7c","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-3637c8","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_core-js_modules_es_string_replace_js","vendors-node_modules_core-js_modules_es_array_join_js-node_modules_core-js_modules_es_regexp_-1a21e5","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_numbe-cc4248"], () => (__webpack_exec__("./assets/comments.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbW1lbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2hvbWUvY29tbWVudHMvY29tbWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaG9tZS9jb21tZW50cy9jb21tZW50TGlzdC5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvaG9tZS9jb21tZW50cy9Db21tZW50QnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2NvbXBvbmVudHMvaG9tZS9jb21tZW50cy9Db21tZW50TGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaG9tZS9jb21tZW50cy9Db21tZW50QnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ob21lL2NvbW1lbnRzL0NvbW1lbnRMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ob21lL2NvbW1lbnRzL0NvbW1lbnRCdXR0b24udnVlPzRiMTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaG9tZS9jb21tZW50cy9Db21tZW50TGlzdC52dWU/YWNhMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ob21lL2NvbW1lbnRzL0NvbW1lbnRCdXR0b24udnVlPzZlZDciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvaG9tZS9jb21tZW50cy9Db21tZW50TGlzdC52dWU/YTI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY29tcG9uZW50cy9ob21lL2NvbW1lbnRzL2NvbW1lbnRMaXN0LmpzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvaG9tZS9jb21tZW50cy9jb21tZW50Rm9ybS5qcyciLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbm5ldyBWdWUoe1xuICBlbDogJ2Zvcm0nLFxuICBkZWxpbWl0ZXJzOiBbJyR7JywgJ30kJ10sXG4gIGRhdGE6IHtcbiAgICBfdG9rZW46ICcnLFxuICAgIGZvcm1Db25zdHJhaW50czogbnVsbCxcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICBlcnJvcm1lc3NhZ2VzOiB7XG4gICAgICBjb21tZW50c1BzZXVkbzogJycsXG4gICAgICBjb21tZW50c0NvbnRlbnQ6ICcnLFxuICAgICAgY29tbWVudHNOb3NpYXI6ICcnXG4gICAgfSxcbiAgICBtZXNzYWdlYXBpOicnLFxuICAgIGNsYXNzQ29tbWVudFNlbnQ6ICcnXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgbGV0IGZvcm0gPSB0aGlzLiRlbDtcbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgdGhpcy5fdG9rZW4gPSBmb3JtRGF0YS5nZXQoJ2NvbW1lbnRzW190b2tlbl0nKTtcblxuICAgIGxldCBmb3JtQ29uc3RyYWludHMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgb2YgZm9ybURhdGEua2V5cygpKSB7XG4gICAgICBsZXQgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIicgKyBrZXkgKyAnXCJdJyk7XG4gICAgICBpZiAobnVsbCAhPSBlbC5kYXRhc2V0LmNvbnN0cmFpbnRzKSB7XG4gICAgICAgIGZvcm1Db25zdHJhaW50c1trZXldID0gSlNPTi5wYXJzZShlbC5kYXRhc2V0LmNvbnN0cmFpbnRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5mb3JtQ29uc3RyYWludHMgPSBmb3JtQ29uc3RyYWludHM7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNoZWNrRmllbGRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZm9ybSA9IHRoaXMuJGVsO1xuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgZm9yIChsZXQgZmllbGROYW1lIGluIHRoaXMuZm9ybUNvbnN0cmFpbnRzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JtZXNzYWdlc1t0aGlzLm5vcm1hbGl6ZUZpZWxkTmFtZShmaWVsZE5hbWUpXSA9ICcnO1xuICAgICAgICBmb3IgKGxldCBjb25zdHJhaW50IG9mIHRoaXMuZm9ybUNvbnN0cmFpbnRzW2ZpZWxkTmFtZV0pIHtcbiAgICAgICAgICB0aGlzLmVycm9ybWVzc2FnZXNbdGhpcy5ub3JtYWxpemVGaWVsZE5hbWUoZmllbGROYW1lKV0gKz0gdGhpc1tjb25zdHJhaW50Lm5hbWUgKyAnQ2hlY2snXShjb25zdHJhaW50LmNvbnN0cmFpbnRXaWRnZXQsIGZvcm1EYXRhLmdldChmaWVsZE5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMudG9nZ2xlQnV0dG9uKCk7XG4gICAgfSxcbiAgICBub3JtYWxpemVGaWVsZE5hbWU6IGZ1bmN0aW9uIChmaWVsZE5hbWUpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS5yZXBsYWNlKFwiXVwiLCAnJyk7XG4gICAgICBmaWVsZE5hbWUgPSBmaWVsZE5hbWUuc3BsaXQoJ1snKTtcbiAgICAgIGZpZWxkTmFtZVsxXSA9IGZpZWxkTmFtZVsxXS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGZpZWxkTmFtZVsxXS5zbGljZSgxKTtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS5qb2luKCcnKTtcbiAgICAgIHJldHVybiBmaWVsZE5hbWU7XG4gICAgfSxcbiAgICBub3RCbGFua0NoZWNrOiBmdW5jdGlvbiAoY29uc3RyYWludFdpZGdldCwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PSAnJykge1xuICAgICAgICByZXR1cm4gY29uc3RyYWludFdpZGdldC5tZXNzYWdlICsgJzsgJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuICAgIGxlbmd0aENoZWNrOiBmdW5jdGlvbiAoY29uc3RyYWludFdpZGdldCwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCBjb25zdHJhaW50V2lkZ2V0Lm1pbikge1xuICAgICAgICByZXR1cm4gY29uc3RyYWludFdpZGdldC5taW5NZXNzYWdlLnJlcGxhY2UoJ3t7IGxpbWl0IH19JywgY29uc3RyYWludFdpZGdldC5taW4pICsgJzsgJztcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiBjb25zdHJhaW50V2lkZ2V0Lm1heCkge1xuICAgICAgICByZXR1cm4gY29uc3RyYWludFdpZGdldC5taW5NZXNzYWdlLnJlcGxhY2UoJ3t7IGxpbWl0IH19JywgY29uc3RyYWludFdpZGdldC5tYXgpICsgJzsgJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuICAgIHJlZ2V4Q2hlY2s6IGZ1bmN0aW9uIChjb25zdHJhaW50V2lkZ2V0LCB2YWx1ZSkge1xuICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChjb25zdHJhaW50V2lkZ2V0LnBhdHRlcm4uc2xpY2UoMSwgLTEpKTtcbiAgICAgIGlmICghcmVnZXgudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnRXaWRnZXQubWVzc2FnZSArICc7ICc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSxcbiAgICBibGFua0NoZWNrOiBmdW5jdGlvbiAoY29uc3RyYWludFdpZGdldCwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSAnJykge1xuICAgICAgICByZXR1cm4gY29uc3RyYWludFdpZGdldC5tZXNzYWdlICsgJzsgJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuICAgIHRvZ2dsZUJ1dHRvbjogZnVuY3Rpb24gKCkge1xuICAgICAgZm9yIChsZXQgZmllbGROYW1lIGluIHRoaXMuZXJyb3JtZXNzYWdlcykge1xuICAgICAgICBpZiAodGhpcy5lcnJvcm1lc3NhZ2VzW2ZpZWxkTmFtZV0gIT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgb25TZW5kQ29tbWVudDogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMub25BamF4Q2FsbCgpO1xuICAgIH0sXG4gICAgb25BamF4Q2FsbDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGZvcm0gPSB0aGlzLiRlbDtcbiAgICAgIGxldCBzbHVnID0gZm9ybS5kYXRhc2V0LnNsdWc7XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG5cbiAgICAgIGxldCBkYXRhVG9TZW5kID0ge307XG4gICAgICBmb3IgKGxldCBmaWVsZCBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcbiAgICAgICAgZGF0YVRvU2VuZFtmaWVsZFswXS5yZXBsYWNlKCdjb21tZW50c1snLCAnJykucmVwbGFjZSgnXScsICcnKV0gPSBmaWVsZFsxXTtcbiAgICAgIH1cblxuICAgICAgZmV0Y2goXG4gICAgICAgICcvYXBpL2NvbW1lbnRzL3Bvc3QvJyArIHNsdWcsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiB0aGlzLl90b2tlbixcbiAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhVG9TZW5kKVxuICAgICAgICB9XG4gICAgICApLnRoZW4oXG4gICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMSkge1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlYXBpID0gJ0NvbW1lbnRhaXJlIGVucmVnaXN0csOpJztcbiAgICAgICAgICAgIHRoaXMuY2xhc3NDb21tZW50U2VudCA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VhcGkgPSAnVW4gcHJvYmzDqG1lIGVzdCBzdXJuZW51LiBMZSBjb21tZW50YWlyZSBuXFwnYSBwYXMgw6l0w6kgZW5yZWdpc3Ryw6kuJztcbiAgICAgICAgICAgIHRoaXMuY2xhc3NDb21tZW50U2VudCA9IFwiZm9ybS1lcnJvci1tZXNzYWdlXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICB0aGlzLnJlc2V0QXBpTWVzc2FnZVxuICAgICAgICAgICwgMjAwMCk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0sXG4gICAgcmVzZXRBcGlNZXNzYWdlOiBmdW5jdGlvbigpe1xuICAgICAgdGhpcy5tZXNzYWdlYXBpID0gJyc7XG4gICAgICB0aGlzLmNsYXNzQ29tbWVudFNlbnQgPSAnJztcbiAgICB9XG4gIH0sXG59KVxuXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi9Db21tZW50TGlzdC52dWUnO1xuaW1wb3J0IENvbW1lbnRCdXR0b24gZnJvbSAnLi9Db21tZW50QnV0dG9uLnZ1ZSdcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2NvbW1lbnRzTGlzdCcsXG4gIGRlbGltaXRlcnM6IFsnJHsnLCAnfSQnXSxcbiAgY29tcG9uZW50czoge1xuICAgIENvbW1lbnRMaXN0LFxuICAgIENvbW1lbnRCdXR0b25cbiAgfSxcbiAgZGF0YToge1xuICAgIHNsdWc6ICcnLFxuICAgIG51bWJlcm9mcGFnZXM6IG51bGwsXG4gICAgcGFnZTogMCxcbiAgICBkYXRhOiBbXSxcbiAgICBzaG93bGlzdDogdHJ1ZVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuc2x1ZyA9IHRoaXMuJGVsLmRhdGFzZXQuc2x1ZztcbiAgICB0aGlzLm51bWJlcm9mcGFnZXMgPSBOdW1iZXIodGhpcy4kZWwuZGF0YXNldC5udW1iZXJvZnBhZ2VzKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2FsbENvbW1lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgXG4gICAgICAgIGlmKHRoaXMuZGF0YS5sZW5ndGg+MCAmJiAhdGhpcy5zaG93bGlzdCl7XG4gICAgICAgICAgdGhpcy5zaG93bGlzdD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnBhZ2U8IHRoaXMubnVtYmVyb2ZwYWdlcyAmJiB0aGlzLnNob3dsaXN0KXtcbiAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICAgICAgJy9hcGkvY29tbWVudHMvcG9zdC8nICsgdGhpcy5zbHVnICsgJz9wYWdlPScgKyB0aGlzLnBhZ2UsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKS50aGVuKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKVxuICAgICAgICAgICAgKS50aGVuKFxuICAgICAgICAgICAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuY29uY2F0KG9iamVjdC5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB6ZXJvUGFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNob3dsaXN0PWZhbHNlO1xuICAgIH1cbiAgfSxcbn0pXG5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cCB2LWlmPVwibnVtYmVyb2ZwYWdlcz09MFwiPjAgY29tbWVudGFpcmUgcG91ciBjZXQgYXJ0aWNsZS48L3A+XG4gICAgPHAgdi1pZj1cIihudW1iZXJvZnBhZ2VzPjAgJiYgcGFnZT09MCkgfHwgIXNob3dsaXN0XCIgdi1vbjpjbGljaz1cIm9uQ2xpY2tDb21tZW50QnV0dG9uXCI+Vm9pciBsZXMgY29tbWVudGFpcmVzIDxpIGNsYXNzPVwiZmFzIGZhLWNhcmV0LWRvd25cIj48L2k+PC9wPlxuICAgIDxwIHYtaWY9XCJudW1iZXJvZnBhZ2VzPjAgJiYgcGFnZTxudW1iZXJvZnBhZ2VzICYmIHBhZ2U+MFwiIHYtb246Y2xpY2s9XCJvbkNsaWNrQ29tbWVudEJ1dHRvblwiPlZvaXIgbGVzIGF1dHJlcyBjb21tZW50YWlyZXMgPGkgY2xhc3M9XCJmYXMgZmEtY2FyZXQtZG93blwiPjwvaT48L3A+XG4gICAgPHAgdi1pZj1cIihudW1iZXJvZnBhZ2VzPjAgJiYgcGFnZT09bnVtYmVyb2ZwYWdlcykgJiYgc2hvd2xpc3RcIiB2LW9uOmNsaWNrPVwib25DbGlja1plcm9cIj5GZXJtZXIgbGVzIGNvbW1lbnRhaXJlcyA8aSBjbGFzcz1cImZhcyBmYS1jYXJldC11cFwiPjwvaT48L3A+ICAgIFxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiY29tbWVudC1idXR0b25cIixcbiAgZGVsaW1pdGVyczogW1wiJHtcIiwgXCJ9JFwiXSxcbiAgcHJvcHM6IHtcbiAgICBudW1iZXJvZnBhZ2VzOiBOdW1iZXIsXG4gICAgcGFnZTogTnVtYmVyLFxuICAgIHNob3dsaXN0OiBCb29sZWFuXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkNsaWNrQ29tbWVudEJ1dHRvbjogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGlja2VkJyk7XG4gICAgfSxcbiAgICBvbkNsaWNrWmVybzogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbGlja2VkemVybycpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgdi1zaG93PVwic2hvd2xpc3RcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiIHYtZm9yPVwiY29tbWVudCBpbiBjb21tZW50c1wiIDprZXk9XCJjb21tZW50LmlkXCI+XG4gICAgICA8cD48c3BhbiBjbGFzcz1cInBzZXVkb1wiPnt7IGNvbW1lbnQucHNldWRvIH19PC9zcGFuPiwgbGUgPHNwYW4gY2xhc3M9XCJzZW50X2F0XCI+e3sgY29tbWVudC5jcmVhdGVkX2F0IH19PC9zcGFuPiA6PC9wPlxuICAgICAgPHAgY2xhc3M9XCJjb21tZW50X2NvbnRlbnRcIj57eyBjb21tZW50LmNvbnRlbnQgfX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJjb21tZW50LWxpc3RcIixcbiAgZGVsaW1pdGVyczogW1wiJHtcIiwgXCJ9JFwiXSxcbiAgcHJvcHM6IHtcbiAgICBjb21tZW50czogQXJyYXksXG4gICAgc2hvd2xpc3Q6IEJvb2xlYW5cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db21tZW50QnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzkwZjIxYiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db21tZW50QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29tbWVudEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3N0M3BoL3Byb2pldHNTeW1mb255L3R1bmthbDIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzc5MGYyMWInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzc5MGYyMWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzc5MGYyMWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbW1lbnRCdXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3OTBmMjFiJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc3OTBmMjFiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvY29tcG9uZW50cy9ob21lL2NvbW1lbnRzL0NvbW1lbnRCdXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db21tZW50TGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYyOTA1YzcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29tbWVudExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db21tZW50TGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3N0M3BoL3Byb2pldHNTeW1mb255L3R1bmthbDIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWYyOTA1YzcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWYyOTA1YzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWYyOTA1YzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbW1lbnRMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjI5MDVjNyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZjI5MDVjNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvaG9tZS9jb21tZW50cy9Db21tZW50TGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tbWVudEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tZW50QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tZW50TGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21tZW50TGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0ubnVtYmVyb2ZwYWdlcyA9PSAwXG4gICAgICA/IF9jKFwicFwiLCBbX3ZtLl92KFwiMCBjb21tZW50YWlyZSBwb3VyIGNldCBhcnRpY2xlLlwiKV0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgKF92bS5udW1iZXJvZnBhZ2VzID4gMCAmJiBfdm0ucGFnZSA9PSAwKSB8fCAhX3ZtLnNob3dsaXN0XG4gICAgICA/IF9jKFwicFwiLCB7IG9uOiB7IGNsaWNrOiBfdm0ub25DbGlja0NvbW1lbnRCdXR0b24gfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiVm9pciBsZXMgY29tbWVudGFpcmVzIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2FyZXQtZG93blwiIH0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLm51bWJlcm9mcGFnZXMgPiAwICYmIF92bS5wYWdlIDwgX3ZtLm51bWJlcm9mcGFnZXMgJiYgX3ZtLnBhZ2UgPiAwXG4gICAgICA/IF9jKFwicFwiLCB7IG9uOiB7IGNsaWNrOiBfdm0ub25DbGlja0NvbW1lbnRCdXR0b24gfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiVm9pciBsZXMgYXV0cmVzIGNvbW1lbnRhaXJlcyBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNhcmV0LWRvd25cIiB9KVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5udW1iZXJvZnBhZ2VzID4gMCAmJiBfdm0ucGFnZSA9PSBfdm0ubnVtYmVyb2ZwYWdlcyAmJiBfdm0uc2hvd2xpc3RcbiAgICAgID8gX2MoXCJwXCIsIHsgb246IHsgY2xpY2s6IF92bS5vbkNsaWNrWmVybyB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJGZXJtZXIgbGVzIGNvbW1lbnRhaXJlcyBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNhcmV0LXVwXCIgfSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dsaXN0LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd2xpc3RcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBfdm0uX2woX3ZtLmNvbW1lbnRzLCBmdW5jdGlvbihjb21tZW50KSB7XG4gICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGNvbW1lbnQuaWQsIHN0YXRpY0NsYXNzOiBcImNvbW1lbnRcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicHNldWRvXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhjb21tZW50LnBzZXVkbykpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiLCBsZSBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2VudF9hdFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoY29tbWVudC5jcmVhdGVkX2F0KSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgOlwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tbWVudF9jb250ZW50XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoY29tbWVudC5jb250ZW50KSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbIlZ1ZSIsImVsIiwiZGVsaW1pdGVycyIsImRhdGEiLCJfdG9rZW4iLCJmb3JtQ29uc3RyYWludHMiLCJkaXNhYmxlZCIsImVycm9ybWVzc2FnZXMiLCJjb21tZW50c1BzZXVkbyIsImNvbW1lbnRzQ29udGVudCIsImNvbW1lbnRzTm9zaWFyIiwibWVzc2FnZWFwaSIsImNsYXNzQ29tbWVudFNlbnQiLCJtb3VudGVkIiwiZm9ybSIsIiRlbCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJnZXQiLCJrZXlzIiwia2V5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsImNvbnN0cmFpbnRzIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kcyIsIm9uQ2hlY2tGaWVsZHMiLCJmaWVsZE5hbWUiLCJub3JtYWxpemVGaWVsZE5hbWUiLCJjb25zdHJhaW50IiwibmFtZSIsImNvbnN0cmFpbnRXaWRnZXQiLCJ0b2dnbGVCdXR0b24iLCJyZXBsYWNlIiwic3BsaXQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIm5vdEJsYW5rQ2hlY2siLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJsZW5ndGhDaGVjayIsImxlbmd0aCIsIm1pbiIsIm1pbk1lc3NhZ2UiLCJtYXgiLCJyZWdleENoZWNrIiwicmVnZXgiLCJSZWdFeHAiLCJwYXR0ZXJuIiwidGVzdCIsImJsYW5rQ2hlY2siLCJvblNlbmRDb21tZW50IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQWpheENhbGwiLCJzbHVnIiwiZGF0YVRvU2VuZCIsImVudHJpZXMiLCJmaWVsZCIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVzZXQiLCJzZXRUaW1lb3V0IiwicmVzZXRBcGlNZXNzYWdlIiwiQ29tbWVudExpc3QiLCJDb21tZW50QnV0dG9uIiwiY29tcG9uZW50cyIsIm51bWJlcm9mcGFnZXMiLCJwYWdlIiwic2hvd2xpc3QiLCJOdW1iZXIiLCJvbkNhbGxDb21tZW50cyIsInRleHQiLCJvYmplY3QiLCJjb25jYXQiLCJ6ZXJvUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=