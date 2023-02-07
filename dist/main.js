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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showContact\": () => (/* binding */ showContact)\n/* harmony export */ });\nfunction showContact(){\n  const previousContainer=document.querySelector('.container')\n  const mainContent=document.querySelector('.mainContent');\n  if(mainContent.hasChildNodes()){\n    previousContainer.remove();\n  }\n  \n  const container=document.createElement('div');\n  container.classList.add('container');\n  mainContent.appendChild(container);\n  container.textContent='this is contact'\n  }\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHome\": () => (/* binding */ showHome)\n/* harmony export */ });\nfunction showHome(){\n  const previousContainer=document.querySelector('.container');\n  const mainContent=document.querySelector('.mainContent');\n  if(mainContent.hasChildNodes()){\n    previousContainer.remove();\n  }\n\n  const container=document.createElement('div');\n  container.classList.add('container');\n  mainContent.appendChild(container);\n  container.textContent='this is home';\n  \n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page */ \"./src/initial-page.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad)();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.showHome)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialPageLoad\": () => (/* binding */ initialPageLoad)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction initialPageLoad(){\n  const content=document.querySelector('#content');\n\n  // Heading and Tab\n  const heading=document.createElement('div');\n  heading.classList.add('heading');\n  content.appendChild(heading);\n\n  const title=document.createElement('div');\n  title.classList.add('title');\n  heading.appendChild(title).textContent='C\\'était très bon';\n\n  const nav=document.createElement('div');\n  nav.classList.add('nav');\n  heading.appendChild(nav);\n\n  const homeButton=document.createElement('button');\n  nav.appendChild(homeButton).textContent='Home';\n  homeButton.addEventListener('click',_home__WEBPACK_IMPORTED_MODULE_0__.showHome);\n\n  const menuButton=document.createElement('button');\n  nav.appendChild(menuButton).textContent='Menu';\n  menuButton.addEventListener('click',_menu__WEBPACK_IMPORTED_MODULE_1__.showMenu);\n\n  const contactButton = document.createElement('button');\n  nav.appendChild(contactButton).textContent='Contact';\n  contactButton.addEventListener('click',_contact__WEBPACK_IMPORTED_MODULE_2__.showContact);\n\n  // Main Content\n  const mainContent=document.createElement('div');\n  mainContent.classList.add('mainContent');\n  content.appendChild(mainContent);\n\n  // Footer\n  const footer=document.createElement('div');\n  footer.classList.add('footer');\n  content.appendChild(footer);\n  footer.textContent='this is footer';\n}\n\n//# sourceURL=webpack://restaurant-page/./src/initial-page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu)\n/* harmony export */ });\nfunction showMenu(){\n  const previousContainer=document.querySelector('.container')\n  const mainContent=document.querySelector('.mainContent');\n  if(mainContent.hasChildNodes()){\n    previousContainer.remove();\n  }\n  \n  const container=document.createElement('div');\n  container.classList.add('container');\n  mainContent.appendChild(container);\n  container.textContent='this is menu'\n  }\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;