"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/app/cart/CartButton.js":
/*!*******************************************!*\
  !*** ./components/app/cart/CartButton.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\cart\\CartButton.js";





function CartButton() {
  var count = 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
      size: "2",
      bold: true,
      children: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/SVGs/".concat(count === 0 ? "cart_empty" : "cart_with_items", ".svg"),
      alt: "Cart",
      width: "32",
      height: "32"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = CartButton;
/* harmony default export */ __webpack_exports__["default"] = (CartButton);

var _c;

$RefreshReg$(_c, "CartButton");

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

/***/ "./components/app/cart/index.js":
/*!**************************************!*\
  !*** ./components/app/cart/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartButton": function() { return /* reexport safe */ _CartButton__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _CartButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartButton */ "./components/app/cart/CartButton.js");
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

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var _components_app_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/app/cart */ "./components/app/cart/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/layout/Logo.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\layout\\Header.js",
    _templateObject,
    _templateObject2,
    _templateObject3;









function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(HeaderContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(InnerContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(LogoContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_app_cart__WEBPACK_IMPORTED_MODULE_4__.CartButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = Header;
var HeaderContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  align-items: center;  \n  box-shadow: ", ";\n  padding: ", "px;\n  margin-bottom: ", "px;\n"])), _tokens__WEBPACK_IMPORTED_MODULE_5__.shadow.md, _tokens__WEBPACK_IMPORTED_MODULE_5__.spacing.px.t3, _tokens__WEBPACK_IMPORTED_MODULE_5__.spacing.px.t3);
_c2 = HeaderContainer;
var InnerContainer = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default)(react_grid_system__WEBPACK_IMPORTED_MODULE_3__.Container)(_templateObject2 || (_templateObject2 = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  flex-direction: row;\n"])));
_c3 = InnerContainer;
var LogoContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject3 || (_templateObject3 = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n"])));
_c4 = LogoContainer;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Header");
$RefreshReg$(_c2, "HeaderContainer");
$RefreshReg$(_c3, "InnerContainer");
$RefreshReg$(_c4, "LogoContainer");

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

/***/ "./components/ui/Box.js":
/*!******************************!*\
  !*** ./components/ui/Box.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Box = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div(_c = function _c(_ref) {
  var direction = _ref.direction,
      justify = _ref.justify;
  return {
    display: 'flex',
    flexDirection: direction || null,
    justifyContent: justify || null
  };
});
_c2 = Box;
/* harmony default export */ __webpack_exports__["default"] = (Box);

var _c, _c2;

$RefreshReg$(_c, "Box$styled.div");
$RefreshReg$(_c2, "Box");

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

/***/ "./components/ui/Text.js":
/*!*******************************!*\
  !*** ./components/ui/Text.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tokens */ "./tokens/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject, _templateObject2;






var typographyStyles = function typographyStyles(_ref) {
  var color = _ref.color,
      bold = _ref.bold,
      size = _ref.size;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n  "])), color || 'currentColor', bold ? _tokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily.bold : _tokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily.default, _tokens__WEBPACK_IMPORTED_MODULE_2__.fontSize["t".concat(size)] || 'inherit');
};

var Text = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default.span(_templateObject2 || (_templateObject2 = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  ", "\n"])), typographyStyles);
/* harmony default export */ __webpack_exports__["default"] = (Text);

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

/***/ "./components/ui/index.js":
/*!********************************!*\
  !*** ./components/ui/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": function() { return /* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "Text": function() { return /* reexport safe */ _Text__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./components/ui/Box.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./components/ui/Text.js");
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDRjZWY5OThjOWM4NDE5NDEzZDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7QUFFQSxTQUFTSSxVQUFULEdBQXNCO0FBQ3BCLE1BQU1DLEtBQUssR0FBRyxDQUFkO0FBQ0Esc0JBQ0UsOERBQUMsK0NBQUQ7QUFBQSw0QkFDRSw4REFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQWUsVUFBSSxNQUFuQjtBQUFBLGdCQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLG1EQUFEO0FBQ0UsU0FBRyxrQkFBV0EsS0FBSyxLQUFLLENBQVYsR0FBYyxZQUFkLEdBQTZCLGlCQUF4QyxTQURMO0FBRUUsU0FBRyxFQUFDLE1BRk47QUFHRSxXQUFLLEVBQUMsSUFIUjtBQUlFLFlBQU0sRUFBQztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztLQWZRRDtBQWlCVCwrREFBZUEsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1EsTUFBVCxHQUFrQjtBQUNoQixzQkFDRSw4REFBQyxlQUFEO0FBQUEsMkJBQ0UsOERBQUMsY0FBRDtBQUFBLDhCQUNFLDhEQUFDLGFBQUQ7QUFBQSwrQkFDRSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0UsOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztLQVpRQTtBQWNULElBQU1DLGVBQWUsR0FBR04sd0RBQUgscVNBRUxFLDhDQUZLLEVBR1JDLGtEQUhRLEVBSUZBLGtEQUpFLENBQXJCO01BQU1HO0FBT04sSUFBTUssY0FBYyxHQUFHWCx3REFBTSxDQUFDQyx3REFBRCxDQUFULG1QQUFwQjtNQUFNVTtBQUtOLElBQU1DLGFBQWEsR0FBR1osd0RBQUgsbVFBQW5CO01BQU1ZO0FBTU4sK0RBQWVQLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFFQSxJQUFNVixHQUFHLEdBQUdLLHdEQUFBLE1BQVc7QUFBQSxNQUFHYSxTQUFILFFBQUdBLFNBQUg7QUFBQSxNQUFjQyxPQUFkLFFBQWNBLE9BQWQ7QUFBQSxTQUE2QjtBQUNsREMsSUFBQUEsT0FBTyxFQUFFLE1BRHlDO0FBRWxEQyxJQUFBQSxhQUFhLEVBQUVILFNBQVMsSUFBSSxJQUZzQjtBQUdsREksSUFBQUEsY0FBYyxFQUFFSCxPQUFPLElBQUk7QUFIdUIsR0FBN0I7QUFBQSxDQUFYLENBQVo7TUFBTW5CO0FBTU4sK0RBQWVBLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU0wQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixRQUFVQSxJQUFWO0FBQUEsTUFBZ0JDLElBQWhCLFFBQWdCQSxJQUFoQjtBQUFBLFNBQ3ZCTixtREFEdUIsMFFBRVpJLEtBQUssSUFBSSxjQUZHLEVBR05DLElBQUksR0FBR0osb0RBQUgsR0FBcUJBLHVEQUhuQixFQUlSQyw2Q0FBUSxZQUFLSSxJQUFMLEVBQVIsSUFBd0IsU0FKaEI7QUFBQSxDQUF6Qjs7QUFPQSxJQUFNNUIsSUFBSSxHQUFHSSx5REFBSCxrTkFDTnFCLGdCQURNLENBQVY7QUFJQSwrREFBZXpCLElBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcHAvY2FydC9DYXJ0QnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwcC9jYXJ0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQm94LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL1RleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5cclxuZnVuY3Rpb24gQ2FydEJ1dHRvbigpIHtcclxuICBjb25zdCBjb3VudCA9IDBcclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPFRleHQgc2l6ZT1cIjJcIiBib2xkPlxyXG4gICAgICAgIHtjb3VudH1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9e2AvU1ZHcy8ke2NvdW50ID09PSAwID8gXCJjYXJ0X2VtcHR5XCIgOiBcImNhcnRfd2l0aF9pdGVtc1wifS5zdmdgfVxyXG4gICAgICAgIGFsdD1cIkNhcnRcIlxyXG4gICAgICAgIHdpZHRoPVwiMzJcIlxyXG4gICAgICAgIGhlaWdodD1cIjMyXCJcclxuICAgICAgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRCdXR0b25cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJ0QnV0dG9uIH0gZnJvbSAnLi9DYXJ0QnV0dG9uJ1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSdcclxuXHJcbmltcG9ydCB7IENhcnRCdXR0b24gfSBmcm9tICcvY29tcG9uZW50cy9hcHAvY2FydCdcclxuaW1wb3J0IHsgc2hhZG93LCBzcGFjaW5nIH0gZnJvbSAnL3Rva2VucydcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJ1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyQ29udGFpbmVyPlxyXG4gICAgICA8SW5uZXJDb250YWluZXI+XHJcbiAgICAgICAgPExvZ29Db250YWluZXI+XHJcbiAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgIDwvTG9nb0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPENhcnRCdXR0b24gLz5cclxuICAgICAgPC9Jbm5lckNvbnRhaW5lcj5cclxuICAgIDwvSGVhZGVyQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgSGVhZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXHJcbiAgYm94LXNoYWRvdzogJHtzaGFkb3cubWR9O1xyXG4gIHBhZGRpbmc6ICR7c3BhY2luZy5weC50M31weDtcclxuICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmcucHgudDN9cHg7XHJcbmBcclxuXHJcbmNvbnN0IElubmVyQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gXHJcblxyXG5jb25zdCBMb2dvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmNvbnN0IEJveCA9IHN0eWxlZC5kaXYoKHsgZGlyZWN0aW9uLCBqdXN0aWZ5IH0pID0+ICh7XHJcbiAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIGZsZXhEaXJlY3Rpb246IGRpcmVjdGlvbiB8fCBudWxsLFxyXG4gIGp1c3RpZnlDb250ZW50OiBqdXN0aWZ5IHx8IG51bGwsXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuXHJcbmltcG9ydCB7IGZvbnRGYW1pbHkgfSBmcm9tICcvdG9rZW5zJ1xyXG5pbXBvcnQgeyBmb250U2l6ZSB9IGZyb20gJ3Rva2VucydcclxuXHJcbmNvbnN0IHR5cG9ncmFwaHlTdHlsZXMgPSAoeyBjb2xvciwgYm9sZCwgc2l6ZSB9KSA9PlxyXG4gIGNzc2BcclxuICAgIGNvbG9yOiAke2NvbG9yIHx8ICdjdXJyZW50Q29sb3InfTtcclxuICAgIGZvbnQtZmFtaWx5OiAke2JvbGQgPyBmb250RmFtaWx5LmJvbGQgOiBmb250RmFtaWx5LmRlZmF1bHR9O1xyXG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplW2B0JHtzaXplfWBdIHx8ICdpbmhlcml0J307XHJcbiAgYFxyXG5cclxuY29uc3QgVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gICR7dHlwb2dyYXBoeVN0eWxlc31cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dFxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gJy4vQm94J1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHQgfSBmcm9tICcuL1RleHQnXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiQm94IiwiVGV4dCIsIkNhcnRCdXR0b24iLCJjb3VudCIsImRlZmF1bHQiLCJzdHlsZWQiLCJDb250YWluZXIiLCJzaGFkb3ciLCJzcGFjaW5nIiwiTG9nbyIsIkhlYWRlciIsIkhlYWRlckNvbnRhaW5lciIsImRpdiIsIm1kIiwicHgiLCJ0MyIsIklubmVyQ29udGFpbmVyIiwiTG9nb0NvbnRhaW5lciIsImRpcmVjdGlvbiIsImp1c3RpZnkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY3NzIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwidHlwb2dyYXBoeVN0eWxlcyIsImNvbG9yIiwiYm9sZCIsInNpemUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==