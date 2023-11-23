/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/fp-pt-journeys/block.json":
/*!***************************************!*\
  !*** ./src/fp-pt-journeys/block.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"wpr/journeys","title":"RK - Journeys (Front Page)","category":"widgets","icon":"welcome-widgets-menus","description":"Journeys part for Frontpage","keywords":["journeys","custom","wpr","custopost"],"version":"1","textdomain":"wpr","editorScript":"file:./index.js","attributes":{"contentTitle":{"type":"string","default":""},"contentDescription":{"type":"string","default":""},"secondTitle":{"type":"string","default":""},"postdata":{"type":"object","default":[]}}}');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************************!*\
  !*** ./src/fp-pt-journeys/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/fp-pt-journeys/block.json");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit({
    attributes,
    setAttributes
  }) {
    const {
      contentTitle,
      contentDescription,
      secondTitle,
      postdata
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
    async function fetchPostData() {
      try {
        const fetchedPostData = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
          path: '/maikurapi/v1/journeys-data'
        });
        setAttributes({
          postdata: fetchedPostData
        });
      } catch (error) {
        console.error(error);
      }
    }
    if (postdata.length === 0) {
      fetchPostData();
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h2",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add here the title', 'wpr'),
      value: contentTitle,
      onChange: newVal => setAttributes({
        contentTitle: newVal
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "All Categories are displayed on Front End"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add here the over Title', 'wpr'),
      value: contentDescription,
      onChange: newVal => setAttributes({
        contentDescription: newVal
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      tagName: "h3",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add here the title', 'wpr'),
      value: secondTitle,
      onChange: newVal => setAttributes({
        secondTitle: newVal
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Latest 4 Posts are displayed on Front End"));
  },
  save({
    attributes
  }) {
    const {
      contentTitle,
      contentDescription,
      secondTitle,
      postdata
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fp-cp"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h2",
      value: contentTitle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fp-cp-categories"
    }, (postdata.terms || []).map((category, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: category.category_url,
      key: index,
      className: "fp-cp-categories-i"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: category.featured_image.url,
      alt: category.name
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "f15"
    }, category.name)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "p",
      value: contentDescription
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      tagName: "h3",
      value: secondTitle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "fp-cp-articles"
    }, (postdata.posts || []).map((post, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: post.post_url,
      key: index,
      className: "fp-cp-articles-i"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: post.thumbnail,
      alt: post.title
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "f17"
    }, post.title))))));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map