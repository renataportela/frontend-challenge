"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ui/Heading.js":
/*!**********************************!*\
  !*** ./components/ui/Heading.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Text */ "./components/ui/Text.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Heading = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default)(_Text__WEBPACK_IMPORTED_MODULE_4__.default)(function (_ref) {
  var size = _ref.size,
      props = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  return _objectSpread(_objectSpread({}, props), {}, {
    size: _tokens__WEBPACK_IMPORTED_MODULE_3__.headingSize["h".concat(size)],
    family: _tokens__WEBPACK_IMPORTED_MODULE_3__.fontFamily.light,
    weight: '300',
    as: "h".concat(size)
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Heading);

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
  var bold = _ref.bold,
      color = _ref.color,
      _ref$family = _ref.family,
      family = _ref$family === void 0 ? _tokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily.default : _ref$family,
      size = _ref.size,
      _ref$lineHeight = _ref.lineHeight,
      lineHeight = _ref$lineHeight === void 0 ? size : _ref$lineHeight,
      mb = _ref.mb,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'normal' : _ref$weight;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin-bottom: ", ";\n  "])), color || "currentColor", bold ? _tokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily.bold : family, _tokens__WEBPACK_IMPORTED_MODULE_2__.fontSize["t".concat(size)] || "inherit", bold ? "bold" : weight, _tokens__WEBPACK_IMPORTED_MODULE_2__.lineHeight["t".concat(lineHeight)] || "inherit", _tokens__WEBPACK_IMPORTED_MODULE_2__.spacing["t".concat(mb)] || 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzZiYzBiZDI4NWMzNjA2MTA4MWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNSSxPQUFPLEdBQUdKLHdEQUFNLENBQUNHLDBDQUFELENBQU4sQ0FBYSxnQkFBd0I7QUFBQSxNQUFyQkUsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBWkMsS0FBWTs7QUFDbkQseUNBQ0tBLEtBREw7QUFFRUQsSUFBQUEsSUFBSSxFQUFFSCxnREFBVyxZQUFLRyxJQUFMLEVBRm5CO0FBR0VFLElBQUFBLE1BQU0sRUFBRU4scURBSFY7QUFJRVEsSUFBQUEsTUFBTSxFQUFFLEtBSlY7QUFLRUMsSUFBQUEsRUFBRSxhQUFNTCxJQUFOO0FBTEo7QUFPRCxDQVJlLENBQWhCO0FBVUEsK0RBQWVELE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBRUE7O0FBT0EsSUFBTVksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQ3ZCQyxJQUR1QixRQUN2QkEsSUFEdUI7QUFBQSxNQUV2QkMsS0FGdUIsUUFFdkJBLEtBRnVCO0FBQUEseUJBR3ZCWCxNQUh1QjtBQUFBLE1BR3ZCQSxNQUh1Qiw0QkFHZE4sdURBSGM7QUFBQSxNQUl2QkksSUFKdUIsUUFJdkJBLElBSnVCO0FBQUEsNkJBS3ZCUSxVQUx1QjtBQUFBLE1BS3ZCQSxVQUx1QixnQ0FLVlIsSUFMVTtBQUFBLE1BTXZCYyxFQU51QixRQU12QkEsRUFOdUI7QUFBQSx5QkFPdkJWLE1BUHVCO0FBQUEsTUFPdkJBLE1BUHVCLDRCQU9kLFFBUGM7QUFBQSxTQVN2QkUsbURBVHVCLG9WQVVaTyxLQUFLLElBQUksY0FWRyxFQVdORCxJQUFJLEdBQUdoQixvREFBSCxHQUFxQk0sTUFYbkIsRUFZUkssNkNBQVEsWUFBS1AsSUFBTCxFQUFSLElBQXdCLFNBWmhCLEVBYU5ZLElBQUksR0FBRyxNQUFILEdBQVlSLE1BYlYsRUFjTkssK0NBQWdCLFlBQUtELFVBQUwsRUFBaEIsSUFBc0MsU0FkaEMsRUFlSkUsNENBQU8sWUFBS0ksRUFBTCxFQUFQLElBQXFCLENBZmpCO0FBQUEsQ0FBekI7O0FBa0JBLElBQU1oQixJQUFJLEdBQUdILHlEQUFILGtOQUNOZ0IsZ0JBRE0sQ0FBVjtBQUlBLCtEQUFlYixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5cclxuaW1wb3J0IHsgZm9udEZhbWlseSwgaGVhZGluZ1NpemUgfSBmcm9tICcvdG9rZW5zJ1xyXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXHJcblxyXG5jb25zdCBIZWFkaW5nID0gc3R5bGVkKFRleHQpKCh7IHNpemUsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgLi4ucHJvcHMsXHJcbiAgICBzaXplOiBoZWFkaW5nU2l6ZVtgaCR7c2l6ZX1gXSxcclxuICAgIGZhbWlseTogZm9udEZhbWlseS5saWdodCxcclxuICAgIHdlaWdodDogJzMwMCcsXHJcbiAgICBhczogYGgke3NpemV9YCxcclxuICB9XHJcbn0pIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZ1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcblxyXG5pbXBvcnQge1xyXG4gIGZvbnRGYW1pbHksXHJcbiAgZm9udFNpemUsXHJcbiAgbGluZUhlaWdodCBhcyBsaW5lSGVpZ2h0VG9rZW5zLFxyXG4gIHNwYWNpbmcsXHJcbn0gZnJvbSBcIi90b2tlbnNcIjtcclxuXHJcbmNvbnN0IHR5cG9ncmFwaHlTdHlsZXMgPSAoe1xyXG4gIGJvbGQsXHJcbiAgY29sb3IsXHJcbiAgZmFtaWx5ID0gZm9udEZhbWlseS5kZWZhdWx0LFxyXG4gIHNpemUsXHJcbiAgbGluZUhlaWdodCA9IHNpemUsXHJcbiAgbWIsXHJcbiAgd2VpZ2h0ID0gJ25vcm1hbCdcclxufSkgPT5cclxuICBjc3NgXHJcbiAgICBjb2xvcjogJHtjb2xvciB8fCBcImN1cnJlbnRDb2xvclwifTtcclxuICAgIGZvbnQtZmFtaWx5OiAke2JvbGQgPyBmb250RmFtaWx5LmJvbGQgOiBmYW1pbHl9O1xyXG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplW2B0JHtzaXplfWBdIHx8IFwiaW5oZXJpdFwifTtcclxuICAgIGZvbnQtd2VpZ2h0OiAke2JvbGQgPyBcImJvbGRcIiA6IHdlaWdodH07XHJcbiAgICBsaW5lLWhlaWdodDogJHtsaW5lSGVpZ2h0VG9rZW5zW2B0JHtsaW5lSGVpZ2h0fWBdIHx8IFwiaW5oZXJpdFwifTtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZ1tgdCR7bWJ9YF0gfHwgMH07XHJcbiAgYDtcclxuXHJcbmNvbnN0IFRleHQgPSBzdHlsZWQuc3BhbmBcclxuICAke3R5cG9ncmFwaHlTdHlsZXN9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsImZvbnRGYW1pbHkiLCJoZWFkaW5nU2l6ZSIsIlRleHQiLCJIZWFkaW5nIiwic2l6ZSIsInByb3BzIiwiZmFtaWx5IiwibGlnaHQiLCJ3ZWlnaHQiLCJhcyIsImNzcyIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRUb2tlbnMiLCJzcGFjaW5nIiwidHlwb2dyYXBoeVN0eWxlcyIsImJvbGQiLCJjb2xvciIsIm1iIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=