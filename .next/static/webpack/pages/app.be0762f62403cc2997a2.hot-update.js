webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/Board.tsx":
/*!*************************!*\
  !*** ./pages/Board.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _BoardSquare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardSquare */ \"./pages/BoardSquare.tsx\");\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Animal */ \"./pages/Animal.tsx\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _TargetBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TargetBox */ \"./pages/TargetBox.tsx\");\n/* harmony import */ var _SourceBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SourceBox */ \"./pages/SourceBox.tsx\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common */ \"./pages/common.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/Board.tsx\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    width: 1000px;\\n    height: 1000px;\\n    background-image: url(\", \");\\n    display: flex;\\n    flex-wrap: wrap;\\n    margin: 40px auto;\\n    \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar background = '/pattern.jpg';\n\nfunction renderSquare(i, _ref, moveAnimal) {\n  var _ref2 = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, 2),\n      animalX = _ref2[0],\n      animalY = _ref2[1];\n\n  var x = i % 8;\n  var y = Math.floor(i / 8);\n  var black = (x + y) % 2 === 1;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: function onClick() {\n      return moveAnimal(x, y);\n    },\n    style: {\n      width: '12.5%',\n      minHeight: '12.5%'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_BoardSquare__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      x: x,\n      y: y,\n      moveAnimal: moveAnimal,\n      children: renderPiece(x, y, [animalX, animalY])\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)\n  }, i, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n;\n\nfunction renderPiece(x, y, _ref3) {\n  var _ref4 = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref3, 2),\n      animalX = _ref4[0],\n      animalY = _ref4[1];\n\n  var isAnimalHere = x === animalX && y === animalY;\n\n  if (isAnimalHere) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Animal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      type: 'type'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }, this);\n  }\n}\n\nvar BoardElement = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), background);\n_c = BoardElement;\n\nvar Board = function Board(props) {\n  var squares = [];\n\n  for (var i = 0; i < 64; i++) {\n    squares.push(renderSquare(i, props.animalPosition, props.moveAnimal));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BoardElement, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          overflow: 'hidden',\n          clear: 'both',\n          margin: '-.5rem'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            \"float\": 'left'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            color: _common__WEBPACK_IMPORTED_MODULE_9__[\"Colors\"].BLUE,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              color: _common__WEBPACK_IMPORTED_MODULE_9__[\"Colors\"].YELLOW,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                color: _common__WEBPACK_IMPORTED_MODULE_9__[\"Colors\"].YELLOW\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 60,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                color: _common__WEBPACK_IMPORTED_MODULE_9__[\"Colors\"].BLUE\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              color: _common__WEBPACK_IMPORTED_MODULE_9__[\"Colors\"].BLUE,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                color: _common__WEBPACK_IMPORTED_MODULE_9__[\"Colors\"].YELLOW\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            \"float\": 'left',\n            marginLeft: '5rem',\n            marginTop: '.5rem'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TargetBox__WEBPACK_IMPORTED_MODULE_7__[\"StatefulTargetBox\"], {\n            onDrop: null\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false), squares]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BoardElement\");\n$RefreshReg$(_c2, \"Board\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQm9hcmQudHN4PzVhNmEiXSwibmFtZXMiOlsiYmFja2dyb3VuZCIsInJlbmRlclNxdWFyZSIsImkiLCJtb3ZlQW5pbWFsIiwiYW5pbWFsWCIsImFuaW1hbFkiLCJ4IiwieSIsIk1hdGgiLCJmbG9vciIsImJsYWNrIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJyZW5kZXJQaWVjZSIsImlzQW5pbWFsSGVyZSIsIkJvYXJkRWxlbWVudCIsInN0eWxlZCIsImRpdiIsIkJvYXJkIiwicHJvcHMiLCJzcXVhcmVzIiwicHVzaCIsImFuaW1hbFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJjbGVhciIsIm1hcmdpbiIsIkNvbG9ycyIsIkJMVUUiLCJZRUxMT1ciLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQSxJQUFNQSxVQUFVLEdBQUcsY0FBbkI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsUUFBdURDLFVBQXZELEVBQXVHO0FBQUE7QUFBQSxNQUE3RUMsT0FBNkU7QUFBQSxNQUFwRUMsT0FBb0U7O0FBQ3JHLE1BQU1DLENBQUMsR0FBR0osQ0FBQyxHQUFHLENBQWQ7QUFDQSxNQUFNSyxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxDQUFDLEdBQUcsQ0FBZixDQUFWO0FBQ0EsTUFBTVEsS0FBSyxHQUFHLENBQUNKLENBQUMsR0FBR0MsQ0FBTCxJQUFVLENBQVYsS0FBZ0IsQ0FBOUI7QUFFQSxzQkFDRTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1KLFVBQVUsQ0FBQ0csQ0FBRCxFQUFJQyxDQUFKLENBQWhCO0FBQUEsS0FBZDtBQUE4QyxTQUFLLEVBQUU7QUFBRUksV0FBSyxFQUFFLE9BQVQ7QUFBa0JDLGVBQVMsRUFBRTtBQUE3QixLQUFyRDtBQUFBLDJCQUNFLHFF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QkQ7O01BQU1GLEs7QUFnQ1NBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvQm9hcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb2FyZFNxdWFyZSBmcm9tICcuL0JvYXJkU3F1YXJlJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgU3RhdGVmdWxUYXJnZXRCb3ggYXMgVGFyZ2V0Qm94IH0gZnJvbSAnLi9UYXJnZXRCb3gnO1xuaW1wb3J0IFNvdXJjZUJveCBmcm9tICcuL1NvdXJjZUJveCc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuL2NvbW1vbic7XG5cblxuaW50ZXJmYWNlIEJvYXJkUHJvcHMge1xuICBhbmltYWxQb3NpdGlvbjogbnVtYmVyW107XG4gIG1vdmVBbmltYWw6ICh0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJhY2tncm91bmQgPSAnL3BhdHRlcm4uanBnJ1xuXG5mdW5jdGlvbiByZW5kZXJTcXVhcmUoaSwgW2FuaW1hbFgsIGFuaW1hbFldOiBudW1iZXJbXSwgbW92ZUFuaW1hbDogKHRvWDogbnVtYmVyLCB0b1k6IG51bWJlcikgPT4gdm9pZCkge1xuICBjb25zdCB4ID0gaSAlIDhcbiAgY29uc3QgeSA9IE1hdGguZmxvb3IoaSAvIDgpXG4gIGNvbnN0IGJsYWNrID0gKHggKyB5KSAlIDIgPT09IDFcblxuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17KCkgPT4gbW92ZUFuaW1hbCh4LCB5KX0ga2V5PXtpfSBzdHlsZT17eyB3aWR0aDogJzEyLjUlJywgbWluSGVpZ2h0OiAnMTIuNSUnIH19PlxuICAgICAgPEJvYXJkU3F1YXJlIHg9e3h9IHk9e3l9IG1vdmVBbmltYWw9e21vdmVBbmltYWx9ID57cmVuZGVyUGllY2UoeCwgeSwgW2FuaW1hbFgsIGFuaW1hbFldKX08L0JvYXJkU3F1YXJlPlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5mdW5jdGlvbiByZW5kZXJQaWVjZSh4LCB5LCBbYW5pbWFsWCwgYW5pbWFsWV0pIHtcbiAgY29uc3QgaXNBbmltYWxIZXJlID0gKHggPT09IGFuaW1hbFggJiYgeSA9PT0gYW5pbWFsWSlcbiAgaWYgKGlzQW5pbWFsSGVyZSkge1xuICAgIHJldHVybiA8QW5pbWFsIHR5cGU9eyd0eXBlJ30gLz47XG4gIH1cbn1cblxuXG5jb25zdCBCb2FyZEVsZW1lbnQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YmFja2dyb3VuZH0pO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIFxuYDtcblxuY29uc3QgQm9hcmQ6IEZ1bmN0aW9uQ29tcG9uZW50PEJvYXJkUHJvcHM+ID0gKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxCb2FyZFByb3BzPikgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG4gICAgc3F1YXJlcy5wdXNoKHJlbmRlclNxdWFyZShpLCBwcm9wcy5hbmltYWxQb3NpdGlvbiwgcHJvcHMubW92ZUFuaW1hbCkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb2FyZEVsZW1lbnQ+XG4gICAgICA8PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJywgbWFyZ2luOiAnLS41cmVtJyB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcgfX0+XG4gICAgICAgICAgICA8U291cmNlQm94IGNvbG9yPXtDb2xvcnMuQkxVRX0+XG4gICAgICAgICAgICAgIDxTb3VyY2VCb3ggY29sb3I9e0NvbG9ycy5ZRUxMT1d9PlxuICAgICAgICAgICAgICAgIDxTb3VyY2VCb3ggY29sb3I9e0NvbG9ycy5ZRUxMT1d9IC8+XG4gICAgICAgICAgICAgICAgPFNvdXJjZUJveCBjb2xvcj17Q29sb3JzLkJMVUV9IC8+XG4gICAgICAgICAgICAgIDwvU291cmNlQm94PlxuICAgICAgICAgICAgICA8U291cmNlQm94IGNvbG9yPXtDb2xvcnMuQkxVRX0+XG4gICAgICAgICAgICAgICAgPFNvdXJjZUJveCBjb2xvcj17Q29sb3JzLllFTExPV30gLz5cbiAgICAgICAgICAgICAgPC9Tb3VyY2VCb3g+XG4gICAgICAgICAgICA8L1NvdXJjZUJveD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luTGVmdDogJzVyZW0nLCBtYXJnaW5Ub3A6ICcuNXJlbScgfX0+XG4gICAgICAgICAgICA8VGFyZ2V0Qm94IG9uRHJvcD17bnVsbH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICAgIHtzcXVhcmVzfVxuICAgIDwvQm9hcmRFbGVtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Board.tsx\n");

/***/ })

})