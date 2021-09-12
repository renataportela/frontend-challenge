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

  if (cart.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {
      align: "center",
      children: "Your cart is empty."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [cart.map(function (product) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MiniCartProduct__WEBPACK_IMPORTED_MODULE_3__.default, {
        product: product
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.RowBetween, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {
        size: "3",
        children: "Subtotal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {
        size: "4",
        weight: "bold",
        align: "right",
        children: totalCart
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      full: true,
      children: "Go to checkout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjZhOTNlNTQ0NzZkNWEyMTdiNTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUVBLFNBQVNRLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFDdEIsTUFBTUMsSUFBSSxHQUFHUix5REFBWSxDQUFDSSw0Q0FBRCxDQUF6QjtBQUNBLE1BQU1LLFNBQVMsR0FBR1QseURBQVksQ0FBQ0ssaURBQUQsQ0FBOUI7O0FBRUEsTUFBSUcsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCLHdCQUFPLDhEQUFDLGdEQUFEO0FBQU0sV0FBSyxFQUFDLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsZUFDR0YsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQUMsT0FBTztBQUFBLDBCQUNmLDhEQUFDLHFEQUFEO0FBQWtDLGVBQU8sRUFBRUE7QUFBM0MsU0FBc0JBLE9BQU8sQ0FBQ0MsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlO0FBQUEsS0FBaEIsQ0FESCxlQUlFLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0UsOERBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFlLGNBQU0sRUFBQyxNQUF0QjtBQUE2QixhQUFLLEVBQUMsT0FBbkM7QUFBQSxrQkFBNENKO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVFFLDhEQUFDLGtEQUFEO0FBQVEsVUFBSSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQSxrQkFERjtBQVlEOztHQXBCUUY7VUFDTVAsdURBQ0tBOzs7S0FGWE87QUFzQlQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcHAvY2FydC9NaW5pQ2FydEluZm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBdG9tVmFsdWUgfSBmcm9tICdqb3RhaS91dGlscydcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgUm93QmV0d2VlbiwgVGV4dCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5pbXBvcnQgeyBjYXJ0QXRvbSwgdG90YWxDYXJ0QXRvbSB9IGZyb20gJy9zdG9yZSdcclxuXHJcbmltcG9ydCBNaW5pQ2FydFByb2R1Y3QgZnJvbSAnLi9NaW5pQ2FydFByb2R1Y3QnXHJcblxyXG5mdW5jdGlvbiBNaW5pQ2FydEluZm8oKSB7XHJcbiAgY29uc3QgY2FydCA9IHVzZUF0b21WYWx1ZShjYXJ0QXRvbSlcclxuICBjb25zdCB0b3RhbENhcnQgPSB1c2VBdG9tVmFsdWUodG90YWxDYXJ0QXRvbSlcclxuXHJcbiAgaWYgKGNhcnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gPFRleHQgYWxpZ249XCJjZW50ZXJcIj5Zb3VyIGNhcnQgaXMgZW1wdHkuPC9UZXh0PlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtjYXJ0Lm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICA8TWluaUNhcnRQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgKSl9XHJcbiAgICAgIDxSb3dCZXR3ZWVuPlxyXG4gICAgICAgIDxUZXh0IHNpemU9XCIzXCI+U3VidG90YWw8L1RleHQ+XHJcbiAgICAgICAgPFRleHQgc2l6ZT1cIjRcIiB3ZWlnaHQ9XCJib2xkXCIgYWxpZ249XCJyaWdodFwiPnt0b3RhbENhcnR9PC9UZXh0PlxyXG4gICAgICA8L1Jvd0JldHdlZW4+XHJcbiAgICAgIDxCdXR0b24gZnVsbD5HbyB0byBjaGVja291dDwvQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW5pQ2FydEluZm8iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VBdG9tVmFsdWUiLCJCdXR0b24iLCJSb3dCZXR3ZWVuIiwiVGV4dCIsImNhcnRBdG9tIiwidG90YWxDYXJ0QXRvbSIsIk1pbmlDYXJ0UHJvZHVjdCIsIk1pbmlDYXJ0SW5mbyIsImNhcnQiLCJ0b3RhbENhcnQiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9