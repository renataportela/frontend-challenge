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
  // TODO: integration
  var count = 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
      size: "2",
      weight: "bold",
      children: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/SVGs/".concat(count === 0 ? "cart_empty" : "cart_with_items", ".svg"),
      alt: "Cart",
      width: "20",
      height: "24"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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

/***/ "./components/ui/Text.js":
/*!*******************************!*\
  !*** ./components/ui/Text.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject, _templateObject2;





var typographyStyles = function typographyStyles(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$family = _ref.family,
      family = _ref$family === void 0 ? _tokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily.default : _ref$family,
      size = _ref.size,
      _ref$lineHeight = _ref.lineHeight,
      lineHeight = _ref$lineHeight === void 0 ? size : _ref$lineHeight,
      mb = _ref.mb,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'normal' : _ref$weight;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin-bottom: ", ";\n  "])), color, family, _tokens__WEBPACK_IMPORTED_MODULE_2__.fontSize["t".concat(size)] || "inherit", weight, _tokens__WEBPACK_IMPORTED_MODULE_2__.lineHeight["t".concat(lineHeight)] || "inherit", _tokens__WEBPACK_IMPORTED_MODULE_2__.spacing["t".concat(mb)] || 0);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzk4NTAxNDFkOGJjMzA2MzFmMzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7QUFFQSxTQUFTSSxVQUFULEdBQXNCO0FBQ3BCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQWQ7QUFFQSxzQkFDRSw4REFBQywrQ0FBRDtBQUFLLGNBQVUsRUFBQyxRQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBZSxZQUFNLEVBQUMsTUFBdEI7QUFBQSxnQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyxtREFBRDtBQUNFLFNBQUcsa0JBQVdBLEtBQUssS0FBSyxDQUFWLEdBQWMsWUFBZCxHQUE2QixpQkFBeEMsU0FETDtBQUVFLFNBQUcsRUFBQyxNQUZOO0FBR0UsV0FBSyxFQUFDLElBSFI7QUFJRSxZQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7S0FqQlFEO0FBbUJULCtEQUFlQSxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7O0FBT0EsSUFBTVMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLHdCQUN2QkMsS0FEdUI7QUFBQSxNQUN2QkEsS0FEdUIsMkJBQ2YsY0FEZTtBQUFBLHlCQUV2QkMsTUFGdUI7QUFBQSxNQUV2QkEsTUFGdUIsNEJBRWRQLHVEQUZjO0FBQUEsTUFHdkJRLElBSHVCLFFBR3ZCQSxJQUh1QjtBQUFBLDZCQUl2Qk4sVUFKdUI7QUFBQSxNQUl2QkEsVUFKdUIsZ0NBSVZNLElBSlU7QUFBQSxNQUt2QkMsRUFMdUIsUUFLdkJBLEVBTHVCO0FBQUEseUJBTXZCQyxNQU51QjtBQUFBLE1BTXZCQSxNQU51Qiw0QkFNZCxRQU5jO0FBQUEsU0FRdkJYLG1EQVJ1QixvVkFTWk8sS0FUWSxFQVVOQyxNQVZNLEVBV1JOLDZDQUFRLFlBQUtPLElBQUwsRUFBUixJQUF3QixTQVhoQixFQVlORSxNQVpNLEVBYU5QLCtDQUFnQixZQUFLRCxVQUFMLEVBQWhCLElBQXNDLFNBYmhDLEVBY0pFLDRDQUFPLFlBQUtLLEVBQUwsRUFBUCxJQUFxQixDQWRqQjtBQUFBLENBQXpCOztBQWlCQSxJQUFNZCxJQUFJLEdBQUdHLHlEQUFILGtOQUNOTyxnQkFETSxDQUFWO0FBSUEsK0RBQWVWLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcHAvY2FydC9DYXJ0QnV0dG9uLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL1RleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5cclxuZnVuY3Rpb24gQ2FydEJ1dHRvbigpIHtcclxuICAvLyBUT0RPOiBpbnRlZ3JhdGlvblxyXG4gIGNvbnN0IGNvdW50ID0gMFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgIDxUZXh0IHNpemU9XCIyXCIgd2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgIHtjb3VudH1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9e2AvU1ZHcy8ke2NvdW50ID09PSAwID8gXCJjYXJ0X2VtcHR5XCIgOiBcImNhcnRfd2l0aF9pdGVtc1wifS5zdmdgfVxyXG4gICAgICAgIGFsdD1cIkNhcnRcIlxyXG4gICAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICAgIGhlaWdodD1cIjI0XCJcclxuICAgICAgLz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRCdXR0b25cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5cclxuaW1wb3J0IHtcclxuICBmb250RmFtaWx5LFxyXG4gIGZvbnRTaXplLFxyXG4gIGxpbmVIZWlnaHQgYXMgbGluZUhlaWdodFRva2VucyxcclxuICBzcGFjaW5nLFxyXG59IGZyb20gXCIvdG9rZW5zXCI7XHJcblxyXG5jb25zdCB0eXBvZ3JhcGh5U3R5bGVzID0gKHtcclxuICBjb2xvciA9ICdjdXJyZW50Q29sb3InLFxyXG4gIGZhbWlseSA9IGZvbnRGYW1pbHkuZGVmYXVsdCxcclxuICBzaXplLFxyXG4gIGxpbmVIZWlnaHQgPSBzaXplLFxyXG4gIG1iLFxyXG4gIHdlaWdodCA9ICdub3JtYWwnXHJcbn0pID0+XHJcbiAgY3NzYFxyXG4gICAgY29sb3I6ICR7Y29sb3J9O1xyXG4gICAgZm9udC1mYW1pbHk6ICR7ZmFtaWx5fTtcclxuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZVtgdCR7c2l6ZX1gXSB8fCBcImluaGVyaXRcIn07XHJcbiAgICBmb250LXdlaWdodDogJHt3ZWlnaHR9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7bGluZUhlaWdodFRva2Vuc1tgdCR7bGluZUhlaWdodH1gXSB8fCBcImluaGVyaXRcIn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmdbYHQke21ifWBdIHx8IDB9O1xyXG4gIGA7XHJcblxyXG5jb25zdCBUZXh0ID0gc3R5bGVkLnNwYW5gXHJcbiAgJHt0eXBvZ3JhcGh5U3R5bGVzfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiQm94IiwiVGV4dCIsIkNhcnRCdXR0b24iLCJjb3VudCIsInN0eWxlZCIsImNzcyIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0VG9rZW5zIiwic3BhY2luZyIsInR5cG9ncmFwaHlTdHlsZXMiLCJjb2xvciIsImZhbWlseSIsInNpemUiLCJtYiIsIndlaWdodCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9