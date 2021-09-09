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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGZmYWQxZmI4ZTA4ZmE0YzczOWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1MsV0FBVCxPQUFvRztBQUFBLE1BQTdFQyxTQUE2RSxRQUE3RUEsU0FBNkU7QUFBQSxNQUFsRUMsU0FBa0UsUUFBbEVBLFNBQWtFO0FBQUEsTUFBdkRDLEtBQXVELFFBQXZEQSxLQUF1RDtBQUFBLE1BQWhEQyxLQUFnRCxRQUFoREEsS0FBZ0Q7QUFBQSxNQUF6Q0MsYUFBeUMsUUFBekNBLGFBQXlDO0FBQUEsTUFBMUJDLGNBQTBCLFFBQTFCQSxjQUEwQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUNsRyxzQkFDRSw4REFBQyxTQUFEO0FBQVcsWUFBUSxNQUFuQjtBQUFvQixRQUFJLEVBQUMsTUFBekI7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFXLFdBQUssRUFBRUosS0FBbEI7QUFBeUIsU0FBRyxFQUFFRDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFLLFdBQUssRUFBRTtBQUFFTSxRQUFBQSxNQUFNLEVBQUU7QUFBVixPQUFaO0FBQXlDLFVBQUksTUFBN0M7QUFBOEMsYUFBTyxFQUFDLEdBQXREO0FBQUEsOEJBQ0UsOERBQUMsZ0RBQUQ7QUFBTSxVQUFFLEVBQUMsSUFBVDtBQUFjLFlBQUksRUFBQyxHQUFuQjtBQUFBLGtCQUF3Qk47QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsTUFBRDtBQUFRLFlBQUksRUFBQyxPQUFiO0FBQUEsK0JBQ0UsOERBQUMsc0RBQUQ7QUFBTyxlQUFLLEVBQUVFLEtBQWQ7QUFBcUIsdUJBQWEsRUFBRUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUtFLDhEQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUMsU0FBYjtBQUFBLCtCQUNFLDhEQUFDLDJEQUFEO0FBQUEsb0JBQWFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVFFLDhEQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7S0FoQlFOOztBQWtCVCxTQUFTUyxNQUFULFFBQW9DO0FBQUEsTUFBbEJDLElBQWtCLFNBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLFFBQVksU0FBWkEsUUFBWTtBQUNsQyxzQkFDRSw4REFBQywrQ0FBRDtBQUFLLFdBQU8sRUFBQyxlQUFiO0FBQTZCLGNBQVUsRUFBQyxRQUF4QztBQUFpRCxTQUFLLEVBQUU7QUFBRUMsTUFBQUEsWUFBWSxFQUFFaEIsK0NBQVVpQjtBQUExQixLQUF4RDtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQUEsZ0JBQWFIO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdDLFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7TUFQUUY7QUFTVCxJQUFNSyxTQUFTLEdBQUd0Qix3REFBTSxDQUFDQywrQ0FBRCxDQUFULGdSQUVJRywrQ0FGSixFQUdPRCxtREFIUCxDQUFmO01BQU1tQjtBQU1OLCtEQUFlZCxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXBwL3Byb2R1Y3QvUHJvZHVjdENhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5pbXBvcnQgeyBjb2xvcnMsIHNwYWNpbmcgfSBmcm9tICcvdG9rZW5zJ1xyXG5cclxuaW1wb3J0IERldGFpbFRleHQgZnJvbSAnLi9Qcm9kdWN0Q2FyZERldGFpbFRleHQnXHJcbmltcG9ydCBDYXJkSW1hZ2UgZnJvbSAnLi9Qcm9kdWN0Q2FyZEltYWdlJ1xyXG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9Qcm9kdWN0Q2FyZFByaWNlJ1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBwcm9kdWN0SWQsIHNob3J0TmFtZSwgaW1hZ2UsIHByaWNlLCBvcmlnaW5hbFByaWNlLCBwYWNrYWdlQ29udGVudCwgcmV2aWV3IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjZW50ZXJlZCB3cmFwPVwid3JhcFwiPlxyXG4gICAgICA8Q2FyZEltYWdlIGltYWdlPXtpbWFnZX0gYWx0PXtzaG9ydE5hbWV9IC8+XHJcbiAgICAgIDxCb3ggc3R5bGU9e3sgYm9yZGVyOiAnM3B4IHNvbGlkIHJlZCcgfX0gZnVsbCBwYWRkaW5nPVwiNFwiPlxyXG4gICAgICAgIDxUZXh0IGFzPVwiaDRcIiBzaXplPVwiNVwiPntzaG9ydE5hbWV9PC9UZXh0PlxyXG4gICAgICAgIDxEZXRhaWwgdGV4dD1cIlByaWNlXCI+XHJcbiAgICAgICAgICA8UHJpY2UgcHJpY2U9e3ByaWNlfSBvcmlnaW5hbFByaWNlPXtvcmlnaW5hbFByaWNlfSAvPlxyXG4gICAgICAgIDwvRGV0YWlsPlxyXG4gICAgICAgIDxEZXRhaWwgdGV4dD1cIlBhY2thZ2VcIj5cclxuICAgICAgICAgIDxEZXRhaWxUZXh0PntwYWNrYWdlQ29udGVudH08L0RldGFpbFRleHQ+XHJcbiAgICAgICAgPC9EZXRhaWw+XHJcbiAgICAgICAgPERldGFpbCB0ZXh0PVwiUmV2aWV3XCI+PC9EZXRhaWw+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEZXRhaWwoeyB0ZXh0LCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3gganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBzcGFjaW5nLnQ0IH19PlxyXG4gICAgICA8RGV0YWlsVGV4dD57dGV4dH08L0RldGFpbFRleHQ+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgXHJcbiAgbWF4LXdpZHRoOiA1NjdweDtcclxuICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmcudDR9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXkxMDB9O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJCb3giLCJUZXh0IiwiY29sb3JzIiwic3BhY2luZyIsIkRldGFpbFRleHQiLCJDYXJkSW1hZ2UiLCJQcmljZSIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdElkIiwic2hvcnROYW1lIiwiaW1hZ2UiLCJwcmljZSIsIm9yaWdpbmFsUHJpY2UiLCJwYWNrYWdlQ29udGVudCIsInJldmlldyIsImJvcmRlciIsIkRldGFpbCIsInRleHQiLCJjaGlsZHJlbiIsIm1hcmdpbkJvdHRvbSIsInQ0IiwiQ29udGFpbmVyIiwiZ3JleTEwMCJdLCJzb3VyY2VSb290IjoiIn0=