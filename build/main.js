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

/***/ "./src/app/App.js":
/*!************************!*\
  !*** ./src/app/App.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\nclass App{\n    dato;\n    accion;\n    constructor(dato, accion){\n        this.dato = dato;\n    }\n}\n\n//# sourceURL=webpack://proyecto-todo/./src/app/App.js?");

/***/ }),

/***/ "./src/core/Eventos.js":
/*!*****************************!*\
  !*** ./src/core/Eventos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Eventos\": () => (/* binding */ Eventos)\n/* harmony export */ });\nclass Eventos{\n\n    click(selector, action){\n        document.querySelector(selector).addEventListener('click', action);\n    }\n}\n\n//# sourceURL=webpack://proyecto-todo/./src/core/Eventos.js?");

/***/ }),

/***/ "./src/core/Persistencia.js":
/*!**********************************!*\
  !*** ./src/core/Persistencia.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Persistencia\": () => (/* binding */ Persistencia)\n/* harmony export */ });\nclass Persistencia{\n    setItem(key, value){\n        window.localStorage.setItem(key, JSON.stringify(value));\n        return true;\n    }\n\n    getItem(key){\n        \n        return JSON.parse(window.localStorage.getItem(key));\n        \n    }\n\n    removeItem(key){\n        return window.localStorage.removeItem(key);\n    }\n\n\n}\n\n//# sourceURL=webpack://proyecto-todo/./src/core/Persistencia.js?");

/***/ }),

/***/ "./src/core/Todo.js":
/*!**************************!*\
  !*** ./src/core/Todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n//clase logica del negocio todo\n\nclass Todo{\n    todo;\n\n    constructor(todo){\n        this.todo = todo;\n    }\n\n    save(key, value){\n        return this.todo.setItem(key, value); \n    }\n\n    show(key){\n        return this.todo.getItem(key);\n    }\n\n    update(){\n\n    }\n\n    delete(key){\n        return this.todo.removeItem(key);\n    }\n\n\n\n\n}\n\n//# sourceURL=webpack://proyecto-todo/./src/core/Todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Eventos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Eventos */ \"./src/core/Eventos.js\");\n/* harmony import */ var _core_Persistencia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Persistencia */ \"./src/core/Persistencia.js\");\n/* harmony import */ var _core_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Todo */ \"./src/core/Todo.js\");\n/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/App */ \"./src/app/App.js\");\n\n\n\n\n\n((app, event)=>{\n\n    const aListaTarea = [];\n    const ul = document.querySelector('ul');\n    \n    event.click('#addTarea', ()=>{\n        const inputTarea = document.querySelector('#inputTask');\n        if(inputTarea.value === ''){\n            alert('ingrese una tarea');\n        }else{\n            let li = document.createElement('li');\n            const btnEliminar = document.createElement('button')\n            const btnActualizar = document.createElement('button')\n            const containerButton = document.createElement('div');\n            containerButton.setAttribute('class', 'containerButtons');\n            btnEliminar.innerHTML= `<i class=\"bi bi-trash-fill miColor\"></i>`;\n            btnEliminar.setAttribute('class', 'btnEliminar');\n            btnActualizar.innerHTML = `<i class=\"bi bi-pencil-fill \"></i>`;\n            btnActualizar.setAttribute('class', 'btnModificar');\n            aListaTarea.push({tarea: inputTarea.value});\n            \n            if(app.dato.save('tarea', aListaTarea)){\n                inputTarea.value = '';\n                \n                alert('tarea guardada con exito');\n                app.dato.show('tarea').forEach((elemento, pos)=>{\n                    li.textContent = elemento.tarea + ' ' + pos;\n                    ul.appendChild(li);\n                    li.appendChild(containerButton);\n                    containerButton.appendChild(btnEliminar);  \n                    containerButton.appendChild(btnActualizar); \n                });\n                console.log(aListaTarea)\n            }else{\n                console.log('error al guardar la informacion')\n            }\n            \n        }\n    });\n\n    app.dato.show('tarea').forEach((element, pos) => {\n        const btnEliminar = document.createElement('button')\n        let li = document.createElement('li');\n        const btnActualizar = document.createElement('button')\n        const containerButton = document.createElement('div');\n        containerButton.setAttribute('class', 'containerButtons');\n        btnEliminar.innerHTML= `<i class=\"bi bi-trash-fill miColor\"></i>`;\n        btnEliminar.setAttribute('class', 'btnEliminar');\n        btnActualizar.innerHTML = `<i class=\"bi bi-pencil-fill\"></i>`\n        btnActualizar.setAttribute('class', 'btnModificar');\n        li.textContent = element.tarea + pos;\n        ul.appendChild(li);\n        li.appendChild(containerButton);\n        containerButton.appendChild(btnEliminar); \n        containerButton.appendChild(btnActualizar); \n        aListaTarea.push(element);\n        \n\n    });\n\n\n})(new _app_App__WEBPACK_IMPORTED_MODULE_3__.App(new _core_Todo__WEBPACK_IMPORTED_MODULE_2__.Todo(new _core_Persistencia__WEBPACK_IMPORTED_MODULE_1__.Persistencia)), new _core_Eventos__WEBPACK_IMPORTED_MODULE_0__.Eventos)\n\n//# sourceURL=webpack://proyecto-todo/./src/index.js?");

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