webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/BoardSquare.tsx":
/*!*******************************!*\
  !*** ./pages/BoardSquare.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Square */ \"./pages/Square.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ \"./pages/constants.ts\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/BoardSquare.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar BoardSquare = function BoardSquare(props) {\n  _s();\n\n  var black = (props.x + props.y) % 2 === 1;\n\n  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_5__[\"useDrop\"])({\n    accept: _constants__WEBPACK_IMPORTED_MODULE_4__[\"ItemTypes\"].ANIMAL,\n    drop: function drop() {\n      return props.moveAnimal(props.x, props.y);\n    },\n    collect: function collect(monitor) {\n      return {\n        isOver: !!monitor.isOver()\n      };\n    }\n  }),\n      _useDrop2 = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useDrop, 2),\n      isOver = _useDrop2[0].isOver,\n      drop = _useDrop2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    ref: drop,\n    style: {\n      position: 'relative',\n      width: '100%',\n      height: '100%'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Square__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      style: {\n        opacity: 0.3\n      },\n      black: black,\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), isOver && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        height: '100%',\n        width: '100%',\n        zIndex: 1,\n        opacity: 0.5,\n        backgroundColor: 'yellow'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(BoardSquare, \"9166pYLrZ/JzF75YDim8ZjfICTM=\", false, function () {\n  return [react_dnd__WEBPACK_IMPORTED_MODULE_5__[\"useDrop\"]];\n});\n\n_c = BoardSquare;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardSquare);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardSquare\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQm9hcmRTcXVhcmUudHN4PzExMzQiXSwibmFtZXMiOlsiQm9hcmRTcXVhcmUiLCJwcm9wcyIsImJsYWNrIiwieCIsInkiLCJ1c2VEcm9wIiwiYWNjZXB0IiwiSXRlbVR5cGVzIiwiQU5JTUFMIiwiZHJvcCIsIm1vdmVBbmltYWwiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJvcGFjaXR5IiwiY2hpbGRyZW4iLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBVUEsSUFBTUEsV0FBZ0QsR0FBRyxTQUFuREEsV0FBbUQsQ0FBQ0MsS0FBRCxFQUFnRDtBQUFBOztBQUN2RyxNQUFNQyxLQUFLLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDRSxDQUFOLEdBQVVGLEtBQUssQ0FBQ0csQ0FBakIsSUFBc0IsQ0FBdEIsS0FBNEIsQ0FBMUM7O0FBRHVHLGlCQUU1RUMseURBQU8sQ0FBQztBQUNqQ0MsVUFBTSxFQUFFQyxvREFBUyxDQUFDQyxNQURlO0FBRWpDQyxRQUFJLEVBQUU7QUFBQSxhQUFNUixLQUFLLENBQUNTLFVBQU4sQ0FBaUJULEtBQUssQ0FBQ0UsQ0FBdkIsRUFBMEJGLEtBQUssQ0FBQ0csQ0FBaEMsQ0FBTjtBQUFBLEtBRjJCO0FBR2pDTyxXQUFPLEVBQUUsaUJBQUFDLE9BQU87QUFBQSxhQUFLO0FBQ25CQyxjQUFNLEVBQUUsQ0FBQyxDQUFDRCxPQUFPLENBQUNDLE1BQVI7QUFEUyxPQUFMO0FBQUE7QUFIaUIsR0FBRCxDQUZxRTtBQUFBO0FBQUEsTUFFOUZBLE1BRjhGLGdCQUU5RkEsTUFGOEY7QUFBQSxNQUVwRkosSUFGb0Y7O0FBVXZHLHNCQUNFO0FBQ0ksT0FBRyxFQUFFQSxJQURUO0FBRUksU0FBSyxFQUFFO0FBQ1BLLGNBQVEsRUFBRSxVQURIO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLFlBQU0sRUFBRTtBQUhELEtBRlg7QUFBQSw0QkFRRSxxRUFBQywrQ0FBRDtBQUFRLFdBQUssRUFBRTtBQUFDQyxlQUFPLEVBQUU7QUFBVixPQUFmO0FBQStCLFdBQUssRUFBRWYsS0FBdEM7QUFBQSxnQkFBOENELEtBQUssQ0FBQ2lCO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixFQVNHTCxNQUFNLGlCQUNMO0FBQ0UsV0FBSyxFQUFFO0FBQ0xDLGdCQUFRLEVBQUUsVUFETDtBQUVMSyxXQUFHLEVBQUUsQ0FGQTtBQUdMQyxZQUFJLEVBQUUsQ0FIRDtBQUlMSixjQUFNLEVBQUUsTUFKSDtBQUtMRCxhQUFLLEVBQUUsTUFMRjtBQU1MTSxjQUFNLEVBQUUsQ0FOSDtBQU9MSixlQUFPLEVBQUUsR0FQSjtBQVFMSyx1QkFBZSxFQUFFO0FBUlo7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FuQ0Q7O0dBQU10QixXO1VBRXVCSyxpRDs7O0tBRnZCTCxXO0FBcUNTQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL0JvYXJkU3F1YXJlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgUHJvcHNXaXRoQ2hpbGRyZW4sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3F1YXJlIGZyb20gJy4vU3F1YXJlJ1xuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gJ3JlYWN0LWRuZCc7XG5cbmludGVyZmFjZSBCb2FyZFNxdWFyZVByb3BzIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIG1vdmVBbmltYWw6ICggdG9YOiBudW1iZXIsIHRvWTogbnVtYmVyICkgPT4gdm9pZDtcbn1cblxuXG5cbmNvbnN0IEJvYXJkU3F1YXJlOiBGdW5jdGlvbkNvbXBvbmVudDxCb2FyZFNxdWFyZVByb3BzPiA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48Qm9hcmRTcXVhcmVQcm9wcz4pID0+IHtcbiAgY29uc3QgYmxhY2sgPSAocHJvcHMueCArIHByb3BzLnkpICUgMiA9PT0gMTtcbiAgY29uc3QgW3sgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCh7XG4gICAgYWNjZXB0OiBJdGVtVHlwZXMuQU5JTUFMLFxuICAgIGRyb3A6ICgpID0+IHByb3BzLm1vdmVBbmltYWwocHJvcHMueCwgcHJvcHMueSksXG4gICAgY29sbGVjdDogbW9uaXRvciA9PiAoe1xuICAgICAgaXNPdmVyOiAhIW1vbml0b3IuaXNPdmVyKCksXG4gICAgfSksXG4gIH0pXG5cbiAgcmV0dXJuKCBcbiAgICA8ZGl2XG4gICAgICAgIHJlZj17ZHJvcH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB9fVxuICAgID5cbiAgICAgIDxTcXVhcmUgc3R5bGU9e3tvcGFjaXR5OiAwLjN9fSBibGFjaz17YmxhY2t9Pntwcm9wcy5jaGlsZHJlbn08L1NxdWFyZT5cbiAgICAgIHtpc092ZXIgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3llbGxvdycsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8L2Rpdj4gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2FyZFNxdWFyZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/BoardSquare.tsx\n");

/***/ })

})