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
/* harmony import */ var _ReviewStars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReviewStars */ "./components/app/product/ReviewStars.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Container, {
    centered: true,
    wrap: "wrap",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ProductCardImage__WEBPACK_IMPORTED_MODULE_6__.default, {
      image: image,
      alt: shortName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
      direction: "column",
      full: true,
      padding: "4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {
        as: "h4",
        size: "5",
        mb: "3",
        children: shortName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Detail, {
        text: "Price",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ProductCardPrice__WEBPACK_IMPORTED_MODULE_7__.default, {
          price: price,
          originalPrice: originalPrice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Detail, {
        text: "Package",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_5__.default, {
          children: packageContent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Detail, {
        text: "Review",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ReviewStars__WEBPACK_IMPORTED_MODULE_8__.default, {
          review: review
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_c = ProductCard;

function Detail(_ref2) {
  var text = _ref2.text,
      children = _ref2.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    justify: "space-between",
    alignItems: "center",
    style: {
      marginBottom: _tokens__WEBPACK_IMPORTED_MODULE_4__.spacing.t4
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
    width: "24",
    height: "24",
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
        fill: isFilled ? '#f1c40f' : '#fff'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzYyODU2MWRlODQ2N2Y0NWM0NmMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1UsV0FBVCxPQUFvRztBQUFBLE1BQTdFQyxTQUE2RSxRQUE3RUEsU0FBNkU7QUFBQSxNQUFsRUMsU0FBa0UsUUFBbEVBLFNBQWtFO0FBQUEsTUFBdkRDLEtBQXVELFFBQXZEQSxLQUF1RDtBQUFBLE1BQWhEQyxLQUFnRCxRQUFoREEsS0FBZ0Q7QUFBQSxNQUF6Q0MsYUFBeUMsUUFBekNBLGFBQXlDO0FBQUEsTUFBMUJDLGNBQTBCLFFBQTFCQSxjQUEwQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUNsRyxzQkFDRSw4REFBQyxTQUFEO0FBQVcsWUFBUSxNQUFuQjtBQUFvQixRQUFJLEVBQUMsTUFBekI7QUFBQSw0QkFDRSw4REFBQyxzREFBRDtBQUFXLFdBQUssRUFBRUosS0FBbEI7QUFBeUIsU0FBRyxFQUFFRDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQXdCLFVBQUksTUFBNUI7QUFBNkIsYUFBTyxFQUFDLEdBQXJDO0FBQUEsOEJBQ0UsOERBQUMsZ0RBQUQ7QUFBTSxVQUFFLEVBQUMsSUFBVDtBQUFjLFlBQUksRUFBQyxHQUFuQjtBQUF1QixVQUFFLEVBQUMsR0FBMUI7QUFBQSxrQkFBK0JBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUMsT0FBYjtBQUFBLCtCQUNFLDhEQUFDLHNEQUFEO0FBQU8sZUFBSyxFQUFFRSxLQUFkO0FBQXFCLHVCQUFhLEVBQUVDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRSw4REFBQyxNQUFEO0FBQVEsWUFBSSxFQUFDLFNBQWI7QUFBQSwrQkFDRSw4REFBQywyREFBRDtBQUFBLG9CQUFhQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFRRSw4REFBQyxNQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQSwrQkFDRSw4REFBQyxpREFBRDtBQUFhLGdCQUFNLEVBQUVDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0tBbEJRUDs7QUFvQlQsU0FBU1EsTUFBVCxRQUFvQztBQUFBLE1BQWxCQyxJQUFrQixTQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxRQUFZLFNBQVpBLFFBQVk7QUFDbEMsc0JBQ0UsOERBQUMsK0NBQUQ7QUFBSyxXQUFPLEVBQUMsZUFBYjtBQUE2QixjQUFVLEVBQUMsUUFBeEM7QUFBaUQsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLFlBQVksRUFBRWhCLCtDQUFVaUI7QUFBMUIsS0FBeEQ7QUFBQSw0QkFDRSw4REFBQywyREFBRDtBQUFBLGdCQUFhSDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHQyxRQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O01BUFFGO0FBU1QsSUFBTUssU0FBUyxHQUFHdEIsd0RBQU0sQ0FBQ0MsK0NBQUQsQ0FBVCxnUkFFSUcsK0NBRkosRUFHT0QsbURBSFAsQ0FBZjtNQUFNbUI7QUFNTiwrREFBZWIsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFFQTs7QUFFQSxJQUFNZSxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxDQUFkOztBQUVBLFNBQVNoQixXQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBVlEsTUFBVSxRQUFWQSxNQUFVO0FBQy9CLHNCQUNFLDhEQUFDLCtDQUFEO0FBQUEsY0FDR1EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQUMsV0FBVztBQUFBLDBCQUNwQiw4REFBQyxPQUFEO0FBQVMsZ0JBQVEsRUFBRVYsTUFBTSxHQUFHLENBQVQsSUFBY1UsV0FBVyxJQUFJVjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG9CO0FBQUEsS0FBckI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7S0FSUVI7O0FBVVQsU0FBU21CLE9BQVQsUUFBdUM7QUFBQSw2QkFBcEJDLFFBQW9CO0FBQUEsTUFBcEJBLFFBQW9CLCtCQUFULEtBQVM7QUFDckMsc0JBQ0U7QUFBSyxTQUFLLEVBQUMsSUFBWDtBQUFnQixVQUFNLEVBQUMsSUFBdkI7QUFBNEIsU0FBSyxFQUFDLDRCQUFsQztBQUFBLDJCQUNFO0FBQUcsVUFBSSxFQUFDLE1BQVI7QUFBZSxtQkFBVSxTQUF6QjtBQUFBLDhCQUNFO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxTQUFDLEVBQUMsa05BREo7QUFFRSxZQUFJLEVBQUVBLFFBQVEsR0FBRyxTQUFILEdBQWU7QUFGL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztNQVpRRDtBQWNULCtEQUFlbkIsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwcC9wcm9kdWN0L1Byb2R1Y3RDYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FwcC9wcm9kdWN0L1Jldmlld1N0YXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5pbXBvcnQgeyBCb3gsIFRleHQgfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuaW1wb3J0IHsgY29sb3JzLCBzcGFjaW5nIH0gZnJvbSAnL3Rva2VucydcclxuXHJcbmltcG9ydCBEZXRhaWxUZXh0IGZyb20gJy4vUHJvZHVjdENhcmREZXRhaWxUZXh0J1xyXG5pbXBvcnQgQ2FyZEltYWdlIGZyb20gJy4vUHJvZHVjdENhcmRJbWFnZSdcclxuaW1wb3J0IFByaWNlIGZyb20gJy4vUHJvZHVjdENhcmRQcmljZSdcclxuaW1wb3J0IFJldmlld1N0YXJzIGZyb20gJy4vUmV2aWV3U3RhcnMnXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0Q2FyZCh7IHByb2R1Y3RJZCwgc2hvcnROYW1lLCBpbWFnZSwgcHJpY2UsIG9yaWdpbmFsUHJpY2UsIHBhY2thZ2VDb250ZW50LCByZXZpZXcgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNlbnRlcmVkIHdyYXA9XCJ3cmFwXCI+XHJcbiAgICAgIDxDYXJkSW1hZ2UgaW1hZ2U9e2ltYWdlfSBhbHQ9e3Nob3J0TmFtZX0gLz5cclxuICAgICAgPEJveCBkaXJlY3Rpb249XCJjb2x1bW5cIiBmdWxsIHBhZGRpbmc9XCI0XCI+XHJcbiAgICAgICAgPFRleHQgYXM9XCJoNFwiIHNpemU9XCI1XCIgbWI9XCIzXCI+e3Nob3J0TmFtZX08L1RleHQ+XHJcbiAgICAgICAgPERldGFpbCB0ZXh0PVwiUHJpY2VcIj5cclxuICAgICAgICAgIDxQcmljZSBwcmljZT17cHJpY2V9IG9yaWdpbmFsUHJpY2U9e29yaWdpbmFsUHJpY2V9IC8+XHJcbiAgICAgICAgPC9EZXRhaWw+XHJcbiAgICAgICAgPERldGFpbCB0ZXh0PVwiUGFja2FnZVwiPlxyXG4gICAgICAgICAgPERldGFpbFRleHQ+e3BhY2thZ2VDb250ZW50fTwvRGV0YWlsVGV4dD5cclxuICAgICAgICA8L0RldGFpbD5cclxuICAgICAgICA8RGV0YWlsIHRleHQ9XCJSZXZpZXdcIj5cclxuICAgICAgICAgIDxSZXZpZXdTdGFycyByZXZpZXc9e3Jldmlld30gLz5cclxuICAgICAgICA8L0RldGFpbD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIERldGFpbCh7IHRleHQsIGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IHNwYWNpbmcudDQgfX0+XHJcbiAgICAgIDxEZXRhaWxUZXh0Pnt0ZXh0fTwvRGV0YWlsVGV4dD5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQm94KWBcclxuICBtYXgtd2lkdGg6IDU2N3B4O1xyXG4gIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZy50NH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JleTEwMH07XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5cclxuY29uc3Qgc3RhcnMgPSBbMSwyLDMsNCw1XVxyXG5cclxuZnVuY3Rpb24gUmV2aWV3U3RhcnMoeyByZXZpZXcgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICB7c3RhcnMubWFwKGN1cnJlbnRTdGFyID0+IChcclxuICAgICAgICA8U3RhclN2ZyBpc0ZpbGxlZD17cmV2aWV3ID4gMCAmJiBjdXJyZW50U3RhciA8PSByZXZpZXcgfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gU3RhclN2Zyh7IGlzRmlsbGVkID0gZmFsc2UgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTEyIDE4bC01LjI2IDIuNzY1YTEgMSAwIDAxLTEuNDUtMS4wNTRsMS4wMDQtNS44NTctNC4yNTYtNC4xNDhBMSAxIDAgMDEyLjU5MiA4bDUuODgxLS44NTQgMi42My01LjMyOWExIDEgMCAwMTEuNzk0IDBsMi42MyA1LjMyOSA1Ljg4Ljg1NGExIDEgMCAwMS41NTUgMS43MDZsLTQuMjU2IDQuMTQ4IDEuMDA1IDUuODU3YTEgMSAwIDAxLTEuNDUxIDEuMDU0TDEyIDE4elwiXHJcbiAgICAgICAgICBmaWxsPXtpc0ZpbGxlZCA/ICcjZjFjNDBmJyA6ICcjZmZmJ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1N0YXJzXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkJveCIsIlRleHQiLCJjb2xvcnMiLCJzcGFjaW5nIiwiRGV0YWlsVGV4dCIsIkNhcmRJbWFnZSIsIlByaWNlIiwiUmV2aWV3U3RhcnMiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3RJZCIsInNob3J0TmFtZSIsImltYWdlIiwicHJpY2UiLCJvcmlnaW5hbFByaWNlIiwicGFja2FnZUNvbnRlbnQiLCJyZXZpZXciLCJEZXRhaWwiLCJ0ZXh0IiwiY2hpbGRyZW4iLCJtYXJnaW5Cb3R0b20iLCJ0NCIsIkNvbnRhaW5lciIsImdyZXkxMDAiLCJzdGFycyIsIm1hcCIsImN1cnJlbnRTdGFyIiwiU3RhclN2ZyIsImlzRmlsbGVkIl0sInNvdXJjZVJvb3QiOiIifQ==