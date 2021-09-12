(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/app/cart/CartButton.js":
/*!*******************************************!*\
  !*** ./components/app/cart/CartButton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jotai/utils */ "jotai/utils");
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jotai_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\cart\\CartButton.js";







function CartButton() {
  const count = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_2__.useAtomValue)(_store__WEBPACK_IMPORTED_MODULE_4__.countCartItemsAtom);
  const setIsOpen = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_2__.useUpdateAtom)(_store__WEBPACK_IMPORTED_MODULE_4__.isMiniCartOpenAtom);

  const onClick = e => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
    alignItems: "center",
    style: {
      cursor: 'pointer'
    },
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {
      size: "2",
      weight: "bold",
      children: count
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: `/SVGs/${count === 0 ? "cart_empty" : "cart_with_items"}.svg`,
      alt: "Cart",
      width: "20",
      height: "24"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartButton);

/***/ }),

/***/ "./components/app/cart/MiniCart.js":
/*!*****************************************!*\
  !*** ./components/app/cart/MiniCart.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ "jotai");
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _MiniCartHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MiniCartHeader */ "./components/app/cart/MiniCartHeader.js");
/* harmony import */ var _MiniCartInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MiniCartInfo */ "./components/app/cart/MiniCartInfo.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\cart\\MiniCart.js";








function MiniCart() {
  const [isOpen, setIsOpen] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_3__.isMiniCartOpenAtom);

  const toggleMiniCart = () => setIsOpen(!isOpen);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Drawer, {
    open: isOpen,
    onClose: toggleMiniCart,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MiniCartHeader__WEBPACK_IMPORTED_MODULE_4__.default, {
      toggle: toggleMiniCart
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {
      full: true,
      padding: "4",
      direction: "column",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MiniCartInfo__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniCart);

/***/ }),

/***/ "./components/app/cart/MiniCartHeader.js":
/*!***********************************************!*\
  !*** ./components/app/cart/MiniCartHeader.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jotai/utils */ "jotai/utils");
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jotai_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\cart\\MiniCartHeader.js";









function MiniCartHeader({
  toggle
}) {
  const count = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_2__.useAtomValue)(_store__WEBPACK_IMPORTED_MODULE_5__.countCartItemsAtom);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(Header, {
    justify: "space-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_4__.Text, {
      as: "h3",
      size: "4",
      weight: "bold",
      children: "Your Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_4__.Box, {
      justify: "flex-end",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(TotalItems, {
        size: "2",
        children: [count, " ", count === 1 ? 'item' : 'items']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_4__.CloseButton, {
        onClick: toggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
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

const Header = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_components_layout__WEBPACK_IMPORTED_MODULE_3__.MenuBar)`
  padding-left: ${_tokens__WEBPACK_IMPORTED_MODULE_6__.spacing.t3};
  padding-right: ${_tokens__WEBPACK_IMPORTED_MODULE_6__.spacing.t3};
  margin-bottom: ${_tokens__WEBPACK_IMPORTED_MODULE_6__.spacing.t5};  
`;
const TotalItems = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_components_ui__WEBPACK_IMPORTED_MODULE_4__.Text)`
  margin-right: ${_tokens__WEBPACK_IMPORTED_MODULE_6__.spacing.t3};
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniCartHeader);

/***/ }),

/***/ "./components/app/cart/MiniCartInfo.js":
/*!*********************************************!*\
  !*** ./components/app/cart/MiniCartInfo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai/utils */ "jotai/utils");
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jotai_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var _MiniCartProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MiniCartProduct */ "./components/app/cart/MiniCartProduct.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\cart\\MiniCartInfo.js";








function MiniCartInfo() {
  const cart = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.useAtomValue)(_store__WEBPACK_IMPORTED_MODULE_3__.cartAtom);
  const totalCart = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.useAtomValue)(_store__WEBPACK_IMPORTED_MODULE_3__.totalCartAtom);

  if (cart.length === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
      align: "center",
      children: "Your cart is empty."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [cart.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_MiniCartProduct__WEBPACK_IMPORTED_MODULE_4__.default, {
      product: product
    }, product.id, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.RowBetween, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
        size: "3",
        children: "Subtotal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
        size: "4",
        weight: "bold",
        align: "right",
        children: totalCart
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      full: true,
      children: "Go to checkout"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniCartInfo);

/***/ }),

/***/ "./components/app/cart/MiniCartProduct.js":
/*!************************************************!*\
  !*** ./components/app/cart/MiniCartProduct.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _MiniCartProductImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniCartProductImage */ "./components/app/cart/MiniCartProductImage.js");
/* harmony import */ var _MiniCartRemoveButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MiniCartRemoveButton */ "./components/app/cart/MiniCartRemoveButton.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\cart\\MiniCartProduct.js";







function MiniCartProduct({
  product
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MiniCartProductImage__WEBPACK_IMPORTED_MODULE_2__.default, {
        image: product.image,
        alt: product.shortName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
        direction: "column",
        full: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.RowBetween, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {
            weight: "bold",
            children: product.shortName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_MiniCartRemoveButton__WEBPACK_IMPORTED_MODULE_3__.default, {
            productId: product.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.RowBetween, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DetailText, {
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DetailText, {
            children: product.price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.RowBetween, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DetailText, {
            children: "Package"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DetailText, {
            children: product.packageContent
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.RowBetween, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DetailText, {
            children: "Quantity"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(DetailText, {
            children: product.quantity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

function DetailText({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {
    size: "3",
    color: "grey500",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniCartProduct);

/***/ }),

/***/ "./components/app/cart/MiniCartProductImage.js":
/*!*****************************************************!*\
  !*** ./components/app/cart/MiniCartProductImage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\cart\\MiniCartProductImage.js";







function MiniCartProductImage({
  image,
  alt = 'Photo',
  title = alt
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {
    centered: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(StyledImg, {
      src: image,
      alt: alt,
      title: title,
      width: "64",
      height: "64"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box)`
  height: 64px;
  position: relative;
  overflow: hidden;
  width: 64px;
  max-width: 64px;
  background-color: ${_tokens__WEBPACK_IMPORTED_MODULE_4__.colors.grey200};
  margin-right: ${_tokens__WEBPACK_IMPORTED_MODULE_4__.spacing.t4};
`;
const StyledImg = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default()))`
  height: 100%;
  width: auto;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniCartProductImage);

/***/ }),

/***/ "./components/app/cart/MiniCartRemoveButton.js":
/*!*****************************************************!*\
  !*** ./components/app/cart/MiniCartRemoveButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jotai/utils */ "jotai/utils");
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jotai_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\cart\\MiniCartRemoveButton.js";







function MiniCartRemoveButton({
  productId
}) {
  const removeFromCart = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_3__.useUpdateAtom)(_store__WEBPACK_IMPORTED_MODULE_4__.removeFromCartAtom);

  const onClick = e => {
    e.stopPropagation();
    removeFromCart(productId);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {
    role: "button",
    onClick: onClick,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: "/SVGs/delete.svg",
      alt: "Delete",
      title: "Remove from cart",
      width: "16",
      height: "20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

const Container = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().span)`
  cursor: pointer;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniCartRemoveButton);

/***/ }),

/***/ "./components/app/cart/index.js":
/*!**************************************!*\
  !*** ./components/app/cart/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartButton": () => (/* reexport safe */ _CartButton__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "MiniCart": () => (/* reexport safe */ _MiniCart__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _CartButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartButton */ "./components/app/cart/CartButton.js");
/* harmony import */ var _MiniCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiniCart */ "./components/app/cart/MiniCart.js");



/***/ }),

/***/ "./components/app/product/ProductCard.js":
/*!***********************************************!*\
  !*** ./components/app/product/ProductCard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _ProductCardAddToCartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductCardAddToCartButton */ "./components/app/product/ProductCardAddToCartButton.js");
/* harmony import */ var _ProductCardDetailText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductCardDetailText */ "./components/app/product/ProductCardDetailText.js");
/* harmony import */ var _ProductCardImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductCardImage */ "./components/app/product/ProductCardImage.js");
/* harmony import */ var _ProductCardPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductCardPrice */ "./components/app/product/ProductCardPrice.js");
/* harmony import */ var _ReviewStars__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReviewStars */ "./components/app/product/ReviewStars.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCard.js";












function ProductCard({
  product
}) {
  if (!product) return null;
  const {
    shortName,
    image,
    price,
    originalPrice,
    packageContent,
    review
  } = product;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Container, {
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ProductCardImage__WEBPACK_IMPORTED_MODULE_7__.default, {
      image: image,
      alt: shortName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box, {
      direction: "column",
      full: true,
      padding: "4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {
        as: "h4",
        size: "5",
        mb: "3",
        children: shortName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.RowBetween, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Hidden, {
          xs: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_6__.default, {
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ProductCardPrice__WEBPACK_IMPORTED_MODULE_8__.default, {
          price: price,
          originalPrice: originalPrice
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.RowBetween, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: "Package"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: packageContent
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.RowBetween, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: "Review"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ReviewStars__WEBPACK_IMPORTED_MODULE_9__.default, {
          review: review
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_ProductCardAddToCartButton__WEBPACK_IMPORTED_MODULE_5__.default, {
        product: product
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box)`
  margin-bottom: ${_tokens__WEBPACK_IMPORTED_MODULE_4__.spacing.t4};
  background-color: ${_tokens__WEBPACK_IMPORTED_MODULE_4__.colors.grey100};
  width: 100%;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

/***/ }),

/***/ "./components/app/product/ProductCardAddToCartButton.js":
/*!**************************************************************!*\
  !*** ./components/app/product/ProductCardAddToCartButton.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai/utils */ "jotai/utils");
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jotai_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./store/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCardAddToCartButton.js";






function ProductCardAddToCartButton({
  product
}) {
  const addToCart = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.useUpdateAtom)(_store__WEBPACK_IMPORTED_MODULE_3__.addToCartAtom);
  const setIsOpen = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.useUpdateAtom)(_store__WEBPACK_IMPORTED_MODULE_3__.isMiniCartOpenAtom);

  const onClick = e => {
    e.stopPropagation();
    setIsOpen(true);
    addToCart(product);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: onClick,
    children: "Add product"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCardAddToCartButton);

/***/ }),

/***/ "./components/app/product/ProductCardDetailText.js":
/*!*********************************************************!*\
  !*** ./components/app/product/ProductCardDetailText.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children"];
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCardDetailText.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function ProductCardDetailText(_ref) {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Text, _objectSpread(_objectSpread({
    size: "3",
    color: "grey500"
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCardDetailText);

/***/ }),

/***/ "./components/app/product/ProductCardImage.js":
/*!****************************************************!*\
  !*** ./components/app/product/ProductCardImage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCardImage.js";






function ProductCardImage({
  image,
  alt = 'Photo'
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {
    centered: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(StyledImg, {
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

const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Box)`
  height: 185px;
  position: relative;
  overflow: hidden;
  width: 148px;
  max-width: 148px;

  @media (min-width: 576px) {
    width: 220px;
    max-width: 220px;
  }
`;
const StyledImg = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default()))`
  height: 100%;
  width: auto;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCardImage);

/***/ }),

/***/ "./components/app/product/ProductCardPrice.js":
/*!****************************************************!*\
  !*** ./components/app/product/ProductCardPrice.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _ProductCardDetailText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductCardDetailText */ "./components/app/product/ProductCardDetailText.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductCardPrice.js";







function ProductCardPrice({
  price,
  originalPrice
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [!!originalPrice && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Hidden, {
      xs: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ProductCardDetailText__WEBPACK_IMPORTED_MODULE_4__.default, {
        lineThrough: true,
        style: {
          marginRight: _tokens__WEBPACK_IMPORTED_MODULE_3__.spacing.t3
        },
        children: [originalPrice, "\u0404"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {
      color: "primary",
      size: "3",
      weight: "bold",
      children: [price, "\u0404"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCardPrice);

/***/ }),

/***/ "./components/app/product/ProductList.js":
/*!***********************************************!*\
  !*** ./components/app/product/ProductList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ "./components/app/product/ProductCard.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ProductList.js";





function ProductList({
  products
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Row, {
    children: products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
      xs: 12,
      md: 6,
      lg: 6,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_2__.default, {
        product: product
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 11
      }, this)
    }, product.id, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);

/***/ }),

/***/ "./components/app/product/ReviewStars.js":
/*!***********************************************!*\
  !*** ./components/app/product/ReviewStars.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\app\\product\\ReviewStars.js";




const stars = [1, 2, 3, 4, 5];

function ReviewStars({
  review
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {
    children: stars.map(currentStar => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(StarSvg, {
      isFilled: review > 0 && currentStar <= review
    }, currentStar, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

function StarSvg({
  isFilled = false
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
        d: "M0 0h24v24H0z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("path", {
        d: "M12 18l-5.26 2.765a1 1 0 01-1.45-1.054l1.004-5.857-4.256-4.148A1 1 0 012.592 8l5.881-.854 2.63-5.329a1 1 0 011.794 0l2.63 5.329 5.88.854a1 1 0 01.555 1.706l-4.256 4.148 1.005 5.857a1 1 0 01-1.451 1.054L12 18z",
        fill: isFilled ? _tokens__WEBPACK_IMPORTED_MODULE_2__.colors.yellow500 : _tokens__WEBPACK_IMPORTED_MODULE_2__.colors.grey300
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewStars);

/***/ }),

/***/ "./components/app/product/index.js":
/*!*****************************************!*\
  !*** ./components/app/product/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductList": () => (/* reexport safe */ _ProductList__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList */ "./components/app/product/ProductList.js");


/***/ }),

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_app_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/app/cart */ "./components/app/cart/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./components/layout/Logo.js");
/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuBar */ "./components/layout/MenuBar.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\layout\\Header.js";








function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_MenuBar__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(InnerContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(LogoContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_app_cart__WEBPACK_IMPORTED_MODULE_3__.CartButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

const InnerContainer = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Container)`
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const LogoContainer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  display: flex;
  flex: 1;
  justify-content: center;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./components/layout/Logo.js":
/*!***********************************!*\
  !*** ./components/layout/Logo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\layout\\Logo.js";




function Logo() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    src: "/SVGs/logo.svg",
    alt: "Barkyn",
    width: "120",
    height: "32"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ "./components/layout/MenuBar.js":
/*!**************************************!*\
  !*** ./components/layout/MenuBar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");



const MenuBar = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()(_components_ui__WEBPACK_IMPORTED_MODULE_1__.Box)`
  align-items: center;  
  box-shadow: ${_tokens__WEBPACK_IMPORTED_MODULE_2__.shadow.md};
  margin-bottom: ${_tokens__WEBPACK_IMPORTED_MODULE_2__.spacing.t6};
  height: 64px;
  align-items: 'center';
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuBar);

/***/ }),

/***/ "./components/layout/ShopLayout.js":
/*!*****************************************!*\
  !*** ./components/layout/ShopLayout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_app_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/app/cart */ "./components/app/cart/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\layout\\ShopLayout.js";







function ShopLayout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Container, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_app_cart__WEBPACK_IMPORTED_MODULE_2__.MiniCart, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopLayout);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuBar": () => (/* reexport safe */ _MenuBar__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "ShopLayout": () => (/* reexport safe */ _ShopLayout__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _MenuBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuBar */ "./components/layout/MenuBar.js");
/* harmony import */ var _ShopLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopLayout */ "./components/layout/ShopLayout.js");



/***/ }),

/***/ "./components/ui/Box.js":
/*!******************************!*\
  !*** ./components/ui/Box.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");


const Box = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div(({
  centered = false,
  direction = null,
  full = false,
  justify = null,
  alignItems = null,
  wrap = null,
  padding = null
}) => ({
  display: 'flex',
  flex: full ? 1 : null,
  flexDirection: direction,
  justifyContent: centered ? 'center' : justify,
  alignItems: centered ? 'center' : alignItems,
  padding: padding ? _tokens__WEBPACK_IMPORTED_MODULE_1__.spacing[`t${padding}`] : null,
  flexWrap: wrap
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

/***/ }),

/***/ "./components/ui/Button.js":
/*!*********************************!*\
  !*** ./components/ui/Button.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text */ "./components/ui/Text.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\ui\\Button.js";






function Button({
  children,
  color = 'primary',
  onClick,
  full = false
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ButtonStyle, {
    bgColor: color,
    color: "white",
    onClick: onClick,
    full: full,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

const ButtonStyle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().button)`
  ${_Text__WEBPACK_IMPORTED_MODULE_3__.typographyStyles}
  border-radius: 16px;
  height: 40px;
  text-align: center;
  background-color: ${props => _tokens__WEBPACK_IMPORTED_MODULE_2__.colors[props.bgColor]};
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.full ? '100%' : 'auto'};

  &:hover {
    background-color: ${props => _tokens__WEBPACK_IMPORTED_MODULE_2__.colors[`${props.bgColor}600`]};
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./components/ui/CloseButton.js":
/*!**************************************!*\
  !*** ./components/ui/CloseButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\ui\\CloseButton.js";






function CloseButton({
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CloseButtonStyle, {
    onClick: onClick,
    title: "Close",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: "/SVGs/close.svg",
      alt: "Close",
      width: "15",
      height: "15"
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

const CloseButtonStyle = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().button)`
  border: 0;
  height: 24px;
  width: 24px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${_tokens__WEBPACK_IMPORTED_MODULE_3__.colors.neutral};
  cursor: pointer;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CloseButton);

/***/ }),

/***/ "./components/ui/Divider.js":
/*!**********************************!*\
  !*** ./components/ui/Divider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tokens */ "./tokens/index.js");


const Divider = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  padding-top: ${tokens__WEBPACK_IMPORTED_MODULE_1__.spacing.t3};
  border-bottom: 1px solid ${tokens__WEBPACK_IMPORTED_MODULE_1__.colors.grey300};
  margin-bottom: ${tokens__WEBPACK_IMPORTED_MODULE_1__.spacing.t3};
  width: 100%;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ }),

/***/ "./components/ui/Drawer.js":
/*!*********************************!*\
  !*** ./components/ui/Drawer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _useCloseOnClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCloseOnClickOutside */ "./components/ui/useCloseOnClickOutside.js");
/* harmony import */ var _useEscToClose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useEscToClose */ "./components/ui/useEscToClose.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["children", "open", "onClose"];
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\ui\\Drawer.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function Drawer(_ref) {
  let {
    children,
    open,
    onClose
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const paperRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  (0,_useCloseOnClickOutside__WEBPACK_IMPORTED_MODULE_3__.default)(paperRef, open, onClose);
  (0,_useEscToClose__WEBPACK_IMPORTED_MODULE_4__.default)(open, onClose);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Paper, _objectSpread(_objectSpread({
    ref: paperRef,
    className: open ? 'show' : ''
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

const Paper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  position: relative;
  box-shadow: none;
  background-color: ${_tokens__WEBPACK_IMPORTED_MODULE_2__.colors.background};  
  text-align: left;
  position: fixed;  
  z-index: 800;
  will-change: transform;
  transition: transform 350ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow ease;
  width: 90%;
  max-width: 400px;
  height: 100%;
  transform: translate3d(100%,0,0);
  top: 0;
  right: 0;

  &.show {
    transform: none;
    box-shadow: ${_tokens__WEBPACK_IMPORTED_MODULE_2__.shadow.sm};
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawer);

/***/ }),

/***/ "./components/ui/Heading.js":
/*!**********************************!*\
  !*** ./components/ui/Heading.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text */ "./components/ui/Text.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children", "size"];
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\ui\\Heading.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function Heading(_ref) {
  let {
    children,
    size
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const tag = `h${size}`;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Text__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread(_objectSpread({
    as: tag,
    size: _tokens__WEBPACK_IMPORTED_MODULE_0__.headingSize[tag],
    weight: "300"
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);

/***/ }),

/***/ "./components/ui/RowBetween.js":
/*!*************************************!*\
  !*** ./components/ui/RowBetween.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\components\\ui\\RowBetween.js";






function RowBetween({
  children,
  alignItems = 'center'
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(RowStyle, {
    justify: "space-between",
    alignItems: alignItems,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

const RowStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default()(_components_ui__WEBPACK_IMPORTED_MODULE_2__.Box)`
  margin-bottom: ${_tokens__WEBPACK_IMPORTED_MODULE_3__.spacing.t4}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RowBetween);

/***/ }),

/***/ "./components/ui/Text.js":
/*!*******************************!*\
  !*** ./components/ui/Text.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typographyStyles": () => (/* binding */ typographyStyles),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/is-prop-valid */ "@emotion/is-prop-valid");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens */ "./tokens/index.js");




const typographyStyles = ({
  color = 'currentColor',
  family = _tokens__WEBPACK_IMPORTED_MODULE_3__.fontFamily.default,
  lineThrough = false,
  size = '4',
  lineHeight = size,
  mb,
  weight = 'normal'
}) => _emotion_react__WEBPACK_IMPORTED_MODULE_2__.css`
    color: ${_tokens__WEBPACK_IMPORTED_MODULE_3__.colors[color] || color};
    font-family: ${family};
    font-size: ${_tokens__WEBPACK_IMPORTED_MODULE_3__.fontSize[`t${size}`] || "inherit"};
    font-weight: ${weight};
    line-height: ${_tokens__WEBPACK_IMPORTED_MODULE_3__.lineHeight[`t${lineHeight}`] || "inherit"};
    margin-bottom: ${_tokens__WEBPACK_IMPORTED_MODULE_3__.spacing[`t${mb}`] || 0};
    text-decoration: ${lineThrough ? 'line-through' : 'none'};
  `;
const Text = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()('span', {
  shouldForwardProp: prop => _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_1___default()(prop) && !['as', 'size', 'weight'].includes(prop)
})(typographyStyles);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./components/ui/index.js":
/*!********************************!*\
  !*** ./components/ui/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* reexport safe */ _Box__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "CloseButton": () => (/* reexport safe */ _CloseButton__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Divider": () => (/* reexport safe */ _Divider__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Drawer": () => (/* reexport safe */ _Drawer__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Heading": () => (/* reexport safe */ _Heading__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "RowBetween": () => (/* reexport safe */ _RowBetween__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "Text": () => (/* reexport safe */ _Text__WEBPACK_IMPORTED_MODULE_7__.default)
/* harmony export */ });
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./components/ui/Box.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/ui/Button.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CloseButton */ "./components/ui/CloseButton.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Divider */ "./components/ui/Divider.js");
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Drawer */ "./components/ui/Drawer.js");
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Heading */ "./components/ui/Heading.js");
/* harmony import */ var _RowBetween__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RowBetween */ "./components/ui/RowBetween.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Text */ "./components/ui/Text.js");









/***/ }),

/***/ "./components/ui/useCloseOnClickOutside.js":
/*!*************************************************!*\
  !*** ./components/ui/useCloseOnClickOutside.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");



function useCloseOnClickOutside(elementRef, open, onClose) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (_helpers__WEBPACK_IMPORTED_MODULE_1__.isServer || !open || !elementRef.current) return;

    const handleClick = e => {
      if (elementRef.current && !elementRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [open, onClose, elementRef]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCloseOnClickOutside);

/***/ }),

/***/ "./components/ui/useEscToClose.js":
/*!****************************************!*\
  !*** ./components/ui/useEscToClose.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.js");



function useEscToClose(open, onClose) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (_helpers__WEBPACK_IMPORTED_MODULE_1__.isServer || !open) return;

    const handleEsc = e => e.key === 'Escape' && onClose();

    document.addEventListener('keyup', handleEsc);
    return () => {
      document.removeEventListener('keyup', handleEsc);
    };
  }, [open, onClose]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEscToClose);

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isServer": () => (/* binding */ isServer)
/* harmony export */ });
const isServer = false;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_app_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/app/product */ "./components/app/product/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui */ "./components/ui/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\dev\\tentativas\\estudo\\barkyn\\pages\\index.js";
 // import { useHydrateAtoms } from 'jotai/utils'







function HomePage({
  products
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Heading, {
      size: "3",
      children: "Store"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_3__.Text, {
      as: "p",
      mb: "7",
      children: "Explore our vast selection of premium products."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_app_product__WEBPACK_IMPORTED_MODULE_1__.ProductList, {
      products: products
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

HomePage.getLayout = function getLayout(page) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.ShopLayout, {
    children: page
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();
  return {
    props: {
      products: products || []
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./store/cart.js":
/*!***********************!*\
  !*** ./store/cart.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMiniCartOpenAtom": () => (/* binding */ isMiniCartOpenAtom),
/* harmony export */   "cartAtom": () => (/* binding */ cartAtom),
/* harmony export */   "addToCartAtom": () => (/* binding */ addToCartAtom),
/* harmony export */   "removeFromCartAtom": () => (/* binding */ removeFromCartAtom),
/* harmony export */   "totalCartAtom": () => (/* binding */ totalCartAtom),
/* harmony export */   "countCartItemsAtom": () => (/* binding */ countCartItemsAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ "jotai");
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isMiniCartOpenAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);
const cartAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);
const addToCartAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null, function addToCart(get, set, product) {
  const cart = get(cartAtom);
  const index = cart.findIndex(o => o.id === product.id);

  if (index === -1) {
    set(cartAtom, [...cart, _objectSpread(_objectSpread({}, product), {}, {
      quantity: 1
    })]);
  } else {
    const update = [...cart];
    update[index].quantity += 1;
    set(cartAtom, update);
  }
});
const removeFromCartAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null, function removeFromCart(get, set, productId) {
  const cart = get(cartAtom);
  const index = cart.findIndex(o => o.id === productId);

  if (index > -1) {
    let copy = [...cart];
    copy.splice(index, 1);
    set(cartAtom, copy);
  }
});
const totalCartAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => {
  const sum = get(cartAtom).reduce((acc, product) => acc + parseFloat(product.price), 0);
  return sum.toFixed(2);
});
const countCartItemsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(cartAtom).length);

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ "./store/cart.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _cart__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _cart__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./tokens/colors.js":
/*!**************************!*\
  !*** ./tokens/colors.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  background: 'white',
  grey100: '#fafafa',
  grey200: '#F1EEFF',
  grey300: '#e7e7e9',
  grey500: '#6c6b76',
  neutral: '#f2f2f3',
  primary: '#5f2eff',
  primary500: '#5f2eff',
  primary600: '#5400db',
  yellow500: '#ffcc00'
});

/***/ }),

/***/ "./tokens/index.js":
/*!*************************!*\
  !*** ./tokens/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": () => (/* reexport safe */ _colors__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "shadow": () => (/* reexport safe */ _shadow__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "spacing": () => (/* reexport safe */ _spacing__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./tokens/colors.js");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadow */ "./tokens/shadow.js");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spacing */ "./tokens/spacing.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography */ "./tokens/typography.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _typography__WEBPACK_IMPORTED_MODULE_3__) if(["default","colors","shadow","spacing"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _typography__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);





/***/ }),

/***/ "./tokens/shadow.js":
/*!**************************!*\
  !*** ./tokens/shadow.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sm: "0px 2px 8px 0px rgba(18, 18, 23, 0.08)",
  md: "0px 2px 8px 0px rgba(18, 18, 23, 0.08)"
});

/***/ }),

/***/ "./tokens/spacing.js":
/*!***************************!*\
  !*** ./tokens/spacing.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  t0: '0',
  t1: '4px',
  t2: '8px',
  t3: '12px',
  t4: '16px',
  t5: '24px',
  t6: '32px',
  t7: '40px',
  t8: '48px',
  t9: '56px',
  t10: '64px'
});

/***/ }),

/***/ "./tokens/typography.js":
/*!******************************!*\
  !*** ./tokens/typography.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontFamily": () => (/* binding */ fontFamily),
/* harmony export */   "fontSize": () => (/* binding */ fontSize),
/* harmony export */   "headingSize": () => (/* binding */ headingSize),
/* harmony export */   "lineHeight": () => (/* binding */ lineHeight)
/* harmony export */ });
const fontFamily = {
  default: '"Azo Sans", sans-serif',
  bold: '"Azo Sans Bold", sans-serif',
  light: '"Azo Sans Light", sans-serif'
};
const fontSize = {
  t2: '12px',
  t3: '14px',
  t4: '16px',
  t5: '20px',
  t6: '28px'
};
const headingSize = {
  h3: '6'
};
const lineHeight = {
  t3: '20px',
  t4: '24px',
  t5: '28px',
  t6: '36px'
};

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "@emotion/is-prop-valid":
/*!*****************************************!*\
  !*** external "@emotion/is-prop-valid" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/is-prop-valid");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("jotai");

/***/ }),

/***/ "jotai/utils":
/*!******************************!*\
  !*** external "jotai/utils" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jotai/utils");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-grid-system":
/*!************************************!*\
  !*** external "react-grid-system" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-grid-system");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLFNBQVNRLFVBQVQsR0FBc0I7QUFDcEIsUUFBTUMsS0FBSyxHQUFHUCx5REFBWSxDQUFDSyxzREFBRCxDQUExQjtBQUNBLFFBQU1HLFNBQVMsR0FBR1AsMERBQWEsQ0FBQ0csc0RBQUQsQ0FBL0I7O0FBRUEsUUFBTUssT0FBTyxHQUFHQyxDQUFDLElBQUk7QUFDbkJBLElBQUFBLENBQUMsQ0FBQ0MsZUFBRjtBQUNBSCxJQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSw4REFBQywrQ0FBRDtBQUFLLGNBQVUsRUFBQyxRQUFoQjtBQUF5QixTQUFLLEVBQUU7QUFBRUksTUFBQUEsTUFBTSxFQUFFO0FBQVYsS0FBaEM7QUFBdUQsV0FBTyxFQUFFSCxPQUFoRTtBQUFBLDRCQUNFLDhEQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBZSxZQUFNLEVBQUMsTUFBdEI7QUFBQSxnQkFDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyxtREFBRDtBQUNFLFNBQUcsRUFBRyxTQUFRQSxLQUFLLEtBQUssQ0FBVixHQUFjLFlBQWQsR0FBNkIsaUJBQWtCLE1BRC9EO0FBRUUsU0FBRyxFQUFDLE1BRk47QUFHRSxXQUFLLEVBQUMsSUFIUjtBQUlFLFlBQU0sRUFBQztBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztBQUVELGlFQUFlRCxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLFNBQVNXLFFBQVQsR0FBb0I7QUFDbEIsUUFBTSxDQUFDQyxNQUFELEVBQVNWLFNBQVQsSUFBc0JLLDhDQUFPLENBQUNULHNEQUFELENBQW5DOztBQUVBLFFBQU1lLGNBQWMsR0FBRyxNQUFNWCxTQUFTLENBQUMsQ0FBQ1UsTUFBRixDQUF0Qzs7QUFFQSxzQkFDRSw4REFBQyxrREFBRDtBQUFRLFFBQUksRUFBRUEsTUFBZDtBQUFzQixXQUFPLEVBQUVDLGNBQS9CO0FBQUEsNEJBQ0UsOERBQUMsb0RBQUQ7QUFBZ0IsWUFBTSxFQUFFQTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFLLFVBQUksTUFBVDtBQUFVLGFBQU8sRUFBQyxHQUFsQjtBQUFzQixlQUFTLEVBQUMsUUFBaEM7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBRUQsaUVBQWVGLFFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNGLGNBQVQsQ0FBd0I7QUFBRVMsRUFBQUE7QUFBRixDQUF4QixFQUFvQztBQUNsQyxRQUFNakIsS0FBSyxHQUFHUCx5REFBWSxDQUFDSyxzREFBRCxDQUExQjtBQUVBLHNCQUNFLDhEQUFDLE1BQUQ7QUFBUSxXQUFPLEVBQUMsZUFBaEI7QUFBQSw0QkFDRSw4REFBQyxnREFBRDtBQUFNLFFBQUUsRUFBQyxJQUFUO0FBQWMsVUFBSSxFQUFDLEdBQW5CO0FBQXVCLFlBQU0sRUFBQyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBSyxhQUFPLEVBQUMsVUFBYjtBQUF3QixnQkFBVSxFQUFDLFFBQW5DO0FBQUEsOEJBQ0UsOERBQUMsVUFBRDtBQUFZLFlBQUksRUFBQyxHQUFqQjtBQUFBLG1CQUFzQkUsS0FBdEIsT0FBOEJBLEtBQUssS0FBSyxDQUFWLEdBQWMsTUFBZCxHQUF1QixPQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHVEQUFEO0FBQWEsZUFBTyxFQUFFaUI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRUQsTUFBTUMsTUFBTSxHQUFHTCxzREFBTSxDQUFDQyx1REFBRCxDQUFVO0FBQy9CLGtCQUFrQkUsK0NBQVc7QUFDN0IsbUJBQW1CQSwrQ0FBVztBQUM5QixtQkFBbUJBLCtDQUFXO0FBQzlCLENBSkE7QUFNQSxNQUFNSyxVQUFVLEdBQUdSLHNEQUFNLENBQUNqQixnREFBRCxDQUFPO0FBQ2hDLGtCQUFrQm9CLCtDQUFXO0FBQzdCLENBRkE7QUFJQSxpRUFBZVIsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBRUEsU0FBU0MsWUFBVCxHQUF3QjtBQUN0QixRQUFNa0IsSUFBSSxHQUFHbEMseURBQVksQ0FBQytCLDRDQUFELENBQXpCO0FBQ0EsUUFBTUksU0FBUyxHQUFHbkMseURBQVksQ0FBQ2dDLGlEQUFELENBQTlCOztBQUVBLE1BQUlFLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQix3QkFBTyw4REFBQyxnREFBRDtBQUFNLFdBQUssRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGVBQ0dGLElBQUksQ0FBQ0csR0FBTCxDQUFTQyxPQUFPLGlCQUNmLDhEQUFDLHFEQUFEO0FBQWtDLGFBQU8sRUFBRUE7QUFBM0MsT0FBc0JBLE9BQU8sQ0FBQ0MsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELENBREgsZUFJRSw4REFBQyxzREFBRDtBQUFBLDhCQUNFLDhEQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBZSxjQUFNLEVBQUMsTUFBdEI7QUFBNkIsYUFBSyxFQUFDLE9BQW5DO0FBQUEsa0JBQTRDSjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFRRSw4REFBQyxrREFBRDtBQUFRLFVBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUEsa0JBREY7QUFZRDs7QUFFRCxpRUFBZW5CLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBRUE7QUFFQTtBQUNBOzs7O0FBRUEsU0FBU2lCLGVBQVQsQ0FBeUI7QUFBRUssRUFBQUE7QUFBRixDQUF6QixFQUFzQztBQUNwQyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLCtDQUFEO0FBQUEsOEJBQ0UsOERBQUMsMERBQUQ7QUFBc0IsYUFBSyxFQUFFQSxPQUFPLENBQUNLLEtBQXJDO0FBQTRDLFdBQUcsRUFBRUwsT0FBTyxDQUFDTTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQywrQ0FBRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUF3QixZQUFJLE1BQTVCO0FBQUEsZ0NBQ0UsOERBQUMsc0RBQUQ7QUFBQSxrQ0FDRSw4REFBQyxnREFBRDtBQUFNLGtCQUFNLEVBQUMsTUFBYjtBQUFBLHNCQUFxQk4sT0FBTyxDQUFDTTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBc0IscUJBQVMsRUFBRU4sT0FBTyxDQUFDQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFLDhEQUFDLHNEQUFEO0FBQUEsa0NBQ0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLFVBQUQ7QUFBQSxzQkFBYUQsT0FBTyxDQUFDTztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFLDhEQUFDLHNEQUFEO0FBQUEsa0NBQ0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLFVBQUQ7QUFBQSxzQkFBYVAsT0FBTyxDQUFDUTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQWFFLDhEQUFDLHNEQUFEO0FBQUEsa0NBQ0UsOERBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLDhEQUFDLFVBQUQ7QUFBQSxzQkFBYVIsT0FBTyxDQUFDUztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXNCRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEJGO0FBQUEsa0JBREY7QUEwQkQ7O0FBRUQsU0FBU0MsVUFBVCxDQUFvQjtBQUFFQyxFQUFBQTtBQUFGLENBQXBCLEVBQWtDO0FBQ2hDLHNCQUFPLDhEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBZSxTQUFLLEVBQUMsU0FBckI7QUFBQSxjQUFnQ0E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsaUVBQWVoQixlQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxTQUFTUSxvQkFBVCxDQUE4QjtBQUFFRSxFQUFBQSxLQUFGO0FBQVNRLEVBQUFBLEdBQUcsR0FBRyxPQUFmO0FBQXdCQyxFQUFBQSxLQUFLLEdBQUdEO0FBQWhDLENBQTlCLEVBQXFFO0FBQ25FLHNCQUNFLDhEQUFDLFNBQUQ7QUFBVyxZQUFRLE1BQW5CO0FBQUEsMkJBQ0UsOERBQUMsU0FBRDtBQUFXLFNBQUcsRUFBRVIsS0FBaEI7QUFBdUIsU0FBRyxFQUFFUSxHQUE1QjtBQUFpQyxXQUFLLEVBQUVDLEtBQXhDO0FBQStDLFdBQUssRUFBQyxJQUFyRDtBQUEwRCxZQUFNLEVBQUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELE1BQU1DLFNBQVMsR0FBR2pDLHNEQUFNLENBQUNsQiwrQ0FBRCxDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0JnRCxtREFBZTtBQUNyQyxrQkFBa0IzQiwrQ0FBVztBQUM3QixDQVJBO0FBVUEsTUFBTWlDLFNBQVMsR0FBR3BDLHNEQUFNLENBQUNyQixtREFBRCxDQUFRO0FBQ2hDO0FBQ0E7QUFDQSxDQUhBO0FBS0EsaUVBQWUwQyxvQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNDLG9CQUFULENBQThCO0FBQUVnQixFQUFBQTtBQUFGLENBQTlCLEVBQTZDO0FBQzNDLFFBQU1DLGNBQWMsR0FBRzFELDBEQUFhLENBQUN3RCxzREFBRCxDQUFwQzs7QUFFQSxRQUFNaEQsT0FBTyxHQUFHQyxDQUFDLElBQUk7QUFDbkJBLElBQUFBLENBQUMsQ0FBQ0MsZUFBRjtBQUNBZ0QsSUFBQUEsY0FBYyxDQUFDRCxTQUFELENBQWQ7QUFDRCxHQUhEOztBQUtBLHNCQUNFLDhEQUFDLFNBQUQ7QUFBVyxRQUFJLEVBQUMsUUFBaEI7QUFBeUIsV0FBTyxFQUFFakQsT0FBbEM7QUFBQSwyQkFDRSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBQyxrQkFBWDtBQUE4QixTQUFHLEVBQUMsUUFBbEM7QUFBMkMsV0FBSyxFQUFDLGtCQUFqRDtBQUFvRSxXQUFLLEVBQUMsSUFBMUU7QUFBK0UsWUFBTSxFQUFDO0FBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCxNQUFNNEMsU0FBUyxHQUFHakMsNkRBQVk7QUFDOUI7QUFDQSxDQUZBO0FBSUEsaUVBQWVzQixvQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTeUIsV0FBVCxDQUFxQjtBQUFFN0IsRUFBQUE7QUFBRixDQUFyQixFQUFrQztBQUNoQyxNQUFJLENBQUNBLE9BQUwsRUFBYyxPQUFPLElBQVA7QUFFZCxRQUFNO0FBQUVNLElBQUFBLFNBQUY7QUFBYUQsSUFBQUEsS0FBYjtBQUFvQkUsSUFBQUEsS0FBcEI7QUFBMkJ1QixJQUFBQSxhQUEzQjtBQUEwQ3RCLElBQUFBLGNBQTFDO0FBQTBEdUIsSUFBQUE7QUFBMUQsTUFBcUUvQixPQUEzRTtBQUVBLHNCQUNFLCtEQUFDLFNBQUQ7QUFBVyxZQUFRLE1BQW5CO0FBQUEsNEJBQ0UsK0RBQUMsc0RBQUQ7QUFBVyxXQUFLLEVBQUVLLEtBQWxCO0FBQXlCLFNBQUcsRUFBRUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsK0RBQUMsK0NBQUQ7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUF3QixVQUFJLE1BQTVCO0FBQTZCLGFBQU8sRUFBQyxHQUFyQztBQUFBLDhCQUNFLCtEQUFDLGdEQUFEO0FBQU0sVUFBRSxFQUFDLElBQVQ7QUFBYyxZQUFJLEVBQUMsR0FBbkI7QUFBdUIsVUFBRSxFQUFDLEdBQTFCO0FBQUEsa0JBQStCQTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSwrREFBQyxzREFBRDtBQUFBLGdDQUNFLCtEQUFDLHFEQUFEO0FBQVEsWUFBRSxNQUFWO0FBQUEsaUNBQ0UsK0RBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUsK0RBQUMsc0RBQUQ7QUFBTyxlQUFLLEVBQUVDLEtBQWQ7QUFBcUIsdUJBQWEsRUFBRXVCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFRRSwrREFBQyxzREFBRDtBQUFBLGdDQUNFLCtEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsK0RBQUMsMkRBQUQ7QUFBQSxvQkFBYXRCO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRixlQVlFLCtEQUFDLHNEQUFEO0FBQUEsZ0NBQ0UsK0RBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSwrREFBQyxpREFBRDtBQUFhLGdCQUFNLEVBQUV1QjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBZ0JFLCtEQUFDLGdFQUFEO0FBQWlCLGVBQU8sRUFBRS9CO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7O0FBRUQsTUFBTWUsU0FBUyxHQUFHakMsc0RBQU0sQ0FBQ2xCLCtDQUFELENBQU07QUFDOUIsbUJBQW1CcUIsK0NBQVc7QUFDOUIsc0JBQXNCMkIsbURBQWU7QUFDckM7QUFDQSxDQUpBO0FBTUEsaUVBQWVpQixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLFNBQVNLLDBCQUFULENBQW9DO0FBQUVsQyxFQUFBQTtBQUFGLENBQXBDLEVBQWlEO0FBQy9DLFFBQU1tQyxTQUFTLEdBQUd4RSwwREFBYSxDQUFDc0UsaURBQUQsQ0FBL0I7QUFDQSxRQUFNL0QsU0FBUyxHQUFHUCwwREFBYSxDQUFDRyxzREFBRCxDQUEvQjs7QUFFQSxRQUFNSyxPQUFPLEdBQUdDLENBQUMsSUFBSTtBQUNuQkEsSUFBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0FILElBQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFDQWlFLElBQUFBLFNBQVMsQ0FBQ25DLE9BQUQsQ0FBVDtBQUNELEdBSkQ7O0FBTUEsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBUSxXQUFPLEVBQUU3QixPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0FBRUQsaUVBQWUrRCwwQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRUE7OztBQUVBLFNBQVNFLHFCQUFULE9BQXVEO0FBQUEsTUFBeEI7QUFBRXpCLElBQUFBO0FBQUYsR0FBd0I7QUFBQSxNQUFUMEIsS0FBUzs7QUFDckQsc0JBQU8sOERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFNBQUssRUFBQztBQUFyQixLQUFtQ0EsS0FBbkM7QUFBQSxjQUEyQzFCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUVELGlFQUFleUIscUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsU0FBU0UsZ0JBQVQsQ0FBMEI7QUFBRWpDLEVBQUFBLEtBQUY7QUFBU1EsRUFBQUEsR0FBRyxHQUFHO0FBQWYsQ0FBMUIsRUFBb0Q7QUFDbEQsc0JBQ0UsOERBQUMsU0FBRDtBQUFXLFlBQVEsTUFBbkI7QUFBQSwyQkFDRSw4REFBQyxTQUFEO0FBQVcsU0FBRyxFQUFFUixLQUFoQjtBQUF1QixTQUFHLEVBQUVRLEdBQTVCO0FBQWlDLFdBQUssRUFBQyxLQUF2QztBQUE2QyxZQUFNLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELE1BQU1FLFNBQVMsR0FBR2pDLHNEQUFNLENBQUNsQiwrQ0FBRCxDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYQTtBQWFBLE1BQU1zRCxTQUFTLEdBQUdwQyxzREFBTSxDQUFDckIsbURBQUQsQ0FBUTtBQUNoQztBQUNBO0FBQ0EsQ0FIQTtBQUtBLGlFQUFlNkUsZ0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUEsU0FBU0MsZ0JBQVQsQ0FBMEI7QUFBRWhDLEVBQUFBLEtBQUY7QUFBU3VCLEVBQUFBO0FBQVQsQ0FBMUIsRUFBb0Q7QUFDbEQsc0JBQ0U7QUFBQSxlQUNHLENBQUMsQ0FBQ0EsYUFBRixpQkFDQyw4REFBQyxxREFBRDtBQUFRLFFBQUUsTUFBVjtBQUFBLDZCQUNFLDhEQUFDLDJEQUFEO0FBQ0UsbUJBQVcsTUFEYjtBQUVFLGFBQUssRUFBRTtBQUFFVSxVQUFBQSxXQUFXLEVBQUV2RCwrQ0FBVUc7QUFBekIsU0FGVDtBQUFBLG1CQUlHMEMsYUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFXRSw4REFBQyxnREFBRDtBQUFNLFdBQUssRUFBQyxTQUFaO0FBQXNCLFVBQUksRUFBQyxHQUEzQjtBQUErQixZQUFNLEVBQUMsTUFBdEM7QUFBQSxpQkFDR3ZCLEtBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0FBRUQsaUVBQWVnQyxnQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUVBOzs7QUFFQSxTQUFTSSxXQUFULENBQXFCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBckIsRUFBbUM7QUFDakMsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBQSxjQUNHQSxRQUFRLENBQUM3QyxHQUFULENBQWFDLE9BQU8saUJBQ25CLDhEQUFDLGtEQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsQ0FBakI7QUFBb0IsUUFBRSxFQUFFLENBQXhCO0FBQUEsNkJBQ0UsOERBQUMsaURBQUQ7QUFBYSxlQUFPLEVBQUVBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFnQ0EsT0FBTyxDQUFDQyxFQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7QUFFRCxpRUFBZTBDLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBOztBQUVBLE1BQU1FLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULENBQWQ7O0FBRUEsU0FBU2pCLFdBQVQsQ0FBcUI7QUFBRUcsRUFBQUE7QUFBRixDQUFyQixFQUFpQztBQUMvQixzQkFDRSw4REFBQywrQ0FBRDtBQUFBLGNBQ0djLEtBQUssQ0FBQzlDLEdBQU4sQ0FBVStDLFdBQVcsaUJBQ3BCLDhEQUFDLE9BQUQ7QUFFRSxjQUFRLEVBQUVmLE1BQU0sR0FBRyxDQUFULElBQWNlLFdBQVcsSUFBSWY7QUFGekMsT0FDT2UsV0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7QUFFRCxTQUFTQyxPQUFULENBQWlCO0FBQUVDLEVBQUFBLFFBQVEsR0FBRztBQUFiLENBQWpCLEVBQXVDO0FBQ3JDLHNCQUNFO0FBQUssV0FBTyxFQUFDLFdBQWI7QUFBeUIsU0FBSyxFQUFDLElBQS9CO0FBQW9DLFVBQU0sRUFBQyxJQUEzQztBQUFnRCxTQUFLLEVBQUMsNEJBQXREO0FBQUEsMkJBQ0U7QUFBRyxVQUFJLEVBQUMsTUFBUjtBQUFlLGNBQVEsRUFBQyxTQUF4QjtBQUFBLDhCQUNFO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFDRSxTQUFDLEVBQUMsa05BREo7QUFFRSxZQUFJLEVBQUVBLFFBQVEsR0FBR3BDLHFEQUFILEdBQXNCQSxtREFBY3NDO0FBRnBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7QUFFRCxpRUFBZXRCLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7QUFFQSxTQUFTekMsTUFBVCxHQUFrQjtBQUNoQixzQkFDRSw4REFBQyw2Q0FBRDtBQUFBLDJCQUNFLDhEQUFDLGNBQUQ7QUFBQSw4QkFDRSw4REFBQyxhQUFEO0FBQUEsK0JBQ0UsOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7QUFFRCxNQUFNaUUsY0FBYyxHQUFHdEUsc0RBQU0sQ0FBQ2lDLHdEQUFELENBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0EsQ0FKQTtBQU1BLE1BQU1zQyxhQUFhLEdBQUd2RSw0REFBVztBQUNqQztBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBTUEsaUVBQWVLLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTs7O0FBRUEsU0FBU2dFLElBQVQsR0FBZ0I7QUFDZCxzQkFDRSw4REFBQyxtREFBRDtBQUFPLE9BQUcsRUFBQyxnQkFBWDtBQUE0QixPQUFHLEVBQUMsUUFBaEM7QUFBeUMsU0FBSyxFQUFDLEtBQS9DO0FBQXFELFVBQU0sRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFHRDs7QUFFRCxpRUFBZUEsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBRUE7QUFDQTtBQUVBLE1BQU1wRSxPQUFPLEdBQUdELHNEQUFNLENBQUNsQiwrQ0FBRCxDQUFNO0FBQzVCO0FBQ0EsZ0JBQWdCMkYsOENBQVU7QUFDMUIsbUJBQW1CdEUsK0NBQVc7QUFDOUI7QUFDQTtBQUNBLENBTkE7QUFRQSxpRUFBZUYsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFFQSxTQUFTMkUsVUFBVCxDQUFvQjtBQUFFL0MsRUFBQUE7QUFBRixDQUFwQixFQUFrQztBQUNoQyxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsZ0JBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBS0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUFTRDs7QUFFRCxpRUFBZStDLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFFQSxNQUFNOUYsR0FBRyxHQUFHa0IsMERBQUEsQ0FDVixDQUFDO0FBQ0M2RSxFQUFBQSxRQUFRLEdBQUcsS0FEWjtBQUVDQyxFQUFBQSxTQUFTLEdBQUcsSUFGYjtBQUdDQyxFQUFBQSxJQUFJLEdBQUcsS0FIUjtBQUlDQyxFQUFBQSxPQUFPLEdBQUcsSUFKWDtBQUtDQyxFQUFBQSxVQUFVLEdBQUcsSUFMZDtBQU1DQyxFQUFBQSxJQUFJLEdBQUcsSUFOUjtBQU9DQyxFQUFBQSxPQUFPLEdBQUc7QUFQWCxDQUFELE1BUU87QUFDTEMsRUFBQUEsT0FBTyxFQUFFLE1BREo7QUFFTEMsRUFBQUEsSUFBSSxFQUFFTixJQUFJLEdBQUcsQ0FBSCxHQUFPLElBRlo7QUFHTE8sRUFBQUEsYUFBYSxFQUFFUixTQUhWO0FBSUxTLEVBQUFBLGNBQWMsRUFBRVYsUUFBUSxHQUFHLFFBQUgsR0FBY0csT0FKakM7QUFLTEMsRUFBQUEsVUFBVSxFQUFFSixRQUFRLEdBQUcsUUFBSCxHQUFjSSxVQUw3QjtBQU1MRSxFQUFBQSxPQUFPLEVBQUVBLE9BQU8sR0FBR2hGLDRDQUFPLENBQUUsSUFBR2dGLE9BQVEsRUFBYixDQUFWLEdBQTRCLElBTnZDO0FBT05LLEVBQUFBLFFBQVEsRUFBRU47QUFQSixDQVJQLENBRFUsQ0FBWjtBQW9CQSxpRUFBZXBHLEdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUEsU0FBUzJCLE1BQVQsQ0FBZ0I7QUFBRW9CLEVBQUFBLFFBQUY7QUFBWTZELEVBQUFBLEtBQUssR0FBRyxTQUFwQjtBQUErQnJHLEVBQUFBLE9BQS9CO0FBQXdDMEYsRUFBQUEsSUFBSSxHQUFHO0FBQS9DLENBQWhCLEVBQXdFO0FBQ3RFLHNCQUNFLDhEQUFDLFdBQUQ7QUFBYSxXQUFPLEVBQUVXLEtBQXRCO0FBQTZCLFNBQUssRUFBQyxPQUFuQztBQUEyQyxXQUFPLEVBQUVyRyxPQUFwRDtBQUE2RCxRQUFJLEVBQUUwRixJQUFuRTtBQUFBLGNBQ0dsRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELE1BQU04RCxXQUFXLEdBQUczRiwrREFBYztBQUNsQyxJQUFJeUYsbURBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQmxDLEtBQUssSUFBSXpCLDJDQUFNLENBQUN5QixLQUFLLENBQUNzQyxPQUFQLENBQWdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXdEMsS0FBSyxJQUFJQSxLQUFLLENBQUN3QixJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFPO0FBQ2pEO0FBQ0E7QUFDQSx3QkFBd0J4QixLQUFLLElBQUl6QiwyQ0FBTSxDQUFFLEdBQUV5QixLQUFLLENBQUNzQyxPQUFRLEtBQWxCLENBQXdCO0FBQy9EO0FBQ0EsQ0FoQkE7QUFrQkEsaUVBQWVwRixNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFQSxTQUFTUCxXQUFULENBQXFCO0FBQUViLEVBQUFBO0FBQUYsQ0FBckIsRUFBa0M7QUFDaEMsc0JBQ0UsOERBQUMsZ0JBQUQ7QUFBa0IsV0FBTyxFQUFFQSxPQUEzQjtBQUFvQyxTQUFLLEVBQUMsT0FBMUM7QUFBQSwyQkFDRSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBQyxpQkFBWDtBQUE2QixTQUFHLEVBQUMsT0FBakM7QUFBeUMsV0FBSyxFQUFDLElBQS9DO0FBQW9ELFlBQU0sRUFBQztBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRUQsTUFBTXlHLGdCQUFnQixHQUFHOUYsK0RBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I4QixtREFBZTtBQUNyQztBQUNBLENBVkE7QUFZQSxpRUFBZTVCLFdBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUVBO0FBRUEsTUFBTWtCLE9BQU8sR0FBR3BCLDREQUFXO0FBQzNCLGlCQUFpQkcsOENBQVc7QUFDNUIsNkJBQTZCMkIsa0RBQWU7QUFDNUMsbUJBQW1CM0IsOENBQVc7QUFDOUI7QUFDQSxDQUxBO0FBT0EsaUVBQWVpQixPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBUzFCLE1BQVQsT0FBdUQ7QUFBQSxNQUF2QztBQUFFbUMsSUFBQUEsUUFBRjtBQUFZcUUsSUFBQUEsSUFBWjtBQUFrQkMsSUFBQUE7QUFBbEIsR0FBdUM7QUFBQSxNQUFUNUMsS0FBUzs7QUFDckQsUUFBTTZDLFFBQVEsR0FBRzFILG1EQUFBLEVBQWpCO0FBRUFzSCxFQUFBQSxnRUFBc0IsQ0FBQ0ksUUFBRCxFQUFXRixJQUFYLEVBQWlCQyxPQUFqQixDQUF0QjtBQUNBRixFQUFBQSx1REFBYSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsQ0FBYjtBQUVBLHNCQUNFLDhEQUFDLEtBQUQ7QUFBTyxPQUFHLEVBQUVDLFFBQVo7QUFBc0IsYUFBUyxFQUFFRixJQUFJLEdBQUcsTUFBSCxHQUFZO0FBQWpELEtBQXlEM0MsS0FBekQ7QUFBQSxjQUNHMUI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCxNQUFNeUUsS0FBSyxHQUFHdEcsNERBQVc7QUFDekI7QUFDQTtBQUNBLHNCQUFzQjhCLHNEQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCMkMsOENBQVU7QUFDNUI7QUFDQSxDQXBCQTtBQXNCQSxpRUFBZS9FLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7OztBQUVBLFNBQVNnSCxPQUFULE9BQStDO0FBQUEsTUFBOUI7QUFBRTdFLElBQUFBLFFBQUY7QUFBWThFLElBQUFBO0FBQVosR0FBOEI7QUFBQSxNQUFUcEQsS0FBUzs7QUFDN0MsUUFBTXFELEdBQUcsR0FBSSxJQUFHRCxJQUFLLEVBQXJCO0FBRUEsc0JBQ0UsOERBQUMsMENBQUQ7QUFBTSxNQUFFLEVBQUVDLEdBQVY7QUFBZSxRQUFJLEVBQUVILGdEQUFXLENBQUNHLEdBQUQsQ0FBaEM7QUFBdUMsVUFBTSxFQUFDO0FBQTlDLEtBQXdEckQsS0FBeEQ7QUFBQSxjQUNHMUI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFRCxpRUFBZTZFLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxTQUFTaEcsVUFBVCxDQUFvQjtBQUFFbUIsRUFBQUEsUUFBRjtBQUFZb0QsRUFBQUEsVUFBVSxHQUFHO0FBQXpCLENBQXBCLEVBQXlEO0FBQ3ZELHNCQUNFLDhEQUFDLFFBQUQ7QUFBVSxXQUFPLEVBQUMsZUFBbEI7QUFBa0MsY0FBVSxFQUFFQSxVQUE5QztBQUFBLGNBQ0dwRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELE1BQU1nRixRQUFRLEdBQUc3RyxzREFBTSxDQUFDbEIsK0NBQUQsQ0FBTTtBQUM3QixtQkFBbUJxQiwrQ0FBVztBQUM5QixDQUZBO0FBSUEsaUVBQWVPLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUVBO0FBUU8sTUFBTStFLGdCQUFnQixHQUFHLENBQUM7QUFDL0JDLEVBQUFBLEtBQUssR0FBRyxjQUR1QjtBQUUvQjBCLEVBQUFBLE1BQU0sR0FBR0osdURBRnNCO0FBRy9CSyxFQUFBQSxXQUFXLEdBQUcsS0FIaUI7QUFJL0JWLEVBQUFBLElBQUksR0FBRyxHQUp3QjtBQUsvQk8sRUFBQUEsVUFBVSxHQUFHUCxJQUxrQjtBQU0vQlcsRUFBQUEsRUFOK0I7QUFPL0JDLEVBQUFBLE1BQU0sR0FBRztBQVBzQixDQUFELEtBUzlCUiwrQ0FBSTtBQUNOLGFBQWFqRiwyQ0FBTSxDQUFDNEQsS0FBRCxDQUFOLElBQWlCQSxLQUFNO0FBQ3BDLG1CQUFtQjBCLE1BQU87QUFDMUIsaUJBQWlCSCw2Q0FBUSxDQUFFLElBQUdOLElBQUssRUFBVixDQUFSLElBQXdCLFNBQVU7QUFDbkQsbUJBQW1CWSxNQUFPO0FBQzFCLG1CQUFtQkosK0NBQWdCLENBQUUsSUFBR0QsVUFBVyxFQUFoQixDQUFoQixJQUFzQyxTQUFVO0FBQ25FLHFCQUFxQi9HLDRDQUFPLENBQUUsSUFBR21ILEVBQUcsRUFBUixDQUFQLElBQXFCLENBQUU7QUFDNUMsdUJBQXVCRCxXQUFXLEdBQUcsY0FBSCxHQUFvQixNQUFPO0FBQzdELEdBakJPO0FBbUJQLE1BQU10SSxJQUFJLEdBQUdpQixzREFBTSxDQUFDLE1BQUQsRUFBUztBQUMxQndILEVBQUFBLGlCQUFpQixFQUFFQyxJQUFJLElBQ3JCWCw2REFBVyxDQUFDVyxJQUFELENBQVgsSUFBcUIsQ0FBQyxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsUUFBZixFQUF5QkMsUUFBekIsQ0FBa0NELElBQWxDO0FBRkUsQ0FBVCxDQUFOLENBR1ZoQyxnQkFIVSxDQUFiO0FBS0EsaUVBQWUxRyxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBOztBQUVBLFNBQVNpSCxzQkFBVCxDQUFnQzZCLFVBQWhDLEVBQTRDM0IsSUFBNUMsRUFBa0RDLE9BQWxELEVBQTJEO0FBQ3pEd0IsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSUMsOENBQVEsSUFBSSxDQUFDMUIsSUFBYixJQUFxQixDQUFDMkIsVUFBVSxDQUFDQyxPQUFyQyxFQUE4Qzs7QUFFOUMsVUFBTUMsV0FBVyxHQUFHekksQ0FBQyxJQUFJO0FBQ3ZCLFVBQUl1SSxVQUFVLENBQUNDLE9BQVgsSUFBc0IsQ0FBQ0QsVUFBVSxDQUFDQyxPQUFYLENBQW1CRSxRQUFuQixDQUE0QjFJLENBQUMsQ0FBQzJJLE1BQTlCLENBQTNCLEVBQWtFO0FBQ2hFOUIsUUFBQUEsT0FBTztBQUNSO0FBQ0YsS0FKRDs7QUFNQStCLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNKLFdBQW5DO0FBQ0FHLElBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0NKLFdBQXhDO0FBRUEsV0FBTyxNQUFNO0FBQ1hHLE1BQUFBLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0NMLFdBQXRDO0FBQ0FHLE1BQUFBLFFBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsWUFBN0IsRUFBMkNMLFdBQTNDO0FBQ0QsS0FIRDtBQUlELEdBaEJRLEVBZ0JOLENBQUM3QixJQUFELEVBQU9DLE9BQVAsRUFBZ0IwQixVQUFoQixDQWhCTSxDQUFUO0FBaUJEOztBQUVELGlFQUFlN0Isc0JBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUVBOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCQyxPQUE3QixFQUFxQztBQUNuQ3dCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlDLDhDQUFRLElBQUksQ0FBQzFCLElBQWpCLEVBQXVCOztBQUV2QixVQUFNbUMsU0FBUyxHQUFHL0ksQ0FBQyxJQUFJQSxDQUFDLENBQUNnSixHQUFGLEtBQVUsUUFBVixJQUFzQm5DLE9BQU8sRUFBcEQ7O0FBRUErQixJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DRSxTQUFuQztBQUVBLFdBQU8sTUFBTTtBQUNYSCxNQUFBQSxRQUFRLENBQUNFLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDQyxTQUF0QztBQUNELEtBRkQ7QUFHRCxHQVZRLEVBVU4sQ0FBQ25DLElBQUQsRUFBT0MsT0FBUCxDQVZNLENBQVQ7QUFXRDs7QUFFRCxpRUFBZUYsYUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPLE1BQU0yQixRQUFRLFFBQWQ7Ozs7Ozs7Ozs7O0FDQU07O0FBQ2JXLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELGVBQUEsR0FBa0JFLE1BQWxCOztBQUNBLElBQUlDLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxLQUFLLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhDQUFELENBQVIsQ0FBbEM7O0FBQ0EsSUFBSUUsU0FBUyxHQUFHRixtQkFBTyxDQUFDLDBEQUFELENBQXZCOztBQUNBLElBQUlHLFlBQVksR0FBR0gsbUJBQU8sQ0FBQyxzREFBRCxDQUExQjs7QUFDQSxJQUFJSSxnQkFBZ0IsR0FBR0osbUJBQU8sQ0FBQywrRUFBRCxDQUE5Qjs7QUFDQSxTQUFTSyxlQUFULENBQXlCQyxHQUF6QixFQUE4QmQsR0FBOUIsRUFBbUNJLEtBQW5DLEVBQTBDO0FBQ3RDLE1BQUlKLEdBQUcsSUFBSWMsR0FBWCxFQUFnQjtBQUNaYixJQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JZLEdBQXRCLEVBQTJCZCxHQUEzQixFQUFnQztBQUM1QkksTUFBQUEsS0FBSyxFQUFFQSxLQURxQjtBQUU1QlcsTUFBQUEsVUFBVSxFQUFFLElBRmdCO0FBRzVCQyxNQUFBQSxZQUFZLEVBQUUsSUFIYztBQUk1QkMsTUFBQUEsUUFBUSxFQUFFO0FBSmtCLEtBQWhDO0FBTUgsR0FQRCxNQU9PO0FBQ0hILElBQUFBLEdBQUcsQ0FBQ2QsR0FBRCxDQUFILEdBQVdJLEtBQVg7QUFDSDs7QUFDRCxTQUFPVSxHQUFQO0FBQ0g7O0FBQ0QsU0FBU1Asc0JBQVQsQ0FBZ0NPLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDSSxVQUFYLEdBQXdCSixHQUF4QixHQUE4QjtBQUNqQzNHLElBQUFBLE9BQU8sRUFBRTJHO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsU0FBU0ssYUFBVCxDQUF1QnhCLE1BQXZCLEVBQStCO0FBQzNCLE9BQUksSUFBSXlCLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0MsU0FBUyxDQUFDM0ksTUFBN0IsRUFBcUMwSSxDQUFDLEVBQXRDLEVBQXlDO0FBQ3JDLFFBQUlFLE1BQU0sR0FBR0QsU0FBUyxDQUFDRCxDQUFELENBQVQsSUFBZ0IsSUFBaEIsR0FBdUJDLFNBQVMsQ0FBQ0QsQ0FBRCxDQUFoQyxHQUFzQyxFQUFuRDtBQUVBLFFBQUlHLE9BQU8sR0FBR3RCLE1BQU0sQ0FBQ3VCLElBQVAsQ0FBWUYsTUFBWixDQUFkOztBQUNBLFFBQUksT0FBT3JCLE1BQU0sQ0FBQ3dCLHFCQUFkLEtBQXdDLFVBQTVDLEVBQXdEO0FBQ3BERixNQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0csTUFBUixDQUFlekIsTUFBTSxDQUFDd0IscUJBQVAsQ0FBNkJILE1BQTdCLEVBQXFDSyxNQUFyQyxDQUE0QyxVQUFTQyxHQUFULEVBQWM7QUFDL0UsZUFBTzNCLE1BQU0sQ0FBQzRCLHdCQUFQLENBQWdDUCxNQUFoQyxFQUF3Q00sR0FBeEMsRUFBNkNiLFVBQXBEO0FBQ0gsT0FGd0IsQ0FBZixDQUFWO0FBR0g7O0FBQ0RRLElBQUFBLE9BQU8sQ0FBQ08sT0FBUixDQUFnQixVQUFTOUIsR0FBVCxFQUFjO0FBQzFCYSxNQUFBQSxlQUFlLENBQUNsQixNQUFELEVBQVNLLEdBQVQsRUFBY3NCLE1BQU0sQ0FBQ3RCLEdBQUQsQ0FBcEIsQ0FBZjtBQUNILEtBRkQ7QUFHSDs7QUFDRCxTQUFPTCxNQUFQO0FBQ0g7O0FBQ0QsU0FBU29DLHdCQUFULENBQWtDVCxNQUFsQyxFQUEwQ1UsUUFBMUMsRUFBb0Q7QUFDaEQsTUFBSVYsTUFBTSxJQUFJLElBQWQsRUFBb0IsT0FBTyxFQUFQOztBQUVwQixNQUFJM0IsTUFBTSxHQUFHc0MsNkJBQTZCLENBQUNYLE1BQUQsRUFBU1UsUUFBVCxDQUExQzs7QUFDQSxNQUFJaEMsR0FBSixFQUFTb0IsQ0FBVDs7QUFDQSxNQUFJbkIsTUFBTSxDQUFDd0IscUJBQVgsRUFBa0M7QUFDOUIsUUFBSVMsZ0JBQWdCLEdBQUdqQyxNQUFNLENBQUN3QixxQkFBUCxDQUE2QkgsTUFBN0IsQ0FBdkI7O0FBQ0EsU0FBSUYsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHYyxnQkFBZ0IsQ0FBQ3hKLE1BQWhDLEVBQXdDMEksQ0FBQyxFQUF6QyxFQUE0QztBQUN4Q3BCLE1BQUFBLEdBQUcsR0FBR2tDLGdCQUFnQixDQUFDZCxDQUFELENBQXRCO0FBQ0EsVUFBSVksUUFBUSxDQUFDRyxPQUFULENBQWlCbkMsR0FBakIsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDaEMsVUFBSSxDQUFDQyxNQUFNLENBQUNtQyxTQUFQLENBQWlCQyxvQkFBakIsQ0FBc0NDLElBQXRDLENBQTJDaEIsTUFBM0MsRUFBbUR0QixHQUFuRCxDQUFMLEVBQThEO0FBQzlETCxNQUFBQSxNQUFNLENBQUNLLEdBQUQsQ0FBTixHQUFjc0IsTUFBTSxDQUFDdEIsR0FBRCxDQUFwQjtBQUNIO0FBQ0o7O0FBQ0QsU0FBT0wsTUFBUDtBQUNIOztBQUNELFNBQVNzQyw2QkFBVCxDQUF1Q1gsTUFBdkMsRUFBK0NVLFFBQS9DLEVBQXlEO0FBQ3JELE1BQUlWLE1BQU0sSUFBSSxJQUFkLEVBQW9CLE9BQU8sRUFBUDtBQUVwQixNQUFJM0IsTUFBTSxHQUFHLEVBQWI7QUFFQSxNQUFJNEMsVUFBVSxHQUFHdEMsTUFBTSxDQUFDdUIsSUFBUCxDQUFZRixNQUFaLENBQWpCO0FBQ0EsTUFBSXRCLEdBQUosRUFBU29CLENBQVQ7O0FBQ0EsT0FBSUEsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHbUIsVUFBVSxDQUFDN0osTUFBMUIsRUFBa0MwSSxDQUFDLEVBQW5DLEVBQXNDO0FBQ2xDcEIsSUFBQUEsR0FBRyxHQUFHdUMsVUFBVSxDQUFDbkIsQ0FBRCxDQUFoQjtBQUNBLFFBQUlZLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQm5DLEdBQWpCLEtBQXlCLENBQTdCLEVBQWdDO0FBQ2hDTCxJQUFBQSxNQUFNLENBQUNLLEdBQUQsQ0FBTixHQUFjc0IsTUFBTSxDQUFDdEIsR0FBRCxDQUFwQjtBQUNIOztBQUNELFNBQU9MLE1BQVA7QUFDSDs7QUFDRCxNQUFNNkMsZUFBZSxHQUFHLElBQUlDLEdBQUosRUFBeEI7O0FBQ0EsSUFBSSxNQUErQjtBQUMvQkMsRUFBQUEsTUFBTSxDQUFDQyxxQkFBUCxHQUErQixJQUEvQjtBQUNIOztBQUNELE1BQU1DLG9CQUFvQixHQUFHLENBQ3pCLE1BRHlCLEVBRXpCLE9BRnlCLEVBR3pCQyxTQUh5QixDQUE3QjtBQUtBLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxHQUFKLENBQVEsQ0FDcEIsQ0FDSSxTQURKLEVBRUlDLGFBRkosQ0FEb0IsRUFLcEIsQ0FDSSxPQURKLEVBRUlDLFdBRkosQ0FMb0IsRUFTcEIsQ0FDSSxZQURKLEVBRUlDLGdCQUZKLENBVG9CLEVBYXBCLENBQ0ksUUFESixFQUVJQyxZQUZKLENBYm9CLEVBaUJwQixDQUNJLFFBREosRUFFSUMsWUFGSixDQWpCb0IsQ0FBUixDQUFoQjtBQXNCQSxNQUFNQyxtQkFBbUIsR0FBRyxDQUN4QixNQUR3QixFQUV4QixPQUZ3QixFQUd4QixXQUh3QixFQUl4QixZQUp3QixFQUt4QlIsU0FMd0IsQ0FBNUI7O0FBT0EsU0FBU1MsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDMUIsU0FBT0EsR0FBRyxDQUFDcEosT0FBSixLQUFnQjBJLFNBQXZCO0FBQ0g7O0FBQ0QsU0FBU1csaUJBQVQsQ0FBMkJELEdBQTNCLEVBQWdDO0FBQzVCLFNBQU9BLEdBQUcsQ0FBQ0EsR0FBSixLQUFZVixTQUFuQjtBQUNIOztBQUNELFNBQVNZLGNBQVQsQ0FBd0JGLEdBQXhCLEVBQTZCO0FBQ3pCLFNBQU8sT0FBT0EsR0FBUCxLQUFlLFFBQWYsS0FBNEJELGVBQWUsQ0FBQ0MsR0FBRCxDQUFmLElBQXdCQyxpQkFBaUIsQ0FBQ0QsR0FBRCxDQUFyRSxDQUFQO0FBQ0g7O0FBQ0QsTUFBTTtBQUFFRyxFQUFBQSxXQUFXLEVBQUVDLGlCQUFmO0FBQW1DQyxFQUFBQSxVQUFVLEVBQUVDLGdCQUEvQztBQUFrRUMsRUFBQUEsTUFBTSxFQUFFQyxZQUExRTtBQUF5RkMsRUFBQUEsSUFBSSxFQUFFQyxVQUEvRjtBQUE0R0MsRUFBQUEsT0FBTyxFQUFFQztBQUFySCxJQUEwSUMsc0pBQUEsSUFBaUN6RCxZQUFZLENBQUM0RCxrQkFBOUwsRUFDQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FDYixHQUFHYixpQkFEVSxFQUViLEdBQUdFLGdCQUZVLENBQWpCO0FBSUFGLGlCQUFpQixDQUFDYyxJQUFsQixDQUF1QixDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBUUQsQ0FBQyxHQUFHQyxDQUFuQztBQUVBSCxRQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBUUQsQ0FBQyxHQUFHQyxDQUExQjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsTUFBMUIsRUFBa0NDLEtBQWxDLEVBQXlDO0FBQ3JDLE1BQUlBLEtBQUssS0FBS0QsTUFBTSxLQUFLLE1BQVgsSUFBcUJBLE1BQU0sS0FBSyxZQUFyQyxDQUFULEVBQTZEO0FBQ3pEO0FBQ0EsVUFBTUUsZUFBZSxHQUFHLG9CQUF4QjtBQUNBLFVBQU1DLFlBQVksR0FBRyxFQUFyQjs7QUFDQSxTQUFJLElBQUlDLEtBQVIsRUFBZUEsS0FBSyxHQUFHRixlQUFlLENBQUNHLElBQWhCLENBQXFCSixLQUFyQixDQUF2QixFQUFvREcsS0FBcEQsRUFBMEQ7QUFDdERELE1BQUFBLFlBQVksQ0FBQ0csSUFBYixDQUFrQkMsUUFBUSxDQUFDSCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQTFCO0FBQ0g7O0FBQ0QsUUFBSUQsWUFBWSxDQUFDdk0sTUFBakIsRUFBeUI7QUFDckIsWUFBTTRNLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsR0FBR1AsWUFBWixJQUE0QixJQUFsRDtBQUNBLGFBQU87QUFDSFEsUUFBQUEsTUFBTSxFQUFFakIsUUFBUSxDQUFDN0MsTUFBVCxDQUFpQitELENBQUQsSUFBS0EsQ0FBQyxJQUFJL0IsaUJBQWlCLENBQUMsQ0FBRCxDQUFqQixHQUF1QjJCLGFBQWpELENBREw7QUFHSEssUUFBQUEsSUFBSSxFQUFFO0FBSEgsT0FBUDtBQUtIOztBQUNELFdBQU87QUFDSEYsTUFBQUEsTUFBTSxFQUFFakIsUUFETDtBQUVIbUIsTUFBQUEsSUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIOztBQUNELE1BQUksT0FBT2QsS0FBUCxLQUFpQixRQUFqQixJQUE2QkMsTUFBTSxLQUFLLE1BQXhDLElBQWtEQSxNQUFNLEtBQUssWUFBakUsRUFBK0U7QUFDM0UsV0FBTztBQUNIVyxNQUFBQSxNQUFNLEVBQUU5QixpQkFETDtBQUVIZ0MsTUFBQUEsSUFBSSxFQUFFO0FBRkgsS0FBUDtBQUlIOztBQUNELFFBQU1GLE1BQU0sR0FBRyxDQUNYLEdBQUcsSUFBSWhELEdBQUosRUFBUTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDSW9DLEtBREosRUFFSUEsS0FBSyxHQUFHO0FBQUU7QUFGZCxJQUdFbE0sR0FIRixDQUdPaU4sQ0FBRCxJQUFLcEIsUUFBUSxDQUFDcUIsSUFBVCxDQUFlQyxDQUFELElBQUtBLENBQUMsSUFBSUYsQ0FBeEIsS0FDRnBCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDOUwsTUFBVCxHQUFrQixDQUFuQixDQUpqQixDQVJHLENBRFEsQ0FBZjtBQWdCQSxTQUFPO0FBQ0grTSxJQUFBQSxNQURHO0FBRUhFLElBQUFBLElBQUksRUFBRTtBQUZILEdBQVA7QUFJSDs7QUFDRCxTQUFTSSxnQkFBVCxDQUEwQjtBQUFFeEMsRUFBQUEsR0FBRjtBQUFReUMsRUFBQUEsV0FBUjtBQUFzQmxCLEVBQUFBLE1BQXRCO0FBQStCRCxFQUFBQSxLQUEvQjtBQUF1Q29CLEVBQUFBLE9BQXZDO0FBQWlEbEIsRUFBQUEsS0FBakQ7QUFBeURqQixFQUFBQTtBQUF6RCxDQUExQixFQUE4RjtBQUMxRixNQUFJa0MsV0FBSixFQUFpQjtBQUNiLFdBQU87QUFDSHpDLE1BQUFBLEdBREc7QUFFSDJDLE1BQUFBLE1BQU0sRUFBRXJELFNBRkw7QUFHSGtDLE1BQUFBLEtBQUssRUFBRWxDO0FBSEosS0FBUDtBQUtIOztBQUNELFFBQU07QUFBRTRDLElBQUFBLE1BQUY7QUFBV0UsSUFBQUE7QUFBWCxNQUFxQmYsU0FBUyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLEtBQWhCLENBQXBDO0FBQ0EsUUFBTW9CLElBQUksR0FBR1YsTUFBTSxDQUFDL00sTUFBUCxHQUFnQixDQUE3QjtBQUNBLFNBQU87QUFDSHFNLElBQUFBLEtBQUssRUFBRSxDQUFDQSxLQUFELElBQVVZLElBQUksS0FBSyxHQUFuQixHQUF5QixPQUF6QixHQUFtQ1osS0FEdkM7QUFFSG1CLElBQUFBLE1BQU0sRUFBRVQsTUFBTSxDQUFDOU0sR0FBUCxDQUFXLENBQUNpTixDQUFELEVBQUl4RSxDQUFKLEtBQVMsR0FBRTBDLE1BQU0sQ0FBQztBQUM3QlAsTUFBQUEsR0FENkI7QUFFN0IwQyxNQUFBQSxPQUY2QjtBQUc3QnBCLE1BQUFBLEtBQUssRUFBRWU7QUFIc0IsS0FBRCxDQUk3QixJQUFHRCxJQUFJLEtBQUssR0FBVCxHQUFlQyxDQUFmLEdBQW1CeEUsQ0FBQyxHQUFHLENBQUUsR0FBRXVFLElBQUssRUFKbEMsRUFLTlMsSUFMTSxDQUtELElBTEMsQ0FGTDtBQVFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBN0MsSUFBQUEsR0FBRyxFQUFFTyxNQUFNLENBQUM7QUFDUlAsTUFBQUEsR0FEUTtBQUVSMEMsTUFBQUEsT0FGUTtBQUdScEIsTUFBQUEsS0FBSyxFQUFFWSxNQUFNLENBQUNVLElBQUQ7QUFITCxLQUFEO0FBZFIsR0FBUDtBQW9CSDs7QUFDRCxTQUFTRSxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNmLE1BQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCLFdBQU9BLENBQVA7QUFDSDs7QUFDRCxNQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUN2QixXQUFPakIsUUFBUSxDQUFDaUIsQ0FBRCxFQUFJLEVBQUosQ0FBZjtBQUNIOztBQUNELFNBQU96RCxTQUFQO0FBQ0g7O0FBQ0QsU0FBUzBELGtCQUFULENBQTRCQyxXQUE1QixFQUF5QztBQUNyQyxRQUFNQyxJQUFJLEdBQUczRCxPQUFPLENBQUM0RCxHQUFSLENBQVkzQyxZQUFaLENBQWI7O0FBQ0EsTUFBSTBDLElBQUosRUFBVTtBQUNOLFdBQU9BLElBQUksQ0FBQ3RGLGFBQWEsQ0FBQztBQUN0QndGLE1BQUFBLElBQUksRUFBRTFDO0FBRGdCLEtBQUQsRUFFdEJ1QyxXQUZzQixDQUFkLENBQVg7QUFHSDs7QUFDRCxRQUFNLElBQUlJLEtBQUosQ0FBVyx5REFBd0RqRyxZQUFZLENBQUNrRyxhQUFiLENBQTJCVCxJQUEzQixDQUFnQyxJQUFoQyxDQUFzQyxlQUFjckMsWUFBYSxFQUFwSSxDQUFOO0FBQ0gsRUFDRDtBQUNBOzs7QUFDQSxTQUFTK0MsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEJ4RCxHQUE1QixFQUFpQ3VCLE1BQWpDLEVBQXlDa0MsV0FBekMsRUFBc0RDLGlCQUF0RCxFQUF5RTtBQUNyRSxNQUFJLENBQUNGLEdBQUwsRUFBVTtBQUNOO0FBQ0g7O0FBQ0QsUUFBTUcsVUFBVSxHQUFHLE1BQUk7QUFDbkIsUUFBSSxDQUFDSCxHQUFHLENBQUN4RCxHQUFKLENBQVE0RCxVQUFSLENBQW1CLE9BQW5CLENBQUwsRUFBa0M7QUFDOUIsWUFBTXJCLENBQUMsR0FBRyxZQUFZaUIsR0FBWixHQUFrQkEsR0FBRyxDQUFDSyxNQUFKLEVBQWxCLEdBQWlDQyxPQUFPLENBQUNDLE9BQVIsRUFBM0M7QUFDQXhCLE1BQUFBLENBQUMsQ0FBQ3lCLEtBQUYsQ0FBUSxNQUFJLENBQ1gsQ0FERCxFQUNHQyxJQURILENBQ1EsTUFBSTtBQUNSLFlBQUlSLFdBQVcsS0FBSyxNQUFwQixFQUE0QjtBQUN4QkQsVUFBQUEsR0FBRyxDQUFDVSxLQUFKLENBQVU5RixNQUFWLEdBQW1CLE1BQW5CO0FBQ0FvRixVQUFBQSxHQUFHLENBQUNVLEtBQUosQ0FBVUMsY0FBVixHQUEyQixNQUEzQjtBQUNBWCxVQUFBQSxHQUFHLENBQUNVLEtBQUosQ0FBVUUsZUFBVixHQUE0QixNQUE1QjtBQUNIOztBQUNEbkYsUUFBQUEsZUFBZSxDQUFDb0YsR0FBaEIsQ0FBb0JyRSxHQUFwQjs7QUFDQSxZQUFJMEQsaUJBQUosRUFBdUI7QUFDbkIsZ0JBQU07QUFBRVksWUFBQUEsWUFBRjtBQUFpQkMsWUFBQUE7QUFBakIsY0FBb0NmLEdBQTFDLENBRG1CLENBRW5CO0FBQ0E7O0FBQ0FFLFVBQUFBLGlCQUFpQixDQUFDO0FBQ2RZLFlBQUFBLFlBRGM7QUFFZEMsWUFBQUE7QUFGYyxXQUFELENBQWpCO0FBSUg7O0FBQ0Qsa0JBQTJDO0FBQ3ZDLGNBQUlDLEdBQUo7O0FBQ0EsY0FBSSxDQUFDQSxHQUFHLEdBQUdoQixHQUFHLENBQUNpQixhQUFYLE1BQThCLElBQTlCLElBQXNDRCxHQUFHLEtBQUssS0FBSyxDQUFuRCxHQUF1RCxLQUFLLENBQTVELEdBQWdFQSxHQUFHLENBQUNDLGFBQXhFLEVBQXVGO0FBQ25GLGtCQUFNQyxNQUFNLEdBQUdDLGdCQUFnQixDQUFDbkIsR0FBRyxDQUFDaUIsYUFBSixDQUFrQkEsYUFBbkIsQ0FBL0I7O0FBQ0EsZ0JBQUlsRCxNQUFNLEtBQUssWUFBWCxJQUEyQm1ELE1BQU0sQ0FBQ25MLE9BQVAsS0FBbUIsTUFBbEQsRUFBMEQ7QUFDdERxTCxjQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxtQkFBa0I3RSxHQUFJLDBIQUFwQztBQUNILGFBRkQsTUFFTyxJQUFJdUIsTUFBTSxLQUFLLE1BQVgsSUFBcUJtRCxNQUFNLENBQUNJLFFBQVAsS0FBb0IsVUFBN0MsRUFBeUQ7QUFDNURGLGNBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLG1CQUFrQjdFLEdBQUksMkRBQTBEMEUsTUFBTSxDQUFDSSxRQUFTLHVGQUE5RztBQUNIO0FBQ0o7QUFDSjtBQUNKLE9BNUJEO0FBNkJIO0FBQ0osR0FqQ0Q7O0FBa0NBLE1BQUl0QixHQUFHLENBQUN1QixRQUFSLEVBQWtCO0FBQ2Q7QUFDQTtBQUNBO0FBQ0FwQixJQUFBQSxVQUFVO0FBQ2IsR0FMRCxNQUtPO0FBQ0hILElBQUFBLEdBQUcsQ0FBQ3dCLE1BQUosR0FBYXJCLFVBQWI7QUFDSDtBQUNKOztBQUNELFNBQVM3RyxNQUFULENBQWdCbUksTUFBaEIsRUFBd0I7QUFDcEIsTUFBSTtBQUFFakYsSUFBQUEsR0FBRjtBQUFRd0IsSUFBQUEsS0FBUjtBQUFnQmlCLElBQUFBLFdBQVcsR0FBRSxLQUE3QjtBQUFxQ3lDLElBQUFBLFFBQVEsR0FBRSxLQUEvQztBQUF1REMsSUFBQUEsT0FBdkQ7QUFBaUVDLElBQUFBLFlBQVksR0FBRSxPQUEvRTtBQUF5RkMsSUFBQUEsU0FBekY7QUFBcUczQyxJQUFBQSxPQUFyRztBQUErR3BCLElBQUFBLEtBQS9HO0FBQXVIZ0UsSUFBQUEsTUFBdkg7QUFBZ0lDLElBQUFBLFNBQWhJO0FBQTRJQyxJQUFBQSxjQUE1STtBQUE2SjlCLElBQUFBLGlCQUE3SjtBQUFpTG5ELElBQUFBLE1BQU0sR0FBRXlDLGtCQUF6TDtBQUE4TVMsSUFBQUEsV0FBVyxHQUFFLE9BQTNOO0FBQXFPZ0MsSUFBQUE7QUFBck8sTUFBc1BSLE1BQTFQO0FBQUEsTUFBa1FTLEdBQUcsR0FBR2xILHdCQUF3QixDQUFDeUcsTUFBRCxFQUFTLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsYUFBakIsRUFBZ0MsVUFBaEMsRUFBNEMsU0FBNUMsRUFBdUQsY0FBdkQsRUFBdUUsV0FBdkUsRUFBb0YsU0FBcEYsRUFBK0YsT0FBL0YsRUFBd0csUUFBeEcsRUFBa0gsV0FBbEgsRUFBK0gsZ0JBQS9ILEVBQWlKLG1CQUFqSixFQUFzSyxRQUF0SyxFQUFnTCxhQUFoTCxFQUErTCxhQUEvTCxDQUFULENBQWhTOztBQUNBLE1BQUlVLElBQUksR0FBR0QsR0FBWDtBQUNBLE1BQUluRSxNQUFNLEdBQUdDLEtBQUssR0FBRyxZQUFILEdBQWtCLFdBQXBDOztBQUNBLE1BQUksWUFBWW1FLElBQWhCLEVBQXNCO0FBQ2xCO0FBQ0EsUUFBSUEsSUFBSSxDQUFDcEUsTUFBVCxFQUFpQkEsTUFBTSxHQUFHb0UsSUFBSSxDQUFDcEUsTUFBZCxDQUZDLENBR2xCOztBQUNBLFdBQU9vRSxJQUFJLENBQUMsUUFBRCxDQUFYO0FBQ0g7O0FBQ0QsTUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUNBLE1BQUkxRixjQUFjLENBQUNGLEdBQUQsQ0FBbEIsRUFBeUI7QUFDckIsVUFBTTZGLGVBQWUsR0FBRzlGLGVBQWUsQ0FBQ0MsR0FBRCxDQUFmLEdBQXVCQSxHQUFHLENBQUNwSixPQUEzQixHQUFxQ29KLEdBQTdEOztBQUNBLFFBQUksQ0FBQzZGLGVBQWUsQ0FBQzdGLEdBQXJCLEVBQTBCO0FBQ3RCLFlBQU0sSUFBSXFELEtBQUosQ0FBVyw4SUFBNkl5QyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsZUFBZixDQUFnQyxFQUF4TCxDQUFOO0FBQ0g7O0FBQ0RKLElBQUFBLFdBQVcsR0FBR0EsV0FBVyxJQUFJSSxlQUFlLENBQUNKLFdBQTdDO0FBQ0FHLElBQUFBLFNBQVMsR0FBR0MsZUFBZSxDQUFDN0YsR0FBNUI7O0FBQ0EsUUFBSSxDQUFDdUIsTUFBRCxJQUFXQSxNQUFNLEtBQUssTUFBMUIsRUFBa0M7QUFDOUIrRCxNQUFBQSxNQUFNLEdBQUdBLE1BQU0sSUFBSU8sZUFBZSxDQUFDUCxNQUFuQztBQUNBaEUsTUFBQUEsS0FBSyxHQUFHQSxLQUFLLElBQUl1RSxlQUFlLENBQUN2RSxLQUFqQzs7QUFDQSxVQUFJLENBQUN1RSxlQUFlLENBQUNQLE1BQWpCLElBQTJCLENBQUNPLGVBQWUsQ0FBQ3ZFLEtBQWhELEVBQXVEO0FBQ25ELGNBQU0sSUFBSStCLEtBQUosQ0FBVywySkFBMEp5QyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsZUFBZixDQUFnQyxFQUFyTSxDQUFOO0FBQ0g7QUFDSjtBQUNKOztBQUNEN0YsRUFBQUEsR0FBRyxHQUFHLE9BQU9BLEdBQVAsS0FBZSxRQUFmLEdBQTBCQSxHQUExQixHQUFnQzRGLFNBQXRDO0FBQ0EsUUFBTUksUUFBUSxHQUFHbEQsTUFBTSxDQUFDeEIsS0FBRCxDQUF2QjtBQUNBLFFBQU0yRSxTQUFTLEdBQUduRCxNQUFNLENBQUN3QyxNQUFELENBQXhCO0FBQ0EsUUFBTVksVUFBVSxHQUFHcEQsTUFBTSxDQUFDSixPQUFELENBQXpCO0FBQ0EsTUFBSXlELE1BQU0sR0FBRyxDQUFDakIsUUFBRCxLQUFjQyxPQUFPLEtBQUssTUFBWixJQUFzQixPQUFPQSxPQUFQLEtBQW1CLFdBQXZELENBQWI7O0FBQ0EsTUFBSW5GLEdBQUcsQ0FBQzRELFVBQUosQ0FBZSxPQUFmLEtBQTJCNUQsR0FBRyxDQUFDNEQsVUFBSixDQUFlLE9BQWYsQ0FBL0IsRUFBd0Q7QUFDcEQ7QUFDQW5CLElBQUFBLFdBQVcsR0FBRyxJQUFkO0FBQ0EwRCxJQUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNIOztBQUNELE1BQUksS0FBSixFQUErRCxFQUU5RDs7QUFDRCxZQUEyQztBQUN2QyxRQUFJLENBQUNuRyxHQUFMLEVBQVU7QUFDTixZQUFNLElBQUlxRCxLQUFKLENBQVcsMEhBQXlIeUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDckp6RSxRQUFBQSxLQURxSjtBQUVySmdFLFFBQUFBLE1BRnFKO0FBR3JKNUMsUUFBQUE7QUFIcUosT0FBZixDQUl2SSxFQUpHLENBQU47QUFLSDs7QUFDRCxRQUFJLENBQUM1QyxtQkFBbUIsQ0FBQ2pFLFFBQXBCLENBQTZCMEYsTUFBN0IsQ0FBTCxFQUEyQztBQUN2QyxZQUFNLElBQUk4QixLQUFKLENBQVcsbUJBQWtCckQsR0FBSSw4Q0FBNkN1QixNQUFPLHNCQUFxQnpCLG1CQUFtQixDQUFDMUssR0FBcEIsQ0FBd0JpUixNQUF4QixFQUFnQ3hELElBQWhDLENBQXFDLEdBQXJDLENBQTBDLEdBQXBKLENBQU47QUFDSDs7QUFDRCxRQUFJLE9BQU9tRCxRQUFQLEtBQW9CLFdBQXBCLElBQW1DTSxLQUFLLENBQUNOLFFBQUQsQ0FBeEMsSUFBc0QsT0FBT0MsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0ssS0FBSyxDQUFDTCxTQUFELENBQW5HLEVBQWdIO0FBQzVHLFlBQU0sSUFBSTVDLEtBQUosQ0FBVyxtQkFBa0JyRCxHQUFJLDZFQUFqQyxDQUFOO0FBQ0g7O0FBQ0QsUUFBSXVCLE1BQU0sS0FBSyxNQUFYLEtBQXNCRCxLQUFLLElBQUlnRSxNQUEvQixDQUFKLEVBQTRDO0FBQ3hDVixNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxtQkFBa0I3RSxHQUFJLDJGQUFwQztBQUNIOztBQUNELFFBQUksQ0FBQ1gsb0JBQW9CLENBQUN4RCxRQUFyQixDQUE4QnNKLE9BQTlCLENBQUwsRUFBNkM7QUFDekMsWUFBTSxJQUFJOUIsS0FBSixDQUFXLG1CQUFrQnJELEdBQUksK0NBQThDbUYsT0FBUSxzQkFBcUI5RixvQkFBb0IsQ0FBQ2pLLEdBQXJCLENBQXlCaVIsTUFBekIsRUFBaUN4RCxJQUFqQyxDQUFzQyxHQUF0QyxDQUEyQyxHQUF2SixDQUFOO0FBQ0g7O0FBQ0QsUUFBSXFDLFFBQVEsSUFBSUMsT0FBTyxLQUFLLE1BQTVCLEVBQW9DO0FBQ2hDLFlBQU0sSUFBSTlCLEtBQUosQ0FBVyxtQkFBa0JyRCxHQUFJLGlGQUFqQyxDQUFOO0FBQ0g7O0FBQ0QsUUFBSXlELFdBQVcsS0FBSyxNQUFwQixFQUE0QjtBQUN4QixVQUFJbEMsTUFBTSxLQUFLLE1BQVgsSUFBcUIsQ0FBQ3lFLFFBQVEsSUFBSSxDQUFiLEtBQW1CQyxTQUFTLElBQUksQ0FBaEMsSUFBcUMsSUFBOUQsRUFBb0U7QUFDaEVyQixRQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxtQkFBa0I3RSxHQUFJLHNHQUFwQztBQUNIOztBQUNELFVBQUksQ0FBQ3lGLFdBQUwsRUFBa0I7QUFDZCxjQUFNYyxjQUFjLEdBQUcsQ0FDbkIsTUFEbUIsRUFFbkIsS0FGbUIsRUFHbkIsTUFIbUIsQ0FBdkIsQ0FJRTtBQUpGO0FBTUEsY0FBTSxJQUFJbEQsS0FBSixDQUFXLG1CQUFrQnJELEdBQUk7QUFDdkQ7QUFDQTtBQUNBLG1HQUFtR3VHLGNBQWMsQ0FBQzFELElBQWYsQ0FBb0IsR0FBcEIsQ0FBeUI7QUFDNUg7QUFDQSxnRkFMc0IsQ0FBTjtBQU1IO0FBQ0o7O0FBQ0QsUUFBSSxTQUFTOEMsSUFBYixFQUFtQjtBQUNmZixNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxtQkFBa0I3RSxHQUFJLGlHQUFwQztBQUNIOztBQUNELFFBQUksV0FBVzJGLElBQWYsRUFBcUI7QUFDakJmLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLG1CQUFrQjdFLEdBQUksdUZBQXBDO0FBQ0g7O0FBQ0QsVUFBTXdHLElBQUksR0FBR3hFLElBQUksQ0FBQ3lFLEtBQUwsQ0FBV3pFLElBQUksQ0FBQzBFLE1BQUwsS0FBZ0IsSUFBM0IsSUFBbUMsR0FBaEQ7O0FBQ0EsUUFBSSxDQUFDakUsV0FBRCxJQUFnQixDQUFDbEMsTUFBTSxDQUFDO0FBQ3hCUCxNQUFBQSxHQUR3QjtBQUV4QnNCLE1BQUFBLEtBQUssRUFBRWtGLElBRmlCO0FBR3hCOUQsTUFBQUEsT0FBTyxFQUFFO0FBSGUsS0FBRCxDQUFOLENBSWxCN0csUUFKa0IsQ0FJVDJLLElBQUksQ0FBQ0csUUFBTCxFQUpTLENBQXJCLEVBSThCO0FBQzFCL0IsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWMsbUJBQWtCN0UsR0FBSSx5SEFBdkIsR0FBbUosK0VBQWhLO0FBQ0g7QUFDSjs7QUFDRCxRQUFNLENBQUM0RyxNQUFELEVBQVNDLGFBQVQsSUFBMEIsQ0FBQyxHQUFHeEosZ0JBQUosRUFBc0J5SixlQUF0QixDQUFzQztBQUNsRUMsSUFBQUEsVUFBVSxFQUFFM0IsWUFEc0Q7QUFFbEU0QixJQUFBQSxRQUFRLEVBQUUsQ0FBQ2I7QUFGdUQsR0FBdEMsQ0FBaEM7QUFJQSxRQUFNYyxTQUFTLEdBQUcsQ0FBQ2QsTUFBRCxJQUFXVSxhQUE3QjtBQUNBLE1BQUlLLFlBQUo7QUFDQSxNQUFJQyxVQUFKO0FBQ0EsTUFBSUMsUUFBSjtBQUNBLE1BQUlDLFFBQVEsR0FBRztBQUNYdkMsSUFBQUEsUUFBUSxFQUFFLFVBREM7QUFFWHdDLElBQUFBLEdBQUcsRUFBRSxDQUZNO0FBR1hDLElBQUFBLElBQUksRUFBRSxDQUhLO0FBSVhDLElBQUFBLE1BQU0sRUFBRSxDQUpHO0FBS1hDLElBQUFBLEtBQUssRUFBRSxDQUxJO0FBTVhDLElBQUFBLFNBQVMsRUFBRSxZQU5BO0FBT1hwTyxJQUFBQSxPQUFPLEVBQUUsQ0FQRTtBQVFYcU8sSUFBQUEsTUFBTSxFQUFFLE1BUkc7QUFTWEMsSUFBQUEsTUFBTSxFQUFFLE1BVEc7QUFVWHJPLElBQUFBLE9BQU8sRUFBRSxPQVZFO0FBV1grSCxJQUFBQSxLQUFLLEVBQUUsQ0FYSTtBQVlYZ0UsSUFBQUEsTUFBTSxFQUFFLENBWkc7QUFhWHVDLElBQUFBLFFBQVEsRUFBRSxNQWJDO0FBY1hDLElBQUFBLFFBQVEsRUFBRSxNQWRDO0FBZVhDLElBQUFBLFNBQVMsRUFBRSxNQWZBO0FBZ0JYQyxJQUFBQSxTQUFTLEVBQUUsTUFoQkE7QUFpQlh6QyxJQUFBQSxTQWpCVztBQWtCWEMsSUFBQUE7QUFsQlcsR0FBZjtBQW9CQSxRQUFNeUMsU0FBUyxHQUFHeEUsV0FBVyxLQUFLLE1BQWhCLEdBQXlCO0FBQ3ZDckYsSUFBQUEsTUFBTSxFQUFFLFlBRCtCO0FBRXZDK0YsSUFBQUEsY0FBYyxFQUFFb0IsU0FBUyxJQUFJLE9BRlU7QUFHdkNuQixJQUFBQSxlQUFlLEVBQUcsUUFBT3FCLFdBQVksSUFIRTtBQUl2Q3lDLElBQUFBLGtCQUFrQixFQUFFMUMsY0FBYyxJQUFJO0FBSkMsR0FBekIsR0FLZCxFQUxKOztBQU9BLE1BQUlqRSxNQUFNLEtBQUssTUFBZixFQUF1QjtBQUNuQjtBQUNBMkYsSUFBQUEsWUFBWSxHQUFHO0FBQ1gzTixNQUFBQSxPQUFPLEVBQUUsT0FERTtBQUVYNE8sTUFBQUEsUUFBUSxFQUFFLFFBRkM7QUFHWHJELE1BQUFBLFFBQVEsRUFBRSxVQUhDO0FBSVh3QyxNQUFBQSxHQUFHLEVBQUUsQ0FKTTtBQUtYQyxNQUFBQSxJQUFJLEVBQUUsQ0FMSztBQU1YQyxNQUFBQSxNQUFNLEVBQUUsQ0FORztBQU9YQyxNQUFBQSxLQUFLLEVBQUUsQ0FQSTtBQVFYQyxNQUFBQSxTQUFTLEVBQUUsWUFSQTtBQVNYRSxNQUFBQSxNQUFNLEVBQUU7QUFURyxLQUFmO0FBV0gsR0FiRCxNQWFPLElBQUksT0FBTzVCLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUMsT0FBT0MsU0FBUCxLQUFxQixXQUE1RCxFQUF5RTtBQUM1RTtBQUNBLFVBQU1tQyxRQUFRLEdBQUduQyxTQUFTLEdBQUdELFFBQTdCO0FBQ0EsVUFBTXFDLFVBQVUsR0FBRy9CLEtBQUssQ0FBQzhCLFFBQUQsQ0FBTCxHQUFrQixNQUFsQixHQUE0QixHQUFFQSxRQUFRLEdBQUcsR0FBSSxHQUFoRTs7QUFDQSxRQUFJN0csTUFBTSxLQUFLLFlBQWYsRUFBNkI7QUFDekI7QUFDQTJGLE1BQUFBLFlBQVksR0FBRztBQUNYM04sUUFBQUEsT0FBTyxFQUFFLE9BREU7QUFFWDRPLFFBQUFBLFFBQVEsRUFBRSxRQUZDO0FBR1hyRCxRQUFBQSxRQUFRLEVBQUUsVUFIQztBQUlYNEMsUUFBQUEsU0FBUyxFQUFFLFlBSkE7QUFLWEUsUUFBQUEsTUFBTSxFQUFFO0FBTEcsT0FBZjtBQU9BVCxNQUFBQSxVQUFVLEdBQUc7QUFDVDVOLFFBQUFBLE9BQU8sRUFBRSxPQURBO0FBRVRtTyxRQUFBQSxTQUFTLEVBQUUsWUFGRjtBQUdUVyxRQUFBQTtBQUhTLE9BQWI7QUFLSCxLQWRELE1BY08sSUFBSTlHLE1BQU0sS0FBSyxXQUFmLEVBQTRCO0FBQy9CO0FBQ0EyRixNQUFBQSxZQUFZLEdBQUc7QUFDWDNOLFFBQUFBLE9BQU8sRUFBRSxjQURFO0FBRVh1TyxRQUFBQSxRQUFRLEVBQUUsTUFGQztBQUdYSyxRQUFBQSxRQUFRLEVBQUUsUUFIQztBQUlYckQsUUFBQUEsUUFBUSxFQUFFLFVBSkM7QUFLWDRDLFFBQUFBLFNBQVMsRUFBRSxZQUxBO0FBTVhFLFFBQUFBLE1BQU0sRUFBRTtBQU5HLE9BQWY7QUFRQVQsTUFBQUEsVUFBVSxHQUFHO0FBQ1RPLFFBQUFBLFNBQVMsRUFBRSxZQURGO0FBRVRuTyxRQUFBQSxPQUFPLEVBQUUsT0FGQTtBQUdUdU8sUUFBQUEsUUFBUSxFQUFFO0FBSEQsT0FBYjtBQUtBVixNQUFBQSxRQUFRLEdBQUksZUFBY3BCLFFBQVMsYUFBWUMsU0FBVSxzREFBekQ7QUFDSCxLQWhCTSxNQWdCQSxJQUFJMUUsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDM0I7QUFDQTJGLE1BQUFBLFlBQVksR0FBRztBQUNYaUIsUUFBQUEsUUFBUSxFQUFFLFFBREM7QUFFWFQsUUFBQUEsU0FBUyxFQUFFLFlBRkE7QUFHWG5PLFFBQUFBLE9BQU8sRUFBRSxjQUhFO0FBSVh1TCxRQUFBQSxRQUFRLEVBQUUsVUFKQztBQUtYeEQsUUFBQUEsS0FBSyxFQUFFMEUsUUFMSTtBQU1YVixRQUFBQSxNQUFNLEVBQUVXO0FBTkcsT0FBZjtBQVFIO0FBQ0osR0E3Q00sTUE2Q0E7QUFDSDtBQUNBLGNBQTJDO0FBQ3ZDLFlBQU0sSUFBSTVDLEtBQUosQ0FBVyxtQkFBa0JyRCxHQUFJLHlFQUFqQyxDQUFOO0FBQ0g7QUFDSjs7QUFDRCxNQUFJc0ksYUFBYSxHQUFHO0FBQ2hCdEksSUFBQUEsR0FBRyxFQUFFLGdGQURXO0FBRWhCMkMsSUFBQUEsTUFBTSxFQUFFckQsU0FGUTtBQUdoQmtDLElBQUFBLEtBQUssRUFBRWxDO0FBSFMsR0FBcEI7O0FBS0EsTUFBSTJILFNBQUosRUFBZTtBQUNYcUIsSUFBQUEsYUFBYSxHQUFHOUYsZ0JBQWdCLENBQUM7QUFDN0J4QyxNQUFBQSxHQUQ2QjtBQUU3QnlDLE1BQUFBLFdBRjZCO0FBRzdCbEIsTUFBQUEsTUFINkI7QUFJN0JELE1BQUFBLEtBQUssRUFBRTBFLFFBSnNCO0FBSzdCdEQsTUFBQUEsT0FBTyxFQUFFd0QsVUFMb0I7QUFNN0IxRSxNQUFBQSxLQU42QjtBQU83QmpCLE1BQUFBO0FBUDZCLEtBQUQsQ0FBaEM7QUFTSDs7QUFDRCxNQUFJZ0ksU0FBUyxHQUFHdkksR0FBaEI7QUFDQSxTQUFPLGFBQWNqRCxNQUFNLENBQUNuRyxPQUFQLENBQWU0UixhQUFmLENBQTZCLEtBQTdCLEVBQW9DO0FBQ3JEdEUsSUFBQUEsS0FBSyxFQUFFZ0Q7QUFEOEMsR0FBcEMsRUFFbEJDLFVBQVUsR0FBRyxhQUFjcEssTUFBTSxDQUFDbkcsT0FBUCxDQUFlNFIsYUFBZixDQUE2QixLQUE3QixFQUFvQztBQUM5RHRFLElBQUFBLEtBQUssRUFBRWlEO0FBRHVELEdBQXBDLEVBRTNCQyxRQUFRLEdBQUcsYUFBY3JLLE1BQU0sQ0FBQ25HLE9BQVAsQ0FBZTRSLGFBQWYsQ0FBNkIsS0FBN0IsRUFBb0M7QUFDNUR0RSxJQUFBQSxLQUFLLEVBQUU7QUFDSDRELE1BQUFBLFFBQVEsRUFBRSxNQURQO0FBRUh2TyxNQUFBQSxPQUFPLEVBQUUsT0FGTjtBQUdIcU8sTUFBQUEsTUFBTSxFQUFFLENBSEw7QUFJSEQsTUFBQUEsTUFBTSxFQUFFLE1BSkw7QUFLSHJPLE1BQUFBLE9BQU8sRUFBRTtBQUxOLEtBRHFEO0FBUTVEcEQsSUFBQUEsR0FBRyxFQUFFLEVBUnVEO0FBUzVELG1CQUFlLElBVDZDO0FBVTVEOEosSUFBQUEsR0FBRyxFQUFHLDZCQUE0QixDQUFDLEdBQUc3QyxTQUFKLEVBQWVzTCxRQUFmLENBQXdCckIsUUFBeEIsQ0FBa0M7QUFWUixHQUFwQyxDQUFqQixHQVdOLElBYnlCLENBQWpCLEdBYUEsSUFmUSxFQWVGLGFBQWNySyxNQUFNLENBQUNuRyxPQUFQLENBQWU0UixhQUFmLENBQTZCLEtBQTdCLEVBQW9DOUwsTUFBTSxDQUFDZ00sTUFBUCxDQUFjLEVBQWQsRUFDbEUvQyxJQURrRSxFQUM1RDJDLGFBRDRELEVBQzdDO0FBQ3BCSyxJQUFBQSxRQUFRLEVBQUUsT0FEVTtBQUVwQixpQkFBYXBILE1BRk87QUFHcEI4RCxJQUFBQSxTQUFTLEVBQUVBLFNBSFM7QUFJcEJiLElBQUFBLEdBQUcsRUFBR2hCLEdBQUQsSUFBTztBQUNSb0QsTUFBQUEsTUFBTSxDQUFDcEQsR0FBRCxDQUFOO0FBQ0FELE1BQUFBLGFBQWEsQ0FBQ0MsR0FBRCxFQUFNK0UsU0FBTixFQUFpQmhILE1BQWpCLEVBQXlCa0MsV0FBekIsRUFBc0NDLGlCQUF0QyxDQUFiO0FBQ0gsS0FQbUI7QUFRcEJRLElBQUFBLEtBQUssRUFBRXRHLGFBQWEsQ0FBQyxFQUFELEVBQ2pCeUosUUFEaUIsRUFDUFksU0FETztBQVJBLEdBRDZDLENBQXBDLENBZlosRUEwQmhCLGFBQWNsTCxNQUFNLENBQUNuRyxPQUFQLENBQWU0UixhQUFmLENBQTZCLFVBQTdCLEVBQXlDLElBQXpDLEVBQStDLGFBQWN6TCxNQUFNLENBQUNuRyxPQUFQLENBQWU0UixhQUFmLENBQTZCLEtBQTdCLEVBQW9DOUwsTUFBTSxDQUFDZ00sTUFBUCxDQUFjLEVBQWQsRUFDakgvQyxJQURpSCxFQUMzR25ELGdCQUFnQixDQUFDO0FBQ3RCeEMsSUFBQUEsR0FEc0I7QUFFdEJ5QyxJQUFBQSxXQUZzQjtBQUd0QmxCLElBQUFBLE1BSHNCO0FBSXRCRCxJQUFBQSxLQUFLLEVBQUUwRSxRQUplO0FBS3RCdEQsSUFBQUEsT0FBTyxFQUFFd0QsVUFMYTtBQU10QjFFLElBQUFBLEtBTnNCO0FBT3RCakIsSUFBQUE7QUFQc0IsR0FBRCxDQUQyRixFQVNoSDtBQUNBb0ksSUFBQUEsUUFBUSxFQUFFLE9BRFY7QUFFQSxpQkFBYXBILE1BRmI7QUFHQTJDLElBQUFBLEtBQUssRUFBRW1ELFFBSFA7QUFJQWhDLElBQUFBLFNBQVMsRUFBRUEsU0FKWDtBQUtBRixJQUFBQSxPQUFPLEVBQUVBLE9BQU8sSUFBSTtBQUxwQixHQVRnSCxDQUFwQyxDQUE3RCxDQTFCRSxFQXlDZkQsUUFBUSxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQWNuSSxFQUFBQSxNQUFNLENBQUNuRyxPQUFQLENBQWU0UixhQUFmLENBQTZCdEwsS0FBSyxDQUFDdEcsT0FBbkMsRUFBNEMsSUFBNUMsRUFBa0QsYUFBY21HLE1BQU0sQ0FBQ25HLE9BQVAsQ0FBZTRSLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7QUFDL0cvTCxJQUFBQSxHQUFHLEVBQUUsWUFBWTZMLGFBQWEsQ0FBQ3RJLEdBQTFCLEdBQWdDc0ksYUFBYSxDQUFDM0YsTUFBOUMsR0FBdUQyRixhQUFhLENBQUM5RyxLQURxQztBQUUvR29ILElBQUFBLEdBQUcsRUFBRSxTQUYwRztBQUcvR0MsSUFBQUEsRUFBRSxFQUFFLE9BSDJHO0FBSS9HQyxJQUFBQSxJQUFJLEVBQUVSLGFBQWEsQ0FBQzNGLE1BQWQsR0FBdUJyRCxTQUF2QixHQUFtQ2dKLGFBQWEsQ0FBQ3RJLEdBSndEO0FBSy9HO0FBQ0ErSSxJQUFBQSxXQUFXLEVBQUVULGFBQWEsQ0FBQzNGLE1BTm9GO0FBTy9HO0FBQ0FxRyxJQUFBQSxVQUFVLEVBQUVWLGFBQWEsQ0FBQzlHO0FBUnFGLEdBQXJDLENBQWhFLENBTEEsR0FjUixJQXZEZSxDQUFyQjtBQXdESDs7QUFDRCxTQUFTeUgsWUFBVCxDQUFzQmpKLEdBQXRCLEVBQTJCO0FBQ3ZCLFNBQU9BLEdBQUcsQ0FBQyxDQUFELENBQUgsS0FBVyxHQUFYLEdBQWlCQSxHQUFHLENBQUNrSixLQUFKLENBQVUsQ0FBVixDQUFqQixHQUFnQ2xKLEdBQXZDO0FBQ0g7O0FBQ0QsU0FBU04sV0FBVCxDQUFxQjtBQUFFMEQsRUFBQUEsSUFBRjtBQUFTcEQsRUFBQUEsR0FBVDtBQUFlc0IsRUFBQUEsS0FBZjtBQUF1Qm9CLEVBQUFBO0FBQXZCLENBQXJCLEVBQXdEO0FBQ3BEO0FBQ0EsUUFBTXlHLEdBQUcsR0FBRyxJQUFJQyxHQUFKLENBQVMsR0FBRWhHLElBQUssR0FBRTZGLFlBQVksQ0FBQ2pKLEdBQUQsQ0FBTSxFQUFwQyxDQUFaO0FBQ0EsUUFBTXFKLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxZQUFuQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxNQUFYLEVBQW1CRixNQUFNLENBQUNsRyxHQUFQLENBQVcsTUFBWCxLQUFzQixRQUF6QztBQUNBa0csRUFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsS0FBWCxFQUFrQkYsTUFBTSxDQUFDbEcsR0FBUCxDQUFXLEtBQVgsS0FBcUIsS0FBdkM7QUFDQWtHLEVBQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLEdBQVgsRUFBZ0JGLE1BQU0sQ0FBQ2xHLEdBQVAsQ0FBVyxHQUFYLEtBQW1CN0IsS0FBSyxDQUFDcUYsUUFBTixFQUFuQzs7QUFDQSxNQUFJakUsT0FBSixFQUFhO0FBQ1QyRyxJQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxHQUFYLEVBQWdCN0csT0FBTyxDQUFDaUUsUUFBUixFQUFoQjtBQUNIOztBQUNELFNBQU93QyxHQUFHLENBQUNMLElBQVg7QUFDSDs7QUFDRCxTQUFTbEosWUFBVCxDQUFzQjtBQUFFd0QsRUFBQUEsSUFBRjtBQUFTcEQsRUFBQUEsR0FBVDtBQUFlc0IsRUFBQUE7QUFBZixDQUF0QixFQUErQztBQUMzQyxTQUFRLEdBQUU4QixJQUFLLEdBQUU2RixZQUFZLENBQUNqSixHQUFELENBQU0sWUFBV3NCLEtBQU0sRUFBcEQ7QUFDSDs7QUFDRCxTQUFTM0IsZ0JBQVQsQ0FBMEI7QUFBRXlELEVBQUFBLElBQUY7QUFBU3BELEVBQUFBLEdBQVQ7QUFBZXNCLEVBQUFBLEtBQWY7QUFBdUJvQixFQUFBQTtBQUF2QixDQUExQixFQUE2RDtBQUN6RDtBQUNBLFFBQU0yRyxNQUFNLEdBQUcsQ0FDWCxRQURXLEVBRVgsU0FGVyxFQUdYLE9BQU8vSCxLQUhJLEVBSVgsUUFBUW9CLE9BQU8sSUFBSSxNQUFuQixDQUpXLENBQWY7QUFNQSxNQUFJOEcsWUFBWSxHQUFHSCxNQUFNLENBQUN4RyxJQUFQLENBQVksR0FBWixJQUFtQixHQUF0QztBQUNBLFNBQVEsR0FBRU8sSUFBSyxHQUFFb0csWUFBYSxHQUFFUCxZQUFZLENBQUNqSixHQUFELENBQU0sRUFBbEQ7QUFDSDs7QUFDRCxTQUFTSCxZQUFULENBQXNCO0FBQUVHLEVBQUFBO0FBQUYsQ0FBdEIsRUFBZ0M7QUFDNUIsUUFBTSxJQUFJcUQsS0FBSixDQUFXLG1CQUFrQnJELEdBQUksNkJBQXZCLEdBQXVELHlFQUFqRSxDQUFOO0FBQ0g7O0FBQ0QsU0FBU1AsYUFBVCxDQUF1QjtBQUFFMkQsRUFBQUEsSUFBRjtBQUFTcEQsRUFBQUEsR0FBVDtBQUFlc0IsRUFBQUEsS0FBZjtBQUF1Qm9CLEVBQUFBO0FBQXZCLENBQXZCLEVBQTBEO0FBQ3RELFlBQTJDO0FBQ3ZDLFVBQU0rRyxhQUFhLEdBQUcsRUFBdEIsQ0FEdUMsQ0FFdkM7O0FBQ0EsUUFBSSxDQUFDekosR0FBTCxFQUFVeUosYUFBYSxDQUFDNUgsSUFBZCxDQUFtQixLQUFuQjtBQUNWLFFBQUksQ0FBQ1AsS0FBTCxFQUFZbUksYUFBYSxDQUFDNUgsSUFBZCxDQUFtQixPQUFuQjs7QUFDWixRQUFJNEgsYUFBYSxDQUFDdFUsTUFBZCxHQUF1QixDQUEzQixFQUE4QjtBQUMxQixZQUFNLElBQUlrTyxLQUFKLENBQVcsb0NBQW1Db0csYUFBYSxDQUFDNUcsSUFBZCxDQUFtQixJQUFuQixDQUF5QixnR0FBK0ZpRCxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUN2TC9GLFFBQUFBLEdBRHVMO0FBRXZMc0IsUUFBQUEsS0FGdUw7QUFHdkxvQixRQUFBQTtBQUh1TCxPQUFmLENBSXpLLEVBSkcsQ0FBTjtBQUtIOztBQUNELFFBQUkxQyxHQUFHLENBQUM0RCxVQUFKLENBQWUsSUFBZixDQUFKLEVBQTBCO0FBQ3RCLFlBQU0sSUFBSVAsS0FBSixDQUFXLHdCQUF1QnJELEdBQUksMEdBQXRDLENBQU47QUFDSDs7QUFDRCxRQUFJLENBQUNBLEdBQUcsQ0FBQzRELFVBQUosQ0FBZSxHQUFmLENBQUQsSUFBd0JoRCxhQUE1QixFQUEyQztBQUN2QyxVQUFJOEksU0FBSjs7QUFDQSxVQUFJO0FBQ0FBLFFBQUFBLFNBQVMsR0FBRyxJQUFJTixHQUFKLENBQVFwSixHQUFSLENBQVo7QUFDSCxPQUZELENBRUUsT0FBTzJKLEdBQVAsRUFBWTtBQUNWL0UsUUFBQUEsT0FBTyxDQUFDZ0YsS0FBUixDQUFjRCxHQUFkO0FBQ0EsY0FBTSxJQUFJdEcsS0FBSixDQUFXLHdCQUF1QnJELEdBQUksaUlBQXRDLENBQU47QUFDSDs7QUFDRCxVQUFJLFNBQW1DLENBQUNZLGFBQWEsQ0FBQy9FLFFBQWQsQ0FBdUI2TixTQUFTLENBQUNHLFFBQWpDLENBQXhDLEVBQW9GO0FBQ2hGLGNBQU0sSUFBSXhHLEtBQUosQ0FBVyxxQkFBb0JyRCxHQUFJLGtDQUFpQzBKLFNBQVMsQ0FBQ0csUUFBUywrREFBN0UsR0FBK0ksOEVBQXpKLENBQU47QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsU0FBUSxHQUFFekcsSUFBSyxRQUFPMEcsa0JBQWtCLENBQUM5SixHQUFELENBQU0sTUFBS3NCLEtBQU0sTUFBS29CLE9BQU8sSUFBSSxFQUFHLEVBQTVFO0FBQ0g7Ozs7Ozs7Ozs7O0FDaG1CWTs7QUFDYmhHLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELDJCQUFBLEdBQThCQSwwQkFBQSxHQUE2QixLQUFLLENBQWhFOztBQUNBLE1BQU1tTixtQkFBbUIsR0FBRyxPQUFPRSxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNGLG1CQUFwQyxJQUEyREUsSUFBSSxDQUFDRixtQkFBTCxDQUF5QkcsSUFBekIsQ0FBOEJDLE1BQTlCLENBQTNELElBQW9HLFVBQVNDLEVBQVQsRUFBYTtBQUN6SSxNQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFaO0FBQ0EsU0FBT0MsVUFBVSxDQUFDLFlBQVc7QUFDekJKLElBQUFBLEVBQUUsQ0FBQztBQUNDSyxNQUFBQSxVQUFVLEVBQUUsS0FEYjtBQUVDQyxNQUFBQSxhQUFhLEVBQUUsWUFBVztBQUN0QixlQUFPMUksSUFBSSxDQUFDMkksR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNTCxJQUFJLENBQUNDLEdBQUwsS0FBYUYsS0FBbkIsQ0FBWixDQUFQO0FBQ0g7QUFKRixLQUFELENBQUY7QUFNSCxHQVBnQixFQU9kLENBUGMsQ0FBakI7QUFRSCxDQVZEOztBQVdBek4sMkJBQUEsR0FBOEJtTixtQkFBOUI7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsT0FBT0MsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDRCxrQkFBcEMsSUFBMERDLElBQUksQ0FBQ0Qsa0JBQUwsQ0FBd0JFLElBQXhCLENBQTZCQyxNQUE3QixDQUExRCxJQUFrRyxVQUFTN1UsRUFBVCxFQUFhO0FBQ3RJLFNBQU9zVixZQUFZLENBQUN0VixFQUFELENBQW5CO0FBQ0gsQ0FGRDs7QUFHQXNILDBCQUFBLEdBQTZCb04sa0JBQTdCOzs7Ozs7Ozs7OztBQ3BCYTs7QUFDYnROLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELHVCQUFBLEdBQTBCa0ssZUFBMUI7O0FBQ0EsSUFBSS9KLE1BQU0sR0FBR0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFwQjs7QUFDQSxJQUFJNE4sb0JBQW9CLEdBQUc1TixtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLE1BQU02Tix1QkFBdUIsR0FBRyxPQUFPQyxvQkFBUCxLQUFnQyxXQUFoRTs7QUFDQSxTQUFTakUsZUFBVCxDQUF5QjtBQUFFQyxFQUFBQSxVQUFGO0FBQWVDLEVBQUFBO0FBQWYsQ0FBekIsRUFBcUQ7QUFDakQsUUFBTWdFLFVBQVUsR0FBR2hFLFFBQVEsSUFBSSxDQUFDOEQsdUJBQWhDO0FBQ0EsUUFBTUcsU0FBUyxHQUFHLENBQUMsR0FBR2xPLE1BQUosRUFBWXZDLE1BQVosRUFBbEI7QUFDQSxRQUFNLENBQUMwUSxPQUFELEVBQVVDLFVBQVYsSUFBd0IsQ0FBQyxHQUFHcE8sTUFBSixFQUFZcU8sUUFBWixDQUFxQixLQUFyQixDQUE5QjtBQUNBLFFBQU14RSxNQUFNLEdBQUcsQ0FBQyxHQUFHN0osTUFBSixFQUFZc08sV0FBWixDQUF5QkMsRUFBRCxJQUFNO0FBQ3pDLFFBQUlMLFNBQVMsQ0FBQ2hQLE9BQWQsRUFBdUI7QUFDbkJnUCxNQUFBQSxTQUFTLENBQUNoUCxPQUFWO0FBQ0FnUCxNQUFBQSxTQUFTLENBQUNoUCxPQUFWLEdBQW9CcUQsU0FBcEI7QUFDSDs7QUFDRCxRQUFJMEwsVUFBVSxJQUFJRSxPQUFsQixFQUEyQjs7QUFDM0IsUUFBSUksRUFBRSxJQUFJQSxFQUFFLENBQUNDLE9BQWIsRUFBc0I7QUFDbEJOLE1BQUFBLFNBQVMsQ0FBQ2hQLE9BQVYsR0FBb0J1UCxPQUFPLENBQUNGLEVBQUQsRUFBTXJFLFNBQUQsSUFBYUEsU0FBUyxJQUFJa0UsVUFBVSxDQUFDbEUsU0FBRCxDQUF6QyxFQUN6QjtBQUNFRixRQUFBQTtBQURGLE9BRHlCLENBQTNCO0FBSUg7QUFDSixHQVpjLEVBWVosQ0FDQ2lFLFVBREQsRUFFQ2pFLFVBRkQsRUFHQ21FLE9BSEQsQ0FaWSxDQUFmO0FBaUJBLEdBQUMsR0FBR25PLE1BQUosRUFBWWpCLFNBQVosQ0FBc0IsTUFBSTtBQUN0QixRQUFJLENBQUNnUCx1QkFBTCxFQUE4QjtBQUMxQixVQUFJLENBQUNJLE9BQUwsRUFBYztBQUNWLGNBQU1PLFlBQVksR0FBRyxDQUFDLEdBQUdaLG9CQUFKLEVBQTBCZCxtQkFBMUIsQ0FBOEMsTUFBSW9CLFVBQVUsQ0FBQyxJQUFELENBQTVELENBQXJCO0FBRUEsZUFBTyxNQUFJLENBQUMsR0FBR04sb0JBQUosRUFBMEJiLGtCQUExQixDQUE2Q3lCLFlBQTdDLENBQVg7QUFFSDtBQUNKO0FBQ0osR0FURCxFQVNHLENBQ0NQLE9BREQsQ0FUSDtBQVlBLFNBQU8sQ0FDSHRFLE1BREcsRUFFSHNFLE9BRkcsQ0FBUDtBQUlIOztBQUNELFNBQVNNLE9BQVQsQ0FBaUJFLE9BQWpCLEVBQTBCQyxRQUExQixFQUFvQ0MsT0FBcEMsRUFBNkM7QUFDekMsUUFBTTtBQUFFdFcsSUFBQUEsRUFBRjtBQUFPdVcsSUFBQUEsUUFBUDtBQUFrQkMsSUFBQUE7QUFBbEIsTUFBZ0NDLGNBQWMsQ0FBQ0gsT0FBRCxDQUFwRDtBQUNBRSxFQUFBQSxRQUFRLENBQUN2QyxHQUFULENBQWFtQyxPQUFiLEVBQXNCQyxRQUF0QjtBQUNBRSxFQUFBQSxRQUFRLENBQUNMLE9BQVQsQ0FBaUJFLE9BQWpCO0FBQ0EsU0FBTyxTQUFTVCxTQUFULEdBQXFCO0FBQ3hCYSxJQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JOLE9BQWhCO0FBQ0FHLElBQUFBLFFBQVEsQ0FBQ1osU0FBVCxDQUFtQlMsT0FBbkIsRUFGd0IsQ0FHeEI7O0FBQ0EsUUFBSUksUUFBUSxDQUFDaFIsSUFBVCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQitRLE1BQUFBLFFBQVEsQ0FBQ0ksVUFBVDtBQUNBQyxNQUFBQSxTQUFTLENBQUNGLE1BQVYsQ0FBaUIxVyxFQUFqQjtBQUNIO0FBQ0osR0FSRDtBQVNIOztBQUNELE1BQU00VyxTQUFTLEdBQUcsSUFBSTFNLEdBQUosRUFBbEI7O0FBQ0EsU0FBU3VNLGNBQVQsQ0FBd0JILE9BQXhCLEVBQWlDO0FBQzdCLFFBQU10VyxFQUFFLEdBQUdzVyxPQUFPLENBQUM3RSxVQUFSLElBQXNCLEVBQWpDO0FBQ0EsTUFBSW9GLFFBQVEsR0FBR0QsU0FBUyxDQUFDL0ksR0FBVixDQUFjN04sRUFBZCxDQUFmOztBQUNBLE1BQUk2VyxRQUFKLEVBQWM7QUFDVixXQUFPQSxRQUFQO0FBQ0g7O0FBQ0QsUUFBTUwsUUFBUSxHQUFHLElBQUl0TSxHQUFKLEVBQWpCO0FBQ0EsUUFBTXFNLFFBQVEsR0FBRyxJQUFJZCxvQkFBSixDQUEwQnFCLE9BQUQsSUFBVztBQUNqREEsSUFBQUEsT0FBTyxDQUFDN04sT0FBUixDQUFpQjhOLEtBQUQsSUFBUztBQUNyQixZQUFNVixRQUFRLEdBQUdHLFFBQVEsQ0FBQzNJLEdBQVQsQ0FBYWtKLEtBQUssQ0FBQ2pRLE1BQW5CLENBQWpCO0FBQ0EsWUFBTTZLLFNBQVMsR0FBR29GLEtBQUssQ0FBQ0MsY0FBTixJQUF3QkQsS0FBSyxDQUFDRSxpQkFBTixHQUEwQixDQUFwRTs7QUFDQSxVQUFJWixRQUFRLElBQUkxRSxTQUFoQixFQUEyQjtBQUN2QjBFLFFBQUFBLFFBQVEsQ0FBQzFFLFNBQUQsQ0FBUjtBQUNIO0FBQ0osS0FORDtBQU9ILEdBUmdCLEVBUWQyRSxPQVJjLENBQWpCO0FBU0FNLEVBQUFBLFNBQVMsQ0FBQzNDLEdBQVYsQ0FBY2pVLEVBQWQsRUFBa0I2VyxRQUFRLEdBQUc7QUFDekI3VyxJQUFBQSxFQUR5QjtBQUV6QnVXLElBQUFBLFFBRnlCO0FBR3pCQyxJQUFBQTtBQUh5QixHQUE3QjtBQUtBLFNBQU9LLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDbEZEOztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBLFNBQVNLLFFBQVQsQ0FBa0I7QUFBRXZVLEVBQUFBO0FBQUYsQ0FBbEIsRUFBZ0M7QUFDOUIsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFTLFVBQUksRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyxnREFBRDtBQUFNLFFBQUUsRUFBQyxHQUFUO0FBQWEsUUFBRSxFQUFDLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFNRSw4REFBQyxnRUFBRDtBQUFhLGNBQVEsRUFBRUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUEsa0JBREY7QUFVRDs7QUFFRHVVLFFBQVEsQ0FBQ0MsU0FBVCxHQUFxQixTQUFTQSxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUM1QyxzQkFDRSw4REFBQywwREFBRDtBQUFBLGNBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQ0FORDs7QUFRTyxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLG9DQUFELENBQXZCO0FBQ0EsUUFBTTdVLFFBQVEsR0FBRyxNQUFNNFUsR0FBRyxDQUFDRSxJQUFKLEVBQXZCO0FBRUEsU0FBTztBQUNMclYsSUFBQUEsS0FBSyxFQUFFO0FBQ0xPLE1BQUFBLFFBQVEsRUFBRUEsUUFBUSxJQUFJO0FBRGpCO0FBREYsR0FBUDtBQUtEO0FBRUQsaUVBQWV1VSxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBRU8sTUFBTXJaLGtCQUFrQixHQUFHNlosMkNBQUksQ0FBQyxLQUFELENBQS9CO0FBRUEsTUFBTWxZLFFBQVEsR0FBR2tZLDJDQUFJLENBQUMsRUFBRCxDQUFyQjtBQUVBLE1BQU0xVixhQUFhLEdBQUcwViwyQ0FBSSxDQUMvQixJQUQrQixFQUUvQixTQUFTeFYsU0FBVCxDQUFtQjJMLEdBQW5CLEVBQXdCb0csR0FBeEIsRUFBNkJsVSxPQUE3QixFQUFzQztBQUNwQyxRQUFNSixJQUFJLEdBQUdrTyxHQUFHLENBQUNyTyxRQUFELENBQWhCO0FBQ0EsUUFBTW1ZLEtBQUssR0FBR2hZLElBQUksQ0FBQ2lZLFNBQUwsQ0FBZUMsQ0FBQyxJQUFJQSxDQUFDLENBQUM3WCxFQUFGLEtBQVNELE9BQU8sQ0FBQ0MsRUFBckMsQ0FBZDs7QUFFQSxNQUFJMlgsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQjFELElBQUFBLEdBQUcsQ0FBQ3pVLFFBQUQsRUFBVyxDQUFDLEdBQUdHLElBQUosa0NBQWVJLE9BQWY7QUFBd0JTLE1BQUFBLFFBQVEsRUFBRTtBQUFsQyxPQUFYLENBQUg7QUFDRCxHQUZELE1BRU87QUFDTCxVQUFNc1gsTUFBTSxHQUFHLENBQUMsR0FBR25ZLElBQUosQ0FBZjtBQUNBbVksSUFBQUEsTUFBTSxDQUFDSCxLQUFELENBQU4sQ0FBY25YLFFBQWQsSUFBMEIsQ0FBMUI7QUFDQXlULElBQUFBLEdBQUcsQ0FBQ3pVLFFBQUQsRUFBV3NZLE1BQVgsQ0FBSDtBQUNEO0FBQ0YsQ0FiOEIsQ0FBMUI7QUFnQkEsTUFBTTVXLGtCQUFrQixHQUFHd1csMkNBQUksQ0FDcEMsSUFEb0MsRUFFcEMsU0FBU3RXLGNBQVQsQ0FBd0J5TSxHQUF4QixFQUE2Qm9HLEdBQTdCLEVBQWtDOVMsU0FBbEMsRUFBNkM7QUFDM0MsUUFBTXhCLElBQUksR0FBR2tPLEdBQUcsQ0FBQ3JPLFFBQUQsQ0FBaEI7QUFDQSxRQUFNbVksS0FBSyxHQUFHaFksSUFBSSxDQUFDaVksU0FBTCxDQUFlQyxDQUFDLElBQUlBLENBQUMsQ0FBQzdYLEVBQUYsS0FBU21CLFNBQTdCLENBQWQ7O0FBRUEsTUFBSXdXLEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7QUFDZCxRQUFJSSxJQUFJLEdBQUcsQ0FBQyxHQUFHcFksSUFBSixDQUFYO0FBQ0FvWSxJQUFBQSxJQUFJLENBQUNDLE1BQUwsQ0FBWUwsS0FBWixFQUFtQixDQUFuQjtBQUNBMUQsSUFBQUEsR0FBRyxDQUFDelUsUUFBRCxFQUFXdVksSUFBWCxDQUFIO0FBQ0Q7QUFDRixDQVhtQyxDQUEvQjtBQWNBLE1BQU10WSxhQUFhLEdBQUdpWSwyQ0FBSSxDQUFDN0osR0FBRyxJQUFJO0FBQ3ZDLFFBQU1vSyxHQUFHLEdBQUdwSyxHQUFHLENBQUNyTyxRQUFELENBQUgsQ0FBYzBZLE1BQWQsQ0FBcUIsQ0FBQ0MsR0FBRCxFQUFNcFksT0FBTixLQUFrQm9ZLEdBQUcsR0FBR0MsVUFBVSxDQUFDclksT0FBTyxDQUFDTyxLQUFULENBQXZELEVBQXdFLENBQXhFLENBQVo7QUFDQSxTQUFPMlgsR0FBRyxDQUFDSSxPQUFKLENBQVksQ0FBWixDQUFQO0FBQ0QsQ0FIZ0MsQ0FBMUI7QUFLQSxNQUFNdmEsa0JBQWtCLEdBQUc0WiwyQ0FBSSxDQUFDN0osR0FBRyxJQUFJQSxHQUFHLENBQUNyTyxRQUFELENBQUgsQ0FBY0ssTUFBdEIsQ0FBL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q1AsaUVBQWU7QUFDYnVGLEVBQUFBLFVBQVUsRUFBRSxPQURDO0FBRWJyRCxFQUFBQSxPQUFPLEVBQUUsU0FGSTtBQUdiaEIsRUFBQUEsT0FBTyxFQUFFLFNBSEk7QUFJYmtDLEVBQUFBLE9BQU8sRUFBRSxTQUpJO0FBS2JxVixFQUFBQSxPQUFPLEVBQUUsU0FMSTtBQU1iMVQsRUFBQUEsT0FBTyxFQUFFLFNBTkk7QUFPYjJULEVBQUFBLE9BQU8sRUFBRSxTQVBJO0FBUWJDLEVBQUFBLFVBQVUsRUFBRSxTQVJDO0FBU2JDLEVBQUFBLFVBQVUsRUFBRSxTQVRDO0FBVWJ6VixFQUFBQSxTQUFTLEVBQUU7QUFWRSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQSxpRUFBZTtBQUNicUMsRUFBQUEsRUFBRSxFQUFFLHdDQURTO0FBRWI5QixFQUFBQSxFQUFFLEVBQUU7QUFGUyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZTtBQUNibVYsRUFBQUEsRUFBRSxFQUFFLEdBRFM7QUFFYkMsRUFBQUEsRUFBRSxFQUFFLEtBRlM7QUFHYkMsRUFBQUEsRUFBRSxFQUFFLEtBSFM7QUFJYnpaLEVBQUFBLEVBQUUsRUFBRSxNQUpTO0FBS2I2QixFQUFBQSxFQUFFLEVBQUUsTUFMUztBQU1iNUIsRUFBQUEsRUFBRSxFQUFFLE1BTlM7QUFPYm9FLEVBQUFBLEVBQUUsRUFBRSxNQVBTO0FBUWJxVixFQUFBQSxFQUFFLEVBQUUsTUFSUztBQVNiQyxFQUFBQSxFQUFFLEVBQUUsTUFUUztBQVViQyxFQUFBQSxFQUFFLEVBQUUsTUFWUztBQVdiQyxFQUFBQSxHQUFHLEVBQUU7QUFYUSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxNQUFNblQsVUFBVSxHQUFHO0FBQ3hCdkUsRUFBQUEsT0FBTyxFQUFFLHdCQURlO0FBRXhCMlgsRUFBQUEsSUFBSSxFQUFFLDZCQUZrQjtBQUd4QkMsRUFBQUEsS0FBSyxFQUFFO0FBSGlCLENBQW5CO0FBTUEsTUFBTXBULFFBQVEsR0FBRztBQUN0QjhTLEVBQUFBLEVBQUUsRUFBRSxNQURrQjtBQUV0QnpaLEVBQUFBLEVBQUUsRUFBRSxNQUZrQjtBQUd0QjZCLEVBQUFBLEVBQUUsRUFBRSxNQUhrQjtBQUl0QjVCLEVBQUFBLEVBQUUsRUFBRSxNQUprQjtBQUt0Qm9FLEVBQUFBLEVBQUUsRUFBRTtBQUxrQixDQUFqQjtBQVFBLE1BQU04QixXQUFXLEdBQUc7QUFDekI2VCxFQUFBQSxFQUFFLEVBQUU7QUFEcUIsQ0FBcEI7QUFJQSxNQUFNcFQsVUFBVSxHQUFHO0FBQ3hCNUcsRUFBQUEsRUFBRSxFQUFFLE1BRG9CO0FBRXhCNkIsRUFBQUEsRUFBRSxFQUFFLE1BRm9CO0FBR3hCNUIsRUFBQUEsRUFBRSxFQUFFLE1BSG9CO0FBSXhCb0UsRUFBQUEsRUFBRSxFQUFFO0FBSm9CLENBQW5COzs7Ozs7Ozs7O0FDbEJQLDJHQUErQzs7Ozs7Ozs7Ozs7O0FDQS9DOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAvY2FydC9DYXJ0QnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwL2NhcnQvTWluaUNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAvY2FydC9NaW5pQ2FydEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC9jYXJ0L01pbmlDYXJ0SW5mby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC9jYXJ0L01pbmlDYXJ0UHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC9jYXJ0L01pbmlDYXJ0UHJvZHVjdEltYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwL2NhcnQvTWluaUNhcnRSZW1vdmVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAvY2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC9wcm9kdWN0L1Byb2R1Y3RDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwL3Byb2R1Y3QvUHJvZHVjdENhcmRBZGRUb0NhcnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAvcHJvZHVjdC9Qcm9kdWN0Q2FyZERldGFpbFRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hcHAvcHJvZHVjdC9Qcm9kdWN0Q2FyZEltYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwL3Byb2R1Y3QvUHJvZHVjdENhcmRQcmljZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FwcC9wcm9kdWN0L1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBwL3Byb2R1Y3QvUmV2aWV3U3RhcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTWVudUJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9TaG9wTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvQ2xvc2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9EaXZpZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvRHJhd2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL1Jvd0JldHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9UZXh0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS91c2VDbG9zZU9uQ2xpY2tPdXRzaWRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdWkvdXNlRXNjVG9DbG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vdG9rZW5zL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi90b2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdG9rZW5zL3NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi90b2tlbnMvc3BhY2luZy5qcyIsIndlYnBhY2s6Ly8vLi90b2tlbnMvdHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqb3RhaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpvdGFpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ3JpZC1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VBdG9tVmFsdWUsIHVzZVVwZGF0ZUF0b20gfSBmcm9tICdqb3RhaS91dGlscydcclxuXHJcbmltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5pbXBvcnQgeyBpc01pbmlDYXJ0T3BlbkF0b20sIGNvdW50Q2FydEl0ZW1zQXRvbSB9IGZyb20gJy9zdG9yZSdcclxuXHJcbmZ1bmN0aW9uIENhcnRCdXR0b24oKSB7XHJcbiAgY29uc3QgY291bnQgPSB1c2VBdG9tVmFsdWUoY291bnRDYXJ0SXRlbXNBdG9tKVxyXG4gIGNvbnN0IHNldElzT3BlbiA9IHVzZVVwZGF0ZUF0b20oaXNNaW5pQ2FydE9wZW5BdG9tKVxyXG5cclxuICBjb25zdCBvbkNsaWNrID0gZSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRJc09wZW4odHJ1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgPFRleHQgc2l6ZT1cIjJcIiB3ZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAge2NvdW50fVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17YC9TVkdzLyR7Y291bnQgPT09IDAgPyBcImNhcnRfZW1wdHlcIiA6IFwiY2FydF93aXRoX2l0ZW1zXCJ9LnN2Z2B9XHJcbiAgICAgICAgYWx0PVwiQ2FydFwiXHJcbiAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0QnV0dG9uXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQXRvbSB9IGZyb20gJ2pvdGFpJ1xyXG5cclxuaW1wb3J0IHsgQm94LCBEcmF3ZXIgfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuaW1wb3J0IHsgaXNNaW5pQ2FydE9wZW5BdG9tIH0gZnJvbSAnL3N0b3JlJ1xyXG5cclxuaW1wb3J0IE1pbmlDYXJ0SGVhZGVyIGZyb20gJy4vTWluaUNhcnRIZWFkZXInXHJcbmltcG9ydCBNaW5pQ2FydEluZm8gZnJvbSAnLi9NaW5pQ2FydEluZm8nXHJcblxyXG5mdW5jdGlvbiBNaW5pQ2FydCgpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlQXRvbShpc01pbmlDYXJ0T3BlbkF0b20pXHJcbiAgXHJcbiAgY29uc3QgdG9nZ2xlTWluaUNhcnQgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3BlbilcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXIgb3Blbj17aXNPcGVufSBvbkNsb3NlPXt0b2dnbGVNaW5pQ2FydH0+ICAgICAgXHJcbiAgICAgIDxNaW5pQ2FydEhlYWRlciB0b2dnbGU9e3RvZ2dsZU1pbmlDYXJ0fSAvPlxyXG4gICAgICA8Qm94IGZ1bGwgcGFkZGluZz1cIjRcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICA8TWluaUNhcnRJbmZvIC8+XHJcbiAgICAgIDwvQm94PiAgICAgICAgICBcclxuICAgIDwvRHJhd2VyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluaUNhcnRcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgdXNlQXRvbVZhbHVlIH0gZnJvbSAnam90YWkvdXRpbHMnXHJcblxyXG5pbXBvcnQgeyBNZW51QmFyIH0gZnJvbSAnL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBCb3gsIENsb3NlQnV0dG9uLCBUZXh0IH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcbmltcG9ydCB7IGNvdW50Q2FydEl0ZW1zQXRvbSB9IGZyb20gJy9zdG9yZSdcclxuaW1wb3J0IHsgc3BhY2luZyB9IGZyb20gJy90b2tlbnMnXHJcblxyXG5mdW5jdGlvbiBNaW5pQ2FydEhlYWRlcih7IHRvZ2dsZSB9KSB7XHJcbiAgY29uc3QgY291bnQgPSB1c2VBdG9tVmFsdWUoY291bnRDYXJ0SXRlbXNBdG9tKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlciBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICA8VGV4dCBhcz1cImgzXCIgc2l6ZT1cIjRcIiB3ZWlnaHQ9XCJib2xkXCI+WW91ciBDYXJ0PC9UZXh0PlxyXG4gICAgICA8Qm94IGp1c3RpZnk9XCJmbGV4LWVuZFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICA8VG90YWxJdGVtcyBzaXplPVwiMlwiPntjb3VudH0ge2NvdW50ID09PSAxID8gJ2l0ZW0nIDogJ2l0ZW1zJ308L1RvdGFsSXRlbXM+XHJcbiAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZChNZW51QmFyKWBcclxuICBwYWRkaW5nLWxlZnQ6ICR7c3BhY2luZy50M307XHJcbiAgcGFkZGluZy1yaWdodDogJHtzcGFjaW5nLnQzfTtcclxuICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmcudDV9OyAgXHJcbmBcclxuXHJcbmNvbnN0IFRvdGFsSXRlbXMgPSBzdHlsZWQoVGV4dClgXHJcbiAgbWFyZ2luLXJpZ2h0OiAke3NwYWNpbmcudDN9O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW5pQ2FydEhlYWRlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUF0b21WYWx1ZSB9IGZyb20gJ2pvdGFpL3V0aWxzJ1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBSb3dCZXR3ZWVuLCBUZXh0IH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcbmltcG9ydCB7IGNhcnRBdG9tLCB0b3RhbENhcnRBdG9tIH0gZnJvbSAnL3N0b3JlJ1xyXG5cclxuaW1wb3J0IE1pbmlDYXJ0UHJvZHVjdCBmcm9tICcuL01pbmlDYXJ0UHJvZHVjdCdcclxuXHJcbmZ1bmN0aW9uIE1pbmlDYXJ0SW5mbygpIHtcclxuICBjb25zdCBjYXJ0ID0gdXNlQXRvbVZhbHVlKGNhcnRBdG9tKVxyXG4gIGNvbnN0IHRvdGFsQ2FydCA9IHVzZUF0b21WYWx1ZSh0b3RhbENhcnRBdG9tKVxyXG5cclxuICBpZiAoY2FydC5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiA8VGV4dCBhbGlnbj1cImNlbnRlclwiPllvdXIgY2FydCBpcyBlbXB0eS48L1RleHQ+XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2NhcnQubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgIDxNaW5pQ2FydFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICApKX1cclxuICAgICAgPFJvd0JldHdlZW4+XHJcbiAgICAgICAgPFRleHQgc2l6ZT1cIjNcIj5TdWJ0b3RhbDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBzaXplPVwiNFwiIHdlaWdodD1cImJvbGRcIiBhbGlnbj1cInJpZ2h0XCI+e3RvdGFsQ2FydH08L1RleHQ+XHJcbiAgICAgIDwvUm93QmV0d2Vlbj5cclxuICAgICAgPEJ1dHRvbiBmdWxsPkdvIHRvIGNoZWNrb3V0PC9CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbmlDYXJ0SW5mbyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJveCwgRGl2aWRlciwgUm93QmV0d2VlbiwgVGV4dCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5cclxuaW1wb3J0IE1pbmlDYXJ0UHJvZHVjdEltYWdlIGZyb20gJy4vTWluaUNhcnRQcm9kdWN0SW1hZ2UnXHJcbmltcG9ydCBNaW5pQ2FydFJlbW92ZUJ1dHRvbiBmcm9tICcuL01pbmlDYXJ0UmVtb3ZlQnV0dG9uJ1xyXG5cclxuZnVuY3Rpb24gTWluaUNhcnRQcm9kdWN0KHsgcHJvZHVjdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPE1pbmlDYXJ0UHJvZHVjdEltYWdlIGltYWdlPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3Quc2hvcnROYW1lfSAvPlxyXG4gICAgICAgIDxCb3ggZGlyZWN0aW9uPVwiY29sdW1uXCIgZnVsbD5cclxuICAgICAgICAgIDxSb3dCZXR3ZWVuPlxyXG4gICAgICAgICAgICA8VGV4dCB3ZWlnaHQ9XCJib2xkXCI+e3Byb2R1Y3Quc2hvcnROYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgPE1pbmlDYXJ0UmVtb3ZlQnV0dG9uIHByb2R1Y3RJZD17cHJvZHVjdC5pZH0gLz5cclxuICAgICAgICAgIDwvUm93QmV0d2Vlbj5cclxuICAgICAgICAgIDxSb3dCZXR3ZWVuPlxyXG4gICAgICAgICAgICA8RGV0YWlsVGV4dD5QcmljZTwvRGV0YWlsVGV4dD5cclxuICAgICAgICAgICAgPERldGFpbFRleHQ+e3Byb2R1Y3QucHJpY2V9PC9EZXRhaWxUZXh0PlxyXG4gICAgICAgICAgPC9Sb3dCZXR3ZWVuPlxyXG4gICAgICAgICAgPFJvd0JldHdlZW4+XHJcbiAgICAgICAgICAgIDxEZXRhaWxUZXh0PlBhY2thZ2U8L0RldGFpbFRleHQ+XHJcbiAgICAgICAgICAgIDxEZXRhaWxUZXh0Pntwcm9kdWN0LnBhY2thZ2VDb250ZW50fTwvRGV0YWlsVGV4dD5cclxuICAgICAgICAgIDwvUm93QmV0d2Vlbj5cclxuICAgICAgICAgIDxSb3dCZXR3ZWVuPlxyXG4gICAgICAgICAgICA8RGV0YWlsVGV4dD5RdWFudGl0eTwvRGV0YWlsVGV4dD5cclxuICAgICAgICAgICAgPERldGFpbFRleHQ+e3Byb2R1Y3QucXVhbnRpdHl9PC9EZXRhaWxUZXh0PlxyXG4gICAgICAgICAgPC9Sb3dCZXR3ZWVuPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gRGV0YWlsVGV4dCh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPFRleHQgc2l6ZT1cIjNcIiBjb2xvcj1cImdyZXk1MDBcIj57Y2hpbGRyZW59PC9UZXh0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW5pQ2FydFByb2R1Y3RcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuaW1wb3J0IHsgY29sb3JzLCBzcGFjaW5nIH0gZnJvbSAnL3Rva2VucydcclxuXHJcbmZ1bmN0aW9uIE1pbmlDYXJ0UHJvZHVjdEltYWdlKHsgaW1hZ2UsIGFsdCA9ICdQaG90bycsIHRpdGxlID0gYWx0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjZW50ZXJlZD5cclxuICAgICAgPFN0eWxlZEltZyBzcmM9e2ltYWdlfSBhbHQ9e2FsdH0gdGl0bGU9e3RpdGxlfSB3aWR0aD1cIjY0XCIgaGVpZ2h0PVwiNjRcIiAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQm94KWBcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgbWF4LXdpZHRoOiA2NHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdyZXkyMDB9O1xyXG4gIG1hcmdpbi1yaWdodDogJHtzcGFjaW5nLnQ0fTtcclxuYFxyXG5cclxuY29uc3QgU3R5bGVkSW1nID0gc3R5bGVkKEltYWdlKWBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbmlDYXJ0UHJvZHVjdEltYWdlXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5pbXBvcnQgeyB1c2VVcGRhdGVBdG9tIH0gZnJvbSAnam90YWkvdXRpbHMnXHJcblxyXG5pbXBvcnQgeyByZW1vdmVGcm9tQ2FydEF0b20gfSBmcm9tICcvc3RvcmUnXHJcblxyXG5mdW5jdGlvbiBNaW5pQ2FydFJlbW92ZUJ1dHRvbih7IHByb2R1Y3RJZCB9KSB7XHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSB1c2VVcGRhdGVBdG9tKHJlbW92ZUZyb21DYXJ0QXRvbSlcclxuXHJcbiAgY29uc3Qgb25DbGljayA9IGUgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgcmVtb3ZlRnJvbUNhcnQocHJvZHVjdElkKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgcm9sZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPVwiL1NWR3MvZGVsZXRlLnN2Z1wiIGFsdD1cIkRlbGV0ZVwiIHRpdGxlPVwiUmVtb3ZlIGZyb20gY2FydFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyMFwiIC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zcGFuYFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWluaUNhcnRSZW1vdmVCdXR0b25cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJ0QnV0dG9uIH0gZnJvbSAnLi9DYXJ0QnV0dG9uJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pbmlDYXJ0IH0gZnJvbSAnLi9NaW5pQ2FydCdcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IHsgSGlkZGVuIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBCb3gsIFJvd0JldHdlZW4sIFRleHQgfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuaW1wb3J0IHsgY29sb3JzLCBzcGFjaW5nIH0gZnJvbSAnL3Rva2VucydcclxuXHJcbmltcG9ydCBBZGRUb0NhcnRCdXR0b24gZnJvbSAnLi9Qcm9kdWN0Q2FyZEFkZFRvQ2FydEJ1dHRvbidcclxuaW1wb3J0IERldGFpbFRleHQgZnJvbSAnLi9Qcm9kdWN0Q2FyZERldGFpbFRleHQnXHJcbmltcG9ydCBDYXJkSW1hZ2UgZnJvbSAnLi9Qcm9kdWN0Q2FyZEltYWdlJ1xyXG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9Qcm9kdWN0Q2FyZFByaWNlJ1xyXG5pbXBvcnQgUmV2aWV3U3RhcnMgZnJvbSAnLi9SZXZpZXdTdGFycydcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgcHJvZHVjdCB9KSB7XHJcbiAgaWYgKCFwcm9kdWN0KSByZXR1cm4gbnVsbFxyXG5cclxuICBjb25zdCB7IHNob3J0TmFtZSwgaW1hZ2UsIHByaWNlLCBvcmlnaW5hbFByaWNlLCBwYWNrYWdlQ29udGVudCwgcmV2aWV3IH0gPSBwcm9kdWN0XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNlbnRlcmVkPlxyXG4gICAgICA8Q2FyZEltYWdlIGltYWdlPXtpbWFnZX0gYWx0PXtzaG9ydE5hbWV9IC8+XHJcbiAgICAgIDxCb3ggZGlyZWN0aW9uPVwiY29sdW1uXCIgZnVsbCBwYWRkaW5nPVwiNFwiPlxyXG4gICAgICAgIDxUZXh0IGFzPVwiaDRcIiBzaXplPVwiNVwiIG1iPVwiM1wiPntzaG9ydE5hbWV9PC9UZXh0PlxyXG4gICAgICAgIDxSb3dCZXR3ZWVuPlxyXG4gICAgICAgICAgPEhpZGRlbiB4cz5cclxuICAgICAgICAgICAgPERldGFpbFRleHQ+UHJpY2U8L0RldGFpbFRleHQ+XHJcbiAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgIDxQcmljZSBwcmljZT17cHJpY2V9IG9yaWdpbmFsUHJpY2U9e29yaWdpbmFsUHJpY2V9IC8+XHJcbiAgICAgICAgPC9Sb3dCZXR3ZWVuPlxyXG4gICAgICAgIDxSb3dCZXR3ZWVuPlxyXG4gICAgICAgICAgPERldGFpbFRleHQ+UGFja2FnZTwvRGV0YWlsVGV4dD5cclxuICAgICAgICAgIDxEZXRhaWxUZXh0PntwYWNrYWdlQ29udGVudH08L0RldGFpbFRleHQ+XHJcbiAgICAgICAgPC9Sb3dCZXR3ZWVuPlxyXG4gICAgICAgIDxSb3dCZXR3ZWVuPlxyXG4gICAgICAgICAgPERldGFpbFRleHQ+UmV2aWV3PC9EZXRhaWxUZXh0PlxyXG4gICAgICAgICAgPFJldmlld1N0YXJzIHJldmlldz17cmV2aWV3fSAvPlxyXG4gICAgICAgIDwvUm93QmV0d2Vlbj5cclxuICAgICAgICA8QWRkVG9DYXJ0QnV0dG9uIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+ICAgICAgICBcclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxyXG4gIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZy50NH07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ3JleTEwMH07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlVXBkYXRlQXRvbSB9IGZyb20gJ2pvdGFpL3V0aWxzJ1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcbmltcG9ydCB7IGFkZFRvQ2FydEF0b20sIGlzTWluaUNhcnRPcGVuQXRvbSB9IGZyb20gJy9zdG9yZSdcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkQWRkVG9DYXJ0QnV0dG9uKHsgcHJvZHVjdCB9KSB7XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gdXNlVXBkYXRlQXRvbShhZGRUb0NhcnRBdG9tKVxyXG4gIGNvbnN0IHNldElzT3BlbiA9IHVzZVVwZGF0ZUF0b20oaXNNaW5pQ2FydE9wZW5BdG9tKVxyXG5cclxuICBjb25zdCBvbkNsaWNrID0gZSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRJc09wZW4odHJ1ZSlcclxuICAgIGFkZFRvQ2FydChwcm9kdWN0KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja30+QWRkIHByb2R1Y3Q8L0J1dHRvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkQWRkVG9DYXJ0QnV0dG9uXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkRGV0YWlsVGV4dCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxUZXh0IHNpemU9XCIzXCIgY29sb3I9XCJncmV5NTAwXCIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9UZXh0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZERldGFpbFRleHRcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkSW1hZ2UoeyBpbWFnZSwgYWx0ID0gJ1Bob3RvJyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2VudGVyZWQ+XHJcbiAgICAgIDxTdHlsZWRJbWcgc3JjPXtpbWFnZX0gYWx0PXthbHR9IHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiNDgwXCIgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveClgXHJcbiAgaGVpZ2h0OiAxODVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTQ4cHg7XHJcbiAgbWF4LXdpZHRoOiAxNDhweDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU3R5bGVkSW1nID0gc3R5bGVkKEltYWdlKWBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkSW1hZ2VcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBIaWRkZW4gfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSdcclxuXHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuaW1wb3J0IHsgc3BhY2luZyB9IGZyb20gJy90b2tlbnMnXHJcblxyXG5pbXBvcnQgRGV0YWlsVGV4dCBmcm9tICcuL1Byb2R1Y3RDYXJkRGV0YWlsVGV4dCdcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXJkUHJpY2UoeyBwcmljZSwgb3JpZ2luYWxQcmljZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHshIW9yaWdpbmFsUHJpY2UgJiYgKFxyXG4gICAgICAgIDxIaWRkZW4geHM+XHJcbiAgICAgICAgICA8RGV0YWlsVGV4dFxyXG4gICAgICAgICAgICBsaW5lVGhyb3VnaFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogc3BhY2luZy50MyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7b3JpZ2luYWxQcmljZX3QhFxyXG4gICAgICAgICAgPC9EZXRhaWxUZXh0PlxyXG4gICAgICAgIDwvSGlkZGVuPiAgICAgICAgXHJcbiAgICAgICl9XHJcbiAgICAgIDxUZXh0IGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCIzXCIgd2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgIHtwcmljZX3QhFxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkUHJpY2VcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xyXG5cclxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4vUHJvZHVjdENhcmQnXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCh7IHByb2R1Y3RzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdz5cclxuICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9IGxnPXs2fSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgPFByb2R1Y3RDYXJkIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Sb3c+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcvdG9rZW5zJ1xyXG5cclxuY29uc3Qgc3RhcnMgPSBbMSwyLDMsNCw1XVxyXG5cclxuZnVuY3Rpb24gUmV2aWV3U3RhcnMoeyByZXZpZXcgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICB7c3RhcnMubWFwKGN1cnJlbnRTdGFyID0+IChcclxuICAgICAgICA8U3RhclN2Z1xyXG4gICAgICAgICAga2V5PXtjdXJyZW50U3Rhcn1cclxuICAgICAgICAgIGlzRmlsbGVkPXtyZXZpZXcgPiAwICYmIGN1cnJlbnRTdGFyIDw9IHJldmlld31cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gU3RhclN2Zyh7IGlzRmlsbGVkID0gZmFsc2UgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTEyIDE4bC01LjI2IDIuNzY1YTEgMSAwIDAxLTEuNDUtMS4wNTRsMS4wMDQtNS44NTctNC4yNTYtNC4xNDhBMSAxIDAgMDEyLjU5MiA4bDUuODgxLS44NTQgMi42My01LjMyOWExIDEgMCAwMTEuNzk0IDBsMi42MyA1LjMyOSA1Ljg4Ljg1NGExIDEgMCAwMS41NTUgMS43MDZsLTQuMjU2IDQuMTQ4IDEuMDA1IDUuODU3YTEgMSAwIDAxLTEuNDUxIDEuMDU0TDEyIDE4elwiXHJcbiAgICAgICAgICBmaWxsPXtpc0ZpbGxlZCA/IGNvbG9ycy55ZWxsb3c1MDAgOiBjb2xvcnMuZ3JleTMwMH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld1N0YXJzXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgQ2FydEJ1dHRvbiB9IGZyb20gJy9jb21wb25lbnRzL2FwcC9jYXJ0J1xyXG5cclxuaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJ1xyXG5pbXBvcnQgTWVudUJhciBmcm9tICcuL01lbnVCYXInXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51QmFyPlxyXG4gICAgICA8SW5uZXJDb250YWluZXI+XHJcbiAgICAgICAgPExvZ29Db250YWluZXI+XHJcbiAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgIDwvTG9nb0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPENhcnRCdXR0b24gLz5cclxuICAgICAgPC9Jbm5lckNvbnRhaW5lcj5cclxuICAgIDwvTWVudUJhcj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IElubmVyQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmBcclxuXHJcbmNvbnN0IExvZ29Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5mdW5jdGlvbiBMb2dvKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2Ugc3JjPVwiL1NWR3MvbG9nby5zdmdcIiBhbHQ9XCJCYXJreW5cIiB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjMyXCIgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ29cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcvY29tcG9uZW50cy91aSdcclxuaW1wb3J0IHsgc2hhZG93LCBzcGFjaW5nIH0gZnJvbSAnL3Rva2VucydcclxuXHJcbmNvbnN0IE1lbnVCYXIgPSBzdHlsZWQoQm94KWBcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAgXHJcbiAgYm94LXNoYWRvdzogJHtzaGFkb3cubWR9O1xyXG4gIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZy50Nn07XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGFsaWduLWl0ZW1zOiAnY2VudGVyJztcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUJhciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBNaW5pQ2FydCB9IGZyb20gJy9jb21wb25lbnRzL2FwcC9jYXJ0J1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcclxuXHJcbmZ1bmN0aW9uIFNob3BMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8TWluaUNhcnQgLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcExheW91dFxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIE1lbnVCYXIgfSBmcm9tICcuL01lbnVCYXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2hvcExheW91dCB9IGZyb20gJy4vU2hvcExheW91dCdcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXHJcblxyXG5pbXBvcnQgeyBzcGFjaW5nIH0gZnJvbSAnL3Rva2VucydcclxuXHJcbmNvbnN0IEJveCA9IHN0eWxlZC5kaXYoXHJcbiAgKHtcclxuICAgIGNlbnRlcmVkID0gZmFsc2UsXHJcbiAgICBkaXJlY3Rpb24gPSBudWxsLFxyXG4gICAgZnVsbCA9IGZhbHNlLFxyXG4gICAganVzdGlmeSA9IG51bGwsXHJcbiAgICBhbGlnbkl0ZW1zID0gbnVsbCxcclxuICAgIHdyYXAgPSBudWxsLFxyXG4gICAgcGFkZGluZyA9IG51bGwsXHJcbiAgfSkgPT4gKHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXg6IGZ1bGwgPyAxIDogbnVsbCxcclxuICAgIGZsZXhEaXJlY3Rpb246IGRpcmVjdGlvbixcclxuICAgIGp1c3RpZnlDb250ZW50OiBjZW50ZXJlZCA/ICdjZW50ZXInIDoganVzdGlmeSxcclxuICAgIGFsaWduSXRlbXM6IGNlbnRlcmVkID8gJ2NlbnRlcicgOiBhbGlnbkl0ZW1zLFxyXG4gICAgcGFkZGluZzogcGFkZGluZyA/IHNwYWNpbmdbYHQke3BhZGRpbmd9YF0gOiBudWxsLFxyXG4gICBmbGV4V3JhcDogd3JhcCxcclxuICB9KVxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3hcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy90b2tlbnMnXHJcbmltcG9ydCB7IHR5cG9ncmFwaHlTdHlsZXMgfSBmcm9tICcuL1RleHQnXHJcblxyXG5mdW5jdGlvbiBCdXR0b24oeyBjaGlsZHJlbiwgY29sb3IgPSAncHJpbWFyeScsIG9uQ2xpY2ssIGZ1bGwgPSBmYWxzZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25TdHlsZSBiZ0NvbG9yPXtjb2xvcn0gY29sb3I9XCJ3aGl0ZVwiIG9uQ2xpY2s9e29uQ2xpY2t9IGZ1bGw9e2Z1bGx9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvblN0eWxlPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQnV0dG9uU3R5bGUgPSBzdHlsZWQuYnV0dG9uYFxyXG4gICR7dHlwb2dyYXBoeVN0eWxlc31cclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnNbcHJvcHMuYmdDb2xvcl19O1xyXG4gIGJvcmRlcjogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLmZ1bGwgPyAnMTAwJScgOiAnYXV0byd9O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzW2Ake3Byb3BzLmJnQ29sb3J9NjAwYF19O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcvdG9rZW5zJ1xyXG5cclxuZnVuY3Rpb24gQ2xvc2VCdXR0b24oeyBvbkNsaWNrIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENsb3NlQnV0dG9uU3R5bGUgb25DbGljaz17b25DbGlja30gdGl0bGU9XCJDbG9zZVwiPlxyXG4gICAgICA8SW1hZ2Ugc3JjPVwiL1NWR3MvY2xvc2Uuc3ZnXCIgYWx0PVwiQ2xvc2VcIiB3aWR0aD1cIjE1XCIgaGVpZ2h0PVwiMTVcIiAvPlxyXG4gICAgPC9DbG9zZUJ1dHRvblN0eWxlPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgQ2xvc2VCdXR0b25TdHlsZSA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiAwO1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5uZXV0cmFsfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb3NlQnV0dG9uXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xyXG5cclxuaW1wb3J0IHsgY29sb3JzLCBzcGFjaW5nIH0gZnJvbSAndG9rZW5zJ1xyXG5cclxuY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy10b3A6ICR7c3BhY2luZy50M307XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29sb3JzLmdyZXkzMDB9O1xyXG4gIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZy50M307XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpdmlkZXJcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmltcG9ydCB7IGNvbG9ycywgc2hhZG93LCBzcGFjaW5nIH0gZnJvbSAnL3Rva2VucydcclxuaW1wb3J0IHVzZUNsb3NlT25DbGlja091dHNpZGUgZnJvbSAnLi91c2VDbG9zZU9uQ2xpY2tPdXRzaWRlJ1xyXG5pbXBvcnQgdXNlRXNjVG9DbG9zZSBmcm9tICcuL3VzZUVzY1RvQ2xvc2UnXHJcblxyXG5mdW5jdGlvbiBEcmF3ZXIoeyBjaGlsZHJlbiwgb3Blbiwgb25DbG9zZSwgLi4ucHJvcHMgfSkge1xyXG4gIGNvbnN0IHBhcGVyUmVmID0gUmVhY3QudXNlUmVmKClcclxuXHJcbiAgdXNlQ2xvc2VPbkNsaWNrT3V0c2lkZShwYXBlclJlZiwgb3Blbiwgb25DbG9zZSlcclxuICB1c2VFc2NUb0Nsb3NlKG9wZW4sIG9uQ2xvc2UpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXIgcmVmPXtwYXBlclJlZn0gY2xhc3NOYW1lPXtvcGVuID8gJ3Nob3cnIDogJyd9IHsuLi5wcm9wc30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUGFwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBQYXBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuYmFja2dyb3VuZH07ICBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgIFxyXG4gIHotaW5kZXg6IDgwMDtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgZWFzZTtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwwLDApO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuXHJcbiAgJi5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6ICR7c2hhZG93LnNtfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlclxyXG4iLCJpbXBvcnQgeyBoZWFkaW5nU2l6ZSB9IGZyb20gJy90b2tlbnMnXHJcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCdcclxuXHJcbmZ1bmN0aW9uIEhlYWRpbmcoeyBjaGlsZHJlbiwgc2l6ZSwgLi4ucHJvcHMgfSkge1xyXG4gIGNvbnN0IHRhZyA9IGBoJHtzaXplfWBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUZXh0IGFzPXt0YWd9IHNpemU9e2hlYWRpbmdTaXplW3RhZ119IHdlaWdodD1cIjMwMFwiIHsuLi5wcm9wc30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVGV4dD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmdcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuXHJcbmltcG9ydCB7IEJveCB9IGZyb20gJy9jb21wb25lbnRzL3VpJ1xyXG5pbXBvcnQgeyBzcGFjaW5nIH0gZnJvbSAnL3Rva2VucydcclxuXHJcbmZ1bmN0aW9uIFJvd0JldHdlZW4oeyBjaGlsZHJlbiwgYWxpZ25JdGVtcyA9ICdjZW50ZXInIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvd1N0eWxlIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ25JdGVtcz17YWxpZ25JdGVtc30+ICAgICAgXHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUm93U3R5bGU+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBSb3dTdHlsZSA9IHN0eWxlZChCb3gpYFxyXG4gIG1hcmdpbi1ib3R0b206ICR7c3BhY2luZy50NH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm93QmV0d2VlblxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcclxuaW1wb3J0IGlzUHJvcFZhbGlkIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xyXG5cclxuaW1wb3J0IHtcclxuICBjb2xvcnMsXHJcbiAgZm9udEZhbWlseSxcclxuICBmb250U2l6ZSxcclxuICBsaW5lSGVpZ2h0IGFzIGxpbmVIZWlnaHRUb2tlbnMsXHJcbiAgc3BhY2luZyxcclxufSBmcm9tIFwiL3Rva2Vuc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cG9ncmFwaHlTdHlsZXMgPSAoe1xyXG4gIGNvbG9yID0gJ2N1cnJlbnRDb2xvcicsXHJcbiAgZmFtaWx5ID0gZm9udEZhbWlseS5kZWZhdWx0LFxyXG4gIGxpbmVUaHJvdWdoID0gZmFsc2UsXHJcbiAgc2l6ZSA9ICc0JyxcclxuICBsaW5lSGVpZ2h0ID0gc2l6ZSxcclxuICBtYixcclxuICB3ZWlnaHQgPSAnbm9ybWFsJ1xyXG59KSA9PlxyXG4gIGNzc2BcclxuICAgIGNvbG9yOiAke2NvbG9yc1tjb2xvcl0gfHwgY29sb3J9O1xyXG4gICAgZm9udC1mYW1pbHk6ICR7ZmFtaWx5fTtcclxuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZVtgdCR7c2l6ZX1gXSB8fCBcImluaGVyaXRcIn07XHJcbiAgICBmb250LXdlaWdodDogJHt3ZWlnaHR9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7bGluZUhlaWdodFRva2Vuc1tgdCR7bGluZUhlaWdodH1gXSB8fCBcImluaGVyaXRcIn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAke3NwYWNpbmdbYHQke21ifWBdIHx8IDB9O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiAke2xpbmVUaHJvdWdoID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZSd9O1xyXG4gIGA7XHJcblxyXG5jb25zdCBUZXh0ID0gc3R5bGVkKCdzcGFuJywge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+XHJcbiAgICBpc1Byb3BWYWxpZChwcm9wKSAmJiAhWydhcycsICdzaXplJywgJ3dlaWdodCddLmluY2x1ZGVzKHByb3ApXHJcbn0pKHR5cG9ncmFwaHlTdHlsZXMpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSAnLi9Cb3gnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2xvc2VCdXR0b24gfSBmcm9tICcuL0Nsb3NlQnV0dG9uJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIERpdmlkZXIgfSBmcm9tICcuL0RpdmlkZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJhd2VyIH0gZnJvbSAnLi9EcmF3ZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGluZyB9IGZyb20gJy4vSGVhZGluZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSb3dCZXR3ZWVuIH0gZnJvbSAnLi9Sb3dCZXR3ZWVuJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHQgfSBmcm9tICcuL1RleHQnXHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcvaGVscGVycydcclxuXHJcbmZ1bmN0aW9uIHVzZUNsb3NlT25DbGlja091dHNpZGUoZWxlbWVudFJlZiwgb3Blbiwgb25DbG9zZSkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNTZXJ2ZXIgfHwgIW9wZW4gfHwgIWVsZW1lbnRSZWYuY3VycmVudCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50UmVmLmN1cnJlbnQgJiYgIWVsZW1lbnRSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICBvbkNsb3NlKClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlQ2xpY2spXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljaylcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZUNsaWNrKVxyXG4gICAgfVxyXG4gIH0sIFtvcGVuLCBvbkNsb3NlLCBlbGVtZW50UmVmXSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUNsb3NlT25DbGlja091dHNpZGVcclxuIiwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcvaGVscGVycydcclxuXHJcbmZ1bmN0aW9uIHVzZUVzY1RvQ2xvc2Uob3Blbiwgb25DbG9zZSl7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc1NlcnZlciB8fCAhb3BlbikgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVFc2MgPSBlID0+IGUua2V5ID09PSAnRXNjYXBlJyAmJiBvbkNsb3NlKClcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZUVzYylcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZUVzYylcclxuICAgIH1cclxuICB9LCBbb3Blbiwgb25DbG9zZV0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUVzY1RvQ2xvc2UiLCJleHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSB1bmRlZmluZWRcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgdXNlSHlkcmF0ZUF0b21zIH0gZnJvbSAnam90YWkvdXRpbHMnXHJcblxyXG5pbXBvcnQgeyBQcm9kdWN0TGlzdCB9IGZyb20gJy9jb21wb25lbnRzL2FwcC9wcm9kdWN0J1xyXG5pbXBvcnQgeyBTaG9wTGF5b3V0IH0gZnJvbSAnL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgeyBIZWFkaW5nLCBUZXh0IH0gZnJvbSAnL2NvbXBvbmVudHMvdWknXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSh7IHByb2R1Y3RzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRpbmcgc2l6ZT1cIjNcIj5TdG9yZTwvSGVhZGluZz5cclxuICAgICAgPFRleHQgYXM9XCJwXCIgbWI9XCI3XCI+XHJcbiAgICAgICAgRXhwbG9yZSBvdXIgdmFzdCBzZWxlY3Rpb24gb2YgcHJlbWl1bSBwcm9kdWN0cy5cclxuICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuSG9tZVBhZ2UuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gZ2V0TGF5b3V0KHBhZ2UpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNob3BMYXlvdXQ+XHJcbiAgICAgIHtwYWdlfVxyXG4gICAgPC9TaG9wTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0cycpXHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBcclxuICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzIHx8IFtdIFxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXHJcbiIsImltcG9ydCB7IGF0b20gfSBmcm9tICdqb3RhaSdcclxuXHJcbmV4cG9ydCBjb25zdCBpc01pbmlDYXJ0T3BlbkF0b20gPSBhdG9tKGZhbHNlKVxyXG5cclxuZXhwb3J0IGNvbnN0IGNhcnRBdG9tID0gYXRvbShbXSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnRBdG9tID0gYXRvbShcclxuICBudWxsLFxyXG4gIGZ1bmN0aW9uIGFkZFRvQ2FydChnZXQsIHNldCwgcHJvZHVjdCkge1xyXG4gICAgY29uc3QgY2FydCA9IGdldChjYXJ0QXRvbSlcclxuICAgIGNvbnN0IGluZGV4ID0gY2FydC5maW5kSW5kZXgobyA9PiBvLmlkID09PSBwcm9kdWN0LmlkKVxyXG4gIFxyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICBzZXQoY2FydEF0b20sIFsuLi5jYXJ0LCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH1dKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdXBkYXRlID0gWy4uLmNhcnRdXHJcbiAgICAgIHVwZGF0ZVtpbmRleF0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICBzZXQoY2FydEF0b20sIHVwZGF0ZSlcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQ2FydEF0b20gPSBhdG9tKFxyXG4gIG51bGwsXHJcbiAgZnVuY3Rpb24gcmVtb3ZlRnJvbUNhcnQoZ2V0LCBzZXQsIHByb2R1Y3RJZCkge1xyXG4gICAgY29uc3QgY2FydCA9IGdldChjYXJ0QXRvbSlcclxuICAgIGNvbnN0IGluZGV4ID0gY2FydC5maW5kSW5kZXgobyA9PiBvLmlkID09PSBwcm9kdWN0SWQpICAgIFxyXG4gIFxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgbGV0IGNvcHkgPSBbLi4uY2FydF1cclxuICAgICAgY29weS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgIHNldChjYXJ0QXRvbSwgY29weSlcclxuICAgIH1cclxuICB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCB0b3RhbENhcnRBdG9tID0gYXRvbShnZXQgPT4ge1xyXG4gIGNvbnN0IHN1bSA9IGdldChjYXJ0QXRvbSkucmVkdWNlKChhY2MsIHByb2R1Y3QpID0+IGFjYyArIHBhcnNlRmxvYXQocHJvZHVjdC5wcmljZSksIDApXHJcbiAgcmV0dXJuIHN1bS50b0ZpeGVkKDIpXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY291bnRDYXJ0SXRlbXNBdG9tID0gYXRvbShnZXQgPT4gZ2V0KGNhcnRBdG9tKS5sZW5ndGgpXHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gIGdyZXkxMDA6ICcjZmFmYWZhJyxcclxuICBncmV5MjAwOiAnI0YxRUVGRicsXHJcbiAgZ3JleTMwMDogJyNlN2U3ZTknLFxyXG4gIGdyZXk1MDA6ICcjNmM2Yjc2JyxcclxuICBuZXV0cmFsOiAnI2YyZjJmMycsXHJcbiAgcHJpbWFyeTogJyM1ZjJlZmYnLFxyXG4gIHByaW1hcnk1MDA6ICcjNWYyZWZmJyxcclxuICBwcmltYXJ5NjAwOiAnIzU0MDBkYicsXHJcbiAgeWVsbG93NTAwOiAnI2ZmY2MwMCcsXHJcbn1cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjb2xvcnMgfSBmcm9tICcuL2NvbG9ycydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaGFkb3cgfSBmcm9tICcuL3NoYWRvdydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzcGFjaW5nIH0gZnJvbSAnLi9zcGFjaW5nJ1xyXG5cclxuZXhwb3J0ICogZnJvbSAnLi90eXBvZ3JhcGh5J1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgc206IFwiMHB4IDJweCA4cHggMHB4IHJnYmEoMTgsIDE4LCAyMywgMC4wOClcIixcclxuICBtZDogXCIwcHggMnB4IDhweCAwcHggcmdiYSgxOCwgMTgsIDIzLCAwLjA4KVwiLFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICB0MDogJzAnLFxyXG4gIHQxOiAnNHB4JyxcclxuICB0MjogJzhweCcsXHJcbiAgdDM6ICcxMnB4JyxcclxuICB0NDogJzE2cHgnLFxyXG4gIHQ1OiAnMjRweCcsXHJcbiAgdDY6ICczMnB4JyxcclxuICB0NzogJzQwcHgnLFxyXG4gIHQ4OiAnNDhweCcsXHJcbiAgdDk6ICc1NnB4JyxcclxuICB0MTA6ICc2NHB4JyxcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZm9udEZhbWlseSA9IHtcclxuICBkZWZhdWx0OiAnXCJBem8gU2Fuc1wiLCBzYW5zLXNlcmlmJyxcclxuICBib2xkOiAnXCJBem8gU2FucyBCb2xkXCIsIHNhbnMtc2VyaWYnLFxyXG4gIGxpZ2h0OiAnXCJBem8gU2FucyBMaWdodFwiLCBzYW5zLXNlcmlmJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb250U2l6ZSA9IHtcclxuICB0MjogJzEycHgnLFxyXG4gIHQzOiAnMTRweCcsXHJcbiAgdDQ6ICcxNnB4JyxcclxuICB0NTogJzIwcHgnLFxyXG4gIHQ2OiAnMjhweCcsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGluZ1NpemUgPSB7XHJcbiAgaDM6ICc2JyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmVIZWlnaHQgPSB7XHJcbiAgdDM6ICcyMHB4JyxcclxuICB0NDogJzI0cHgnLFxyXG4gIHQ1OiAnMjhweCcsXHJcbiAgdDY6ICczNnB4JyxcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9zdHlsZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiam90YWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiam90YWkvdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdyaWQtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsInVzZUF0b21WYWx1ZSIsInVzZVVwZGF0ZUF0b20iLCJCb3giLCJUZXh0IiwiaXNNaW5pQ2FydE9wZW5BdG9tIiwiY291bnRDYXJ0SXRlbXNBdG9tIiwiQ2FydEJ1dHRvbiIsImNvdW50Iiwic2V0SXNPcGVuIiwib25DbGljayIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJzb3IiLCJ1c2VBdG9tIiwiRHJhd2VyIiwiTWluaUNhcnRIZWFkZXIiLCJNaW5pQ2FydEluZm8iLCJNaW5pQ2FydCIsImlzT3BlbiIsInRvZ2dsZU1pbmlDYXJ0Iiwic3R5bGVkIiwiTWVudUJhciIsIkNsb3NlQnV0dG9uIiwic3BhY2luZyIsInRvZ2dsZSIsIkhlYWRlciIsInQzIiwidDUiLCJUb3RhbEl0ZW1zIiwiQnV0dG9uIiwiUm93QmV0d2VlbiIsImNhcnRBdG9tIiwidG90YWxDYXJ0QXRvbSIsIk1pbmlDYXJ0UHJvZHVjdCIsImNhcnQiLCJ0b3RhbENhcnQiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJEaXZpZGVyIiwiTWluaUNhcnRQcm9kdWN0SW1hZ2UiLCJNaW5pQ2FydFJlbW92ZUJ1dHRvbiIsImltYWdlIiwic2hvcnROYW1lIiwicHJpY2UiLCJwYWNrYWdlQ29udGVudCIsInF1YW50aXR5IiwiRGV0YWlsVGV4dCIsImNoaWxkcmVuIiwiY29sb3JzIiwiYWx0IiwidGl0bGUiLCJDb250YWluZXIiLCJncmV5MjAwIiwidDQiLCJTdHlsZWRJbWciLCJyZW1vdmVGcm9tQ2FydEF0b20iLCJwcm9kdWN0SWQiLCJyZW1vdmVGcm9tQ2FydCIsInNwYW4iLCJkZWZhdWx0IiwiSGlkZGVuIiwiQWRkVG9DYXJ0QnV0dG9uIiwiQ2FyZEltYWdlIiwiUHJpY2UiLCJSZXZpZXdTdGFycyIsIlByb2R1Y3RDYXJkIiwib3JpZ2luYWxQcmljZSIsInJldmlldyIsImdyZXkxMDAiLCJhZGRUb0NhcnRBdG9tIiwiUHJvZHVjdENhcmRBZGRUb0NhcnRCdXR0b24iLCJhZGRUb0NhcnQiLCJQcm9kdWN0Q2FyZERldGFpbFRleHQiLCJwcm9wcyIsIlByb2R1Y3RDYXJkSW1hZ2UiLCJQcm9kdWN0Q2FyZFByaWNlIiwibWFyZ2luUmlnaHQiLCJSb3ciLCJDb2wiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwic3RhcnMiLCJjdXJyZW50U3RhciIsIlN0YXJTdmciLCJpc0ZpbGxlZCIsInllbGxvdzUwMCIsImdyZXkzMDAiLCJMb2dvIiwiSW5uZXJDb250YWluZXIiLCJMb2dvQ29udGFpbmVyIiwiZGl2Iiwic2hhZG93IiwibWQiLCJ0NiIsIlNob3BMYXlvdXQiLCJjZW50ZXJlZCIsImRpcmVjdGlvbiIsImZ1bGwiLCJqdXN0aWZ5IiwiYWxpZ25JdGVtcyIsIndyYXAiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXgiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsInR5cG9ncmFwaHlTdHlsZXMiLCJjb2xvciIsIkJ1dHRvblN0eWxlIiwiYnV0dG9uIiwiYmdDb2xvciIsIkNsb3NlQnV0dG9uU3R5bGUiLCJuZXV0cmFsIiwidXNlQ2xvc2VPbkNsaWNrT3V0c2lkZSIsInVzZUVzY1RvQ2xvc2UiLCJvcGVuIiwib25DbG9zZSIsInBhcGVyUmVmIiwidXNlUmVmIiwiUGFwZXIiLCJiYWNrZ3JvdW5kIiwic20iLCJoZWFkaW5nU2l6ZSIsIkhlYWRpbmciLCJzaXplIiwidGFnIiwiUm93U3R5bGUiLCJpc1Byb3BWYWxpZCIsImNzcyIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJsaW5lSGVpZ2h0VG9rZW5zIiwiZmFtaWx5IiwibGluZVRocm91Z2giLCJtYiIsIndlaWdodCIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsImluY2x1ZGVzIiwidXNlRWZmZWN0IiwiaXNTZXJ2ZXIiLCJlbGVtZW50UmVmIiwiY3VycmVudCIsImhhbmRsZUNsaWNrIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlRXNjIiwia2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiaSIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0IiwiZmlsdGVyIiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImNvbnNvbGUiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibG9hZGluZyIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsIlN0cmluZyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsImJvcmRlciIsIm1hcmdpbiIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwidXJsIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJlbCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJIb21lUGFnZSIsImdldExheW91dCIsInBhZ2UiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJhdG9tIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJvIiwidXBkYXRlIiwiY29weSIsInNwbGljZSIsInN1bSIsInJlZHVjZSIsImFjYyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiZ3JleTUwMCIsInByaW1hcnkiLCJwcmltYXJ5NTAwIiwicHJpbWFyeTYwMCIsInQwIiwidDEiLCJ0MiIsInQ3IiwidDgiLCJ0OSIsInQxMCIsImJvbGQiLCJsaWdodCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==