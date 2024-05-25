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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/filter.tsx":
/*!****************************!*\
  !*** ./context/filter.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProvideFilter: () => (/* binding */ ProvideFilter),\n/* harmony export */   filterContext: () => (/* binding */ filterContext),\n/* harmony export */   useFilter: () => (/* binding */ useFilter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst filterContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    searchText: \"\",\n    postLanguage: \"All\"\n});\nconst ProvideFilter = ({ children })=>{\n    const value = useProvideFilter();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(filterContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\context\\\\filter.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\nconst useFilter = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(filterContext);\nconst useProvideFilter = ()=>{\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [postLanguage, setPostLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const onSearch = (val)=>{\n        setSearchText(val);\n    };\n    const onLanguageChange = (val)=>{\n        setPostLanguage(val);\n    };\n    return {\n        searchText,\n        postLanguage,\n        onSearch,\n        onLanguageChange\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2ZpbHRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUU7QUFXNUQsTUFBTUksOEJBQWdCSCxvREFBYUEsQ0FBb0I7SUFDNURJLFlBQVk7SUFDWkMsY0FBYztBQUNoQixHQUFHO0FBRUksTUFBTUMsZ0JBQWdCLENBQUMsRUFBRUMsUUFBUSxFQUFpQztJQUN2RSxNQUFNQyxRQUFRQztJQUNkLHFCQUNFLDhEQUFDTixjQUFjTyxRQUFRO1FBQUNGLE9BQU9BO2tCQUFRRDs7Ozs7O0FBRTNDLEVBQUU7QUFFSyxNQUFNSSxZQUFZLElBQU1WLGlEQUFVQSxDQUFDRSxlQUFlO0FBRXpELE1BQU1NLG1CQUFtQjtJQUN2QixNQUFNLENBQUNMLFlBQVlRLGNBQWMsR0FBR1YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDRyxjQUFjUSxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQWU7SUFFL0QsTUFBTVksV0FBVyxDQUFDQztRQUNoQkgsY0FBY0c7SUFDaEI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0Q7UUFDeEJGLGdCQUFnQkU7SUFDbEI7SUFFQSxPQUFPO1FBQ0xYO1FBQ0FDO1FBQ0FTO1FBQ0FFO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbGlibWFsaWsvLi9jb250ZXh0L2ZpbHRlci50c3g/NDVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEZpbHRlckluaXRpYWxUeXBlIHtcbiAgc2VhcmNoVGV4dDogc3RyaW5nO1xuICBwb3N0TGFuZ3VhZ2U6IExhbmd1YWdlVHlwZTtcbiAgb25TZWFyY2g/OiAodmFsOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uTGFuZ3VhZ2VDaGFuZ2U/OiAodmFsOiBMYW5ndWFnZVR5cGUpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIExhbmd1YWdlVHlwZSA9IFwiQWxsXCIgfCBcIkVuZ2xpc2hcIiB8IFwiTXlhbm1hclwiO1xuXG5leHBvcnQgY29uc3QgZmlsdGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8RmlsdGVySW5pdGlhbFR5cGU+KHtcbiAgc2VhcmNoVGV4dDogXCJcIixcbiAgcG9zdExhbmd1YWdlOiBcIkFsbFwiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBQcm92aWRlRmlsdGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgdmFsdWUgPSB1c2VQcm92aWRlRmlsdGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGZpbHRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9maWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZpbHRlciA9ICgpID0+IHVzZUNvbnRleHQoZmlsdGVyQ29udGV4dCk7XG5cbmNvbnN0IHVzZVByb3ZpZGVGaWx0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcG9zdExhbmd1YWdlLCBzZXRQb3N0TGFuZ3VhZ2VdID0gdXNlU3RhdGU8TGFuZ3VhZ2VUeXBlPihcIkFsbFwiKTtcblxuICBjb25zdCBvblNlYXJjaCA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgIHNldFNlYXJjaFRleHQodmFsKTtcbiAgfTtcblxuICBjb25zdCBvbkxhbmd1YWdlQ2hhbmdlID0gKHZhbDogTGFuZ3VhZ2VUeXBlKSA9PiB7XG4gICAgc2V0UG9zdExhbmd1YWdlKHZhbCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZWFyY2hUZXh0LFxuICAgIHBvc3RMYW5ndWFnZSxcbiAgICBvblNlYXJjaCxcbiAgICBvbkxhbmd1YWdlQ2hhbmdlLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJmaWx0ZXJDb250ZXh0Iiwic2VhcmNoVGV4dCIsInBvc3RMYW5ndWFnZSIsIlByb3ZpZGVGaWx0ZXIiLCJjaGlsZHJlbiIsInZhbHVlIiwidXNlUHJvdmlkZUZpbHRlciIsIlByb3ZpZGVyIiwidXNlRmlsdGVyIiwic2V0U2VhcmNoVGV4dCIsInNldFBvc3RMYW5ndWFnZSIsIm9uU2VhcmNoIiwidmFsIiwib25MYW5ndWFnZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/filter.tsx\n");

/***/ }),

/***/ "./context/section.tsx":
/*!*****************************!*\
  !*** ./context/section.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProvideSection: () => (/* binding */ ProvideSection),\n/* harmony export */   sectionContext: () => (/* binding */ sectionContext),\n/* harmony export */   useSection: () => (/* binding */ useSection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst sectionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    currentSection: \"\"\n});\nconst ProvideSection = ({ children })=>{\n    const value = useProvideSection();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(sectionContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\context\\\\section.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\nconst useSection = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(sectionContext);\nconst useProvideSection = ()=>{\n    const [currentSection, setCurrentSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onSectionChange = (val)=>{\n        setCurrentSection(val);\n    };\n    return {\n        currentSection,\n        onSectionChange\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3NlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1FO0FBTzVELE1BQU1JLCtCQUFpQkgsb0RBQWFBLENBQXFCO0lBQzlESSxnQkFBZ0I7QUFDbEIsR0FBRztBQUVJLE1BQU1DLGlCQUFpQixDQUFDLEVBQUVDLFFBQVEsRUFBaUM7SUFDeEUsTUFBTUMsUUFBUUM7SUFDZCxxQkFDRSw4REFBQ0wsZUFBZU0sUUFBUTtRQUFDRixPQUFPQTtrQkFBUUQ7Ozs7OztBQUU1QyxFQUFFO0FBRUssTUFBTUksYUFBYSxJQUFNVCxpREFBVUEsQ0FBQ0UsZ0JBQWdCO0FBRTNELE1BQU1LLG9CQUFvQjtJQUN4QixNQUFNLENBQUNKLGdCQUFnQk8sa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFDO0lBRXJELE1BQU1VLGtCQUFrQixDQUFDQztRQUN2QkYsa0JBQWtCRTtJQUNwQjtJQUVBLE9BQU87UUFDTFQ7UUFDQVE7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFsaWJtYWxpay8uL2NvbnRleHQvc2VjdGlvbi50c3g/OTMxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFNlY3Rpb25Jbml0aWFsVHlwZSB7XG4gIGN1cnJlbnRTZWN0aW9uOiBzdHJpbmc7XG4gIG9uU2VjdGlvbkNoYW5nZT86ICh2YWw6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IHNlY3Rpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxTZWN0aW9uSW5pdGlhbFR5cGU+KHtcbiAgY3VycmVudFNlY3Rpb246IFwiXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IFByb3ZpZGVTZWN0aW9uID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgdmFsdWUgPSB1c2VQcm92aWRlU2VjdGlvbigpO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L3NlY3Rpb25Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVNlY3Rpb24gPSAoKSA9PiB1c2VDb250ZXh0KHNlY3Rpb25Db250ZXh0KTtcblxuY29uc3QgdXNlUHJvdmlkZVNlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50U2VjdGlvbiwgc2V0Q3VycmVudFNlY3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb25TZWN0aW9uQ2hhbmdlID0gKHZhbDogc3RyaW5nKSA9PiB7XG4gICAgc2V0Q3VycmVudFNlY3Rpb24odmFsKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGN1cnJlbnRTZWN0aW9uLFxuICAgIG9uU2VjdGlvbkNoYW5nZSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwic2VjdGlvbkNvbnRleHQiLCJjdXJyZW50U2VjdGlvbiIsIlByb3ZpZGVTZWN0aW9uIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsInVzZVByb3ZpZGVTZWN0aW9uIiwiUHJvdmlkZXIiLCJ1c2VTZWN0aW9uIiwic2V0Q3VycmVudFNlY3Rpb24iLCJvblNlY3Rpb25DaGFuZ2UiLCJ2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/section.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var context_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/filter */ \"./context/filter.tsx\");\n/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/section */ \"./context/section.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        document.addEventListener(\"mousemove\", (e)=>{\n            const mouseX = e.clientX;\n            const mouseY = e.clientY;\n            gsap__WEBPACK_IMPORTED_MODULE_7___default().to(cursorRef.current, {\n                x: mouseX,\n                y: mouseY,\n                opacity: 1,\n                delay: 0\n            });\n        });\n        const hideCursor = ()=>{\n            gsap__WEBPACK_IMPORTED_MODULE_7___default().to(cursorRef.current, {\n                opacity: 0\n            });\n        };\n        const showCursor = ()=>{\n            gsap__WEBPACK_IMPORTED_MODULE_7___default().to(cursorRef.current, {\n                opacity: 1\n            });\n        };\n        document.addEventListener(\"mouseleave\", hideCursor);\n        document.addEventListener(\"mousedown\", hideCursor);\n        document.addEventListener(\"mouseup\", showCursor);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {\n                id: \"google-analytics\",\n                strategy: \"lazyOnload\",\n                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\pages\\\\_app.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_8___default()), {\n                id: \"google-analytics-script\",\n                strategy: \"lazyOnload\",\n                children: `\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {\n        page_path: window.location.pathname,\n        });\n    `\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\pages\\\\_app.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\pages\\\\_app.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\pages\\\\_app.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: cursorRef,\n                className: \"hidden lg:block w-12 h-12 opacity-0 pointer-events-none rounded-full border-2 border-marrsgreen dark:border-carrigreen z-[9999] fixed -translate-x-1/2 -translate-y-1/2\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\pages\\\\_app.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                attribute: \"class\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_filter__WEBPACK_IMPORTED_MODULE_4__.ProvideFilter, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_section__WEBPACK_IMPORTED_MODULE_5__.ProvideSection, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\pages\\\\_app.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\pages\\\\_app.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\pages\\\\_app.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\talib-malik-gui\\\\pages\\\\_app.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYjtBQUVlO0FBQ0c7QUFDRTtBQUVsQjtBQUVQO0FBQ1M7QUFFakMsU0FBU1EsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxNQUFNQyxZQUFZViw2Q0FBTUEsQ0FBQztJQUV6QkQsZ0RBQVNBLENBQUM7UUFDUlksU0FBU0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDQztZQUN0QyxNQUFNQyxTQUFTRCxFQUFFRSxPQUFPO1lBQ3hCLE1BQU1DLFNBQVNILEVBQUVJLE9BQU87WUFDeEJaLDhDQUFPLENBQUNLLFVBQVVTLE9BQU8sRUFBRTtnQkFDekJDLEdBQUdOO2dCQUNITyxHQUFHTDtnQkFDSE0sU0FBUztnQkFDVEMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxNQUFNQyxhQUFhO1lBQ2pCbkIsOENBQU8sQ0FBQ0ssVUFBVVMsT0FBTyxFQUFFO2dCQUFFRyxTQUFTO1lBQUU7UUFDMUM7UUFFQSxNQUFNRyxhQUFhO1lBQ2pCcEIsOENBQU8sQ0FBQ0ssVUFBVVMsT0FBTyxFQUFFO2dCQUFFRyxTQUFTO1lBQUU7UUFDMUM7UUFFQVgsU0FBU0MsZ0JBQWdCLENBQUMsY0FBY1k7UUFDeENiLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFZO1FBQ3ZDYixTQUFTQyxnQkFBZ0IsQ0FBQyxXQUFXYTtJQUN2QyxHQUFHLEVBQUU7SUFDTCxxQkFDRTs7MEJBQ0UsOERBQUNuQixvREFBTUE7Z0JBQ0xvQixJQUFHO2dCQUNIQyxVQUFTO2dCQUNUQyxLQUFLLENBQUMsNENBQTRDLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsNEJBQTRCLENBQUMsQ0FBQzs7Ozs7OzBCQUdoRyw4REFBQ3pCLG9EQUFNQTtnQkFBQ29CLElBQUc7Z0JBQTBCQyxVQUFTOzBCQUMzQyxDQUFDOzs7O3dCQUljLEVBQUVFLFFBQVFDLEdBQUcsQ0FBQ0MsNEJBQTRCLENBQUM7OztJQUcvRCxDQUFDOzs7Ozs7MEJBRUMsOERBQUM5QixrREFBSUE7MEJBQ0gsNEVBQUMrQjtvQkFBS0MsTUFBSztvQkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDQztnQkFDQ0MsS0FBSzFCO2dCQUNMMkIsV0FBVTs7Ozs7OzBCQUVaLDhEQUFDbkMsc0RBQWFBO2dCQUFDb0MsV0FBVTswQkFDdkIsNEVBQUNuQyx5REFBYUE7OEJBQ1osNEVBQUNDLDJEQUFjQTtrQ0FDYiw0RUFBQ0k7NEJBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbGlibWFsaWsvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyBQcm92aWRlRmlsdGVyIH0gZnJvbSBcImNvbnRleHQvZmlsdGVyXCI7XG5pbXBvcnQgeyBQcm92aWRlU2VjdGlvbiB9IGZyb20gXCJjb250ZXh0L3NlY3Rpb25cIjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IGN1cnNvclJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IG1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICAgIGNvbnN0IG1vdXNlWSA9IGUuY2xpZW50WTtcbiAgICAgIGdzYXAudG8oY3Vyc29yUmVmLmN1cnJlbnQsIHtcbiAgICAgICAgeDogbW91c2VYLFxuICAgICAgICB5OiBtb3VzZVksXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoaWRlQ3Vyc29yID0gKCkgPT4ge1xuICAgICAgZ3NhcC50byhjdXJzb3JSZWYuY3VycmVudCwgeyBvcGFjaXR5OiAwIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzaG93Q3Vyc29yID0gKCkgPT4ge1xuICAgICAgZ3NhcC50byhjdXJzb3JSZWYuY3VycmVudCwgeyBvcGFjaXR5OiAxIH0pO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoaWRlQ3Vyc29yKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhpZGVDdXJzb3IpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHNob3dDdXJzb3IpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTY3JpcHRcbiAgICAgICAgaWQ9XCJnb29nbGUtYW5hbHl0aWNzXCJcbiAgICAgICAgc3RyYXRlZ3k9XCJsYXp5T25sb2FkXCJcbiAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1N9YH1cbiAgICAgIC8+XG5cbiAgICAgIDxTY3JpcHQgaWQ9XCJnb29nbGUtYW5hbHl0aWNzLXNjcmlwdFwiIHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiPlxuICAgICAgICB7YFxuICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICBndGFnKCdjb25maWcnLCAnJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTfScsIHtcbiAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIH0pO1xuICAgIGB9XG4gICAgICA8L1NjcmlwdD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2N1cnNvclJlZn1cbiAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIHctMTIgaC0xMiBvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZSByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLW1hcnJzZ3JlZW4gZGFyazpib3JkZXItY2FycmlncmVlbiB6LVs5OTk5XSBmaXhlZCAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzJcIlxuICAgICAgLz5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCI+XG4gICAgICAgIDxQcm92aWRlRmlsdGVyPlxuICAgICAgICAgIDxQcm92aWRlU2VjdGlvbj5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L1Byb3ZpZGVTZWN0aW9uPlxuICAgICAgICA8L1Byb3ZpZGVGaWx0ZXI+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIkhlYWQiLCJUaGVtZVByb3ZpZGVyIiwiUHJvdmlkZUZpbHRlciIsIlByb3ZpZGVTZWN0aW9uIiwiZ3NhcCIsIlNjcmlwdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3Vyc29yUmVmIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1vdXNlWCIsImNsaWVudFgiLCJtb3VzZVkiLCJjbGllbnRZIiwidG8iLCJjdXJyZW50IiwieCIsInkiLCJvcGFjaXR5IiwiZGVsYXkiLCJoaWRlQ3Vyc29yIiwic2hvd0N1cnNvciIsImlkIiwic3RyYXRlZ3kiLCJzcmMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDUyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImF0dHJpYnV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();