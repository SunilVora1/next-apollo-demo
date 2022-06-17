"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/employee.js":
/*!***************************!*\
  !*** ./pages/employee.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _queries_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/query */ \"./queries/query.js\");\n\n\n\n\nconst Employee = ()=>{\n    const { loading , error , data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_queries_query__WEBPACK_IMPORTED_MODULE_3__.GET_EMPLOYEES_QUERY);\n    if (loading) return \"Loading...\";\n    if (error) return `Error! ${error.message}`;\n    if (data) {\n        console.log(data);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Hi\"\n    }, void 0, false, {\n        fileName: \"D:\\\\publiccissapient\\\\next-apollo-demo\\\\client\\\\pages\\\\employee.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Employee);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbXBsb3llZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ2dCO0FBQ2E7QUFFdEQsTUFBTUcsUUFBUSxHQUFHLElBQU07SUFDbkIsTUFBTSxFQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFLEdBQUdMLHdEQUFRLENBQUNDLCtEQUFtQixDQUFDO0lBRTlELElBQUlFLE9BQU8sRUFBRSxPQUFPLFlBQVksQ0FBQztJQUNqQyxJQUFJQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRUEsS0FBSyxDQUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUlELElBQUksRUFBRTtRQUNORSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7S0FDckI7SUFFRCxxQkFDSSw4REFBQ0ksS0FBRztrQkFBQyxJQUFFOzs7OztpQkFBTSxDQUNmO0NBQ0w7QUFFRCxpRUFBZVAsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi9wYWdlcy9lbXBsb3llZS5qcz82NmQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgR0VUX0VNUExPWUVFU19RVUVSWSB9IGZyb20gJy4uL3F1ZXJpZXMvcXVlcnknXHJcblxyXG5jb25zdCBFbXBsb3llZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9FTVBMT1lFRVNfUVVFUlkpO1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gJ0xvYWRpbmcuLi4nO1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gYEVycm9yISAke2Vycm9yLm1lc3NhZ2V9YDtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PkhpPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBsb3llZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUXVlcnkiLCJHRVRfRU1QTE9ZRUVTX1FVRVJZIiwiRW1wbG95ZWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/employee.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ClientSide)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee */ \"./pages/employee.js\");\n\n\n\nfunction ClientSide() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\publiccissapient\\\\next-apollo-demo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\publiccissapient\\\\next-apollo-demo\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\publiccissapient\\\\next-apollo-demo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"hi\"\n            }, void 0, false, {\n                fileName: \"D:\\\\publiccissapient\\\\next-apollo-demo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_employee__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\publiccissapient\\\\next-apollo-demo\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\publiccissapient\\\\next-apollo-demo\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNLO0FBRW5CLFNBQVNFLFVBQVUsR0FBRztJQUNuQyxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNILGtEQUFJOztrQ0FDSCw4REFBQ0ksT0FBSztrQ0FBQyxpQkFBZTs7Ozs7NEJBQVE7a0NBQzlCLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUNQLDhEQUFDSixLQUFHOzBCQUFDLElBQUU7Ozs7O29CQUFNOzBCQUNiLDhEQUFDRixpREFBUTs7OztvQkFBRzs7Ozs7O1lBQ1IsQ0FDTjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcG9sbG8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEVtcGxveWVlIGZyb20gXCIuL2VtcGxveWVlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGllbnRTaWRlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdj5oaTwvZGl2PlxyXG4gICAgICA8RW1wbG95ZWUgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkVtcGxveWVlIiwiQ2xpZW50U2lkZSIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./queries/query.js":
/*!**************************!*\
  !*** ./queries/query.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_EMPLOYEES_QUERY\": () => (/* binding */ GET_EMPLOYEES_QUERY)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_EMPLOYEES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\r\n    query employees {\r\n        employees {\r\n            name\r\n            address\r\n            email\r\n            phoneNumber\r\n        }\r\n    }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9xdWVyaWVzL3F1ZXJ5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUU3QixNQUFNQyxtQkFBbUIsR0FBR0QsK0NBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBvbGxvLy4vcXVlcmllcy9xdWVyeS5qcz9mNzMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9FTVBMT1lFRVNfUVVFUlkgPSBncWxgXHJcbiAgICBxdWVyeSBlbXBsb3llZXMge1xyXG4gICAgICAgIGVtcGxveWVlcyB7XHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICBwaG9uZU51bWJlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYCJdLCJuYW1lcyI6WyJncWwiLCJHRVRfRU1QTE9ZRUVTX1FVRVJZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./queries/query.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

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