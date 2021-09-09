"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/app/product/ProductCard.js":
/*!***********************************************!*\
  !*** ./components/app/product/ProductCard.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _ProductCardDetailText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductCardDetailText */ "./components/app/product/ProductCardDetailText.js");
/* harmony import */ var _ProductCardImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductCardImage */ "./components/app/product/ProductCardImage.js");
/* harmony import */ var _ProductCardPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductCardPrice */ "./components/app/product/ProductCardPrice.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCard.js",
    _templateObject;










function ProductCard(_ref) {
  var productId = _ref.productId,
      shortName = _ref.shortName,
      image = _ref.image,
      price = _ref.price,
      originalPrice = _ref.originalPrice,
      packageContent = _ref.packageContent,
      review = _ref.review;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Container, {
    centered: true,
    wrap: "wrap",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ProductCardImage__WEBPACK_IMPORTED_MODULE_6__.default, {
      image: image,
      alt: shortName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
      direction: "column",
      style: {
        border: '3px solid red'
      },
      full: true,
      padding: "4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {
        as: "h4",
        size: "5",
        children: shortName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Detail, {
        text: "Price",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ProductCardPrice__WEBPACK_IMPORTED_MODULE_7__.default, {
          price: price,
          originalPrice: originalPrice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Detail, {
        text: "Package",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: packageContent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Detail, {
        text: "Review"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_c = ProductCard;

function Detail(_ref2) {
  var text = _ref2.text,
      children = _ref2.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    justify: "space-between",
    alignItems: "center",
    style: {
      marginBottom: _tokens__WEBPACK_IMPORTED_MODULE_4__.spacing.t4
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_c2 = Detail;
var Container = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  max-width: 567px;\n  margin-bottom: ", ";\n  background-color: ", ";\n"])), _tokens__WEBPACK_IMPORTED_MODULE_4__.spacing.t4, _tokens__WEBPACK_IMPORTED_MODULE_4__.colors.grey100);
_c3 = Container;
/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

var _c, _c2, _c3;

$RefreshReg$(_c, "ProductCard");
$RefreshReg$(_c2, "Detail");
$RefreshReg$(_c3, "Container");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRhOTZiNzlhNmUwMzhhYmRjMmEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1MsV0FBVCxPQUFvRztBQUFBLE1BQTdFQyxTQUE2RSxRQUE3RUEsU0FBNkU7QUFBQSxNQUFsRUMsU0FBa0UsUUFBbEVBLFNBQWtFO0FBQUEsTUFBdkRDLEtBQXVELFFBQXZEQSxLQUF1RDtBQUFBLE1BQWhEQyxLQUFnRCxRQUFoREEsS0FBZ0Q7QUFBQSxNQUF6Q0MsYUFBeUMsUUFBekNBLGFBQXlDO0FBQUEsTUFBMUJDLGNBQTBCLFFBQTFCQSxjQUEwQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUNsRyxzQkFDRSw4REFBQyxTQUFEO0FBQVcsWUFBUSxNQUFuQjtBQUFvQixRQUFJLEVBQUMsTUFBekI7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFXLFdBQUssRUFBRUosS0FBbEI7QUFBeUIsU0FBRyxFQUFFRDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQXdCLFdBQUssRUFBRTtBQUFFTSxRQUFBQSxNQUFNLEVBQUU7QUFBVixPQUEvQjtBQUE0RCxVQUFJLE1BQWhFO0FBQWlFLGFBQU8sRUFBQyxHQUF6RTtBQUFBLDhCQUNFLDhEQUFDLGdEQUFEO0FBQU0sVUFBRSxFQUFDLElBQVQ7QUFBYyxZQUFJLEVBQUMsR0FBbkI7QUFBQSxrQkFBd0JOO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUMsT0FBYjtBQUFBLCtCQUNFLDhEQUFDLHNEQUFEO0FBQU8sZUFBSyxFQUFFRSxLQUFkO0FBQXFCLHVCQUFhLEVBQUVDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRSw4REFBQyxNQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBQSwrQkFDRSw4REFBQywyREFBRDtBQUFBLG9CQUFhQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFRRSw4REFBQyxNQUFEO0FBQVEsWUFBSSxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0tBaEJRTjs7QUFrQlQsU0FBU1MsTUFBVCxRQUFvQztBQUFBLE1BQWxCQyxJQUFrQixTQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7QUFDbEMsc0JBQ0UsOERBQUMsK0NBQUQ7QUFBSyxXQUFPLEVBQUMsZUFBYjtBQUE2QixjQUFVLEVBQUMsUUFBeEM7QUFBaUQsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLFlBQVksRUFBRWhCLCtDQUFVaUI7QUFBMUIsS0FBeEQ7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFBLGdCQUFhSDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHQyxRQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O01BUFFGO0FBU1QsSUFBTUssU0FBUyxHQUFHdEIsd0RBQU0sQ0FBQ0MsK0NBQUQsQ0FBVCxnUkFFSUcsK0NBRkosRUFHT0QsbURBSFAsQ0FBZjtNQUFNbUI7QUFNTiwrREFBZWQsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwcC9wcm9kdWN0L1Byb2R1Y3RDYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuaW1wb3J0IHsgY29sb3JzLCBzcGFjaW5nIH0gZnJvbSAnL3Rva2VucydcclxuXHJcbmltcG9ydCBEZXRhaWxUZXh0IGZyb20gJy4vUHJvZHVjdENhcmREZXRhaWxUZXh0J1xyXG5pbXBvcnQgQ2FyZEltYWdlIGZyb20gJy4vUHJvZHVjdENhcmRJbWFnZSdcclxuaW1wb3J0IFByaWNlIGZyb20gJy4vUHJvZHVjdENhcmRQcmljZSdcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgcHJvZHVjdElkLCBzaG9ydE5hbWUsIGltYWdlLCBwcmljZSwgb3JpZ2luYWxQcmljZSwgcGFja2FnZUNvbnRlbnQsIHJldmlldyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2VudGVyZWQgd3JhcD1cIndyYXBcIj5cclxuICAgICAgPENhcmRJbWFnZSBpbWFnZT17aW1hZ2V9IGFsdD17c2hvcnROYW1lfSAvPlxyXG4gICAgICA8Qm94IGRpcmVjdGlvbj1cImNvbHVtblwiIHN0eWxlPXt7IGJvcmRlcjogJzNweCBzb2xpZCByZWQnIH19IGZ1bGwgcGFkZGluZz1cIjRcIj5cclxuICAgICAgICA8VGV4dCBhcz1cImg0XCIgc2l6ZT1cIjVcIj57c2hvcnROYW1lfTwvVGV4dD5cclxuICAgICAgICA8RGV0YWlsIHRleHQ9XCJQcmljZVwiPlxyXG4gICAgICAgICAgPFByaWNlIHByaWNlPXtwcmljZX0gb3JpZ2luYWxQcmljZT17b3JpZ2luYWxQcmljZX0gLz5cclxuICAgICAgICA8L0RldGFpbD5cclxuICAgICAgICA8RGV0YWlsIHRleHQ9XCJQYWNrYWdlXCI+XHJcbiAgICAgICAgICA8RGV0YWlsVGV4dD57cGFja2FnZUNvbnRlbnR9PC9EZXRhaWxUZXh0PlxyXG4gICAgICAgIDwvRGV0YWlsPlxyXG4gICAgICAgIDxEZXRhaWwgdGV4dD1cIlJldmlld1wiPjwvRGV0YWlsPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRGV0YWlsKHsgdGV4dCwgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogc3BhY2luZy50NCB9fT5cclxuICAgICAgPERldGFpbFRleHQ+e3RleHR9PC9EZXRhaWxUZXh0PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxyXG4gIG1heC13aWR0aDogNTY3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogJHtzcGFjaW5nLnQ0fTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5ncmV5MTAwfTtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmRcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQm94IiwiVGV4dCIsImNvbG9ycyIsInNwYWNpbmciLCJEZXRhaWxUZXh0IiwiQ2FyZEltYWdlIiwiUHJpY2UiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3RJZCIsInNob3J0TmFtZSIsImltYWdlIiwicHJpY2UiLCJvcmlnaW5hbFByaWNlIiwicGFja2FnZUNvbnRlbnQiLCJyZXZpZXciLCJib3JkZXIiLCJEZXRhaWwiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJtYXJnaW5Cb3R0b20iLCJ0NCIsIkNvbnRhaW5lciIsImdyZXkxMDAiXSwic291cmNlUm9vdCI6IiJ9