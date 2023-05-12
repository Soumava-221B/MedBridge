"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/headerBarProducts.js":
/*!*****************************************!*\
  !*** ./components/headerBarProducts.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeaderBarProducts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apollo/client/cache */ \"./apollo/client/cache.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo/client/queries */ \"./apollo/client/queries.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HeaderBarProducts() {\n    var handlePopularProductsClick = function handlePopularProductsClick() {\n        (0,_apollo_client_cache__WEBPACK_IMPORTED_MODULE_2__.sortProductSectionVar)([\n            \"rating\",\n            \"DESC\"\n        ]);\n    };\n    var handleLowPriceProductsClick = function handleLowPriceProductsClick() {\n        (0,_apollo_client_cache__WEBPACK_IMPORTED_MODULE_2__.sortProductSectionVar)([\n            \"price\",\n            \"ASC\"\n        ]);\n    };\n    var handleHighPriceProductsClick = function handleHighPriceProductsClick() {\n        (0,_apollo_client_cache__WEBPACK_IMPORTED_MODULE_2__.sortProductSectionVar)([\n            \"price\",\n            \"DESC\"\n        ]);\n    };\n    _s();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_apollo_client_queries__WEBPACK_IMPORTED_MODULE_3__.SORT_PRODUCT_SECTION).data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-79270e75c8993d80\" + \" \" + \"header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-79270e75c8993d80\" + \" \" + \"sort-list\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        id: \"popular-products\",\n                        onClick: handlePopularProductsClick,\n                        className: \"jsx-79270e75c8993d80\" + \" \" + ((data.sortProductSection[0] === \"rating\" && data.sortProductSection[1] === \"DESC\" ? \"active\" : \"\") || \"\"),\n                        children: \"Frequent\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/MedBridge/components/headerBarProducts.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        id: \"low-price\",\n                        onClick: handleLowPriceProductsClick,\n                        className: \"jsx-79270e75c8993d80\" + \" \" + ((data.sortProductSection[0] === \"price\" && data.sortProductSection[1] === \"ASC\" ? \"active\" : \"\") || \"\"),\n                        children: \"Low price\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/MedBridge/components/headerBarProducts.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        id: \"high-price\",\n                        onClick: handleHighPriceProductsClick,\n                        className: \"jsx-79270e75c8993d80\" + \" \" + ((data.sortProductSection[0] === \"price\" && data.sortProductSection[1] === \"DESC\" ? \"active\" : \"\") || \"\"),\n                        children: \"High price\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/MedBridge/components/headerBarProducts.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/MedBridge/components/headerBarProducts.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"79270e75c8993d80\",\n                children: \".header.jsx-79270e75c8993d80{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;background:#fff;-webkit-box-shadow:0px 2px 5px rgba(0,0,0,.05);-moz-box-shadow:0px 2px 5px rgba(0,0,0,.05);box-shadow:0px 2px 5px rgba(0,0,0,.05);-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;margin-bottom:30px}.header.jsx-79270e75c8993d80 .sort-list.jsx-79270e75c8993d80{height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.header.jsx-79270e75c8993d80 .sort-list.jsx-79270e75c8993d80 a.jsx-79270e75c8993d80{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin-left:35px;padding-top:18px;padding-bottom:18px;text-decoration:none;font-weight:bold;font-size:13px;text-align:center;color:#b3b3b3}.header.jsx-79270e75c8993d80 .sort-list.jsx-79270e75c8993d80 a.active.jsx-79270e75c8993d80{color:#1875f0;border-bottom:2px solid#1875f0}.header.jsx-79270e75c8993d80 .sort-list.jsx-79270e75c8993d80 a.jsx-79270e75c8993d80:hover{cursor:pointer}@media(max-width:850px){.header.jsx-79270e75c8993d80{width:80vw;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.header.jsx-79270e75c8993d80 .sort-list.jsx-79270e75c8993d80{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:24px;padding-right:24px}.header.jsx-79270e75c8993d80 .sort-list.jsx-79270e75c8993d80 a.jsx-79270e75c8993d80{font-size:12px;margin-left:0px}}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/MedBridge/components/headerBarProducts.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(HeaderBarProducts, \"JtionF1PqWN50DPWu724eJIU2SM=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = HeaderBarProducts;\nvar _c;\n$RefreshReg$(_c, \"HeaderBarProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlckJhclByb2R1Y3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUErRDtBQUNyQjtBQUNzQjtBQUVqRCxTQUFTRyxpQkFBaUIsR0FBRztRQUdqQ0MsMEJBQTBCLEdBQW5DLFNBQVNBLDBCQUEwQixHQUFHO1FBQ3BDSiwyRUFBcUIsQ0FBQztZQUFDLFFBQVE7WUFBRSxNQUFNO1NBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7UUFDUUssMkJBQTJCLEdBQXBDLFNBQVNBLDJCQUEyQixHQUFHO1FBQ3JDTCwyRUFBcUIsQ0FBQztZQUFDLE9BQU87WUFBRSxLQUFLO1NBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7UUFDUU0sNEJBQTRCLEdBQXJDLFNBQVNBLDRCQUE0QixHQUFHO1FBQ3RDTiwyRUFBcUIsQ0FBQztZQUFDLE9BQU87WUFBRSxNQUFNO1NBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7O0lBVkQsSUFBTSxJQUFNLEdBQUtDLHdEQUFRLENBQUNDLHdFQUFvQixDQUFDLENBQXZDSyxJQUFJO0lBWVoscUJBQ0UsOERBQUNDLEtBQUc7a0RBQVcsUUFBUTs7MEJBQ3JCLDhEQUFDQSxLQUFHOzBEQUFXLFdBQVc7O2tDQUN4Qiw4REFBQ0MsR0FBQzt3QkFDQUMsRUFBRSxFQUFDLGtCQUFrQjt3QkFPckJDLE9BQU8sRUFBRVAsMEJBQTBCO21FQUxqQ0csQ0FBQUEsSUFBSSxDQUFDSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQ3ZDTCxJQUFJLENBQUNLLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sR0FDakMsUUFBUSxHQUNSLEVBQUU7a0NBR1QsVUFFRDs7Ozs7NEJBQUk7a0NBQ0osOERBQUNILEdBQUM7d0JBQ0FDLEVBQUUsRUFBQyxXQUFXO3dCQU9kQyxPQUFPLEVBQUVOLDJCQUEyQjttRUFMbENFLENBQUFBLElBQUksQ0FBQ0ssa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxJQUN0Q0wsSUFBSSxDQUFDSyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEdBQ2hDLFFBQVEsR0FDUixFQUFFO2tDQUdULFdBRUQ7Ozs7OzRCQUFJO2tDQUNKLDhEQUFDSCxHQUFDO3dCQUNBQyxFQUFFLEVBQUMsWUFBWTt3QkFPZkMsT0FBTyxFQUFFTCw0QkFBNEI7bUVBTG5DQyxDQUFBQSxJQUFJLENBQUNLLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sSUFDdENMLElBQUksQ0FBQ0ssa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxHQUNqQyxRQUFRLEdBQ1IsRUFBRTtrQ0FHVCxZQUVEOzs7Ozs0QkFBSTs7Ozs7O29CQUNBOzs7Ozs7Ozs7O1lBd0RGLENBQ047QUFDSixDQUFDO0dBOUd1QlQsaUJBQWlCOztRQUN0QkYsb0RBQVE7OztBQURIRSxLQUFBQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXJCYXJQcm9kdWN0cy5qcz9iODgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNvcnRQcm9kdWN0U2VjdGlvblZhciB9IGZyb20gJy4uL2Fwb2xsby9jbGllbnQvY2FjaGUnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBTT1JUX1BST0RVQ1RfU0VDVElPTiB9IGZyb20gJy4uL2Fwb2xsby9jbGllbnQvcXVlcmllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlckJhclByb2R1Y3RzKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KFNPUlRfUFJPRFVDVF9TRUNUSU9OKTtcblxuICBmdW5jdGlvbiBoYW5kbGVQb3B1bGFyUHJvZHVjdHNDbGljaygpIHtcbiAgICBzb3J0UHJvZHVjdFNlY3Rpb25WYXIoWydyYXRpbmcnLCAnREVTQyddKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVMb3dQcmljZVByb2R1Y3RzQ2xpY2soKSB7XG4gICAgc29ydFByb2R1Y3RTZWN0aW9uVmFyKFsncHJpY2UnLCAnQVNDJ10pO1xuICB9XG4gIGZ1bmN0aW9uIGhhbmRsZUhpZ2hQcmljZVByb2R1Y3RzQ2xpY2soKSB7XG4gICAgc29ydFByb2R1Y3RTZWN0aW9uVmFyKFsncHJpY2UnLCAnREVTQyddKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1saXN0XCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaWQ9XCJwb3B1bGFyLXByb2R1Y3RzXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZGF0YS5zb3J0UHJvZHVjdFNlY3Rpb25bMF0gPT09ICdyYXRpbmcnICYmXG4gICAgICAgICAgICBkYXRhLnNvcnRQcm9kdWN0U2VjdGlvblsxXSA9PT0gJ0RFU0MnXG4gICAgICAgICAgICAgID8gJ2FjdGl2ZSdcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQb3B1bGFyUHJvZHVjdHNDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIEZyZXF1ZW50XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGFcbiAgICAgICAgICBpZD1cImxvdy1wcmljZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgIGRhdGEuc29ydFByb2R1Y3RTZWN0aW9uWzBdID09PSAncHJpY2UnICYmXG4gICAgICAgICAgICBkYXRhLnNvcnRQcm9kdWN0U2VjdGlvblsxXSA9PT0gJ0FTQydcbiAgICAgICAgICAgICAgPyAnYWN0aXZlJ1xuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvd1ByaWNlUHJvZHVjdHNDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIExvdyBwcmljZVxuICAgICAgICA8L2E+XG4gICAgICAgIDxhXG4gICAgICAgICAgaWQ9XCJoaWdoLXByaWNlXCJcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgZGF0YS5zb3J0UHJvZHVjdFNlY3Rpb25bMF0gPT09ICdwcmljZScgJiZcbiAgICAgICAgICAgIGRhdGEuc29ydFByb2R1Y3RTZWN0aW9uWzFdID09PSAnREVTQydcbiAgICAgICAgICAgICAgPyAnYWN0aXZlJ1xuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUhpZ2hQcmljZVByb2R1Y3RzQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBIaWdoIHByaWNlXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIgLnNvcnQtbGlzdCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIgLnNvcnQtbGlzdCBhIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjYjNiM2IzO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIgLnNvcnQtbGlzdCBhLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMxODc1ZjA7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxODc1ZjA7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlciAuc29ydC1saXN0IGE6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIC5zb3J0LWxpc3Qge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciAuc29ydC1saXN0IGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzb3J0UHJvZHVjdFNlY3Rpb25WYXIiLCJ1c2VRdWVyeSIsIlNPUlRfUFJPRFVDVF9TRUNUSU9OIiwiSGVhZGVyQmFyUHJvZHVjdHMiLCJoYW5kbGVQb3B1bGFyUHJvZHVjdHNDbGljayIsImhhbmRsZUxvd1ByaWNlUHJvZHVjdHNDbGljayIsImhhbmRsZUhpZ2hQcmljZVByb2R1Y3RzQ2xpY2siLCJkYXRhIiwiZGl2IiwiYSIsImlkIiwib25DbGljayIsInNvcnRQcm9kdWN0U2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/headerBarProducts.js\n"));

/***/ })

});