"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// frontend/pages/todo.js\n\n\nconst TodoList = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const domain = \"http://rest-api-0hhj.onrender.com/\";\n    const domain = \"http://localhost:3001/\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTodos = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(domain, \"todo/list\"), {\n                    withCredentials: true\n                });\n                console.log(response.data);\n                setTodos(response.data);\n            // console.log(todos)\n            } catch (err) {\n                console.error(\"タスクの取得に失敗しました:\", err);\n                setError(err instanceof Error ? err.message : \"不明なエラーが発生しました\");\n            }\n        };\n        fetchTodos();\n    }, []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"エラーが発生しました: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yoshiokakazuteru/Documents/nest.js /front/src/app/page.tsx\",\n            lineNumber: 36,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"タスクリスト\"\n            }, void 0, false, {\n                fileName: \"/Users/yoshiokakazuteru/Documents/nest.js /front/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: todo.title\n                    }, todo.id, false, {\n                        fileName: \"/Users/yoshiokakazuteru/Documents/nest.js /front/src/app/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/yoshiokakazuteru/Documents/nest.js /front/src/app/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yoshiokakazuteru/Documents/nest.js /front/src/app/page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoList, \"dt52EhpTEzDvogNYoxRHpnHq6TY=\");\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c;\n$RefreshReg$(_c, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLHlCQUF5QjtBQUVDO0FBQ2tCO0FBTzVDLE1BQU1HLFdBQVc7O0lBQ2YsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFTLEVBQUU7SUFDN0MsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFnQjtJQUVsRCx1REFBdUQ7SUFDdkQsTUFBTU0sU0FBUztJQUVmUCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLGFBQWE7WUFDakIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1WLDZDQUFLQSxDQUFDVyxHQUFHLENBQVMsR0FBVSxPQUFQSCxRQUFPLGNBQVk7b0JBQUVJLGlCQUFpQjtnQkFBSztnQkFDdkZDLFFBQVFDLEdBQUcsQ0FBQ0osU0FBU0ssSUFBSTtnQkFDekJWLFNBQVNLLFNBQVNLLElBQUk7WUFDdEIscUJBQXFCO1lBQ3ZCLEVBQUUsT0FBT0MsS0FBSztnQkFDWkgsUUFBUVAsS0FBSyxDQUFDLGtCQUFrQlU7Z0JBQ2hDVCxTQUFTUyxlQUFlQyxRQUFRRCxJQUFJRSxPQUFPLEdBQUc7WUFDaEQ7UUFDRjtRQUVBVDtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlILE9BQU87UUFDVCxxQkFBTyw4REFBQ2E7O2dCQUFJO2dCQUFhYjs7Ozs7OztJQUMzQjtJQUVBLHFCQUNFLDhEQUFDYTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNFakIsTUFBTWtCLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1QsOERBQUNDO2tDQUFrQkQsS0FBS0UsS0FBSzt1QkFBcEJGLEtBQUtHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUI7R0F2Q012QjtLQUFBQTtBQXlDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbi8vIGZyb250ZW5kL3BhZ2VzL3RvZG8uanNcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBUb2RvIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgVG9kb0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGU8VG9kb1tdPihbXSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gY29uc3QgZG9tYWluID0gXCJodHRwOi8vcmVzdC1hcGktMGhoai5vbnJlbmRlci5jb20vXCI7XG4gIGNvbnN0IGRvbWFpbiA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL1wiO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hUb2RvcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0PFRvZG9bXT4oYCR7ZG9tYWlufXRvZG8vbGlzdGAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBzZXRUb2RvcyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9kb3MpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign44K/44K544Kv44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfOicsIGVycik7XG4gICAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAn5LiN5piO44Gq44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoVG9kb3MoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8ZGl2PuOCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzoge2Vycm9yfTwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT7jgr/jgrnjgq/jg6rjgrnjg4g8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3RvZG8uaWR9Pnt0b2RvLnRpdGxlfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgICB7Lyoge3RvZG9zLnBhcmFtLmlkfVxuICAgICAgICB7LyogPGxpPnt0b2Rvcy5pZH08L2xpPiAqL31cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVG9kb0xpc3QiLCJ0b2RvcyIsInNldFRvZG9zIiwiZXJyb3IiLCJzZXRFcnJvciIsImRvbWFpbiIsImZldGNoVG9kb3MiLCJyZXNwb25zZSIsImdldCIsIndpdGhDcmVkZW50aWFscyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGl2IiwiaDEiLCJ1bCIsIm1hcCIsInRvZG8iLCJsaSIsInRpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});