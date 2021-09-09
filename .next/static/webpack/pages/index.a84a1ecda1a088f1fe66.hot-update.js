"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ui/Box.js":
/*!******************************!*\
  !*** ./components/ui/Box.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Box = _emotion_styled__WEBPACK_IMPORTED_MODULE_0__.default.div(_c = function _c(_ref) {
  var direction = _ref.direction,
      justify = _ref.justify,
      alignItems = _ref.alignItems;
  return {
    display: 'flex',
    flexDirection: direction || null,
    justifyContent: justify || null,
    alignItems: alignItems || null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTg0YTFlY2RhMWEwODhmMWZlNjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1DLEdBQUcsR0FBR0Qsd0RBQUEsTUFBVztBQUFBLE1BQUdHLFNBQUgsUUFBR0EsU0FBSDtBQUFBLE1BQWNDLE9BQWQsUUFBY0EsT0FBZDtBQUFBLE1BQXVCQyxVQUF2QixRQUF1QkEsVUFBdkI7QUFBQSxTQUF5QztBQUM5REMsSUFBQUEsT0FBTyxFQUFFLE1BRHFEO0FBRTlEQyxJQUFBQSxhQUFhLEVBQUVKLFNBQVMsSUFBSSxJQUZrQztBQUc5REssSUFBQUEsY0FBYyxFQUFFSixPQUFPLElBQUksSUFIbUM7QUFJOURDLElBQUFBLFVBQVUsRUFBRUEsVUFBVSxJQUFJO0FBSm9DLEdBQXpDO0FBQUEsQ0FBWCxDQUFaO01BQU1KO0FBT04sK0RBQWVBLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9Cb3guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2KCh7IGRpcmVjdGlvbiwganVzdGlmeSwgYWxpZ25JdGVtcyB9KSA9PiAoe1xyXG4gIGRpc3BsYXk6ICdmbGV4JyxcclxuICBmbGV4RGlyZWN0aW9uOiBkaXJlY3Rpb24gfHwgbnVsbCxcclxuICBqdXN0aWZ5Q29udGVudDoganVzdGlmeSB8fCBudWxsLFxyXG4gIGFsaWduSXRlbXM6IGFsaWduSXRlbXMgfHwgbnVsbCxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3hcclxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkJveCIsImRpdiIsImRpcmVjdGlvbiIsImp1c3RpZnkiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=