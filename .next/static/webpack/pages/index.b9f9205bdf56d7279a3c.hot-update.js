"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./tokens/typography.js":
/*!******************************!*\
  !*** ./tokens/typography.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontFamily": function() { return /* binding */ fontFamily; },
/* harmony export */   "fontSize": function() { return /* binding */ fontSize; },
/* harmony export */   "headingSize": function() { return /* binding */ headingSize; }
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
  t6: '36px'
};
var headingSize = {
  h3: '6'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjlmOTIwNWJkZjU2ZDcyNzlhM2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsVUFBVSxHQUFHO0FBQ3hCLGFBQVMsd0JBRGU7QUFFeEJDLEVBQUFBLElBQUksRUFBRSw2QkFGa0I7QUFHeEJDLEVBQUFBLEtBQUssRUFBRTtBQUhpQixDQUFuQjtBQU1BLElBQU1DLFFBQVEsR0FBRztBQUN0QkMsRUFBQUEsRUFBRSxFQUFFLE1BRGtCO0FBRXRCQyxFQUFBQSxFQUFFLEVBQUUsTUFGa0I7QUFHdEJDLEVBQUFBLEVBQUUsRUFBRSxNQUhrQjtBQUl0QkMsRUFBQUEsRUFBRSxFQUFFO0FBSmtCLENBQWpCO0FBT0EsSUFBTUMsV0FBVyxHQUFHO0FBQ3pCQyxFQUFBQSxFQUFFLEVBQUU7QUFEcUIsQ0FBcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdG9rZW5zL3R5cG9ncmFwaHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZvbnRGYW1pbHkgPSB7XHJcbiAgZGVmYXVsdDogJ1wiQXpvIFNhbnNcIiwgc2Fucy1zZXJpZicsXHJcbiAgYm9sZDogJ1wiQXpvIFNhbnMgQm9sZFwiLCBzYW5zLXNlcmlmJyxcclxuICBsaWdodDogJ1wiQXpvIFNhbnMgTGlnaHRcIiwgc2Fucy1zZXJpZicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZm9udFNpemUgPSB7XHJcbiAgdDI6ICcxMnB4JyxcclxuICB0MzogJzE0cHgnLFxyXG4gIHQ0OiAnMTZweCcsXHJcbiAgdDY6ICczNnB4JyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkaW5nU2l6ZSA9IHtcclxuICBoMzogJzYnLFxyXG59XHJcbiJdLCJuYW1lcyI6WyJmb250RmFtaWx5IiwiYm9sZCIsImxpZ2h0IiwiZm9udFNpemUiLCJ0MiIsInQzIiwidDQiLCJ0NiIsImhlYWRpbmdTaXplIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9