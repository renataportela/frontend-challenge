"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
  var bold = _ref.bold,
      color = _ref.color,
      _ref$family = _ref.family,
      family = _ref$family === void 0 ? _tokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily.default : _ref$family,
      size = _ref.size,
      _ref$lineHeight = _ref.lineHeight,
      lineHeight = _ref$lineHeight === void 0 ? size : _ref$lineHeight,
      mb = _ref.mb;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin-bottom: ", ";\n  "])), color || "currentColor", bold ? _tokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily.bold : family, _tokens__WEBPACK_IMPORTED_MODULE_2__.fontSize["t".concat(size)] || "inherit", bold ? "bold" : "inherit", _tokens__WEBPACK_IMPORTED_MODULE_2__.lineHeight["t".concat(lineHeight)] || "inherit", _tokens__WEBPACK_IMPORTED_MODULE_2__.spacing["t".concat(mb)] || 0);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\pages\\index.js";






function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Heading, {
      size: "3",
      children: "Store"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
      mb: "7",
      children: "Explore our vast selection of premium products."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

HomePage.getLayout = function getLayout(page) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {
    children: page
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTFmZTJhZjBjMzFhYTdkZDI4YTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQU9BLElBQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUN2QkMsSUFEdUIsUUFDdkJBLElBRHVCO0FBQUEsTUFFdkJDLEtBRnVCLFFBRXZCQSxLQUZ1QjtBQUFBLHlCQUd2QkMsTUFIdUI7QUFBQSxNQUd2QkEsTUFIdUIsNEJBR2RSLHVEQUhjO0FBQUEsTUFJdkJTLElBSnVCLFFBSXZCQSxJQUp1QjtBQUFBLDZCQUt2QlAsVUFMdUI7QUFBQSxNQUt2QkEsVUFMdUIsZ0NBS1ZPLElBTFU7QUFBQSxNQU12QkMsRUFOdUIsUUFNdkJBLEVBTnVCO0FBQUEsU0FRdkJYLG1EQVJ1QixvVkFTWlEsS0FBSyxJQUFJLGNBVEcsRUFVTkQsSUFBSSxHQUFHTixvREFBSCxHQUFxQlEsTUFWbkIsRUFXUlAsNkNBQVEsWUFBS1EsSUFBTCxFQUFSLElBQXdCLFNBWGhCLEVBWU5ILElBQUksR0FBRyxNQUFILEdBQVksU0FaVixFQWFOSCwrQ0FBZ0IsWUFBS0QsVUFBTCxFQUFoQixJQUFzQyxTQWJoQyxFQWNKRSw0Q0FBTyxZQUFLTSxFQUFMLEVBQVAsSUFBcUIsQ0FkakI7QUFBQSxDQUF6Qjs7QUFpQkEsSUFBTUMsSUFBSSxHQUFHYix5REFBSCxrTkFDTk8sZ0JBRE0sQ0FBVjtBQUlBLCtEQUFlTSxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFFQTtBQUNBOzs7O0FBRUEsU0FBU0ssUUFBVCxHQUFvQjtBQUNsQixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQVMsVUFBSSxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLGdEQUFEO0FBQU0sUUFBRSxFQUFDLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBTUQ7O0tBUFFBO0FBU1QsK0RBQWVBLFFBQWY7O0FBRUFBLFFBQVEsQ0FBQ0MsU0FBVCxHQUFxQixTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUM1QyxzQkFDRSw4REFBQyxzREFBRDtBQUFBLGNBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQ0FORCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL1RleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCdcclxuXHJcbmltcG9ydCB7XHJcbiAgZm9udEZhbWlseSxcclxuICBmb250U2l6ZSxcclxuICBsaW5lSGVpZ2h0IGFzIGxpbmVIZWlnaHRUb2tlbnMsXHJcbiAgc3BhY2luZyxcclxufSBmcm9tIFwiL3Rva2Vuc1wiO1xyXG5cclxuY29uc3QgdHlwb2dyYXBoeVN0eWxlcyA9ICh7XHJcbiAgYm9sZCxcclxuICBjb2xvcixcclxuICBmYW1pbHkgPSBmb250RmFtaWx5LmRlZmF1bHQsXHJcbiAgc2l6ZSxcclxuICBsaW5lSGVpZ2h0ID0gc2l6ZSxcclxuICBtYixcclxufSkgPT5cclxuICBjc3NgXHJcbiAgICBjb2xvcjogJHtjb2xvciB8fCBcImN1cnJlbnRDb2xvclwifTtcclxuICAgIGZvbnQtZmFtaWx5OiAke2JvbGQgPyBmb250RmFtaWx5LmJvbGQgOiBmYW1pbHl9O1xyXG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplW2B0JHtzaXplfWBdIHx8IFwiaW5oZXJpdFwifTtcclxuICAgIGZvbnQtd2VpZ2h0OiAke2JvbGQgPyBcImJvbGRcIiA6IFwiaW5oZXJpdFwifTtcclxuICAgIGxpbmUtaGVpZ2h0OiAke2xpbmVIZWlnaHRUb2tlbnNbYHQke2xpbmVIZWlnaHR9YF0gfHwgXCJpbmhlcml0XCJ9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHtzcGFjaW5nW2B0JHttYn1gXSB8fCAwfTtcclxuICBgO1xyXG5cclxuY29uc3QgVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gICR7dHlwb2dyYXBoeVN0eWxlc31cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcvY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCB7IEhlYWRpbmcsIFRleHQgfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGluZyBzaXplPVwiM1wiPlN0b3JlPC9IZWFkaW5nPlxyXG4gICAgICA8VGV4dCBtYj1cIjdcIj5FeHBsb3JlIG91ciB2YXN0IHNlbGVjdGlvbiBvZiBwcmVtaXVtIHByb2R1Y3RzLjwvVGV4dD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuXHJcbkhvbWVQYWdlLmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChwYWdlKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIHtwYWdlfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjc3MiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGluZUhlaWdodFRva2VucyIsInNwYWNpbmciLCJ0eXBvZ3JhcGh5U3R5bGVzIiwiYm9sZCIsImNvbG9yIiwiZmFtaWx5Iiwic2l6ZSIsIm1iIiwiVGV4dCIsInNwYW4iLCJSZWFjdCIsIkxheW91dCIsIkhlYWRpbmciLCJIb21lUGFnZSIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9