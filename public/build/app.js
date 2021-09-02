(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/normalize.css */ "./assets/styles/normalize.css");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./assets/styles/styles.scss");
/* harmony import */ var _home_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/scroll.js */ "./assets/home/scroll.js");
/* harmony import */ var _home_scroll_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_scroll_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/menu.js */ "./assets/home/menu.js");
/* harmony import */ var _home_menu_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_menu_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _home_banner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/banner.js */ "./assets/home/banner.js");
/* harmony import */ var _home_banner_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_banner_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_modalsAndSlideShows_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/modalsAndSlideShows.js */ "./assets/home/modalsAndSlideShows.js");
/* harmony import */ var _home_modalsAndSlideShows_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_modalsAndSlideShows_js__WEBPACK_IMPORTED_MODULE_5__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)







/***/ }),

/***/ "./assets/home/banner.js":
/*!*******************************!*\
  !*** ./assets/home/banner.js ***!
  \*******************************/
/***/ (() => {

var pointTablette = 768;
var pointDesktop = 992;
$(function () {
  //Ecouteur d'événement sur la fenêtre
  $(window).on('resize', switchBanner);

  if (screen.width > pointTablette) {
    var src = $(".logoheader").data('desktop-image');
    $(".logoheader").attr('src', src);
  }

  $(".logoheader").on('resize', toogleLogo);
});

function toogleLogo() {
  var src;

  if (screen.width > pointTablette) {
    src = $(this).data('desktop-image');
  } else if (screen.width <= pointTablette) {
    src = $(this).data('mobile-image');
  }

  $(".logoheader").attr('src', src);
}

function switchBanner() {
  if ($(window).width() > pointDesktop) {
    $(".menuPrincipal").slideDown();
  } else {
    $(".menuPrincipal").slideUp();
  }
}

/***/ }),

/***/ "./assets/home/menu.js":
/*!*****************************!*\
  !*** ./assets/home/menu.js ***!
  \*****************************/
/***/ (() => {

$(function () {
  // Sur le burger, on met un ecouteur, pour derouler/enrouler le menus principal
  $("#navMenu").on("click", openMenu);
});
/**
 * Fonction qui déroule/enroule l'élément html suivant
 */

function openMenu() {
  $(this).next().slideDown(200, listenDocument);
}
/**
 * Fonction qui ajoute un event "click" sur le document pour fermer le menu
 */


function listenDocument() {
  $(document).one("click", closeMenu);
}
/**
 * Fonction qui enroule les menus secondaire et principal
 */


function closeMenu() {
  $(".menuPrincipal").slideUp(200);
}

/***/ }),

/***/ "./assets/home/modalsAndSlideShows.js":
/*!********************************************!*\
  !*** ./assets/home/modalsAndSlideShows.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slideIndex;
var src = []; //Attente chargement page web

$(function () {
  var miniatures = $(".hover-shadow");

  var _iterator = _createForOfIteratorHelper(miniatures),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var miniature = _step.value;
      src.push($(miniature).data('image-path'));
      $(miniature).on("click", openModal);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}); // Fin chargement page web
// Open the Modal

function openModal() {
  slideIndex = $(this).data('currentslide');
  document.getElementById("myModal").style.display = "block";
  document.getElementsByClassName("mySlides")[0].style.display = "block";
  $(".close").one("click", closeModal);
  showPicture();
}

function showPicture() {
  $(".mySlides>img").attr('src', src[slideIndex]);
  $(".prev").one("click", plusSlides);
  $(".next").one("click", plusSlides);
  $(window).on("keyup", plusSlidesKey);
} // Next/previous controls


function plusSlidesKey(e) {
  if (e.key === "ArrowRight") {
    $(this).off('keyup');
    slideIndex++;
    slideIndex = slideIndex % src.length;
    slideIndex = slideIndex < 0 ? src.length + slideIndex : slideIndex;
    showPicture();
  } else if (e.key === "ArrowLeft") {
    $(this).off('keyup');
    slideIndex--;
    slideIndex = slideIndex % src.length;
    slideIndex = slideIndex < 0 ? src.length + slideIndex : slideIndex;
    showPicture();
  } else if (e.key === "Escape") {
    $(this).off('keyup');
    document.getElementById("myModal").style.display = "none";
  }
} // Close the Modal


function closeModal() {
  $(this).off('click');
  document.getElementById("myModal").style.display = "none";
} // Next/previous controls


function plusSlides() {
  $(this).off('click');
  slideIndex += parseInt(this.dataset.plus);
  slideIndex = slideIndex % src.length;
  slideIndex = slideIndex < 0 ? src.length + slideIndex : slideIndex;
  showPicture();
}

/***/ }),

/***/ "./assets/home/scroll.js":
/*!*******************************!*\
  !*** ./assets/home/scroll.js ***!
  \*******************************/
/***/ (() => {

$(function () {
  // double Flèche en bas à droite de la fenetre en position:fixed pour retour à l'acceuil du site
  $("#scroll").on("click", goToHomeSite);
}); // Fin chargement page web

/**
 * Fonction qui va vers l'acceuil en scrolling
 * @param {*} event 
 */

function goToHomeSite() {
  $('html').animate({
    scrollTop: 0
  });
}

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

module.exports = function (it, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(it) : usingIterator;
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterator-close.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = iterator['return'];
    if (innerResult === undefined) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = innerResult.call(iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
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

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


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

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./assets/styles/styles.scss":
/*!***********************************!*\
  !*** ./assets/styles/styles.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/normalize.css":
/*!*************************************!*\
  !*** ./assets/styles/normalize.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_html_js","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-3637c8"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBLHlCQUF5QixvQkFBb0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVCQSxzQkFBc0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRTlEO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0ZBLDRCQUE0QixtQkFBTyxDQUFDLHFHQUFvQztBQUN4RSxlQUFlLG1CQUFPLENBQUMsMkVBQXVCO0FBQzlDLGVBQWUsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXREO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FOzs7Ozs7Ozs7OztBQ1JBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsNkJBQTZCLG1CQUFPLENBQUMsMkZBQStCOztBQUVwRTtBQUNBO0FBQ0EsSUFBSSwwREFBMEQ7QUFDOUQ7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUEQ7Ozs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hvbWUvYmFubmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ob21lL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hvbWUvbW9kYWxzQW5kU2xpZGVTaG93cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9tZS9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL25vcm1hbGl6ZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCAnLi9ob21lL3Njcm9sbC5qcyc7XG5pbXBvcnQgJy4vaG9tZS9tZW51LmpzJztcbmltcG9ydCAnLi9ob21lL2Jhbm5lci5qcyc7XG5pbXBvcnQgJy4vaG9tZS9tb2RhbHNBbmRTbGlkZVNob3dzLmpzJzsiLCJsZXQgcG9pbnRUYWJsZXR0ZSA9IDc2ODtcbmxldCBwb2ludERlc2t0b3AgPSA5OTI7XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgIC8vRWNvdXRldXIgZCfDqXbDqW5lbWVudCBzdXIgbGEgZmVuw6p0cmVcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHN3aXRjaEJhbm5lcik7XG5cbiAgICBpZiAoc2NyZWVuLndpZHRoID4gcG9pbnRUYWJsZXR0ZSkge1xuICAgICAgICBsZXQgc3JjID0gJChcIi5sb2dvaGVhZGVyXCIpLmRhdGEoJ2Rlc2t0b3AtaW1hZ2UnKTtcbiAgICAgICAgJChcIi5sb2dvaGVhZGVyXCIpLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgfVxuXG4gICAgJChcIi5sb2dvaGVhZGVyXCIpLm9uKCdyZXNpemUnLCB0b29nbGVMb2dvKTtcblxufSk7XG5cblxuZnVuY3Rpb24gdG9vZ2xlTG9nbygpIHtcbiAgICBsZXQgc3JjO1xuICAgIGlmIChzY3JlZW4ud2lkdGggPiBwb2ludFRhYmxldHRlKSB7XG4gICAgICAgIHNyYyA9ICQodGhpcykuZGF0YSgnZGVza3RvcC1pbWFnZScpO1xuICAgIH1lbHNlIGlmKHNjcmVlbi53aWR0aCA8PSBwb2ludFRhYmxldHRlKXtcbiAgICAgICAgc3JjID0gJCh0aGlzKS5kYXRhKCdtb2JpbGUtaW1hZ2UnKTtcbiAgICB9XG4gICAgJChcIi5sb2dvaGVhZGVyXCIpLmF0dHIoJ3NyYycsIHNyYyk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaEJhbm5lcigpe1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IHBvaW50RGVza3RvcCApIHtcbiAgICAgICAgJChcIi5tZW51UHJpbmNpcGFsXCIpLnNsaWRlRG93bigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIubWVudVByaW5jaXBhbFwiKS5zbGlkZVVwKCk7XG4gICAgfVxufSIsIiQoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN1ciBsZSBidXJnZXIsIG9uIG1ldCB1biBlY291dGV1ciwgcG91ciBkZXJvdWxlci9lbnJvdWxlciBsZSBtZW51cyBwcmluY2lwYWxcbiAgICAkKFwiI25hdk1lbnVcIikub24oXCJjbGlja1wiLCBvcGVuTWVudSk7XG59KTtcblxuLyoqXG4gKiBGb25jdGlvbiBxdWkgZMOpcm91bGUvZW5yb3VsZSBsJ8OpbMOpbWVudCBodG1sIHN1aXZhbnRcbiAqL1xuZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKDIwMCwgbGlzdGVuRG9jdW1lbnQpO1xufVxuXG4vKipcbiAqIEZvbmN0aW9uIHF1aSBham91dGUgdW4gZXZlbnQgXCJjbGlja1wiIHN1ciBsZSBkb2N1bWVudCBwb3VyIGZlcm1lciBsZSBtZW51XG4gKi9cbmZ1bmN0aW9uIGxpc3RlbkRvY3VtZW50KCkge1xuICAgICQoZG9jdW1lbnQpLm9uZShcImNsaWNrXCIsIGNsb3NlTWVudSk7XG59XG5cbi8qKlxuICogRm9uY3Rpb24gcXVpIGVucm91bGUgbGVzIG1lbnVzIHNlY29uZGFpcmUgZXQgcHJpbmNpcGFsXG4gKi9cbmZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgICAkKFwiLm1lbnVQcmluY2lwYWxcIikuc2xpZGVVcCgyMDApO1xufSIsImxldCBzbGlkZUluZGV4O1xubGV0IHNyYyA9IFtdO1xuXG4vL0F0dGVudGUgY2hhcmdlbWVudCBwYWdlIHdlYlxuJChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IG1pbmlhdHVyZXMgPSAkKFwiLmhvdmVyLXNoYWRvd1wiKTtcbiAgICBmb3IgKGxldCBtaW5pYXR1cmUgb2YgbWluaWF0dXJlcykge1xuICAgICAgICBzcmMucHVzaCggJChtaW5pYXR1cmUpLmRhdGEoJ2ltYWdlLXBhdGgnKSApO1xuICAgICAgICAkKG1pbmlhdHVyZSkub24oXCJjbGlja1wiLCBvcGVuTW9kYWwpO1xuICAgIH1cbn0pOyAvLyBGaW4gY2hhcmdlbWVudCBwYWdlIHdlYlxuXG4vLyBPcGVuIHRoZSBNb2RhbFxuZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgIHNsaWRlSW5kZXggPSAkKHRoaXMpLmRhdGEoJ2N1cnJlbnRzbGlkZScpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJteVNsaWRlc1wiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICQoXCIuY2xvc2VcIikub25lKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG4gICAgc2hvd1BpY3R1cmUoKTtcbn1cblxuZnVuY3Rpb24gc2hvd1BpY3R1cmUoKSB7XG4gICAgJChcIi5teVNsaWRlcz5pbWdcIikuYXR0cignc3JjJywgc3JjW3NsaWRlSW5kZXhdKTtcbiAgICAkKFwiLnByZXZcIikub25lKFwiY2xpY2tcIiwgcGx1c1NsaWRlcyk7XG4gICAgJChcIi5uZXh0XCIpLm9uZShcImNsaWNrXCIsIHBsdXNTbGlkZXMpO1xuICAgICQod2luZG93KS5vbihcImtleXVwXCIsIHBsdXNTbGlkZXNLZXkpO1xufVxuXG4vLyBOZXh0L3ByZXZpb3VzIGNvbnRyb2xzXG5mdW5jdGlvbiBwbHVzU2xpZGVzS2V5KGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICQodGhpcykub2ZmKCdrZXl1cCcpO1xuICAgICAgICBzbGlkZUluZGV4ICsrO1xuICAgICAgICBzbGlkZUluZGV4ID0gc2xpZGVJbmRleCAlIHNyYy5sZW5ndGg7XG4gICAgICAgIHNsaWRlSW5kZXggPSAoc2xpZGVJbmRleDwwKSA/IHNyYy5sZW5ndGgrc2xpZGVJbmRleCA6IHNsaWRlSW5kZXg7XG4gICAgICAgIHNob3dQaWN0dXJlKCk7XG4gICAgfSBlbHNlIGlmKGUua2V5ID09PSBcIkFycm93TGVmdFwiICkge1xuICAgICAgICAkKHRoaXMpLm9mZigna2V5dXAnKTtcbiAgICAgICAgc2xpZGVJbmRleCAtLTtcbiAgICAgICAgc2xpZGVJbmRleCA9IHNsaWRlSW5kZXggJSBzcmMubGVuZ3RoO1xuICAgICAgICBzbGlkZUluZGV4ID0gKHNsaWRlSW5kZXg8MCkgPyBzcmMubGVuZ3RoK3NsaWRlSW5kZXggOiBzbGlkZUluZGV4O1xuICAgICAgICBzaG93UGljdHVyZSgpO1xuICAgIH0gZWxzZSBpZihlLmtleSA9PT0gXCJFc2NhcGVcIiApIHtcbiAgICAgICAgJCh0aGlzKS5vZmYoJ2tleXVwJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlNb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxuXG4vLyBDbG9zZSB0aGUgTW9kYWxcbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgJCh0aGlzKS5vZmYoJ2NsaWNrJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuLy8gTmV4dC9wcmV2aW91cyBjb250cm9sc1xuZnVuY3Rpb24gcGx1c1NsaWRlcygpIHtcbiAgICAkKHRoaXMpLm9mZignY2xpY2snKTtcbiAgICBzbGlkZUluZGV4ICs9IHBhcnNlSW50KHRoaXMuZGF0YXNldC5wbHVzKTtcbiAgICBzbGlkZUluZGV4ID0gc2xpZGVJbmRleCAlIHNyYy5sZW5ndGg7XG4gICAgc2xpZGVJbmRleCA9IChzbGlkZUluZGV4PDApID8gc3JjLmxlbmd0aCtzbGlkZUluZGV4IDogc2xpZGVJbmRleDtcbiAgICBzaG93UGljdHVyZSgpO1xufSIsIiQoZnVuY3Rpb24gKCkge1xuICAgIC8vIGRvdWJsZSBGbMOoY2hlIGVuIGJhcyDDoCBkcm9pdGUgZGUgbGEgZmVuZXRyZSBlbiBwb3NpdGlvbjpmaXhlZCBwb3VyIHJldG91ciDDoCBsJ2FjY2V1aWwgZHUgc2l0ZVxuICAgICQoXCIjc2Nyb2xsXCIpLm9uKFwiY2xpY2tcIiwgZ29Ub0hvbWVTaXRlKTtcbn0pOyAvLyBGaW4gY2hhcmdlbWVudCBwYWdlIHdlYlxuXG4vKipcbiAqIEZvbmN0aW9uIHF1aSB2YSB2ZXJzIGwnYWNjZXVpbCBlbiBzY3JvbGxpbmdcbiAqIEBwYXJhbSB7Kn0gZXZlbnQgXG4gKi9cbmZ1bmN0aW9uIGdvVG9Ib21lU2l0ZSgpIHtcbiAgICAkKCdodG1sJykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogMFxuICAgIH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpICYmIGl0ICE9PSBudWxsKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgU3RyaW5nKGl0KSArICcgYXMgYSBwcm90b3R5cGUnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWZyb20sIG5vLXRocm93LWxpdGVyYWwgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhlYyhvYmplY3QpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcbn07XG4iLCJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB1c2luZ0l0ZXJhdG9yKSB7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPCAyID8gZ2V0SXRlcmF0b3JNZXRob2QoaXQpIDogdXNpbmdJdGVyYXRvcjtcbiAgaWYgKHR5cGVvZiBpdGVyYXRvck1ldGhvZCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBpdGVyYWJsZScpO1xuICB9IHJldHVybiBhbk9iamVjdChpdGVyYXRvck1ldGhvZC5jYWxsKGl0KSk7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBraW5kLCB2YWx1ZSkge1xuICB2YXIgaW5uZXJSZXN1bHQsIGlubmVyRXJyb3I7XG4gIGFuT2JqZWN0KGl0ZXJhdG9yKTtcbiAgdHJ5IHtcbiAgICBpbm5lclJlc3VsdCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAoaW5uZXJSZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpbm5lclJlc3VsdCA9IGlubmVyUmVzdWx0LmNhbGwoaXRlcmF0b3IpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlubmVyRXJyb3IgPSB0cnVlO1xuICAgIGlubmVyUmVzdWx0ID0gZXJyb3I7XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICBpZiAoaW5uZXJFcnJvcikgdGhyb3cgaW5uZXJSZXN1bHQ7XG4gIGFuT2JqZWN0KGlubmVyUmVzdWx0KTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvIC0tIHNhZmUgKi9cbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LXNldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IHt9LnRvU3RyaW5nIDogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gdG9TdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMicgK1xuICAnXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoIVRPX1NUUklOR19UQUdfU1VQUE9SVCkge1xuICByZWRlZmluZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCB0b1N0cmluZywgeyB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsicG9pbnRUYWJsZXR0ZSIsInBvaW50RGVza3RvcCIsIiQiLCJ3aW5kb3ciLCJvbiIsInN3aXRjaEJhbm5lciIsInNjcmVlbiIsIndpZHRoIiwic3JjIiwiZGF0YSIsImF0dHIiLCJ0b29nbGVMb2dvIiwic2xpZGVEb3duIiwic2xpZGVVcCIsIm9wZW5NZW51IiwibmV4dCIsImxpc3RlbkRvY3VtZW50IiwiZG9jdW1lbnQiLCJvbmUiLCJjbG9zZU1lbnUiLCJzbGlkZUluZGV4IiwibWluaWF0dXJlcyIsIm1pbmlhdHVyZSIsInB1c2giLCJvcGVuTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbG9zZU1vZGFsIiwic2hvd1BpY3R1cmUiLCJwbHVzU2xpZGVzIiwicGx1c1NsaWRlc0tleSIsImUiLCJrZXkiLCJvZmYiLCJsZW5ndGgiLCJwYXJzZUludCIsImRhdGFzZXQiLCJwbHVzIiwiZ29Ub0hvbWVTaXRlIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCJdLCJzb3VyY2VSb290IjoiIn0=