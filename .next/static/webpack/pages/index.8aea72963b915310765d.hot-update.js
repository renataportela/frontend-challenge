"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./tokens/index.js":
/*!*************************!*\
  !*** ./tokens/index.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shadow": function() { return /* reexport safe */ _shadow__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "spacing": function() { return /* reexport safe */ _spacing__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shadow */ "./tokens/shadow.js");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spacing */ "./tokens/spacing.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography */ "./tokens/typography.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _typography__WEBPACK_IMPORTED_MODULE_2__) if(["default","shadow","spacing"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _typography__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
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

/***/ "./tokens/typography.js":
/*!******************************!*\
  !*** ./tokens/typography.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontFamily": function() { return /* binding */ fontFamily; },
/* harmony export */   "fontSize": function() { return /* binding */ fontSize; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var fontFamily = {
  "default": '"Azo Sans", sans-serif'
}; // export const fontWeight = {
//   reFontWeightNormal: 300,
//   reFontWeightMedium: 400,
// };

var fontSize = {
  px4: '16px'
}; // export const lineHeight = {
//   px: {
//     reLineHeight1: '10',
//     reLineHeight2: '12',
//     reLineHeight3: '14',
//     reLineHeight4: '16',
//     reLineHeight5: '20',
//     reLineHeight6: '27',
//     reLineHeight7: '34',
//     reLineHeight8: '46',
//   },
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGFlYTcyOTYzYjkxNTMxMDc2NWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hPLElBQU1HLFVBQVUsR0FBRztBQUN4QixhQUFTO0FBRGUsQ0FBbkIsRUFJUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQyxRQUFRLEdBQUc7QUFDdEJDLEVBQUFBLEdBQUcsRUFBRTtBQURpQixDQUFqQixFQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi90b2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3Rva2Vucy90eXBvZ3JhcGh5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgc2hhZG93IH0gZnJvbSAnLi9zaGFkb3cnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3BhY2luZyB9IGZyb20gJy4vc3BhY2luZydcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vdHlwb2dyYXBoeSdcclxuIiwiZXhwb3J0IGNvbnN0IGZvbnRGYW1pbHkgPSB7XHJcbiAgZGVmYXVsdDogJ1wiQXpvIFNhbnNcIiwgc2Fucy1zZXJpZicsXHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZm9udFdlaWdodCA9IHtcclxuLy8gICByZUZvbnRXZWlnaHROb3JtYWw6IDMwMCxcclxuLy8gICByZUZvbnRXZWlnaHRNZWRpdW06IDQwMCxcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb250U2l6ZSA9IHtcclxuICBweDQ6ICcxNnB4JyxcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsaW5lSGVpZ2h0ID0ge1xyXG4vLyAgIHB4OiB7XHJcbi8vICAgICByZUxpbmVIZWlnaHQxOiAnMTAnLFxyXG4vLyAgICAgcmVMaW5lSGVpZ2h0MjogJzEyJyxcclxuLy8gICAgIHJlTGluZUhlaWdodDM6ICcxNCcsXHJcbi8vICAgICByZUxpbmVIZWlnaHQ0OiAnMTYnLFxyXG4vLyAgICAgcmVMaW5lSGVpZ2h0NTogJzIwJyxcclxuLy8gICAgIHJlTGluZUhlaWdodDY6ICcyNycsXHJcbi8vICAgICByZUxpbmVIZWlnaHQ3OiAnMzQnLFxyXG4vLyAgICAgcmVMaW5lSGVpZ2h0ODogJzQ2JyxcclxuLy8gICB9LFxyXG4vLyB9O1xyXG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsInNoYWRvdyIsInNwYWNpbmciLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJweDQiXSwic291cmNlUm9vdCI6IiJ9