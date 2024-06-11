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

/***/ "./sections/ProjectSection.tsx":
/*!*************************************!*\
  !*** ./sections/ProjectSection.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-rough-notation */ \"./node_modules/react-rough-notation/dist/module.es.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ProjectCard */ \"./components/ProjectCard.tsx\");\n/* harmony import */ var context_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/section */ \"./context/section.tsx\");\n/* harmony import */ var hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useOnScreen */ \"./hooks/useOnScreen.ts\");\n/* harmony import */ var hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hooks/useScrollActive */ \"./hooks/useScrollActive.ts\");\n/* harmony import */ var public_projects_digital_garden_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! public/projects/digital-garden.png */ \"./public/projects/digital-garden.png\");\n/* harmony import */ var public_projects_integrated_terminal_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! public/projects/integrated-terminal.png */ \"./public/projects/integrated-terminal.png\");\n/* harmony import */ var public_projects_ibm_certification_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! public/projects/ibm-certification.jpg */ \"./public/projects/ibm-certification.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst ProjectSection = ()=>{\n    _s();\n    const { theme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const isOnScreen = (0,hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(elementRef);\n    // Set active link for project section\n    const projectSection = (0,hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(sectionRef);\n    const { onSectionChange } = (0,context_section__WEBPACK_IMPORTED_MODULE_6__.useSection)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        projectSection && onSectionChange(\"projects\");\n    }, [\n        onSectionChange,\n        projectSection\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: sectionRef,\n        id: \"projects\",\n        className: \"section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"project-title text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_rough_notation__WEBPACK_IMPORTED_MODULE_3__.RoughNotation, {\n                    type: \"underline\",\n                    color: \"\".concat(theme === \"light\" ? \"rgb(0, 122, 122)\" : \"rgb(5 206 145)\"),\n                    strokeWidth: 2,\n                    order: 1,\n                    show: isOnScreen,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"section-heading\",\n                        children: \"Featured Projects & Certifications\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"project-desc text-center block mb-4\",\n                ref: elementRef,\n                children: [\n                    \"“Talk is cheap. Show me the code”? I got you. \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 55\n                    }, undefined),\n                    \"Here are some of my projects you shouldn't misss\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: projects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        index: index,\n                        project: project\n                    }, project.title, false, {\n                        fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"others text-center mb-16\",\n                children: [\n                    \"Other projects can be explored in\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/clinerds\",\n                        className: \"font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap\",\n                        children: \"my github profile\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectSection, \"8Heb86wCV0Fy38KlS/PhJmjK3z0=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme,\n        hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        hooks_useScrollActive__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        context_section__WEBPACK_IMPORTED_MODULE_6__.useSection\n    ];\n});\n_c = ProjectSection;\nconst projects = [\n    // {\n    //   title: \"AstroPaper\",\n    //   type: \"Frontend\",\n    //   image: (\n    //     <Image\n    //       src={astroPaper}\n    //       sizes=\"100vw\"\n    //       fill\n    //       alt=\"AstroPaper\"\n    //       className=\"transition-transform duration-500 hover:scale-110 object-cover\"\n    //     />\n    //   ),\n    //   desc: \"A minimal, accessible and SEO-friendly Astro blog theme. One of the most starred blog templates built with Astro.\",\n    //   tags: [\"Astro\", \"TypeScript\", \"React\", \"TailwindCSS\"],\n    //   liveUrl: \"https://astro-paper.pages.dev/\",\n    //   codeUrl: \"https://github.com/satnaing/astro-paper\",\n    //   bgColor: \"bg-[#9FD0E3]\",\n    //   githubApi: \"https://api.github.com/repos/satnaing/astro-paper\",\n    // },\n    {\n        title: \"Obsidian Digital Garden\",\n        type: \"Full-Stack\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            // src={terminalPortfolio}\n            src: public_projects_digital_garden_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            sizes: \"100vw\",\n            fill: true,\n            alt: \"Obsidian Digital Garden\",\n            className: \"transition-transform duration-500 hover:scale-110 object-cover\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined),\n        desc: \"My Personal Digital Garden Connected With Obsidian For Efficient Notes Management \",\n        tags: [\n            \"Obsidian\",\n            \"Notes\",\n            \"Digital Garden\"\n        ],\n        liveUrl: \"https://samael-digital-garden.vercel.app/\",\n        codeUrl: \"https://github.com/clinerds/samael-learning-live-issue\",\n        bgColor: \"bg-[#B4BEE0]\",\n        githubApi: \"https://api.github.com/repos/clinerds/samael-learning-live-issue\"\n    },\n    {\n        title: \"Terminal Portfolio (Under Development)\",\n        type: \"Frontend\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            // src={terminalPortfolio}\n            src: public_projects_integrated_terminal_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n            sizes: \"100vw\",\n            fill: true,\n            alt: \"Terminal Portfolio\",\n            className: \"transition-transform duration-500 hover:scale-110 object-cover\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, undefined),\n        desc: \"My portfolio website in terminal version developing with React and TypeScript. \",\n        tags: [\n            \"React\",\n            \"TypeScript\",\n            \"Styled-Components\"\n        ],\n        liveUrl: \"https://github.com/clinerds/\",\n        codeUrl: \"https://github.com/clinerds/\",\n        bgColor: \"bg-[#B4BEE0]\",\n        githubApi: \"\"\n    },\n    {\n        title: \"IBM Generative AI Development \",\n        type: \"Frontend\",\n        image: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            // src={terminalPortfolio}\n            src: public_projects_ibm_certification_jpg__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n            sizes: \"100vw\",\n            // fill\n            alt: \"Terminal Portfolio\",\n            className: \"transition-transform duration-500 hover:scale-110 object-cover\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dlapp\\\\OneDrive\\\\Desktop\\\\Main-Portfolio\\\\mohd-talib-gui\\\\sections\\\\ProjectSection.tsx\",\n            lineNumber: 136,\n            columnNumber: 7\n        }, undefined),\n        desc: \"Building Generative AI Applications With Python \",\n        tags: [\n            \"Generative AI\",\n            \"TypeScript\",\n            \"Styled-Components\"\n        ],\n        liveUrl: \"https://github.com/clinerds/\",\n        codeUrl: \"https://github.com/clinerds/\",\n        bgColor: \"bg-[#B4BEE0]\",\n        githubApi: \"\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFYixPQUFPO1FBQ1BaLE1BQU07UUFDTmUscUJBQ0UsOERBQUN2QyxtREFBS0E7WUFDSiwwQkFBMEI7WUFDMUJ3QyxLQUFLN0IsOEVBQWdCQTtZQUNyQjhCLE9BQU07WUFDTixPQUFPO1lBQ1BFLEtBQUk7WUFDSnJCLFdBQVU7Ozs7OztRQUdkc0IsTUFBTTtRQUNOQyxNQUFNO1lBQUM7WUFBaUI7WUFBYztTQUFvQjtRQUMxREMsU0FBUztRQUNUQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsV0FBVztJQUNiO0NBNkVEO0FBRUQsK0RBQWVyQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL1Byb2plY3RTZWN0aW9uLnRzeD8xOWNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdWdoTm90YXRpb24gfSBmcm9tIFwicmVhY3Qtcm91Z2gtbm90YXRpb25cIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5cbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VTZWN0aW9uIH0gZnJvbSBcImNvbnRleHQvc2VjdGlvblwiO1xuaW1wb3J0IHVzZU9uU2NyZWVuIGZyb20gXCJob29rcy91c2VPblNjcmVlblwiO1xuaW1wb3J0IHVzZVNjcm9sbEFjdGl2ZSBmcm9tIFwiaG9va3MvdXNlU2Nyb2xsQWN0aXZlXCI7XG5cbmltcG9ydCB0ZXJtaW5hbFBvcnRmb2xpbyBmcm9tIFwicHVibGljL3Byb2plY3RzL3Rlcm1pbmFsLXBvcnRmb2xpby53ZWJwXCI7XG5pbXBvcnQgZGlnaXRhbEdhcmRlbSBmcm9tIFwicHVibGljL3Byb2plY3RzL2RpZ2l0YWwtZ2FyZGVuLnBuZ1wiO1xuaW1wb3J0IGludGVncmF0ZWRUZXJtaW5hbCBmcm9tIFwicHVibGljL3Byb2plY3RzL2ludGVncmF0ZWQtdGVybWluYWwucG5nXCJcbmltcG9ydCBoYXJ1RmFzaGlvbiBmcm9tIFwicHVibGljL3Byb2plY3RzL2hhcnUtZmFzaGlvbi53ZWJwXCI7XG5pbXBvcnQgaGFydUFwaSBmcm9tIFwicHVibGljL3Byb2plY3RzL2hhcnUtYXBpLndlYnBcIjtcbmltcG9ydCBhc3Ryb1BhcGVyIGZyb20gXCJwdWJsaWMvcHJvamVjdHMvYXN0cm8tcGFwZXIud2VicFwiO1xuaW1wb3J0IG5leHRCb29rc3RvcmUgZnJvbSBcInB1YmxpYy9wcm9qZWN0cy9uZXh0LWJvb2tzdG9yZS53ZWJwXCI7XG5pbXBvcnQgc2hhZGNuQWRtaW4gZnJvbSBcInB1YmxpYy9wcm9qZWN0cy9zaGFkY24tYWRtaW4ud2VicFwiO1xuaW1wb3J0IElCTUNlcnRpZmljYXRpb24gZnJvbSBcInB1YmxpYy9wcm9qZWN0cy9pYm0tY2VydGlmaWNhdGlvbi5qcGdcIlxuXG5jb25zdCBQcm9qZWN0U2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XG5cbiAgY29uc3Qgc2VjdGlvblJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGlzT25TY3JlZW4gPSB1c2VPblNjcmVlbihlbGVtZW50UmVmKTtcblxuICAvLyBTZXQgYWN0aXZlIGxpbmsgZm9yIHByb2plY3Qgc2VjdGlvblxuICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IHVzZVNjcm9sbEFjdGl2ZShzZWN0aW9uUmVmKTtcbiAgY29uc3QgeyBvblNlY3Rpb25DaGFuZ2UgfSA9IHVzZVNlY3Rpb24oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9qZWN0U2VjdGlvbiAmJiBvblNlY3Rpb25DaGFuZ2UhKFwicHJvamVjdHNcIik7XG4gIH0sIFtvblNlY3Rpb25DaGFuZ2UsIHByb2plY3RTZWN0aW9uXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiByZWY9e3NlY3Rpb25SZWZ9IGlkPVwicHJvamVjdHNcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPFJvdWdoTm90YXRpb25cbiAgICAgICAgICB0eXBlPVwidW5kZXJsaW5lXCJcbiAgICAgICAgICBjb2xvcj17YCR7dGhlbWUgPT09IFwibGlnaHRcIiA/IFwicmdiKDAsIDEyMiwgMTIyKVwiIDogXCJyZ2IoNSAyMDYgMTQ1KVwifWB9XG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgb3JkZXI9ezF9XG4gICAgICAgICAgc2hvdz17aXNPblNjcmVlbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRpbmdcIj5GZWF0dXJlZCBQcm9qZWN0cyAmIENlcnRpZmljYXRpb25zPC9oMj5cbiAgICAgICAgPC9Sb3VnaE5vdGF0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2MgdGV4dC1jZW50ZXIgYmxvY2sgbWItNFwiIHJlZj17ZWxlbWVudFJlZn0+XG4gICAgICAgIOKAnFRhbGsgaXMgY2hlYXAuIFNob3cgbWUgdGhlIGNvZGXigJ0/IEkgZ290IHlvdS4gPGJyIC8+XG4gICAgICAgIEhlcmUgYXJlIHNvbWUgb2YgbXkgcHJvamVjdHMgeW91IHNob3VsZG4ndCBtaXNzc1xuICAgICAgPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQcm9qZWN0Q2FyZCBrZXk9e3Byb2plY3QudGl0bGV9IGluZGV4PXtpbmRleH0gcHJvamVjdD17cHJvamVjdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzIHRleHQtY2VudGVyIG1iLTE2XCI+XG4gICAgICAgIE90aGVyIHByb2plY3RzIGNhbiBiZSBleHBsb3JlZCBpbntcIiBcIn1cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NsaW5lcmRzXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB1bmRlcmxpbmUgbGluay1vdXRsaW5lIHRleHQtbWFycnNncmVlbiBkYXJrOnRleHQtY2FycmlncmVlbiB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgID5cbiAgICAgICAgICBteSBnaXRodWIgcHJvZmlsZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIkFzdHJvUGFwZXJcIixcbiAgLy8gICB0eXBlOiBcIkZyb250ZW5kXCIsXG4gIC8vICAgaW1hZ2U6IChcbiAgLy8gICAgIDxJbWFnZVxuICAvLyAgICAgICBzcmM9e2FzdHJvUGFwZXJ9XG4gIC8vICAgICAgIHNpemVzPVwiMTAwdndcIlxuICAvLyAgICAgICBmaWxsXG4gIC8vICAgICAgIGFsdD1cIkFzdHJvUGFwZXJcIlxuICAvLyAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgaG92ZXI6c2NhbGUtMTEwIG9iamVjdC1jb3ZlclwiXG4gIC8vICAgICAvPlxuICAvLyAgICksXG4gIC8vICAgZGVzYzogXCJBIG1pbmltYWwsIGFjY2Vzc2libGUgYW5kIFNFTy1mcmllbmRseSBBc3RybyBibG9nIHRoZW1lLiBPbmUgb2YgdGhlIG1vc3Qgc3RhcnJlZCBibG9nIHRlbXBsYXRlcyBidWlsdCB3aXRoIEFzdHJvLlwiLFxuICAvLyAgIHRhZ3M6IFtcIkFzdHJvXCIsIFwiVHlwZVNjcmlwdFwiLCBcIlJlYWN0XCIsIFwiVGFpbHdpbmRDU1NcIl0sXG4gIC8vICAgbGl2ZVVybDogXCJodHRwczovL2FzdHJvLXBhcGVyLnBhZ2VzLmRldi9cIixcbiAgLy8gICBjb2RlVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYXRuYWluZy9hc3Ryby1wYXBlclwiLFxuICAvLyAgIGJnQ29sb3I6IFwiYmctWyM5RkQwRTNdXCIsXG4gIC8vICAgZ2l0aHViQXBpOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3Mvc2F0bmFpbmcvYXN0cm8tcGFwZXJcIixcbiAgLy8gfSxcbiBcbiAge1xuICAgIHRpdGxlOiBcIk9ic2lkaWFuIERpZ2l0YWwgR2FyZGVuXCIsXG4gICAgdHlwZTogXCJGdWxsLVN0YWNrXCIsXG4gICAgaW1hZ2U6IChcbiAgICAgIDxJbWFnZVxuICAgICAgICAvLyBzcmM9e3Rlcm1pbmFsUG9ydGZvbGlvfVxuICAgICAgICBzcmM9e2RpZ2l0YWxHYXJkZW19XG4gICAgICAgIHNpemVzPVwiMTAwdndcIlxuICAgICAgICBmaWxsXG4gICAgICAgIGFsdD1cIk9ic2lkaWFuIERpZ2l0YWwgR2FyZGVuXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTExMCBvYmplY3QtY292ZXJcIlxuICAgICAgLz5cbiAgICApLFxuICAgIGRlc2M6IFwiTXkgUGVyc29uYWwgRGlnaXRhbCBHYXJkZW4gQ29ubmVjdGVkIFdpdGggT2JzaWRpYW4gRm9yIEVmZmljaWVudCBOb3RlcyBNYW5hZ2VtZW50IFwiLFxuICAgIHRhZ3M6IFtcIk9ic2lkaWFuXCIsIFwiTm90ZXNcIiwgXCJEaWdpdGFsIEdhcmRlblwiXSxcbiAgICBsaXZlVXJsOiBcImh0dHBzOi8vc2FtYWVsLWRpZ2l0YWwtZ2FyZGVuLnZlcmNlbC5hcHAvXCIsXG4gICAgY29kZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vY2xpbmVyZHMvc2FtYWVsLWxlYXJuaW5nLWxpdmUtaXNzdWVcIixcbiAgICBiZ0NvbG9yOiBcImJnLVsjQjRCRUUwXVwiLFxuICAgIGdpdGh1YkFwaTogXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL2NsaW5lcmRzL3NhbWFlbC1sZWFybmluZy1saXZlLWlzc3VlXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJUZXJtaW5hbCBQb3J0Zm9saW8gKFVuZGVyIERldmVsb3BtZW50KVwiLFxuICAgIHR5cGU6IFwiRnJvbnRlbmRcIixcbiAgICBpbWFnZTogKFxuICAgICAgPEltYWdlXG4gICAgICAgIC8vIHNyYz17dGVybWluYWxQb3J0Zm9saW99XG4gICAgICAgIHNyYz17aW50ZWdyYXRlZFRlcm1pbmFsfVxuICAgICAgICBzaXplcz1cIjEwMHZ3XCJcbiAgICAgICAgZmlsbFxuICAgICAgICBhbHQ9XCJUZXJtaW5hbCBQb3J0Zm9saW9cIlxuICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDAgaG92ZXI6c2NhbGUtMTEwIG9iamVjdC1jb3ZlclwiXG4gICAgICAvPlxuICAgICksXG4gICAgZGVzYzogXCJNeSBwb3J0Zm9saW8gd2Vic2l0ZSBpbiB0ZXJtaW5hbCB2ZXJzaW9uIGRldmVsb3Bpbmcgd2l0aCBSZWFjdCBhbmQgVHlwZVNjcmlwdC4gXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJUeXBlU2NyaXB0XCIsIFwiU3R5bGVkLUNvbXBvbmVudHNcIl0sXG4gICAgbGl2ZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vY2xpbmVyZHMvXCIsXG4gICAgY29kZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vY2xpbmVyZHMvXCIsXG4gICAgYmdDb2xvcjogXCJiZy1bI0I0QkVFMF1cIixcbiAgICBnaXRodWJBcGk6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJJQk0gR2VuZXJhdGl2ZSBBSSBEZXZlbG9wbWVudCBcIixcbiAgICB0eXBlOiBcIkZyb250ZW5kXCIsXG4gICAgaW1hZ2U6IChcbiAgICAgIDxJbWFnZVxuICAgICAgICAvLyBzcmM9e3Rlcm1pbmFsUG9ydGZvbGlvfVxuICAgICAgICBzcmM9e0lCTUNlcnRpZmljYXRpb259XG4gICAgICAgIHNpemVzPVwiMTAwdndcIlxuICAgICAgICAvLyBmaWxsXG4gICAgICAgIGFsdD1cIlRlcm1pbmFsIFBvcnRmb2xpb1wiXG4gICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBob3ZlcjpzY2FsZS0xMTAgb2JqZWN0LWNvdmVyXCJcbiAgICAgIC8+XG4gICAgKSxcbiAgICBkZXNjOiBcIkJ1aWxkaW5nIEdlbmVyYXRpdmUgQUkgQXBwbGljYXRpb25zIFdpdGggUHl0aG9uIFwiLFxuICAgIHRhZ3M6IFtcIkdlbmVyYXRpdmUgQUlcIiwgXCJUeXBlU2NyaXB0XCIsIFwiU3R5bGVkLUNvbXBvbmVudHNcIl0sXG4gICAgbGl2ZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vY2xpbmVyZHMvXCIsXG4gICAgY29kZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vY2xpbmVyZHMvXCIsXG4gICAgYmdDb2xvcjogXCJiZy1bI0I0QkVFMF1cIixcbiAgICBnaXRodWJBcGk6IFwiXCIsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCJIYXJ1IEZhc2hpb25cIixcbiAgLy8gICB0eXBlOiBcIkZyb250ZW5kXCIsXG4gIC8vICAgaW1hZ2U6IChcbiAgLy8gICAgIDxJbWFnZVxuICAvLyAgICAgICBzcmM9e2hhcnVGYXNoaW9ufVxuICAvLyAgICAgICBzaXplcz1cIjEwMHZ3XCJcbiAgLy8gICAgICAgZmlsbFxuICAvLyAgICAgICBhbHQ9XCJIYXJ1IEZhc2hpb24gQXBwXCJcbiAgLy8gICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTExMCBvYmplY3QtY292ZXJcIlxuICAvLyAgICAgLz5cbiAgLy8gICApLFxuICAvLyAgIGRlc2M6IFwiQW4gZWNvbW1lcmNlIHdlYiBhcHBsaWNhdGlvbiB3aGVyZSB1c2VycyBjYW4gYnJvd3NlIHZhcmlvdXMgcHJvZHVjdHMsIGFkZCB0byB3aXNobGlzdCwgYWRkIHRvIGNhcnQsIGFuZCBtYWtlIHB1cmNoYXNlLiBBdmFpbGFibGUgaW4gRW5nbGlzaCBhbmQgQnVybWVzZSBsYW5ndWFnZXMuXCIsXG4gIC8vICAgdGFnczogW1wiTmV4dEpTXCIsIFwiVHlwZVNjcmlwdFwiLCBcIlRhaWx3aW5kQ1NTXCIsIFwiQ29udGV4dEFQSVwiXSxcbiAgLy8gICBsaXZlVXJsOiBcImh0dHBzOi8vaGFydS1mYXNoaW9uLnZlcmNlbC5hcHAvXCIsXG4gIC8vICAgY29kZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vc2F0bmFpbmcvaGFydS1mYXNoaW9uXCIsXG4gIC8vICAgYmdDb2xvcjogXCJiZy1bI0E2Q0VDRV1cIixcbiAgLy8gICBnaXRodWJBcGk6IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9zYXRuYWluZy9oYXJ1LWZhc2hpb25cIixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIkhhcnUgQVBJXCIsXG4gIC8vICAgdHlwZTogXCJCYWNrZW5kXCIsXG4gIC8vICAgaW1hZ2U6IChcbiAgLy8gICAgIDxJbWFnZVxuICAvLyAgICAgICBzcmM9e2hhcnVBcGl9XG4gIC8vICAgICAgIHNpemVzPVwiMTAwdndcIlxuICAvLyAgICAgICBmaWxsXG4gIC8vICAgICAgIGFsdD1cIkhhcnUgQVBJXCJcbiAgLy8gICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTExMCBvYmplY3QtY292ZXJcIlxuICAvLyAgICAgLz5cbiAgLy8gICApLFxuICAvLyAgIGRlc2M6IFwiQSBSRVNUZnVsIEFQSSBkZXZlbG9wZWQgZm9yIEhhcnUgZmFzaGlvbiBlY29tbWVyY2UgcHJvamVjdC4gSW5jbHVkZSBDUlVEIG9wZXJhdGlvbnMsIGF1dGhlbnRpY2F0aW9uLCBhdXRob3JpemF0aW9uLCBmb3Jnb3QvcmVzZXQgcGFzc3dvcmQgYW5kIGZ1bGwtdGV4dCBzZWFyY2guXCIsXG4gIC8vICAgdGFnczogW1wiRXhwcmVzc0pTXCIsIFwiVHlwZVNjcmlwdFwiLCBcIlBvc3RncmVTUUxcIiwgXCJQcmlzbWFcIl0sXG4gIC8vICAgbGl2ZVVybDogXCJodHRwczovL3NhdG5haW5nLmdpdGh1Yi5pby9oYXJ1LWFwaS9cIixcbiAgLy8gICBjb2RlVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYXRuYWluZy9oYXJ1LWFwaVwiLFxuICAvLyAgIGJnQ29sb3I6IFwiYmctWyNDNUU0RTddXCIsXG4gIC8vICAgZ2l0aHViQXBpOiBcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3Mvc2F0bmFpbmcvaGFydS1hcGlcIixcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIk5leHQgQm9va3N0b3JlXCIsXG4gIC8vICAgdHlwZTogXCJGcm9udGVuZCArIEhlYWRsZXNzQ01TXCIsXG4gIC8vICAgaW1hZ2U6IChcbiAgLy8gICAgIDxJbWFnZVxuICAvLyAgICAgICBzcmM9e25leHRCb29rc3RvcmV9XG4gIC8vICAgICAgIHNpemVzPVwiMTAwdndcIlxuICAvLyAgICAgICBmaWxsXG4gIC8vICAgICAgIGFsdD1cIk5leHQgQm9va3N0b3JlXCJcbiAgLy8gICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTExMCBvYmplY3QtY292ZXJcIlxuICAvLyAgICAgLz5cbiAgLy8gICApLFxuICAvLyAgIGRlc2M6IFwiQW4gb25saW5lIGJvb2tzdG9yZSBkZXZlbG9wZWQgdXNpbmcgTmV4dEpTIDEzIHdpdGggYXBwRGlyIGFuZCBTdHJhcGlDTVMuXCIsXG4gIC8vICAgdGFnczogW1wiTmV4dEpTXCIsIFwiUmFkaXggVUkgXCIsIFwiVGFpbHdpbmRDU1NcIiwgXCJUYW5zdGFja1F1ZXJ5XCIsIFwiU3RyYXBpQ01TXCJdLFxuICAvLyAgIGxpdmVVcmw6IFwiaHR0cHM6Ly9uZXh0Ym9va3N0b3JlLnZlcmNlbC5hcHAvXCIsXG4gIC8vICAgY29kZVVybDogXCJodHRwczovL2dpdGh1Yi5jb20vc2F0bmFpbmcvbmV4dC1ib29rc3RvcmVcIixcbiAgLy8gICBiZ0NvbG9yOiBcImJnLVsjRUJGNEY0XVwiLFxuICAvLyAgIGdpdGh1YkFwaTogXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3NhdG5haW5nL25leHQtYm9va3N0b3JlXCIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICB0aXRsZTogXCJTaGFkY24gQWRtaW5cIixcbiAgLy8gICB0eXBlOiBcIkJhY2tlbmRcIixcbiAgLy8gICBpbWFnZTogKFxuICAvLyAgICAgPEltYWdlXG4gIC8vICAgICAgIHNyYz17c2hhZGNuQWRtaW59XG4gIC8vICAgICAgIHNpemVzPVwiMTAwdndcIlxuICAvLyAgICAgICBmaWxsXG4gIC8vICAgICAgIGFsdD1cIlNoYWRjbiBBZG1pblwiXG4gIC8vICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBob3ZlcjpzY2FsZS0xMTAgb2JqZWN0LWNvdmVyXCJcbiAgLy8gICAgIC8+XG4gIC8vICAgKSxcbiAgLy8gICBkZXNjOiBcIkFkbWluIERhc2hib2FyZCBVSSBidWlsdCB3aXRoIFNoYWRjbiBhbmQgVml0ZS4gQnVpbHQgd2l0aCByZXNwb25zaXZlbmVzcyBhbmQgYWNjZXNzaWJpbGl0eSBpbiBtaW5kLlwiLFxuICAvLyAgIHRhZ3M6IFtcIlNoYWRjblVJXCIsIFwiVml0ZVwiLCBcIlJlYWN0IFJvdXRlclwiLCBcIlR5cGVTY3JpcHRcIl0sXG4gIC8vICAgbGl2ZVVybDogXCJodHRwczovL3NoYWRjbi1hZG1pbi5uZXRsaWZ5LmFwcC9cIixcbiAgLy8gICBjb2RlVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zYXRuYWluZy9zaGFkY24tYWRtaW5cIixcbiAgLy8gICBiZ0NvbG9yOiBcImJnLVsjRkJGQkZCXVwiLFxuICAvLyAgIGdpdGh1YkFwaTogXCJodHRwczovL2FwaS5naXRodWIuY29tL3JlcG9zL3NhdG5haW5nL3NoYWRjbi1hZG1pblwiLFxuICAvLyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFNlY3Rpb247XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJSb3VnaE5vdGF0aW9uIiwidXNlVGhlbWUiLCJQcm9qZWN0Q2FyZCIsInVzZVNlY3Rpb24iLCJ1c2VPblNjcmVlbiIsInVzZVNjcm9sbEFjdGl2ZSIsImRpZ2l0YWxHYXJkZW0iLCJpbnRlZ3JhdGVkVGVybWluYWwiLCJJQk1DZXJ0aWZpY2F0aW9uIiwiUHJvamVjdFNlY3Rpb24iLCJ0aGVtZSIsInNlY3Rpb25SZWYiLCJlbGVtZW50UmVmIiwiaXNPblNjcmVlbiIsInByb2plY3RTZWN0aW9uIiwib25TZWN0aW9uQ2hhbmdlIiwic2VjdGlvbiIsInJlZiIsImlkIiwiY2xhc3NOYW1lIiwiZGl2IiwidHlwZSIsImNvbG9yIiwic3Ryb2tlV2lkdGgiLCJvcmRlciIsInNob3ciLCJoMiIsInNwYW4iLCJiciIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsImluZGV4IiwidGl0bGUiLCJhIiwiaHJlZiIsImltYWdlIiwic3JjIiwic2l6ZXMiLCJmaWxsIiwiYWx0IiwiZGVzYyIsInRhZ3MiLCJsaXZlVXJsIiwiY29kZVVybCIsImJnQ29sb3IiLCJnaXRodWJBcGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/ProjectSection.tsx\n"));

/***/ })

});