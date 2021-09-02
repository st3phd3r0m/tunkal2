"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["courriels"],{

/***/ "./assets/components/home/courriels/courrielForm.js":
/*!**********************************************************!*\
  !*** ./assets/components/home/courriels/courrielForm.js ***!
  \**********************************************************/
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
      courrielsName: '',
      courrielsMail_from: '',
      courrielsSubject: '',
      courrielsMessage: '',
      courrielsNosiar: ''
    },
    messageapi: '',
    classCommentSent: ''
  },
  mounted: function mounted() {
    var form = this.$el;
    var formData = new FormData(form);
    this._token = formData.get('courriels[_token]');
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
    emailCheck: function emailCheck(constraintWidget, value) {
      var regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

      if (!regex.test(value)) {
        return constraintWidget.message + '; ';
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
      var formData = new FormData(form);
      var dataToSend = {};

      var _iterator3 = _createForOfIteratorHelper(formData.entries()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var field = _step3.value;
          dataToSend[field[0].replace('courriels[', '').replace(']', '')] = field[1];
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      fetch('/api/courriels/', {
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
          _this.messageapi = 'Message enregistré';
          _this.classCommentSent = "success";
        } else {
          _this.messageapi = 'Un problème est surnenu. Le message n\'a pas été enregistré.';
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

/***/ "./assets/courriels.js":
/*!*****************************!*\
  !*** ./assets/courriels.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home_courriels_courrielForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/courriels/courrielForm.js */ "./assets/components/home/courriels/courrielForm.js");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_html_js","vendors-node_modules_core-js_internals_check-correctness-of-iteration_js-node_modules_core-js-13ab7c","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-3637c8","vendors-node_modules_core-js_modules_es_promise_js","vendors-node_modules_core-js_modules_es_string_replace_js","vendors-node_modules_core-js_modules_es_array_join_js-node_modules_core-js_modules_es_regexp_-1a21e5"], () => (__webpack_exec__("./assets/courriels.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291cnJpZWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBSUEseUNBQUosQ0FBUTtBQUNOQyxFQUFBQSxFQUFFLEVBQUUsTUFERTtBQUVOQyxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUZOO0FBR05DLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxNQUFNLEVBQUUsRUFESjtBQUVKQyxJQUFBQSxlQUFlLEVBQUUsSUFGYjtBQUdKQyxJQUFBQSxRQUFRLEVBQUUsSUFITjtBQUlKQyxJQUFBQSxhQUFhLEVBQUU7QUFDYkMsTUFBQUEsYUFBYSxFQUFFLEVBREY7QUFFYkMsTUFBQUEsa0JBQWtCLEVBQUUsRUFGUDtBQUdiQyxNQUFBQSxnQkFBZ0IsRUFBRSxFQUhMO0FBSWJDLE1BQUFBLGdCQUFnQixFQUFFLEVBSkw7QUFLYkMsTUFBQUEsZUFBZSxFQUFFO0FBTEosS0FKWDtBQVdKQyxJQUFBQSxVQUFVLEVBQUMsRUFYUDtBQVlKQyxJQUFBQSxnQkFBZ0IsRUFBRTtBQVpkLEdBSEE7QUFpQk5DLEVBQUFBLE9BakJNLHFCQWlCSTtBQUNSLFFBQUlDLElBQUksR0FBRyxLQUFLQyxHQUFoQjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxJQUFJQyxRQUFKLENBQWFILElBQWIsQ0FBZjtBQUNBLFNBQUtaLE1BQUwsR0FBY2MsUUFBUSxDQUFDRSxHQUFULENBQWEsbUJBQWIsQ0FBZDtBQUVBLFFBQUlmLGVBQWUsR0FBRyxFQUF0Qjs7QUFMUSwrQ0FNUWEsUUFBUSxDQUFDRyxJQUFULEVBTlI7QUFBQTs7QUFBQTtBQU1SLDBEQUFpQztBQUFBLFlBQXhCQyxHQUF3QjtBQUMvQixZQUFJckIsRUFBRSxHQUFHc0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQVlGLEdBQVosR0FBa0IsSUFBekMsQ0FBVDs7QUFDQSxZQUFJLFFBQVFyQixFQUFFLENBQUN3QixPQUFILENBQVdDLFdBQXZCLEVBQW9DO0FBQ2xDckIsVUFBQUEsZUFBZSxDQUFDaUIsR0FBRCxDQUFmLEdBQXVCSyxJQUFJLENBQUNDLEtBQUwsQ0FBVzNCLEVBQUUsQ0FBQ3dCLE9BQUgsQ0FBV0MsV0FBdEIsQ0FBdkI7QUFDRDtBQUNGO0FBWE87QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFZUixTQUFLckIsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRCxHQTlCSztBQStCTndCLEVBQUFBLE9BQU8sRUFBRTtBQUNQQyxJQUFBQSxhQUFhLEVBQUUseUJBQVk7QUFDekIsVUFBSWQsSUFBSSxHQUFHLEtBQUtDLEdBQWhCO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLElBQUlDLFFBQUosQ0FBYUgsSUFBYixDQUFmOztBQUNBLFdBQUssSUFBSWUsU0FBVCxJQUFzQixLQUFLMUIsZUFBM0IsRUFBNEM7QUFDMUMsYUFBS0UsYUFBTCxDQUFtQixLQUFLeUIsa0JBQUwsQ0FBd0JELFNBQXhCLENBQW5CLElBQXlELEVBQXpEOztBQUQwQyxvREFFbkIsS0FBSzFCLGVBQUwsQ0FBcUIwQixTQUFyQixDQUZtQjtBQUFBOztBQUFBO0FBRTFDLGlFQUF3RDtBQUFBLGdCQUEvQ0UsVUFBK0M7QUFDdEQsaUJBQUsxQixhQUFMLENBQW1CLEtBQUt5QixrQkFBTCxDQUF3QkQsU0FBeEIsQ0FBbkIsS0FBMEQsS0FBS0UsVUFBVSxDQUFDQyxJQUFYLEdBQWtCLE9BQXZCLEVBQWdDRCxVQUFVLENBQUNFLGdCQUEzQyxFQUE2RGpCLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhVyxTQUFiLENBQTdELENBQTFEO0FBQ0Q7QUFKeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUszQzs7QUFDRCxXQUFLekIsUUFBTCxHQUFnQixLQUFLOEIsWUFBTCxFQUFoQjtBQUNELEtBWE07QUFZUEosSUFBQUEsa0JBQWtCLEVBQUUsNEJBQVVELFNBQVYsRUFBcUI7QUFDdkNBLE1BQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDTSxPQUFWLENBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLENBQVo7QUFDQU4sTUFBQUEsU0FBUyxHQUFHQSxTQUFTLENBQUNPLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBWjtBQUNBUCxNQUFBQSxTQUFTLENBQUMsQ0FBRCxDQUFULEdBQWVBLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYVEsTUFBYixDQUFvQixDQUFwQixFQUF1QkMsV0FBdkIsS0FBdUNULFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYVUsS0FBYixDQUFtQixDQUFuQixDQUF0RDtBQUNBVixNQUFBQSxTQUFTLEdBQUdBLFNBQVMsQ0FBQ1csSUFBVixDQUFlLEVBQWYsQ0FBWjtBQUNBLGFBQU9YLFNBQVA7QUFDRCxLQWxCTTtBQW1CUFksSUFBQUEsYUFBYSxFQUFFLHVCQUFVUixnQkFBVixFQUE0QlMsS0FBNUIsRUFBbUM7QUFDaEQsVUFBSUEsS0FBSyxJQUFJLEVBQWIsRUFBaUI7QUFDZixlQUFPVCxnQkFBZ0IsQ0FBQ1UsT0FBakIsR0FBMkIsSUFBbEM7QUFDRDs7QUFDRCxhQUFPLEVBQVA7QUFDRCxLQXhCTTtBQXlCUEMsSUFBQUEsV0FBVyxFQUFFLHFCQUFVWCxnQkFBVixFQUE0QlMsS0FBNUIsRUFBbUM7QUFDOUMsVUFBSUEsS0FBSyxDQUFDRyxNQUFOLEdBQWVaLGdCQUFnQixDQUFDYSxHQUFwQyxFQUF5QztBQUN2QyxlQUFPYixnQkFBZ0IsQ0FBQ2MsVUFBakIsQ0FBNEJaLE9BQTVCLENBQW9DLGFBQXBDLEVBQW1ERixnQkFBZ0IsQ0FBQ2EsR0FBcEUsSUFBMkUsSUFBbEY7QUFDRDs7QUFDRCxVQUFJSixLQUFLLENBQUNHLE1BQU4sR0FBZVosZ0JBQWdCLENBQUNlLEdBQXBDLEVBQXlDO0FBQ3ZDLGVBQU9mLGdCQUFnQixDQUFDYyxVQUFqQixDQUE0QlosT0FBNUIsQ0FBb0MsYUFBcEMsRUFBbURGLGdCQUFnQixDQUFDZSxHQUFwRSxJQUEyRSxJQUFsRjtBQUNEOztBQUNELGFBQU8sRUFBUDtBQUNELEtBakNNO0FBa0NQQyxJQUFBQSxVQUFVLEVBQUUsb0JBQVVoQixnQkFBVixFQUE0QlMsS0FBNUIsRUFBbUM7QUFDN0MsVUFBSVEsS0FBSyxHQUFHLGdEQUFaOztBQUNBLFVBQUksQ0FBQ0EsS0FBSyxDQUFDQyxJQUFOLENBQVdULEtBQVgsQ0FBTCxFQUF3QjtBQUN0QixlQUFPVCxnQkFBZ0IsQ0FBQ1UsT0FBakIsR0FBMkIsSUFBbEM7QUFDRDs7QUFDRCxhQUFPLEVBQVA7QUFDRCxLQXhDTTtBQXlDUFMsSUFBQUEsVUFBVSxFQUFFLG9CQUFVbkIsZ0JBQVYsRUFBNEJTLEtBQTVCLEVBQW1DO0FBQzdDLFVBQUlRLEtBQUssR0FBRyxJQUFJRyxNQUFKLENBQVdwQixnQkFBZ0IsQ0FBQ3FCLE9BQWpCLENBQXlCZixLQUF6QixDQUErQixDQUEvQixFQUFrQyxDQUFDLENBQW5DLENBQVgsQ0FBWjs7QUFDQSxVQUFJLENBQUNXLEtBQUssQ0FBQ0MsSUFBTixDQUFXVCxLQUFYLENBQUwsRUFBd0I7QUFDdEIsZUFBT1QsZ0JBQWdCLENBQUNVLE9BQWpCLEdBQTJCLElBQWxDO0FBQ0Q7O0FBQ0QsYUFBTyxFQUFQO0FBQ0QsS0EvQ007QUFnRFBZLElBQUFBLFVBQVUsRUFBRSxvQkFBVXRCLGdCQUFWLEVBQTRCUyxLQUE1QixFQUFtQztBQUM3QyxVQUFJQSxLQUFLLElBQUksRUFBYixFQUFpQjtBQUNmLGVBQU9ULGdCQUFnQixDQUFDVSxPQUFqQixHQUEyQixJQUFsQztBQUNEOztBQUNELGFBQU8sRUFBUDtBQUNELEtBckRNO0FBc0RQVCxJQUFBQSxZQUFZLEVBQUUsd0JBQVk7QUFDeEIsV0FBSyxJQUFJTCxTQUFULElBQXNCLEtBQUt4QixhQUEzQixFQUEwQztBQUN4QyxZQUFJLEtBQUtBLGFBQUwsQ0FBbUJ3QixTQUFuQixLQUFpQyxFQUFyQyxFQUF5QztBQUN2QyxpQkFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxhQUFPLEtBQVA7QUFDRCxLQTdETTtBQThEUDJCLElBQUFBLGFBQWEsRUFBRSx1QkFBU0MsS0FBVCxFQUFlO0FBQzVCQSxNQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxXQUFLQyxVQUFMO0FBQ0QsS0FqRU07QUFrRVBBLElBQUFBLFVBQVUsRUFBRSxzQkFBWTtBQUFBOztBQUN0QixVQUFJN0MsSUFBSSxHQUFHLEtBQUtDLEdBQWhCO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLElBQUlDLFFBQUosQ0FBYUgsSUFBYixDQUFmO0FBRUEsVUFBSThDLFVBQVUsR0FBRyxFQUFqQjs7QUFKc0Isa0RBS0o1QyxRQUFRLENBQUM2QyxPQUFULEVBTEk7QUFBQTs7QUFBQTtBQUt0QiwrREFBc0M7QUFBQSxjQUE3QkMsS0FBNkI7QUFDcENGLFVBQUFBLFVBQVUsQ0FBQ0UsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTM0IsT0FBVCxDQUFpQixZQUFqQixFQUErQixFQUEvQixFQUFtQ0EsT0FBbkMsQ0FBMkMsR0FBM0MsRUFBZ0QsRUFBaEQsQ0FBRCxDQUFWLEdBQWtFMkIsS0FBSyxDQUFDLENBQUQsQ0FBdkU7QUFDRDtBQVBxQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVN0QkMsTUFBQUEsS0FBSyxDQUNILGlCQURHLEVBRUg7QUFDRUMsUUFBQUEsTUFBTSxFQUFFLE1BRFY7QUFFRUMsUUFBQUEsSUFBSSxFQUFFLGFBRlI7QUFHRUMsUUFBQUEsT0FBTyxFQUFFO0FBQ1AsMkJBQWlCLEtBQUtoRSxNQURmO0FBRVAsMEJBQWdCLGtCQUZUO0FBR1AsOEJBQW9CO0FBSGIsU0FIWDtBQVFFaUUsUUFBQUEsSUFBSSxFQUFFMUMsSUFBSSxDQUFDMkMsU0FBTCxDQUFlUixVQUFmO0FBUlIsT0FGRyxDQUFMLENBWUVTLElBWkYsQ0FhRSxVQUFBQyxRQUFRLEVBQUk7QUFDVixZQUFJQSxRQUFRLENBQUNDLE1BQVQsSUFBbUIsR0FBdkIsRUFBNEI7QUFDMUJ6RCxVQUFBQSxJQUFJLENBQUMwRCxLQUFMO0FBQ0EsZUFBSSxDQUFDN0QsVUFBTCxHQUFrQixvQkFBbEI7QUFDQSxlQUFJLENBQUNDLGdCQUFMLEdBQXdCLFNBQXhCO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsZUFBSSxDQUFDRCxVQUFMLEdBQWtCLDhEQUFsQjtBQUNBLGVBQUksQ0FBQ0MsZ0JBQUwsR0FBd0Isb0JBQXhCO0FBQ0Q7O0FBQ0QsYUFBSSxDQUFDUixRQUFMLEdBQWdCLElBQWhCO0FBQ0FxRSxRQUFBQSxVQUFVLENBQ1IsS0FBSSxDQUFDQyxlQURHLEVBRVIsSUFGUSxDQUFWO0FBR0QsT0ExQkg7QUE0QkQsS0F2R007QUF3R1BBLElBQUFBLGVBQWUsRUFBRSwyQkFBVTtBQUN6QixXQUFLL0QsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFdBQUtDLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0Q7QUEzR007QUEvQkgsQ0FBUiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2hvbWUvY291cnJpZWxzL2NvdXJyaWVsRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5cbm5ldyBWdWUoe1xuICBlbDogJ2Zvcm0nLFxuICBkZWxpbWl0ZXJzOiBbJyR7JywgJ30kJ10sXG4gIGRhdGE6IHtcbiAgICBfdG9rZW46ICcnLFxuICAgIGZvcm1Db25zdHJhaW50czogbnVsbCxcbiAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICBlcnJvcm1lc3NhZ2VzOiB7XG4gICAgICBjb3VycmllbHNOYW1lOiAnJyxcbiAgICAgIGNvdXJyaWVsc01haWxfZnJvbTogJycsXG4gICAgICBjb3VycmllbHNTdWJqZWN0OiAnJyxcbiAgICAgIGNvdXJyaWVsc01lc3NhZ2U6ICcnLFxuICAgICAgY291cnJpZWxzTm9zaWFyOiAnJ1xuICAgIH0sXG4gICAgbWVzc2FnZWFwaTonJyxcbiAgICBjbGFzc0NvbW1lbnRTZW50OiAnJ1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGxldCBmb3JtID0gdGhpcy4kZWw7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIHRoaXMuX3Rva2VuID0gZm9ybURhdGEuZ2V0KCdjb3VycmllbHNbX3Rva2VuXScpO1xuXG4gICAgbGV0IGZvcm1Db25zdHJhaW50cyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBvZiBmb3JtRGF0YS5rZXlzKCkpIHtcbiAgICAgIGxldCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiJyArIGtleSArICdcIl0nKTtcbiAgICAgIGlmIChudWxsICE9IGVsLmRhdGFzZXQuY29uc3RyYWludHMpIHtcbiAgICAgICAgZm9ybUNvbnN0cmFpbnRzW2tleV0gPSBKU09OLnBhcnNlKGVsLmRhdGFzZXQuY29uc3RyYWludHMpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmZvcm1Db25zdHJhaW50cyA9IGZvcm1Db25zdHJhaW50cztcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2hlY2tGaWVsZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBmb3JtID0gdGhpcy4kZWw7XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICBmb3IgKGxldCBmaWVsZE5hbWUgaW4gdGhpcy5mb3JtQ29uc3RyYWludHMpIHtcbiAgICAgICAgdGhpcy5lcnJvcm1lc3NhZ2VzW3RoaXMubm9ybWFsaXplRmllbGROYW1lKGZpZWxkTmFtZSldID0gJyc7XG4gICAgICAgIGZvciAobGV0IGNvbnN0cmFpbnQgb2YgdGhpcy5mb3JtQ29uc3RyYWludHNbZmllbGROYW1lXSkge1xuICAgICAgICAgIHRoaXMuZXJyb3JtZXNzYWdlc1t0aGlzLm5vcm1hbGl6ZUZpZWxkTmFtZShmaWVsZE5hbWUpXSArPSB0aGlzW2NvbnN0cmFpbnQubmFtZSArICdDaGVjayddKGNvbnN0cmFpbnQuY29uc3RyYWludFdpZGdldCwgZm9ybURhdGEuZ2V0KGZpZWxkTmFtZSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy50b2dnbGVCdXR0b24oKTtcbiAgICB9LFxuICAgIG5vcm1hbGl6ZUZpZWxkTmFtZTogZnVuY3Rpb24gKGZpZWxkTmFtZSkge1xuICAgICAgZmllbGROYW1lID0gZmllbGROYW1lLnJlcGxhY2UoXCJdXCIsICcnKTtcbiAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS5zcGxpdCgnWycpO1xuICAgICAgZmllbGROYW1lWzFdID0gZmllbGROYW1lWzFdLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgZmllbGROYW1lWzFdLnNsaWNlKDEpO1xuICAgICAgZmllbGROYW1lID0gZmllbGROYW1lLmpvaW4oJycpO1xuICAgICAgcmV0dXJuIGZpZWxkTmFtZTtcbiAgICB9LFxuICAgIG5vdEJsYW5rQ2hlY2s6IGZ1bmN0aW9uIChjb25zdHJhaW50V2lkZ2V0LCB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID09ICcnKSB7XG4gICAgICAgIHJldHVybiBjb25zdHJhaW50V2lkZ2V0Lm1lc3NhZ2UgKyAnOyAnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0sXG4gICAgbGVuZ3RoQ2hlY2s6IGZ1bmN0aW9uIChjb25zdHJhaW50V2lkZ2V0LCB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IGNvbnN0cmFpbnRXaWRnZXQubWluKSB7XG4gICAgICAgIHJldHVybiBjb25zdHJhaW50V2lkZ2V0Lm1pbk1lc3NhZ2UucmVwbGFjZSgne3sgbGltaXQgfX0nLCBjb25zdHJhaW50V2lkZ2V0Lm1pbikgKyAnOyAnO1xuICAgICAgfVxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IGNvbnN0cmFpbnRXaWRnZXQubWF4KSB7XG4gICAgICAgIHJldHVybiBjb25zdHJhaW50V2lkZ2V0Lm1pbk1lc3NhZ2UucmVwbGFjZSgne3sgbGltaXQgfX0nLCBjb25zdHJhaW50V2lkZ2V0Lm1heCkgKyAnOyAnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcnO1xuICAgIH0sXG4gICAgZW1haWxDaGVjazogZnVuY3Rpb24gKGNvbnN0cmFpbnRXaWRnZXQsIHZhbHVlKSB7XG4gICAgICBsZXQgcmVnZXggPSAvW2EtekEtWjAtOS5fJSstXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aXXsyLH0vO1xuICAgICAgaWYgKCFyZWdleC50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY29uc3RyYWludFdpZGdldC5tZXNzYWdlICsgJzsgJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuICAgIHJlZ2V4Q2hlY2s6IGZ1bmN0aW9uIChjb25zdHJhaW50V2lkZ2V0LCB2YWx1ZSkge1xuICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChjb25zdHJhaW50V2lkZ2V0LnBhdHRlcm4uc2xpY2UoMSwgLTEpKTtcbiAgICAgIGlmICghcmVnZXgudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnRXaWRnZXQubWVzc2FnZSArICc7ICc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSxcbiAgICBibGFua0NoZWNrOiBmdW5jdGlvbiAoY29uc3RyYWludFdpZGdldCwgdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSAnJykge1xuICAgICAgICByZXR1cm4gY29uc3RyYWludFdpZGdldC5tZXNzYWdlICsgJzsgJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgICB9LFxuICAgIHRvZ2dsZUJ1dHRvbjogZnVuY3Rpb24gKCkge1xuICAgICAgZm9yIChsZXQgZmllbGROYW1lIGluIHRoaXMuZXJyb3JtZXNzYWdlcykge1xuICAgICAgICBpZiAodGhpcy5lcnJvcm1lc3NhZ2VzW2ZpZWxkTmFtZV0gIT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgb25TZW5kQ29tbWVudDogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMub25BamF4Q2FsbCgpO1xuICAgIH0sXG4gICAgb25BamF4Q2FsbDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGZvcm0gPSB0aGlzLiRlbDtcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcblxuICAgICAgbGV0IGRhdGFUb1NlbmQgPSB7fTtcbiAgICAgIGZvciAobGV0IGZpZWxkIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgICAgICBkYXRhVG9TZW5kW2ZpZWxkWzBdLnJlcGxhY2UoJ2NvdXJyaWVsc1snLCAnJykucmVwbGFjZSgnXScsICcnKV0gPSBmaWVsZFsxXTtcbiAgICAgIH1cblxuICAgICAgZmV0Y2goXG4gICAgICAgICcvYXBpL2NvdXJyaWVscy8nLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgbW9kZTogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogdGhpcy5fdG9rZW4sXG4gICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBcIlgtUmVxdWVzdGVkLVdpdGhcIjogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YVRvU2VuZClcbiAgICAgICAgfVxuICAgICAgKS50aGVuKFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDEpIHtcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZWFwaSA9ICdNZXNzYWdlIGVucmVnaXN0csOpJztcbiAgICAgICAgICAgIHRoaXMuY2xhc3NDb21tZW50U2VudCA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VhcGkgPSAnVW4gcHJvYmzDqG1lIGVzdCBzdXJuZW51LiBMZSBtZXNzYWdlIG5cXCdhIHBhcyDDqXTDqSBlbnJlZ2lzdHLDqS4nO1xuICAgICAgICAgICAgdGhpcy5jbGFzc0NvbW1lbnRTZW50ID0gXCJmb3JtLWVycm9yLW1lc3NhZ2VcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChcbiAgICAgICAgICAgIHRoaXMucmVzZXRBcGlNZXNzYWdlXG4gICAgICAgICAgLCAyMDAwKTtcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSxcbiAgICByZXNldEFwaU1lc3NhZ2U6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLm1lc3NhZ2VhcGkgPSAnJztcbiAgICAgIHRoaXMuY2xhc3NDb21tZW50U2VudCA9ICcnO1xuICAgIH1cbiAgfSxcbn0pXG5cbiJdLCJuYW1lcyI6WyJWdWUiLCJlbCIsImRlbGltaXRlcnMiLCJkYXRhIiwiX3Rva2VuIiwiZm9ybUNvbnN0cmFpbnRzIiwiZGlzYWJsZWQiLCJlcnJvcm1lc3NhZ2VzIiwiY291cnJpZWxzTmFtZSIsImNvdXJyaWVsc01haWxfZnJvbSIsImNvdXJyaWVsc1N1YmplY3QiLCJjb3VycmllbHNNZXNzYWdlIiwiY291cnJpZWxzTm9zaWFyIiwibWVzc2FnZWFwaSIsImNsYXNzQ29tbWVudFNlbnQiLCJtb3VudGVkIiwiZm9ybSIsIiRlbCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJnZXQiLCJrZXlzIiwia2V5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsImNvbnN0cmFpbnRzIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kcyIsIm9uQ2hlY2tGaWVsZHMiLCJmaWVsZE5hbWUiLCJub3JtYWxpemVGaWVsZE5hbWUiLCJjb25zdHJhaW50IiwibmFtZSIsImNvbnN0cmFpbnRXaWRnZXQiLCJ0b2dnbGVCdXR0b24iLCJyZXBsYWNlIiwic3BsaXQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsIm5vdEJsYW5rQ2hlY2siLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJsZW5ndGhDaGVjayIsImxlbmd0aCIsIm1pbiIsIm1pbk1lc3NhZ2UiLCJtYXgiLCJlbWFpbENoZWNrIiwicmVnZXgiLCJ0ZXN0IiwicmVnZXhDaGVjayIsIlJlZ0V4cCIsInBhdHRlcm4iLCJibGFua0NoZWNrIiwib25TZW5kQ29tbWVudCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbkFqYXhDYWxsIiwiZGF0YVRvU2VuZCIsImVudHJpZXMiLCJmaWVsZCIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVzZXQiLCJzZXRUaW1lb3V0IiwicmVzZXRBcGlNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==