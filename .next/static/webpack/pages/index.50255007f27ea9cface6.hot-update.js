"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ui/Button.js":
/*!*********************************!*\
  !*** ./components/ui/Button.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./components/ui/Text.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["children", "color"];

var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\ui\\Button.js",
    _templateObject;





var ButtonStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default.button(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  ", "\n  border-radius: 20px;\n  padding: ", ";\n  text-align: center;\n  background-color: ", ";\n  border: 0;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), _Text__WEBPACK_IMPORTED_MODULE_4__.typographyStyles, _tokens__WEBPACK_IMPORTED_MODULE_3__.spacing.t3, function (props) {
  return _tokens__WEBPACK_IMPORTED_MODULE_3__.colors[props.bgColor];
}, function (props) {
  return _tokens__WEBPACK_IMPORTED_MODULE_3__.colors["".concat(props.bgColor, "600")];
});
_c = ButtonStyle;

function Button(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      props = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(ButtonStyle, {
    bgColor: color,
    color: "white",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_c2 = Button;
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c, _c2;

$RefreshReg$(_c, "ButtonStyle");
$RefreshReg$(_c2, "Button");

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
  grey100: '#fafafa',
  grey500: '#6c6b76',
  primary: '#5f2eff',
  primary500: '#5f2eff',
  primary600: '#5400db'
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTAyNTUwMDdmMjdlYTljZmFjZTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQUVBLElBQU1JLFdBQVcsR0FBR0osMkRBQUgsK1hBQ2JHLG1EQURhLEVBR0pELCtDQUhJLEVBS0ssVUFBQUssS0FBSztBQUFBLFNBQUlOLDJDQUFNLENBQUNNLEtBQUssQ0FBQ0MsT0FBUCxDQUFWO0FBQUEsQ0FMVixFQVVPLFVBQUFELEtBQUs7QUFBQSxTQUFJTiwyQ0FBTSxXQUFJTSxLQUFLLENBQUNDLE9BQVYsU0FBVjtBQUFBLENBVlosQ0FBakI7S0FBTUo7O0FBY04sU0FBU0ssTUFBVCxPQUEyRDtBQUFBLE1BQXpDQyxRQUF5QyxRQUF6Q0EsUUFBeUM7QUFBQSx3QkFBL0JDLEtBQStCO0FBQUEsTUFBL0JBLEtBQStCLDJCQUF2QixTQUF1QjtBQUFBLE1BQVRKLEtBQVM7O0FBQ3pELHNCQUNFLDhEQUFDLFdBQUQ7QUFBYSxXQUFPLEVBQUVJLEtBQXRCO0FBQTZCLFNBQUssRUFBQyxPQUFuQztBQUFBLGNBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O01BTlFEO0FBUVQsK0RBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkEsK0RBQWU7QUFDYkcsRUFBQUEsT0FBTyxFQUFFLFNBREk7QUFFYkMsRUFBQUEsT0FBTyxFQUFFLFNBRkk7QUFHYkMsRUFBQUEsT0FBTyxFQUFFLFNBSEk7QUFJYkMsRUFBQUEsVUFBVSxFQUFFLFNBSkM7QUFLYkMsRUFBQUEsVUFBVSxFQUFFO0FBTEMsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdG9rZW5zL2NvbG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmltcG9ydCB7IGNvbG9ycywgc3BhY2luZyB9IGZyb20gJy90b2tlbnMnXHJcblxyXG5pbXBvcnQgeyB0eXBvZ3JhcGh5U3R5bGVzIH0gZnJvbSAnLi9UZXh0J1xyXG5cclxuY29uc3QgQnV0dG9uU3R5bGUgPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7dHlwb2dyYXBoeVN0eWxlc31cclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmc6ICR7c3BhY2luZy50M307XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzW3Byb3BzLmJnQ29sb3JdfTtcclxuICBib3JkZXI6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzW2Ake3Byb3BzLmJnQ29sb3J9NjAwYF19O1xyXG4gIH1cclxuYFxyXG5cclxuZnVuY3Rpb24gQnV0dG9uKHsgY2hpbGRyZW4sIGNvbG9yID0gJ3ByaW1hcnknLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25TdHlsZSBiZ0NvbG9yPXtjb2xvcn0gY29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvblN0eWxlPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdyZXkxMDA6ICcjZmFmYWZhJyxcclxuICBncmV5NTAwOiAnIzZjNmI3NicsXHJcbiAgcHJpbWFyeTogJyM1ZjJlZmYnLFxyXG4gIHByaW1hcnk1MDA6ICcjNWYyZWZmJyxcclxuICBwcmltYXJ5NjAwOiAnIzU0MDBkYicsXHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImNvbG9ycyIsInNwYWNpbmciLCJ0eXBvZ3JhcGh5U3R5bGVzIiwiQnV0dG9uU3R5bGUiLCJidXR0b24iLCJ0MyIsInByb3BzIiwiYmdDb2xvciIsIkJ1dHRvbiIsImNoaWxkcmVuIiwiY29sb3IiLCJncmV5MTAwIiwiZ3JleTUwMCIsInByaW1hcnkiLCJwcmltYXJ5NTAwIiwicHJpbWFyeTYwMCJdLCJzb3VyY2VSb290IjoiIn0=