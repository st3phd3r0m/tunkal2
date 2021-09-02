(self["webpackChunk"] = self["webpackChunk"] || []).push([["postForm"],{

/***/ "./assets/components/admin/post/fillSlugInput.js":
/*!*******************************************************!*\
  !*** ./assets/components/admin/post/fillSlugInput.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

$(function () {
  $("#posts_title").on('keyup', fillTextInput);
});

function fillTextInput() {
  var id = this.id;
  $("#" + id.replace('title', 'slug')).val(this.value);
}

/***/ }),

/***/ "./assets/components/admin/post/imageFieldsManager.js":
/*!************************************************************!*\
  !*** ./assets/components/admin/post/imageFieldsManager.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _ImageField_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ImageField.vue */ "./assets/components/admin/post/ImageField.vue");













function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



new vue__WEBPACK_IMPORTED_MODULE_13__.default({
  el: '#imageFields',
  delimiters: ['${', '}$'],
  components: {
    ImageField: _ImageField_vue__WEBPACK_IMPORTED_MODULE_12__.default
  },
  data: {
    counter: [],
    images: null
  },
  mounted: function mounted() {
    this.counter = _toConsumableArray(Array(Number(this.$el.dataset.counter)).keys());
    this.images = JSON.parse(this.$el.dataset.images);
  },
  methods: {
    addImageField: function addImageField(event) {
      event.preventDefault();
      this.counter = ++this.$el.dataset.counter;
    }
  }
});

/***/ }),

/***/ "./assets/components/admin/post/metaConstraints.js":
/*!*********************************************************!*\
  !*** ./assets/components/admin/post/metaConstraints.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");



var ErrorTitle = vue__WEBPACK_IMPORTED_MODULE_2__.default.component('error-title', {
  delimiters: ['${', '}$'],
  props: {
    messageTitle: String
  },
  template: '<span class="text-danger"> ${ messageTitle }$ </span>'
});
var ErrorDescription = vue__WEBPACK_IMPORTED_MODULE_2__.default.component('error-description', {
  delimiters: ['${', '}$'],
  props: {
    messageDescription: String
  },
  template: '<span class="text-danger"> ${ messageDescription }$ </span>'
});
new vue__WEBPACK_IMPORTED_MODULE_2__.default({
  el: '#metaTitle',
  delimiters: ['${', '}$'],
  components: {
    ErrorTitle: ErrorTitle
  },
  data: {
    constraints: [],
    errorTitleMessage: ''
  },
  methods: {
    onCheckLength: function onCheckLength(e) {
      var value = e.target.value;
      var constraints = this.constraints;

      if (value.length > constraints.max) {
        this.errorTitleMessage = constraints.maxMessage.replace('{{ limit }}', constraints.max);
      } else if (value.length < constraints.min) {
        this.errorTitleMessage = constraints.minMessage.replace('{{ limit }}', constraints.min);
      } else {
        this.errorTitleMessage = '';
      }
    }
  },
  mounted: function mounted() {
    this.constraints = JSON.parse(this.$el.dataset.constraints);
  }
});
new vue__WEBPACK_IMPORTED_MODULE_2__.default({
  el: '#metaDescription',
  delimiters: ['${', '}$'],
  components: {
    ErrorDescription: ErrorDescription
  },
  data: {
    constraints: [],
    errorDescriptionMessage: ''
  },
  methods: {
    onCheckLength: function onCheckLength(e) {
      var value = e.target.value;
      var constraints = this.constraints;

      if (value.length > constraints.max) {
        this.errorDescriptionMessage = constraints.maxMessage.replace('{{ limit }}', constraints.max);
      } else if (value.length < constraints.min) {
        this.errorDescriptionMessage = constraints.minMessage.replace('{{ limit }}', constraints.min);
      } else {
        this.errorDescriptionMessage = '';
      }
    }
  },
  mounted: function mounted() {
    this.constraints = JSON.parse(this.$el.dataset.constraints);
  }
});

/***/ }),

/***/ "./assets/postForm.js":
/*!****************************!*\
  !*** ./assets/postForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_admin_post_fillSlugInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/admin/post/fillSlugInput.js */ "./assets/components/admin/post/fillSlugInput.js");
/* harmony import */ var _components_admin_post_fillSlugInput_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_admin_post_fillSlugInput_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_admin_post_imageFieldsManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin/post/imageFieldsManager.js */ "./assets/components/admin/post/imageFieldsManager.js");
/* harmony import */ var _components_admin_post_metaConstraints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/admin/post/metaConstraints.js */ "./assets/components/admin/post/metaConstraints.js");




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/post/ImageField.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/post/ImageField.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//
//
//
//
//
//
//
//
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
  name: "image-field",
  delimiters: ["${", "}$"],
  props: {
    fieldid: Number,
    image: String
  },
  data: function data() {
    return {
      toShow: true,
      updatedFile: "",
      updated: false
    };
  },
  methods: {
    removeImageField: function removeImageField(event) {
      event.preventDefault();
      this.toShow = false;
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

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  if (isSymbol(argument)) throw TypeError('Cannot convert a Symbol value to a number');
  var it = toPrimitive(argument, 'number');
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./assets/components/admin/post/ImageField.vue":
/*!*****************************************************!*\
  !*** ./assets/components/admin/post/ImageField.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageField_vue_vue_type_template_id_89e06c7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageField.vue?vue&type=template&id=89e06c7a& */ "./assets/components/admin/post/ImageField.vue?vue&type=template&id=89e06c7a&");
/* harmony import */ var _ImageField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageField.vue?vue&type=script&lang=js& */ "./assets/components/admin/post/ImageField.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ImageField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ImageField_vue_vue_type_template_id_89e06c7a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImageField_vue_vue_type_template_id_89e06c7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/components/admin/post/ImageField.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/components/admin/post/ImageField.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./assets/components/admin/post/ImageField.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/post/ImageField.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/components/admin/post/ImageField.vue?vue&type=template&id=89e06c7a&":
/*!************************************************************************************!*\
  !*** ./assets/components/admin/post/ImageField.vue?vue&type=template&id=89e06c7a& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_template_id_89e06c7a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_template_id_89e06c7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageField_vue_vue_type_template_id_89e06c7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageField.vue?vue&type=template&id=89e06c7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/post/ImageField.vue?vue&type=template&id=89e06c7a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/post/ImageField.vue?vue&type=template&id=89e06c7a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/components/admin/post/ImageField.vue?vue&type=template&id=89e06c7a& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.toShow
    ? _c("li", { staticClass: "list-group-item" }, [
        _c(
          "div",
          {
            staticClass: "row align-items-center p-2",
            attrs: { id: "posts_images_" + _vm.fieldid }
          },
          [
            _c("fieldset", { staticClass: "form-group col-6" }, [
              _c("div", { staticClass: "vich-image" }, [
                _c("div", { staticClass: "custom-file" }, [
                  _c("input", {
                    staticClass: "custom-file-input",
                    attrs: {
                      type: "file",
                      id: "posts_images_" + _vm.fieldid + "_imageFile_file",
                      name:
                        "posts[images][" + _vm.fieldid + "][imageFile][file]"
                    },
                    on: { change: _vm.updateFile }
                  }),
                  _vm._v(" "),
                  _c("label", {
                    staticClass: "custom-file-label",
                    attrs: {
                      for: "posts_images_" + _vm.fieldid + "_imageFile_file"
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-3" }, [
              _vm.updated
                ? _c("img", {
                    staticClass: "w-50",
                    attrs: { src: _vm.updatedFile, alt: "" }
                  })
                : _c("img", {
                    staticClass: "w-50",
                    attrs: {
                      src: "/media/cache/min300/images/" + _vm.image,
                      alt: ""
                    }
                  })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-3" }, [
              _c(
                "a",
                { attrs: { href: "#" }, on: { click: _vm.removeImageField } },
                [
                  _c("i", { staticClass: "fas fa-minus" }),
                  _vm._v("\n\t\t\t\t\tEnlever cette image\n\t\t\t\t")
                ]
              )
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_html_js","vendors-node_modules_core-js_internals_check-correctness-of-iteration_js-node_modules_core-js-13ab7c","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-3637c8","vendors-node_modules_core-js_modules_es_string_replace_js"], () => (__webpack_exec__("./assets/postForm.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5QztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0Esa0JBQWtCLFNBQVMsV0FBVyxRQUFRLCtCQUErQjtBQUM3RTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbi9wb3N0L2ZpbGxTbHVnSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vcG9zdC9pbWFnZUZpZWxkc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vcG9zdC9tZXRhQ29uc3RyYWludHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Bvc3RGb3JtLmpzIiwid2VicGFjazovLy9hc3NldHMvY29tcG9uZW50cy9hZG1pbi9wb3N0L0ltYWdlRmllbGQudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vcG9zdC9JbWFnZUZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9hZG1pbi9wb3N0L0ltYWdlRmllbGQudnVlP2Q4YzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vcG9zdC9JbWFnZUZpZWxkLnZ1ZT8zYjY0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNwb3N0c190aXRsZVwiKS5vbigna2V5dXAnLCBmaWxsVGV4dElucHV0KTtcbiAgfSk7XG4gIFxuZnVuY3Rpb24gZmlsbFRleHRJbnB1dCgpe1xuICAgIGxldCBpZCA9IHRoaXMuaWQ7XG4gICAgJChcIiNcIitpZC5yZXBsYWNlKCd0aXRsZScsICdzbHVnJykpLnZhbCh0aGlzLnZhbHVlKTtcbn0iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgSW1hZ2VGaWVsZCBmcm9tICcuL0ltYWdlRmllbGQudnVlJztcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI2ltYWdlRmllbGRzJyxcbiAgZGVsaW1pdGVyczogWyckeycsICd9JCddLFxuICBjb21wb25lbnRzOiB7XG4gICAgSW1hZ2VGaWVsZFxuICB9LFxuICBkYXRhOiB7XG4gICAgY291bnRlcjogW10sXG4gICAgaW1hZ2VzOiBudWxsXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5jb3VudGVyID0gWy4uLkFycmF5KE51bWJlcih0aGlzLiRlbC5kYXRhc2V0LmNvdW50ZXIpKS5rZXlzKCldO1xuICAgIHRoaXMuaW1hZ2VzID0gSlNPTi5wYXJzZSh0aGlzLiRlbC5kYXRhc2V0LmltYWdlcyk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhZGRJbWFnZUZpZWxkOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNvdW50ZXIgPSArK3RoaXMuJGVsLmRhdGFzZXQuY291bnRlcjtcbiAgICB9LFxuICB9LFxufSlcblxuIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuXG5sZXQgRXJyb3JUaXRsZSA9IFZ1ZS5jb21wb25lbnQoJ2Vycm9yLXRpdGxlJyxcbntcbiAgICBkZWxpbWl0ZXJzOiBbJyR7JywgJ30kJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgIG1lc3NhZ2VUaXRsZTogU3RyaW5nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4gJHsgbWVzc2FnZVRpdGxlIH0kIDwvc3Bhbj4nXG59KVxuXG5sZXQgRXJyb3JEZXNjcmlwdGlvbiA9IFZ1ZS5jb21wb25lbnQoJ2Vycm9yLWRlc2NyaXB0aW9uJyxcbntcbiAgICBkZWxpbWl0ZXJzOiBbJyR7JywgJ30kJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgIG1lc3NhZ2VEZXNjcmlwdGlvbjogU3RyaW5nXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogJzxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4gJHsgbWVzc2FnZURlc2NyaXB0aW9uIH0kIDwvc3Bhbj4nXG59KVxuXG5uZXcgVnVlKHtcbiAgZWw6ICcjbWV0YVRpdGxlJyxcbiAgZGVsaW1pdGVyczogWyckeycsICd9JCddLFxuICBjb21wb25lbnRzOiB7XG4gICAgRXJyb3JUaXRsZVxuICB9LFxuICBkYXRhOiB7XG4gICAgY29uc3RyYWludHM6IFtdLFxuICAgIGVycm9yVGl0bGVNZXNzYWdlOiAnJ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25DaGVja0xlbmd0aDogZnVuY3Rpb24oZSl7XG4gICAgICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgY29uc3RyYWludHMgPSB0aGlzLmNvbnN0cmFpbnRzO1xuICAgICAgICBpZiggdmFsdWUubGVuZ3RoID4gY29uc3RyYWludHMubWF4ICl7XG4gICAgICAgICAgICB0aGlzLmVycm9yVGl0bGVNZXNzYWdlID0gY29uc3RyYWludHMubWF4TWVzc2FnZS5yZXBsYWNlKCd7eyBsaW1pdCB9fScsIGNvbnN0cmFpbnRzLm1heCApO1xuICAgICAgICB9ZWxzZSBpZiggdmFsdWUubGVuZ3RoIDwgY29uc3RyYWludHMubWluICl7XG4gICAgICAgICAgICB0aGlzLmVycm9yVGl0bGVNZXNzYWdlID0gY29uc3RyYWludHMubWluTWVzc2FnZS5yZXBsYWNlKCd7eyBsaW1pdCB9fScsIGNvbnN0cmFpbnRzLm1pbiApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JUaXRsZU1lc3NhZ2UgPScnO1xuICAgICAgICB9XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuY29uc3RyYWludHMgPSBKU09OLnBhcnNlKHRoaXMuJGVsLmRhdGFzZXQuY29uc3RyYWludHMpO1xuICB9LFxufSlcblxubmV3IFZ1ZSh7XG4gIGVsOiAnI21ldGFEZXNjcmlwdGlvbicsXG4gIGRlbGltaXRlcnM6IFsnJHsnLCAnfSQnXSxcbiAgY29tcG9uZW50czoge1xuICAgIEVycm9yRGVzY3JpcHRpb25cbiAgfSxcbiAgZGF0YToge1xuICAgIGNvbnN0cmFpbnRzOiBbXSxcbiAgICBlcnJvckRlc2NyaXB0aW9uTWVzc2FnZTogJydcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2hlY2tMZW5ndGg6IGZ1bmN0aW9uKGUpe1xuICAgICAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IGNvbnN0cmFpbnRzID0gdGhpcy5jb25zdHJhaW50cztcbiAgICAgICAgaWYoIHZhbHVlLmxlbmd0aCA+IGNvbnN0cmFpbnRzLm1heCApe1xuICAgICAgICAgICAgdGhpcy5lcnJvckRlc2NyaXB0aW9uTWVzc2FnZSA9IGNvbnN0cmFpbnRzLm1heE1lc3NhZ2UucmVwbGFjZSgne3sgbGltaXQgfX0nLCBjb25zdHJhaW50cy5tYXggKTtcbiAgICAgICAgfWVsc2UgaWYoIHZhbHVlLmxlbmd0aCA8IGNvbnN0cmFpbnRzLm1pbiApe1xuICAgICAgICAgICAgdGhpcy5lcnJvckRlc2NyaXB0aW9uTWVzc2FnZSA9IGNvbnN0cmFpbnRzLm1pbk1lc3NhZ2UucmVwbGFjZSgne3sgbGltaXQgfX0nLCBjb25zdHJhaW50cy5taW4gKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmVycm9yRGVzY3JpcHRpb25NZXNzYWdlID0nJztcbiAgICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZSh0aGlzLiRlbC5kYXRhc2V0LmNvbnN0cmFpbnRzKTtcbiAgfSxcbn0pIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRtaW4vcG9zdC9maWxsU2x1Z0lucHV0LmpzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWRtaW4vcG9zdC9pbWFnZUZpZWxkc01hbmFnZXIuanMnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hZG1pbi9wb3N0L21ldGFDb25zdHJhaW50cy5qcyciLCI8dGVtcGxhdGU+IFxuXHQ8bGkgdi1pZj1cInRvU2hvd1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XG5cdFx0PGRpdiA6aWQ9XCIncG9zdHNfaW1hZ2VzXycrZmllbGRpZFwiIGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBwLTJcIj5cblx0XHRcdDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXAgY29sLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZpY2gtaW1hZ2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWZpbGVcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIDppZD1cIidwb3N0c19pbWFnZXNfJytmaWVsZGlkKydfaW1hZ2VGaWxlX2ZpbGUnXCIgOm5hbWU9XCIncG9zdHNbaW1hZ2VzXVsnK2ZpZWxkaWQrJ11baW1hZ2VGaWxlXVtmaWxlXSdcIiBjbGFzcz1cImN1c3RvbS1maWxlLWlucHV0XCIgIHYtb246Y2hhbmdlPVwidXBkYXRlRmlsZVwiIC8+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cIidwb3N0c19pbWFnZXNfJytmaWVsZGlkKydfaW1hZ2VGaWxlX2ZpbGUnXCIgY2xhc3M9XCJjdXN0b20tZmlsZS1sYWJlbFwiPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC0zXCI+XG5cdFx0XHRcdDxpbWcgY2xhc3M9XCJ3LTUwXCIgdi1pZj1cInVwZGF0ZWRcIiA6c3JjPVwidXBkYXRlZEZpbGVcIiBhbHQ9XCJcIj5cblx0XHRcdFx0PGltZyBjbGFzcz1cInctNTBcIiB2LWVsc2UgOnNyYz1cIicvbWVkaWEvY2FjaGUvbWluMzAwL2ltYWdlcy8nK2ltYWdlXCIgYWx0PVwiXCI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiIHYtb246Y2xpY2s9XCJyZW1vdmVJbWFnZUZpZWxkXCI+XG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtbWludXNcIj48L2k+XG5cdFx0XHRcdFx0RW5sZXZlciBjZXR0ZSBpbWFnZVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9saT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiaW1hZ2UtZmllbGRcIixcbiAgZGVsaW1pdGVyczogW1wiJHtcIiwgXCJ9JFwiXSxcbiAgcHJvcHM6IHtcbiAgICBmaWVsZGlkOiBOdW1iZXIsXG4gICAgaW1hZ2U6IFN0cmluZyxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9TaG93OiB0cnVlLFxuICAgICAgdXBkYXRlZEZpbGU6IFwiXCIsXG4gICAgICB1cGRhdGVkOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmVtb3ZlSW1hZ2VGaWVsZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRvU2hvdyA9IGZhbHNlO1xuICAgIH0sXG4gICAgdXBkYXRlRmlsZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZWRGaWxlID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICB0aGlzLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgfTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICB0eXBlb2YgKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSA9PSAnZnVuY3Rpb24nICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMicgK1xuICAnXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcblxudmFyIE5VTUJFUiA9ICdOdW1iZXInO1xudmFyIE5hdGl2ZU51bWJlciA9IGdsb2JhbFtOVU1CRVJdO1xudmFyIE51bWJlclByb3RvdHlwZSA9IE5hdGl2ZU51bWJlci5wcm90b3R5cGU7XG5cbi8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xudmFyIEJST0tFTl9DTEFTU09GID0gY2xhc3NvZihjcmVhdGUoTnVtYmVyUHJvdG90eXBlKSkgPT0gTlVNQkVSO1xuXG4vLyBgVG9OdW1iZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b251bWJlclxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc1N5bWJvbChhcmd1bWVudCkpIHRocm93IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBudW1iZXInKTtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdudW1iZXInKTtcbiAgdmFyIGZpcnN0LCB0aGlyZCwgcmFkaXgsIG1heENvZGUsIGRpZ2l0cywgbGVuZ3RoLCBpbmRleCwgY29kZTtcbiAgaWYgKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKSB7XG4gICAgaXQgPSB0cmltKGl0KTtcbiAgICBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGRpZ2l0cyA9IGl0LnNsaWNlKDIpO1xuICAgICAgbGVuZ3RoID0gZGlnaXRzLmxlbmd0aDtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuLy8gYE51bWJlcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLWNvbnN0cnVjdG9yXG5pZiAoaXNGb3JjZWQoTlVNQkVSLCAhTmF0aXZlTnVtYmVyKCcgMG8xJykgfHwgIU5hdGl2ZU51bWJlcignMGIxJykgfHwgTmF0aXZlTnVtYmVyKCcrMHgxJykpKSB7XG4gIHZhciBOdW1iZXJXcmFwcGVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWU7XG4gICAgdmFyIGR1bW15ID0gdGhpcztcbiAgICByZXR1cm4gZHVtbXkgaW5zdGFuY2VvZiBOdW1iZXJXcmFwcGVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ0xBU1NPRiA/IGZhaWxzKGZ1bmN0aW9uICgpIHsgTnVtYmVyUHJvdG90eXBlLnZhbHVlT2YuY2FsbChkdW1teSk7IH0pIDogY2xhc3NvZihkdW1teSkgIT0gTlVNQkVSKVxuICAgICAgICA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBOYXRpdmVOdW1iZXIodG9OdW1iZXIoaXQpKSwgZHVtbXksIE51bWJlcldyYXBwZXIpIDogdG9OdW1iZXIoaXQpO1xuICB9O1xuICBmb3IgKHZhciBrZXlzID0gREVTQ1JJUFRPUlMgPyBnZXRPd25Qcm9wZXJ0eU5hbWVzKE5hdGl2ZU51bWJlcikgOiAoXG4gICAgLy8gRVMzOlxuICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcbiAgICAvLyBFUzIwMTUgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzIwMTUgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcbiAgICAnRVBTSUxPTixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixNQVhfU0FGRV9JTlRFR0VSLCcgK1xuICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyLCcgK1xuICAgIC8vIEVTTmV4dFxuICAgICdmcm9tU3RyaW5nLHJhbmdlJ1xuICApLnNwbGl0KCcsJyksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgaisrKSB7XG4gICAgaWYgKGhhcyhOYXRpdmVOdW1iZXIsIGtleSA9IGtleXNbal0pICYmICFoYXMoTnVtYmVyV3JhcHBlciwga2V5KSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkoTnVtYmVyV3JhcHBlciwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTmF0aXZlTnVtYmVyLCBrZXkpKTtcbiAgICB9XG4gIH1cbiAgTnVtYmVyV3JhcHBlci5wcm90b3R5cGUgPSBOdW1iZXJQcm90b3R5cGU7XG4gIE51bWJlclByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlcldyYXBwZXI7XG4gIHJlZGVmaW5lKGdsb2JhbCwgTlVNQkVSLCBOdW1iZXJXcmFwcGVyKTtcbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW1hZ2VGaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODllMDZjN2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW1hZ2VGaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9zdDNwaC9wcm9qZXRzU3ltZm9ueS90dW5rYWwyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzg5ZTA2YzdhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzg5ZTA2YzdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzg5ZTA2YzdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbWFnZUZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04OWUwNmM3YSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4OWUwNmM3YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2NvbXBvbmVudHMvYWRtaW4vcG9zdC9JbWFnZUZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZUZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0udG9TaG93XG4gICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgcC0yXCIsXG4gICAgICAgICAgICBhdHRyczogeyBpZDogXCJwb3N0c19pbWFnZXNfXCIgKyBfdm0uZmllbGRpZCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImZpZWxkc2V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBjb2wtNlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2aWNoLWltYWdlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGUtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBpZDogXCJwb3N0c19pbWFnZXNfXCIgKyBfdm0uZmllbGRpZCArIFwiX2ltYWdlRmlsZV9maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zdHNbaW1hZ2VzXVtcIiArIF92bS5maWVsZGlkICsgXCJdW2ltYWdlRmlsZV1bZmlsZV1cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS51cGRhdGVGaWxlIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGZvcjogXCJwb3N0c19pbWFnZXNfXCIgKyBfdm0uZmllbGRpZCArIFwiX2ltYWdlRmlsZV9maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLnVwZGF0ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy01MFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS51cGRhdGVkRmlsZSwgYWx0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNTBcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL21lZGlhL2NhY2hlL21pbjMwMC9pbWFnZXMvXCIgKyBfdm0uaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sIG9uOiB7IGNsaWNrOiBfdm0ucmVtb3ZlSW1hZ2VGaWVsZCB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1pbnVzXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRFbmxldmVyIGNldHRlIGltYWdlXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyIkIiwib24iLCJmaWxsVGV4dElucHV0IiwiaWQiLCJyZXBsYWNlIiwidmFsIiwidmFsdWUiLCJWdWUiLCJJbWFnZUZpZWxkIiwiZWwiLCJkZWxpbWl0ZXJzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjb3VudGVyIiwiaW1hZ2VzIiwibW91bnRlZCIsIkFycmF5IiwiTnVtYmVyIiwiJGVsIiwiZGF0YXNldCIsImtleXMiLCJKU09OIiwicGFyc2UiLCJtZXRob2RzIiwiYWRkSW1hZ2VGaWVsZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJFcnJvclRpdGxlIiwiY29tcG9uZW50IiwicHJvcHMiLCJtZXNzYWdlVGl0bGUiLCJTdHJpbmciLCJ0ZW1wbGF0ZSIsIkVycm9yRGVzY3JpcHRpb24iLCJtZXNzYWdlRGVzY3JpcHRpb24iLCJjb25zdHJhaW50cyIsImVycm9yVGl0bGVNZXNzYWdlIiwib25DaGVja0xlbmd0aCIsImUiLCJ0YXJnZXQiLCJsZW5ndGgiLCJtYXgiLCJtYXhNZXNzYWdlIiwibWluIiwibWluTWVzc2FnZSIsImVycm9yRGVzY3JpcHRpb25NZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==