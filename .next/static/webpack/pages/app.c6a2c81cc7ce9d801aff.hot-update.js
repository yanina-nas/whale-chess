webpackHotUpdate_N_E("pages/app",{

/***/ "./pages/TargetBox.tsx":
/*!*****************************!*\
  !*** ./pages/TargetBox.tsx ***!
  \*****************************/
/*! exports provided: StatefulTargetBox, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StatefulTargetBox\", function() { return StatefulTargetBox; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/esm/index.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ \"./pages/common.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/TargetBox.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar style = {\n  border: '1px solid gray',\n  height: '15rem',\n  width: '15rem',\n  padding: '2rem',\n  textAlign: 'center'\n};\n\nvar TargetBox = function TargetBox(_ref) {\n  _s();\n\n  var onDrop = _ref.onDrop,\n      lastDroppedColor = _ref.lastDroppedColor;\n\n  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__[\"useDrop\"])({\n    accept: [_common__WEBPACK_IMPORTED_MODULE_5__[\"Colors\"].YELLOW, _common__WEBPACK_IMPORTED_MODULE_5__[\"Colors\"].BLUE, _common__WEBPACK_IMPORTED_MODULE_5__[\"ItemTypes\"].ANIMAL],\n    drop: function drop(item) {\n      onDrop(item.type);\n      return undefined;\n    },\n    collect: function collect(monitor) {\n      return {\n        isOver: monitor.isOver(),\n        canDrop: monitor.canDrop(),\n        draggingColor: monitor.getItemType()\n      };\n    }\n  }),\n      _useDrop2 = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_useDrop, 2),\n      _useDrop2$ = _useDrop2[0],\n      isOver = _useDrop2$.isOver,\n      draggingColor = _useDrop2$.draggingColor,\n      canDrop = _useDrop2$.canDrop,\n      drop = _useDrop2[1];\n\n  var opacity = isOver ? 1 : 0.7;\n  var backgroundColor = '#fff';\n\n  switch (draggingColor) {\n    case _common__WEBPACK_IMPORTED_MODULE_5__[\"Colors\"].BLUE:\n      backgroundColor = 'lightblue';\n      break;\n\n    case _common__WEBPACK_IMPORTED_MODULE_5__[\"Colors\"].YELLOW:\n      backgroundColor = 'lightgoldenrodyellow';\n      break;\n\n    default:\n      break;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    ref: drop,\n    style: _objectSpread(_objectSpread({}, style), {}, {\n      backgroundColor: backgroundColor,\n      opacity: opacity\n    }),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Drop here.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), !canDrop && lastDroppedColor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Last dropped: \", lastDroppedColor]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 40\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TargetBox, \"tSGrAq+Mu4P21+gZJQvy+cgaVQc=\", false, function () {\n  return [react_dnd__WEBPACK_IMPORTED_MODULE_4__[\"useDrop\"]];\n});\n\n_c = TargetBox;\nvar StatefulTargetBox = function StatefulTargetBox(props) {\n  _s2();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      lastDroppedColor = _useState[0],\n      setLastDroppedColor = _useState[1];\n\n  var handleDrop = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useCallback\"])(function (color) {\n    return setLastDroppedColor(color);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TargetBox, _objectSpread(_objectSpread({}, props), {}, {\n    lastDroppedColor: lastDroppedColor,\n    onDrop: handleDrop\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 67,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(StatefulTargetBox, \"ZmnI/Tu/jouCfaKpcMr0Olv2PbM=\");\n\n_c2 = StatefulTargetBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TargetBox);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TargetBox\");\n$RefreshReg$(_c2, \"StatefulTargetBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVGFyZ2V0Qm94LnRzeD9jNjBmIl0sIm5hbWVzIjpbInN0eWxlIiwiYm9yZGVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiVGFyZ2V0Qm94Iiwib25Ecm9wIiwibGFzdERyb3BwZWRDb2xvciIsInVzZURyb3AiLCJhY2NlcHQiLCJDb2xvcnMiLCJZRUxMT1ciLCJCTFVFIiwiSXRlbVR5cGVzIiwiQU5JTUFMIiwiZHJvcCIsIml0ZW0iLCJ0eXBlIiwidW5kZWZpbmVkIiwiY29sbGVjdCIsIm1vbml0b3IiLCJpc092ZXIiLCJjYW5Ecm9wIiwiZHJhZ2dpbmdDb2xvciIsImdldEl0ZW1UeXBlIiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsIlN0YXRlZnVsVGFyZ2V0Qm94IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInNldExhc3REcm9wcGVkQ29sb3IiLCJoYW5kbGVEcm9wIiwidXNlQ2FsbGJhY2siLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxLQUEwQixHQUFHO0FBQ2pDQyxRQUFNLEVBQUUsZ0JBRHlCO0FBRWpDQyxRQUFNLEVBQUUsT0FGeUI7QUFHakNDLE9BQUssRUFBRSxPQUgwQjtBQUlqQ0MsU0FBTyxFQUFFLE1BSndCO0FBS2pDQyxXQUFTLEVBQUU7QUFMc0IsQ0FBbkM7O0FBYUEsSUFBTUMsU0FBbUMsR0FBRyxTQUF0Q0EsU0FBc0MsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsTUFBK0IsUUFBL0JBLE1BQStCO0FBQUEsTUFBdkJDLGdCQUF1QixRQUF2QkEsZ0JBQXVCOztBQUFBLGlCQUN6QkMseURBQU8sQ0FBQztBQUN6REMsVUFBTSxFQUFFLENBQUNDLDhDQUFNLENBQUNDLE1BQVIsRUFBZ0JELDhDQUFNLENBQUNFLElBQXZCLEVBQTZCQyxpREFBUyxDQUFDQyxNQUF2QyxDQURpRDtBQUV6REMsUUFGeUQsZ0JBRXBEQyxJQUZvRCxFQUVwQztBQUNuQlYsWUFBTSxDQUFDVSxJQUFJLENBQUNDLElBQU4sQ0FBTjtBQUNBLGFBQU9DLFNBQVA7QUFDRCxLQUx3RDtBQU16REMsV0FBTyxFQUFFLGlCQUFDQyxPQUFEO0FBQUEsYUFBYztBQUNyQkMsY0FBTSxFQUFFRCxPQUFPLENBQUNDLE1BQVIsRUFEYTtBQUVyQkMsZUFBTyxFQUFFRixPQUFPLENBQUNFLE9BQVIsRUFGWTtBQUdyQkMscUJBQWEsRUFBRUgsT0FBTyxDQUFDSSxXQUFSO0FBSE0sT0FBZDtBQUFBO0FBTmdELEdBQUQsQ0FEa0I7QUFBQTtBQUFBO0FBQUEsTUFDbkVILE1BRG1FLGNBQ25FQSxNQURtRTtBQUFBLE1BQzNERSxhQUQyRCxjQUMzREEsYUFEMkQ7QUFBQSxNQUM1Q0QsT0FENEMsY0FDNUNBLE9BRDRDO0FBQUEsTUFDakNQLElBRGlDOztBQWM1RSxNQUFNVSxPQUFPLEdBQUdKLE1BQU0sR0FBRyxDQUFILEdBQU8sR0FBN0I7QUFDQSxNQUFJSyxlQUFlLEdBQUcsTUFBdEI7O0FBQ0EsVUFBUUgsYUFBUjtBQUNFLFNBQUtiLDhDQUFNLENBQUNFLElBQVo7QUFDRWMscUJBQWUsR0FBRyxXQUFsQjtBQUNBOztBQUNGLFNBQUtoQiw4Q0FBTSxDQUFDQyxNQUFaO0FBQ0VlLHFCQUFlLEdBQUcsc0JBQWxCO0FBQ0E7O0FBQ0Y7QUFDRTtBQVJKOztBQVdBLHNCQUNFO0FBQUssT0FBRyxFQUFFWCxJQUFWO0FBQWdCLFNBQUssa0NBQU9oQixLQUFQO0FBQWMyQixxQkFBZSxFQUFmQSxlQUFkO0FBQStCRCxhQUFPLEVBQVBBO0FBQS9CLE1BQXJCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUdHLENBQUNILE9BQUQsSUFBWWYsZ0JBQVosaUJBQWdDO0FBQUEsbUNBQWtCQSxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FsQ0Q7O0dBQU1GLFM7VUFDK0NHLGlEOzs7S0FEL0NILFM7QUF1Q0MsSUFBTXNCLGlCQUEyQixHQUFHLFNBQTlCQSxpQkFBOEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0pDLHNEQUFRLENBQWdCLElBQWhCLENBREo7QUFBQSxNQUM3Q3RCLGdCQUQ2QztBQUFBLE1BQzNCdUIsbUJBRDJCOztBQUVwRCxNQUFNQyxVQUFVLEdBQUdDLHlEQUFXLENBQzVCLFVBQUNDLEtBQUQ7QUFBQSxXQUFtQkgsbUJBQW1CLENBQUNHLEtBQUQsQ0FBdEM7QUFBQSxHQUQ0QixFQUU1QixFQUY0QixDQUE5QjtBQUtBLHNCQUNFLHFFQUFDLFNBQUQsa0NBQ01MLEtBRE47QUFFRSxvQkFBZ0IsRUFBRXJCLGdCQUZwQjtBQUdFLFVBQU0sRUFBRXdCO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FkTTs7SUFBTUosaUI7O01BQUFBLGlCO0FBZ0JFdEIsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9UYXJnZXRCb3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCB7IENvbG9ycywgQW5pbWFsVHlwZXMsIERyYWdJdGVtLCBJdGVtVHlwZXMgfSBmcm9tICcuL2NvbW1vbidcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwnXG5cblxuY29uc3Qgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcbiAgaGVpZ2h0OiAnMTVyZW0nLFxuICB3aWR0aDogJzE1cmVtJyxcbiAgcGFkZGluZzogJzJyZW0nLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhcmdldEJveFByb3BzIHtcbiAgb25Ecm9wOiAoaXRlbTogYW55KSA9PiB2b2lkXG4gIGxhc3REcm9wcGVkQ29sb3I/OiBzdHJpbmdcbn1cblxuY29uc3QgVGFyZ2V0Qm94OiBSZWFjdC5GQzxUYXJnZXRCb3hQcm9wcz4gPSAoeyBvbkRyb3AsIGxhc3REcm9wcGVkQ29sb3IgfSkgPT4ge1xuICBjb25zdCBbeyBpc092ZXIsIGRyYWdnaW5nQ29sb3IsIGNhbkRyb3AgfSwgZHJvcF0gPSB1c2VEcm9wKHtcbiAgICBhY2NlcHQ6IFtDb2xvcnMuWUVMTE9XLCBDb2xvcnMuQkxVRSwgSXRlbVR5cGVzLkFOSU1BTF0sXG4gICAgZHJvcChpdGVtOiBEcmFnSXRlbSkge1xuICAgICAgb25Ecm9wKGl0ZW0udHlwZSlcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xuICAgICAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxuICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXG4gICAgICBkcmFnZ2luZ0NvbG9yOiBtb25pdG9yLmdldEl0ZW1UeXBlKCkgYXMgc3RyaW5nLFxuICAgIH0pLFxuICB9KVxuXG4gIGNvbnN0IG9wYWNpdHkgPSBpc092ZXIgPyAxIDogMC43XG4gIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZidcbiAgc3dpdGNoIChkcmFnZ2luZ0NvbG9yKSB7XG4gICAgY2FzZSBDb2xvcnMuQkxVRTpcbiAgICAgIGJhY2tncm91bmRDb2xvciA9ICdsaWdodGJsdWUnXG4gICAgICBicmVha1xuICAgIGNhc2UgQ29sb3JzLllFTExPVzpcbiAgICAgIGJhY2tncm91bmRDb2xvciA9ICdsaWdodGdvbGRlbnJvZHllbGxvdydcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtkcm9wfSBzdHlsZT17eyAuLi5zdHlsZSwgYmFja2dyb3VuZENvbG9yLCBvcGFjaXR5IH19PlxuICAgICAgPHA+RHJvcCBoZXJlLjwvcD5cblxuICAgICAgeyFjYW5Ecm9wICYmIGxhc3REcm9wcGVkQ29sb3IgJiYgPHA+TGFzdCBkcm9wcGVkOiB7bGFzdERyb3BwZWRDb2xvcn08L3A+fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVmdWxUYXJnZXRCb3hTdGF0ZSB7XG4gIGxhc3REcm9wcGVkQ29sb3I6IHN0cmluZyB8IG51bGxcbn1cbmV4cG9ydCBjb25zdCBTdGF0ZWZ1bFRhcmdldEJveDogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2xhc3REcm9wcGVkQ29sb3IsIHNldExhc3REcm9wcGVkQ29sb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgaGFuZGxlRHJvcCA9IHVzZUNhbGxiYWNrKFxuICAgIChjb2xvcjogc3RyaW5nKSA9PiBzZXRMYXN0RHJvcHBlZENvbG9yKGNvbG9yKSxcbiAgICBbXSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPFRhcmdldEJveFxuICAgICAgey4uLnByb3BzfVxuICAgICAgbGFzdERyb3BwZWRDb2xvcj17bGFzdERyb3BwZWRDb2xvciBhcyBzdHJpbmd9XG4gICAgICBvbkRyb3A9e2hhbmRsZURyb3B9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXJnZXRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/TargetBox.tsx\n");

/***/ }),

/***/ "./pages/common.ts":
/*!*************************!*\
  !*** ./pages/common.ts ***!
  \*************************/
/*! exports provided: Colors, AnimalTypes, ItemTypes, SVGIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Colors\", function() { return Colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimalTypes\", function() { return AnimalTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemTypes\", function() { return ItemTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SVGIcon\", function() { return SVGIcon; });\n/* harmony import */ var _Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_folly_dev_match_game_match_game_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      width: \", \"px;\\n      height: \", \"px;\\n      svg {\\n          width: \", \"px;\\n          height: \", \"px;\\n          fill: \", \";\\n          path {\\n              stroke: \", \";;\\n          }\\n      }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Colors = {\n  YELLOW: 'yellow',\n  BLUE: 'blue'\n};\nvar AnimalTypes = {\n  OCEAN: 'ocean',\n  FOREST: 'forest'\n};\n;\nvar ItemTypes = {\n  ANIMAL: 'animal'\n};\n;\nvar SVGIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject(), function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n}, function (props) {\n  return props.width;\n}, function (props) {\n  return props.height;\n}, function (props) {\n  return props.color;\n}, function (props) {\n  return props.color;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tbW9uLnRzPzVjN2UiXSwibmFtZXMiOlsiQ29sb3JzIiwiWUVMTE9XIiwiQkxVRSIsIkFuaW1hbFR5cGVzIiwiT0NFQU4iLCJGT1JFU1QiLCJJdGVtVHlwZXMiLCJBTklNQUwiLCJTVkdJY29uIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxNQUFNLEdBQUc7QUFDbEJDLFFBQU0sRUFBRSxRQURVO0FBRWxCQyxNQUFJLEVBQUU7QUFGWSxDQUFmO0FBS0EsSUFBTUMsV0FBVyxHQUFJO0FBQ3hCQyxPQUFLLEVBQUUsT0FEaUI7QUFFeEJDLFFBQU0sRUFBRTtBQUZnQixDQUFyQjtBQU9OO0FBRU0sSUFBTUMsU0FBUyxHQUFHO0FBQ3JCQyxRQUFNLEVBQUU7QUFEYSxDQUFsQjtBQU9OO0FBVVEsSUFBTUMsT0FBTyxHQUFHQyx1REFBTSxDQUFDQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQVY7QUFBQSxDQURFLEVBRU4sVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsTUFBVjtBQUFBLENBRkMsRUFJSCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFWO0FBQUEsQ0FKRixFQUtGLFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLE1BQVY7QUFBQSxDQUxILEVBTUosVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csS0FBVjtBQUFBLENBTkQsRUFRRSxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxLQUFWO0FBQUEsQ0FSUCxDQUFiIiwiZmlsZSI6Ii4vcGFnZXMvY29tbW9uLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBDb2xvcnMgPSB7XG4gICAgWUVMTE9XOiAneWVsbG93JyxcbiAgICBCTFVFOiAnYmx1ZScsXG59O1xuXG5leHBvcnQgY29uc3QgQW5pbWFsVHlwZXMgPSAge1xuICAgIE9DRUFOOiAnb2NlYW4nLFxuICAgIEZPUkVTVDogJ2ZvcmVzdCcsXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdJdGVtIHtcbiAgICB0eXBlOiBzdHJpbmdcbn07XG5cbmV4cG9ydCBjb25zdCBJdGVtVHlwZXMgPSB7XG4gICAgQU5JTUFMOiAnYW5pbWFsJ1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1ZHSWNvblByb3BzIHtcbiAgICBpc0Z1bGxXaWR0aD86IGJvb2xlYW47XG4gICAgaGVpZ2h0PzogbnVtYmVyO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIH1cbiAgXG4gIGV4cG9ydCBjb25zdCBTVkdJY29uID0gc3R5bGVkLmRpdjxTVkdJY29uUHJvcHM+YFxuICAgICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gICAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICAgICAgc3ZnIHtcbiAgICAgICAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH1weDtcbiAgICAgICAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaGVpZ2h0fXB4O1xuICAgICAgICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICBzdHJva2U6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9OztcbiAgICAgICAgICB9XG4gICAgICB9XG4gIGA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/common.ts\n");

/***/ })

})