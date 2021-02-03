webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/Board.tsx":
/*!*************************!*\
  !*** ./pages/Board.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _BoardSquare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoardSquare */ \"./pages/BoardSquare.tsx\");\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Animal */ \"./pages/Animal.tsx\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _TargetBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TargetBox */ \"./pages/TargetBox.tsx\");\n/* harmony import */ var _SourceBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SourceBox */ \"./pages/SourceBox.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/Board.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n    width: 1000px;\\n    height: 1000px;\\n    background-image: url(\", \");\\n    display: flex;\\n    flex-wrap: wrap;\\n    margin: 40px auto;\\n    \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar background = '/pattern.jpg';\n\nfunction renderSquare(i, _ref, moveAnimal) {\n  var _ref2 = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, 2),\n      animalX = _ref2[0],\n      animalY = _ref2[1];\n\n  var x = i % 8;\n  var y = Math.floor(i / 8);\n  var black = (x + y) % 2 === 1;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: function onClick() {\n      return moveAnimal(x, y);\n    },\n    style: {\n      width: '12.5%',\n      minHeight: '12.5%'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_BoardSquare__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      x: x,\n      y: y,\n      moveAnimal: moveAnimal,\n      children: renderPiece(x, y, [animalX, animalY])\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)\n  }, i, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n;\n\nfunction renderPiece(x, y, _ref3) {\n  var _ref4 = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref3, 2),\n      animalX = _ref4[0],\n      animalY = _ref4[1];\n\n  var isAnimalHere = x === animalX && y === animalY;\n\n  if (isAnimalHere) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Animal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      type: 'type'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 12\n    }, this);\n  }\n}\n\nvar BoardElement = _emotion_styled__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), background);\n_c = BoardElement;\n\nvar Board = function Board(props) {\n  _s();\n\n  var squares = [];\n\n  for (var i = 0; i < 64; i++) {\n    squares.push(renderSquare(i, props.animalPosition, props.moveAnimal));\n  }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([0, 0]),\n      position = _useState[0],\n      setPosition = _useState[1];\n\n  var moveAnimal = function moveAnimal(toX, toY) {\n    setPosition([toX, toY]);\n  };\n\n  var getRandArray = function getRandArray() {\n    var result = [];\n\n    for (var index = 0; index < 2; index++) {\n      result.push(Math.round(Math.random() * 8));\n    }\n\n    return result;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BoardElement, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          overflow: 'hidden',\n          clear: 'both',\n          margin: '-.5rem'\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            \"float\": 'left'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            src: '/whale.svg',\n            animalType: 'whale',\n            id: 1,\n            animalPosition: getRandArray,\n            moveAnimal: moveAnimal\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          src: '/whale.svg',\n          animalType: 'whale',\n          id: 2,\n          animalPosition: getRandArray,\n          moveAnimal: moveAnimal\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            \"float\": 'left'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            src: '/whale.svg',\n            animalType: 'whale',\n            id: 3,\n            animalPosition: getRandArray,\n            moveAnimal: moveAnimal\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            \"float\": 'left'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            src: '/whale.svg',\n            animalType: 'whale',\n            id: 4,\n            animalPosition: getRandArray,\n            moveAnimal: moveAnimal\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            \"float\": 'left'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            src: '/whale.svg',\n            animalType: 'whale',\n            id: 5,\n            animalPosition: getRandArray,\n            moveAnimal: moveAnimal\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            \"float\": 'left'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SourceBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            src: '/whale.svg',\n            animalType: 'whale',\n            id: 6,\n            animalPosition: getRandArray,\n            moveAnimal: moveAnimal\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          style: {\n            \"float\": 'left',\n            marginLeft: '5rem',\n            marginTop: '.5rem'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TargetBox__WEBPACK_IMPORTED_MODULE_7__[\"StatefulTargetBox\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false), squares]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Board, \"Lji5AsNsv7y2BpnVqEZLrS0ICqQ=\");\n\n_c2 = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"BoardElement\");\n$RefreshReg$(_c2, \"Board\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQm9hcmQudHN4PzVhNmEiXSwibmFtZXMiOlsiYmFja2dyb3VuZCIsInJlbmRlclNxdWFyZSIsImkiLCJtb3ZlQW5pbWFsIiwiYW5pbWFsWCIsImFuaW1hbFkiLCJ4IiwieSIsIk1hdGgiLCJmbG9vciIsImJsYWNrIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJyZW5kZXJQaWVjZSIsImlzQW5pbWFsSGVyZSIsIkJvYXJkRWxlbWVudCIsInN0eWxlZCIsImRpdiIsIkJvYXJkIiwicHJvcHMiLCJzcXVhcmVzIiwicHVzaCIsImFuaW1hbFBvc2l0aW9uIiwidXNlU3RhdGUiLCJwb3NpdGlvbiIsInNldFBvc2l0aW9uIiwidG9YIiwidG9ZIiwiZ2V0UmFuZEFycmF5IiwicmVzdWx0IiwiaW5kZXgiLCJyb3VuZCIsInJhbmRvbSIsIm92ZXJmbG93IiwiY2xlYXIiLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0EsSUFBTUEsVUFBVSxHQUFHLGNBQW5COztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLFFBQXVEQyxVQUF2RCxFQUF1RztBQUFBO0FBQUEsTUFBN0VDLE9BQTZFO0FBQUEsTUFBcEVDLE9BQW9FOztBQUNyRyxNQUFNQyxDQUFDLEdBQUdKLENBQUMsR0FBRyxDQUFkO0FBQ0EsTUFBTUssQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsQ0FBQyxHQUFHLENBQWYsQ0FBVjtBQUNBLE1BQU1RLEtBQUssR0FBRyxDQUFDSixDQUFDLEdBQUdDLENBQUwsSUFBVSxDQUFWLEtBQWdCLENBQTlCO0FBRUEsc0JBQ0U7QUFBSyxXQUFPLEVBQUU7QUFBQSxhQUFNSixVQUFVLENBQUNHLENBQUQsRUFBSUMsQ0FBSixDQUFoQjtBQUFBLEtBQWQ7QUFBOEMsU0FBSyxF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QTFDO0FBQW1ELGNBQUUsRUFBRSxDQUF2RDtBQUEwRCwwQkFBYyxFQUFFeUIsWUFBMUU7QUFBd0Ysc0JBQVUsRUFBRXpCO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQXFCRTtBQUFLLGVBQUssRUFBRTtBQUFFLHFCQUFPLE1BQVQ7QUFBaUJpQyxzQkFBVSxFQUFFLE1BQTdCO0FBQXFDQyxxQkFBUyxFQUFFO0FBQWhELFdBQVo7QUFBQSxpQ0FDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBREYsRUE0QkdqQixPQTVCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdDRCxDQW5ERDs7R0FBTUYsSzs7TUFBQUEsSztBQXFEU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9Cb2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb2FyZFNxdWFyZSBmcm9tICcuL0JvYXJkU3F1YXJlJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgU3RhdGVmdWxUYXJnZXRCb3ggYXMgVGFyZ2V0Qm94IH0gZnJvbSAnLi9UYXJnZXRCb3gnO1xuaW1wb3J0IFNvdXJjZUJveCBmcm9tICcuL1NvdXJjZUJveCc7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tICcuL2NvbW1vbic7XG5cblxuaW50ZXJmYWNlIEJvYXJkUHJvcHMge1xuICBhbmltYWxQb3NpdGlvbjogbnVtYmVyW107XG4gIG1vdmVBbmltYWw6ICh0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJhY2tncm91bmQgPSAnL3BhdHRlcm4uanBnJ1xuXG5mdW5jdGlvbiByZW5kZXJTcXVhcmUoaSwgW2FuaW1hbFgsIGFuaW1hbFldOiBudW1iZXJbXSwgbW92ZUFuaW1hbDogKHRvWDogbnVtYmVyLCB0b1k6IG51bWJlcikgPT4gdm9pZCkge1xuICBjb25zdCB4ID0gaSAlIDhcbiAgY29uc3QgeSA9IE1hdGguZmxvb3IoaSAvIDgpXG4gIGNvbnN0IGJsYWNrID0gKHggKyB5KSAlIDIgPT09IDFcblxuICByZXR1cm4gKFxuICAgIDxkaXYgb25DbGljaz17KCkgPT4gbW92ZUFuaW1hbCh4LCB5KX0ga2V5PXtpfSBzdHlsZT17eyB3aWR0aDogJzEyLjUlJywgbWluSGVpZ2h0OiAnMTIuNSUnIH19PlxuICAgICAgPEJvYXJkU3F1YXJlIHg9e3h9IHk9e3l9IG1vdmVBbmltYWw9e21vdmVBbmltYWx9ID57cmVuZGVyUGllY2UoeCwgeSwgW2FuaW1hbFgsIGFuaW1hbFldKX08L0JvYXJkU3F1YXJlPlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5mdW5jdGlvbiByZW5kZXJQaWVjZSh4LCB5LCBbYW5pbWFsWCwgYW5pbWFsWV0pIHtcbiAgY29uc3QgaXNBbmltYWxIZXJlID0gKHggPT09IGFuaW1hbFggJiYgeSA9PT0gYW5pbWFsWSlcbiAgaWYgKGlzQW5pbWFsSGVyZSkge1xuICAgIHJldHVybiA8QW5pbWFsIHR5cGU9eyd0eXBlJ30gLz47XG4gIH1cbn1cblxuXG5jb25zdCBCb2FyZEVsZW1lbnQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgaGVpZ2h0OiAxMDAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7YmFja2dyb3VuZH0pO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIFxuYDtcblxuY29uc3QgQm9hcmQ6IEZ1bmN0aW9uQ29tcG9uZW50PEJvYXJkUHJvcHM+ID0gKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxCb2FyZFByb3BzPikgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG4gICAgc3F1YXJlcy5wdXNoKHJlbmRlclNxdWFyZShpLCBwcm9wcy5hbmltYWxQb3NpdGlvbiwgcHJvcHMubW92ZUFuaW1hbCkpXG4gIH1cbiAgY29uc3QgW3Bvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG4gIGNvbnN0IG1vdmVBbmltYWwgPSAodG9YOiBudW1iZXIsIHRvWTogbnVtYmVyKSA9PiB7XG4gICAgc2V0UG9zaXRpb24oW3RvWCwgdG9ZXSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmFuZEFycmF5ID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjsgaW5kZXgrKykge1xuICAgICAgcmVzdWx0LnB1c2goTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDgpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm9hcmRFbGVtZW50PlxuICAgICAgPD5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcsIG1hcmdpbjogJy0uNXJlbScgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogJ2xlZnQnIH19PlxuICAgICAgICAgICAgPFNvdXJjZUJveCBzcmM9eycvd2hhbGUuc3ZnJ30gYW5pbWFsVHlwZT17J3doYWxlJ30gaWQ9ezF9IGFuaW1hbFBvc2l0aW9uPXtnZXRSYW5kQXJyYXl9IG1vdmVBbmltYWw9e21vdmVBbmltYWx9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICAgICAgICAgIDxTb3VyY2VCb3ggc3JjPXsnL3doYWxlLnN2Zyd9IGFuaW1hbFR5cGU9eyd3aGFsZSd9IGlkPXsyfSBhbmltYWxQb3NpdGlvbj17Z2V0UmFuZEFycmF5fSBtb3ZlQW5pbWFsPXttb3ZlQW5pbWFsfSAvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fT5cbiAgICAgICAgICAgIDxTb3VyY2VCb3ggc3JjPXsnL3doYWxlLnN2Zyd9IGFuaW1hbFR5cGU9eyd3aGFsZSd9IGlkPXszfSBhbmltYWxQb3NpdGlvbj17Z2V0UmFuZEFycmF5fSBtb3ZlQW5pbWFsPXttb3ZlQW5pbWFsfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fT5cbiAgICAgICAgICAgIDxTb3VyY2VCb3ggc3JjPXsnL3doYWxlLnN2Zyd9IGFuaW1hbFR5cGU9eyd3aGFsZSd9IGlkPXs0fSBhbmltYWxQb3NpdGlvbj17Z2V0UmFuZEFycmF5fSBtb3ZlQW5pbWFsPXttb3ZlQW5pbWFsfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fT5cbiAgICAgICAgICAgIDxTb3VyY2VCb3ggc3JjPXsnL3doYWxlLnN2Zyd9IGFuaW1hbFR5cGU9eyd3aGFsZSd9IGlkPXs1fSBhbmltYWxQb3NpdGlvbj17Z2V0UmFuZEFycmF5fSBtb3ZlQW5pbWFsPXttb3ZlQW5pbWFsfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JyB9fT5cbiAgICAgICAgICAgIDxTb3VyY2VCb3ggc3JjPXsnL3doYWxlLnN2Zyd9IGFuaW1hbFR5cGU9eyd3aGFsZSd9IGlkPXs2fSBhbmltYWxQb3NpdGlvbj17Z2V0UmFuZEFycmF5fSBtb3ZlQW5pbWFsPXttb3ZlQW5pbWFsfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIG1hcmdpbkxlZnQ6ICc1cmVtJywgbWFyZ2luVG9wOiAnLjVyZW0nIH19PlxuICAgICAgICAgICAgPFRhcmdldEJveCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICAge3NxdWFyZXN9XG4gICAgPC9Cb2FyZEVsZW1lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Board.tsx\n");

/***/ })

})