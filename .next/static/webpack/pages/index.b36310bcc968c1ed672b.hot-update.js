"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./store/cart.js":
/*!***********************!*\
  !*** ./store/cart.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMiniCartOpenAtom": function() { return /* binding */ isMiniCartOpenAtom; },
/* harmony export */   "cartAtom": function() { return /* binding */ cartAtom; },
/* harmony export */   "addToCartAtom": function() { return /* binding */ addToCartAtom; },
/* harmony export */   "removeFromCartAtom": function() { return /* binding */ removeFromCartAtom; },
/* harmony export */   "totalCartAtom": function() { return /* binding */ totalCartAtom; },
/* harmony export */   "countCartItemsAtom": function() { return /* binding */ countCartItemsAtom; }
/* harmony export */ });
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jotai */ "./node_modules/jotai/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var isMiniCartOpenAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(false);
var cartAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)([]);
var addToCartAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(null, function addToCart(get, set, product) {
  var cart = get(cartAtom);
  var index = cart.findIndex(function (o) {
    return o.id === product.id;
  });

  if (index === -1) {
    set(cartAtom, [].concat((0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(cart), [_objectSpread(_objectSpread({}, product), {}, {
      quantity: 1
    })]));
  } else {
    var update = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(cart);

    update[index].quantity += 1;
    set(cartAtom, update);
  }
});
var removeFromCartAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(null, function removeFromCart(get, set, productId) {
  var cart = get(cartAtom);
  var index = cart.findIndex(function (o) {
    return o.id === productId;
  });

  if (index > -1) {
    var copy = (0,D_dev_tentativas_estudo_barkyn_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(cart);

    copy.splice(index, 1);
    set(cartAtom, copy);
  }
});
var totalCartAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(function (get) {
  var sum = get(cartAtom).reduce(function (acc, product) {
    return acc + product.price;
  }, 0);
  return sum.toFixed(2);
});
var countCartItemsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)(function (get) {
  return get(cartAtom).length;
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjM2MzEwYmNjOTY4YzFlZDY3MmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUMsa0JBQWtCLEdBQUdELDJDQUFJLENBQUMsS0FBRCxDQUEvQjtBQUVBLElBQU1FLFFBQVEsR0FBR0YsMkNBQUksQ0FBQyxFQUFELENBQXJCO0FBRUEsSUFBTUcsYUFBYSxHQUFHSCwyQ0FBSSxDQUMvQixJQUQrQixFQUUvQixTQUFTSSxTQUFULENBQW1CQyxHQUFuQixFQUF3QkMsR0FBeEIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQ3BDLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSCxRQUFELENBQWhCO0FBQ0EsTUFBTU8sS0FBSyxHQUFHRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxFQUFGLEtBQVNMLE9BQU8sQ0FBQ0ssRUFBckI7QUFBQSxHQUFoQixDQUFkOztBQUVBLE1BQUlILEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEJILElBQUFBLEdBQUcsQ0FBQ0osUUFBRCwrSkFBZU0sSUFBZixvQ0FBMEJELE9BQTFCO0FBQW1DTSxNQUFBQSxRQUFRLEVBQUU7QUFBN0MsU0FBSDtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1DLE1BQU0sR0FBRyxtSkFBSU4sSUFBUCxDQUFaOztBQUNBTSxJQUFBQSxNQUFNLENBQUNMLEtBQUQsQ0FBTixDQUFjSSxRQUFkLElBQTBCLENBQTFCO0FBQ0FQLElBQUFBLEdBQUcsQ0FBQ0osUUFBRCxFQUFXWSxNQUFYLENBQUg7QUFDRDtBQUNGLENBYjhCLENBQTFCO0FBZ0JBLElBQU1DLGtCQUFrQixHQUFHZiwyQ0FBSSxDQUNwQyxJQURvQyxFQUVwQyxTQUFTZ0IsY0FBVCxDQUF3QlgsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQWtDVyxTQUFsQyxFQUE2QztBQUMzQyxNQUFNVCxJQUFJLEdBQUdILEdBQUcsQ0FBQ0gsUUFBRCxDQUFoQjtBQUNBLE1BQU1PLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxTQUFMLENBQWUsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSyxTQUFiO0FBQUEsR0FBaEIsQ0FBZDs7QUFFQSxNQUFJUixLQUFLLEdBQUcsQ0FBQyxDQUFiLEVBQWdCO0FBQ2QsUUFBSVMsSUFBSSxHQUFHLG1KQUFJVixJQUFQLENBQVI7O0FBQ0FVLElBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZVixLQUFaLEVBQW1CLENBQW5CO0FBQ0FILElBQUFBLEdBQUcsQ0FBQ0osUUFBRCxFQUFXZ0IsSUFBWCxDQUFIO0FBQ0Q7QUFDRixDQVhtQyxDQUEvQjtBQWNBLElBQU1FLGFBQWEsR0FBR3BCLDJDQUFJLENBQUMsVUFBQUssR0FBRyxFQUFJO0FBQ3ZDLE1BQU1nQixHQUFHLEdBQUdoQixHQUFHLENBQUNILFFBQUQsQ0FBSCxDQUFjb0IsTUFBZCxDQUFxQixVQUFDQyxHQUFELEVBQU1oQixPQUFOO0FBQUEsV0FBa0JnQixHQUFHLEdBQUdoQixPQUFPLENBQUNpQixLQUFoQztBQUFBLEdBQXJCLEVBQTRELENBQTVELENBQVo7QUFDQSxTQUFPSCxHQUFHLENBQUNJLE9BQUosQ0FBWSxDQUFaLENBQVA7QUFDRCxDQUhnQyxDQUExQjtBQUtBLElBQU1DLGtCQUFrQixHQUFHMUIsMkNBQUksQ0FBQyxVQUFBSyxHQUFHO0FBQUEsU0FBSUEsR0FBRyxDQUFDSCxRQUFELENBQUgsQ0FBY3lCLE1BQWxCO0FBQUEsQ0FBSixDQUEvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9jYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tICdqb3RhaSdcclxuXHJcbmV4cG9ydCBjb25zdCBpc01pbmlDYXJ0T3BlbkF0b20gPSBhdG9tKGZhbHNlKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcnRBdG9tID0gYXRvbShbXSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnRBdG9tID0gYXRvbShcclxuICBudWxsLFxyXG4gIGZ1bmN0aW9uIGFkZFRvQ2FydChnZXQsIHNldCwgcHJvZHVjdCkge1xyXG4gICAgY29uc3QgY2FydCA9IGdldChjYXJ0QXRvbSlcclxuICAgIGNvbnN0IGluZGV4ID0gY2FydC5maW5kSW5kZXgobyA9PiBvLmlkID09PSBwcm9kdWN0LmlkKVxyXG4gIFxyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICBzZXQoY2FydEF0b20sIFsuLi5jYXJ0LCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH1dKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdXBkYXRlID0gWy4uLmNhcnRdXHJcbiAgICAgIHVwZGF0ZVtpbmRleF0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICBzZXQoY2FydEF0b20sIHVwZGF0ZSlcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQ2FydEF0b20gPSBhdG9tKFxyXG4gIG51bGwsXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoZ2V0LCBzZXQsIHByb2R1Y3RJZCkge1xyXG4gICAgY29uc3QgY2FydCA9IGdldChjYXJ0QXRvbSlcclxuICAgIGNvbnN0IGluZGV4ID0gY2FydC5maW5kSW5kZXgobyA9PiBvLmlkID09PSBwcm9kdWN0SWQpICAgIFxyXG4gIFxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgbGV0IGNvcHkgPSBbLi4uY2FydF1cclxuICAgICAgY29weS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgIHNldChjYXJ0QXRvbSwgY29weSlcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCB0b3RhbENhcnRBdG9tID0gYXRvbShnZXQgPT4ge1xyXG4gIGNvbnN0IHN1bSA9IGdldChjYXJ0QXRvbSkucmVkdWNlKChhY2MsIHByb2R1Y3QpID0+IGFjYyArIHByb2R1Y3QucHJpY2UsIDApXHJcbiAgcmV0dXJuIHN1bS50b0ZpeGVkKDIpXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY291bnRDYXJ0SXRlbXNBdG9tID0gYXRvbShnZXQgPT4gZ2V0KGNhcnRBdG9tKS5sZW5ndGgpXHJcbiJdLCJuYW1lcyI6WyJhdG9tIiwiaXNNaW5pQ2FydE9wZW5BdG9tIiwiY2FydEF0b20iLCJhZGRUb0NhcnRBdG9tIiwiYWRkVG9DYXJ0IiwiZ2V0Iiwic2V0IiwicHJvZHVjdCIsImNhcnQiLCJpbmRleCIsImZpbmRJbmRleCIsIm8iLCJpZCIsInF1YW50aXR5IiwidXBkYXRlIiwicmVtb3ZlRnJvbUNhcnRBdG9tIiwicmVtb3ZlRnJvbUNhcnQiLCJwcm9kdWN0SWQiLCJjb3B5Iiwic3BsaWNlIiwidG90YWxDYXJ0QXRvbSIsInN1bSIsInJlZHVjZSIsImFjYyIsInByaWNlIiwidG9GaXhlZCIsImNvdW50Q2FydEl0ZW1zQXRvbSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=