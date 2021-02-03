webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/Board.tsx":
/*!*************************!*\
  !*** ./pages/Board.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _BoardSquare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardSquare */ \"./pages/BoardSquare.tsx\");\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Animal */ \"./pages/Animal.tsx\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/esm/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/Board.tsx\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 1000px;\\n    height: 1000px;\\n    background-image: url(\", \");\\n    z-index: 999;\\n    display: flex;\\n    flex-wrap: wrap;\\n    margin: 40px auto;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar background = '/pattern.jpg';\n\nfunction renderSquare(i, _ref, moveAnimal) {\n  var _ref2 = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, 2),\n      animalX = _ref2[0],\n      animalY = _ref2[1];\n\n  var x = i % 8;\n  var y = Math.floor(i / 8);\n  var black = (x + y) % 2 === 1;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    onClick: function onClick() {\n      return moveAnimal(x, y);\n    },\n    style: {\n      width: '12.5%',\n      minHeight: '12.5%'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_BoardSquare__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      x: x,\n      y: y,\n      moveAnimal: moveAnimal,\n      children: renderPiece(x, y, [animalX, animalY])\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)\n  }, i, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n;\n\nfunction renderPiece(x, y, _ref3) {\n  var _ref4 = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref3, 2),\n      animalX = _ref4[0],\n      animalY = _ref4[1];\n\n  var isAnimalHere = x === animalX && y === animalY;\n\n  if (isAnimalHere) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Animal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 12\n    }, this);\n  }\n}\n\nvar BoardElement = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), background);\n_c = BoardElement;\n\nvar Board = function Board(props) {\n  var squares = [];\n\n  for (var i = 0; i < 64; i++) {\n    squares.push(renderSquare(i, props.animalPosition, props.moveAnimal));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_dnd__WEBPACK_IMPORTED_MODULE_7__[\"DndProvider\"], {\n    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__[\"HTML5Backend\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(BoardElement, {\n      children: squares\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BoardElement\");\n$RefreshReg$(_c2, \"Board\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQm9hcmQudHN4PzVhNmEiXSwibmFtZXMiOlsiYmFja2dyb3VuZCIsInJlbmRlclNxdWFyZSIsImkiLCJtb3ZlQW5pbWFsIiwiYW5pbWFsWCIsImFuaW1hbFkiLCJ4IiwieSIsIk1hdGgiLCJmbG9vciIsImJsYWNrIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJyZW5kZXJQaWVjZSIsImlzQW5pbWFsSGVyZSIsIkJvYXJkRWxlbWVudCIsInN0eWxlZCIsImRpdiIsIkJvYXJkIiwicHJvcHMiLCJzcXVhcmVzIiwicHVzaCIsImFuaW1hbFBvc2l0aW9uIiwiSFRNTDVCYWNrZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBLElBQU1BLFVBQVUsR0FBRyxjQUFuQjs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxDQUF0QixRQUF1REMsVUFBdkQsRUFBeUc7QUFBQTtBQUFBLE1BQS9FQyxPQUErRTtBQUFBLE1BQXRFQyxPQUFzRTs7QUFDdkcsTUFBTUMsQ0FBQyxHQUFHSixDQUFDLEdBQUcsQ0FBZDtBQUNBLE1BQU1LLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdQLENBQUMsR0FBRyxDQUFmLENBQVY7QUFDQSxNQUFNUSxLQUFLLEdBQUcsQ0FBQ0osQ0FBQyxHQUFHQyxDQUFMLElBQVUsQ0FBVixLQUFnQixDQUE5QjtBQUVBLHNCQUNFO0FBQUssV0FBTyxFQUFFO0FBQUEsYUFBTUosVUFBVSxDQUFFRyxDQUFGLEVBQUtDLENBQUwsQ0FBaEI7QUFBQSxLQUFkO0FBQWdELFNBQUssRUFBRTtBQUFFSSxXQUFLLEVBQUUsT0FBVDtBQUFrQkMsZUFBUyxFQUFFO0FBQTdCLEtBQXZEO0FBQUEsMkJBQ0UscUVBQUMsb0RBQUQ7QUFBYSxPQUFDLEVBQUVOLENBQWhCO0FBQW1CLE9BQUMsRUFBRUMsQ0FBdEI7QUFBeUIsZ0JBQVUsRUFBRUosVUFBckM7QUFBQSxnQkFBbURVLFdBQVcsQ0FBRVAsQ0FBRixFQUFLQyxDQUFMLEVBQVEsQ0FBRUgsT0FBRixFQUFXQyxPQUFYLENBQVI7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLEtBQTZDSCxDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFBQTs7QUFFRCxTQUFTVyxXQUFULENBQXFCUCxDQUFyQixFQUF3QkMsQ0FBeEIsU0FBK0M7QUFBQTtBQUFBLE1BQW5CSCxPQUFtQjtBQUFBLE1BQVZDLE9BQVU7O0FBQzdDLE1BQU1TLFlBQVksR0FBSVIsQ0FBQyxLQUFLRixPQUFOLElBQWlCRyxDQUFDLEtBQUtGLE9BQTdDOztBQUNBLE1BQUlTLFlBQUosRUFBa0I7QUFDaEIsd0JBQU8scUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7QUFDRjs7QUFHRCxJQUFNQyxZQUFZLEdBQUdDLHVEQUFNLENBQUNDLEdBQVYsb0JBR1VqQixVQUhWLENBQWxCO0tBQU1lLFk7O0FBVU4sSUFBTUcsS0FBb0MsR0FBRyxTQUF2Q0EsS0FBdUMsQ0FBQ0MsS0FBRCxFQUEwQztBQUNyRixNQUFNQyxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsT0FBSyxJQUFJbEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQmtCLFdBQU8sQ0FBQ0MsSUFBUixDQUFhcEIsWUFBWSxDQUFDQyxDQUFELEVBQUlpQixLQUFLLENBQUNHLGNBQVYsRUFBMEJILEtBQUssQ0FBQ2hCLFVBQWhDLENBQXpCO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMscURBQUQ7QUFBYSxXQUFPLEVBQUVvQixvRUFBdEI7QUFBQSwyQkFDRSxxRUFBQyxZQUFEO0FBQUEsZ0JBQ0dIO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBYkQ7O01BQU1GLEs7QUFlU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9Cb2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvYXJkU3F1YXJlIGZyb20gJy4vQm9hcmRTcXVhcmUnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5pbXBvcnQgeyBQcm9ncmVzc1BsdWdpbiB9IGZyb20gJ3dlYnBhY2snO1xuXG5cbmludGVyZmFjZSBQb2ludCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEJvYXJkUHJvcHMge1xuICAgIGFuaW1hbFBvc2l0aW9uOiBudW1iZXJbXTtcbiAgICBtb3ZlQW5pbWFsOiAoIHRvWDogbnVtYmVyLCB0b1k6IG51bWJlciApID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJhY2tncm91bmQgPSAnL3BhdHRlcm4uanBnJ1xuXG5mdW5jdGlvbiByZW5kZXJTcXVhcmUoaSwgW2FuaW1hbFgsIGFuaW1hbFldOiBudW1iZXJbXSwgbW92ZUFuaW1hbDogKCB0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIgKSA9PiB2b2lkKSB7XG4gIGNvbnN0IHggPSBpICUgOFxuICBjb25zdCB5ID0gTWF0aC5mbG9vcihpIC8gOClcbiAgY29uc3QgYmxhY2sgPSAoeCArIHkpICUgMiA9PT0gMVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBtb3ZlQW5pbWFsKCB4LCB5ICl9IGtleT17aX0gc3R5bGU9e3sgd2lkdGg6ICcxMi41JScsIG1pbkhlaWdodDogJzEyLjUlJyB9fT5cbiAgICAgIDxCb2FyZFNxdWFyZSB4PXt4fSB5PXt5fSBtb3ZlQW5pbWFsPXttb3ZlQW5pbWFsfSA+e3JlbmRlclBpZWNlKCB4LCB5LCBbIGFuaW1hbFgsIGFuaW1hbFkgXSApfTwvQm9hcmRTcXVhcmU+XG4gICAgPC9kaXY+XG4gIClcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclBpZWNlKHgsIHksIFthbmltYWxYLCBhbmltYWxZXSkge1xuICBjb25zdCBpc0FuaW1hbEhlcmUgPSAoeCA9PT0gYW5pbWFsWCAmJiB5ID09PSBhbmltYWxZKVxuICBpZiAoaXNBbmltYWxIZXJlKSB7XG4gICAgcmV0dXJuIDxBbmltYWwgLz47XG4gIH1cbn1cblxuXG5jb25zdCBCb2FyZEVsZW1lbnQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YmFja2dyb3VuZH0pO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbmA7XG5cbmNvbnN0IEJvYXJkOiBGdW5jdGlvbkNvbXBvbmVudDxCb2FyZFByb3BzPiA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48Qm9hcmRQcm9wcz4pID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuICAgIHNxdWFyZXMucHVzaChyZW5kZXJTcXVhcmUoaSwgcHJvcHMuYW5pbWFsUG9zaXRpb24sIHByb3BzLm1vdmVBbmltYWwpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17SFRNTDVCYWNrZW5kfT5cbiAgICAgIDxCb2FyZEVsZW1lbnQ+XG4gICAgICAgIHtzcXVhcmVzfVxuICAgICAgPC9Cb2FyZEVsZW1lbnQ+XG4gICAgPC9EbmRQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Board.tsx\n");

/***/ })

})