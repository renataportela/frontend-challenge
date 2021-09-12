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
    return acc + parseFloat(product.price);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjUyNWI1ZjA3YjhhYmI0YTk5MGIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUMsa0JBQWtCLEdBQUdELDJDQUFJLENBQUMsS0FBRCxDQUEvQjtBQUVBLElBQU1FLFFBQVEsR0FBR0YsMkNBQUksQ0FBQyxFQUFELENBQXJCO0FBRUEsSUFBTUcsYUFBYSxHQUFHSCwyQ0FBSSxDQUMvQixJQUQrQixFQUUvQixTQUFTSSxTQUFULENBQW1CQyxHQUFuQixFQUF3QkMsR0FBeEIsRUFBNkJDLE9BQTdCLEVBQXNDO0FBQ3BDLE1BQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSCxRQUFELENBQWhCO0FBQ0EsTUFBTU8sS0FBSyxHQUFHRCxJQUFJLENBQUNFLFNBQUwsQ0FBZSxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxFQUFGLEtBQVNMLE9BQU8sQ0FBQ0ssRUFBckI7QUFBQSxHQUFoQixDQUFkOztBQUVBLE1BQUlILEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDaEJILElBQUFBLEdBQUcsQ0FBQ0osUUFBRCwrSkFBZU0sSUFBZixvQ0FBMEJELE9BQTFCO0FBQW1DTSxNQUFBQSxRQUFRLEVBQUU7QUFBN0MsU0FBSDtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU1DLE1BQU0sR0FBRyxtSkFBSU4sSUFBUCxDQUFaOztBQUNBTSxJQUFBQSxNQUFNLENBQUNMLEtBQUQsQ0FBTixDQUFjSSxRQUFkLElBQTBCLENBQTFCO0FBQ0FQLElBQUFBLEdBQUcsQ0FBQ0osUUFBRCxFQUFXWSxNQUFYLENBQUg7QUFDRDtBQUNGLENBYjhCLENBQTFCO0FBZ0JBLElBQU1DLGtCQUFrQixHQUFHZiwyQ0FBSSxDQUNwQyxJQURvQyxFQUVwQyxTQUFTZ0IsY0FBVCxDQUF3QlgsR0FBeEIsRUFBNkJDLEdBQTdCLEVBQWtDVyxTQUFsQyxFQUE2QztBQUMzQyxNQUFNVCxJQUFJLEdBQUdILEdBQUcsQ0FBQ0gsUUFBRCxDQUFoQjtBQUNBLE1BQU1PLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxTQUFMLENBQWUsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSyxTQUFiO0FBQUEsR0FBaEIsQ0FBZDs7QUFFQSxNQUFJUixLQUFLLEdBQUcsQ0FBQyxDQUFiLEVBQWdCO0FBQ2QsUUFBSVMsSUFBSSxHQUFHLG1KQUFJVixJQUFQLENBQVI7O0FBQ0FVLElBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZVixLQUFaLEVBQW1CLENBQW5CO0FBQ0FILElBQUFBLEdBQUcsQ0FBQ0osUUFBRCxFQUFXZ0IsSUFBWCxDQUFIO0FBQ0Q7QUFDRixDQVhtQyxDQUEvQjtBQWNBLElBQU1FLGFBQWEsR0FBR3BCLDJDQUFJLENBQUMsVUFBQUssR0FBRyxFQUFJO0FBQ3ZDLE1BQU1nQixHQUFHLEdBQUdoQixHQUFHLENBQUNILFFBQUQsQ0FBSCxDQUFjb0IsTUFBZCxDQUFxQixVQUFDQyxHQUFELEVBQU1oQixPQUFOO0FBQUEsV0FBa0JnQixHQUFHLEdBQUdDLFVBQVUsQ0FBQ2pCLE9BQU8sQ0FBQ2tCLEtBQVQsQ0FBbEM7QUFBQSxHQUFyQixFQUF3RSxDQUF4RSxDQUFaO0FBQ0EsU0FBT0osR0FBRyxDQUFDSyxPQUFKLENBQVksQ0FBWixDQUFQO0FBQ0QsQ0FIZ0MsQ0FBMUI7QUFLQSxJQUFNQyxrQkFBa0IsR0FBRzNCLDJDQUFJLENBQUMsVUFBQUssR0FBRztBQUFBLFNBQUlBLEdBQUcsQ0FBQ0gsUUFBRCxDQUFILENBQWMwQixNQUFsQjtBQUFBLENBQUosQ0FBL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY2FydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdG9tIH0gZnJvbSAnam90YWknXHJcblxyXG5leHBvcnQgY29uc3QgaXNNaW5pQ2FydE9wZW5BdG9tID0gYXRvbShmYWxzZSlcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJ0QXRvbSA9IGF0b20oW10pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0QXRvbSA9IGF0b20oXHJcbiAgbnVsbCxcclxuICBmdW5jdGlvbiBhZGRUb0NhcnQoZ2V0LCBzZXQsIHByb2R1Y3QpIHtcclxuICAgIGNvbnN0IGNhcnQgPSBnZXQoY2FydEF0b20pXHJcbiAgICBjb25zdCBpbmRleCA9IGNhcnQuZmluZEluZGV4KG8gPT4gby5pZCA9PT0gcHJvZHVjdC5pZClcclxuICBcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgc2V0KGNhcnRBdG9tLCBbLi4uY2FydCwgeyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9XSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZSA9IFsuLi5jYXJ0XVxyXG4gICAgICB1cGRhdGVbaW5kZXhdLnF1YW50aXR5ICs9IDFcclxuICAgICAgc2V0KGNhcnRBdG9tLCB1cGRhdGUpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnRBdG9tID0gYXRvbShcclxuICBudWxsLFxyXG4gIGZ1bmN0aW9uIHJlbW92ZUZyb21DYXJ0KGdldCwgc2V0LCBwcm9kdWN0SWQpIHtcclxuICAgIGNvbnN0IGNhcnQgPSBnZXQoY2FydEF0b20pXHJcbiAgICBjb25zdCBpbmRleCA9IGNhcnQuZmluZEluZGV4KG8gPT4gby5pZCA9PT0gcHJvZHVjdElkKSAgICBcclxuICBcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIGxldCBjb3B5ID0gWy4uLmNhcnRdXHJcbiAgICAgIGNvcHkuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICBzZXQoY2FydEF0b20sIGNvcHkpXHJcbiAgICB9XHJcbiAgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgdG90YWxDYXJ0QXRvbSA9IGF0b20oZ2V0ID0+IHtcclxuICBjb25zdCBzdW0gPSBnZXQoY2FydEF0b20pLnJlZHVjZSgoYWNjLCBwcm9kdWN0KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHByb2R1Y3QucHJpY2UpLCAwKVxyXG4gIHJldHVybiBzdW0udG9GaXhlZCgyKVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvdW50Q2FydEl0ZW1zQXRvbSA9IGF0b20oZ2V0ID0+IGdldChjYXJ0QXRvbSkubGVuZ3RoKVxyXG4iXSwibmFtZXMiOlsiYXRvbSIsImlzTWluaUNhcnRPcGVuQXRvbSIsImNhcnRBdG9tIiwiYWRkVG9DYXJ0QXRvbSIsImFkZFRvQ2FydCIsImdldCIsInNldCIsInByb2R1Y3QiLCJjYXJ0IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJvIiwiaWQiLCJxdWFudGl0eSIsInVwZGF0ZSIsInJlbW92ZUZyb21DYXJ0QXRvbSIsInJlbW92ZUZyb21DYXJ0IiwicHJvZHVjdElkIiwiY29weSIsInNwbGljZSIsInRvdGFsQ2FydEF0b20iLCJzdW0iLCJyZWR1Y2UiLCJhY2MiLCJwYXJzZUZsb2F0IiwicHJpY2UiLCJ0b0ZpeGVkIiwiY291bnRDYXJ0SXRlbXNBdG9tIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==