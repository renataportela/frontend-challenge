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
    alignItems: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
      size: "2",
      color: "red",
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
  var bold = _ref.bold,
      color = _ref.color,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjk1ZTZmNDg5ZmM4YzVkMDBkYTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOzs7QUFFQSxTQUFTSSxVQUFULEdBQXNCO0FBQ3BCLE1BQU1DLEtBQUssR0FBRyxDQUFkO0FBQ0Esc0JBQ0UsOERBQUMsK0NBQUQ7QUFBSyxjQUFVLEVBQUMsUUFBaEI7QUFBQSw0QkFDRSw4REFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQWUsV0FBSyxFQUFDLEtBQXJCO0FBQTJCLFVBQUksTUFBL0I7QUFBQSxnQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyxtREFBRDtBQUNFLFNBQUcsa0JBQVdBLEtBQUssS0FBSyxDQUFWLEdBQWMsWUFBZCxHQUE2QixpQkFBeEMsU0FETDtBQUVFLFNBQUcsRUFBQyxNQUZOO0FBR0UsV0FBSyxFQUFDLElBSFI7QUFJRSxZQUFNLEVBQUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7S0FmUUQ7QUFpQlQsK0RBQWVBLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSxNQUFnQkMsSUFBaEIsUUFBZ0JBLElBQWhCO0FBQUEsU0FDdkJOLG1EQUR1QiwwUUFFWkssS0FBSyxJQUFJLGNBRkcsRUFHTkQsSUFBSSxHQUFHSCxvREFBSCxHQUFxQkEsdURBSG5CLEVBSVJDLDZDQUFRLFlBQUtJLElBQUwsRUFBUixJQUF3QixTQUpoQjtBQUFBLENBQXpCOztBQU9BLElBQU1WLElBQUksR0FBR0cseURBQUgsa05BQ05JLGdCQURNLENBQVY7QUFJQSwrREFBZVAsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwcC9jYXJ0L0NhcnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvVGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcblxyXG5mdW5jdGlvbiBDYXJ0QnV0dG9uKCkge1xyXG4gIGNvbnN0IGNvdW50ID0gMFxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgPFRleHQgc2l6ZT1cIjJcIiBjb2xvcj1cInJlZFwiIGJvbGQ+XHJcbiAgICAgICAge2NvdW50fVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17YC9TVkdzLyR7Y291bnQgPT09IDAgPyBcImNhcnRfZW1wdHlcIiA6IFwiY2FydF93aXRoX2l0ZW1zXCJ9LnN2Z2B9XHJcbiAgICAgICAgYWx0PVwiQ2FydFwiXHJcbiAgICAgICAgd2lkdGg9XCIzMlwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMzJcIlxyXG4gICAgICAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydEJ1dHRvblxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcblxyXG5pbXBvcnQgeyBmb250RmFtaWx5IH0gZnJvbSAnL3Rva2VucydcclxuaW1wb3J0IHsgZm9udFNpemUgfSBmcm9tICd0b2tlbnMnXHJcblxyXG5jb25zdCB0eXBvZ3JhcGh5U3R5bGVzID0gKHsgYm9sZCwgY29sb3IsIHNpemUgfSkgPT5cclxuICBjc3NgXHJcbiAgICBjb2xvcjogJHtjb2xvciB8fCAnY3VycmVudENvbG9yJ307XHJcbiAgICBmb250LWZhbWlseTogJHtib2xkID8gZm9udEZhbWlseS5ib2xkIDogZm9udEZhbWlseS5kZWZhdWx0fTtcclxuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZVtgdCR7c2l6ZX1gXSB8fCAnaW5oZXJpdCd9O1xyXG4gIGBcclxuXHJcbmNvbnN0IFRleHQgPSBzdHlsZWQuc3BhbmBcclxuICAke3R5cG9ncmFwaHlTdHlsZXN9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJCb3giLCJUZXh0IiwiQ2FydEJ1dHRvbiIsImNvdW50Iiwic3R5bGVkIiwiY3NzIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwidHlwb2dyYXBoeVN0eWxlcyIsImJvbGQiLCJjb2xvciIsInNpemUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==