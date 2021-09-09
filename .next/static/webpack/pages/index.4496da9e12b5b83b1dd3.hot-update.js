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
      lineHeight = _ref$lineHeight === void 0 ? size : _ref$lineHeight;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n  "])), color || "currentColor", bold ? _tokens__WEBPACK_IMPORTED_MODULE_2__.fontFamily.bold : family, _tokens__WEBPACK_IMPORTED_MODULE_2__.fontSize["t".concat(size)] || "inherit", bold ? "bold" : "inherit", _tokens__WEBPACK_IMPORTED_MODULE_2__.lineHeight["t".concat(lineHeight)] || "inherit");
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

/***/ "./tokens/typography.js":
/*!******************************!*\
  !*** ./tokens/typography.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontFamily": function() { return /* binding */ fontFamily; },
/* harmony export */   "fontSize": function() { return /* binding */ fontSize; },
/* harmony export */   "headingSize": function() { return /* binding */ headingSize; },
/* harmony export */   "lineHeight": function() { return /* binding */ lineHeight; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var fontFamily = {
  "default": '"Azo Sans", sans-serif',
  bold: '"Azo Sans Bold", sans-serif',
  light: '"Azo Sans Light", sans-serif'
};
var fontSize = {
  t2: '12px',
  t3: '14px',
  t4: '16px',
  t6: '28px'
};
var headingSize = {
  h3: '6'
};
var lineHeight = {
  t4: '24px',
  t6: '36px'
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ5NmRhOWUxMmI1YjgzYjFkZDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUN2QkMsSUFEdUIsUUFDdkJBLElBRHVCO0FBQUEsTUFFdkJDLEtBRnVCLFFBRXZCQSxLQUZ1QjtBQUFBLHlCQUd2QkMsTUFIdUI7QUFBQSxNQUd2QkEsTUFIdUIsNEJBR2RQLHVEQUhjO0FBQUEsTUFJdkJRLElBSnVCLFFBSXZCQSxJQUp1QjtBQUFBLDZCQUt2Qk4sVUFMdUI7QUFBQSxNQUt2QkEsVUFMdUIsZ0NBS1ZNLElBTFU7QUFBQSxTQU92QlQsbURBUHVCLDBUQVFaTyxLQUFLLElBQUksY0FSRyxFQVNORCxJQUFJLEdBQUdMLG9EQUFILEdBQXFCTyxNQVRuQixFQVVSTiw2Q0FBUSxZQUFLTyxJQUFMLEVBQVIsSUFBd0IsU0FWaEIsRUFXTkgsSUFBSSxHQUFHLE1BQUgsR0FBWSxTQVhWLEVBWU5GLCtDQUFnQixZQUFLRCxVQUFMLEVBQWhCLElBQXNDLFNBWmhDO0FBQUEsQ0FBekI7O0FBZUEsSUFBTU8sSUFBSSxHQUFHWCx5REFBSCxrTkFDTk0sZ0JBRE0sQ0FBVjtBQUlBLCtEQUFlSyxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCTyxJQUFNVCxVQUFVLEdBQUc7QUFDeEIsYUFBUyx3QkFEZTtBQUV4QkssRUFBQUEsSUFBSSxFQUFFLDZCQUZrQjtBQUd4Qk0sRUFBQUEsS0FBSyxFQUFFO0FBSGlCLENBQW5CO0FBTUEsSUFBTVYsUUFBUSxHQUFHO0FBQ3RCVyxFQUFBQSxFQUFFLEVBQUUsTUFEa0I7QUFFdEJDLEVBQUFBLEVBQUUsRUFBRSxNQUZrQjtBQUd0QkMsRUFBQUEsRUFBRSxFQUFFLE1BSGtCO0FBSXRCQyxFQUFBQSxFQUFFLEVBQUU7QUFKa0IsQ0FBakI7QUFPQSxJQUFNQyxXQUFXLEdBQUc7QUFDekJDLEVBQUFBLEVBQUUsRUFBRTtBQURxQixDQUFwQjtBQUlBLElBQU1mLFVBQVUsR0FBRztBQUN4QlksRUFBQUEsRUFBRSxFQUFFLE1BRG9CO0FBRXhCQyxFQUFBQSxFQUFFLEVBQUU7QUFGb0IsQ0FBbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9UZXh0LmpzIiwid2VicGFjazovL19OX0UvLi90b2tlbnMvdHlwb2dyYXBoeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcblxyXG5pbXBvcnQgeyBmb250RmFtaWx5LCBmb250U2l6ZSwgbGluZUhlaWdodCBhcyBsaW5lSGVpZ2h0VG9rZW5zIH0gZnJvbSAnL3Rva2VucydcclxuXHJcbmNvbnN0IHR5cG9ncmFwaHlTdHlsZXMgPSAoe1xyXG4gIGJvbGQsXHJcbiAgY29sb3IsXHJcbiAgZmFtaWx5ID0gZm9udEZhbWlseS5kZWZhdWx0LFxyXG4gIHNpemUsXHJcbiAgbGluZUhlaWdodCA9IHNpemUsXHJcbn0pID0+XHJcbiAgY3NzYFxyXG4gICAgY29sb3I6ICR7Y29sb3IgfHwgXCJjdXJyZW50Q29sb3JcIn07XHJcbiAgICBmb250LWZhbWlseTogJHtib2xkID8gZm9udEZhbWlseS5ib2xkIDogZmFtaWx5fTtcclxuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZVtgdCR7c2l6ZX1gXSB8fCBcImluaGVyaXRcIn07XHJcbiAgICBmb250LXdlaWdodDogJHtib2xkID8gXCJib2xkXCIgOiBcImluaGVyaXRcIn07XHJcbiAgICBsaW5lLWhlaWdodDogJHtsaW5lSGVpZ2h0VG9rZW5zW2B0JHtsaW5lSGVpZ2h0fWBdIHx8IFwiaW5oZXJpdFwifTtcclxuICBgO1xyXG5cclxuY29uc3QgVGV4dCA9IHN0eWxlZC5zcGFuYFxyXG4gICR7dHlwb2dyYXBoeVN0eWxlc31cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dFxyXG4iLCJleHBvcnQgY29uc3QgZm9udEZhbWlseSA9IHtcclxuICBkZWZhdWx0OiAnXCJBem8gU2Fuc1wiLCBzYW5zLXNlcmlmJyxcclxuICBib2xkOiAnXCJBem8gU2FucyBCb2xkXCIsIHNhbnMtc2VyaWYnLFxyXG4gIGxpZ2h0OiAnXCJBem8gU2FucyBMaWdodFwiLCBzYW5zLXNlcmlmJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb250U2l6ZSA9IHtcclxuICB0MjogJzEycHgnLFxyXG4gIHQzOiAnMTRweCcsXHJcbiAgdDQ6ICcxNnB4JyxcclxuICB0NjogJzI4cHgnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRpbmdTaXplID0ge1xyXG4gIGgzOiAnNicsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsaW5lSGVpZ2h0ID0ge1xyXG4gIHQ0OiAnMjRweCcsXHJcbiAgdDY6ICczNnB4JyxcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiY3NzIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsImxpbmVIZWlnaHRUb2tlbnMiLCJ0eXBvZ3JhcGh5U3R5bGVzIiwiYm9sZCIsImNvbG9yIiwiZmFtaWx5Iiwic2l6ZSIsIlRleHQiLCJzcGFuIiwibGlnaHQiLCJ0MiIsInQzIiwidDQiLCJ0NiIsImhlYWRpbmdTaXplIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9