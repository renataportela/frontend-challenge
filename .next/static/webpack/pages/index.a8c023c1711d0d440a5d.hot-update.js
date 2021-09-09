"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ui/Box.js":
/*!******************************!*\
  !*** ./components/ui/Box.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var Box = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div(_c = function _c(_ref) {
  var bgColor = _ref.bgColor,
      direction = _ref.direction,
      justify = _ref.justify,
      alignItems = _ref.alignItems;
  return {
    display: 'flex',
    flexDirection: direction || null,
    justifyContent: justify || null,
    alignItems: alignItems || null,
    backgroundColor: _tokens__WEBPACK_IMPORTED_MODULE_1__.colors[bgColor] || null
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

/***/ "./tokens/colors.js":
/*!**************************!*\
  !*** ./tokens/colors.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* harmony default export */ __webpack_exports__["default"] = ({
  grey100: '#fafafa'
});

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

/***/ "./tokens/index.js":
/*!*************************!*\
  !*** ./tokens/index.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": function() { return /* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "shadow": function() { return /* reexport safe */ _shadow__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "spacing": function() { return /* reexport safe */ _spacing__WEBPACK_IMPORTED_MODULE_2__.default; }
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./tokens/colors.js");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadow */ "./tokens/shadow.js");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spacing */ "./tokens/spacing.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography */ "./tokens/typography.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _typography__WEBPACK_IMPORTED_MODULE_3__) if(["default","colors","shadow","spacing"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _typography__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYThjMDIzYzE3MTFkMGQ0NDBhNWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1FLEdBQUcsR0FBR0Ysd0RBQUEsTUFBVztBQUFBLE1BQUdJLE9BQUgsUUFBR0EsT0FBSDtBQUFBLE1BQVlDLFNBQVosUUFBWUEsU0FBWjtBQUFBLE1BQXVCQyxPQUF2QixRQUF1QkEsT0FBdkI7QUFBQSxNQUFnQ0MsVUFBaEMsUUFBZ0NBLFVBQWhDO0FBQUEsU0FBa0Q7QUFDdkVDLElBQUFBLE9BQU8sRUFBRSxNQUQ4RDtBQUV2RUMsSUFBQUEsYUFBYSxFQUFFSixTQUFTLElBQUksSUFGMkM7QUFHdkVLLElBQUFBLGNBQWMsRUFBRUosT0FBTyxJQUFJLElBSDRDO0FBSXZFQyxJQUFBQSxVQUFVLEVBQUVBLFVBQVUsSUFBSSxJQUo2QztBQUt2RUksSUFBQUEsZUFBZSxFQUFFViwyQ0FBTSxDQUFDRyxPQUFELENBQU4sSUFBbUI7QUFMbUMsR0FBbEQ7QUFBQSxDQUFYLENBQVo7TUFBTUY7QUFRTiwrREFBZUEsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLCtEQUFlO0FBQ2JVLEVBQUFBLE9BQU8sRUFBRTtBQURJLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Cb3guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3Rva2Vucy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3Rva2Vucy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy90b2tlbnMnXHJcblxyXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2KCh7IGJnQ29sb3IsIGRpcmVjdGlvbiwganVzdGlmeSwgYWxpZ25JdGVtcyB9KSA9PiAoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb24gfHwgbnVsbCxcclxuICBqdXN0aWZ5Q29udGVudDoganVzdGlmeSB8fCBudWxsLFxyXG4gIGFsaWduSXRlbXM6IGFsaWduSXRlbXMgfHwgbnVsbCxcclxuICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tiZ0NvbG9yXSB8fCBudWxsLFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveFxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZ3JleTEwMDogJyNmYWZhZmEnLFxyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY29sb3JzIH0gZnJvbSAnLi9jb2xvcnMnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2hhZG93IH0gZnJvbSAnLi9zaGFkb3cnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3BhY2luZyB9IGZyb20gJy4vc3BhY2luZydcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vdHlwb2dyYXBoeSdcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImNvbG9ycyIsIkJveCIsImRpdiIsImJnQ29sb3IiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5IiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJncmV5MTAwIiwiZGVmYXVsdCIsInNoYWRvdyIsInNwYWNpbmciXSwic291cmNlUm9vdCI6IiJ9