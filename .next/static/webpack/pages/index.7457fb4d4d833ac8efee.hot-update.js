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
  var _ref$centered = _ref.centered,
      centered = _ref$centered === void 0 ? false : _ref$centered,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? null : _ref$direction,
      _ref$justify = _ref.justify,
      justify = _ref$justify === void 0 ? null : _ref$justify,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? null : _ref$alignItems,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? null : _ref$wrap,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? null : _ref$padding;
  return {
    display: 'flex',
    flexDirection: direction,
    justifyContent: centered ? 'center' : justify,
    alignItems: centered ? 'center' : alignItems,
    padding: padding ? _tokens__WEBPACK_IMPORTED_MODULE_1__.spacing["t".concat(padding)] : null,
    wrap: wrap
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzQ1N2ZiNGQ0ZDgzM2FjOGVmZWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1FLEdBQUcsR0FBR0Ysd0RBQUEsTUFDVjtBQUFBLDJCQUNFSSxRQURGO0FBQUEsTUFDRUEsUUFERiw4QkFDYSxLQURiO0FBQUEsNEJBRUVDLFNBRkY7QUFBQSxNQUVFQSxTQUZGLCtCQUVjLElBRmQ7QUFBQSwwQkFHRUMsT0FIRjtBQUFBLE1BR0VBLE9BSEYsNkJBR1ksSUFIWjtBQUFBLDZCQUlFQyxVQUpGO0FBQUEsTUFJRUEsVUFKRixnQ0FJZSxJQUpmO0FBQUEsdUJBS0VDLElBTEY7QUFBQSxNQUtFQSxJQUxGLDBCQUtTLElBTFQ7QUFBQSwwQkFNRUMsT0FORjtBQUFBLE1BTUVBLE9BTkYsNkJBTVksSUFOWjtBQUFBLFNBT087QUFDTEMsSUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTEMsSUFBQUEsYUFBYSxFQUFFTixTQUZWO0FBR0xPLElBQUFBLGNBQWMsRUFBRVIsUUFBUSxHQUFHLFFBQUgsR0FBY0UsT0FIakM7QUFJTEMsSUFBQUEsVUFBVSxFQUFFSCxRQUFRLEdBQUcsUUFBSCxHQUFjRyxVQUo3QjtBQUtMRSxJQUFBQSxPQUFPLEVBQUVBLE9BQU8sR0FBR1IsNENBQU8sWUFBS1EsT0FBTCxFQUFWLEdBQTRCLElBTHZDO0FBTUxELElBQUFBLElBQUksRUFBSkE7QUFOSyxHQVBQO0FBQUEsQ0FEVSxDQUFaO01BQU1OO0FBa0JOLCtEQUFlQSxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvQm94LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5cclxuaW1wb3J0IHsgc3BhY2luZyB9IGZyb20gJy90b2tlbnMnXHJcblxyXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2KFxyXG4gICh7XHJcbiAgICBjZW50ZXJlZCA9IGZhbHNlLFxyXG4gICAgZGlyZWN0aW9uID0gbnVsbCxcclxuICAgIGp1c3RpZnkgPSBudWxsLFxyXG4gICAgYWxpZ25JdGVtcyA9IG51bGwsXHJcbiAgICB3cmFwID0gbnVsbCxcclxuICAgIHBhZGRpbmcgPSBudWxsLFxyXG4gIH0pID0+ICh7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb24sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogY2VudGVyZWQgPyAnY2VudGVyJyA6IGp1c3RpZnksXHJcbiAgICBhbGlnbkl0ZW1zOiBjZW50ZXJlZCA/ICdjZW50ZXInIDogYWxpZ25JdGVtcyxcclxuICAgIHBhZGRpbmc6IHBhZGRpbmcgPyBzcGFjaW5nW2B0JHtwYWRkaW5nfWBdIDogbnVsbCxcclxuICAgIHdyYXAsXHJcbiAgfSlcclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94XHJcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJzcGFjaW5nIiwiQm94IiwiZGl2IiwiY2VudGVyZWQiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5IiwiYWxpZ25JdGVtcyIsIndyYXAiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=