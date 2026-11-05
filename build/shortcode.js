/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shortcode/shortcode.scss"
/*!**************************************!*\
  !*** ./src/shortcode/shortcode.scss ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/*!************************************!*\
  !*** ./src/shortcode/shortcode.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shortcode_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shortcode.scss */ "./src/shortcode/shortcode.scss");

document.addEventListener('DOMContentLoaded', () => {
  const shortcodeContainers = document.querySelectorAll('.bssbAdminShortcode');
  shortcodeContainers.forEach(container => {
    const input = container.querySelector('input');
    const tooltip = container.querySelector('.tooltip');
    if (input && tooltip) {
      input.addEventListener('click', () => {
        input.select();
        const textToCopy = input.value;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            tooltip.textContent = wp.i18n.__('Copied Successfully!', 'b-social-share');
            setTimeout(() => {
              tooltip.textContent = wp.i18n.__('Copy to Clipboard', 'b-social-share');
            }, 1500);
          }).catch(err => {
            console.error('Failed to copy shortcode: ', err);
          });
        } else {
          // Fallback to legacy execCommand for non-secure HTTP or older browsers
          try {
            input.setSelectionRange(0, 99999);
            document.execCommand('copy');
            tooltip.textContent = wp.i18n.__('Copied Successfully!', 'b-social-share');
            setTimeout(() => {
              tooltip.textContent = wp.i18n.__('Copy to Clipboard', 'b-social-share');
            }, 1500);
          } catch (err) {
            console.error('Legacy fallback copy failed: ', err);
          }
        }
      });
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=shortcode.js.map