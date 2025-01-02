/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/Array.ts":
/*!*******************************!*\
  !*** ./src/iterator/Array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/iterator/ArrayIterator.ts");

var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Array.prototype.iterator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this);
    };
    return Array;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/iterator/ArrayIterator.ts":
/*!***************************************!*\
  !*** ./src/iterator/ArrayIterator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.array = array;
        this.index = -1; //의미가 없는 수자로 지정하고 있음.
    }
    ArrayIterator.prototype.next = function () {
        this.index++;
        return this.index < this.array.count;
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this.index);
    };
    return ArrayIterator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/iterator/Item.ts":
/*!******************************!*\
  !*** ./src/iterator/Item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/iterator/Array.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/iterator/Item.ts");
// 동일한 항목의 데이터를 가지고 있는 집합을 컨테이너 또는 Aggregator라 한다. 
// Array, Linked List, Tree, Graph, Table...
// Aggregator의 종류에 따라서 데이터를 얻는 방법이 다른다. 
// 이를 하나의 통일된 방법으로 가져오기 위한 패턴이 iterator 패턴이다. 


var items = [
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("쿠쿠다스", 2500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("초코파이", 1800),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("새우깡", 1500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]("오예스", 2000)
];
var array = new _Array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
var iter = array.iterator();
while (iter.next()) {
    var item = iter.current();
    var domItem = document.createElement("div");
    domItem.innerText = "".concat(item.name, " : ").concat(item.cost, "\uC6D0");
    document.body.appendChild(domItem);
    domItem.classList.add("iterator-item");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksZ0JBQU0sSUFBSSxDQUFDLElBQUksV0FBRztJQUNsRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFFbEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO0FBQzFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2l0ZXJhdG9yL0FycmF5LnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvaXRlcmF0b3IvQXJyYXlJdGVyYXRvci50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuLy4vc3JjL2l0ZXJhdG9yL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm4vLi9zcmMvaXRlcmF0b3IvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiXHJcbmltcG9ydCBBZ2dyZWdhdG9yIGZyb20gXCIuL0FnZ3JlZ2F0b3JcIlxyXG5pbXBvcnQgSXRlcmF0b3IgZnJvbSBcIi4vSXRlcmF0b3JcIlxyXG5pbXBvcnQgQXJyYXlJdGVyYXRvciBmcm9tIFwiLi9BcnJheUl0ZXJhdG9yXCJcclxuXHJcbmNsYXNzIEFycmF5IGltcGxlbWVudHMgQWdncmVnYXRvcjxJdGVtPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1zOiBJdGVtW10pIHt9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgaXRlcmF0b3IoKTogSXRlcmF0b3I8SXRlbT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXlJdGVyYXRvcih0aGlzKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFycmF5IiwiaW1wb3J0IEFycmF5IGZyb20gXCIuL0FycmF5XCI7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcclxuaW1wb3J0IEl0ZXJhdG9yIGZyb20gXCIuL0l0ZXJhdG9yXCI7XHJcblxyXG5jbGFzcyBBcnJheUl0ZXJhdG9yIGltcGxlbWVudHMgSXRlcmF0b3I8SXRlbT4ge1xyXG4gICAgcHJpdmF0ZSBpbmRleDogbnVtYmVyXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnJheTogQXJyYXkpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gLTEgLy/snZjrr7jqsIAg7JeG64qUIOyImOyekOuhnCDsp4DsoJXtlZjqs6Ag7J6I7J2MLlxyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4IDwgdGhpcy5hcnJheS5jb3VudFxyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnQoKTogSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkuZ2V0SXRlbSh0aGlzLmluZGV4KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnJheUl0ZXJhdG9yXHJcbiIsImNsYXNzIEl0ZW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25hbWU6IHN0cmluZywgcHJpdmF0ZSBfY29zdDogbnVtYmVyKSB7fVxyXG5cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb3N0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb3N0O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8g64+Z7J287ZWcIO2VreuqqeydmCDrjbDsnbTthLDrpbwg6rCA7KeA6rOgIOyeiOuKlCDsp5HtlansnYQg7Luo7YWM7J2064SIIOuYkOuKlCBBZ2dyZWdhdG9y6528IO2VnOuLpC4gXHJcbi8vIEFycmF5LCBMaW5rZWQgTGlzdCwgVHJlZSwgR3JhcGgsIFRhYmxlLi4uXHJcbi8vIEFnZ3JlZ2F0b3LsnZgg7KKF66WY7JeQIOuUsOudvOyEnCDrjbDsnbTthLDrpbwg7Ja764qUIOuwqeuyleydtCDri6Trpbjri6QuIFxyXG4vLyDsnbTrpbwg7ZWY64KY7J2YIO2GteydvOuQnCDrsKnrspXsnLzroZwg6rCA7KC47Jik6riwIOychO2VnCDtjKjthLTsnbQgaXRlcmF0b3Ig7Yyo7YS07J2064ukLiBcclxuXHJcbmltcG9ydCBBcnJheSBmcm9tIFwiLi9BcnJheVwiXHJcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIlxyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcbiAgICBuZXcgSXRlbShcIuy/oOy/oOuLpOyKpFwiLCAyNTAwKSxcclxuICAgIG5ldyBJdGVtKFwi7LSI7L2U7YyM7J20XCIsIDE4MDApLFxyXG4gICAgbmV3IEl0ZW0oXCLsg4jsmrDquaFcIiwgMTUwMCksXHJcbiAgICBuZXcgSXRlbShcIuyYpOyYiOyKpFwiLCAyMDAwKVxyXG5dXHJcblxyXG5jb25zdCBhcnJheSA9IG5ldyBBcnJheShpdGVtcylcclxuY29uc3QgaXRlciA9IGFycmF5Lml0ZXJhdG9yKClcclxuXHJcbndoaWxlKGl0ZXIubmV4dCgpKSB7XHJcbiAgICBjb25zdCBpdGVtID0gaXRlci5jdXJyZW50KClcclxuXHJcbiAgICBjb25zdCBkb21JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgZG9tSXRlbS5pbm5lclRleHQgPSBgJHtpdGVtLm5hbWV9IDogJHtpdGVtLmNvc3R97JuQYFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21JdGVtKVxyXG5cclxuICAgIGRvbUl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZXJhdG9yLWl0ZW1cIilcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9