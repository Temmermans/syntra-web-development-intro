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
exports.id = "pages/post/[id]";
exports.ids = ["pages/post/[id]"];
exports.modules = {

/***/ "./src/pages/post/[id].tsx":
/*!*********************************!*\
  !*** ./src/pages/post/[id].tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Post(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: props.post.name\n    }, void 0, false, {\n        fileName: \"/Users/brechtarnou/Desktop/Syntra/syntra-web-development-intro/React/nextjs/first-app/src/pages/post/[id].tsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\nasync function getStaticPaths() {\n    return {\n        paths: [\n            {\n                params: {\n                    id: \"post-1\"\n                }\n            },\n            {\n                params: {\n                    id: \"post-2\"\n                }\n            }\n        ],\n        fallback: false\n    };\n}\n// `getStaticPaths` requires using `getStaticProps`\nasync function getStaticProps(context) {\n    console.log(context);\n    return {\n        // Passed to the page component as props\n        props: {\n            post: {\n                name: \"Post 1\"\n            }\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUUxQixTQUFTQyxLQUFLQyxLQUFpQyxFQUFFO0lBQy9DLHFCQUFPLDhEQUFDQztrQkFBS0QsTUFBTUUsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7QUFDOUI7QUFFQSxpRUFBZUosSUFBSUEsRUFBQztBQUViLGVBQWVLLGlCQUFpQjtJQUNyQyxPQUFPO1FBQ0xDLE9BQU87WUFBQztnQkFBRUMsUUFBUTtvQkFBRUMsSUFBSTtnQkFBUztZQUFFO1lBQUc7Z0JBQUVELFFBQVE7b0JBQUVDLElBQUk7Z0JBQVM7WUFBRTtTQUFFO1FBQ25FQyxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDO0FBRUQsbURBQW1EO0FBQzVDLGVBQWVDLGVBQWVDLE9BQVksRUFBRTtJQUNqREMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE9BQU87UUFDTCx3Q0FBd0M7UUFDeENWLE9BQU87WUFBRUUsTUFBTTtnQkFBRUMsTUFBTTtZQUFTO1FBQUU7SUFDcEM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyc3QtYXBwLy4vc3JjL3BhZ2VzL3Bvc3QvW2lkXS50c3g/ODU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFBvc3QocHJvcHM6IHsgcG9zdDogeyBuYW1lOiBzdHJpbmcgfSB9KSB7XG4gIHJldHVybiA8ZGl2Pntwcm9wcy5wb3N0Lm5hbWV9PC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IFt7IHBhcmFtczogeyBpZDogXCJwb3N0LTFcIiB9IH0sIHsgcGFyYW1zOiB7IGlkOiBcInBvc3QtMlwiIH0gfV0sXG4gICAgZmFsbGJhY2s6IGZhbHNlLCAvLyBjYW4gYWxzbyBiZSB0cnVlIG9yICdibG9ja2luZydcbiAgfTtcbn1cblxuLy8gYGdldFN0YXRpY1BhdGhzYCByZXF1aXJlcyB1c2luZyBgZ2V0U3RhdGljUHJvcHNgXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dDogYW55KSB7XG4gIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICByZXR1cm4ge1xuICAgIC8vIFBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICBwcm9wczogeyBwb3N0OiB7IG5hbWU6IFwiUG9zdCAxXCIgfSB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUG9zdCIsInByb3BzIiwiZGl2IiwicG9zdCIsIm5hbWUiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwicGFyYW1zIiwiaWQiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/[id].tsx\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/post/[id].tsx"));
module.exports = __webpack_exports__;

})();