"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/app/product/ReviewStars.js":
/*!***********************************************!*\
  !*** ./components/app/product/ReviewStars.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ReviewStars.js";



var stars = [1, 2, 3, 4, 5];

function ReviewStars(_ref) {
  var _this = this;

  var review = _ref.review;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
    children: stars.map(function (currentStar) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StarSvg, {
        isFilled: review > 0 && currentStar <= review
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = ReviewStars;

function StarSvg(_ref2) {
  var _ref2$isFilled = _ref2.isFilled,
      isFilled = _ref2$isFilled === void 0 ? false : _ref2$isFilled;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("g", {
      fill: "none",
      "fill-rule": "evenodd",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
        d: "M0 0h24v24H0z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
        d: "M12 18l-5.26 2.765a1 1 0 01-1.45-1.054l1.004-5.857-4.256-4.148A1 1 0 012.592 8l5.881-.854 2.63-5.329a1 1 0 011.794 0l2.63 5.329 5.88.854a1 1 0 01.555 1.706l-4.256 4.148 1.005 5.857a1 1 0 01-1.451 1.054L12 18z",
        fill: isFilled ? '#ffcc00' : '#fff'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_c2 = StarSvg;
/* harmony default export */ __webpack_exports__["default"] = (ReviewStars);

var _c, _c2;

$RefreshReg$(_c, "ReviewStars");
$RefreshReg$(_c2, "StarSvg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM3ZDMxNDA4NDMxNWYzOTdhNWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUUsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FBZDs7QUFFQSxTQUFTQyxXQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQy9CLHNCQUNFLDhEQUFDLCtDQUFEO0FBQUEsY0FDR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQUMsV0FBVztBQUFBLDBCQUNwQiw4REFBQyxPQUFEO0FBQVMsZ0JBQVEsRUFBRUYsTUFBTSxHQUFHLENBQVQsSUFBY0UsV0FBVyxJQUFJRjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9CO0FBQUEsS0FBckI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7S0FSUUQ7O0FBVVQsU0FBU0ksT0FBVCxRQUF1QztBQUFBLDZCQUFwQkMsUUFBb0I7QUFBQSxNQUFwQkEsUUFBb0IsK0JBQVQsS0FBUztBQUNyQyxzQkFDRTtBQUFLLFdBQU8sRUFBQyxXQUFiO0FBQXlCLFNBQUssRUFBQyxJQUEvQjtBQUFvQyxVQUFNLEVBQUMsSUFBM0M7QUFBZ0QsU0FBSyxFQUFDLDRCQUF0RDtBQUFBLDJCQUNFO0FBQUcsVUFBSSxFQUFDLE1BQVI7QUFBZSxtQkFBVSxTQUF6QjtBQUFBLDhCQUNFO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxTQUFDLEVBQUMsa05BREo7QUFFRSxZQUFJLEVBQUVBLFFBQVEsR0FBRyxTQUFILEdBQWU7QUFGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztNQVpRRDtBQWNULCtEQUFlSixXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXBwL3Byb2R1Y3QvUmV2aWV3U3RhcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcblxyXG5jb25zdCBzdGFycyA9IFsxLDIsMyw0LDVdXHJcblxyXG5mdW5jdGlvbiBSZXZpZXdTdGFycyh7IHJldmlldyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIHtzdGFycy5tYXAoY3VycmVudFN0YXIgPT4gKFxyXG4gICAgICAgIDxTdGFyU3ZnIGlzRmlsbGVkPXtyZXZpZXcgPiAwICYmIGN1cnJlbnRTdGFyIDw9IHJldmlldyB9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBTdGFyU3ZnKHsgaXNGaWxsZWQgPSBmYWxzZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTEyIDE4bC01LjI2IDIuNzY1YTEgMSAwIDAxLTEuNDUtMS4wNTRsMS4wMDQtNS44NTctNC4yNTYtNC4xNDhBMSAxIDAgMDEyLjU5MiA4bDUuODgxLS44NTQgMi42My01LjMyOWExIDEgMCAwMTEuNzk0IDBsMi42MyA1LjMyOSA1Ljg4Ljg1NGExIDEgMCAwMS41NTUgMS43MDZsLTQuMjU2IDQuMTQ4IDEuMDA1IDUuODU3YTEgMSAwIDAxLTEuNDUxIDEuMDU0TDEyIDE4elwiXHJcbiAgICAgICAgICBmaWxsPXtpc0ZpbGxlZCA/ICcjZmZjYzAwJyA6ICcjZmZmJ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1N0YXJzXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsInN0YXJzIiwiUmV2aWV3U3RhcnMiLCJyZXZpZXciLCJtYXAiLCJjdXJyZW50U3RhciIsIlN0YXJTdmciLCJpc0ZpbGxlZCJdLCJzb3VyY2VSb290IjoiIn0=