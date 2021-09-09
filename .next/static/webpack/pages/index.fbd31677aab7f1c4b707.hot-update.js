"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/app/product/ProductCardImage.js":
/*!****************************************************!*\
  !*** ./components/app/product/ProductCardImage.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCardImage.js",
    _templateObject,
    _templateObject2;







function ProductCardImage(_ref) {
  var image = _ref.image,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? 'Photo' : _ref$alt;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {
    centered: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledImg, {
      src: image,
      alt: alt,
      width: "480",
      height: "480"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = ProductCardImage;
var Container = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default)(_components_ui__WEBPACK_IMPORTED_MODULE_4__.Box)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  max-width: 220px;\n  height: 185px;\n  max-height: 185px;\n  position: relative;\n  overflow: hidden;\n"])));
_c2 = Container;
var StyledImg = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default)((next_image__WEBPACK_IMPORTED_MODULE_3___default()))(_templateObject2 || (_templateObject2 = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  height: 100%;\n  width: auto;\n"])));
_c3 = StyledImg;
/* harmony default export */ __webpack_exports__["default"] = (ProductCardImage);

var _c, _c2, _c3;

$RefreshReg$(_c, "ProductCardImage");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "StyledImg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmJkMzE2NzdhYWI3ZjFjNGI3MDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQSxTQUFTSSxnQkFBVCxPQUFvRDtBQUFBLE1BQXhCQyxLQUF3QixRQUF4QkEsS0FBd0I7QUFBQSxzQkFBakJDLEdBQWlCO0FBQUEsTUFBakJBLEdBQWlCLHlCQUFYLE9BQVc7QUFDbEQsc0JBQ0UsOERBQUMsU0FBRDtBQUFXLFlBQVEsTUFBbkI7QUFBQSwyQkFDRSw4REFBQyxTQUFEO0FBQVcsU0FBRyxFQUFFRCxLQUFoQjtBQUF1QixTQUFHLEVBQUVDLEdBQTVCO0FBQWlDLFdBQUssRUFBQyxLQUF2QztBQUE2QyxZQUFNLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztLQU5RRjtBQVFULElBQU1HLFNBQVMsR0FBR04sd0RBQU0sQ0FBQ0UsK0NBQUQsQ0FBVCxnVEFBZjtNQUFNSTtBQVFOLElBQU1DLFNBQVMsR0FBR1Asd0RBQU0sQ0FBQ0MsbURBQUQsQ0FBVCwwT0FBZjtNQUFNTTtBQUtOLCtEQUFlSixnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwcC9wcm9kdWN0L1Byb2R1Y3RDYXJkSW1hZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkSW1hZ2UoeyBpbWFnZSwgYWx0ID0gJ1Bob3RvJyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2VudGVyZWQ+XHJcbiAgICAgIDxTdHlsZWRJbWcgc3JjPXtpbWFnZX0gYWx0PXthbHR9IHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiNDgwXCIgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgXHJcbiAgbWF4LXdpZHRoOiAyMjBweDtcclxuICBoZWlnaHQ6IDE4NXB4O1xyXG4gIG1heC1oZWlnaHQ6IDE4NXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gXHJcblxyXG5jb25zdCBTdHlsZWRJbWcgPSBzdHlsZWQoSW1hZ2UpYFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogYXV0bztcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRJbWFnZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJJbWFnZSIsIkJveCIsIlByb2R1Y3RDYXJkSW1hZ2UiLCJpbWFnZSIsImFsdCIsIkNvbnRhaW5lciIsIlN0eWxlZEltZyJdLCJzb3VyY2VSb290IjoiIn0=