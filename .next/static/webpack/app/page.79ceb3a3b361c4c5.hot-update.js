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

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"Gym Management Application\",\n        description: \"Management application for a Gym allowing trainers and members to book training sessions and manage supplies\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Personal Projects\"\n        ],\n        gitUrl: \"https://github.com/MrFibonacc1/Healthcare-System\",\n        previewUrl: \"https://www.youtube.com/watch?v=etZ74wvCNTQ&t=9s\"\n    },\n    {\n        id: 2,\n        title: \"AI Route Guardian\",\n        description: \"Detects car crashes along your route and uses AI to give advice to prevent similar accidents\",\n        image: \"/images/projects/2.png\",\n        tag: [\n            \"All\",\n            \"Hackathons\"\n        ],\n        gitUrl: \"https://github.com/MrFibonacc1/Route-Guardian\",\n        previewUrl: \"https://github.com/MrFibonacc1/Route-Guardian\"\n    },\n    {\n        id: 3,\n        title: \"Online Multiplayer Game\",\n        description: \"Fun online game to play with other friends\",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Personal Projects\"\n        ],\n        gitUrl: \"https://github.com/MrFibonacc1/shoot.io\",\n        previewUrl: \"https://github.com/MrFibonacc1/shoot.io\"\n    },\n    {\n        id: 4,\n        title: \"VR Memory Lane\",\n        description: \"Upload your phone photos to the app, which will extract metadata and display your pictures in a 3D world for you to re-experience in VR\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Hackathons\"\n        ],\n        gitUrl: \"https://github.com/MrFibonacc1/vr-memory-maps\",\n        previewUrl: \"https://www.youtube.com/watch?v=qSI_GPKFuNE\"\n    },\n    {\n        id: 5,\n        title: \"School Class Scheduler\",\n        description: \"Efficient Class Management and Booking for Schools\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"Personal Projects\"\n        ],\n        gitUrl: \"https://github.com/MrFibonacc1/Booking-Website\",\n        previewUrl: \"https://github.com/MrFibonacc1/Booking-Website\"\n    },\n    {\n        id: 6,\n        title: \"Facial Recognition Attendance\",\n        description: \"Used machine learning to detect student faces and mark present for class\",\n        image: \"/images/projects/6.png\",\n        tag: [\n            \"All\",\n            \"Personal Projects\"\n        ],\n        gitUrl: \"https://github.com/MrFibonacc1/Facial-Recognition-Attendance\",\n        previewUrl: \"https://github.com/MrFibonacc1/Facial-Recognition-Attendance\"\n    },\n    {\n        id: 7,\n        title: \"Web Crawler\",\n        description: \"Crawls a given URL to extract all accessed URLs, then organizes and ranks them based on a specified phrase\",\n        image: \"/images/projects/7.png\",\n        tag: [\n            \"All\",\n            \"Personal Projects\"\n        ],\n        gitUrl: \"https://github.com/MrFibonacc1/web-crawler\",\n        previewUrl: \"https://github.com/MrFibonacc1/web-crawler\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/huzaifa/Desktop/Coding Projects/personal-website/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/huzaifa/Desktop/Coding Projects/personal-website/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Personal Projects\",\n                        isSelected: tag === \"Personal Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/huzaifa/Desktop/Coding Projects/personal-website/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Hackathons\",\n                        isSelected: tag === \"Hackathons\"\n                    }, void 0, false, {\n                        fileName: \"/Users/huzaifa/Desktop/Coding Projects/personal-website/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/huzaifa/Desktop/Coding Projects/personal-website/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"/Users/huzaifa/Desktop/Coding Projects/personal-website/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/huzaifa/Desktop/Coding Projects/personal-website/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/huzaifa/Desktop/Coding Projects/personal-website/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/huzaifa/Desktop/Coding Projects/personal-website/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQW9CO1FBQ2pDQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBYTtRQUMxQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQW9CO1FBQ2pDQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBYTtRQUMxQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQW9CO1FBQ2pDQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBb0I7UUFDakNDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFvQjtRQUNqQ0MsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7Q0FDRDtBQUVELE1BQU1DLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDSCxLQUFLSSxPQUFPLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1nQixNQUFNZiw2Q0FBTUEsQ0FBQztJQUNuQixNQUFNZ0IsV0FBV1osd0RBQVNBLENBQUNXLEtBQUs7UUFBRUUsTUFBTTtJQUFLO0lBRTdDLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkwsT0FBT0s7SUFDVDtJQUVBLE1BQU1DLG1CQUFtQmYsYUFBYWdCLE1BQU0sQ0FBQyxDQUFDQyxVQUM1Q0EsUUFBUVosR0FBRyxDQUFDYSxRQUFRLENBQUNiO0lBR3ZCLE1BQU1jLGVBQWU7UUFDbkJDLFNBQVM7WUFBRUMsR0FBRztZQUFJQyxTQUFTO1FBQUU7UUFDN0JDLFNBQVM7WUFBRUYsR0FBRztZQUFHQyxTQUFTO1FBQUU7SUFDOUI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUXZCLElBQUc7OzBCQUNWLDhEQUFDd0I7Z0JBQUdDLFdBQVU7MEJBQStEOzs7Ozs7MEJBRzdFLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUM3QixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDMEI7Z0JBQUdyQixLQUFLQTtnQkFBS2dCLFdBQVU7MEJBQ3JCWCxpQkFBaUJpQixHQUFHLENBQUMsQ0FBQ2YsU0FBU2dCLHNCQUM5Qiw4REFBQ25DLGlEQUFNQSxDQUFDb0MsRUFBRTt3QkFFUkMsVUFBVWhCO3dCQUNWQyxTQUFRO3dCQUNSRyxTQUFTWixXQUFXLFlBQVk7d0JBQ2hDeUIsWUFBWTs0QkFBRUMsVUFBVTs0QkFBS0MsT0FBT0wsUUFBUTt3QkFBSTtrQ0FFaEQsNEVBQUNyQyxvREFBV0E7NEJBRVZNLE9BQU9lLFFBQVFmLEtBQUs7NEJBQ3BCQyxhQUFhYyxRQUFRZCxXQUFXOzRCQUNoQ29DLFFBQVF0QixRQUFRYixLQUFLOzRCQUNyQkUsUUFBUVcsUUFBUVgsTUFBTTs0QkFDdEJDLFlBQVlVLFFBQVFWLFVBQVU7MkJBTHpCVSxRQUFRaEIsRUFBRTs7Ozs7dUJBUFpnQzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CakI7R0E5RE16Qjs7UUFHYVQsb0RBQVNBOzs7S0FIdEJTO0FBZ0VOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4PzM3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tIFwiLi9Qcm9qZWN0VGFnXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkd5bSBNYW5hZ2VtZW50IEFwcGxpY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFuYWdlbWVudCBhcHBsaWNhdGlvbiBmb3IgYSBHeW0gYWxsb3dpbmcgdHJhaW5lcnMgYW5kIG1lbWJlcnMgdG8gYm9vayB0cmFpbmluZyBzZXNzaW9ucyBhbmQgbWFuYWdlIHN1cHBsaWVzXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8xLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiUGVyc29uYWwgUHJvamVjdHNcIl0sXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9NckZpYm9uYWNjMS9IZWFsdGhjYXJlLVN5c3RlbVwiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1ldFo3NHd2Q05UUSZ0PTlzXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJBSSBSb3V0ZSBHdWFyZGlhblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRldGVjdHMgY2FyIGNyYXNoZXMgYWxvbmcgeW91ciByb3V0ZSBhbmQgdXNlcyBBSSB0byBnaXZlIGFkdmljZSB0byBwcmV2ZW50IHNpbWlsYXIgYWNjaWRlbnRzXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8yLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiSGFja2F0aG9uc1wiXSxcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL01yRmlib25hY2MxL1JvdXRlLUd1YXJkaWFuXCIsXG4gICAgcHJldmlld1VybDogXCJodHRwczovL2dpdGh1Yi5jb20vTXJGaWJvbmFjYzEvUm91dGUtR3VhcmRpYW5cIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIk9ubGluZSBNdWx0aXBsYXllciBHYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRnVuIG9ubGluZSBnYW1lIHRvIHBsYXkgd2l0aCBvdGhlciBmcmllbmRzXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8zLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiUGVyc29uYWwgUHJvamVjdHNcIl0sXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9NckZpYm9uYWNjMS9zaG9vdC5pb1wiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL01yRmlib25hY2MxL3Nob290LmlvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJWUiBNZW1vcnkgTGFuZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVwbG9hZCB5b3VyIHBob25lIHBob3RvcyB0byB0aGUgYXBwLCB3aGljaCB3aWxsIGV4dHJhY3QgbWV0YWRhdGEgYW5kIGRpc3BsYXkgeW91ciBwaWN0dXJlcyBpbiBhIDNEIHdvcmxkIGZvciB5b3UgdG8gcmUtZXhwZXJpZW5jZSBpbiBWUlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNC5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIkhhY2thdGhvbnNcIl0sXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9NckZpYm9uYWNjMS92ci1tZW1vcnktbWFwc1wiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1xU0lfR1BLRnVORVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6IFwiU2Nob29sIENsYXNzIFNjaGVkdWxlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVmZmljaWVudCBDbGFzcyBNYW5hZ2VtZW50IGFuZCBCb29raW5nIGZvciBTY2hvb2xzXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy81LnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiUGVyc29uYWwgUHJvamVjdHNcIl0sXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9NckZpYm9uYWNjMS9Cb29raW5nLVdlYnNpdGVcIixcbiAgICBwcmV2aWV3VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9NckZpYm9uYWNjMS9Cb29raW5nLVdlYnNpdGVcIixcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIHRpdGxlOiBcIkZhY2lhbCBSZWNvZ25pdGlvbiBBdHRlbmRhbmNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVXNlZCBtYWNoaW5lIGxlYXJuaW5nIHRvIGRldGVjdCBzdHVkZW50IGZhY2VzIGFuZCBtYXJrIHByZXNlbnQgZm9yIGNsYXNzXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy82LnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiUGVyc29uYWwgUHJvamVjdHNcIl0sXG4gICAgZ2l0VXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9NckZpYm9uYWNjMS9GYWNpYWwtUmVjb2duaXRpb24tQXR0ZW5kYW5jZVwiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL01yRmlib25hY2MxL0ZhY2lhbC1SZWNvZ25pdGlvbi1BdHRlbmRhbmNlXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICB0aXRsZTogXCJXZWIgQ3Jhd2xlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNyYXdscyBhIGdpdmVuIFVSTCB0byBleHRyYWN0IGFsbCBhY2Nlc3NlZCBVUkxzLCB0aGVuIG9yZ2FuaXplcyBhbmQgcmFua3MgdGhlbSBiYXNlZCBvbiBhIHNwZWNpZmllZCBwaHJhc2VcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzcucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJQZXJzb25hbCBQcm9qZWN0c1wiXSxcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL01yRmlib25hY2MxL3dlYi1jcmF3bGVyXCIsXG4gICAgcHJldmlld1VybDogXCJodHRwczovL2dpdGh1Yi5jb20vTXJGaWJvbmFjYzEvd2ViLWNyYXdsZXJcIixcbiAgfSxcbl07XG5cbmNvbnN0IFByb2plY3RzU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVRhZ0NoYW5nZSA9IChuZXdUYWcpID0+IHtcbiAgICBzZXRUYWcobmV3VGFnKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLmZpbHRlcigocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LnRhZy5pbmNsdWRlcyh0YWcpXG4gICk7XG5cbiAgY29uc3QgY2FyZFZhcmlhbnRzID0ge1xuICAgIGluaXRpYWw6IHsgeTogNTAsIG9wYWNpdHk6IDAgfSxcbiAgICBhbmltYXRlOiB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC00IG1iLTggbWQ6bWItMTJcIj5cbiAgICAgICAgTXkgUHJvamVjdHNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktNlwiPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiQWxsXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiQWxsXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJQZXJzb25hbCBQcm9qZWN0c1wiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIlBlcnNvbmFsIFByb2plY3RzXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJIYWNrYXRob25zXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiSGFja2F0aG9uc1wifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTggbWQ6Z2FwLTEyXCI+XG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdmFyaWFudHM9e2NhcmRWYXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzSW5WaWV3ID8gXCJhbmltYXRlXCIgOiBcImluaXRpYWxcIn1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZGVsYXk6IGluZGV4ICogMC40IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBpbWdVcmw9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgIGdpdFVybD17cHJvamVjdC5naXRVcmx9XG4gICAgICAgICAgICAgIHByZXZpZXdVcmw9e3Byb2plY3QucHJldmlld1VybH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb2plY3RDYXJkIiwiUHJvamVjdFRhZyIsIm1vdGlvbiIsInVzZUluVmlldyIsInByb2plY3RzRGF0YSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFnIiwiZ2l0VXJsIiwicHJldmlld1VybCIsIlByb2plY3RzU2VjdGlvbiIsInNldFRhZyIsInJlZiIsImlzSW5WaWV3Iiwib25jZSIsImhhbmRsZVRhZ0NoYW5nZSIsIm5ld1RhZyIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiaW5jbHVkZXMiLCJjYXJkVmFyaWFudHMiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwic2VjdGlvbiIsImgyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsIm5hbWUiLCJpc1NlbGVjdGVkIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImltZ1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});