"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/app/cart/MiniCartInfo.js":
/*!*********************************************!*\
  !*** ./components/app/cart/MiniCartInfo.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jotai/utils */ "./node_modules/jotai/esm/utils.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _MiniCartProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MiniCartProduct */ "./components/app/cart/MiniCartProduct.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\cart\\MiniCartInfo.js",
    _s = $RefreshSig$();









function MiniCartInfo() {
  _s();

  var _this = this;

  var cart = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_5__.useAtomValue)(_store__WEBPACK_IMPORTED_MODULE_2__.cartAtom);
  var totalCart = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_5__.useAtomValue)(_store__WEBPACK_IMPORTED_MODULE_2__.totalCartAtom);
  console.log('cart', cart);

  if (cart.length) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {
      align: "center",
      children: "Your cart is empty."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [cart.map(function (product) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MiniCartProduct__WEBPACK_IMPORTED_MODULE_3__.default, {
        product: product
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.RowBetween, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {
        size: "3",
        children: "Subtotal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {
        size: "4",
        weight: "bold",
        align: "right",
        children: totalCart
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      full: true,
      children: "Go to checkout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(MiniCartInfo, "WnIC2TTBqaaNF0iIl4/R7gKFM04=", false, function () {
  return [jotai_utils__WEBPACK_IMPORTED_MODULE_5__.useAtomValue, jotai_utils__WEBPACK_IMPORTED_MODULE_5__.useAtomValue];
});

_c = MiniCartInfo;
/* harmony default export */ __webpack_exports__["default"] = (MiniCartInfo);

var _c;

$RefreshReg$(_c, "MiniCartInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGEzYzhkNWFhOGEyMWM3MDY0ZjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUVBLFNBQVNRLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFDdEIsTUFBTUMsSUFBSSxHQUFHUix5REFBWSxDQUFDSSw0Q0FBRCxDQUF6QjtBQUNBLE1BQU1LLFNBQVMsR0FBR1QseURBQVksQ0FBQ0ssaURBQUQsQ0FBOUI7QUFFQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkgsSUFBcEI7O0FBRUEsTUFBSUEsSUFBSSxDQUFDSSxNQUFULEVBQWlCO0FBQ2Ysd0JBQU8sOERBQUMsZ0RBQUQ7QUFBTSxXQUFLLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSxlQUNHSixJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFBQyxPQUFPO0FBQUEsMEJBQ2YsOERBQUMscURBQUQ7QUFBa0MsZUFBTyxFQUFFQTtBQUEzQyxTQUFzQkEsT0FBTyxDQUFDQyxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGU7QUFBQSxLQUFoQixDQURILGVBSUUsOERBQUMsc0RBQUQ7QUFBQSw4QkFDRSw4REFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQWUsY0FBTSxFQUFDLE1BQXRCO0FBQTZCLGFBQUssRUFBQyxPQUFuQztBQUFBLGtCQUE0Q047QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBUUUsOERBQUMsa0RBQUQ7QUFBUSxVQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBLGtCQURGO0FBWUQ7O0dBdEJRRjtVQUNNUCx1REFDS0E7OztLQUZYTztBQXdCVCwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwcC9jYXJ0L01pbmlDYXJ0SW5mby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF0b21WYWx1ZSB9IGZyb20gJ2pvdGFpL3V0aWxzJ1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBSb3dCZXR3ZWVuLCBUZXh0IH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcbmltcG9ydCB7IGNhcnRBdG9tLCB0b3RhbENhcnRBdG9tIH0gZnJvbSAnL3N0b3JlJ1xyXG5cclxuaW1wb3J0IE1pbmlDYXJ0UHJvZHVjdCBmcm9tICcuL01pbmlDYXJ0UHJvZHVjdCdcclxuXHJcbmZ1bmN0aW9uIE1pbmlDYXJ0SW5mbygpIHtcclxuICBjb25zdCBjYXJ0ID0gdXNlQXRvbVZhbHVlKGNhcnRBdG9tKVxyXG4gIGNvbnN0IHRvdGFsQ2FydCA9IHVzZUF0b21WYWx1ZSh0b3RhbENhcnRBdG9tKVxyXG5cclxuICBjb25zb2xlLmxvZygnY2FydCcsIGNhcnQpXHJcblxyXG4gIGlmIChjYXJ0Lmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIDxUZXh0IGFsaWduPVwiY2VudGVyXCI+WW91ciBjYXJ0IGlzIGVtcHR5LjwvVGV4dD5cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y2FydC5tYXAocHJvZHVjdCA9PiAoXHJcbiAgICAgICAgPE1pbmlDYXJ0UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgICA8Um93QmV0d2Vlbj5cclxuICAgICAgICA8VGV4dCBzaXplPVwiM1wiPlN1YnRvdGFsPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IHNpemU9XCI0XCIgd2VpZ2h0PVwiYm9sZFwiIGFsaWduPVwicmlnaHRcIj57dG90YWxDYXJ0fTwvVGV4dD5cclxuICAgICAgPC9Sb3dCZXR3ZWVuPlxyXG4gICAgICA8QnV0dG9uIGZ1bGw+R28gdG8gY2hlY2tvdXQ8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluaUNhcnRJbmZvIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQXRvbVZhbHVlIiwiQnV0dG9uIiwiUm93QmV0d2VlbiIsIlRleHQiLCJjYXJ0QXRvbSIsInRvdGFsQ2FydEF0b20iLCJNaW5pQ2FydFByb2R1Y3QiLCJNaW5pQ2FydEluZm8iLCJjYXJ0IiwidG90YWxDYXJ0IiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=