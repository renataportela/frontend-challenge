"use strict";
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);

const images = ['/PNGs/food.png', '/PNGs/cannabis.png', '/PNGs/oil.png', '/PNGs/treats.png'];

function fakeProductsApi(req, res) {
  const products = [...new Array(10)].map((_, index) => {
    return {
      id: index + 1,
      shortName: faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.productName(),
      image: images[faker__WEBPACK_IMPORTED_MODULE_0___default().datatype.number({
        'min': 0,
        'max': 3
      })],
      price: faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.price(),
      originalPrice: faker__WEBPACK_IMPORTED_MODULE_0___default().commerce.price(),
      packageContent: `${faker__WEBPACK_IMPORTED_MODULE_0___default().datatype.number()}g`,
      review: faker__WEBPACK_IMPORTED_MODULE_0___default().datatype.number({
        'min': 0,
        'max': 5
      })
    };
  });
  return res.status(200).json(JSON.stringify(products));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fakeProductsApi);

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/***/ ((module) => {

module.exports = require("faker");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/products.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL3Byb2R1Y3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBRyxDQUNiLGdCQURhLEVBRWIsb0JBRmEsRUFHYixlQUhhLEVBSWIsa0JBSmEsQ0FBZjs7QUFPQSxTQUFTQyxlQUFULENBQXlCQyxHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUM7QUFDakMsUUFBTUMsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJQyxLQUFKLENBQVUsRUFBVixDQUFKLEVBQW1CQyxHQUFuQixDQUF1QixDQUFDQyxDQUFELEVBQUlDLEtBQUosS0FBYztBQUNwRCxXQUFPO0FBQ0xDLE1BQUFBLEVBQUUsRUFBRUQsS0FBSyxHQUFHLENBRFA7QUFFTEUsTUFBQUEsU0FBUyxFQUFFWCxpRUFBQSxFQUZOO0FBR0xjLE1BQUFBLEtBQUssRUFBRWIsTUFBTSxDQUFDRCw0REFBQSxDQUFzQjtBQUNsQyxlQUFPLENBRDJCO0FBRWxDLGVBQU87QUFGMkIsT0FBdEIsQ0FBRCxDQUhSO0FBT0xpQixNQUFBQSxLQUFLLEVBQUVqQiwyREFBQSxFQVBGO0FBUUxrQixNQUFBQSxhQUFhLEVBQUVsQiwyREFBQSxFQVJWO0FBU0xtQixNQUFBQSxjQUFjLEVBQUcsR0FBRW5CLDREQUFBLEVBQXdCLEdBVHRDO0FBVUxvQixNQUFBQSxNQUFNLEVBQUVwQiw0REFBQSxDQUFzQjtBQUM1QixlQUFPLENBRHFCO0FBRTVCLGVBQU87QUFGcUIsT0FBdEI7QUFWSCxLQUFQO0FBZUQsR0FoQmdCLENBQWpCO0FBa0JBLFNBQU9JLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkMsSUFBSSxDQUFDQyxTQUFMLENBQWVuQixRQUFmLENBQXJCLENBQVA7QUFDRDs7QUFFRCxpRUFBZUgsZUFBZjs7Ozs7Ozs7OztBQy9CQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYWtlciBmcm9tICdmYWtlcidcclxuXHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICAnL1BOR3MvZm9vZC5wbmcnLFxyXG4gICcvUE5Hcy9jYW5uYWJpcy5wbmcnLFxyXG4gICcvUE5Hcy9vaWwucG5nJyxcclxuICAnL1BOR3MvdHJlYXRzLnBuZycsXHJcbl1cclxuXHJcbmZ1bmN0aW9uIGZha2VQcm9kdWN0c0FwaShyZXEsIHJlcykge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gWy4uLm5ldyBBcnJheSgxMCldLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgIHNob3J0TmFtZTogZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSxcclxuICAgICAgaW1hZ2U6IGltYWdlc1tmYWtlci5kYXRhdHlwZS5udW1iZXIoe1xyXG4gICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICdtYXgnOiAzXHJcbiAgICAgIH0pXSxcclxuICAgICAgcHJpY2U6IGZha2VyLmNvbW1lcmNlLnByaWNlKCksXHJcbiAgICAgIG9yaWdpbmFsUHJpY2U6IGZha2VyLmNvbW1lcmNlLnByaWNlKCksXHJcbiAgICAgIHBhY2thZ2VDb250ZW50OiBgJHtmYWtlci5kYXRhdHlwZS5udW1iZXIoKX1nYCxcclxuICAgICAgcmV2aWV3OiBmYWtlci5kYXRhdHlwZS5udW1iZXIoe1xyXG4gICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICdtYXgnOiA1XHJcbiAgICAgIH0pLFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnN0cmluZ2lmeShwcm9kdWN0cykpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZha2VQcm9kdWN0c0FwaVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiXSwibmFtZXMiOlsiZmFrZXIiLCJpbWFnZXMiLCJmYWtlUHJvZHVjdHNBcGkiLCJyZXEiLCJyZXMiLCJwcm9kdWN0cyIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4IiwiaWQiLCJzaG9ydE5hbWUiLCJjb21tZXJjZSIsInByb2R1Y3ROYW1lIiwiaW1hZ2UiLCJkYXRhdHlwZSIsIm51bWJlciIsInByaWNlIiwib3JpZ2luYWxQcmljZSIsInBhY2thZ2VDb250ZW50IiwicmV2aWV3Iiwic3RhdHVzIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9