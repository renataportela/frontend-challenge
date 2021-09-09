"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/app/product/ProductCard.js":
/*!***********************************************!*\
  !*** ./components/app/product/ProductCard.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _ProductCardDetailText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductCardDetailText */ "./components/app/product/ProductCardDetailText.js");
/* harmony import */ var _ProductCardImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductCardImage */ "./components/app/product/ProductCardImage.js");
/* harmony import */ var _ProductCardPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductCardPrice */ "./components/app/product/ProductCardPrice.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCard.js",
    _templateObject;










function ProductCard(_ref) {
  var productId = _ref.productId,
      shortName = _ref.shortName,
      image = _ref.image,
      price = _ref.price,
      originalPrice = _ref.originalPrice,
      packageContent = _ref.packageContent,
      review = _ref.review;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Container, {
    centered: true,
    wrap: "wrap",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ProductCardImage__WEBPACK_IMPORTED_MODULE_6__.default, {
      image: image,
      alt: shortName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
      padding: "4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {
        as: "h4",
        size: "5",
        children: shortName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Detail, {
        text: "Price",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ProductCardPrice__WEBPACK_IMPORTED_MODULE_7__.default, {
          price: price,
          originalPrice: originalPrice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Detail, {
        text: "Package",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: packageContent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Detail, {
        text: "Review"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_c = ProductCard;

function Detail(_ref2) {
  var text = _ref2.text,
      children = _ref2.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    justify: "space-between",
    alignItems: "center",
    style: {
      marginBottom: _tokens__WEBPACK_IMPORTED_MODULE_4__.spacing.t4
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_c2 = Detail;
var Container = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  max-width: 567px;\n  margin-bottom: ", ";\n  background-color: ", ";\n"])), _tokens__WEBPACK_IMPORTED_MODULE_4__.spacing.t4, _tokens__WEBPACK_IMPORTED_MODULE_4__.colors.grey100);
_c3 = Container;
/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

var _c, _c2, _c3;

$RefreshReg$(_c, "ProductCard");
$RefreshReg$(_c2, "Detail");
$RefreshReg$(_c3, "Container");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/app/product/ProductCardDetailText.js":
/*!*********************************************************!*\
  !*** ./components/app/product/ProductCardDetailText.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["children"];
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCardDetailText.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function ProductCardDetailText(_ref) {
  var children = _ref.children,
      props = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Text, _objectSpread(_objectSpread({
    size: "3",
    color: "grey500"
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

_c = ProductCardDetailText;
/* harmony default export */ __webpack_exports__["default"] = (ProductCardDetailText);

var _c;

$RefreshReg$(_c, "ProductCardDetailText");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/app/product/ProductCardImage.js":
/*!****************************************************!*\
  !*** ./components/app/product/ProductCardImage.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCardImage.js",
    _templateObject,
    _templateObject2;







function ProductCardImage(_ref) {
  var image = _ref.image,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? 'Photo' : _ref$alt;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {
    centered: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledImg, {
      src: image,
      alt: alt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = ProductCardImage;
var Container = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default)(_components_ui__WEBPACK_IMPORTED_MODULE_4__.Box)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  max-width: 220px;\n  height: 185px;\n  max-height: 185px;\n  position: relative;\n  overflow: hidden;\n"])));
_c2 = Container;
var StyledImg = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default)((next_image__WEBPACK_IMPORTED_MODULE_3___default()))(_templateObject2 || (_templateObject2 = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  height: 100%;\n  width: auto;\n"])));
_c3 = StyledImg;
/* harmony default export */ __webpack_exports__["default"] = (ProductCardImage);

var _c, _c2, _c3;

$RefreshReg$(_c, "ProductCardImage");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "StyledImg");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/app/product/ProductCardPrice.js":
/*!****************************************************!*\
  !*** ./components/app/product/ProductCardPrice.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _ProductCardDetailText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCardDetailText */ "./components/app/product/ProductCardDetailText.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCardPrice.js";






function ProductCardPrice(_ref) {
  var price = _ref.price,
      originalPrice = _ref.originalPrice;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [!!originalPrice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_3__.default, {
      lineThrough: true,
      style: {
        marginRight: _tokens__WEBPACK_IMPORTED_MODULE_2__.spacing.t3
      },
      children: originalPrice
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {
      color: "primary",
      size: "3",
      weight: "bold",
      children: price
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_c = ProductCardPrice;
/* harmony default export */ __webpack_exports__["default"] = (ProductCardPrice);

var _c;

$RefreshReg$(_c, "ProductCardPrice");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/app/product/index.js":
/*!*****************************************!*\
  !*** ./components/app/product/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCard": function() { return /* reexport safe */ _ProductCard__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCard */ "./components/app/product/ProductCard.js");
/* module decorator */ module = __webpack_require__.hmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_app_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/app/product */ "./components/app/product/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\pages\\index.js";







function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Heading, {
      size: "3",
      children: "Store"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {
      as: "p",
      mb: "7",
      children: "Explore our vast selection of premium products."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_app_product__WEBPACK_IMPORTED_MODULE_1__.ProductCard, {
      productId: "1",
      shortName: "Barkyn Salmon Crisps",
      image: "/PNGs/food.png",
      price: "2,24",
      originalPrice: "2,29",
      review: 5
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

HomePage.getLayout = function getLayout(page) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {
    children: page
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
};

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzI2ZmU5NzY0YjA2YTA0ZjVjMzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1MsV0FBVCxPQUFvRztBQUFBLE1BQTdFQyxTQUE2RSxRQUE3RUEsU0FBNkU7QUFBQSxNQUFsRUMsU0FBa0UsUUFBbEVBLFNBQWtFO0FBQUEsTUFBdkRDLEtBQXVELFFBQXZEQSxLQUF1RDtBQUFBLE1BQWhEQyxLQUFnRCxRQUFoREEsS0FBZ0Q7QUFBQSxNQUF6Q0MsYUFBeUMsUUFBekNBLGFBQXlDO0FBQUEsTUFBMUJDLGNBQTBCLFFBQTFCQSxjQUEwQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUNsRyxzQkFDRSw4REFBQyxTQUFEO0FBQVcsWUFBUSxNQUFuQjtBQUFvQixRQUFJLEVBQUMsTUFBekI7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFXLFdBQUssRUFBRUosS0FBbEI7QUFBeUIsU0FBRyxFQUFFRDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFLLGFBQU8sRUFBQyxHQUFiO0FBQUEsOEJBQ0UsOERBQUMsZ0RBQUQ7QUFBTSxVQUFFLEVBQUMsSUFBVDtBQUFjLFlBQUksRUFBQyxHQUFuQjtBQUFBLGtCQUF3QkE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsTUFBRDtBQUFRLFlBQUksRUFBQyxPQUFiO0FBQUEsK0JBQ0UsOERBQUMsc0RBQUQ7QUFBTyxlQUFLLEVBQUVFLEtBQWQ7QUFBcUIsdUJBQWEsRUFBRUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtFLDhEQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUMsU0FBYjtBQUFBLCtCQUNFLDhEQUFD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QUFBQSxjQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcHAvcHJvZHVjdC9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcHAvcHJvZHVjdC9Qcm9kdWN0Q2FyZERldGFpbFRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXBwL3Byb2R1Y3QvUHJvZHVjdENhcmRJbWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcHAvcHJvZHVjdC9Qcm9kdWN0Q2FyZFByaWNlLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwcC9wcm9kdWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5cclxuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcbmltcG9ydCB7IGNvbG9ycywgc3BhY2luZyB9IGZyb20gJy90b2tlbnMnXHJcblxyXG5pbXBvcnQgRGV0YWlsVGV4dCBmcm9tICcuL1Byb2R1Y3RDYXJkRGV0YWlsVGV4dCdcclxuaW1wb3J0IENhcmRJbWFnZSBmcm9tICcuL1Byb2R1Y3RDYXJkSW1hZ2UnXHJcbmltcG9ydCBQcmljZSBmcm9tICcuL1Byb2R1Y3RDYXJkUHJpY2UnXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IHByb2R1Y3RJZCwgc2hvcnROYW1lLCBpbWFnZSwgcHJpY2UsIG9yaWdpbmFsUHJpY2UsIHBhY2thZ2VDb250ZW50LCByZXZpZXcgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNlbnRlcmVkIHdyYXA9XCJ3cmFwXCI+XHJcbiAgICAgIDxDYXJkSW1hZ2UgaW1hZ2U9e2ltYWdlfSBhbHQ9e3Nob3J0TmFtZX0gLz5cclxuICAgICAgPEJveCBwYWRkaW5nPVwiNFwiPlxyXG4gICAgICAgIDxUZXh0IGFzPVwiaDRcIiBzaXplPVwiNVwiPntzaG9ydE5hbWV9PC9UZXh0PlxyXG4gICAgICAgIDxEZXRhaWwgdGV4dD1cIlByaWNlXCI+XHJcbiAgICAgICAgICA8UHJpY2UgcHJpY2U9e3ByaWNlfSBvcmlnaW5hbFByaWNlPXtvcmlnaW5hbFByaWNlfSAvPlxyXG4gICAgICAgIDwvRGV0YWlsPlxyXG4gICAgICAgIDxEZXRhaWwgdGV4dD1cIlBhY2thZ2VcIj5cclxuICAgICAgICAgIDxEZXRhaWxUZXh0PntwYWNrYWdlQ29udGVudH08L0RldGFpbFRleHQ+XHJcbiAgICAgICAgPC9EZXRhaWw+XHJcbiAgICAgICAgPERldGFpbCB0ZXh0PVwiUmV2aWV3XCI+PC9EZXRhaWw+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEZXRhaWwoeyB0ZXh0LCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3gganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBzcGFjaW5nLnQ0IH19PlxyXG4gICAgICA8RGV0YWlsVGV4dD57dGV4dH08L0RldGFpbFRleHQ+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgXHJcbiAgbWF4LXdpZHRoOiA1NjdweDtcclxuICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmcudDR9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXkxMDB9O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0Q2FyZERldGFpbFRleHQoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiA8VGV4dCBzaXplPVwiM1wiIGNvbG9yPVwiZ3JleTUwMFwiIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvVGV4dD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmREZXRhaWxUZXh0XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0Q2FyZEltYWdlKHsgaW1hZ2UsIGFsdCA9ICdQaG90bycgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNlbnRlcmVkPlxyXG4gICAgICA8U3R5bGVkSW1nIHNyYz17aW1hZ2V9IGFsdD17YWx0fSAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQm94KWBcclxuICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gIGhlaWdodDogMTg1cHg7XHJcbiAgbWF4LWhlaWdodDogMTg1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmBcclxuXHJcbmNvbnN0IFN0eWxlZEltZyA9IHN0eWxlZChJbWFnZSlgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZEltYWdlXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuaW1wb3J0IHsgc3BhY2luZyB9IGZyb20gJy90b2tlbnMnXHJcblxyXG5pbXBvcnQgRGV0YWlsVGV4dCBmcm9tICcuL1Byb2R1Y3RDYXJkRGV0YWlsVGV4dCdcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkUHJpY2UoeyBwcmljZSwgb3JpZ2luYWxQcmljZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHshIW9yaWdpbmFsUHJpY2UgJiYgKFxyXG4gICAgICAgIDxEZXRhaWxUZXh0XHJcbiAgICAgICAgICBsaW5lVGhyb3VnaFxyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IHNwYWNpbmcudDMgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7b3JpZ2luYWxQcmljZX1cclxuICAgICAgICA8L0RldGFpbFRleHQ+XHJcbiAgICAgICl9XHJcbiAgICAgIDxUZXh0IGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCIzXCIgd2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgIHtwcmljZX1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZFByaWNlXHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvZHVjdENhcmQgfSBmcm9tICcuL1Byb2R1Y3RDYXJkJ1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0Q2FyZCB9IGZyb20gJy9jb21wb25lbnRzL2FwcC9wcm9kdWN0J1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcvY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IEhlYWRpbmcsIFRleHQgfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGluZyBzaXplPVwiM1wiPlN0b3JlPC9IZWFkaW5nPlxyXG4gICAgICA8VGV4dCBhcz1cInBcIiBtYj1cIjdcIj5cclxuICAgICAgICBFeHBsb3JlIG91ciB2YXN0IHNlbGVjdGlvbiBvZiBwcmVtaXVtIHByb2R1Y3RzLlxyXG4gICAgICA8L1RleHQ+XHJcblxyXG4gICAgICA8UHJvZHVjdENhcmRcclxuICAgICAgICBwcm9kdWN0SWQ9XCIxXCJcclxuICAgICAgICBzaG9ydE5hbWU9XCJCYXJreW4gU2FsbW9uIENyaXNwc1wiXHJcbiAgICAgICAgaW1hZ2U9XCIvUE5Hcy9mb29kLnBuZ1wiXHJcbiAgICAgICAgcHJpY2U9XCIyLDI0XCJcclxuICAgICAgICBvcmlnaW5hbFByaWNlPVwiMiwyOVwiXHJcbiAgICAgICAgcmV2aWV3PXs1fVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG5cclxuSG9tZVBhZ2UuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gZ2V0TGF5b3V0KHBhZ2UpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAge3BhZ2V9XHJcbiAgICA8L0xheW91dD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQm94IiwiVGV4dCIsImNvbG9ycyIsInNwYWNpbmciLCJEZXRhaWxUZXh0IiwiQ2FyZEltYWdlIiwiUHJpY2UiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3RJZCIsInNob3J0TmFtZSIsImltYWdlIiwicHJpY2UiLCJvcmlnaW5hbFByaWNlIiwicGFja2FnZUNvbnRlbnQiLCJyZXZpZXciLCJEZXRhaWwiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJtYXJnaW5Cb3R0b20iLCJ0NCIsIkNvbnRhaW5lciIsImdyZXkxMDAiLCJQcm9kdWN0Q2FyZERldGFpbFRleHQiLCJwcm9wcyIsIkltYWdlIiwiUHJvZHVjdENhcmRJbWFnZSIsImFsdCIsIlN0eWxlZEltZyIsIlByb2R1Y3RDYXJkUHJpY2UiLCJtYXJnaW5SaWdodCIsInQzIiwiZGVmYXVsdCIsIkxheW91dCIsIkhlYWRpbmciLCJIb21lUGFnZSIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9