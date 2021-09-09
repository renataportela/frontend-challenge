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
      full: true,
      padding: "4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {
        as: "h4",
        size: "5",
        mb: "4",
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


/***/ }),

/***/ "./components/ui/Text.js":
/*!*******************************!*\
  !*** ./components/ui/Text.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _templateObject;






var typographyStyles = function typographyStyles(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$family = _ref.family,
      family = _ref$family === void 0 ? _tokens__WEBPACK_IMPORTED_MODULE_3__.fontFamily.default : _ref$family,
      _ref$lineThrough = _ref.lineThrough,
      lineThrough = _ref$lineThrough === void 0 ? false : _ref$lineThrough,
      size = _ref.size,
      _ref$lineHeight = _ref.lineHeight,
      lineHeight = _ref$lineHeight === void 0 ? size : _ref$lineHeight,
      mb = _ref.mb,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'normal' : _ref$weight;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)(_templateObject || (_templateObject = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    margin-bottom: ", ";\n    text-decoration: ", ";\n  "])), _tokens__WEBPACK_IMPORTED_MODULE_3__.colors[color] || color, family, _tokens__WEBPACK_IMPORTED_MODULE_3__.fontSize["t".concat(size)] || "inherit", weight, _tokens__WEBPACK_IMPORTED_MODULE_3__.lineHeight["t".concat(lineHeight)] || "inherit", _tokens__WEBPACK_IMPORTED_MODULE_3__.spacing["t".concat(mb)] || 0, lineThrough ? 'line-through' : 'none');
};

var Text = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_1__.default)('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return (0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__.default)(prop) && !['as', 'size', 'weight'].includes(prop);
  }
})(typographyStyles);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGIyNDVkNTVjN2VlZDRkZDViODMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1MsV0FBVCxPQUFvRztBQUFBLE1BQTdFQyxTQUE2RSxRQUE3RUEsU0FBNkU7QUFBQSxNQUFsRUMsU0FBa0UsUUFBbEVBLFNBQWtFO0FBQUEsTUFBdkRDLEtBQXVELFFBQXZEQSxLQUF1RDtBQUFBLE1BQWhEQyxLQUFnRCxRQUFoREEsS0FBZ0Q7QUFBQSxNQUF6Q0MsYUFBeUMsUUFBekNBLGFBQXlDO0FBQUEsTUFBMUJDLGNBQTBCLFFBQTFCQSxjQUEwQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUNsRyxzQkFDRSw4REFBQyxTQUFEO0FBQVcsWUFBUSxNQUFuQjtBQUFvQixRQUFJLEVBQUMsTUFBekI7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFXLFdBQUssRUFBRUosS0FBbEI7QUFBeUIsU0FBRyxFQUFFRDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQXdCLFVBQUksTUFBNUI7QUFBNkIsYUFBTyxFQUFDLEdBQXJDO0FBQUEsOEJBQ0UsOERBQUMsZ0RBQUQ7QUFBTSxVQUFFLEVBQUMsSUFBVDtBQUFjLFlBQUksRUFBQyxHQUFuQjtBQUF1QixVQUFFLEVBQUMsR0FBMUI7QUFBQSxrQkFBK0JBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUMsT0FBYjtBQUFBLCtCQUNFLDhEQUFDLHNEQUFEO0FBQU8sZUFBSyxFQUFFRSxLQUFkO0FBQXFCLHVCQUFhLEVBQUVDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRSw4REFBQyxNQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBQSwrQkFDRSw4REFBQywyREFBRDtBQUFBLG9CQUFhQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFRRSw4REFBQyxNQUFEO0FBQVEsWUFBSSxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0tBaEJRTjs7QUFrQlQsU0FBU1EsTUFBVCxRQUFvQztBQUFBLE1BQWxCQyxJQUFrQixTQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7QUFDbEMsc0JBQ0UsOERBQUMsK0NBQUQ7QUFBSyxXQUFPLEVBQUMsZUFBYjtBQUE2QixjQUFVLEVBQUMsUUFBeEM7QUFBaUQsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLFlBQVksRUFBRWYsK0NBQVVnQjtBQUExQixLQUF4RDtBQUFBLDRCQUNFLDhEQUFDLDJEQUFEO0FBQUEsZ0JBQWFIO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdDLFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7TUFQUUY7QUFTVCxJQUFNSyxTQUFTLEdBQUdyQix3REFBTSxDQUFDQywrQ0FBRCxDQUFULGdSQUVJRywrQ0FGSixFQUdPRCxtREFIUCxDQUFmO01BQU1rQjtBQU1OLCtEQUFlYixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFFQTs7QUFRQSxJQUFNcUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLHdCQUN2QkMsS0FEdUI7QUFBQSxNQUN2QkEsS0FEdUIsMkJBQ2YsY0FEZTtBQUFBLHlCQUV2QkMsTUFGdUI7QUFBQSxNQUV2QkEsTUFGdUIsNEJBRWROLHVEQUZjO0FBQUEsOEJBR3ZCTyxXQUh1QjtBQUFBLE1BR3ZCQSxXQUh1QixpQ0FHVCxLQUhTO0FBQUEsTUFJdkJDLElBSnVCLFFBSXZCQSxJQUp1QjtBQUFBLDZCQUt2Qk4sVUFMdUI7QUFBQSxNQUt2QkEsVUFMdUIsZ0NBS1ZNLElBTFU7QUFBQSxNQU12QkMsRUFOdUIsUUFNdkJBLEVBTnVCO0FBQUEseUJBT3ZCQyxNQVB1QjtBQUFBLE1BT3ZCQSxNQVB1Qiw0QkFPZCxRQVBjO0FBQUEsU0FTdkJYLG1EQVR1QixnWEFVWnJCLDJDQUFNLENBQUMyQixLQUFELENBQU4sSUFBaUJBLEtBVkwsRUFXTkMsTUFYTSxFQVlSTCw2Q0FBUSxZQUFLTyxJQUFMLEVBQVIsSUFBd0IsU0FaaEIsRUFhTkUsTUFiTSxFQWNOUCwrQ0FBZ0IsWUFBS0QsVUFBTCxFQUFoQixJQUFzQyxTQWRoQyxFQWVKdkIsNENBQU8sWUFBSzhCLEVBQUwsRUFBUCxJQUFxQixDQWZqQixFQWdCRkYsV0FBVyxHQUFHLGNBQUgsR0FBb0IsTUFoQjdCO0FBQUEsQ0FBekI7O0FBbUJBLElBQU05QixJQUFJLEdBQUdGLHdEQUFNLENBQUMsTUFBRCxFQUFTO0FBQzFCb0MsRUFBQUEsaUJBQWlCLEVBQUUsMkJBQUFDLElBQUk7QUFBQSxXQUNyQmQsK0RBQVcsQ0FBQ2MsSUFBRCxDQUFYLElBQXFCLENBQUMsQ0FBQyxJQUFELEVBQU8sTUFBUCxFQUFlLFFBQWYsRUFBeUJDLFFBQXpCLENBQWtDRCxJQUFsQyxDQUREO0FBQUE7QUFERyxDQUFULENBQU4sQ0FHVlIsZ0JBSFUsQ0FBYjtBQUtBLCtEQUFlM0IsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwcC9wcm9kdWN0L1Byb2R1Y3RDYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VpL1RleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5pbXBvcnQgeyBjb2xvcnMsIHNwYWNpbmcgfSBmcm9tICcvdG9rZW5zJ1xyXG5cclxuaW1wb3J0IERldGFpbFRleHQgZnJvbSAnLi9Qcm9kdWN0Q2FyZERldGFpbFRleHQnXHJcbmltcG9ydCBDYXJkSW1hZ2UgZnJvbSAnLi9Qcm9kdWN0Q2FyZEltYWdlJ1xyXG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9Qcm9kdWN0Q2FyZFByaWNlJ1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBwcm9kdWN0SWQsIHNob3J0TmFtZSwgaW1hZ2UsIHByaWNlLCBvcmlnaW5hbFByaWNlLCBwYWNrYWdlQ29udGVudCwgcmV2aWV3IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjZW50ZXJlZCB3cmFwPVwid3JhcFwiPlxyXG4gICAgICA8Q2FyZEltYWdlIGltYWdlPXtpbWFnZX0gYWx0PXtzaG9ydE5hbWV9IC8+XHJcbiAgICAgIDxCb3ggZGlyZWN0aW9uPVwiY29sdW1uXCIgZnVsbCBwYWRkaW5nPVwiNFwiPlxyXG4gICAgICAgIDxUZXh0IGFzPVwiaDRcIiBzaXplPVwiNVwiIG1iPVwiNFwiPntzaG9ydE5hbWV9PC9UZXh0PlxyXG4gICAgICAgIDxEZXRhaWwgdGV4dD1cIlByaWNlXCI+XHJcbiAgICAgICAgICA8UHJpY2UgcHJpY2U9e3ByaWNlfSBvcmlnaW5hbFByaWNlPXtvcmlnaW5hbFByaWNlfSAvPlxyXG4gICAgICAgIDwvRGV0YWlsPlxyXG4gICAgICAgIDxEZXRhaWwgdGV4dD1cIlBhY2thZ2VcIj5cclxuICAgICAgICAgIDxEZXRhaWxUZXh0PntwYWNrYWdlQ29udGVudH08L0RldGFpbFRleHQ+XHJcbiAgICAgICAgPC9EZXRhaWw+XHJcbiAgICAgICAgPERldGFpbCB0ZXh0PVwiUmV2aWV3XCI+PC9EZXRhaWw+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBEZXRhaWwoeyB0ZXh0LCBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3gganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBzcGFjaW5nLnQ0IH19PlxyXG4gICAgICA8RGV0YWlsVGV4dD57dGV4dH08L0RldGFpbFRleHQ+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgXHJcbiAgbWF4LXdpZHRoOiA1NjdweDtcclxuICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmcudDR9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXkxMDB9O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZFxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IGlzUHJvcFZhbGlkIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5cclxuaW1wb3J0IHtcclxuICBjb2xvcnMsXHJcbiAgZm9udEZhbWlseSxcclxuICBmb250U2l6ZSxcclxuICBsaW5lSGVpZ2h0IGFzIGxpbmVIZWlnaHRUb2tlbnMsXHJcbiAgc3BhY2luZyxcclxufSBmcm9tIFwiL3Rva2Vuc1wiO1xyXG5cclxuY29uc3QgdHlwb2dyYXBoeVN0eWxlcyA9ICh7XHJcbiAgY29sb3IgPSAnY3VycmVudENvbG9yJyxcclxuICBmYW1pbHkgPSBmb250RmFtaWx5LmRlZmF1bHQsXHJcbiAgbGluZVRocm91Z2ggPSBmYWxzZSxcclxuICBzaXplLFxyXG4gIGxpbmVIZWlnaHQgPSBzaXplLFxyXG4gIG1iLFxyXG4gIHdlaWdodCA9ICdub3JtYWwnXHJcbn0pID0+XHJcbiAgY3NzYFxyXG4gICAgY29sb3I6ICR7Y29sb3JzW2NvbG9yXSB8fCBjb2xvcn07XHJcbiAgICBmb250LWZhbWlseTogJHtmYW1pbHl9O1xyXG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplW2B0JHtzaXplfWBdIHx8IFwiaW5oZXJpdFwifTtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3dlaWdodH07XHJcbiAgICBsaW5lLWhlaWdodDogJHtsaW5lSGVpZ2h0VG9rZW5zW2B0JHtsaW5lSGVpZ2h0fWBdIHx8IFwiaW5oZXJpdFwifTtcclxuICAgIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZ1tgdCR7bWJ9YF0gfHwgMH07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246ICR7bGluZVRocm91Z2ggPyAnbGluZS10aHJvdWdoJyA6ICdub25lJ307XHJcbiAgYDtcclxuXHJcbmNvbnN0IFRleHQgPSBzdHlsZWQoJ3NwYW4nLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT5cclxuICAgIGlzUHJvcFZhbGlkKHByb3ApICYmICFbJ2FzJywgJ3NpemUnLCAnd2VpZ2h0J10uaW5jbHVkZXMocHJvcClcclxufSkodHlwb2dyYXBoeVN0eWxlcylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiQm94IiwiVGV4dCIsImNvbG9ycyIsInNwYWNpbmciLCJEZXRhaWxUZXh0IiwiQ2FyZEltYWdlIiwiUHJpY2UiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3RJZCIsInNob3J0TmFtZSIsImltYWdlIiwicHJpY2UiLCJvcmlnaW5hbFByaWNlIiwicGFja2FnZUNvbnRlbnQiLCJyZXZpZXciLCJEZXRhaWwiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJtYXJnaW5Cb3R0b20iLCJ0NCIsIkNvbnRhaW5lciIsImdyZXkxMDAiLCJpc1Byb3BWYWxpZCIsImNzcyIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0VG9rZW5zIiwidHlwb2dyYXBoeVN0eWxlcyIsImNvbG9yIiwiZmFtaWx5IiwibGluZVRocm91Z2giLCJzaXplIiwibWIiLCJ3ZWlnaHQiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=