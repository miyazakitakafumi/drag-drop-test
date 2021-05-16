/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/handlers.ts":
/*!****************************!*\
  !*** ./src/js/handlers.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleDragStart\": () => (/* binding */ handleDragStart),\n/* harmony export */   \"handleDragEnd\": () => (/* binding */ handleDragEnd),\n/* harmony export */   \"handleDragEnter\": () => (/* binding */ handleDragEnter),\n/* harmony export */   \"handleDragOver\": () => (/* binding */ handleDragOver),\n/* harmony export */   \"handleDragLeave\": () => (/* binding */ handleDragLeave),\n/* harmony export */   \"handleDrop\": () => (/* binding */ handleDrop)\n/* harmony export */ });\nvar addEnterClass = function (ev) { return ev.target.classList.add('enter'); };\nvar removeEnterClass = function (ev) { return ev.target.classList.remove('enter'); };\nvar handleDragStart = function (ev) {\n    if (!ev.dataTransfer)\n        return;\n    ev.dataTransfer.setData('text/plain', ev.currentTarget.id);\n    ev.dataTransfer.effectAllowed = 'move';\n    ev.target.classList.add('dragging');\n};\nvar handleDragEnd = function (ev) {\n    ev.target.classList.remove('dragging');\n};\nvar handleDragEnter = function (ev) { };\nvar handleDragOver = function (ev) {\n    ev.preventDefault();\n    if (!ev.dataTransfer)\n        return;\n    ev.dataTransfer.dropEffect = 'move';\n    addEnterClass(ev);\n};\nvar handleDragLeave = function (ev) {\n    removeEnterClass(ev);\n};\nvar handleDrop = function (ev) {\n    ev.preventDefault();\n    if (!ev.dataTransfer)\n        return;\n    var draggedId = ev.dataTransfer.getData('text/plain');\n    var draggedElm = document.getElementById(draggedId);\n    if (!draggedElm)\n        return;\n    ev.target.append(draggedElm);\n    ev.dataTransfer.clearData();\n    removeEnterClass(ev);\n};\n\n\n//# sourceURL=webpack://drag-drop-test/./src/js/handlers.ts?");

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _registHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registHandler */ \"./src/js/registHandler.ts\");\n\n(0,_registHandler__WEBPACK_IMPORTED_MODULE_0__.addDraggableHandler)(document.querySelectorAll('.draggable'));\n(0,_registHandler__WEBPACK_IMPORTED_MODULE_0__.addDroppableHandler)(document.querySelectorAll('.droppable'));\n\n\n//# sourceURL=webpack://drag-drop-test/./src/js/index.ts?");

/***/ }),

/***/ "./src/js/registHandler.ts":
/*!*********************************!*\
  !*** ./src/js/registHandler.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDraggableHandler\": () => (/* binding */ addDraggableHandler),\n/* harmony export */   \"addDroppableHandler\": () => (/* binding */ addDroppableHandler)\n/* harmony export */ });\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ \"./src/js/handlers.ts\");\n\nvar addDraggableHandler = function (elms) {\n    elms.forEach(function (elm) {\n        elm.addEventListener('dragstart', _handlers__WEBPACK_IMPORTED_MODULE_0__.handleDragStart);\n        elm.addEventListener('dragend', _handlers__WEBPACK_IMPORTED_MODULE_0__.handleDragEnd);\n    });\n};\nvar addDroppableHandler = function (elms) {\n    elms.forEach(function (elm) {\n        elm.addEventListener('dragenter', _handlers__WEBPACK_IMPORTED_MODULE_0__.handleDragEnter);\n        elm.addEventListener('dragleave', _handlers__WEBPACK_IMPORTED_MODULE_0__.handleDragLeave);\n        elm.addEventListener('dragover', _handlers__WEBPACK_IMPORTED_MODULE_0__.handleDragOver);\n        elm.addEventListener('drop', _handlers__WEBPACK_IMPORTED_MODULE_0__.handleDrop);\n    });\n};\n\n\n//# sourceURL=webpack://drag-drop-test/./src/js/registHandler.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.ts");
/******/ 	
/******/ })()
;