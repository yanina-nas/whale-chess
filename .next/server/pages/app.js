module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/app.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Animal.tsx":
/*!**************************!*\
  !*** ./pages/Animal.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./pages/constants.ts\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"react-dnd\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/Animal.tsx\";\n\n\n\n\n\nconst Animal = () => {\n  const [{\n    isDragging\n  }, drag] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__[\"useDrag\"])({\n    item: {\n      type: _constants__WEBPACK_IMPORTED_MODULE_3__[\"ItemTypes\"].ANIMAL\n    },\n    collect: monitor => ({\n      isDragging: !!monitor.isDragging()\n    })\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    draggable: true,\n    ref: drag,\n    style: {\n      opacity: isDragging ? 0.5 : 1,\n      cursor: 'move'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledIcon, {\n      draggable: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        draggable: true,\n        src: '/whale.svg'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animal);\nconst StyledIcon = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n    width: ${props => props.width}px;\n    height: ${props => props.height}px;\n    svg {\n        width: ${props => props.width}px;\n        height: ${props => props.height}px;\n        fill: ${props => props.color};\n        path {\n            stroke: ${props => props.color};;\n        }\n    }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9BbmltYWwudHN4P2JhMjEiXSwibmFtZXMiOlsiQW5pbWFsIiwiaXNEcmFnZ2luZyIsImRyYWciLCJ1c2VEcmFnIiwiaXRlbSIsInR5cGUiLCJJdGVtVHlwZXMiLCJBTklNQUwiLCJjb2xsZWN0IiwibW9uaXRvciIsIm9wYWNpdHkiLCJjdXJzb3IiLCJTdHlsZWRJY29uIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxNQUFNQSxNQUFzQyxHQUFHLE1BQU07QUFFakQsUUFBTSxDQUFDO0FBQUVDO0FBQUYsR0FBRCxFQUFpQkMsSUFBakIsSUFBeUJDLHlEQUFPLENBQUM7QUFDbkNDLFFBQUksRUFBRTtBQUFFQyxVQUFJLEVBQUVDLG9EQUFTLENBQUNDO0FBQWxCLEtBRDZCO0FBRW5DQyxXQUFPLEVBQUdDLE9BQUQsS0FBYztBQUNyQlIsZ0JBQVUsRUFBRSxDQUFDLENBQUNRLE9BQU8sQ0FBQ1IsVUFBUjtBQURPLEtBQWQ7QUFGMEIsR0FBRCxDQUF0QztBQU9BLHNCQUNJO0FBQUssYUFBUyxNQUFkO0FBQWUsT0FBRyxFQUFFQyxJQUFwQjtBQUNJLFNBQUssRUFBRTtBQUNIUSxhQUFPLEVBQUVULFVBQVUsR0FBRyxHQUFILEdBQVMsQ0FEekI7QUFFSFUsWUFBTSxFQUFFO0FBRkwsS0FEWDtBQUFBLDJCQUtJLHFFQUFDLFVBQUQ7QUFBWSxlQUFTLE1BQXJCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxNQUFkO0FBQWUsV0FBRyxFQUFFO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBV0gsQ0FwQkQ7O0FBc0JlWCxxRUFBZjtBQVVBLE1BQU1ZLFVBQVUsR0FBR0Msc0RBQU0sQ0FBQ0MsR0FBVztBQUNyQyxhQUFhQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTTtBQUNsQyxjQUFjRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsTUFBTztBQUNwQztBQUNBLGlCQUFpQkYsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU07QUFDdEMsa0JBQWtCRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsTUFBTztBQUN4QyxnQkFBZ0JGLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxLQUFNO0FBQ3JDO0FBQ0Esc0JBQXNCSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0csS0FBTTtBQUMzQztBQUNBO0FBQ0EsQ0FYQSIsImZpbGUiOiIuL3BhZ2VzL0FuaW1hbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnXG5cbmludGVyZmFjZSBBbmltYWxQcm9wc3tcbiAgICBpc1NvcnRlZD86IGJvb2xlYW47XG4gICAgdHlwZTogc3RyaW5nO1xufVxuXG5cbmNvbnN0IEFuaW1hbDogRnVuY3Rpb25Db21wb25lbnQ8QW5pbWFsUHJvcHM+ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoe1xuICAgICAgICBpdGVtOiB7IHR5cGU6IEl0ZW1UeXBlcy5BTklNQUwgfSxcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XG4gICAgICAgICAgaXNEcmFnZ2luZzogISFtb25pdG9yLmlzRHJhZ2dpbmcoKVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBkcmFnZ2FibGUgcmVmPXtkcmFnfSBcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaXNEcmFnZ2luZyA/IDAuNSA6IDEsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxTdHlsZWRJY29uIGRyYWdnYWJsZT5cbiAgICAgICAgICAgICAgICA8aW1nIGRyYWdnYWJsZSBzcmM9eycvd2hhbGUuc3ZnJ30vPlxuICAgICAgICAgICAgPC9TdHlsZWRJY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hbDtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBpc0Z1bGxXaWR0aD86IGJvb2xlYW47XG4gICAgaGVpZ2h0PzogbnVtYmVyO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG59XG4gIFxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5kaXY8UHJvcHM+YFxuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gICAgICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gICAgICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xuICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgIHN0cm9rZTogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07O1xuICAgICAgICB9XG4gICAgfVxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Animal.tsx\n");

/***/ }),

/***/ "./pages/Board.tsx":
/*!*************************!*\
  !*** ./pages/Board.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BoardSquare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BoardSquare */ \"./pages/BoardSquare.tsx\");\n/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Animal */ \"./pages/Animal.tsx\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/Board.tsx\";\n\n\n\n\nconst background = '/pattern.jpg';\n\nfunction renderSquare(i, [animalX, animalY], moveAnimal) {\n  const x = i % 8;\n  const y = Math.floor(i / 8);\n  const black = (x + y) % 2 === 1;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    onClick: () => moveAnimal(x, y),\n    style: {\n      width: '12.5%',\n      minHeight: '12.5%'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_BoardSquare__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      x: x,\n      y: y,\n      moveAnimal: moveAnimal,\n      children: renderPiece(x, y, [animalX, animalY])\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }, i, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n;\n\nfunction renderPiece(x, y, [animalX, animalY]) {\n  const isAnimalHere = x === animalX && y === animalY;\n\n  if (isAnimalHere) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Animal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      type: 'type'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 12\n    }, this);\n  }\n}\n\nconst BoardElement = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default.a.div`\n    width: 1000px;\n    height: 1000px;\n    background-image: url(${background});\n    display: flex;\n    flex-wrap: wrap;\n    margin: 40px auto;\n`;\n\nconst Board = props => {\n  const squares = [];\n\n  for (let i = 0; i < 64; i++) {\n    squares.push(renderSquare(i, props.animalPosition, props.moveAnimal));\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BoardElement, {\n    children: squares\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Cb2FyZC50c3g/NWE2YSJdLCJuYW1lcyI6WyJiYWNrZ3JvdW5kIiwicmVuZGVyU3F1YXJlIiwiaSIsImFuaW1hbFgiLCJhbmltYWxZIiwibW92ZUFuaW1hbCIsIngiLCJ5IiwiTWF0aCIsImZsb29yIiwiYmxhY2siLCJ3aWR0aCIsIm1pbkhlaWdodCIsInJlbmRlclBpZWNlIiwiaXNBbmltYWxIZXJlIiwiQm9hcmRFbGVtZW50Iiwic3R5bGVkIiwiZGl2IiwiQm9hcmQiLCJwcm9wcyIsInNxdWFyZXMiLCJwdXNoIiwiYW5pbWFsUG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFlQSxNQUFNQSxVQUFVLEdBQUcsY0FBbkI7O0FBRUEsU0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUIsQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLENBQXpCLEVBQXVEQyxVQUF2RCxFQUF5RztBQUN2RyxRQUFNQyxDQUFDLEdBQUdKLENBQUMsR0FBRyxDQUFkO0FBQ0EsUUFBTUssQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsQ0FBQyxHQUFHLENBQWYsQ0FBVjtBQUNBLFFBQU1RLEtBQUssR0FBRyxDQUFDSixDQUFDLEdBQUdDLENBQUwsSUFBVSxDQUFWLEtBQWdCLENBQTlCO0FBRUEsc0JBQ0U7QUFBSyxXQUFPLEVBQUUsTUFBTUYsVUFBVSxDQUFFQyxDQUFGLEVBQUtDLENBQUwsQ0FBOUI7QUFBZ0QsU0FBSyxFQUFFO0FBQUVJLFdBQUssRUFBRSxPQUFUO0FBQWtCQyxlQUFTLEVBQUU7QUFBN0IsS0FBdkQ7QUFBQSwyQkFDRSxxRUFBQyxvREFBRDtBQUFhLE9BQUMsRUFBRU4sQ0FBaEI7QUFBbUIsT0FBQyxFQUFFQyxDQUF0QjtBQUF5QixnQkFBVSxFQUFFRixVQUFyQztBQUFBLGdCQUFtRFEsV0FBVyxDQUFFUCxDQUFGLEVBQUtDLENBQUwsRUFBUSxDQUFFSixPQUFGLEVBQVdDLE9BQVgsQ0FBUjtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsS0FBNkNGLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUFBOztBQUVELFNBQVNXLFdBQVQsQ0FBcUJQLENBQXJCLEVBQXdCQyxDQUF4QixFQUEyQixDQUFDSixPQUFELEVBQVVDLE9BQVYsQ0FBM0IsRUFBK0M7QUFDN0MsUUFBTVUsWUFBWSxHQUFJUixDQUFDLEtBQUtILE9BQU4sSUFBaUJJLENBQUMsS0FBS0gsT0FBN0M7O0FBQ0EsTUFBSVUsWUFBSixFQUFrQjtBQUNoQix3QkFBTyxxRUFBQywrQ0FBRDtBQUFRLFVBQUksRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEO0FBQ0Y7O0FBR0QsTUFBTUMsWUFBWSxHQUFHQyxzREFBTSxDQUFDQyxHQUFJO0FBQ2hDO0FBQ0E7QUFDQSw0QkFBNEJqQixVQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLENBUEE7O0FBU0EsTUFBTWtCLEtBQW9DLEdBQUlDLEtBQUQsSUFBMEM7QUFDckYsUUFBTUMsT0FBTyxHQUFHLEVBQWhCOztBQUNBLE9BQUssSUFBSWxCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JrQixXQUFPLENBQUNDLElBQVIsQ0FBYXBCLFlBQVksQ0FBQ0MsQ0FBRCxFQUFJaUIsS0FBSyxDQUFDRyxjQUFWLEVBQTBCSCxLQUFLLENBQUNkLFVBQWhDLENBQXpCO0FBQ0Q7O0FBRUQsc0JBQ0kscUVBQUMsWUFBRDtBQUFBLGNBQ0dlO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0QsQ0FYRDs7QUFhZUYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9Cb2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvYXJkU3F1YXJlIGZyb20gJy4vQm9hcmRTcXVhcmUnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCc7XG5cblxuaW50ZXJmYWNlIFBvaW50IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQm9hcmRQcm9wcyB7XG4gICAgYW5pbWFsUG9zaXRpb246IG51bWJlcltdO1xuICAgIG1vdmVBbmltYWw6ICggdG9YOiBudW1iZXIsIHRvWTogbnVtYmVyICkgPT4gdm9pZDtcbn1cblxuY29uc3QgYmFja2dyb3VuZCA9ICcvcGF0dGVybi5qcGcnXG5cbmZ1bmN0aW9uIHJlbmRlclNxdWFyZShpLCBbYW5pbWFsWCwgYW5pbWFsWV06IG51bWJlcltdLCBtb3ZlQW5pbWFsOiAoIHRvWDogbnVtYmVyLCB0b1k6IG51bWJlciApID0+IHZvaWQpIHtcbiAgY29uc3QgeCA9IGkgJSA4XG4gIGNvbnN0IHkgPSBNYXRoLmZsb29yKGkgLyA4KVxuICBjb25zdCBibGFjayA9ICh4ICsgeSkgJSAyID09PSAxXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG1vdmVBbmltYWwoIHgsIHkgKX0ga2V5PXtpfSBzdHlsZT17eyB3aWR0aDogJzEyLjUlJywgbWluSGVpZ2h0OiAnMTIuNSUnIH19PlxuICAgICAgPEJvYXJkU3F1YXJlIHg9e3h9IHk9e3l9IG1vdmVBbmltYWw9e21vdmVBbmltYWx9ID57cmVuZGVyUGllY2UoIHgsIHksIFsgYW5pbWFsWCwgYW5pbWFsWSBdICl9PC9Cb2FyZFNxdWFyZT5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZnVuY3Rpb24gcmVuZGVyUGllY2UoeCwgeSwgW2FuaW1hbFgsIGFuaW1hbFldKSB7XG4gIGNvbnN0IGlzQW5pbWFsSGVyZSA9ICh4ID09PSBhbmltYWxYICYmIHkgPT09IGFuaW1hbFkpXG4gIGlmIChpc0FuaW1hbEhlcmUpIHtcbiAgICByZXR1cm4gPEFuaW1hbCB0eXBlPXsndHlwZSd9IC8+O1xuICB9XG59XG5cblxuY29uc3QgQm9hcmRFbGVtZW50ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGhlaWdodDogMTAwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2JhY2tncm91bmR9KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbmA7XG5cbmNvbnN0IEJvYXJkOiBGdW5jdGlvbkNvbXBvbmVudDxCb2FyZFByb3BzPiA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48Qm9hcmRQcm9wcz4pID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuICAgIHNxdWFyZXMucHVzaChyZW5kZXJTcXVhcmUoaSwgcHJvcHMuYW5pbWFsUG9zaXRpb24sIHByb3BzLm1vdmVBbmltYWwpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAgIDxCb2FyZEVsZW1lbnQ+XG4gICAgICAgIHtzcXVhcmVzfVxuICAgICAgPC9Cb2FyZEVsZW1lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Board.tsx\n");

/***/ }),

/***/ "./pages/BoardSquare.tsx":
/*!*******************************!*\
  !*** ./pages/BoardSquare.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Square */ \"./pages/Square.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ \"./pages/constants.ts\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"react-dnd\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/BoardSquare.tsx\";\n\n\n\n\n\nconst BoardSquare = props => {\n  const black = (props.x + props.y) % 2 === 1;\n  const [{\n    isOver\n  }, drop] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_4__[\"useDrop\"])({\n    accept: _constants__WEBPACK_IMPORTED_MODULE_3__[\"ItemTypes\"].ANIMAL,\n    drop: () => props.moveAnimal(props.x, props.y),\n    collect: monitor => ({\n      isOver: !!monitor.isOver()\n    })\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    ref: drop,\n    style: {\n      position: 'relative',\n      width: '100%',\n      height: '100%'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Square__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      black: black,\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined), isOver && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        position: 'absolute',\n        top: 0,\n        left: 0,\n        height: '100%',\n        width: '100%',\n        zIndex: 1,\n        opacity: 0.5,\n        backgroundColor: 'yellow'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardSquare);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Cb2FyZFNxdWFyZS50c3g/MTEzNCJdLCJuYW1lcyI6WyJCb2FyZFNxdWFyZSIsInByb3BzIiwiYmxhY2siLCJ4IiwieSIsImlzT3ZlciIsImRyb3AiLCJ1c2VEcm9wIiwiYWNjZXB0IiwiSXRlbVR5cGVzIiwiQU5JTUFMIiwibW92ZUFuaW1hbCIsImNvbGxlY3QiLCJtb25pdG9yIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImNoaWxkcmVuIiwidG9wIiwibGVmdCIsInpJbmRleCIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsTUFBTUEsV0FBZ0QsR0FBSUMsS0FBRCxJQUFnRDtBQUN2RyxRQUFNQyxLQUFLLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDRSxDQUFOLEdBQVVGLEtBQUssQ0FBQ0csQ0FBakIsSUFBc0IsQ0FBdEIsS0FBNEIsQ0FBMUM7QUFDQSxRQUFNLENBQUM7QUFBRUM7QUFBRixHQUFELEVBQWFDLElBQWIsSUFBcUJDLHlEQUFPLENBQUM7QUFDakNDLFVBQU0sRUFBRUMsb0RBQVMsQ0FBQ0MsTUFEZTtBQUVqQ0osUUFBSSxFQUFFLE1BQU1MLEtBQUssQ0FBQ1UsVUFBTixDQUFpQlYsS0FBSyxDQUFDRSxDQUF2QixFQUEwQkYsS0FBSyxDQUFDRyxDQUFoQyxDQUZxQjtBQUdqQ1EsV0FBTyxFQUFFQyxPQUFPLEtBQUs7QUFDbkJSLFlBQU0sRUFBRSxDQUFDLENBQUNRLE9BQU8sQ0FBQ1IsTUFBUjtBQURTLEtBQUw7QUFIaUIsR0FBRCxDQUFsQztBQVFBLHNCQUNFO0FBQ0ksT0FBRyxFQUFFQyxJQURUO0FBRUksU0FBSyxFQUFFO0FBQ1BRLGNBQVEsRUFBRSxVQURIO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLFlBQU0sRUFBRTtBQUhELEtBRlg7QUFBQSw0QkFRRSxxRUFBQywrQ0FBRDtBQUFRLFdBQUssRUFBRWQsS0FBZjtBQUFBLGdCQUF1QkQsS0FBSyxDQUFDZ0I7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixFQVNHWixNQUFNLGlCQUNMO0FBQ0UsV0FBSyxFQUFFO0FBQ0xTLGdCQUFRLEVBQUUsVUFETDtBQUVMSSxXQUFHLEVBQUUsQ0FGQTtBQUdMQyxZQUFJLEVBQUUsQ0FIRDtBQUlMSCxjQUFNLEVBQUUsTUFKSDtBQUtMRCxhQUFLLEVBQUUsTUFMRjtBQU1MSyxjQUFNLEVBQUUsQ0FOSDtBQU9MQyxlQUFPLEVBQUUsR0FQSjtBQVFMQyx1QkFBZSxFQUFFO0FBUlo7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUJELENBbkNEOztBQXFDZXRCLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvQm9hcmRTcXVhcmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCBQcm9wc1dpdGhDaGlsZHJlbiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTcXVhcmUgZnJvbSAnLi9TcXVhcmUnXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSAncmVhY3QtZG5kJztcblxuaW50ZXJmYWNlIEJvYXJkU3F1YXJlUHJvcHMge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgbW92ZUFuaW1hbDogKCB0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIgKSA9PiB2b2lkO1xufVxuXG5cbmNvbnN0IEJvYXJkU3F1YXJlOiBGdW5jdGlvbkNvbXBvbmVudDxCb2FyZFNxdWFyZVByb3BzPiA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48Qm9hcmRTcXVhcmVQcm9wcz4pID0+IHtcbiAgY29uc3QgYmxhY2sgPSAocHJvcHMueCArIHByb3BzLnkpICUgMiA9PT0gMTtcbiAgY29uc3QgW3sgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCh7XG4gICAgYWNjZXB0OiBJdGVtVHlwZXMuQU5JTUFMLFxuICAgIGRyb3A6ICgpID0+IHByb3BzLm1vdmVBbmltYWwocHJvcHMueCwgcHJvcHMueSksXG4gICAgY29sbGVjdDogbW9uaXRvciA9PiAoe1xuICAgICAgaXNPdmVyOiAhIW1vbml0b3IuaXNPdmVyKCksXG4gICAgfSksXG4gIH0pXG5cbiAgcmV0dXJuKCBcbiAgICA8ZGl2XG4gICAgICAgIHJlZj17ZHJvcH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB9fVxuICAgID5cbiAgICAgIDxTcXVhcmUgYmxhY2s9e2JsYWNrfT57cHJvcHMuY2hpbGRyZW59PC9TcXVhcmU+XG4gICAgICB7aXNPdmVyICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd5ZWxsb3cnLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPC9kaXY+IClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmRTcXVhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/BoardSquare.tsx\n");

/***/ }),

/***/ "./pages/Square.tsx":
/*!**************************!*\
  !*** ./pages/Square.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/Square.tsx\";\n\n\nconst Square = props => {\n  const fill = props.black ? '#049584' : '#884430';\n  const stroke = props.black ? '#000059' : '#000019';\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    style: {\n      backgroundColor: fill,\n      color: stroke,\n      width: '100%',\n      height: '100%',\n      opacity: 0.6\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9TcXVhcmUudHN4P2EzNjkiXSwibmFtZXMiOlsiU3F1YXJlIiwicHJvcHMiLCJmaWxsIiwiYmxhY2siLCJzdHJva2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIndpZHRoIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBT0EsTUFBTUEsTUFBc0MsR0FBSUMsS0FBRCxJQUEyQztBQUN4RixRQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixHQUFjLFNBQWQsR0FBMEIsU0FBdkM7QUFDQSxRQUFNQyxNQUFNLEdBQUdILEtBQUssQ0FBQ0UsS0FBTixHQUFjLFNBQWQsR0FBMEIsU0FBekM7QUFFQSxzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUNSRSxxQkFBZSxFQUFFSCxJQURUO0FBRVJJLFdBQUssRUFBRUYsTUFGQztBQUdSRyxXQUFLLEVBQUUsTUFIQztBQUlSQyxZQUFNLEVBQUUsTUFKQTtBQUtSQyxhQUFPLEVBQUU7QUFMRCxLQUFaO0FBQUEsY0FRS1IsS0FBSyxDQUFDUztBQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBaEJEOztBQWtCZVYscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9TcXVhcmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFNxdWFyZVByb3BzIHtcbiAgICBibGFjazogYm9vbGVhbjtcbn1cblxuXG5jb25zdCBTcXVhcmU6IEZ1bmN0aW9uQ29tcG9uZW50PFNxdWFyZVByb3BzPiA9IChwcm9wczogUHJvcHNXaXRoQ2hpbGRyZW48U3F1YXJlUHJvcHM+KSA9PiB7XG4gIGNvbnN0IGZpbGwgPSBwcm9wcy5ibGFjayA/ICcjMDQ5NTg0JyA6ICcjODg0NDMwJztcbiAgY29uc3Qgc3Ryb2tlID0gcHJvcHMuYmxhY2sgPyAnIzAwMDA1OScgOiAnIzAwMDAxOSc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZpbGwsXG4gICAgICAgIGNvbG9yOiBzdHJva2UsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICAgIH19XG4gICAgPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Square.tsx\n");

/***/ }),

/***/ "./pages/app.tsx":
/*!***********************!*\
  !*** ./pages/app.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ \"./pages/Board.tsx\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"react-dnd\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ \"react-dnd-html5-backend\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/folly/dev/match_game/match_game/pages/app.tsx\";\n\n\n\n\n\nconst App = () => {\n  const {\n    0: position,\n    1: setPosition\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([0, 0]);\n\n  const moveAnimal = (toX, toY) => {\n    setPosition([toX, toY]);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_dnd__WEBPACK_IMPORTED_MODULE_3__[\"DndProvider\"], {\n    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__[\"HTML5Backend\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      animalPosition: position,\n      moveAnimal: moveAnimal\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcHAudHN4PzZiMTciXSwibmFtZXMiOlsiQXBwIiwicG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsInVzZVN0YXRlIiwibW92ZUFuaW1hbCIsInRvWCIsInRvWSIsIkhUTUw1QmFja2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsR0FBc0IsR0FBRyxNQUFNO0FBRWpDLFFBQU07QUFBQSxPQUFFQyxRQUFGO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxDQUFFLENBQUYsRUFBSyxDQUFMLENBQUQsQ0FBMUM7O0FBRUEsUUFBTUMsVUFBVSxHQUFHLENBQUNDLEdBQUQsRUFBY0MsR0FBZCxLQUE4QjtBQUM3Q0osZUFBVyxDQUFDLENBQUVHLEdBQUYsRUFBT0MsR0FBUCxDQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLHNCQUNJLHFFQUFDLHFEQUFEO0FBQWEsV0FBTyxFQUFFQyxvRUFBdEI7QUFBQSwyQkFDSSxxRUFBQyw4Q0FBRDtBQUNBLG9CQUFjLEVBQUVOLFFBRGhCO0FBRUEsZ0JBQVUsRUFBRUc7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBUUgsQ0FoQkQ7O0FBa0JlSixrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIFByb3BzV2l0aENoaWxkcmVuLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCb2FyZCBmcm9tICcuL0JvYXJkJztcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJztcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJztcblxuXG5cbmNvbnN0IEFwcDogRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbIHBvc2l0aW9uLCBzZXRQb3NpdGlvbiBdID0gdXNlU3RhdGUoWyAwLCAwIF0pO1xuXG4gICAgY29uc3QgbW92ZUFuaW1hbCA9ICh0b1g6IG51bWJlciwgdG9ZOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0UG9zaXRpb24oWyB0b1gsIHRvWSBdKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XG4gICAgICAgICAgICA8Qm9hcmRcbiAgICAgICAgICAgIGFuaW1hbFBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgIG1vdmVBbmltYWw9e21vdmVBbmltYWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0RuZFByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/app.tsx\n");

/***/ }),

/***/ "./pages/constants.ts":
/*!****************************!*\
  !*** ./pages/constants.ts ***!
  \****************************/
/*! exports provided: ItemTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ItemTypes\", function() { return ItemTypes; });\nconst ItemTypes = {\n  ANIMAL: 'animal'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb25zdGFudHMudHM/NWY2YSJdLCJuYW1lcyI6WyJJdGVtVHlwZXMiLCJBTklNQUwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxTQUFTLEdBQUc7QUFDckJDLFFBQU0sRUFBRTtBQURhLENBQWxCIiwiZmlsZSI6Ii4vcGFnZXMvY29uc3RhbnRzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEl0ZW1UeXBlcyA9IHtcbiAgICBBTklNQUw6ICdhbmltYWwnXG59O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/constants.ts\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dnd":
/*!****************************!*\
  !*** external "react-dnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dnd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kbmRcIj8xZmEwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRuZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dnd\n");

/***/ }),

/***/ "react-dnd-html5-backend":
/*!******************************************!*\
  !*** external "react-dnd-html5-backend" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dnd-html5-backend\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiPzkzM2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dnd-html5-backend\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });