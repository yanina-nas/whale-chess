webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/Animal.tsx":
/*!**************************!*\
  !*** ./pages/Animal.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./pages/constants.ts\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/Animal.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: \", \"px;\\n    height: \", \"px;\\n    svg {\\n        width: \", \"px;\\n        height: \", \"px;\\n        fill: \", \";\\n        path {\\n            stroke: \", \";;\\n        }\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar Animal = function Animal() {\n  _s();\n\n  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_6__[\"useDrag\"])({\n    item: {\n      type: _constants__WEBPACK_IMPORTED_MODULE_5__[\"ItemTypes\"].ANIMAL\n    },\n    collect: function collect(monitor) {\n      return {\n        isDragging: !!monitor.isDragging()\n      };\n    }\n  }),\n      _useDrag2 = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useDrag, 2),\n      isDragging = _useDrag2[0].isDragging,\n      drag = _useDrag2[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    draggable: true,\n    ref: drag,\n    style: {\n      opacity: isDragging ? 0.5 : 1,\n      cursor: 'move'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledIcon, {\n      draggable: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n        draggable: true,\n        src: '/whale.svg'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Animal, \"wuumsFp4qAni9XRJfRhQAZjuD/k=\", false, function () {\n  return [react_dnd__WEBPACK_IMPORTED_MODULE_6__[\"useDrag\"]];\n});\n\n_c = Animal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animal);\nvar StyledIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n}, function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n}, function (props) {\n  return props.color;\n}, function (props) {\n  return props.color;\n});\n_c2 = StyledIcon;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Animal\");\n$RefreshReg$(_c2, \"StyledIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQW5pbWFsLnRzeD9iYTIxIl0sIm5hbWVzIjpbIkFuaW1hbCIsInVzZURyYWciLCJpdGVtIiwidHlwZSIsIkl0ZW1UeXBlcyIsIkFOSU1BTCIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNEcmFnZ2luZyIsImRyYWciLCJvcGFjaXR5IiwiY3Vyc29yIiwiU3R5bGVkSWNvbiIsInN0eWxlZCIsImRpdiIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1BLE1BQXNDLEdBQUcsU0FBekNBLE1BQXlDLEdBQU07QUFBQTs7QUFBQSxpQkFFbEJDLHlEQUFPLENBQUM7QUFDbkNDLFFBQUksRUFBRTtBQUFFQyxVQUFJLEVBQUVDLG9EQUFTLENBQUNDO0FBQWxCLEtBRDZCO0FBRW5DQyxXQUFPLEVBQUUsaUJBQUNDLE9BQUQ7QUFBQSxhQUFjO0FBQ3JCQyxrQkFBVSxFQUFFLENBQUMsQ0FBQ0QsT0FBTyxDQUFDQyxVQUFSO0FBRE8sT0FBZDtBQUFBO0FBRjBCLEdBQUQsQ0FGVztBQUFBO0FBQUEsTUFFeENBLFVBRndDLGdCQUV4Q0EsVUFGd0M7QUFBQSxNQUUxQkMsSUFGMEI7O0FBU2pELHNCQUNJO0FBQUssYUFBUyxNQUFkO0FBQWUsT0FBRyxFQUFFQSxJQUFwQjtBQUNJLFNBQUssRUFBRTtBQUNIQyxhQUFPLEVBQUVGLFVBQVUsR0FBRyxHQUFILEdBQVMsQ0FEekI7QUFFSEcsWUFBTSxFQUFFO0FBRkwsS0FEWDtBQUFBLDJCQUtJLHFFQUFDLFVBQUQ7QUFBWSxlQUFTLE1BQXJCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxNQUFkO0FBQWUsV0FBRyxFQUFFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBV0gsQ0FwQkQ7O0dBQU1YLE07VUFFNkJDLGlEOzs7S0FGN0JELE07QUFzQlNBLHFFQUFmO0FBVUEsSUFBTVksVUFBVSxHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG9CQUNILFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQVY7QUFBQSxDQURGLEVBRUYsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsTUFBVjtBQUFBLENBRkgsRUFJQyxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FKTixFQUtFLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLE1BQVY7QUFBQSxDQUxQLEVBTUEsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csS0FBVjtBQUFBLENBTkwsRUFRTSxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxLQUFWO0FBQUEsQ0FSWCxDQUFoQjtNQUFNTixVIiwiZmlsZSI6Ii4vcGFnZXMvQW5pbWFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEl0ZW1UeXBlcyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdXNlRHJhZyB9IGZyb20gJ3JlYWN0LWRuZCdcblxuaW50ZXJmYWNlIEFuaW1hbFByb3Bze1xuICAgIGlzU29ydGVkPzogYm9vbGVhbjtcbiAgICB0eXBlOiBzdHJpbmc7XG59XG5cblxuY29uc3QgQW5pbWFsOiBGdW5jdGlvbkNvbXBvbmVudDxBbmltYWxQcm9wcz4gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZyh7XG4gICAgICAgIGl0ZW06IHsgdHlwZTogSXRlbVR5cGVzLkFOSU1BTCB9LFxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcbiAgICAgICAgICBpc0RyYWdnaW5nOiAhIW1vbml0b3IuaXNEcmFnZ2luZygpXG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGRyYWdnYWJsZSByZWY9e2RyYWd9IFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBpc0RyYWdnaW5nID8gMC41IDogMSxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPFN0eWxlZEljb24gZHJhZ2dhYmxlPlxuICAgICAgICAgICAgICAgIDxpbWcgZHJhZ2dhYmxlIHNyYz17Jy93aGFsZS5zdmcnfS8+XG4gICAgICAgICAgICA8L1N0eWxlZEljb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWFsO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGlzRnVsbFdpZHRoPzogYm9vbGVhbjtcbiAgICBoZWlnaHQ/OiBudW1iZXI7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbn1cbiAgXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmRpdjxQcm9wcz5gXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH1weDtcbiAgICAgICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH1weDtcbiAgICAgICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gICAgICAgIHBhdGgge1xuICAgICAgICAgICAgc3Ryb2tlOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTs7XG4gICAgICAgIH1cbiAgICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Animal.tsx\n");

/***/ })

})