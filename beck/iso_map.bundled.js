/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/*! exports provided: getSectionColor, overrideDefaultColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSectionColor", function() { return getSectionColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrideDefaultColors", function() { return overrideDefaultColors; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");


const getSectionColor = d3.scaleOrdinal().range(_state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionColors);

function overrideDefaultColors(customColors) {
  _state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionColors = customColors;
  getSectionColor.range(customColors);
}


/***/ }),

/***/ "./src/dimensions.js":
/*!***************************!*\
  !*** ./src/dimensions.js ***!
  \***************************/
/*! exports provided: updateWindowDimensions, updateContainerDimensions, updateMapDimensions, getMaxDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWindowDimensions", function() { return updateWindowDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContainerDimensions", function() { return updateContainerDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMapDimensions", function() { return updateMapDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxDepth", function() { return getMaxDepth; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");


function updateWindowDimensions() {
  _state__WEBPACK_IMPORTED_MODULE_0__["state"].width = window.innerWidth;
  _state__WEBPACK_IMPORTED_MODULE_0__["state"].height = window.innerHeight;
}

function updateContainerDimensions() {
  const maxX = Math.max(..._state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionObjs.map((s) => s.currBX));
  const maxY = Math.max(..._state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionObjs.map((s) => s.currCY));
  const minX = Math.min(..._state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionObjs.map((s) => s.currDX));

  const notedPagesSorted = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pages
    .filter((p) => p.hasNote)
    .sort((p) => p.note.y);
  let lastNoteBottomY = 0;
  if (notedPagesSorted.length > 0) {
    const lastNote = notedPagesSorted[notedPagesSorted.length - 1].note;
    lastNoteBottomY = lastNote.y + lastNote.height;
  }
  if (_state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap) {
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgWidth = maxX - minX + _state__WEBPACK_IMPORTED_MODULE_0__["state"].cujCardWidth;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgHeight = maxY + 500;
  } else {
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgWidth = maxX - minX + _state__WEBPACK_IMPORTED_MODULE_0__["state"].cujCardWidth + 300;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgHeight = Math.max(maxY, lastNoteBottomY) + 100;
  }

  _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgDoc.style('height', _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgHeight).style('width', _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgWidth);
  _state__WEBPACK_IMPORTED_MODULE_0__["state"].cujOverlay
    .style('height', _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgHeight)
    .style('width', _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgWidth);
}

function updateMapDimensions() {
  const maxX = Math.max(..._state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionObjs.map((s) => s.currBX));
  const maxY = Math.max(..._state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionObjs.map((s) => s.currCY));
  const minX = Math.min(..._state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionObjs.map((s) => s.currDX));
  const minY = Math.min(..._state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionObjs.map((s) => s.currAY));
  if (_state__WEBPACK_IMPORTED_MODULE_0__["state"].cujMode) {
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].mapWidth = maxX - minX + _state__WEBPACK_IMPORTED_MODULE_0__["state"].padding + _state__WEBPACK_IMPORTED_MODULE_0__["state"].cujCardWidth;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].mapHeight =
      maxY - minY + _state__WEBPACK_IMPORTED_MODULE_0__["state"].padding + _state__WEBPACK_IMPORTED_MODULE_0__["state"].cujCardWidth + _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight;
  } else if (_state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap) {
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].mapWidth = maxX - minX + _state__WEBPACK_IMPORTED_MODULE_0__["state"].padding + _state__WEBPACK_IMPORTED_MODULE_0__["state"].cujCardWidth;
    const endInd = _state__WEBPACK_IMPORTED_MODULE_0__["state"].rows.length - 1;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].mapHeight =
      _state__WEBPACK_IMPORTED_MODULE_0__["state"].positions[endInd].y + _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight + _state__WEBPACK_IMPORTED_MODULE_0__["state"].cujCardWidth;
  } else {
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].mapWidth = maxX - minX;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].mapHeight = maxY - minY + _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight;
  }
}

function getMaxDepth() {
  const maxLevel = Math.max(..._state__WEBPACK_IMPORTED_MODULE_0__["state"].rows.map((r) => r.Level));
  const depthOffset = (_state__WEBPACK_IMPORTED_MODULE_0__["state"].rows[0].Level - 1) * _state__WEBPACK_IMPORTED_MODULE_0__["state"].vertPadding;
  const maxDepth = maxLevel * _state__WEBPACK_IMPORTED_MODULE_0__["state"].vertPadding + depthOffset;
  return maxDepth;
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: svgContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgContainer", function() { return svgContainer; });
const svgContainer = document.getElementById('isoMap');


/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/*! exports provided: addDragEventListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDragEventListeners", function() { return addDragEventListeners; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _transitions_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitions/scroll */ "./src/transitions/scroll.js");
/* harmony import */ var _transitions_zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transitions/zoom */ "./src/transitions/zoom.js");





let startMouseX = null;
let startMouseY = null;
let startScrollLeft = null;
let startScrollTop = null;

function addDragEventListeners() {
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].addEventListener('mousedown', start);
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].addEventListener('mousemove', drag);
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].addEventListener('mouseup', stop);
}

function start(event) {
  Object(_transitions_scroll__WEBPACK_IMPORTED_MODULE_2__["stopScrollTransition"])();
  Object(_transitions_zoom__WEBPACK_IMPORTED_MODULE_3__["stopZoomTransition"])();
  startMouseX = event.clientX;
  startMouseY = event.clientY;
  startScrollLeft = _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollLeft;
  startScrollTop = _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop;
  _state__WEBPACK_IMPORTED_MODULE_1__["state"].isDragging = true;
}

function drag(event) {
  if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].isDragging) {
    return;
  }
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const dragAmountX = startMouseX - mouseX;
  const dragAmountY = startMouseY - mouseY;
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollLeft = startScrollLeft + dragAmountX;
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop = startScrollTop + dragAmountY;
}

function stop() {
  _state__WEBPACK_IMPORTED_MODULE_1__["state"].isDragging = false;
  startMouseX = null;
  startMouseY = null;
  startScrollLeft = null;
  startScrollTop = null;
}


/***/ }),

/***/ "./src/ease.js":
/*!*********************!*\
  !*** ./src/ease.js ***!
  \*********************/
/*! exports provided: easeInstantly, easeQuadratically */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInstantly", function() { return easeInstantly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadratically", function() { return easeQuadratically; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");


function easeInstantly(element) {
  for (const key of Object.keys(element.targetSpecs)) {
    element.specs[key] = element.targetSpecs[key];
  }
}

function easeQuadratically(element) {
  for (const key of Object.keys(element.targetSpecs)) {
    element.specs[key] +=
      (element.targetSpecs[key] - element.specs[key]) *
      _state__WEBPACK_IMPORTED_MODULE_0__["state"].viewTransitionEase;
  }
}


/***/ }),

/***/ "./src/elements/connector.js":
/*!***********************************!*\
  !*** ./src/elements/connector.js ***!
  \***********************************/
/*! exports provided: assignConnectorOrigins, assignReferencePointR, assignReferencePointL, drawHorizConnectors, lowestLevelCheck, drawVertConnectors, drawFlatHorizConnectors, drawFlatVertConnectors, createDirectConnections, drawDirectConnections */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignConnectorOrigins", function() { return assignConnectorOrigins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignReferencePointR", function() { return assignReferencePointR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignReferencePointL", function() { return assignReferencePointL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawHorizConnectors", function() { return drawHorizConnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowestLevelCheck", function() { return lowestLevelCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawVertConnectors", function() { return drawVertConnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawFlatHorizConnectors", function() { return drawFlatHorizConnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawFlatVertConnectors", function() { return drawFlatVertConnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDirectConnections", function() { return createDirectConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawDirectConnections", function() { return drawDirectConnections; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./src/math.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _page_hoverEllipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/hoverEllipse */ "./src/elements/page/hoverEllipse.js");





// / ///// CONNECTOR BAR CREATION /////////////////////

// Each page in the visualization has a vertical connector
// Horizontal connectors are only created on an as needed bases.
// Typically there are less horizontal connectors than pages in a map.

// CREATE VERTICAL CONNECTIONS BETWEEN PAGES.
// This function creates the initial D3 Shape and stores it in array so it can be edited thru Draw functions and/or updateVis();
function createVertConnectors() {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions.length; i++) {
    // Draw the line
    const currLine = _state__WEBPACK_IMPORTED_MODULE_1__["state"].svgDoc.append('line');
    const currObj = {
      line: currLine,
      startX: null,
      startY: null,
      endX: null,
      endY: null,
    };
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs.push(currObj);
  }
}

// CREATE HORIZONTAL CONNECTIONS BETWEEN PAGES
// This function creates the initial D3 Shape and stores it in an array so it can be edited thru the Draw functions and/or updateVis();
function createHorizConnectors() {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions.length; i++) {
    const currLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Level;
    const currS = i - 1;

    // First page in visualization does not contain a horizontal connector.
    if (i > 0) {
      // For Horizontal connections, we have to evaluate the current page's level, then loop through the previously created pages.
      // A Horizontal connection will be drawn to the first previous page that shares the same level as the current page.
      // This enables us to render a multi level tree with many branches.
      for (let x = currS; x >= 0; x--) {
        // Evaluate if current Level is greater than or equal to previous level
        // If it's less, than we don't create any new horizontal connectsion. This allows us to maintain the "branching" tree structure.
        const prevLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[x].Level;
        if (prevLevel >= currLevel) {
          // If equal, create horizontal connection line.
          if (prevLevel == currLevel || lowestLevelCheck(i, currLevel)) {
            // Draw the line
            const currLine = _state__WEBPACK_IMPORTED_MODULE_1__["state"].svgDoc.append('line');
            const currObj = {
              line: currLine,
              startX: null,
              startY: null,
              endX: null,
              endY: null,
            };
            _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs.push(currObj);

            break;
          }

          // Do Nothing if curr level is less than prev level.
        } else {
          break;
        }
      }
    }
  }
}

// THIS IS A CRUCIAL FUNCTION. MOST MEASUREMENTS ARE BASED ON THE ORIGINS ARRAY THAT IS SET UP HERE.
function assignConnectorOrigins(initRun) {
  _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins = []; // RESET ARRAY FOR ZOOM
  if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews) {
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].currOrigins = [];
  }

  // In the previous function, we created an array of positions.
  // positions[] reference the top/left registration point's x/y coordinates for each page.
  // In this function, we map out reference points related to the page icon.
  // These points form the basis and reference X/Y coordinates in which to base elements drawn in the future,
  // such as, section carpets, connection lines and joints, page titles, addresses, note connectors, etc.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions.length; i++) {
    // DETERMINE X/Y OF PAGE BOTTOM/CENTER REFERENCE POINT
    let halfPageWidth;
    let currBottomCenterX;
    let currBottomCenterY;
    let secRads;
    let currOriginX;
    let currOriginY;
    let currCLinkRefX;
    let currCLinkRefY;
    let currBottomRightCornerX = 0;
    let currBottomRightCornerY = 0;
    let currMiddleCenterX;
    let currMiddleCenterY;
    let currBottomLeftCornerX;
    let currBottomLeftCornerY;
    let currCUJRefStartBottomX;
    let currCUJRefStartBottomY;
    let leftCenterX;
    let leftCenterY;
    let rightCenterX;
    let rightCenterY;

    if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].flattenMap) {
      const headerWidth = _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageHeight / 10;
      const headerHeight = headerWidth;

      halfPageWidth = _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageWidth / 2;
      currBottomCenterX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].x;
      currBottomCenterY = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].y + headerHeight;

      const centerX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].x + headerWidth / 2;
      const centerY = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].y + _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageHeight / 10;

      const connectorOriginX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].x - _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageWidth / 4;
      const connectorOriginY = centerY;

      // DETERMINE X/Y OF ORIGIN POINT WHERE IA CONNECTOR LINES INTERSECT
      currOriginX = connectorOriginX; // Subtract X Diff off Curr X to get Angle
      currOriginY = connectorOriginY; // Add Adj Side Value to Curr Y for End

      // DETERMINE LOWER RIGHT CORNER OF PAGE
      currBottomRightCornerX =
        _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].x + headerWidth + _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageWidth * 3; // Need to factor in label width for this
      currBottomRightCornerY = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].y + headerHeight * 2;

      // DETERMINE CROSSLINK REF POINT --NOTE THIS IS NOT NEEDED FOR FLAT VIEW
      currCLinkRefX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].x + (headerWidth / 4) * 3;
      currCLinkRefY = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].y + headerHeight;

      // DETERMINE LOWER LEFT CORNER OF PAGE
      currBottomLeftCornerX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].x;
      currBottomLeftCornerY = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].y + headerHeight;

      // DETERMINE CUJ CONNECTOR POINTS
      currMiddleCenterX = centerX; // cos thea = adj/hyp
      currMiddleCenterY = centerY;

      currCUJRefStartBottomX = centerX + _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertPadding / 2; // Subtract X Diff off Curr X to get Angle
      currCUJRefStartBottomY = centerY; // Add Adj Side Value to Curr Y for End

      leftCenterX = centerX - headerWidth / 2;
      leftCenterY = centerY;

      rightCenterX = centerX + headerWidth / 2 + _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageWidth * 3; // Need to factor in label width;
      rightCenterY = centerY;
    } else {
      halfPageWidth =
        (_state__WEBPACK_IMPORTED_MODULE_1__["state"].pageWidth *
          Math.cos(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees))) /
        2;
      currBottomCenterX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].x + halfPageWidth;
      currBottomCenterY = _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions[i].y + _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageHeight;

      // DETERMINE X/Y OF ORIGIN POINT WHERE IA CONNECTOR LINES INTERSECT
      secRads = Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].secondaryAngleDegrees); // Radians Conversion for Secondary Angle Value
      currOriginX =
        currBottomCenterX - (Math.tan(secRads) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageHeight) / 5; // Subtract X Diff off Curr X to get Angle
      currOriginY = currBottomCenterY + _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageHeight / 5; // Add Adj Side Value to Curr Y for End

      // DETERMINE LOWER RIGHT CORNER OF PAGE
      currBottomRightCornerX = currBottomCenterX + halfPageWidth;
      currBottomRightCornerY =
        currBottomCenterY +
        halfPageWidth * Math.sin(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees));

      // DETERMINE CROSSLINK REF POINT
      currCLinkRefX = currBottomCenterX + halfPageWidth / 2;
      currCLinkRefY =
        currBottomCenterY +
        (halfPageWidth / 2) *
          Math.sin(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees));

      // DETERMINE LOWER LEFT CORNER OF PAGE
      currBottomLeftCornerX = currBottomCenterX - halfPageWidth;
      currBottomLeftCornerY =
        currBottomCenterY -
        halfPageWidth * Math.sin(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees));

      // DETERMINE CUJ CONNECTOR POINTS
      currMiddleCenterX = currBottomCenterX; // cos thea = adj/hyp
      currMiddleCenterY = currBottomCenterY - _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageHeight / 2;

      currCUJRefStartBottomX =
        currMiddleCenterX - Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_1__["state"].pageHeight / 5); // Subtract X Diff off Curr X to get Angle
      currCUJRefStartBottomY = currMiddleCenterY + _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageHeight / 5; // Add Adj Side Value to Curr Y for End

      leftCenterX = currMiddleCenterX - (halfPageWidth + _state__WEBPACK_IMPORTED_MODULE_1__["state"].textPadding * 2);
      leftCenterY =
        currMiddleCenterY -
        Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees)) *
          (halfPageWidth + _state__WEBPACK_IMPORTED_MODULE_1__["state"].textPadding * 2);

      rightCenterX =
        currMiddleCenterX + (halfPageWidth + _state__WEBPACK_IMPORTED_MODULE_1__["state"].textPadding * 2);
      rightCenterY =
        currMiddleCenterY +
        Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees)) *
          (halfPageWidth + _state__WEBPACK_IMPORTED_MODULE_1__["state"].textPadding * 2);
    }

    // SET UP REFERENCE PT OBJ
    // See sketches/origin_object_points.png
    // QUESTION - what is pbcenter? previous bottom center? Let's walk through this obj
    const originObj = {
      connectorOriginX: currOriginX,
      connectorOriginY: currOriginY,
      pBCenterX: currBottomCenterX,
      pBCenterY: currBottomCenterY,
      rBCornerX: currBottomRightCornerX,
      rBCornerY: currBottomRightCornerY,
      lBCornerX: currBottomLeftCornerX,
      lBCornerY: currBottomLeftCornerY,
      cLinkRefX: currCLinkRefX,
      cLinkRefY: currCLinkRefY,
      cujStartBottomX: currCUJRefStartBottomX,
      cujStartBottomY: currCUJRefStartBottomY,
      centerX: currMiddleCenterX,
      centerY: currMiddleCenterY,
      leftCenterX: leftCenterX,
      leftCenterY: leftCenterY,
      rightCenterX: rightCenterX,
      rightCenterY: rightCenterY,
    };

    // DESTINATION ORIGIN ARRAY
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins.push(originObj);

    // HOLDING ARRAY FOR ALL CURR ORIGIN DATA BEFORE TRANSITION.
    if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews) {
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].currOrigins.push(originObj);
    }
  }

  // QUESTION - why do weneed to have two sep. functions?

  // CONSIDER FIXING: In addition to the reference points above, two additional points are stored that fall across the center axis for each page.
  // This points provide a reference for aligning the corners of each section "carpet" on the visualization.

  // Call to function to build array of reference points to the Right of each page.
  assignReferencePointR();

  // Call to function to build array of reference points to the Left of each page.
  assignReferencePointL();

  // DRAW CONNECTORS
  if (initRun) {
    // When the visualization is first run, the create functions are called.
    // Since this function is also called from updateVis(), we have to make sure we aren't recreating these vars.
    // Consider fixing: This could be cleaned up a bit.
    createVertConnectors();
    createHorizConnectors();
  }

  // QUESTION - why do we always want to recalc connectors?
  // Once connectors are created, draw them.
  // If this function was called from updateVis(), then always redraw based on new calculations and positioning of elements.
  if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].flattenMap) {
    drawVertConnectors();
    drawHorizConnectors();
  }
}

// Build array of reference points to the RIGHT of each page.
function assignReferencePointR() {
  // Find each page's right bottom corners' X & Y coordinates, then calculate reference point for possible section carpet edge.
  // Consider Fixing: For ease of reading the code, consider looping thru origins array instead of positions array.
  // They'll always be the same length.
  // QUESTION - what will always be the same length? What are you doing here?
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions.length; i++) {
    // Define local vars for known coordinates
    const currRefXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].rBCornerX; // Right Bottom Corner X
    const currRefYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].rBCornerY; // Right Bottom Corner Y
    const currRefALength = _state__WEBPACK_IMPORTED_MODULE_1__["state"].sectionPadding; // Side A of the Right Triangle for Calculation

    // Run calculations
    const tanYRefRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees); // 20° Right Triangle
    const currRefXEnd = currRefXStart + currRefALength; // New Reference Point X
    const currRefYEnd = currRefYStart + Math.tan(tanYRefRad) * currRefALength; // New Reference Point Y

    // Store values in array for later use
    const refRObj = { x: currRefXEnd, y: currRefYEnd }; // Stores Reference Point X/Y
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].referencePointsRight[i] = refRObj;
  }
}

// Build array of reference points to the LEFT of each page.
function assignReferencePointL() {
  // Find each page's left bottom corners' X & Y coordinates, then calculate reference point for possible section carpet edge.
  // Consider Fixing: For ease of reading the code, consider looping thru origins array instead of posisions array.
  // They'll always be the same length.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions.length; i++) {
    // Define local vars for known coordinates
    const currRefXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].lBCornerX; // Left Bottom Corner X
    const currRefYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].lBCornerY; // Left Bottom Corner Y
    const currRefALength = _state__WEBPACK_IMPORTED_MODULE_1__["state"].sectionPadding; // Side A of Right Triangle for Calculation

    // Run calculations
    const tanYRefRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees); // 20° Right Triangle
    const currRefXEnd = currRefXStart - currRefALength; // New Reference Point X
    const currRefYEnd = currRefYStart - Math.tan(tanYRefRad) * currRefALength; // New Reference Point Y

    // Store values in array for later use
    const refLObj = { x: currRefXEnd, y: currRefYEnd }; // Stores Reference Point X/Y
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].referencePointsLeft[i] = refLObj;
  }
}

// / ///// CONNECTOR LINE DRAWING ////////////

// Horizontal Connectors Between Sibling pages
function drawHorizConnectors() {
  // Update the stroke width based on zoom level to give illusion of perspective.
  const sW = _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel * 2;
  let counter = 0;

  // Loop thru positions array.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions.length; i++) {
    const currLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Level;
    const currS = i - 1;

    // Horizontal connections do not exist on the first page instance.
    // Check to make sure that we're looking at the first page in the list.
    if (i > 0) {
      // For Horizontal connections, we have to evaluate the current page's level, then loop through the previously created pages.
      // A Horizontal connection is drawn to the first previous page that shares the same level as the current page.
      // This enables us to render a multi level tree with many branches.
      for (let x = currS; x >= 0; x--) {
        // Evaluate if current Level is greater than or equal to previous level
        // If it's less, than we don't create any new horizontal connection. This allows us to maintain the "branching" tree structure.
        const prevLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[x].Level;
        if (prevLevel >= currLevel) {
          let endXStart;
          let endYStart;
          let endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].connectorOriginX;
          let endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].connectorOriginY;

          // If Diagram Starts at a higher level and works downwards. (e.g. rows[0].Level = 2, rows[1].Level=1)
          if (prevLevel > currLevel && lowestLevelCheck(i, currLevel)) {
            endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].connectorOriginX;
            endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].connectorOriginY;

            let currTransparency = 1;

            if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Entity == 'component') {
              currTransparency = 0.75;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line.style(
                'stroke-dasharray',
                '3, 3'
              );
            }

            const levelDiff = prevLevel - currLevel;
            const xOffset =
              Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].secondaryAngleDegrees)) *
              (_state__WEBPACK_IMPORTED_MODULE_1__["state"].vertPadding * levelDiff);
            endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginX + xOffset;

            endYStart =
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginY -
              xOffset / Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].secondaryAngleDegrees));

            let currVisibility = 'visible';

            let showConnection = 'yes';
            _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy
              ? (showConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy)
              : (showConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Connection);

            if (showConnection == 'no') {
              currVisibility = 'hidden';
              currTransparency = 0;
            }

            _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line
              .attr('x1', endXStart)
              .attr('y1', endYStart)
              .attr('x2', endXEnd)
              .attr('y2', endYEnd)
              .style('stroke-width', sW)
              .style('opacity', currTransparency)
              .style('visibility', currVisibility);

            counter += 1;
            break;
          } else if (prevLevel == currLevel) {
            // Line should begin and end at start page's connector origin and end page's connector origin
            // See sketches/origin_object_points.png
            endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginX;
            endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginY;
            endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].connectorOriginX;
            endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].connectorOriginY;

            // Reposition and resize the line.
            let currAlpha = 'visible';
            if (
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Connection == 'no' ||
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy.toLowerCase() == 'no' ||
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningView
            ) {
              currAlpha = 'hidden';
            } else {
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[x].line
                .style('visibility', 'visible')
                .style('opacity', 1);
            }

            let currTransparency = 1;
            if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Entity == 'component') {
              currTransparency = 0.75;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line.style(
                'stroke-dasharray',
                '3, 3'
              ); // <== This line here!!
            }

            if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel < 0.3) {
              currAlpha = 0;
            }

            if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews && _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy) {
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line
                .attr('x1', endXStart)
                .attr('y1', endYStart)
                .attr('x2', endXEnd)
                .attr('y2', endYEnd)
                .style('stroke-width', sW)
                .style('opacity', currTransparency)
                .style('visibility', currAlpha);

              // Loads Var into Line Array for Later Use if we need a transition.
              // Only load when not transitioning views.
              // When a transition is taking place, new values will be updated in transition animation methods.
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startX = endXStart;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startY = endYStart;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endX = endXEnd;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endY = endYEnd;
            } else {
              // 1 - GRAB VALUE FROM STORED HOLDING ARRAY
              let currXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startX;
              let currYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startY;
              let currXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endX;
              let currYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endY;
              let currVisibility = true;

              // 2 - UPDATE VALUE IN EASING TWEEN
              currXStart += (endXStart - currXStart) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
              currYStart += (endYStart - currYStart) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
              currXEnd += (endXEnd - currXEnd) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
              currYEnd += (endYEnd - currYEnd) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;

              // 3 - STORE VALUE IN HOLDING ARRAY
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startX = currXStart;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startY = currYStart;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endX = currXEnd;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endY = currYEnd;

              if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews) {
                currVisibility = false;
              } else {
                currVisibility = true;
              }

              // 4 - DRAW HORIZONTAL CONNECTOR LINE
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line
                .attr('x1', currXStart)
                .attr('y1', currYStart)
                .attr('x2', currXEnd)
                .attr('y2', currYEnd)
                .style('stroke-width', sW)
                .style('opacity', currTransparency)
                .style('visibility', currVisibility);
            }

            counter += 1;
            break;
          }
        } else {
          break;
        }
      }
    }
  }
}

function lowestLevelCheck(endInd, checkedLevel) {
  let lowestLevelSoFar = true;

  for (let i = 0; i < endInd; i++) {
    const currLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Level;
    if (currLevel <= checkedLevel) {
      lowestLevelSoFar = false;
    }
  }

  return lowestLevelSoFar;
}

// Drawing vertical connectors
function drawVertConnectors() {
  let prevLevel = 1;

  // Set up stroke width based on zoom var
  const sW = _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel * 2;

  // Loop thru positions array to find origins
  // NEED TO FIX: Should loop thru origins array. Both arrays are the same length and the indexes line up.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions.length; i++) {
    const currLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Level;

    // Reference origins[i].pbCenterX/....y (Page Bottom Center Var)
    let endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].pBCenterX;
    let endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].pBCenterY;
    let endXEnd;
    let endYEnd;
    let currVisibility = 'visible';
    let currTransparency = 1;
    const prevInd = i - 1;

    let showConnection = 'yes';
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy
      ? (showConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy)
      : (showConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Connection);

    // If previous level is greater than or equal to current level,
    // Draw a line running from the conector origin to the center of the page bottom.
    // If the current level is greater than prev, draw a line connecting the two pages.
    if (prevLevel < currLevel && i > 0) {
      // If New Section, add 1.5x padding unit
      // Save previous index so we can evaluate coordinates for line endpoint.

      if (prevInd > -1 && showConnection == 'yes') {
        // Line will start at current page's connector origin X/Y and end at previous page bottom center X/Y (pBCenterX/...Y)
        endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].pBCenterX;
        endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].pBCenterY;
      } else if (prevInd > -1 && showConnection == 'no') {
        // Line will start at current page's connector origin X/Y and end at previous page bottom center X/Y (pBCenterX/...Y)
        endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].pBCenterX;
        endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].pBCenterY;
        endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].pBCenterX;
        endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].pBCenterY;
        currVisibility = 'hidden';
        currTransparency = 0;
      }
    } else if (prevLevel >= currLevel || i == 0) {
      // If same level, or no connection, or this is the first node in the map:  add single padding unit
      // Line ends at connector origin X/Y for the curernt page.

      if (lowestLevelCheck(i, _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Level) && i > 0) {
        const levelDiff = prevLevel - currLevel;
        const xOffset =
          Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].secondaryAngleDegrees)) *
          (_state__WEBPACK_IMPORTED_MODULE_1__["state"].vertPadding * levelDiff);
        endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginX + xOffset;

        endYStart =
          _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginY -
          xOffset / Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].secondaryAngleDegrees));

        if (showConnection == 'no') {
          endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].pBCenterX;
          endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].pBCenterY;

          endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginX;
          endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginY;

          let nextInd;

          i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows.length - 1 ? (nextInd = i + 1) : (nextInd = i);

          let showNextConnection = 'yes';
          _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[nextInd].ShowHierarchy
            ? (showNextConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[nextInd].ShowHierarchy)
            : (showNextConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[nextInd].Connection);

          if (showNextConnection == 'yes') {
            currTransparency = 1;
            currVisibility = 'visible';
          } else {
            currTransparency = 0;
            currVisibility = 'hidden';
          }
        }
      } else if (i == 0) {
        endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].pBCenterX;
        endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].pBCenterY;

        if (showConnection == 'no') {
          currTransparency = 0;
          currVisibility = 'hidden';
        }
      }

      endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginX;
      endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginY;
    }

    // Check to see if node is a component and render dashed line.
    if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Entity == 'component' && showConnection == 'yes') {
      currTransparency = 0.75;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].line.style('stroke-dasharray', '3, 3'); // <== This line here!!
    }

    // Loads Var into Line Array for Later Use if we need a transition.
    // Only load when not transitioning views.
    // When a transition is taking place, new values will be updated in transition animation methods.
    if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews) {
      // Draw the line
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].line
        .attr('x1', endXStart)
        .attr('y1', endYStart)
        .attr('x2', endXEnd)
        .attr('y2', endYEnd)
        .style('stroke-width', sW)
        .style('opacity', currTransparency)
        .style('visibility', currVisibility);

      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startX = endXStart;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startY = endYStart;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endX = endXEnd;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endY = endYEnd;
    } else {
      // EXECUTE THE ROTATION ANIMATION FROM FLAT VIEW TO 2.5D

      // 1 - GRAB VALUE FROM STORED HOLDING ARRAY
      let currXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startX;
      let currYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startY;
      let currXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endX;
      let currYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endY;

      // 2 - UPDATE VALUE IN EASING TWEEN
      currXStart += (endXStart - currXStart) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
      currYStart += (endYStart - currYStart) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
      currXEnd += (endXEnd - currXEnd) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
      currYEnd += (endYEnd - currYEnd) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;

      // 3 - STORE VALUE IN HOLDING ARRAY
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startX = currXStart;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startY = currYStart;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endX = currXEnd;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endY = currYEnd;

      // 4 - DRAW HORIZONTAL CONNECTOR LINE
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].line
        .attr('x1', currXStart)
        .attr('y1', currYStart)
        .attr('x2', currXEnd)
        .attr('y2', currYEnd)
        .style('stroke-width', sW)
        .style('opacity', currTransparency)
        .style('visibility', currVisibility);
    }

    // Piggy-back Vars to save previous level value for next run through loop.
    prevLevel = currLevel;
  }
}

// CONNECTIONS BETWEEN PAGES
function drawFlatHorizConnectors() {
  let prevLevel = 1;

  // Set up stroke width based on zoom var
  const sW = _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel * 2;

  // Loop thru positions array to find origins
  // NEED TO FIX: Should loop thru origins array. Both arrays are the same length and the indexes line up.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions.length; i++) {
    // CHECK TO SEE IF WE'RE IN MID-TRANSITION BETWEEN 2.5D AND FLAT MAP VIEW

    const currLevel = parseInt(_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Level);

    let showConnection = 'yes';
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy
      ? (showConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy)
      : (showConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Connection);

    // Reference origins[i].pbCenterX/....y (Page Bottom Center Var)
    let endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].centerX;
    let endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].centerY;

    // HOLDING VALUES FOR CURRENT VARS
    let currVisibility = 'visible';
    let currTransparency = 1;
    const prevInd = i - 1;

    let endXEnd;
    let endYEnd;

    // If previous level is greater than or equal to current level,
    // Draw a line running from the conector origin to the center of the page bottom.
    // If the current level is greater than prev, draw a line connecting the two pages.
    if (prevLevel < currLevel && i > 0) {
      // If New Section, add 1.5x padding unit

      endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].rightCenterX;
      endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerY;
      // Save previous index so we can evaluate coordinates for line endpoint.

      if (prevInd > -1 && showConnection == 'yes') {
        // Line will start at current page's connector origin X/Y and end at previous page bottom center X/Y (pBCenterX/...Y)
        endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].rightCenterX;
        endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerY;
      } else if (prevInd > -1 && showConnection == 'no') {
        // Line will start at current page's connector origin X/Y and end at previous page bottom center X/Y (pBCenterX/...Y)
        endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerX;
        endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerY;

        endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].leftCenterX;
        endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].leftCenterY; // NOTE - LINE HAS NO LENGTH

        currVisibility = 'hidden';
        currTransparency = 0;
      }
    } else if (prevLevel >= currLevel || i == 0 || showConnection == 'yes') {
      if (lowestLevelCheck(i, _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Level) && i > 0) {
        endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].centerX;
        endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].centerY;

        // TODO - Fix this so that line drawing is more elegant
        // Update previous Flat Horizontal Connector Extends to new coordinates.

        if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews || showConnection == 'no') {
          currVisibility = 'hidden';
          currTransparency = 0;
        }

        if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Entity == 'component') {
          currTransparency = 0.75;
          _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[prevInd].line.style(
            'stroke-dasharray',
            '3, 3'
          );
        }

        _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[prevInd].line
          .attr('x1', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].rightCenterX)
          .attr('y1', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].rightCenterY)
          .attr('x2', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerX)
          .attr('y2', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerY)
          .style('stroke-width', sW)
          .style('opacity', currTransparency)
          .style('visibility', currVisibility);
      } else {
        endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].centerX;
        endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].leftCenterY;
      }
      // If same level, add single padding unit
      // Line ends at connector origin X/Y for the curernt page.
      endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginX;
      endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginY;

      if (showConnection == 'no') {
        currTransparency = 0;
        currVisibility = 'hidden';
      } else {
        currVisibility = 'visible';
        currTransparency = 1;
      }
    } else if (prevLevel >= currLevel || showConnection == 'no') {
      endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerX;
      endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerY;
      endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerX;
      endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[prevInd].centerY; // NOTE - LINE HAS NO LENGTH

      currVisibility = 'hidden';
      currTransparency = 0;
    }

    if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Entity == 'component' && showConnection == 'yes') {
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].line.style('stroke-dasharray', '3, 3'); // <== This line here!!
      currTransparency = 0.75;
      currVisibility = 'visible';
    }

    if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews) {
      // Draw the line
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].line
        .attr('x1', endXStart)
        .attr('y1', endYStart)
        .attr('x2', endXEnd)
        .attr('y2', endYEnd)
        .style('stroke-width', sW)
        .style('opacity', currTransparency)
        .style('visibility', currVisibility);

      // LOAD VALUES IN HOLDING ARRAY
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startX = endXStart;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startY = endYStart;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endX = endXEnd;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endY = endYEnd;
    } else {
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].line
        .style('visibility', 'hidden')
        .style('opacity', 0);

      // 1 - GRAB VALUE FROM STORED HOLDING ARRAY
      let currXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startX;
      let currYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startY;
      let currXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endX;
      let currYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endY;

      // 2 - UPDATE VALUE IN EASING TWEEN
      currXStart += (endXStart - currXStart) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
      currYStart += (endYStart - currYStart) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
      currXEnd += (endXEnd - currXEnd) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
      currYEnd += (endYEnd - currYEnd) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;

      // 3 - STORE VALUE IN HOLDING ARRAY
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startX = currXStart;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].startY = currYStart;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endX = currXEnd;
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].endY = currYEnd;

      // 4 - DRAW HORIZONTAL CONNECTOR LINE
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[i].line
        .attr('x1', currXStart)
        .attr('y1', currYStart)
        .attr('x2', currXEnd)
        .attr('y2', currYEnd)
        .style('stroke-width', sW)
        .style('opacity', currTransparency)
        .style('visibility', 'hidden');
    }

    // Piggy-back Vars to save previous level value for next run through loop.
    prevLevel = currLevel;
  }
}

function drawFlatVertConnectors() {
  // Update the stroke width based on zoom level to give illusion of perspective.
  const sW = _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel * 2;
  let counter = 0;

  // Loop thru positions array.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].positions.length; i++) {
    const currLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Level;
    const currS = i - 1;

    let showConnection = 'yes';
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy
      ? (showConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].ShowHierarchy)
      : (showConnection = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Connection);

    // Horizontal connections do not exist on the first page instance.
    // Check to make sure that we're looking at the first page in the list.
    if (i > 0) {
      // For Horizontal connections, we have to evaluate the current page's level, then loop through the previously created pages.
      // A Horizontal connection is drawn to the first previous page that shares the same level as the current page.
      // This enables us to render a multi level tree with many branches.
      for (let x = currS; x >= 0; x--) {
        // Evaluate if current Level is greater than or equal to previous level
        // If it's less, than we don't create any new horizontal connectsion. This allows us to maintain the "branching" tree structure.
        const prevLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[x].Level;
        if (prevLevel >= currLevel) {
          // If equal, draw horizontal connection line.

          if (prevLevel > currLevel && lowestLevelCheck(i, currLevel)) {
            const endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].rightCenterX;
            const endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].rightCenterY;

            // const levelDiff = prevLevel - currLevel;

            const endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].rightCenterX;
            const endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].rightCenterY;
            let currTransparency = 1;

            if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Entity == 'component') {
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line.style(
                'stroke-dasharray',
                '3, 3'
              );
            }

            let currVisibility = true;
            if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews || showConnection == 'no') {
              currTransparency = 0;
              currVisibility = 'hidden';
            } else {
              currTransparency = 1;
              currVisibility = 'visible';
            }

            _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line
              .attr('x1', endXStart)
              .attr('y1', endYStart)
              .attr('x2', endXEnd)
              .attr('y2', endYEnd)
              .style('stroke-width', sW)
              .style('opacity', currTransparency)
              .style('visibility', currVisibility);

            counter += 1;
            break;
          } else if (prevLevel == currLevel) {
            // Line should begin and end at start page's connector origin and end page's connector origin
            // See sketches/origin_object_points.png
            const endXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginX;
            const endYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[i].connectorOriginY;
            const endXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].connectorOriginX;
            const endYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].connectorOriginY;

            // Reposition and resize the line.

            let currVisibility = 'visible';

            let currTransparency = 1;
            if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].Entity == 'component') {
              currTransparency = 0.75;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line.style(
                'stroke-dasharray',
                '3, 3'
              );
            }

            if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel < 0.3) {
              currVisibility = 'hidden';
            }

            if (showConnection == 'no') {
              currVisibility = 'hidden';
            } else {
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertConnectorObjs[x].line
                .style('visibility', 'visible')
                .style('opacity', 1);
            }

            if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews) {
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line
                .attr('x1', endXStart)
                .attr('y1', endYStart)
                .attr('x2', endXEnd)
                .attr('y2', endYEnd)
                .style('stroke-width', sW)
                .style('opacity', currTransparency)
                .style('visibility', currVisibility);

              // STORE FOR LATER USE
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startX = endXStart;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startY = endYStart;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endX = endXEnd;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endY = endYEnd;
            } else {
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line.style(
                'visibility',
                'hidden'
              );

              // 1 - GRAB VALUE FROM STORED ARRAY
              let currXStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startX;
              let currYStart = _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startY;
              let currXEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endX;
              let currYEnd = _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endY;

              // 2 - UPDATE VALUE IN EASING TWEEN
              currXStart += (endXStart - currXStart) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
              currYStart += (endYStart - currYStart) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
              currXEnd += (endXEnd - currXEnd) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;
              currYEnd += (endYEnd - currYEnd) * _state__WEBPACK_IMPORTED_MODULE_1__["state"].viewTransitionEase;

              // 3 - STORE VALUE IN ARRAY
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startX = currXStart;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].startY = currYStart;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endX = currXEnd;
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].endY = currYEnd;

              // 4 - DRAW HORIZONTAL CONNECTOR LINE (ACTUALY A VERTICAL CROSSBAR WHEN IN 2D FLAT VIEW)
              _state__WEBPACK_IMPORTED_MODULE_1__["state"].horizConnectorObjs[counter].line
                .attr('x1', currXStart)
                .attr('y1', currYStart)
                .attr('x2', currXEnd)
                .attr('y2', currYEnd)
                .style('stroke-width', sW)
                .style('opacity', currTransparency)
                .style('visibility', 'hidden');
            }

            counter += 1;

            break;
          }
        } else {
          break;
        }
      }
    }
  }
}

// DRAW PERMANENT DIRECT LINKS FROM PAGE-TO-PAGE/NODE-TO-NODE IN MAP
function createDirectConnections() {
  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows.length; j++) {
    // Local vars for data
    // currSL = current string link
    // CLA = cross links array
    // Crosslinks var is maintained so legacy maps don't break.
    const currSL = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[j].DirectConnections;

    // Split curr string into array.
    if (currSL) {
      const currCLA = currSL.split(', ');

      // Loop thru newly created Crosslink Array, Then find matching addresses.
      for (let i = 0; i < currCLA.length; i++) {
        // Compare specified addresses in currCLA array to addresses pulled out of Rows obj.
        for (let x = 0; x < _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows.length; x++) {
          // If there's a match, we draw a cross link.

          if (
            (_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[j].Name != '' && _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[x].Name == currCLA[i]) ||
            (_state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[j].Address != '' && _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[x].Address == currCLA[i])
          ) {
            const currLink = _state__WEBPACK_IMPORTED_MODULE_1__["state"].svgDoc.append('line');

            currLink.style('opacity', '50').style('visibility', 'visible');

            const currLinkObj = { link: currLink, startInd: j, endInd: x };

            // Store for later use.
            _state__WEBPACK_IMPORTED_MODULE_1__["state"].directConnectors.push(currLinkObj);
          }
        }
      }
    }
  }
}

function drawDirectConnections() {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].directConnectors.length; i++) {
    const j = _state__WEBPACK_IMPORTED_MODULE_1__["state"].directConnectors[i].startInd;
    const x = _state__WEBPACK_IMPORTED_MODULE_1__["state"].directConnectors[i].endInd;
    const currLink = _state__WEBPACK_IMPORTED_MODULE_1__["state"].directConnectors[i].link;
    const currDisplayRules = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[j].DirectConnectionsVisibility;
    let currLinkAlpha = 100;
    let currVisibility = 'visible';
    let currStrokeWidth = 1;

    if (
      (_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews && _state__WEBPACK_IMPORTED_MODULE_1__["state"].flattenMap) ||
      currDisplayRules == 'visible on hover only'
    ) {
      currVisibility = 'hidden';
    }

    if (currDisplayRules == 'transparent line') {
      currLinkAlpha = '0.4';
    }

    if (
      currDisplayRules == 'visible line with highlight' &&
      !_state__WEBPACK_IMPORTED_MODULE_1__["state"].flattenMap &&
      !_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews
    ) {
      currLinkAlpha = '0.4';
      currStrokeWidth = 2;

      // The corresponding hover arrays ellipse becomes visible.
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[x].states.highlighted = true;
      Object(_page_hoverEllipse__WEBPACK_IMPORTED_MODULE_2__["updateState"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[x]);
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[j].states.highlighted = true;
      Object(_page_hoverEllipse__WEBPACK_IMPORTED_MODULE_2__["updateState"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[j]);
    }

    _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[x].states.highlighted = true;

    let startX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[j].pBCenterX;
    let endX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].pBCenterX;

    // If map is flattened, we need to position direct endpoints around page labels.
    if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].flattenMap) {
      // Check to see where line ends, and which endpoint's x position is offset by a page label.

      if (startX > endX) {
        startX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[j].pBCenterX;
        endX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[x].label.specs.x + _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[x].label.specs.width;
      } else if (startX == endX) {
        startX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[j].pBCenterX;
        endX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[j].pBCenterX;
      } else {
        startX =
          _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[j].label.specs.x + _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[j].label.specs.width;
        endX = _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].pBCenterX;
      }
    }

    currLink
      .attr('x1', startX)
      .attr('y1', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[j].pBCenterY)
      .attr('x2', endX)
      .attr('y2', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].pBCenterY)
      .style('opacity', currLinkAlpha)
      .style('stroke-width', currStrokeWidth)
      .style('visibility', currVisibility);

    // Check to see if node is a component and render dashed line.
    if (
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[x].Entity == 'component' ||
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[j].Entity == 'component'
    ) {
      currLink.style('stroke-dasharray', '3, 3');
    }
  }
}


/***/ }),

/***/ "./src/elements/crosslink.js":
/*!***********************************!*\
  !*** ./src/elements/crosslink.js ***!
  \***********************************/
/*! exports provided: hideConnectedPages, hideSelectionConnections, updateSelectionConnections, updateAllHighlightedConnections, drawConnectedPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideConnectedPages", function() { return hideConnectedPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideSelectionConnections", function() { return hideSelectionConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelectionConnections", function() { return updateSelectionConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAllHighlightedConnections", function() { return updateAllHighlightedConnections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawConnectedPages", function() { return drawConnectedPages; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors */ "./src/colors.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _page_hoverEllipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/hoverEllipse */ "./src/elements/page/hoverEllipse.js");





function hideConnectedPages(page) {
  if (!page.states.highlightedFromSelect) {
    page.states.highlightedFromHover = false;
  }

  Object(_page_hoverEllipse__WEBPACK_IMPORTED_MODULE_2__["updateState"])(page);
  d3.selectAll('.hoverConnectedLine').remove();
}

function hideSelectionConnections() {
  d3.selectAll('.selectConnectedLine').remove();
}

function updateSelectionConnections() {
  // Update connection highlights
  hideSelectionConnections();
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages.length; i++) {
    const page = _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[i];
    const row = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i];

    if (page.states.selected && row.DirectConnections) {
      if (row.DirectConnections.trim() != '') {
        drawConnectedPages(i, 'select');
      }
    }
  }
}

function updateAllHighlightedConnections() {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages.length; i++) {
    const page = _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[i];

    if (
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[i].DirectConnectionsVisibility == 'visible line with highlight'
    ) {
      page.states.highlightedByDefault = true;
      Object(_page_hoverEllipse__WEBPACK_IMPORTED_MODULE_2__["updateState"])(page);
    }
  }
}

function drawConnectedPages(ind, currState) {
  // Local vars for data
  // currSL = current string link
  // CLA = cross links array
  const currSL = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[ind].DirectConnections;
  // const opacity = 0.5;

  // Split curr string into array.
  const currCLA = currSL.split(', ');

  // Set up stroke width based on current zoom level.
  const sW = Math.ceil(_state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel * 3);

  // Loop thru newly created Crosslink Array, Then find matching addresses.
  for (let i = 0; i < currCLA.length; i++) {
    const currCLSString = currCLA[i];

    // Compare specified addresses in currCLA array to addresses pulled out of Rows obj.
    for (let x = 0; x < _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows.length; x++) {
      // If there's a match, we draw a cross link.
      if (
        _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[x].Address == currCLSString ||
        _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[x].Name == currCLSString
      ) {
        const page = _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[x];
        let connectLineClass;

        // The corresponding hover array ellipse becomes visible.

        if (currState == 'select') {
          page.states.highlightedFromSelect = true;
          page.states.highlightedFromHover = false;
          connectLineClass = 'selectConnectedLine';
        } else {
          page.states.highlightedFromHover = true;
          connectLineClass = 'hoverConnectedLine';
        }

        Object(_page_hoverEllipse__WEBPACK_IMPORTED_MODULE_2__["updateState"])(page);

        const sectionId = _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[x].Section;
        const currHex = Object(_colors__WEBPACK_IMPORTED_MODULE_0__["getSectionColor"])(sectionId);

        // Set up appropriate Class based on state

        // Create and append connection line.
        // Section color should be represented.
        if (
          !_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews &&
          _state__WEBPACK_IMPORTED_MODULE_1__["state"].rows[ind].DirectConnectionsVisibility == 'visible on hover only'
        ) {
          _state__WEBPACK_IMPORTED_MODULE_1__["state"].svgDoc
            .append('line')
            .attr('x1', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[ind].pBCenterX)
            .attr('y1', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[ind].pBCenterY)
            .attr('x2', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].pBCenterX)
            .attr('y2', _state__WEBPACK_IMPORTED_MODULE_1__["state"].origins[x].pBCenterY)
            .style('stroke', currHex)
            .style('stroke-width', sW)
            .attr('class', connectLineClass);
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/elements/cuj.js":
/*!*****************************!*\
  !*** ./src/elements/cuj.js ***!
  \*****************************/
/*! exports provided: createCUJConnectors, createCUJCard, resizeCUJCard, formatCUJArray, createCUJMarkers, clearMarkers, drawCUJStartPoint, cujCheck, resetCUJStartText, snapToCUJStartLoc, hideCUJConnectors, hideCUJSteps, drawFlatCUJStartPoint, drawFlatCUJConnectors, hideAllCUJStarts, cujStartClick, updateCUJStartVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCUJConnectors", function() { return createCUJConnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCUJCard", function() { return createCUJCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeCUJCard", function() { return resizeCUJCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCUJArray", function() { return formatCUJArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCUJMarkers", function() { return createCUJMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearMarkers", function() { return clearMarkers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCUJStartPoint", function() { return drawCUJStartPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cujCheck", function() { return cujCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCUJStartText", function() { return resetCUJStartText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapToCUJStartLoc", function() { return snapToCUJStartLoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideCUJConnectors", function() { return hideCUJConnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideCUJSteps", function() { return hideCUJSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawFlatCUJStartPoint", function() { return drawFlatCUJStartPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawFlatCUJConnectors", function() { return drawFlatCUJConnectors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAllCUJStarts", function() { return hideAllCUJStarts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cujStartClick", function() { return cujStartClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCUJStartVisibility", function() { return updateCUJStartVisibility; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./src/math.js");
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _transitions_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transitions/scroll */ "./src/transitions/scroll.js");
/* harmony import */ var _transitions_zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transitions/zoom */ "./src/transitions/zoom.js");
/* harmony import */ var _vis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vis */ "./src/vis.js");
/* harmony import */ var _page_detailsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/detailsCard */ "./src/elements/page/detailsCard.js");










// / /////// CUJ LAYER CREATION ////////////////

// Set up and Create the connectors and segments that make up the CUJ pathways.
// Every page element will have 2 sets of connectors.
// One set lives on a plane that is overlaid on the map.
// The other set lives on a plane that sits behind the map.
// See sketches/perspective_planes_OLD.png
// Turning on and off visiblity on a combination of these elements on both planes enables us to generate the CUJ pathway while maintinging the 2.5D perspective.
// You'll see this noted in some of the draw functions as well.

function createCUJConnectors() {
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectors = [];
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints = [];

  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
    // See sketches/cuj_pathways_OLD.png
    // let currLayerEndPoint = cujOverlay.append('ellipse').style('visibility', 'hidden').style('fill', 'ffffff')
    const currFrontEndPoint = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujOverlay
      .append('ellipse')
      .style('visibility', 'hidden')
      .style('fill', '455A64');
    const currBackEndPoint = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujOverlay
      .append('ellipse')
      .style('visibility', 'hidden')
      .style('fill', '455A64');

    // All Pathway Lines are stored in this obj for future reference.
    // Once the CUJ is drawn, each segment is turned on/off then each segment is repositioned to form overall CUJ line.
    const endpointsObj = {
      frontEndPoint: currFrontEndPoint,
      backEndPoint: currBackEndPoint,
    };

    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints.push(endpointsObj);
  }

  // CONSIDER FIXING: The following could probably be separated into another function.
  // CUJ Start 'Dots' are created and added to the visualization.
  for (let c = 0; c < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; c++) {
    // RESET CONNECTORS ARRAY
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectors = [];

    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[c];

    // Loop through array of steps listed within specific sheet.
    for (let h = 0; h < steps.length; h++) {
      const currConnect = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujOverlay
        .append('line')
        .style('visibility', 'hidden');
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectors.push(currConnect);
    }

    // Stores local array of connections, loads it into an Object, then Pushes into A Collections Array
    const cujConnectorObj = { connections: _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectors };
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection.push(cujConnectorObj);

    // CREATES STARTING POINT
    const currStartID = `ss${c}`;
    const currStartOverlayID = `sO${c}`;
    const currStartTextID = `sT${c}`;
    const label = steps[0].Title;

    // CONSIDER FIXING: There are two instances of each starting 'dot'.
    // One lives on the svgDoc plane, where all the other visualization elements are rendered.
    // The other lives on the overlay plane.

    // CUJ Start that lives on background plane (svgDoc), behind page icons
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStart = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujOverlay
      .append('ellipse')
      .style('visibility', 'hidden')
      .attr('id', currStartID)
      .on('click', function () {
        const currIDVal = this.id.split('ss');
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd = Number(currIDVal[1]);
        cujStartClick();
      });

    // CUJ Overlay Start dot that lives on overlay on top of pages
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujOverlayStart = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujOverlay
      .append('ellipse')
      .style('visibility', 'hidden')
      .attr('id', currStartOverlayID)
      .on('click', function () {
        const currIDVal = this.id.split('sO');
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd = Number(currIDVal[1]);
        cujStartClick();
      });

    // Text appended to each start 'dot' lives on top of each page.
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartText = _selections__WEBPACK_IMPORTED_MODULE_2__["svgContainerSelection"]
      .append('text')
      .text(label)
      .attr('id', currStartTextID)
      .style('visibility', 'hidden')
      .on('click', function () {
        const currIDVal = this.id.split('sT');
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd = Number(currIDVal[1]);
        cujStartClick();
      });

    // Add CUJ start label
    const currCUJStart = {
      start: _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStart,
      overlayStart: _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujOverlayStart,
      text: _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartText,
    }; // PUSHES OBJECT INTO ARRAY
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts.push(currCUJStart);
  }
}

// Create basic CUJ card, and set events listeners for card actions.
function createCUJCard() {
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].currCard = d3.select('#cujCard');
  d3.select('#nextStep').on('click', getNextCUJCard);
  d3.select('#prevStep').on('click', getPrevCUJCard);
  d3.select('#closeX').on('click', cujStartClick);
}

// Resizes CUJ card when screen is resized.
function resizeCUJCard() {
  // Set Max Height of Scroll Container
  const offsetHeight =
    document.getElementById('cujHeader').clientHeight +
    document.getElementById('cujNav').clientHeight +
    24;
  d3.select('#cujScrollContainer').style(
    'max-height',
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].height - 388 - offsetHeight
  );
}

// CHECK FOR PAGE- NAME MATCH AHEAD OF DRAWING AND BUILDING
function formatCUJArray() {
  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; j++) {
    let matchCount = 0;

    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j];
    for (let h = 0; h < steps.length; h++) {
      let matchFound = false;

      for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
        if (steps[h].Page == _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name) {
          matchFound = true;
          matchCount += 1;
        }
      }

      if (matchFound == false) {
        // REMOVE ITEM FROM STEP ARRAY
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j].splice(h, 1);
      }
    }

    if (matchCount == 0) {
      // REMOVE ARRAY ALLTOGETHER
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.splice(j, 1);
    }
  }

  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; j++) {
    if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j].length == 0) {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.splice(j, 1);
    }
  }
}

function createCUJMarkers() {
  // FIRST, LOOP THRU CUJ SHEETS
  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; j++) {
    // NEXT, Pull out array of steps from the above array.
    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j];

    // Reset Current Marker Arrays
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMarkerArray = [];

    // Loop through array of steps listed within specific sheet.
    for (let h = 0; h < steps.length; h++) {
      // Next, evaluate rows array to match steps to pages rendered within the map.
      // NOTE: Rows and Origins Array have same length.
      // Since there's a 1:1 relationship between the indexes of both arrays, we loop thru one, but use the same index value to reference info in the other array.

      const currCUJCircle = _state__WEBPACK_IMPORTED_MODULE_3__["state"].svgDoc.append('ellipse');

      const currPageName = steps[h].Page;

      const currText = _selections__WEBPACK_IMPORTED_MODULE_2__["svgContainerSelection"]
        .append('text')
        .classed('cujNo', true)
        .text('')
        .style('visibility', 'hidden');

      currCUJCircle.style('vibility', 'hidden');
      currText.style('visibility', 'hidden');

      // Store newly created ellipse and its attributes in a local array.
      const currCirclObj = {
        page: currPageName,
        ellipseObj: currCUJCircle,
        stepText: currText,
        ind: h,
      };
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMarkerArray.push(currCirclObj);
    }

    // Once Array of CUJ Circles is Built, Store it in Collection Array
    const cujMarkerObj = { markers: _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMarkerArray };
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMarkerCollection.push(cujMarkerObj);
  }
}

function clearMarkers() {
  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; j++) {
    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j];

    // Reset Current Marker Arrays
    let currCUJMarkerArray = [];
    currCUJMarkerArray = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMarkerCollection[j].markers;

    // RESESTS START MARKER TEXT AND ELLIPSE COLOR
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].text.style('color', '4285f4');
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].start.style('fill', '4285F4');
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].overlayStart.style('fill', '4285F4');

    // Loop through array of steps listed within specific sheet.
    for (let h = 0; h < steps.length; h++) {
      const currCircle = currCUJMarkerArray[h].ellipseObj;
      const currTextObj = currCUJMarkerArray[h].stepText;
      const currPageName = steps[h].Page;
      let matchedInd = 0;

      for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
        if (currPageName == _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name) {
          matchedInd = i;
        }
      }

      const currX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[matchedInd].pBCenterX;
      const currY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[matchedInd].pBCenterY;

      currCircle
        .style('visibility', 'hidden')
        .classed('trans', false)
        .attr('rx', 0)
        .attr('ry', 0)
        .attr('cx', currX)
        .attr('cy', currY)
        .style('opacity', 0);

      currTextObj.style('visiblity', 'hidden').style('opacity', 0);
    }
  }
}

function drawMarkers() {
  // Pull out array of steps from the above array.
  const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd];

  // Reset Current Marker Arrays
  let currCUJMarkerArray = [];
  currCUJMarkerArray = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMarkerCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].markers;

  // Loop through array of steps listed within specific sheet.
  for (let h = 0; h < steps.length; h++) {
    const currCircle = currCUJMarkerArray[h].ellipseObj;
    const currText = currCUJMarkerArray[h].stepText;
    const currPageName = currCUJMarkerArray[h].page;
    let matchedInd = -1;

    for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
      if (currPageName == _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name) {
        matchedInd = i;
      }
    }

    if (matchedInd > -1) {
      if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
        const numberX =
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[matchedInd].lBCornerX - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 2;
        const numberY =
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[matchedInd].lBCornerY -
          (Math.cos(Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_3__["state"].primaryAngleDegrees)) *
            _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth) /
            6;
        const numberStr = h + 1;
        const currHex = _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageColors[matchedInd];
        const degString = `rotate(${_state__WEBPACK_IMPORTED_MODULE_3__["state"].primaryAngleDegrees}deg) skewX(-40deg)`;

        // Style Number Text
        currText
          .style('position', 'absolute')
          .text(numberStr)
          .style('top', numberY)
          .style('left', numberX)
          .style('font-size', _state__WEBPACK_IMPORTED_MODULE_3__["state"].stepNoLabelSize)
          .style('color', currHex + 10)
          .style('transform', degString)
          .style('visibility', 'visible')
          .style('opacity', 100)
          .classed('trans', false);

        currCircle
          .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight * 1.5)
          .attr('ry', (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight * 1.5) / 2)
          .style('visibility', 'visible')
          .style('fill', currHex + 10)
          .style('stroke', currHex + 30)
          .style('stroke-width', 1)
          .style('opacity', 100)
          .classed('trans', false);

        // HIDE DURING TRANSITION ANIMATION
      } else {
        currText.style('visibility', 'hidden');
        currCircle.style('visibility', 'hidden');
      }
    }
  }
}

function updateMarkers() {
  // Pull out array of steps from the above array.
  const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd];

  // Reset Current Marker Arrays
  let currCUJMarkerArray = [];
  currCUJMarkerArray = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMarkerCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].markers;

  // Loop through array of steps listed within specific sheet.
  for (let h = 0; h < steps.length; h++) {
    const currCircle = currCUJMarkerArray[h].ellipseObj;
    const currText = currCUJMarkerArray[h].stepText;
    const currPageName = currCUJMarkerArray[h].page;
    const radiusThreshold = (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 40) * 9;
    const currRadiusOffset = getRadiusOffset(
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd,
      h,
      currPageName,
      radiusThreshold
    );
    let matchedInd = 0;
    let circleAlpha = '05';
    let textAlpha = 0;
    let circleStrokeAlpha = 30;

    // Check for Hover state
    if (h == _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd) {
      circleAlpha = 60;
      textAlpha = 0.4;
      circleStrokeAlpha = 80;

      // Check for circles that share same width/position, then set alpha to 0.
    } else if (currRadiusOffset > radiusThreshold) {
      circleAlpha = '01';
      circleStrokeAlpha = '05';
    }

    for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
      if (currPageName == _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name) {
        matchedInd = i;
      }
    }

    const currHex = _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageColors[matchedInd].hex;

    // Style Number Text
    currText
      .style('position', 'absolute')
      .style('color', currHex)
      .style('opacity', textAlpha);

    let circleWidth;
    let circleHeight;

    if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].flattenMap) {
      circleWidth = _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2;
      circleHeight = _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2;
    } else {
      circleWidth = _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight * 1.5 - currRadiusOffset;
      circleHeight = _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight - currRadiusOffset;
    }

    currCircle
      .attr('rx', circleWidth)
      .attr('ry', circleHeight)
      .style('fill', currHex + circleAlpha)
      .style('stroke', currHex + circleStrokeAlpha)
      .style('stroke-width', 1);
  }
}

function getRadiusOffset(j, h, currName, threshold) {
  let radOffset = 0;

  const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j];

  // Loop through array of steps listed within specific sheet.
  for (let x = 0; x < h; x++) {
    if (currName == steps[x].Page) {
      if (radOffset < threshold) {
        radOffset += Math.ceil(_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 40);
      }
    }
  }

  return radOffset;
}

// / ///////// CUJ PATHWAY DRAWING //////////////////////////////

// CONSIDER FIXING:
// The draw CUJConnectors() function is hacked together.
// It evaluates the position differences between two pages and runs some conditions to calculate the best 'route' to map between the two pages.
// CUJ path lines are rendered on two different planes, one above and another below the pages. This gives the illustion of 'perspective' in 2.5D.
// See sketches/perspective_planes_OLD.png

// NEED TO FIX: Since this is meerly a POC, the routing algorithms need to be revaluated for scalability. I'm not sure this will work for every case.
// NEED TO FIX: Consider what happens when multiple segments run in parallel along the same path through the map. Should they be visually separated? I think so?
// Think about a path that has a figure 8 or pretzel shape..what happens?
function drawCUJConnectors() {
  let prevPageInd = 0;
  const secRads = Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_3__["state"].secondaryAngleDegrees); // Radians Conversion for Secondary Angle Value
  const sW = Math.ceil(_state__WEBPACK_IMPORTED_MODULE_3__["state"].zoomLevel * 4);

  // FIRST, LOOP THRU CUJ SHEETS
  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; j++) {
    // NEXT, Pull out array of steps from the above array.
    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd];

    // Loop through array of steps listed within specific sheet.
    for (let h = 0; h < steps.length; h++) {
      // Next, evaluate rows array to match steps to pages rendered within the map.
      // NOTE: Rows and Origins Array have same length.
      // Since there's a 1:1 relationship between the indexes of both arrays, we loop thru one, but use the same index value to reference info in the other array.
      for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins.length; i++) {
        // LOOP THRU EXISTING ROWS ARRAY
        const currName = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name; // PAGE NAME
        const currLevel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Level; // PAGE LEVEL
        const currCenterX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].centerX;
        const currCenterY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].centerY;
        let prevLevel = 0;

        // Checks for a matching page name so that we can start mapping the path and 'connecting the dots' between pages.
        if (currName == steps[h].Page) {
          // DRAW START AND END POINTS

          // Terminal Point in Back of Page
          const currBackEndX =
            currCenterX + Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2); // Starting points don't fall on the exact center of the page. To maintain the
          const currBackEndY = currCenterY - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2;

          // Terminal Point in Front of Page
          let currFrontEndX =
            currCenterX - Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5); // Starting points don't fall on the exact center of the page. To maintain the
          let currFrontEndY = currCenterY + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5;

          // Draw Front Circle
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].frontEndPoint
            .attr('cx', currFrontEndX)
            .attr('cy', currFrontEndY)
            .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 8)
            .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 16);

          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].backEndPoint
            .attr('cx', currBackEndX)
            .attr('cy', currBackEndY)
            .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 8)
            .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 16);

          const currFrontEndPoint = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].frontEndPoint;
          const prevFrontEndPoint =
            _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[prevPageInd].frontEndPoint;
          const currBackEndPoint = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].backEndPoint;
          const prevBackEndPoint = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[prevPageInd].backEndPoint;

          let currConnector;
          // To start drawing pathways, we need to first check that the connection is coming from an existing page.
          // This int will be >0 if the page in question is one of the later steps within the CUJ.
          if (h > 0) {
            prevLevel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[prevPageInd].Level;

            // Vars to hold data from previous step page.
            const prevCenterX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[prevPageInd].centerX;
            const prevCenterY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[prevPageInd].centerY;

            let prevBackEndX;
            let prevBackEndY;
            let prevFrontEndX;
            let prevFrontEndY;
            if (currLevel > prevLevel) {
              // Back Terminal Point Position
              prevBackEndX =
                prevCenterX + Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2);
              prevBackEndY = prevCenterY - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2;

              // Front Terminal Point Position
              prevFrontEndX =
                prevCenterX - Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5);
              prevFrontEndY = prevCenterY + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5;

              prevBackEndPoint.style('visibility', 'visible');
              currFrontEndPoint.style('visibility', 'visible');

              if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
                // Connector Position
                currConnector =
                  _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].connections[h];
                currConnector
                  .style('visibility', 'visible')
                  .attr('x1', prevBackEndX)
                  .attr('y1', prevBackEndY)
                  .attr('x2', currFrontEndX)
                  .attr('y2', currFrontEndY)
                  .classed('cujLine', true)
                  .style('visibility', 'visible')
                  .style('stroke-width', sW);
              }
            } else if (currLevel < prevLevel) {
              // Back Terminal Point Position
              prevBackEndX =
                prevCenterX + Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2);
              prevBackEndY = prevCenterY - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2;

              // Front Terminal Point Position
              prevFrontEndX =
                prevCenterX - Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5);
              prevFrontEndY = prevCenterY + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5;

              currBackEndPoint.style('visibility', 'visible');
              prevFrontEndPoint.style('visibility', 'visible');

              if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
                // Connector Position
                currConnector =
                  _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].connections[h];
                currConnector
                  .style('visibility', 'visible')
                  .attr('x1', prevFrontEndX)
                  .attr('y1', prevFrontEndY)
                  .attr('x2', currBackEndX)
                  .attr('y2', currBackEndY)
                  .classed('cujLine', true)
                  .style('visibility', 'visible')
                  .style('stroke-width', sW);
              }
            } else {
              // Front Terminal Point Position
              prevFrontEndX =
                prevCenterX - Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5);
              prevFrontEndY = prevCenterY + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5;

              currFrontEndPoint.style('visibility', 'visible');
              prevFrontEndPoint.style('visibility', 'visible');

              if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
                // Connector Position
                currConnector =
                  _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].connections[h];
                currConnector
                  .style('visibility', 'visible')
                  .attr('x1', prevFrontEndX)
                  .attr('y1', prevFrontEndY)
                  .attr('x2', currFrontEndX)
                  .attr('y2', currFrontEndY)
                  .classed('cujLine', true)
                  .style('visibility', 'visible')
                  .style('stroke-width', sW);
              }
            }
          } else {
            // FINALLY, WE CEHCK TO SEE IF THE PAGE IS THE FIRST STEP IN THE CUJ

            // if so, we only render a partical path from the starting dot to the corresponding start page.
            const currStartX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartCoordinates[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].x;
            const currStartY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartCoordinates[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].y;

            // Front Terminal Point Position
            currFrontEndX =
              currCenterX - Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5);
            currFrontEndY = currCenterY + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 5;

            currFrontEndPoint.style('visibility', 'visible');

            if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
              // Connector Position
              currConnector =
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].connections[0];
              currConnector
                .style('visibility', 'visible')
                .attr('x1', currStartX)
                .attr('y1', currStartY)
                .attr('x2', currFrontEndX)
                .attr('y2', currFrontEndY)
                .classed('cujLine', true)
                .style('visibility', 'visible')
                .style('stroke-width', sW);
            }
          }

          // Piggy-back prev page index var for comparison in next run of for loop.
          prevPageInd = i;
        }
      }
    }
  }
}

// Loop through all CUJ sheets, find and map corresponding CUJ starting points on map
function drawCUJStartPoint() {
  // Convert degrees to radians for later calculations.
  const secRads = Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_3__["state"].secondaryAngleDegrees); // Radians Conversion for Secondary Angle Value

  // Local var that will help us determine if multiple journeys share the same starting page.
  let prevCount = 0;

  // Array that will hold the starting coordinates of each CUJ.
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartCoordinates = [];

  // First, we need to loop thru the CUJ sheets.
  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; j++) {
    // Within the sheet, evaluate the different steps and create a nested array of indexes.
    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j];

    if (steps.length > 0) {
      // The first cell in the sheet will provide the journey name.
      const currStartName = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j][0].Page;

      prevCount = 0;

      // Next, loop thru the rows in each CUJ sheet to get the Step info for that journey.
      for (let b = 0; b < j; b++) {
        // First row provides starting point for that specific CUJ.
        const pName = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[b][0].Page;

        // Looks to see if the matching page was also the starting page for a previous journey.
        // That way we can make sure the starting 'dots' do NOT overlap.
        if (pName == currStartName) {
          prevCount += 1;
        }
      }

      const startMultiple = (prevCount * _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth) / 3;
      let nameMatch = false;

      // LOOP THRU CUJ SHEETS
      for (let h = 0; h < steps.length; h++) {
        // Next, Loop thru origin and/or rows array so we can match page names to journey starts.
        for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins.length; i++) {
          // CENTER OF PAGE RENDERING & STARTING POINT OF TOP CONNECTOR
          const currCenterX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].centerX;
          const currCenterY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].centerY;

          // LOOP THRU EXISTING ROWS ARRAY
          const currName = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name; // PAGE NAME

          // Opnce we confirm a match, then we can drop the CUJ starting point on the map.
          if (currName == steps[h].Page) {
            if (h == 0 || (h > 0 && nameMatch == false)) {
              nameMatch = true;

              // Place the starting dot using trig and maintaining 2.5D perspective.
              // startMultiple handles and multiplies the padding between the journey starts on a single page -- that way there is no overlapping starting points.
              const currInputX =
                currCenterX -
                Math.tan(secRads) * (_state__WEBPACK_IMPORTED_MODULE_3__["state"].vertPadding / 3 + startMultiple);
              const currInputY =
                currCenterY + (_state__WEBPACK_IMPORTED_MODULE_3__["state"].vertPadding / 3 + startMultiple);
              let activeColor;

              if (j == _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd && _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode) {
                activeColor = '455A64';
              } else {
                activeColor = '4285f4';
              }

              if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].start
                  .attr('cx', currInputX)
                  .attr('cy', currInputY)
                  .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 8)
                  .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 16)
                  .style('fill', activeColor)
                  .style('cursor', 'pointer')
                  .style('fill', '455A64')
                  .style('visibility', 'visible');

                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].overlayStart
                  .attr('cx', currInputX)
                  .attr('cy', currInputY)
                  .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 8)
                  .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 16)
                  .style('cursor', 'pointer')
                  .style('fill', activeColor)
                  .style('visibility', 'visible');

                // SAVE LOCATION of starting point for later use.
                const locObj = { x: currInputX, y: currInputY };
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartCoordinates.push(locObj);
              } else {
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].overlayStart.style('visibility', 'hidden');
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].start.style('visibility', 'hidden');
              }

              // CUJ START LABEL

              // Place Text Label next to corresponding starting point.
              const currTextWidth = _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight * 2.1;
              const currTextX = currInputX - currTextWidth;
              const currTextY =
                currInputY +
                5 -
                Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_3__["state"].primaryAngleDegrees)) *
                  currTextWidth;

              let currColor;

              if (j == _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd && _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode) {
                currColor = '455A64';
              } else {
                currColor = '4285f4';
              }

              const degString = `skewY(${_state__WEBPACK_IMPORTED_MODULE_3__["state"].primaryAngleDegrees}deg)`;

              if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].text
                  .classed('page-label', true)
                  .style('width', _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujLabelWidth)
                  .style('font-size', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageLabelSize / 1.25)
                  .style('transform', degString)
                  .style('left', currTextX)
                  .style('color', currColor)
                  .style('text-align', 'right')
                  .style('cursor', 'pointer')
                  .style('visibility', 'visible')
                  .style('opacity', 1);
              } else {
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].text
                  .style('visibility', 'hidden')
                  .style('opacity', 0);
              }

              const currTextHeight = document.getElementById(`sT${j}`)
                .clientHeight;
              _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].text.style(
                'top',
                currTextY - currTextHeight + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageLabelSize
              );

              // If user continues to zoom out, hide the text label.
              if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel < 0.35 || _state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].text
                  .style('visibility', 'hidden')
                  .style('opacity', 0);
              } else {
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].text
                  .style('visibility', 'visible')
                  .style('opacity', 1);
              }
            }
          }
        }

        if (nameMatch == false) {
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].start.style('visibility', 'hidden');
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].overlayStart
            .style('visibility', 'hidden')
            .style('cursor', 'pointer');
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].text.innerHTML = '';
          d3.select(`#sT${j}`).style('visibility', 'hidden');
        }
      }
    }
  }
}

/* =======================================================

 CUJ SELECTION, WALK THROUGH & INTERACTION

 ========================================================
 */

// NEED TO FIX: This entire section is hacked together and could use a major refactoring.
// When visualization is updated, We check to see if there is an active CUJ.
function cujCheck() {
  // ALWAYS DRAW CUJ STARTING POINTS, THAT WAY USERS HAVE A WAY TO ACCESS AND VIEW EACH CUJ.
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujSheetNames.length > 0) {
    clearMarkers();
  }
  if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].flattenMap) {
    drawCUJStartPoint();
  } else {
    drawFlatCUJStartPoint();
  }

  // Evaluate whether or not we're viewing a CUJ.
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode) {
    // If A CUJ IS ACTIVE, THEN MAKE SURE THE CUJ ELEMENTS ARE DRAWN

    // Call to draw connection pathways
    if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].flattenMap) {
      drawFlatCUJConnectors();
    } else {
      drawCUJConnectors();
    }
    // Call to draw Step states on pages
    // drawCUJSteps(); ///CONSIDER FIXING: NOT SURE IF THIS FUNCTION IS RELEVANT ANY MORE _ PART OF OLD CODE

    if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].flattenMap) {
      drawFlatMarkers();
    } else {
      drawMarkers();
    }

    // Show the CUJ details card on the first step.
    showCUJCard();

    // NEED TO FIX: Right now there are two versions of each CUJ Starting "dot"
    // The first appears on the overlay plan and appears on top of the rendered pathway.
    // The second appears beneath and is always persistant.
    for (let c = 0; c < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts.length; c++) {
      // Turn off visibility on default starting 'dot'
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[c].start.style('visibility', 'hidden');

      // Turn on visibility of overlayd starting 'dot'
      if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[c].overlayStart.style('visibility', 'visible');
      } else {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[c].overlayStart.style('visibility', 'hidden');
      }

      // Check to find which CUJ is active.
      // Then, apply the selected state and text to the active CUJ starting point
      // Includes a black dot, and "HIDE CUJ" text plus a Close (X).
      // This button can be toggled on and off.

      if (c != _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd) {
        // If not active CUJ
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[c].text.style('color', '4285f4'); //
      } else {
        // If Active CUJ
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[c].text.style('color', '455A64'); //
      }
    }

    // SHOWS FULL CUJ OVERLAY
    // Most of the CUJ info is rendered in this overlay. This appears on top of the renderded map.
    // I've been referring to the overlay as one of the "planes" in previous functions.
    // See sketches/perspective_planes_OLD.png
    // NOTE: The overlay inherently disables the page hover states that are avaible on the base IA map.
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujOverlay.style('visibility', 'visible');

    // If we're not viewing a CUJ and only the base IA Map (cujMode==false):
  } else if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujSheetNames.length > 0) {
    // Hide approproate CUJ layers, such as the overlay, steps and card.
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujOverlay.style('visibility', 'hidden');
    hideCUJSteps();
    hideCUJCard();
    clearMarkers();

    // Loop thru all pages to hide step numbers, CUJ highlight states, etc.
    for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].pages[i].hoverEllipse.style('opacity', 0).classed('trans', false);
      if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].flattenMap) {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].pages[i].hoverEllipse
          .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 2)
          .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 2);
      } else {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].pages[i].hoverEllipse
          .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth)
          .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 2);
      }

      // Loop thru CUJ Starts array and turn off the overlay versions,
      // Set the original starts to visible.
      // Ned to fix - this seems to be a redundant step. There's no need to manage two instances of the same CUJ starting point 'dot'.
      for (let cc = 0; cc < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts.length; cc++) {
        if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[cc].start.style('visibility', 'visible');
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[cc].overlayStart.style('visibility', 'hidden');
        } else {
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[cc].start.style('visibility', 'hidden');
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[cc].overlayStart.style('visibility', 'hidden');
        }
      }
    }
  }
}

// [Fn] Reset CUJ starting labels
function resetCUJStartText() {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts.length; i++) {
    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[i];
    const label = steps[0].Title;

    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[i].text.style('color', '4285f4'); //
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[i].text.text(label);
  }
}

// / ////// CHANGING THE VIEW TO START CUJ ////////////////

// When a CUJ Start 'dot' is clicked, the map auto zooms and scrolls to focus on the first step of the CUJ.
// CONSIDER FIXING: Can we use animation here so the transition is less jarring?
function snapToCUJStartLoc() {
  moveCUJCard();

  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts.length; i++) {
    if (i == _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd) {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].text.style('color', '455A64');
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].overlayStart
        .style('fill', '455A64')
        .style('visibility', 'visible');
    } else {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[i].text.style('color', '4285f4');
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[i].overlayStart.style('visibility', 'hidden');

      if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[i].start
          .style('fill', '4285f4')
          .style('visibility', 'visible');
      } else {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[i].start
          .style('fill', '4285f4')
          .style('visibility', 'hidden');
      }
    }
  }
}

// / /// FORWARD/BACKWARD NAVIGATION WITHIN A CUJ ////////

// Advances active step when Next Btn is clicked in CUJ Details card
function getNextCUJCard() {
  Object(_transitions_scroll__WEBPACK_IMPORTED_MODULE_4__["stopScrollTransition"])();
  Object(_transitions_zoom__WEBPACK_IMPORTED_MODULE_5__["stopZoomTransition"])();
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd += 1;
  const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd];

  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd == steps.length) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd = steps.length - 1;
  }
  getActiveCUJCard();
}

// Navigate to previous step when Back Btn is clicked within CUJ Details Card
function getPrevCUJCard() {
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd -= 1;
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd <= 0) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd = 0;
  }
  getActiveCUJCard();
}

// / /// DISPLAYING AND UPDATING THE CUJ CARD //////////

// When viewing a CUJ, the details card should be visible.
function showCUJCard() {
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].currCard.style('visibility', 'visible');
  d3.select('#nextStep').style('visibility', 'visible');
  getActiveCUJCard();
}

// Find the current CUJ step, and display the step's details in the CUJ card.
// This includes: CUJ Title, User, Step Description, and Progress Bar
function getActiveCUJCard() {
  // Store active step data in local vars.
  const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd];
  const currCUJTitle = steps[0].Title;
  const currDescription = steps[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd].Step;
  const currUser = steps[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd].Users;
  const currLink = steps[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd].Mockups;

  // Set up vars for card HTML elements.
  const currTitleElement = document.getElementById('cujTitle');
  const currUserElement = document.getElementById('cujUser');
  const currDescriptionElement = document.getElementById('cujDescription');
  const currGalLink = d3.select('#galleryLink');
  const curGalLinkContainer = d3.select('#galBtn');

  // Vars for card nav (back/next) controls.
  const currNextBtn = d3.select('#nextStep');
  const currPrevBtn = d3.select('#prevStep');

  // Display step-specific info in card elements.
  currTitleElement.innerHTML = currCUJTitle;
  currUserElement.innerHTML = currUser;
  currDescriptionElement.innerHTML = `${currDescription}`;

  // Set up Gallery link, if one exists.
  currGalLink.attr('href', currLink);

  // NAVIGATION CONTRLLS
  // This next section defines enabling and disabling of next/back buttons within the card

  // If last step, then disable the Next button.
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd == steps.length - 1) {
    currNextBtn.style('visibility', 'hidden');
  } else {
    currNextBtn.style('visibility', 'visible');
  }

  // If first step, then disable the Back button.
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd == 0) {
    currPrevBtn.style('visibility', 'hidden');
  } else {
    currPrevBtn.style('visibility', 'visible');
  }

  // If Gallery Link exists, show it. Otherwise, hide it.
  if (currLink == '') {
    curGalLinkContainer.style('visibility', 'hidden');
  } else {
    curGalLinkContainer.style('visibility', 'visible');
  }

  // Make call to update Card's progress bar
  updateCUJCardProgress();

  // Make call to move the card to the current page/steps position.
  moveCUJCard();
}

// Update progress bar based on current location in CUJ.
// The progress bar does a nice job of showing progress within an overall CUJ.
function updateCUJCardProgress() {
  const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd];
  const percent = ((_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd + 1) / steps.length) * 100;
  const pString = `${percent}%`;
  d3.select('#progress').style('width', pString);
}

// Update the X/Y location of the card
// Then, determine if we need to scroll to bring the card into view,
// of if it already fits on the current screan and is readable.
function moveCUJCard() {
  // Determine X/Y coordinates of CUJ Details Card
  // This is calculated based on page registration points.
  // Since it's not a 2.5D element, we don't need to run all the trig calculations.
  const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd];
  let currX;
  let currY;
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
    // Loop thru rows.
    // If active Step Name matches Page Name, use the matching page's coordinates as a reference for placing the CUJ card.
    if (steps[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd].Page == _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name) {
      currX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[i].x + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 3;
      currY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[i].y;
      break;
    }
  }

  // Set Card Position
  // state.currCard.style('left', currX).style('top', currY);

  // Next, Determine if the card is off screen and if we need to apply a scroll animation to view the card.
  // endScrollX/Y vars are the target scroll-to locations for the Window.
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].endScrollX = currX - _state__WEBPACK_IMPORTED_MODULE_3__["state"].width / 2;
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].endScrollY = currY - _state__WEBPACK_IMPORTED_MODULE_3__["state"].height / 2;

  // Checks to see if EndX and EndY Positions are within Scope. If they're not, then rescope target scroll vars (endScrollX, endScrollY);
  // Horizontal scrolling range.
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].endScrollX > _state__WEBPACK_IMPORTED_MODULE_3__["state"].svgWidth - _state__WEBPACK_IMPORTED_MODULE_3__["state"].width) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].endScrollX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].svgWidth - _state__WEBPACK_IMPORTED_MODULE_3__["state"].width;
  } else if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].endScrollX < 0) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].endScrollX = 0;

    // Vertical Scrolling range.
  } else if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].endScrollY > _state__WEBPACK_IMPORTED_MODULE_3__["state"].svgHeight - _state__WEBPACK_IMPORTED_MODULE_3__["state"].height) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].endScrollY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].svgHeight - _state__WEBPACK_IMPORTED_MODULE_3__["state"].height;
  }

  // Next, make sure no scroll animation is currently taking place.
  // If it is, then kill it.
  // Scrolling is based on a homemade interval and tween equation.
  Object(_transitions_scroll__WEBPACK_IMPORTED_MODULE_4__["stopScrollTransition"])();

  // Store current window scroll location (X/Y) in local vars.
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].currScrollX = _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollLeft;
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].currScrollY = _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop;

  // Set maximum range for scroll (X/Y).
  const windowMaxRangeX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].currScrollX + _state__WEBPACK_IMPORTED_MODULE_3__["state"].width;
  const windowMaxRangeY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].currScrollY + _state__WEBPACK_IMPORTED_MODULE_3__["state"].height;

  // Measure card height for proper range calculations.
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujCardHeight = document.getElementById('cujCard').clientHeight;

  // CHECKS TO SEE IF CARD FALLS WITHIN THE CURRENT WINDOW, BEFORE INITIALIZING AUTOSCROLL ANIMATION
  if (
    currX > _state__WEBPACK_IMPORTED_MODULE_3__["state"].currScrollX &&
    currX + _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujCardWidth < windowMaxRangeX &&
    currY > _state__WEBPACK_IMPORTED_MODULE_3__["state"].currScrollY &&
    currY + _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujCardHeight < windowMaxRangeY
  ) {
    // DO NOTHING.
  } else {
    // Start animated scroll interval.
    Object(_transitions_scroll__WEBPACK_IMPORTED_MODULE_4__["startScrollTransition"])();
  }

  updateMarkers();
}

// / ///// SHOW/HIDE AND RESET FUNCTIONS FOR CUJ MODE  //////////////////

// When turning off CUJ Mode, the card is hidden
function hideCUJCard() {
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].currCard.style('visibility', 'hidden');
  d3.select('#nextStep').style('visibility', 'hidden');
  d3.select('#prevStep').style('visibility', 'hidden');
  resetCUJCardProgress();
}

// CUJ status always resets when cujMode is turned off, or if the active CUJ changes/different journey is clicked.
function resetCUJCardProgress() {
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujSheetNames.length > 0 && _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd > -1) {
    const percent = 1;
    const pString = `${percent}%`;
    d3.select('#progress').style('width', pString);
  }
}

// When CUJ mode is exited, or a different CUJ is selected, we first have to hide all the current CUJ connections.
function hideCUJConnectors() {
  // REMOVE LINE< TITLE AND NOTE
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
    // Draw Front Circle
    const currFront = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].frontEndPoint;
    const currBack = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].backEndPoint;

    currFront.style('visibility', 'hidden');
    currBack.style('visibility', 'hidden');
  }

  // HIDE ALL ACTIVE CUJ CONNECTORS
  for (let c = 0; c < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; c++) {
    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[c];
    // Loop through array of steps listed within specific sheet.
    for (let h = 0; h < steps.length; h++) {
      const currConnector = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection[c].connections[h];
      currConnector.style('visibility', 'hidden');
    }
  }
}

function hideCUJSteps() {
  d3.select('#galBtn').style('visibility', 'hidden');
  for (let x = 0; x < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; x++) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].pages[x].hoverEllipse
      .style('opacity', 0)
      .classed('trans', true)
      .attr('rx', 0)
      .attr('ry', 0);
  }
}

// Loop through all CUJ sheets, find and map corresponding CUJ starting points on map
function drawFlatCUJStartPoint() {
  // Array that will hold the starting coordinates of each CUJ.
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartCoordinates = [];

  // Local var that will help us determine if multiple journeys share the same starting page.
  let prevCount = 0;

  // First, we need to loop thru the CUJ sheets.
  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; j++) {
    // Within the sheet, evaluate the different steps and create a nested array of indexes.
    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j];

    if (steps.length > 0) {
      // Need to reset prevCount var before looking at next journey
      prevCount = 0;

      // The first cell in the sheet will provide the journey name.
      const currStartName = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[j][0].Page;

      // Next, loop thru the rows in each CUJ sheet to get the Step info for that journey.
      for (let b = 0; b < j; b++) {
        // First row provides starting point for that specific CUJ.
        const pName = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[b][0].Page;

        // Looks to see if the matching page was also the starting page for a previous journey.
        // That way we can make sure the starting 'dots' do NOT overlap.
        if (pName == currStartName) {
          prevCount += 1;
        }
      }

      const startMultiple = (prevCount * _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth) / 3;

      let nameMatch = false;

      // LOOP THRU CUJ SHEETS
      for (let h = 0; h < steps.length; h++) {
        // Next, Loop thru origin and/or rows array so we can match page names to journey starts.
        for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins.length; i++) {
          // CENTER OF PAGE RENDERING & STARTING POINT OF TOP CONNECTOR
          const currCenterX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].centerX;
          const currCenterY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].centerY;

          // LOOP THRU EXISTING ROWS ARRAY
          const currName = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name; // PAGE NAME

          // Opnce we confirm a match, then we can drop the CUJ starting point on the map.
          if (currName == steps[h].Page) {
            if (h == 0 || (h > 0 && nameMatch == false)) {
              nameMatch = true;

              // Place the starting dot using trig and maintaining 2.5D perspective.
              // startMultiple handles and multiplies the padding between the journey starts on a single page -- that way there is no overlapping starting points.
              const currInputX =
                currCenterX - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 5 - startMultiple;
              const currInputY = currCenterY;
              let activeColor;

              if (j == _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd && _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode) {
                activeColor = '455A64';
              } else {
                activeColor = '4285f4';
              }

              if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].start
                  .attr('cx', currInputX)
                  .attr('cy', currInputY)
                  .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 12)
                  .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 12)
                  .style('fill', activeColor)
                  .style('stroke', '#ffffff')
                  .style('cursor', 'pointer')
                  .style('fill', '455A64')
                  .style('visibility', 'visible');

                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].overlayStart
                  .attr('cx', currInputX)
                  .attr('cy', currInputY)
                  .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 12)
                  .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 12)
                  .style('cursor', 'pointer')
                  .style('fill', activeColor)
                  .style('stroke', '#ffffff')
                  .style('visibility', 'visible');
              } else {
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].start.style('visibility', 'hidden');
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].overlayStart.style('visibility', 'hidden');
              }

              // SAVE LOCATION of starting point for later use.
              const locObj = { x: currInputX, y: currInputY };
              _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartCoordinates.push(locObj);

              // MAKE SURE TEXT REMAINS HIDDEN
              _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].text
                .classed('page-label', true)
                .style('visibility', 'hidden');
            }
          }
        }

        if (nameMatch == false) {
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].start.style('visibility', 'hidden');
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].overlayStart
            .style('visibility', 'hidden')
            .style('cursor', 'pointer');
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[j].text.innerHTML = '';
          d3.select(`#sT${j}`).style('visibility', 'hidden');
        }
      }
    }
  }
}

function drawFlatCUJConnectors() {
  let prevPageInd = 0;
  const sW = Math.ceil(_state__WEBPACK_IMPORTED_MODULE_3__["state"].zoomLevel * 4);

  // FIRST, LOOP THRU CUJ SHEETS
  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows.length; j++) {
    // NEXT, Pull out array of steps from the above array.
    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd];

    // Loop through array of steps listed within specific sheet.
    for (let h = 0; h < steps.length; h++) {
      // Next, evaluate rows array to match steps to pages rendered within the map.
      // NOTE: Rows and Origins Array have same length.
      // Since there's a 1:1 relationship between the indexes of both arrays, we loop thru one, but use the same index value to reference info in the other array.
      for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins.length; i++) {
        // LOOP THRU EXISTING ROWS ARRAY
        const currName = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name; // PAGE NAME
        const currLevel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Level; // PAGE LEVEL
        const currCenterX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].centerX;
        const currCenterY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].centerY;
        let prevLevel = 0;

        // Checks for a matching page name so that we can start mapping the path and 'connecting the dots' between pages.
        if (currName == steps[h].Page) {
          // DRAW START AND END POINTS

          // Terminal Point in Back of Page
          const currBackEndX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].rightCenterX; // Starting points don't fall on the exact center of the page. To maintain the
          const currBackEndY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[i].centerY;

          // Terminal Point in Front of Page
          let currFrontEndX = currCenterX - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 10; // Starting points don't fall on the exact center of the page. To maintain the
          let currFrontEndY = currCenterY;

          let currFrontEndPoint;
          let prevFrontEndPoint;
          let currBackEndPoint;
          let prevBackEndPoint;

          // Draw Front Circle
          if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
            _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].frontEndPoint
              .attr('cx', currFrontEndX)
              .attr('cy', currFrontEndY)
              .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 12)
              .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 12);

            _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].backEndPoint
              .attr('cx', currBackEndX)
              .attr('cy', currBackEndY)
              .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 12)
              .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth / 12);

            currFrontEndPoint = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].frontEndPoint;
            prevFrontEndPoint = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[prevPageInd].frontEndPoint;
            currBackEndPoint = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[i].backEndPoint;
            prevBackEndPoint = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujEndPoints[prevPageInd].backEndPoint;
          }

          let currConnector;
          let prevBackEndX;
          let prevBackEndY;
          let prevFrontEndX;
          let prevFrontEndY;
          // To start drawing pathways, we need to first check that the connection is coming from an existing page.
          // This int will be >0 if the page in question is one of the later steps within the CUJ.
          if (h > 0) {
            prevLevel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[prevPageInd].Level;

            // Vars to hold data from previous step page.
            const prevCenterX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[prevPageInd].centerX;
            const prevCenterY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[prevPageInd].centerY;

            if (currLevel > prevLevel) {
              // Back Terminal Point Position
              prevBackEndX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[prevPageInd].rightCenterX;
              prevBackEndY = prevCenterY;

              // Front Terminal Point Position
              prevFrontEndX = currCenterX - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 10;
              prevFrontEndY = prevCenterY;

              prevBackEndPoint.style('visibility', 'visible');
              currFrontEndPoint.style('visibility', 'visible');

              // Connector Position
              currConnector =
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].connections[h];
              currConnector
                .style('visibility', 'visible')
                .attr('x1', prevBackEndX)
                .attr('y1', prevBackEndY)
                .attr('x2', currFrontEndX)
                .attr('y2', currFrontEndY)
                .classed('cujLine', true)
                .style('visibility', 'visible')
                .style('stroke-width', sW);
            } else if (currLevel < prevLevel) {
              // Back Terminal Point Position
              prevBackEndX = prevCenterX + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 10;
              prevBackEndY = prevCenterY;

              // Front Terminal Point Position
              prevFrontEndX = prevCenterX - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 10;
              prevFrontEndY = prevCenterY;

              currBackEndPoint.style('visibility', 'visible');

              // Connector Position
              currConnector =
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].connections[h];
              currConnector
                .style('visibility', 'visible')
                .attr('x1', prevFrontEndX)
                .attr('y1', prevFrontEndY)
                .attr('x2', currBackEndX)
                .attr('y2', currBackEndY)
                .classed('cujLine', true)
                .style('visibility', 'visible')
                .style('stroke-width', sW);
            } else {
              // Front Terminal Point Position
              prevFrontEndX = prevCenterX - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 10;
              prevFrontEndY = prevCenterY;

              currFrontEndPoint.style('visibility', 'visible');
              prevFrontEndPoint.style('visibility', 'visible');

              // Connector Position
              currConnector =
                _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].connections[h];
              currConnector
                .style('visibility', 'visible')
                .attr('x1', prevFrontEndX)
                .attr('y1', prevFrontEndY)
                .attr('x2', currFrontEndX)
                .attr('y2', currFrontEndY)
                .classed('cujLine', true)
                .style('visibility', 'visible')
                .style('stroke-width', sW);
            }
          } else {
            // FINALLY, WE CEHCK TO SEE IF THE PAGE IS THE FIRST STEP IN THE CUJ

            // if so, we only render a partical path from the starting dot to the corresponding start page.
            const currStartX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartCoordinates[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].x;
            const currStartY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStartCoordinates[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].y;

            // Front Terminal Point Position
            currFrontEndX = currCenterX - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 10;
            currFrontEndY = currCenterY;

            currFrontEndPoint.style('visibility', 'visible');

            // Connector Position
            currConnector =
              _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujConnectCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].connections[0];
            currConnector
              .style('visibility', 'visible')
              .attr('x1', currStartX)
              .attr('y1', currStartY)
              .attr('x2', currFrontEndX)
              .attr('y2', currFrontEndY)
              .classed('cujLine', true)
              .style('visibility', 'visible')
              .style('stroke-width', sW);
          }

          // Piggy-back prev page index var for comparison in next run of for loop.
          prevPageInd = i;
        }
      }
    }
  }
}

function drawFlatMarkers() {
  // Pull out array of steps from the above array.
  if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
    const steps = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd];

    // Reset Current Marker Arrays
    let currCUJMarkerArray = [];
    currCUJMarkerArray = _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMarkerCollection[_state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd].markers;

    // Loop through array of steps listed within specific sheet.
    for (let h = 0; h < steps.length; h++) {
      const currCircle = currCUJMarkerArray[h].ellipseObj;
      const currText = currCUJMarkerArray[h].stepText;
      const currPageName = currCUJMarkerArray[h].page;
      let matchedInd = -1;

      for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
        if (currPageName == _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Name) {
          matchedInd = i;
        }
      }

      if (matchedInd > -1) {
        const numberX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[matchedInd].centerX;
        const numberY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[matchedInd].centerY;
        const numberStr = h + 1;
        const currHex = _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageColors[matchedInd];

        const currIDStr = `circle${h}`;
        // TODO: Should this be `rotate(0deg)`?
        const degString = `rotate(${0}deg) skewX(0deg)`;

        if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
          // Style Number Text
          currText
            .style('position', 'absolute')
            .text(numberStr)
            .style('top', numberY - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 3)
            .style('width', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight)
            .style('text-align', 'center')
            .style('left', numberX - _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2)
            .style('font-size', _state__WEBPACK_IMPORTED_MODULE_3__["state"].stepNoLabelSize / 1.5)
            .style('transform', degString)
            .style('color', currHex + 10)
            .style('visibility', 'visible')
            .style('opacity', 100)
            .classed('trans', false);
        }
        currText.attr('id', currIDStr);

        // Sets up positioning of
        const currHeight = document.getElementById(currIDStr).clientHeight;
        const currWidth = document.getElementById(currIDStr).clientWidth;

        if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
          currText
            .style('top', numberY - currHeight / 2)
            .style('left', numberX - currWidth / 2);

          currCircle
            .attr('rx', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight)
            .attr('ry', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight)
            .attr('cx', numberX)
            .style('visibility', 'visible')
            .style('fill', currHex + 5)
            .style('stroke', currHex + 30)
            .style('stroke-width', 1)
            .style('opacity', 100)
            .classed('trans', false);
        }
      }
    }
  }
}

function hideAllCUJStarts() {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts.length; i++) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts[i].text.style('visibility', 'hidden');
  }
}

// Handle CUJ 'Dot' Start click [IMPORTANT]
function cujStartClick() {
  // CONSIDER FIXING: There are a lot of conditionals that have been carefully ordered in the function.
  // It seems like there's a better structure that can be applied here.
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeStepInd = 0; // RESET ACTIVE CUJ INDEX

  // Margin for evaluating whether or not to begin a zoom transitioning when exiting CUJ mode.
  const floatMargin = 0.2;
  let enableZoom = true;

  // Check to see if a CUJ is already active. If so, hide it before showing the new CUJ.
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode) {
    hideCUJConnectors();
    hideCUJSteps();
    clearMarkers();
  }

  // IF CUJ CONTROL IS TOGLED ON/OFF
  // CONSIDER FIXING: This could be cleaned up.
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode && _state__WEBPACK_IMPORTED_MODULE_3__["state"].prevActiveCUJInd == _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode = !_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode;
  } else if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode == false) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode = !_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode;
  }

  // IF CUJ MODE IS NOW ACTIVE
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode) {
    // If a node is selected, hide it before jumping into CUJ mode.
    Object(_page_detailsCard__WEBPACK_IMPORTED_MODULE_7__["hideNodePanel"])();

    // CONSIDER FIXING: The automatic snapping to this zoom level could be jarring for end users
    // Think about ways to apply animation to ease this transition.
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel = 1.5; // Automatically set zoom level
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].isCUJZooming = true;
  } else {
    // If CUJs exist, this is a redundant step to reset CUJ text.
    if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujSheetNames.length > 0) {
      resetCUJStartText();
    }

    // Store zoom & scroll values for when user Exits CUJ mode
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].isCUJZooming = false;

    // Recall and adjust zoom
    if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].preCujZoomLevel <= 0.4) {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].preCuZoomLevel = 0.5;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel = 0.5;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].flattenMap = false;
    } else if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].preCujZoomLevel <= 0.7) {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].preCujZoomLevel;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].flattenMap = false;
      // If zoom delta is outside acceptable range, do auto zoom out.
    } else if (
      (_state__WEBPACK_IMPORTED_MODULE_3__["state"].preCujZoomLevel < _state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel - floatMargin &&
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].preCujZoomLevel > _state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel + floatMargin) ||
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode
    ) {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].preCujZoomLevel;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].flattenMap = false;
    } else {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].preCujZoomLevel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel;
      enableZoom = false;
    }
  }

  if (enableZoom) {
    Object(_transitions_zoom__WEBPACK_IMPORTED_MODULE_5__["startZoomTransition"])();
  }

  // Piggy-backing acitve CUJ vars for later run through.
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].prevActiveCUJInd = _state__WEBPACK_IMPORTED_MODULE_3__["state"].activeCUJInd;

  // Update the viz based on new zoom level.
  Object(_vis__WEBPACK_IMPORTED_MODULE_6__["updateVis"])();

  // If CUJ Mode - snap to starting location after the vis has been updated
  if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].cujMode) {
    snapToCUJStartLoc();
  }
}

// As the map zooms out, CUJ marker labels dissappear and only the dots remain.
// TODO: Come up with better affordances and CUJ marker style.
function updateCUJStartVisibility() {
  for (const cujStart of _state__WEBPACK_IMPORTED_MODULE_3__["state"].cujStarts) {
    cujStart.text.style(
      'visibility',
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].zoomLevel < 0.3 ? 'hidden' : 'visible'
    );
  }
}


/***/ }),

/***/ "./src/elements/page/address.js":
/*!**************************************!*\
  !*** ./src/elements/page/address.js ***!
  \**************************************/
/*! exports provided: createPageAddress, drawPageAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageAddress", function() { return createPageAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPageAddress", function() { return drawPageAddress; });
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _stateUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stateUtilities */ "./src/stateUtilities.js");




function createPageAddress(pageData) {
  const text =
    pageData.Entity === 'component'
      ? `COMPONENT ${pageData.Address.toUpperCase()}`
      : pageData.Address.toUpperCase();
  return _selections__WEBPACK_IMPORTED_MODULE_0__["svgContainerSelection"]
    .append('div')
    .append('text')
    .classed('address-label', true)
    .text(text)
    .style('visibility', 'hidden');
}

function drawPageAddress(color, page, position) {
  let opacity = 1;
  let currVisibility = 'visible';
  if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].flattenMap || _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel < 0.8) {
    opacity = 0;
    currVisibility = 'hidden';
  } else if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].cujMode && !Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_2__["getIsInActiveCUJ"])(page)) {
    opacity = 0.25;
  } else {
    opacity = 1;
  }

  page.address
    .classed('trans', false)
    .style('color', color)
    .style('left', position.x)
    .style('opacity', opacity)
    .style('font-size', _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageLabelSize / 2)
    .style('visibility', currVisibility)
    .style('top', position.y + _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageHeight + _state__WEBPACK_IMPORTED_MODULE_1__["state"].vertPadding / 30)
    .style('transform', `skewY(${_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees}deg)`)
    .style('width', _state__WEBPACK_IMPORTED_MODULE_1__["state"].pageWidth);
}


/***/ }),

/***/ "./src/elements/page/detailsCard.js":
/*!******************************************!*\
  !*** ./src/elements/page/detailsCard.js ***!
  \******************************************/
/*! exports provided: createNodePanel, showNodePanel, hideNodePanel, updateNodePanelInfo, resizeDetailsCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNodePanel", function() { return createNodePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNodePanel", function() { return showNodePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideNodePanel", function() { return hideNodePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNodePanelInfo", function() { return updateNodePanelInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeDetailsCard", function() { return resizeDetailsCard; });
/* harmony import */ var _crosslink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crosslink */ "./src/elements/crosslink.js");
/* harmony import */ var _cuj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cuj */ "./src/elements/cuj.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _hoverEllipse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoverEllipse */ "./src/elements/page/hoverEllipse.js");






function createNodePanel() {
  // Panel Event Listeners
  d3.select('#nodeCloseX').on('click', function () {
    hideNodePanel();
  });
}

function showNodePanel(pageIndex, pageData) {
  updateNodePanelInfo(pageIndex, pageData);
  d3.select('#nodeCard').style('visibility', 'visible');
}

function hideNodePanel() {
  if (_state__WEBPACK_IMPORTED_MODULE_2__["state"].selectedPageIndex > -1) {
    const page = _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[_state__WEBPACK_IMPORTED_MODULE_2__["state"].selectedPageIndex];
    d3.select('#nodeCard').style('visibility', 'hidden');
    page.states.selected = false;
    Object(_hoverEllipse__WEBPACK_IMPORTED_MODULE_3__["updateState"])(page);
  }

  // Need to hide all connected pages and update their states.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages.length; i++) {
    const currPage = _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[i];
    currPage.states.highlightedFromSelect = false;
    currPage.states.highlightedFromHover = false;
    Object(_crosslink__WEBPACK_IMPORTED_MODULE_0__["hideConnectedPages"])(currPage);
  }

  // Need to clear selected state index
  _state__WEBPACK_IMPORTED_MODULE_2__["state"].selectedPageIndex = -1;
  Object(_crosslink__WEBPACK_IMPORTED_MODULE_0__["hideSelectionConnections"])();
}

function updateNodePanelInfo(pageIndex, pageData) {
  // Populate Title and Subtitle
  d3.select('#nodeTitle').text(pageData.Name);
  d3.select('#nodeSection').text(pageData.Section);

  d3.selectAll('.cardList').remove();

  // Checks to see if a description is present. If not, then hide notes section
  if (pageData.Description) {
    d3.select('#descriptionSection').style('display', 'block');

    document.getElementById('nodeDescription').innerHTML = pageData.Description;
  } else {
    d3.select('#descriptionSection').style('display', 'none');
  }

  // Checks to see if notes are present. If not, then hide notes section
  if (pageData.Notes) {
    d3.select('#noteSection').style('display', 'block');

    document.getElementById('nodeNotes').innerHTML = pageData.Notes;
  } else {
    d3.select('#noteSection').style('display', 'none');
  }

  // Checks to see if associated CUJs exist. If so, build list. If not, hide section.
  const currTitles = getAssociatedCUJTitles(pageData);
  if (currTitles.length > 0) {
    d3.select('#journeyListSection').style('display', 'block');

    for (let i = 0; i < currTitles.length; i++) {
      d3.select('#journeyList')
        .append('li')
        .classed('cardList', true)
        .text(currTitles[i])
        .on('click', function () {
          _state__WEBPACK_IMPORTED_MODULE_2__["state"].activeCUJInd = getActiveCUJInd(currTitles[i]);
          Object(_cuj__WEBPACK_IMPORTED_MODULE_1__["cujStartClick"])();
        });
    }
  } else {
    d3.select('#journeyListSection').style('display', 'none');
  }

  // Checks to see if more info button exists. If not, hide it.
  if (pageData.MoreInfoLink) {
    d3.select('#moreInfoBtn').style('display', 'block');
    d3.select('#nodeInfoLink').on('click', () => {
      window.open(pageData.MoreInfoLink, '_blank');
    });
  } else {
    d3.select('#moreInfoBtn').style('display', 'none');
  }

  // Populate Note HTML
  document.getElementById('nodeNotes').innerHTML = pageData.Notes;
}

function getActiveCUJInd(title) {
  let currInd = -1;

  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_2__["state"].cujRows.length; i++) {
    const steps = _state__WEBPACK_IMPORTED_MODULE_2__["state"].cujRows[i];
    const currTitle = steps[0].Title;

    if (title == currTitle) {
      currInd = 0;
      break;
    }
  }
  return currInd;
}

function getAssociatedCUJTitles(pageData) {
  const associatedJourneys = [];

  for (let x = 0; x < _state__WEBPACK_IMPORTED_MODULE_2__["state"].cujRows.length; x++) {
    const steps = _state__WEBPACK_IMPORTED_MODULE_2__["state"].cujRows[x];

    for (let y = 0; y < steps.length; y++) {
      if (steps[y].Page == pageData.Name) {
        associatedJourneys.push(steps[0].Title);
        break;
      }
    }
  }

  return associatedJourneys;
}

function resizeDetailsCard() {
  // Set Max Height of Container
  const offsetHeight =
    document.getElementById('nodeHeader').clientHeight +
    document.getElementById('moreInfoBtn').clientHeight +
    24;
  d3.select('#nodeScrollContainer').style(
    'max-height',
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].height - 298 - offsetHeight
  );
}


/***/ }),

/***/ "./src/elements/page/externalLink.js":
/*!*******************************************!*\
  !*** ./src/elements/page/externalLink.js ***!
  \*******************************************/
/*! exports provided: createPageExternalLinks, drawPageExternalLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageExternalLinks", function() { return createPageExternalLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPageExternalLinks", function() { return drawPageExternalLinks; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math */ "./src/math.js");
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./src/state.js");




function createPageExternalLinks(pageData, pageIndex) {
  if (!pageData.ExternalLinks) {
    return { line: null, text: null };
  }
  const line = _state__WEBPACK_IMPORTED_MODULE_2__["state"].svgDoc.append('line').style('stroke-dasharray', '3, 3');
  const text = _selections__WEBPACK_IMPORTED_MODULE_1__["svgContainerSelection"]
    .append('div')
    .append('text')
    .style('visibility', 'hidden')
    .attr('Id', `extLink${pageIndex}`);

  document.getElementById(
    `extLink${pageIndex}`
  ).innerHTML = `LINKS TO ${pageData.ExternalLinks.toUpperCase()}`;

  return { line, text };
}

// Draw Page Crosslinks
function drawPageExternalLinks(i, hex) {
  // All position calculations are based off of the CLink Reference Point (origins[i].cLinkRefX/...cLinkRefY,
  // which is 3/4 of the page width, at the bottom of the page)
  const currX = _state__WEBPACK_IMPORTED_MODULE_2__["state"].origins[i].cLinkRefX;
  const currY = _state__WEBPACK_IMPORTED_MODULE_2__["state"].origins[i].cLinkRefY;

  // Use Right Triangles to calculate exact placement of elements
  const currAdj = _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageHeight / 2.5;
  const tanXRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_2__["state"].secondaryAngleDegrees);

  // Find endpoint X/Y of dotted line.
  // Note - the starting point is the origins[i].cLinkRefX/...cLinkRefY var.
  const currEndX = currX + Math.tan(tanXRad) * currAdj;
  const currEndY = currY - currAdj;

  // Update the line's position (starting point and end point)
  _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[i].externalLinks.line
    .attr('x1', currX)
    .attr('y1', currY)
    .attr('x2', currEndX)
    .attr('y2', currEndY)
    .style('stroke', hex, 80);

  // Once the line is drawn, place the "CROSS LINK..." Label.

  // Position text and apply proper CSS classes for Text.
  _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[i].externalLinks.text
    .classed('crosslink-label', true)
    .style('left', currEndX + 5)
    .style('top', currEndY + _state__WEBPACK_IMPORTED_MODULE_2__["state"].multipageLabelSize)
    .style('font-size', _state__WEBPACK_IMPORTED_MODULE_2__["state"].multipageLabelSize)
    .style('transform', `skewY(${_state__WEBPACK_IMPORTED_MODULE_2__["state"].primaryAngleDegrees}deg)`)
    .style('width', _state__WEBPACK_IMPORTED_MODULE_2__["state"].externalLinksWidth);

  // Crosslink elements only appear at specific zoom levels.
  // As user zooms out, the cross link elements are hidden.
  if (_state__WEBPACK_IMPORTED_MODULE_2__["state"].targetZoomLevel < 0.8 || _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap) {
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[i].externalLinks.text.style('visibility', 'hidden');
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[i].externalLinks.line.style('visibility', 'hidden');
  } else {
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[i].externalLinks.text.style('visibility', 'visible');
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[i].externalLinks.line.style('visibility', 'visible');
  }
}


/***/ }),

/***/ "./src/elements/page/header.js":
/*!*************************************!*\
  !*** ./src/elements/page/header.js ***!
  \*************************************/
/*! exports provided: createPageHeader, drawPageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageHeader", function() { return createPageHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPageHeader", function() { return drawPageHeader; });
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _stateUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stateUtilities */ "./src/stateUtilities.js");




function createPageHeader() {
  return _selections__WEBPACK_IMPORTED_MODULE_0__["svgContainerSelection"]
    .append('div')
    .style('cursor', 'pointer')
    .style('position', 'absolute');
}

function drawPageHeader(color, isComponent, page) {
  page.header
    .classed('trans', false)
    .style('background', isComponent ? 'transparent' : color)
    .style(
      'border',
      isComponent && _state__WEBPACK_IMPORTED_MODULE_1__["state"].flattenMap ? `1px solid ${color}` : null
    )
    .style('box-sizing', 'border-box')
    .style('height', page.specs.headerHeight)
    .style('left', page.specs.x)
    .style('opacity', _state__WEBPACK_IMPORTED_MODULE_1__["state"].cujMode && !Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_2__["getIsInActiveCUJ"])(page) ? 0.25 : 1)
    .style('top', page.specs.headerY)
    .style(
      'transform',
      `skewY(${page.specs.angle}deg) rotateZ(${page.specs.rotation}deg)`
    )
    .style('width', page.specs.width);
}


/***/ }),

/***/ "./src/elements/page/hoverEllipse.js":
/*!*******************************************!*\
  !*** ./src/elements/page/hoverEllipse.js ***!
  \*******************************************/
/*! exports provided: createPageHoverEllipse, drawPageHoverEllipse, updateState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageHoverEllipse", function() { return createPageHoverEllipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPageHoverEllipse", function() { return drawPageHoverEllipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateState", function() { return updateState; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/state.js");


function createPageHoverEllipse() {
  return _state__WEBPACK_IMPORTED_MODULE_0__["state"].svgDoc.append('ellipse');
}

function drawPageHoverEllipse(color, origin, page) {
  page.hoverEllipse
    .attr(
      'ry',
      _state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap ? _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight / 3 : _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight / 1.5
    )
    .attr('rx', _state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap ? _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight / 3 : _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight)
    .attr('cx', _state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap ? origin.centerX : origin.pBCenterX)
    .attr('cy', _state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap ? origin.centerY : origin.pBCenterY)
    .style('fill', `${color}${_state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap ? 30 : 80}`)
    .style('opacity', 0)
    .style('stroke', `${color}${_state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap ? 50 : 0}`);
}

function updateState(page) {
  // If Selected - Always Show Selected State & Connected Highlights, regardless of previous state.
  if (_state__WEBPACK_IMPORTED_MODULE_0__["state"].transitioningViews) {
    page.hoverEllipse.classed('trans', false).style('opacity', 0);
  } else if (page.states.selected) {
    page.hoverEllipse.classed('trans', true).style('opacity', 1);

    // Else if Hovered - Always Show Hovered State, Regardless of previous state
  } else if (page.states.hovering) {
    page.hoverEllipse.classed('trans', true).style('opacity', 1);

    // Else if Highlight - Only show when something is selected.
  } else if (page.states.highlightedFromSelect) {
    page.hoverEllipse.classed('trans', true).style('opacity', 0.65);

    // Else if highight - only showing when something was hovered on.
  } else if (page.states.highlightedFromHover) {
    page.hoverEllipse.classed('trans', true).style('opacity', 0.45);

    // Else if page is supposed to be highlighted by default
  } else if (page.states.highlightedByDefault) {
    page.hoverEllipse.classed('trans', true).style('opacity', 0.3);

    // Otherwise clear everything out.
  } else {
    page.hoverEllipse.style('opacity', 0);
  }
}


/***/ }),

/***/ "./src/elements/page/index.js":
/*!************************************!*\
  !*** ./src/elements/page/index.js ***!
  \************************************/
/*! exports provided: createPage, drawPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPage", function() { return drawPage; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../colors */ "./src/colors.js");
/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ease */ "./src/ease.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address */ "./src/elements/page/address.js");
/* harmony import */ var _externalLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./externalLink */ "./src/elements/page/externalLink.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./src/elements/page/header.js");
/* harmony import */ var _hoverEllipse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hoverEllipse */ "./src/elements/page/hoverEllipse.js");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label */ "./src/elements/page/label.js");
/* harmony import */ var _multipageLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./multipageLine */ "./src/elements/page/multipageLine.js");
/* harmony import */ var _multipagePanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./multipagePanel */ "./src/elements/page/multipagePanel.js");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./note */ "./src/elements/page/note.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel */ "./src/elements/page/panel.js");














// Page sub-element creation order impacts the appearance of layering.
// `multipageLine` visually ties the `multipagePanels` together.
function createPage(pageData, pageIndex) {
  const externalLinks = Object(_externalLink__WEBPACK_IMPORTED_MODULE_4__["createPageExternalLinks"])(pageData, pageIndex);
  const hoverEllipse = Object(_hoverEllipse__WEBPACK_IMPORTED_MODULE_6__["createPageHoverEllipse"])();
  const isMultipage = pageData.Multipage === 'Yes';
  const multipagePanels = isMultipage ? Object(_multipagePanel__WEBPACK_IMPORTED_MODULE_9__["createPageMultipagePanels"])() : [];
  const multipageLine = isMultipage ? Object(_multipageLine__WEBPACK_IMPORTED_MODULE_8__["createPageMultipageLine"])() : null;
  const panel = Object(_panel__WEBPACK_IMPORTED_MODULE_11__["createPagePanel"])(pageData, pageIndex);
  const header = Object(_header__WEBPACK_IMPORTED_MODULE_5__["createPageHeader"])();
  const label = Object(_label__WEBPACK_IMPORTED_MODULE_7__["createPageLabel"])(pageData, pageIndex);
  const address = Object(_address__WEBPACK_IMPORTED_MODULE_3__["createPageAddress"])(pageData);
  const note = Object(_note__WEBPACK_IMPORTED_MODULE_10__["createPageNote"])(pageData, pageIndex);

  _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages.push({
    address,
    externalLinks,
    hasNote: pageData.Notes !== '',
    header,
    hoverEllipse,
    index: pageIndex,
    label,
    multipageLine,
    multipagePanels,
    name: pageData.Name,
    note,
    panel,
    specs: {
      alpha: null,
      angle: null,
      headerHeight: null,
      headerY: null,
      height: null,
      width: null,
      rotation: null,
      x: null,
      y: null,
    },
    targetSpecs: {
      alpha: null,
      angle: null,
      headerHeight: null,
      headerY: null,
      height: null,
      width: null,
      rotation: null,
      x: null,
      y: null,
    },
    states: {
      selected: false,
      hovering: false,
      highlightedFromSelect: false,
      highlightedFromHover: false,
      highlighted: false,
      highlightedByDefault: false,
    },
  });
}

function drawPage(pageData, pageIndex, notedPagePositionsSorted) {
  const color = Object(_colors__WEBPACK_IMPORTED_MODULE_0__["getSectionColor"])(pageData.Section);
  const isComponent = pageData.Entity === 'component';
  const origin = _state__WEBPACK_IMPORTED_MODULE_2__["state"].origins[pageIndex];
  const page = _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[pageIndex];
  const position = _state__WEBPACK_IMPORTED_MODULE_2__["state"].positions[pageIndex];
  updatePageTargetSpecs(page, position);
  updatePageSpecs(page, position);

  if (pageData.ExternalLinks) {
    Object(_externalLink__WEBPACK_IMPORTED_MODULE_4__["drawPageExternalLinks"])(pageIndex, color);
  }
  if (pageData.Multipage === 'Yes') {
    Object(_multipagePanel__WEBPACK_IMPORTED_MODULE_9__["drawPageMultipagePanels"])(color, page);
    Object(_multipageLine__WEBPACK_IMPORTED_MODULE_8__["drawPageMultipageLine"])(color, origin, page);
  }
  Object(_hoverEllipse__WEBPACK_IMPORTED_MODULE_6__["drawPageHoverEllipse"])(color, origin, page);
  Object(_panel__WEBPACK_IMPORTED_MODULE_11__["drawPagePanel"])(pageData, page);
  Object(_header__WEBPACK_IMPORTED_MODULE_5__["drawPageHeader"])(color, isComponent, page);
  Object(_label__WEBPACK_IMPORTED_MODULE_7__["drawPageLabel"])(page, pageIndex);
  Object(_address__WEBPACK_IMPORTED_MODULE_3__["drawPageAddress"])(color, page, position);
  Object(_note__WEBPACK_IMPORTED_MODULE_10__["drawPageNote"])(page, position, notedPagePositionsSorted);
}

function updatePageSpecs(page) {
  if (_state__WEBPACK_IMPORTED_MODULE_2__["state"].transitioningViews) {
    Object(_ease__WEBPACK_IMPORTED_MODULE_1__["easeQuadratically"])(page);
  } else {
    Object(_ease__WEBPACK_IMPORTED_MODULE_1__["easeInstantly"])(page);
  }
}

function updatePageTargetSpecs(page, position) {
  page.targetSpecs = _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap
    ? {
        alpha: 0,
        angle: 0,
        headerHeight: _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageHeight / 10,
        headerY: position.y + _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageHeight / 25,
        height: 0,
        width: _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageHeight / 5,
        rotation: 90,
        x: position.x,
        y: position.y,
      }
    : {
        alpha: 1,
        angle: _state__WEBPACK_IMPORTED_MODULE_2__["state"].primaryAngleDegrees,
        headerHeight: _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageHeight / 10,
        headerY: position.y,
        height: _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageHeight,
        width: _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageWidth,
        rotation: 0,
        x: position.x,
        y: position.y,
      };
}


/***/ }),

/***/ "./src/elements/page/interactions.js":
/*!*******************************************!*\
  !*** ./src/elements/page/interactions.js ***!
  \*******************************************/
/*! exports provided: handleMouseOut, handleMouseOver, handleMouseClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMouseOut", function() { return handleMouseOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMouseOver", function() { return handleMouseOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMouseClick", function() { return handleMouseClick; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connector */ "./src/elements/connector.js");
/* harmony import */ var _crosslink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crosslink */ "./src/elements/crosslink.js");
/* harmony import */ var _detailsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailsCard */ "./src/elements/page/detailsCard.js");
/* harmony import */ var _hoverEllipse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hoverEllipse */ "./src/elements/page/hoverEllipse.js");








function handleMouseOut(pageIndex) {
  const page = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pages[pageIndex];

  if (pageIndex === _state__WEBPACK_IMPORTED_MODULE_0__["state"].activePageIndex) {
    return;
  }

  page.states.hovering = false;
  Object(_hoverEllipse__WEBPACK_IMPORTED_MODULE_4__["updateState"])(page);

  _state__WEBPACK_IMPORTED_MODULE_0__["state"].pages.forEach(_crosslink__WEBPACK_IMPORTED_MODULE_2__["hideConnectedPages"]);

  // Resets all highlights specified in DirectConnectionsVisibility in column in sheet.
  if (!_state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap) {
    Object(_connector__WEBPACK_IMPORTED_MODULE_1__["drawDirectConnections"])();
  }
}

function handleMouseOver(pageIndex) {
  const page = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pages[pageIndex];
  const row = _state__WEBPACK_IMPORTED_MODULE_0__["state"].rows[pageIndex];

  page.states.hovering = true;
  Object(_hoverEllipse__WEBPACK_IMPORTED_MODULE_4__["updateState"])(page);
  _state__WEBPACK_IMPORTED_MODULE_0__["state"].isDragging = false;

  // Next draw connections to new selections.
  if (row.DirectConnections) {
    if (row.DirectConnections.trim() != '') {
      Object(_crosslink__WEBPACK_IMPORTED_MODULE_2__["drawConnectedPages"])(pageIndex, 'hover');
    }
  }
}

function handleMouseClick(pageIndex, pageData) {
  const page = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pages[pageIndex];
  const row = _state__WEBPACK_IMPORTED_MODULE_0__["state"].rows[pageIndex];

  // Clear all other pages first (assuming a page is already selected)
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_0__["state"].pages.length; i++) {
    const currPage = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pages[i];
    currPage.states.highlightedFromSelect = false;
    currPage.states.highlightedFromHover = false;

    // Check for Selection Change and Deselect Previous Selection
    if (i != pageIndex) {
      currPage.states.selected = false;
    }

    Object(_crosslink__WEBPACK_IMPORTED_MODULE_2__["hideSelectionConnections"])();
    Object(_hoverEllipse__WEBPACK_IMPORTED_MODULE_4__["updateState"])(currPage);
  }

  // Next, Show the hover ellipse on the selected page.
  page.states.selected = !page.states.selected;
  Object(_hoverEllipse__WEBPACK_IMPORTED_MODULE_4__["updateState"])(page);
  _state__WEBPACK_IMPORTED_MODULE_0__["state"].isDragging = false;

  // Update connection highlights
  if (page.states.selected) {
    if (row.DirectConnections) {
      if (row.DirectConnections.trim() != '') {
        Object(_crosslink__WEBPACK_IMPORTED_MODULE_2__["drawConnectedPages"])(pageIndex, 'select');
      }
    }

    // Show Node details panel next to the page/node.
    Object(_detailsCard__WEBPACK_IMPORTED_MODULE_3__["showNodePanel"])(pageIndex, pageData);

    // Updates global variable for use elsewhere
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].selectedPageIndex = pageIndex;
  } else {
    Object(_detailsCard__WEBPACK_IMPORTED_MODULE_3__["hideNodePanel"])();
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].selectedPageIndex = -1;
  }
}


/***/ }),

/***/ "./src/elements/page/label.js":
/*!************************************!*\
  !*** ./src/elements/page/label.js ***!
  \************************************/
/*! exports provided: createPageLabel, createTestPageLabel, drawPageLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageLabel", function() { return createPageLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTestPageLabel", function() { return createTestPageLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPageLabel", function() { return drawPageLabel; });
/* harmony import */ var _ease__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ease */ "./src/ease.js");
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _stateUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stateUtilities */ "./src/stateUtilities.js");
/* harmony import */ var _interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interactions */ "./src/elements/page/interactions.js");







function createPageLabel(pageData, pageIndex) {
  const id = `page-${pageIndex}-label`;
  const textContent = pageData.Name.toUpperCase();

  const div = _selections__WEBPACK_IMPORTED_MODULE_1__["svgContainerSelection"]
    .append('div')
    .classed('page-label', true)
    .on('click', function () {
      Object(_interactions__WEBPACK_IMPORTED_MODULE_4__["handleMouseClick"])(pageIndex, pageData);
    })
    .on('mouseover', function () {
      Object(_interactions__WEBPACK_IMPORTED_MODULE_4__["handleMouseOver"])(pageIndex);
    })
    .on('mouseout', function () {
      Object(_interactions__WEBPACK_IMPORTED_MODULE_4__["handleMouseOut"])(pageIndex);
    });
  const text = div
    .append('text')
    .attr('id', id)
    .style('visibility', 'visible')
    .text(textContent);

  return {
    div,
    id,
    pageIndex,
    pageName: pageData.Name,
    specs: {
      angle: _state__WEBPACK_IMPORTED_MODULE_2__["state"].primaryAngleDegrees,
      height: null,
      size: null,
      width: null,
      x: null,
      y: null,
    },
    targetSpecs: {
      angle: _state__WEBPACK_IMPORTED_MODULE_2__["state"].primaryAngleDegrees,
      height: null,
      size: null,
      width: null,
      x: null,
      xOffset: null,
      y: null,
      yOffset: null,
    },
    text,
    textContent,
  };
}

function createTestPageLabel() {
  _state__WEBPACK_IMPORTED_MODULE_2__["state"].testPageLabel = _selections__WEBPACK_IMPORTED_MODULE_1__["svgContainerSelection"]
    .append('text')
    .attr('id', 'test-page-label')
    .style('background', '#cccccc')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('top', 300)
    .text('TEST LABEL TEXT');
}

function drawPageLabel(page, pageIndex) {
  const label = page.label;
  const origin = _state__WEBPACK_IMPORTED_MODULE_2__["state"].origins[pageIndex];
  const position = _state__WEBPACK_IMPORTED_MODULE_2__["state"].positions[pageIndex];
  const isFirstDraw = label.targetSpecs.x === null;
  if (_state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap && _state__WEBPACK_IMPORTED_MODULE_2__["state"].initFlatRun) {
    addLabelEventListeners(label);
  }
  updateLabelTargetSpecs(label, position);
  updateLabelSpecs(label);
  updateLabelDiv(page);
  // TODO: Eliminate this isFirstDraw hack by solving the mystery of the first draw's bad Y value.
  if (isFirstDraw) {
    updateLabelTargetSpecs(label, position);
    updateLabelSpecs(label);
    updateLabelDiv(page);
  }
  if (_state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap) {
    updateOriginFromLabel(label, origin);
  }
}

function addLabelEventListeners(label) {
  label.div
    .on('mouseover', function () {
      Object(_interactions__WEBPACK_IMPORTED_MODULE_4__["handleMouseOver"])(label.pageIndex);
    })
    .on('mouseout', function () {
      Object(_interactions__WEBPACK_IMPORTED_MODULE_4__["handleMouseOut"])(label.pageIndex);
    });
}

function measureTestLabelWidth(label) {
  _state__WEBPACK_IMPORTED_MODULE_2__["state"].testPageLabel
    .classed('page-label', true)
    .classed('text-stroke', true)
    .style('display', 'flex')
    .style('font-size', _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageLabelSize)
    .text(label.textContent);
  return _state__WEBPACK_IMPORTED_MODULE_2__["state"].testPageLabel.node().clientWidth + 5;
}

function updateLabelDiv(page) {
  page.label.div
    .classed('text-stroke', _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap)
    .classed('trans', false)
    .style('align-content', _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap ? null : 'flex-end')
    .style('cursor', _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap ? 'pointer' : null)
    .style('display', 'flex')
    .style('flex-flow', 'row wrap')
    .style('font-size', _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageLabelSize)
    .style('height', _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap ? null : 0)
    .style('left', page.label.specs.x)
    .style(
      'opacity',
      _state__WEBPACK_IMPORTED_MODULE_2__["state"].transitioningViews
        ? 0
        : _state__WEBPACK_IMPORTED_MODULE_2__["state"].cujMode && !Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_3__["getIsInActiveCUJ"])(page)
        ? 0.25
        : 1
    )
    .style('top', page.label.specs.y)
    .style('transform', `skewY(${page.label.specs.angle}deg)`)
    .style(
      'transition',
      _state__WEBPACK_IMPORTED_MODULE_2__["state"].transitioningViews ? 'opacity 0s' : 'opacity 0.5s ease-in-out'
    )
    .style('width', page.label.specs.width);
  page.label.text.style(
    'padding-bottom',
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap ? 0 : page.specs.headerHeight
  );
}

function updateLabelSpecs(label) {
  if (_state__WEBPACK_IMPORTED_MODULE_2__["state"].transitioningViews) {
    Object(_ease__WEBPACK_IMPORTED_MODULE_0__["easeQuadratically"])(label);
  } else {
    Object(_ease__WEBPACK_IMPORTED_MODULE_0__["easeInstantly"])(label);
  }
}

function updateLabelTargetSpecs(label, position) {
  label.targetSpecs.angle = _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap ? 0 : _state__WEBPACK_IMPORTED_MODULE_2__["state"].primaryAngleDegrees;
  label.targetSpecs.size = _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageLabelSize;
  label.targetSpecs.width =
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap && !_state__WEBPACK_IMPORTED_MODULE_2__["state"].transitioningViews
      ? Math.min(_state__WEBPACK_IMPORTED_MODULE_2__["state"].pageWidth * 2.75, measureTestLabelWidth(label))
      : _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageLabelWidth;
  const xOffset = _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap ? _state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding / 10 : 0;
  const yOffset = _state__WEBPACK_IMPORTED_MODULE_2__["state"].transitioningViews ? label.targetSpecs.yOffset : 0;
  label.targetSpecs.xOffset = xOffset;
  label.targetSpecs.yOffset = yOffset;
  label.targetSpecs.x = position.x + xOffset;
  label.targetSpecs.y = position.y + yOffset;
}

function updateOriginFromLabel(label, origin) {
  origin.rightCenterX = label.targetSpecs.x + label.targetSpecs.width;
}


/***/ }),

/***/ "./src/elements/page/multipageLine.js":
/*!********************************************!*\
  !*** ./src/elements/page/multipageLine.js ***!
  \********************************************/
/*! exports provided: createPageMultipageLine, drawPageMultipageLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageMultipageLine", function() { return createPageMultipageLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPageMultipageLine", function() { return drawPageMultipageLine; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math */ "./src/math.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _stateUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stateUtilities */ "./src/stateUtilities.js");




function createPageMultipageLine() {
  return _state__WEBPACK_IMPORTED_MODULE_1__["state"].svgDoc.append('line').style('stroke-width', 1);
}

function drawPageMultipageLine(color, origin, page) {
  const lineTan = Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(90 - _state__WEBPACK_IMPORTED_MODULE_1__["state"].secondaryAngleDegrees));
  const offsetTan = Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_1__["state"].primaryAngleDegrees));
  const offset = _state__WEBPACK_IMPORTED_MODULE_1__["state"].textPadding;
  page.multipageLine
    .attr('x1', origin.rBCornerX + offset * 3)
    .attr('x2', origin.rBCornerX + offset * 5)
    .attr('y1', origin.rBCornerY + offset * (2 * offsetTan - lineTan))
    .attr('y2', origin.rBCornerY + offset * (2 * offsetTan - 3 * lineTan))
    .classed('trans', false)
    .style('opacity', _state__WEBPACK_IMPORTED_MODULE_1__["state"].cujMode && !Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_2__["getIsInActiveCUJ"])(page) ? 0.25 : 1)
    .style('stroke', `${color}80`)
    .style('visibility', _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel < 0.8 ? 'hidden' : 'visible');
}


/***/ }),

/***/ "./src/elements/page/multipagePanel.js":
/*!*********************************************!*\
  !*** ./src/elements/page/multipagePanel.js ***!
  \*********************************************/
/*! exports provided: createPageMultipagePanels, drawPageMultipagePanels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageMultipagePanels", function() { return createPageMultipagePanels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPageMultipagePanels", function() { return drawPageMultipagePanels; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math */ "./src/math.js");
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _stateUtilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../stateUtilities */ "./src/stateUtilities.js");





function createPageMultipagePanels() {
  return [1, 2, 3].map(() =>
    _selections__WEBPACK_IMPORTED_MODULE_1__["svgContainerSelection"]
      .append('div')
      .style('cursor', 'pointer')
      .style('fill-opacity', 0.5)
      .style('position', 'absolute')
  );
}

function drawPageMultipagePanels(color, page) {
  const offsetAngleRadians = Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(90 - _state__WEBPACK_IMPORTED_MODULE_2__["state"].secondaryAngleDegrees);
  for (let multipageIndex = 0; multipageIndex < 3; multipageIndex++) {
    const orderFromFront = 3 - multipageIndex;
    const offsetX = _state__WEBPACK_IMPORTED_MODULE_2__["state"].textPadding * orderFromFront;
    const offsetY = offsetX * Math.tan(offsetAngleRadians);
    page.multipagePanels[multipageIndex]
      .classed('trans', false)
      .style('background', `rgba(250, 250, 250, ${1 - 0.2 * orderFromFront}`)
      .style('border', `1px solid ${color}50`)
      .style('height', page.specs.height)
      .style('left', page.specs.x + offsetX)
      .style(
        'opacity',
        page.specs.alpha * (_state__WEBPACK_IMPORTED_MODULE_2__["state"].cujMode && !Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_3__["getIsInActiveCUJ"])(page) ? 0.25 : 1)
      )
      .style('top', page.specs.y - offsetY)
      .style('width', _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageWidth * 0.98)
      .style(
        'transform',
        `skewY(${page.specs.angle}deg) rotateZ(${page.specs.rotation}deg)`
      );
  }
}


/***/ }),

/***/ "./src/elements/page/note.js":
/*!***********************************!*\
  !*** ./src/elements/page/note.js ***!
  \***********************************/
/*! exports provided: createPageNote, drawPageNote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageNote", function() { return createPageNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPageNote", function() { return drawPageNote; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math */ "./src/math.js");
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state */ "./src/state.js");




function createPageNote(pageData, pageIndex) {
  const id = `note-${pageIndex}`;
  const line =
    pageData.Notes === ''
      ? null
      : _state__WEBPACK_IMPORTED_MODULE_2__["state"].svgDoc
          .append('line')
          .classed('noteLine', true)
          .style('visibility', 'visible')
          .style('opacity', 0.75);
  const text =
    pageData.Notes === ''
      ? null
      : _selections__WEBPACK_IMPORTED_MODULE_1__["svgContainerSelection"]
          .append('div')
          .append('text')
          .attr('id', id)
          .classed('note-text', true)
          .html(pageData.Notes)
          .style('opacity', 1);
  return {
    height: 0,
    id,
    line,
    text,
    width: 0,
    x: 0,
    y: 0,
  };
}

function drawPageNote(page, position, notedPagePositionsSorted) {
  if (!page.hasNote) {
    return;
  }
  const doShow =
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].targetZoomLevel <= 1.5 &&
    !_state__WEBPACK_IMPORTED_MODULE_2__["state"].cujMode &&
    !_state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap &&
    page.hasNote;
  const firstNotedPagePosition = notedPagePositionsSorted[0];
  const firstNoteX = firstNotedPagePosition.x - _state__WEBPACK_IMPORTED_MODULE_2__["state"].positions[0].x;
  const firstNoteOffset =
    (_state__WEBPACK_IMPORTED_MODULE_2__["state"].rows[0].Level - 1) * _state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding + _state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding / 2;
  const firstNoteY =
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].positions[0].y +
    firstNoteX * Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_2__["state"].primaryAngleDegrees)) +
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding * 0.75 +
    firstNoteOffset;

  const sumOfPreviousNoteHeights = notedPagePositionsSorted
    .slice(0, notedPagePositionsSorted.indexOf(position))
    .map((position_) => _state__WEBPACK_IMPORTED_MODULE_2__["state"].pages[_state__WEBPACK_IMPORTED_MODULE_2__["state"].positions.indexOf(position_)])
    .map((page) => document.getElementById(page.note.id).clientHeight)
    .reduce((a, b) => a + b, 0);

  // Prevents clipping of notes on initial nodes displayed in map.
  // Hardcoded values are based on note-text class in map.css
  // TODO: Consider removing hardcoded values.

  let currNotesWidth = _state__WEBPACK_IMPORTED_MODULE_2__["state"].notesWidth;
  if (page.specs.x < 300) {
    currNotesWidth = page.specs.x - 24;
  } else {
    currNotesWidth = 300;
  }
  page.note.text.style('width', currNotesWidth);

  const yOffset =
    sumOfPreviousNoteHeights +
    (position.x - firstNoteX) *
      Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_0__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_2__["state"].primaryAngleDegrees));
  page.note.height = document.getElementById(page.note.id).clientHeight;
  page.note.x = position.x - currNotesWidth - 5;
  page.note.y = firstNoteY + yOffset;
  page.note.line
    .attr('x1', position.x)
    .attr('y1', position.y + _state__WEBPACK_IMPORTED_MODULE_2__["state"].pageHeight)
    .attr('x2', position.x)
    .attr('y2', page.note.y - 5)
    .style('opacity', doShow ? 1 : 0);
  page.note.text
    .style('left', position.x - currNotesWidth)
    .style('opacity', doShow ? 1 : 0)
    .style('top', page.note.y);
}


/***/ }),

/***/ "./src/elements/page/panel.js":
/*!************************************!*\
  !*** ./src/elements/page/panel.js ***!
  \************************************/
/*! exports provided: createPagePanel, drawPagePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPagePanel", function() { return createPagePanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawPagePanel", function() { return drawPagePanel; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/state.js");
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selections */ "./src/selections.js");
/* harmony import */ var _stateUtilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stateUtilities */ "./src/stateUtilities.js");
/* harmony import */ var _interactions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactions */ "./src/elements/page/interactions.js");






function createPagePanel(pageData, pageIndex) {
  const imagePath =
    pageData.CustomIconUrl ||
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pagePanelImagePaths[pageData.Type.toLowerCase()] ||
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pagePanelImagePaths.generic;

  const panel = _selections__WEBPACK_IMPORTED_MODULE_1__["svgContainerSelection"]
    .append('img')
    .attr('src', imagePath)
    .attr('id', `paper${pageIndex}`)
    .style('background', '#ffffff')
    .style('border', '1px solid #DADCE0')
    .style('box-sizing', 'border-box')
    .style('fill', '#ffffff')
    .style('position', 'absolute')
    .attr('pointer-events', 'all')
    .style('pointer-events', 'auto');

  // EVENT HANDLERS GO ON THIS LAYER
  panel
    .on('click', function () {
      Object(_interactions__WEBPACK_IMPORTED_MODULE_3__["handleMouseClick"])(pageIndex, pageData);
    })
    .on('mouseover', function () {
      Object(_interactions__WEBPACK_IMPORTED_MODULE_3__["handleMouseOver"])(pageIndex);
    })
    .on('mouseout', function () {
      Object(_interactions__WEBPACK_IMPORTED_MODULE_3__["handleMouseOut"])(pageIndex);
    });

  return panel;
}

function drawPagePanel(pageData, page) {
  let opacity = 1;
  let visibility = 'visible';
  let horizPadding = 0;
  let vertPadding = 0;

  if (_state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap && !_state__WEBPACK_IMPORTED_MODULE_0__["state"].transitionViews) {
    opacity = 0;
    visibility = 'hidden';
  } else if (_state__WEBPACK_IMPORTED_MODULE_0__["state"].flattenMap && _state__WEBPACK_IMPORTED_MODULE_0__["state"].transitionViews) {
    visibility = 'hidden';
  }

  if (_state__WEBPACK_IMPORTED_MODULE_0__["state"].cujMode && !Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_2__["getIsInActiveCUJ"])(page)) {
    opacity = 0.25;
  }

  if (pageData.CustomIconUrl) {
    horizPadding = Math.ceil(page.specs.width / 10);
    vertPadding = Math.ceil(page.specs.height / 10);
  }

  page.panel
    .classed('trans', false)
    .style('height', page.specs.height)
    .style('left', page.specs.x)
    .style('top', page.specs.y)
    .style('width', page.specs.width)
    .style('opacity', opacity)
    .style('padding-top', vertPadding)
    .style('padding-bottom', vertPadding)
    .style('padding-left', horizPadding)
    .style('padding-right', horizPadding)
    .style('pointer-events', 'auto')
    .attr('pointer-events', 'all')
    .style(
      'transform',
      `skewY(${page.specs.angle}deg) rotateZ(${page.specs.rotation}deg)`
    )
    .style('width', _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageWidth)
    .style('visibility', visibility);
}


/***/ }),

/***/ "./src/elements/section.js":
/*!*********************************!*\
  !*** ./src/elements/section.js ***!
  \*********************************/
/*! exports provided: createSections, assignSections, lowestLevelInSectionCheck, drawSections, resetSectionCalculations, drawFlatSections, createTestSectionLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSections", function() { return createSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignSections", function() { return assignSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowestLevelInSectionCheck", function() { return lowestLevelInSectionCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSections", function() { return drawSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetSectionCalculations", function() { return resetSectionCalculations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawFlatSections", function() { return drawFlatSections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTestSectionLabel", function() { return createTestSectionLabel; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors */ "./src/colors.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./src/math.js");
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/state.js");





// / //////// SECTION CREATION /////////////////////

// Loop thru sections array and create basic Section carpet elements
// This includes 1) Section label 2) Section "carpet" or "mat" shape.
function createSections() {
  // First Loop thru sections array.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections.length; i++) {
    const currMatArray = [];
    const firstPageIndex = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i][0];
    const sectionId = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[firstPageIndex].Section;
    const sectionLabel = sectionId.toUpperCase();

    // Create "Carpet" or "Mat" object
    const currMat = _state__WEBPACK_IMPORTED_MODULE_3__["state"].svgDoc.append('polygon'); // attach a polygon
    currMatArray.push(currMat);

    const currIDString = `section${i}`;

    // Create Text Object
    _selections__WEBPACK_IMPORTED_MODULE_2__["svgContainerSelection"].append('div');
    const currText = _selections__WEBPACK_IMPORTED_MODULE_2__["svgContainerSelection"]
      .append('text') // Attach Label Text
      .text(sectionLabel)
      .attr('ID', currIDString);

    const truncatedLabel = getTruncatedLabel(sectionLabel);
    const currHex = Object(_colors__WEBPACK_IMPORTED_MODULE_0__["getSectionColor"])(sectionId);

    // Store all objects in Array.
    // CONSIDER FIXING: Need to standardize terms in code base:
    // "Sheet", "Mat", "Carpet" reference the polygon drawn beneath the pages that belong to a specific section.
    const currSectionObj = {
      sheet: currMat,
      text: currText,
      label: sectionLabel,
      hex: currHex,
      truncatedLabel: truncatedLabel,
      truncate: false,
      ind: i,
      x: 'null',
      y: 'null',
      width: 'null',
      height: 'null',
      sectionX: 'null',
      currAX: null,
      currAY: null,
      currBX: null,
      currBY: null,
      currCX: null,
      currCY: null,
      currDX: null,
      currDY: null,
      targetAX: null,
      targetAY: null,
      targetBX: null,
      targetBY: null,
      targetCX: null,
      targetCY: null,
      targetDX: null,
      targetDY: null,
    };
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs.push(currSectionObj);
  }

  attachSectionEvents();
}

// Group Pages into categorical sections.
function assignSections() {
  // Create empty local array to store section info
  const uniqueSectionArray = [];

  // Ultimately, we'll build this array out for future reference.
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections = [];

  // FIRST, Find Unique Sections
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; i++) {
    let unique = true;

    const currSection = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[i].Section;

    for (let e = 0; e < i; e++) {
      if (currSection == _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[e].Section) {
        unique = false;
        break;
      }
    }
    if (unique) {
      uniqueSectionArray.push(currSection);
    }
  }

  // Next, Evaluate Row Sections against Each Unique Section Name
  for (let x = 0; x < uniqueSectionArray.length; x++) {
    const currGroup = [];

    // Loop Thru Rows Array
    for (let r = 0; r < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; r++) {
      if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[r].Section == uniqueSectionArray[x]) {
        currGroup.push(r); // If the two arrays match, push into a new group object
      }
    }
    // After all rows are evaluated, Load the currGroup into the Sections Array
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections.push(currGroup);
  }

  assignColors();
}

// Assigns colors for each specified section in the map.
function assignColors() {
  // debugger
  // Question : go over for loop and what is being done here
  // Loop thru each page.
  for (let x = 0; x < _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows.length; x++) {
    // Loop through each index within each section.
    for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections.length; i++) {
      for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i].length; j++) {
        // If the page evaluated matches the page in the current section array,
        if (x == _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i][j]) {
          // Get and assign the proper color for later styling.
          const color = {
            hex: Object(_colors__WEBPACK_IMPORTED_MODULE_0__["getSectionColor"])(_state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[_state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i][0]].Section),
          };
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageColors.push(color);
        }
      }
    }
  }
}

// / ///// SECTION DRAWING //////////////

// NOTE - This function is a BEAST! It needs to be refactored and streamlined.
// This was the most challenging part of the whole visualization,
// It was also the buggiest.

function lowestLevelInSectionCheck(
  endInd,
  checkedLevel,
  sectionArrayInd
) {
  let lowestLevelSoFar = true;

  for (let x = 0; x < endInd; x++) {
    const currIndex = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[sectionArrayInd][x];
    const currLevel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[currIndex].Level;

    if (currLevel <= checkedLevel) {
      lowestLevelSoFar = false;
    }
  }
  return lowestLevelSoFar;
}

function drawSections() {
  // First, we need to loop thru the array of sections.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections.length; i++) {
    // TODO: refactor index-based loops into forEach on arrays
    const firstPageIndex = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i][0];
    const sectionId = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[firstPageIndex].Section;
    // Set up some local vars for later use.
    let pageLeft;
    let pageRight;
    let minLevel = 1000;
    let maxLevel = 0;
    let indexLeft;
    let indexRight;

    // Set up some extreme min/max X/Y values for pages.
    // When looping thru the pages within each section, we need to find the max location values for each page.
    // This includes: highest, lowest, farthest left, farthest right.
    let minX = 10000000000;

    // Next we will actually loop through each page nested within each section array.
    let currInd;
    for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i].length; j++) {
      // Curr Index is the index value of each page, nested within each section.
      currInd = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i][j];

      // Once we have the current Index, we can plug it into the rows[] and find its level.
      const currLevel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[currInd].Level;

      // Once we have the current Index, we can also find its registration x/y coordinates in the positions array.
      const currX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[currInd].x;

      // Next, we need to determine if the current page has the lowest X value (Is it positioned farther left than any page we previously reviewed).
      if (currX < minX) {
        // Need to check if page is lowest level in section. If so, then Re-evaluate this condition.
        // Added conditionsl to evaluate if earlier pages sit farther back in map.
        if (j > 0 && lowestLevelInSectionCheck(j, currLevel, i)) {
          const startInd = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i][0];
          minX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[startInd].x;

          // Remember left-most page obj
          pageLeft = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[startInd];

          // Remember the index of the left-most page.
          indexLeft = startInd;
        } else {
          minX = currX;
          // Remember left-most page obj
          pageLeft = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[currInd];

          // Remember the index of the left-most page.
          indexLeft = currInd;
        }
      }

      // Remember right-most page obj
      pageRight = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[currInd];

      // Remember the index of the right-most page.
      indexRight = currInd;

      // Find the minimum and maximum levels within each section, and store them for later use.
      if (currLevel < minLevel) {
        minLevel = currLevel;
      }

      if (currLevel > maxLevel) {
        maxLevel = currLevel;
      }
    }

    // DEG>RADIANS CONVERSION for right triangle - This will apply to all Trig calculations below.
    // Use secondary Angle for calculation.
    const tanYRad = Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_3__["state"].secondaryAngleDegrees);

    // RIGHT SIDE OF CARPET:
    // Using right triangles, determine the delta between the height of the right-most page and the upper most page.
    // Starting with the right most page's reference point Y, we can use the delta in levels to determine the Y Diff.
    const rightSideTop =
      (maxLevel - pageRight.Level) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].vertPadding +
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].vertPadding / 2 -
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].textPadding; // RIGHT ADJ ANGLE

    // Using right triangles, determine the delta between the height of the right-most page the the lower most page.
    // Starting with the right most page's reference point Y, we can use the delta in levels to determine the Y Diff.
    const rightSideBottom =
      (pageRight.Level - minLevel) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].vertPadding + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2; // RIGHT ADJ ANGLE

    // BOTTOM RIGHT CORNER CALCULATION
    // Using the secondary angle, and the Y Diff, we can calculate exact X/Y coordinates of the bottom, right corner of the carpet.
    // Should rename var to currXBottomRightEnd - to specify that this is the right end.
    const currXBottomRightEnd =
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].referencePointsRight[currInd].x -
      Math.tan(tanYRad) * rightSideBottom;
    // Should rename var to currYBottomRightEnd - to specify that this is the right end.
    const currYBottomRightEnd =
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].referencePointsRight[currInd].y + rightSideBottom;

    // TOP RIGHT CORNER CALCULATION
    // Using the secondary angle, and the Y Diff, we can calculate exact X/Y coordinates of the top, right corner of the carpet.
    const currXTopRightEnd =
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].referencePointsRight[indexRight].x +
      Math.tan(tanYRad) * rightSideTop;
    const currYTopRightEnd =
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].referencePointsRight[indexRight].y - rightSideTop;

    // LEFT SIDE OF CARPET
    // Using right triangles, determine the delta between the height of the left-most page and the upper most page.
    // Starting with the left most page's reference point Y, we can use the delta in levels to determine the Y Diff.
    const leftSideTop =
      (maxLevel - pageLeft.Level) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].vertPadding +
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].vertPadding / 2 -
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].textPadding; // RIGHT ADJ ANGLE

    // Using right triangles, determine the delta between the height of the left-most page the the lower most page.
    // Starting with the left most page's reference point Y, we can use the delta in levels to determine the Y Diff.
    const leftSideBottom =
      (pageLeft.Level - minLevel) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].vertPadding + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageHeight / 2; // RIGHT ADJ ANGLE

    // BOTTOM RIGHT CORNER CALCULATION
    // Using the secondary angle, and the Y Diff, we can calculate exact X/Y coordinates of the bottom, left corner of the carpet.
    const currXBottomLeftEnd =
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].referencePointsLeft[indexLeft].x -
      Math.tan(tanYRad) * leftSideBottom;
    const currYBottomLeftEnd =
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].referencePointsLeft[indexLeft].y + leftSideBottom;

    // TOP RIGHT CORNER CALCULATION
    // Using the secondary angle, and the Y Diff, we can calculate exact X/Y coordinates of the top, left corner of the carpet.
    const currXTopLeftEnd =
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].referencePointsLeft[indexLeft].x + Math.tan(tanYRad) * leftSideTop;
    const currYTopLeftEnd =
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].referencePointsLeft[indexLeft].y - leftSideTop;

    // Before drawing the actual carpet, we also need to know its color value.
    const currHex = Object(_colors__WEBPACK_IMPORTED_MODULE_0__["getSectionColor"])(sectionId);

    // A desaturated version of the current color for the section label
    const currLabelHex = d3.interpolateLab(currHex, '#4d4d4d')(0.35);

    // DRAW POLYGON
    // Draws the carpet beneath the page.

    if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
      const points = [
        currXBottomRightEnd,
        currYBottomRightEnd,
        currXTopRightEnd,
        currYTopRightEnd,
        currXTopLeftEnd,
        currYTopLeftEnd,
        currXBottomLeftEnd,
        currYBottomLeftEnd,
      ];
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].sheet // attach a polygon
        .attr('points', points.join(','))
        .style('fill', currHex); // x,y points

      // Storing coordinates of mat corners in SectionObjs array for later use.
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAX = currXTopLeftEnd;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAY = currYTopLeftEnd;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBX = currXTopRightEnd;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBY = currYTopRightEnd;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCX = currXBottomRightEnd;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCY = currYBottomRightEnd;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDX = currXBottomLeftEnd;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDY = currYBottomLeftEnd;
    } else {
      // TRANSITION TO ISOMETRIC MAT

      // 1 - Grab local vars from storage array.
      let currAX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAX;
      let currAY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAY;
      let currBX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBX;
      let currBY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBY;
      let currCX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCX;
      let currCY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCY;
      let currDX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDX;
      let currDY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDY;

      // 2 - Run Values thru Tweens for Animation
      currAX += (currXTopLeftEnd - currAX) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currAY += (currYTopLeftEnd - currAY) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currBX += (currXTopRightEnd - currBX) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currBY += (currYTopRightEnd - currBY) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currCX += (currXBottomRightEnd - currCX) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currCY += (currYBottomRightEnd - currCY) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currDX += (currXBottomLeftEnd - currDX) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currDY += (currYBottomLeftEnd - currDY) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;

      // 3 - Reload values back into storage array for later.
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAX = currAX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAY = currAY;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBX = currBX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBY = currBY;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCX = currCX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCY = currCY;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDX = currDX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDY = currDY;

      // 4 - Update CSS and reposition mat
      const points = [
        currAX,
        currAY,
        currBX,
        currBY,
        currCX,
        currCY,
        currDX,
        currDY,
      ];
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].sheet // attach a polygon
        .attr('points', points.join(','))
        .style('fill', currHex); // x,y points
    }

    // SECTION LABEL PLACEMENT AND DRAWING -----

    if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text
        .style('opacity', 0)
        .style('visibility', 'hidden');
    } else {
      // Contatinated CSS Transform for later use.
      const transString = `rotate(${_state__WEBPACK_IMPORTED_MODULE_3__["state"].primaryAngleDegrees}deg) skewX(-40deg)`;

      // DRAW LABEL
      const sectionLabel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[currInd].Section.toUpperCase();
      // After all that, apply new position and updated styles to section label.
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text
        .text(sectionLabel)
        .classed('section-label', true)
        .style('color', currLabelHex)
        .style('opacity', 1)
        .style('font-size', _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionLabelSize)
        .style('text-align', 'center')
        .style('transition', 'opacity 0.5s ease-in-out');

      const sectionLabelWidth = Math.sqrt(
        Math.pow(currYBottomRightEnd - currYBottomLeftEnd, 2) +
          Math.pow(currXBottomRightEnd - currXBottomLeftEnd, 2)
      );

      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.style('width', sectionLabelWidth);
      const sectionLabelHeight = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.node().clientHeight;

      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text
        .style('color', currLabelHex)
        .style('font-size', _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionLabelSize)
        .style('text-align', 'center')
        .style('transform', transString);

      // Find the center of the label, the axis in which it will rotate on.
      // Find X Value
      const sectionLabelCenterX =
        Math.cos(Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(180 + _state__WEBPACK_IMPORTED_MODULE_3__["state"].primaryAngleDegrees)) *
        (sectionLabelWidth / 2);

      // Find Y Value
      const sectionLabelCenterY =
        Math.sin(Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(180 + _state__WEBPACK_IMPORTED_MODULE_3__["state"].primaryAngleDegrees)) *
        (sectionLabelWidth / 2);

      // Calculate bottom left corner of transormed label box. Note - 40° is a hardcoded value for the label transform and is reflected in this equation below)
      // Find X Value
      const sectionLabelBottomLeftX =
        currXBottomLeftEnd +
        sectionLabelCenterX +
        sectionLabelWidth / 2 -
        Math.sin(Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_3__["state"].primaryAngleDegrees + 40)) *
          (sectionLabelHeight / 1.5);

      // Find Y Value (Note - 40° is a hardcoded value for the label transform and is reflected in this equation below)
      const sectionLabelBottomLeftY =
        currYBottomLeftEnd +
        sectionLabelCenterY +
        sectionLabelHeight / 2 +
        Math.cos(Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_3__["state"].primaryAngleDegrees + 40)) *
          (sectionLabelHeight / 1.5);

      // Find the difference between Section Carpet Bottom Corner positions and bottom left corner of label box.
      const xDiff = sectionLabelBottomLeftX - currXBottomLeftEnd;
      const yDiff = currYBottomLeftEnd - sectionLabelBottomLeftY;

      // No Labels Are Truncated - must update sectionObjs Array
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].truncate = false;

      // After all that, apply new position and updated styles to section label.
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text
        .text(sectionLabel)
        .classed('section-label', true)
        .style('left', currXBottomLeftEnd - xDiff)
        .style('opacity', 1)
        .style('top', currYBottomLeftEnd + yDiff)
        .style(
          'visibility',
          _state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel <= 0.3 ? 'hidden' : 'visible'
        );
    }
  }
}

function calculateFlatSectionMeasurements(i) {
  let pageLeft;
  let pageRight;
  let pageTop;
  let pageBottom;

  // Set up some extreme min/max X/Y values for pages.
  // When looping thru the pages within each section, we need to find the max location values for each page.
  // This includes: highest, lowest, farthest left, farthest right.
  let minX = 10000000000;
  let maxX = 0;
  let minY = 10000000000;
  let maxY = 0;

  // Next we will actually loop through each page nested within each section array.
  for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i].length; j++) {
    // Curr Index is the index value of each page, nested within each section.
    const currInd = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i][j];

    // Once we have the current Index, we can also find its registration x/y coordinates in the positions array.
    const currX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[currInd].x;
    const currY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[currInd].y;
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding =
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[currInd].x - _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[currInd].connectorOriginX;

    // Next, we need to determine if the current page has the lowest X value (Is it positioned farther left than any page we previously reviewed).
    if (currX < minX) {
      minX = currX;

      // Remember left-most page obj
      pageLeft = currInd;
    }

    // Next, we need to determine if the current page has the highst X value (Is it positioned farther right than any page we previously reviewed).
    if (currX > maxX) {
      maxX = currX;

      // Remember right-most page obj
      pageRight = currInd;
    }

    // Find Upper Most Page

    if (currY > maxY) {
      maxY = currY;
      pageBottom = currInd;
    }

    // Find Lower-Most Page
    if (currY < minY) {
      minY = currY;
      pageTop = currInd;
    }
  }

  // TOP LEFT CORNER
  const currXTopLeftEnd = _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[pageLeft].x - _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding * 2;
  const currYTopLeftEnd = _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[pageTop].y - _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding;

  // TOP RIGHT CORNER
  const currXTopRightEnd =
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[pageRight].x + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth * 3 + _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding / 2;
  const currYTopRightEnd = _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[pageTop].y - _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding;

  // BOTTOM RIGHT CORNER
  const currXBottomRightEnd =
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[pageRight].x + _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageWidth * 3 + _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding / 2;
  const currYBottomRightEnd =
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[pageBottom].rBCornerY + _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding;

  // BOTTOM LEFT CORNER
  const currXBottomLeftEnd =
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].positions[pageLeft].x - _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding * 2;
  const currYBottomLeftEnd =
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].origins[pageBottom].rBCornerY + _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding;

  // UPDATE TARGET VALUES IN ARRAY
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDX = currXTopLeftEnd;
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDY = currYTopLeftEnd;
  // B
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAX = currXTopRightEnd;
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAY = currYTopRightEnd;
  // C
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBX = currXBottomRightEnd;
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBY = currYBottomRightEnd;
  // D
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCX = currXBottomLeftEnd;
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCY = currYBottomLeftEnd;
}

// RESETS HOLDING ARRAY FOR TARGET CARPET MEASUREMENTS
function resetSectionCalculations() {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections.length; i++) {
    // UPDATE TARGET VALUES IN ARRAY
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDX = null;
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDY = null;
    // B
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAX = null;
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAY = null;
    // C
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBX = null;
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBY = null;
    // D
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCX = null;
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCY = null;
  }
}

// SECTION CARPETS & LABELS
function drawFlatSections() {
  // First, we need to loop thru the array of sections.
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections.length; i++) {
    const firstPageIndex = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i][0];
    const sectionId = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[firstPageIndex].Section;

    // Set up some local vars for later use.
    if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDX == null) {
      calculateFlatSectionMeasurements(i);
    }

    // Determine Section Color Value
    const currHex = Object(_colors__WEBPACK_IMPORTED_MODULE_0__["getSectionColor"])(sectionId);

    // A desaturated version of the current color for the section label
    const currLabelHex = d3.interpolateLab(currHex, '#4d4d4d')(0.35);

    // ID String for measurement
    const currIDString = `section${i}`;

    // DRAW POLYGON
    // Draws the carpet beneath the page.
    if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
      const points = [
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDX,
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDY,
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAX,
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAY,
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBX,
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBY,
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCX,
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCY,
      ];
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].sheet // attach a polygon
        .attr('points', points.join(','))
        .style('fill', currHex); // x,y points

      // Storing coordinates of mat corners in SectionObjs array for later use.
      // A
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDY;
      // B
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAY;
      // C
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBY;
      // D
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCY;
    } else {
      // TRANSITION TO ISOMETRIC MAT

      // 1 - Grab local vars from storage array.
      let currAX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAX;
      let currAY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAY;
      let currBX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBX;
      let currBY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBY;
      let currCX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCX;
      let currCY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCY;
      let currDX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDX;
      let currDY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDY;

      const targetAX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAX;
      const targetAY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetAY;
      const targetBX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBX;
      const targetBY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetBY;
      const targetCX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCX;
      const targetCY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCY;
      const targetDX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDX;
      const targetDY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDY;

      // 2 - Run Values thru Tweens for Animation
      // A
      currDX += (targetDX - currDX) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currDY += (targetDY - currDY) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      // B
      currAX += (targetAX - currAX) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currAY += (targetAY - currAY) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      // C
      currBX += (targetBX - currBX) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currBY += (targetBY - currBY) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      // D
      currCX += (targetCX - currCX) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;
      currCY += (targetCY - currCY) * _state__WEBPACK_IMPORTED_MODULE_3__["state"].viewTransitionEase;

      // 3 - Reload values back into storage array for later.
      // A
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDX = currDX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currDY = currDY;
      // B
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAX = currAX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currAY = currAY;
      // C
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBX = currBX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currBY = currBY;
      // D
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCX = currCX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].currCY = currCY;

      // 4 - Update CSS and reposition mat
      const points = [
        currAX,
        currAY,
        currBX,
        currBY,
        currCX,
        currCY,
        currDX,
        currDY,
      ];
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].sheet // attach a polygon
        .attr('points', points.join(','))
        .style('fill', currHex); // x,y points
    }

    // DRAW LABEL
    if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
      // Next we will actually loop through each page nested within each section array.
      let currInd;
      for (let j = 0; j < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i].length; j++) {
        // Curr Index is the index value of each page, nested within each section.
        currInd = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sections[i][j];
      }

      // SECTION LABEL PLACEMENT AND DRAWING -----

      // Contatinated CSS Transform for later use.
      // Label positioning and placement.
      const maxWidth =
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetCY - _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDY;
      const transString = 'rotate(90deg)';

      // DRAW LABEL
      const sectionLabel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].rows[currInd].Section.toUpperCase();
      const truncatedLabel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].truncatedLabel;
      _selections__WEBPACK_IMPORTED_MODULE_2__["svgContainerSelection"].append('div');

      if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].testSectionLabel
          .text(sectionLabel)
          .classed('section-label', true)
          .style('display', 'flex')
          .style('color', currLabelHex)
          .style('font-size', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageLabelSize)
          .style('text-align', 'center');

        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text
          .classed('section-label', true)
          .style('display', 'block')
          .style('color', currLabelHex)
          .style('font-size', _state__WEBPACK_IMPORTED_MODULE_3__["state"].pageLabelSize)
          .style('opacity', _state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews ? 0 : 1)
          .style('text-align', 'center');
      }

      if (_state__WEBPACK_IMPORTED_MODULE_3__["state"].targetZoomLevel <= 0.3) {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.style('visibility', 'hidden');
      } else {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.style('visibility', 'visible');
      }

      // Since the CSS properties on the actual section label boxes in the map change when switching from isomentric to flat,
      // We have to load the labels into a test text field that's hidden from view. We can determine our label dimensions based on that.
      let labelWidth = _state__WEBPACK_IMPORTED_MODULE_3__["state"].testSectionLabel.node().clientWidth;
      let labelHeight = _state__WEBPACK_IMPORTED_MODULE_3__["state"].testSectionLabel.node().clientHeight;

      if (labelWidth > maxWidth) {
        // First - Set the Actual Width of the Label = to the Height of the Section Carpet (MaxWidth)
        labelWidth = maxWidth;

        // Insert Truncated Label into the text field.
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.text(truncatedLabel);

        // Next, Set the With of the Section Label Box = to the Max Width of the Section
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.style('width', maxWidth);

        // Save Truncate Boolean so that it can be referenced for hover state and changing back to Isometric Map view
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].truncate = true;
      } else {
        // Insert Full label text into Section Label Box
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.text(sectionLabel);

        // Sets labelWidth value = to width of text in holding text box.
        labelWidth = _state__WEBPACK_IMPORTED_MODULE_3__["state"].testSectionLabel.node().clientWidth + 10;

        // Save Truncate Boolean so that it can be referenced for hover state and changing back to Isometric Map view
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].truncate = false;
      }

      // Grab the Height of the text box for positioning.
      labelHeight = document.getElementById(currIDString).clientHeight;
      const currLabelX =
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDX -
        labelHeight / 2 -
        labelWidth / 2 -
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding / 5;
      const currLabelY =
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDY + maxWidth / 2 - labelHeight / 2;

      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].x = currLabelX;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].y = currLabelY;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].width = labelWidth;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].height = labelHeight;
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].sectionX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].targetDX;

      // UPDATE SECTION LABEL STYLE
      if (!_state__WEBPACK_IMPORTED_MODULE_3__["state"].transitioningViews) {
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text
          .style('left', currLabelX)
          .style('top', currLabelY)
          .style('width', labelWidth)
          .style('transform', transString);
      }
    } else {
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.style('visibility', 'hidden');
    }
  }
}

function attachSectionEvents() {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs.length; i++) {
    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.on('mouseover', function () {
      const currTxt = this.innerHTML;
      sectionMouseOver(currTxt);
    });

    _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text.on('mouseout', function () {
      const currTxt = this.innerHTML;
      sectionMouseOut(currTxt);
    });
  }
}

function sectionMouseOver(currTxt) {
  for (let x = 0; x < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs.length; x++) {
    if (
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].truncatedLabel == currTxt &&
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].truncate
    ) {
      const currLabelObj = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].text;
      const currLabelTxt = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].label;

      // Transfer full label to holding label textbox and grab its dimensions.
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].testSectionLabel.text(currLabelTxt);
      const currWidth = _state__WEBPACK_IMPORTED_MODULE_3__["state"].testSectionLabel.node().clientWidth + 10;
      const currHeight = _state__WEBPACK_IMPORTED_MODULE_3__["state"].testSectionLabel.node().clientHeight;

      // Since Section Labels Display as a block, we need to manually set the width.
      currLabelObj.style('width', currWidth);
      currLabelObj.text(currLabelTxt);

      // Determine and set temporary hover X/Y Location for full mouse label.
      const tempLabelX =
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].x +
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].width / 2 +
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].height / 2 +
        _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding / 5;
      const currLabelX =
        tempLabelX - currWidth / 2 - currHeight / 2 - _state__WEBPACK_IMPORTED_MODULE_3__["state"].currXPadding / 5;
      const currLabelY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].y;

      // Apply new styling
      currLabelObj.style('left', currLabelX).style('cursor', 'none');

      clearOverlappingSectionLabels(
        currLabelX,
        currLabelY,
        currWidth,
        currLabelObj,
        x
      );
    }
  }
}

function sectionMouseOut(currTxt) {
  for (let x = 0; x < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs.length; x++) {
    if (
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].label == currTxt &&
      _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].truncate
    ) {
      const currLabelObj = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].text;
      const currLabelTxt = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].truncatedLabel;

      currLabelObj.text(currLabelTxt);

      const currLabelX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].x;

      const currWidth = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[x].width;

      // Apply new styling
      currLabelObj.style('left', currLabelX).style('width', currWidth);
    }
    showAllSectionLabels();
  }
}

function clearOverlappingSectionLabels(
  labelX,
  labelY,
  labelWidth,
  labelObj,
  ind
) {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs.length; i++) {
    labelWidth = _state__WEBPACK_IMPORTED_MODULE_3__["state"].testSectionLabel.node().clientWidth + 10;

    const currLabelY = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].y;
    const currLabelWidth = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].width;
    const currLabel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text;
    const sectionX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[ind].sectionX;
    const currSectionX = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].sectionX;

    // First, Make Sure We're not looking at the same node. Next, Make sure the X values are within range.
    if (
      currLabel != labelObj &&
      sectionX > currSectionX - 18 &&
      sectionX < currSectionX + 18
    ) {
      // Check for Upper Bound
      if (
        labelY - labelWidth / 2 - 18 < currLabelY + currLabelWidth / 2 + 18 &&
        ind > i
      ) {
        currLabel.style('visibility', 'hidden');

        // Check for Lower Bound
      } else if (
        labelY + labelWidth / 2 + 18 > currLabelY - currLabelWidth / 2 - 18 &&
        ind < i
      ) {
        currLabel.style('visibility', 'hidden');

        // If no overlap, show current label
      } else {
        currLabel.style('visibility', 'visible');
      }
    }
  }
}

function showAllSectionLabels() {
  for (let i = 0; i < _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs.length; i++) {
    const currLabel = _state__WEBPACK_IMPORTED_MODULE_3__["state"].sectionObjs[i].text;
    currLabel.style('visibility', 'visible');
  }
}

function getTruncatedLabel(sectionLabel) {
  let truncatedLabel = '';

  for (let x = 0; x < 4; x++) {
    const currChar = sectionLabel.charAt(x);
    truncatedLabel += currChar;
  }

  truncatedLabel += '...';

  return truncatedLabel;
}

function createTestSectionLabel() {
  _state__WEBPACK_IMPORTED_MODULE_3__["state"].testSectionLabel = _selections__WEBPACK_IMPORTED_MODULE_2__["svgContainerSelection"]
    .append('text')
    .attr('id', 'test-section-label')
    .style('position', 'absolute')
    .style('top', 200)
    .style('visibility', 'hidden')
    .text('TEST LABEL TEXT');
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.js */ "./src/colors.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");
/* harmony import */ var _elements_cuj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/cuj.js */ "./src/elements/cuj.js");
/* harmony import */ var _proportions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proportions.js */ "./src/proportions.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state.js */ "./src/state.js");
/* harmony import */ var _transitions_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transitions/view.js */ "./src/transitions/view.js");
/* harmony import */ var _vis_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vis.js */ "./src/vis.js");
/* harmony import */ var _elements_page_detailsCard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/page/detailsCard.js */ "./src/elements/page/detailsCard.js");











main();

function main() {
  // TODO: Implement a second bundle option for `import` syntax consumers
  window.isoMap = {
    render,
    state: _state_js__WEBPACK_IMPORTED_MODULE_5__["state"],
    addDragEventListeners: _drag_js__WEBPACK_IMPORTED_MODULE_2__["addDragEventListeners"],
    writeState,
    updateProportions: _proportions_js__WEBPACK_IMPORTED_MODULE_4__["updateProportions"],
    updateCUJStartVisibility: _elements_cuj_js__WEBPACK_IMPORTED_MODULE_3__["updateCUJStartVisibility"],
    createVis: _vis_js__WEBPACK_IMPORTED_MODULE_7__["createVis"],
    startViewTransitionIfNecessary: _transitions_view_js__WEBPACK_IMPORTED_MODULE_6__["startViewTransitionIfNecessary"],
    overrideDefaultColors: _colors_js__WEBPACK_IMPORTED_MODULE_0__["overrideDefaultColors"],
    resizeVis,
  };

  window.addEventListener('resize', resizeVis);
}

function render(data) {
  injectStaticHtml();
  Object(_proportions_js__WEBPACK_IMPORTED_MODULE_4__["updateProportions"])();
  Object(_elements_cuj_js__WEBPACK_IMPORTED_MODULE_3__["updateCUJStartVisibility"])();
  Object(_proportions_js__WEBPACK_IMPORTED_MODULE_4__["updateProportions"])();
  Object(_elements_cuj_js__WEBPACK_IMPORTED_MODULE_3__["updateCUJStartVisibility"])();
  writeState({
    cujRows: data.cujRows,
    cujSheetNames: data.cujSheetNames,
    rows: data.rows,
  });

  if (data.sectionColors) {
    Object(_colors_js__WEBPACK_IMPORTED_MODULE_0__["overrideDefaultColors"])(data.sectionColors);
  }
  Object(_vis_js__WEBPACK_IMPORTED_MODULE_7__["createVis"])();
  Object(_transitions_view_js__WEBPACK_IMPORTED_MODULE_6__["startViewTransitionIfNecessary"])();
  Object(_drag_js__WEBPACK_IMPORTED_MODULE_2__["addDragEventListeners"])();
}

function resizeVis() {
  _state_js__WEBPACK_IMPORTED_MODULE_5__["state"].width = window.innerWidth;
  _state_js__WEBPACK_IMPORTED_MODULE_5__["state"].height = window.innerHeight;
  Object(_elements_page_detailsCard_js__WEBPACK_IMPORTED_MODULE_8__["resizeDetailsCard"])();
  Object(_elements_cuj_js__WEBPACK_IMPORTED_MODULE_3__["resizeCUJCard"])();
}

function injectStaticHtml() {
  _dom_js__WEBPACK_IMPORTED_MODULE_1__["svgContainer"].innerHTML = `
    <div id="cujCard">
      <div id="cujHeader" class="container">
        <div class="close">
          <div id="closeX">
            <svg
                version="1.1"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                x="0px"
                y="0px">
              <path
                    d="M19,6.4L17.6,5L12,10.6L6.4,5L5,6.4l5.6,5.6L5,17.6L6.4,19l5.6-5.6l5.6,5.6l1.4-1.4L13.4,12L19,6.4z"
                    fill="#4285F4" />
              <path d="M0,0h24v24H0V0z" fill="none" />
            </svg>
          </div>
        </div>
        <h2 id="cujTitle">CUJ Step Headline</h2>
        <img
            id="usersIcon"
            src="https://fonts.gstatic.com/s/i/googlematerialicons/manage_accounts/v5/grey600-48dp/2x/gm_manage_accounts_grey600_48dp.png" />
        <h3 id="cujUser">User text goes here</h3>
        <div id="progressContainer">
          <div id="progress"></div>
        </div>
      </div>

      <div id="cujScrollContainer">
        <p id="cujDescription">Some sample description text goes here</p>
        <p id="galBtn">
          <a id="galleryLink" href="" target="blank">View more information</a>
        </p>
      </div>

      <div id="cujNav" class="hRule"></div>
      <button id="prevStep" class="secondary secondaryFloat">Back</button>
      <button id="nextStep" class="primaryFloat">Next</button>
    </div>

    <div id="nodeCard">
      <div id="nodeHeader" class="container">
        <div class="close">
          <div id="nodeCloseX">
            <svg
                version="1.1"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                x="0px"
                y="0px">
              <path
                    d="M19,6.4L17.6,5L12,10.6L6.4,5L5,6.4l5.6,5.6L5,17.6L6.4,19l5.6-5.6l5.6,5.6l1.4-1.4L13.4,12L19,6.4z"
                    fill="#4285F4" />
              <path d="M0,0h24v24H0V0z" fill="none" />
            </svg>
          </div>
        </div>
        <h2 id="nodeTitle">Node Name</h2>
        <h3 id="nodeSection">Node Section</h3>
      </div>
      <div id="nodeScrollContainer">
        <div id="descriptionSection">
          <div class="hRule"></div>

          <img
              class="icon"
              src="https://fonts.gstatic.com/s/i/googlematerialicons/book/v7/grey600-24dp/2x/gm_book_grey600_24dp.png" />

          <div id="descriptionContent">
            <h4>Description</h4>
            <p id="nodeDescription">Description goes here</p>
          </div>
        </div>

        <div id="noteSection">
          <div class="hRule"></div>

          <img
              class="icon"
              src="https://fonts.gstatic.com/s/i/googlematerialicons/note_alt/v4/grey600-24dp/2x/gm_note_alt_grey600_24dp.png" />
          <div id="noteContent">
            <h4>Notes</h4>
            <p id="nodeNotes">Node notes go here</p>
          </div>
        </div>

        <div id="journeyListSection">
          <div class="hRule"></div>

          <img
              class="icon"
              src="https://fonts.gstatic.com/s/i/googlematerialicons/explore/v5/grey600-24dp/2x/gm_explore_grey600_24dp.png" />

          <div id="journeyListContent">
            <h4>Associated Journeys</h4>
            <ul id="journeyList">
              <li class="cardList">Journey title goes here</li>
            </ul>
          </div>
        </div>

        <div id="moreInfoBtn">
          <div class="hRule"></div>
          <a id="nodeInfoLink" href="" target="blank">View more information</a>
        </div>
      </div>
    </div>
  `;
}

function writeState(substateToWrite) {
  Object.keys(substateToWrite).forEach((key) => {
    _state_js__WEBPACK_IMPORTED_MODULE_5__["state"][key] = substateToWrite[key];
  });
}


/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: degreesToRadians */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}


/***/ }),

/***/ "./src/positions.js":
/*!**************************!*\
  !*** ./src/positions.js ***!
  \**************************/
/*! exports provided: calculateFlatPositions, calculatePositions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFlatPositions", function() { return calculateFlatPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePositions", function() { return calculatePositions; });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions */ "./src/dimensions.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./src/math.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");




// TODO: Extract all magic numbers
function calculateFlatPositions() {
  const extraPadding = 124;
  let previousLevel = 1;
  let y = 160;
  return _state__WEBPACK_IMPORTED_MODULE_2__["state"].rows.map((row) => {
    const x = _state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding * (row.Level - 1) + extraPadding;
    if (row.Level <= previousLevel) {
      y += _state__WEBPACK_IMPORTED_MODULE_2__["state"].padding / 2;
    }
    previousLevel = row.Level;
    return {
      bottomCenterX: 0,
      bottomCenterY: 0,
      x,
      y,
    };
  });
}

// TODO: Extract all magic numbers
function calculatePositions() {
  let flatX = 10;
  let previousLevel = 1;
  return _state__WEBPACK_IMPORTED_MODULE_2__["state"].rows.map((row) => {
    const padding = _state__WEBPACK_IMPORTED_MODULE_2__["state"].showHeader
      ? Math.max(150, _state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding * 1.5)
      : 0;
    if (row.Level <= previousLevel) {
      flatX += _state__WEBPACK_IMPORTED_MODULE_2__["state"].padding * 1.5;
    }
    const flatY = _state__WEBPACK_IMPORTED_MODULE_2__["state"].flattenMap
      ? padding + _state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding * row.Level
      : padding - _state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding * row.Level + Object(_dimensions__WEBPACK_IMPORTED_MODULE_0__["getMaxDepth"])();
    const angledX =
      flatX +
      Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_2__["state"].secondaryAngleDegrees)) *
        (_state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding * row.Level - _state__WEBPACK_IMPORTED_MODULE_2__["state"].vertPadding);
    const angledY =
      flatY + flatX * Math.tan(Object(_math__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"])(_state__WEBPACK_IMPORTED_MODULE_2__["state"].primaryAngleDegrees));
    previousLevel = row.Level;
    return {
      bottomCenterX: 0,
      bottomCenterY: 0,
      x: angledX,
      y: angledY,
    };
  });
}


/***/ }),

/***/ "./src/proportions.js":
/*!****************************!*\
  !*** ./src/proportions.js ***!
  \****************************/
/*! exports provided: updateProportions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProportions", function() { return updateProportions; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");


/* =======================================================

POSITIONS, ELEMENT ORIGINS, MEASUREMENTS AND ASSIGNMENTS

=========================================================
*/

// Determine the relative proportions and sizes for each element in the visualizaiton based on the zoom Level.
// This function provides an opportunity to skew and exaggerate the padding/spacing at different zoom levels.
// We should play around with this when creating the most zoomed out version of the visualization.
function updateProportions() {
  // the zoomInc Var is directly controlled by interacting with the Zoom Controls. It's a counter that is attached to the +/- buttons.
  // It's the multiplier for each element.
  // Most elements being resized are based on a percentage of the pageWidth var (width of page icon).
  //
  // If user is zooming in, all elements measurements are updated.
  if (_state__WEBPACK_IMPORTED_MODULE_0__["state"].zoomLevel >= 0.2) {
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight = 126 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].zoomLevel; // Width of Each PAge - Scaling is based on this.
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageWidth = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 0.8; // Height of Each Page - Scaling is Based on This
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageLabelWidth = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageWidth * 1.2;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].padding = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 1.5; // Horizontal Padding
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].vertPadding = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * _state__WEBPACK_IMPORTED_MODULE_0__["state"].vertPaddingMultiplier; // Vertical Padding
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionPadding = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 0.64; // LEFT/RIGHT PADDING OF SECTION "CARPETS"
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].textPadding = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 0.08; // PADDING BEeTWEEN TEXT, PAGES AND BAGE ICONS

    // OPTIONAL TEXT FIELD VARS
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionFontSize = 0.2 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].externalLinksWidth = 0.64 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].notesWidth = 300;

    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageLabelSize = Math.ceil(0.16 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight);
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].multipageLabelSize = Math.round(0.08 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight);
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].stepNoLabelSize = Math.round(0.95 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight);
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].cujLabelWidth = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 2.1;

    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageLabelSize = Math.ceil(0.16 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight);
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageLabelWidth = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageWidth * 1.2;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionLabelSize = Math.round(0.2 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight);

    // If zooming all the way out, some values no longer update. This ensures that labels remain readable and other elements are discoverable and scannable.
  } else {
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight = 126 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].zoomLevel; // Width of Each PAge - Scaling is based on this.

    // The constant height var represents the measurement of items that will not be resized as the visualization continues to zoom out.
    // This ensures page labels, section labels and other content remains readable at the outer-most levels of zoom.
    const constHeight = 126 * 0.3;

    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageWidth = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 0.8; // Height of Each Page - Scaling is Based on This
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageLabelWidth = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 0.8 * 1.2; // MAINTAINS CONSISTENT LABEL WIDTH //Change Back to Const
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].padding = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 1.5; // Horizontal Padding//Change Back to Const
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].vertPadding = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * _state__WEBPACK_IMPORTED_MODULE_0__["state"].vertPaddingMultiplier; // Vertical Padding
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionPadding = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 0.64; // LEFT/RIGHT PADDING OF SECTION "CARPETS"//Change Back to Const
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].textPadding = _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 0.08; // PADDING BETWEEN TEXT, PAGES AND BAGE ICONS//Change Back to Const

    // OPTIONAL TEXT FIELD VARS
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionFontSize = 0.2 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].externalLinksWidth = 0.64 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight;
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].notesWidth = 300;

    // FONT SIZES
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageLabelSize = Math.ceil(0.16 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight); // Change back to constHeight
    // state.sectionLabelSize = Math.round(0.2 * state.pageHeight * 1.3)
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].sectionLabelSize = Math.round(0.2 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight * 1.3);
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].multipageLabelSize = Math.round(0.08 * _state__WEBPACK_IMPORTED_MODULE_0__["state"].pageHeight); // Change back to constHeight
    _state__WEBPACK_IMPORTED_MODULE_0__["state"].stepNoLabelSize = Math.round(0.95 * constHeight);
  }
}


/***/ }),

/***/ "./src/selections.js":
/*!***************************!*\
  !*** ./src/selections.js ***!
  \***************************/
/*! exports provided: svgContainerSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgContainerSelection", function() { return svgContainerSelection; });
const svgContainerSelection = d3.select('#isoMap');


/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
const state = {
  // CONFIG VARS
  padding: 200, // Horizontal Padding
  vertPadding: 150, // Vertical Padding
  vertPaddingMultiplier: 1.5,
  pageHeight: 126, // Height of Each Page - Scaling is Based on This
  pageWidth: 101, // Width of Each PAge - Scaling is based on this.
  sectionPadding: 80, // LEFT/RIGHT PADDING OF SECTION "CARPETS"
  sectionFontSize: 24, // SECTION LABEL FONT SIZE
  notesWidth: 300, // NOTES TEXTFIELD WIDTH
  externalLinksWidth: 80, // EXTERNAL LINKS TEXTFIELD WIDTH
  textPadding: 10, // PADDING BETWEEN TEXT, PAGES AND BAGE ICONS
  stepNoLabelSize: 120,
  selectedPageIndex: -1, // SAVED INDEX SO THAT WE CAN REMEMBER SELECTED PAGES

  primaryAngleDegrees: 20, // 85 // DEGRESS OF PRIMARY ANGLE FOR ISO GRID
  secondaryAngleDegrees: 60, // 85  // DEGREES OF SECONDARY ANGLE FOR ISO GRID

  // Arrays of D3 SVGs, Other OBJs and Values
  pages: [], // PAGE OBJECT ARRAY
  vertConnectorObjs: [], // VERTICAL CONNECTOR OBJECTS
  horizConnectorObjs: [], // HORIZONTAL CONNECTOR OBJECTS
  sectionObjs: [], // SECTION OBJECTS
  positions: [], // LOGS POSITIONS OF EACH PAGE
  pageColors: [], // LOGS ASSOCATED COLORS WITH EACH PAGE
  origins: [], // SAVES X/Y POINTS AROUND EACH PAGE
  sections: [], // SAVES SECTION INFO
  referencePointsLeft: [], // LIST OF LEFT-MOST POINTS WITHIN EACH SECTION
  referencePointsRight: [], // LIST OF RIGHT-MOST POINTS WITHIN EACH SECTION
  cujSheetNames: [], // LIST OF CUJ SHEETS
  cujRows: [], // ARRAY OF CUJ OBJs
  cujConnectors: [],
  cujStarts: [],
  directConnectors: [], // ARRAY OF DIRECTION CONNECTIONS TO DISPLAY

  // FONT SIZES
  pageLabelSize: 18,
  sectionLabelSize: 24,
  multipageLabelSize: 10,
  pageLabelWidth: undefined,

  // Sheets Vars
  mapId: undefined,
  mapLink: undefined,
  mapName: undefined,
  zoomLevel: 0.4,
  targetZoomLevel: 0.4,
  preCujZoomLevel: 0.4,
  svgDoc: undefined,

  // CUJ Overlay Vars
  cujStart: undefined,
  cujOverlayStart: undefined,
  cujOverlay: undefined,
  cujMode: false,
  activeCUJInd: -1,
  prevActiveCUJInd: -1,
  cujStartText: undefined,

  // Other Geometric Vars
  width: undefined,
  height: undefined,

  rows: [],

  reloadTimer: undefined,

  svgHeight: undefined,
  svgWidth: undefined,
  activeStepInd: 0,
  currCard: undefined,

  currScrollX: 0,
  endScrollX: 0,
  currScrollY: 0,
  endScrollY: 0,
  savedScrollX: 0,
  savedScrollY: 0,
  cujCardWidth: 400,
  cujCardHeight: undefined,
  timer: 0,
  headerCollapsed: false,
  zoomSpeed: 0.2,

  // Zoom
  prevScrollTop: undefined,
  prevScrollLeft: undefined,
  prevMapWidth: undefined,
  prevMapHeight: undefined,
  mapWidth: undefined,
  mapHeight: undefined,
  cujLabelWidth: undefined,

  // DRAGGING UI
  isDragging: false,

  // Flatten Map
  flattenMap: false,

  // CHECKS TO SEE IF/WHEN CALLBACK HAPPENED - NEED TO FIX
  callBack: undefined,

  // PAGE SELECTION
  activePageIndex: -1,

  // hidePageNotes(),
  initFlatRun: true,

  // Animated Zoom Transition
  currOrigins: [],

  // Holding areas to render text for future measurments and positioning
  testPageLabel: undefined,
  testSectionLabel: undefined,
  viewTransitionEase: 0.4,
  viewChangeFrequency: 10,

  cujMarkerCollection: [],
  cujMarkerArray: [],

  cujEndPoints: [],
  cujStartCoordinates: [],

  cujConnectCollection: [],

  currXPadding: undefined,

  transitioningViews: false,

  pagePanelImagePaths: {
    assets: 'img/cloud-assets.svg',
    backup: 'img/cloud-backup.svg',
    dashboard: 'img/page-dashboard.svg',
    database: 'img/cloud-database.svg',
    details: 'img/page-details.svg',
    form: 'img/page-data-entry.svg',
    local: 'img/cloud-local.svg',
    generic: 'img/page-generic.svg',
    map: 'img/page-map.svg',
    list: 'img/page-list-view.svg',
    people: 'img/icon-people.svg',
    phone: 'img/icon-phone.svg',
    playbook: 'img/cloud-playbook.svg',
    replica: 'img/cloud-replica.svg',
    security: 'img/cloud-security.svg',
    settings: 'img/page-settings.svg',
    table: 'img/page-table.svg',
    timeline: 'img/page-timeline.svg',
    visualization: 'img/page-visualizations.svg',
    vm: 'img/cloud-vm.svg',
    zoom_in:
      'https://fonts.gstatic.com/s/i/googlematerialicons/format_list_bulleted/v5/grey600-48dp/2x/gm_format_list_bulleted_grey600_48dp.png',
    zoom_out:
      'https://fonts.gstatic.com/s/i/googlematerialicons/remove/v7/grey600-48dp/2x/gm_remove_grey600_48dp.png',
  },

  isCUJZooming: false,

  sectionColors: [
    '#a142f4',
    '#4285f4',
    '#34a853',
    '#fbbc04',
    '#ea4335',
    '#fa7b17',
    '#f439a0',
    '#24c1e0',
    '#5f6368',
    '#ba68c8',
    '#3f51b5',
    '#42a5f5',
    '#4dd0e1',
    '#009688',
  ],
};


/***/ }),

/***/ "./src/stateUtilities.js":
/*!*******************************!*\
  !*** ./src/stateUtilities.js ***!
  \*******************************/
/*! exports provided: getIsInActiveCUJ, getNotedPagePositionsSorted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsInActiveCUJ", function() { return getIsInActiveCUJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotedPagePositionsSorted", function() { return getNotedPagePositionsSorted; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");


function getIsInActiveCUJ(page) {
  return _state__WEBPACK_IMPORTED_MODULE_0__["state"].cujRows[_state__WEBPACK_IMPORTED_MODULE_0__["state"].activeCUJInd].some(
    (cujRow) => cujRow.Page === page.name
  );
}
function getNotedPagePositionsSorted() {
  return _state__WEBPACK_IMPORTED_MODULE_0__["state"].pages
    .filter((page) => page.hasNote)
    .map((page) => _state__WEBPACK_IMPORTED_MODULE_0__["state"].positions[page.index])
    .sort((a, b) => a.x - b.x);
}


/***/ }),

/***/ "./src/transitions/scroll.js":
/*!***********************************!*\
  !*** ./src/transitions/scroll.js ***!
  \***********************************/
/*! exports provided: startScrollTransition, stopScrollTransition, initializeContainerScroll, easeScrollToMatchView, snapScrollToMatchZoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startScrollTransition", function() { return startScrollTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopScrollTransition", function() { return stopScrollTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeContainerScroll", function() { return initializeContainerScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeScrollToMatchView", function() { return easeScrollToMatchView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapScrollToMatchZoom", function() { return snapScrollToMatchZoom; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/state.js");



let currentIntervalIndex;
const numberOfIntervals = 20;
const intervalDurationInMilliseconds = 20;
let transitionTimerID;

function startScrollTransition() {
  currentIntervalIndex = 0;
  const deltaX =
    (_state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollX - _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollLeft) / numberOfIntervals;
  const deltaY =
    (_state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollY - _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop) / numberOfIntervals;
  transitionTimerID = setInterval(() => {
    tween(deltaX, deltaY);
  }, intervalDurationInMilliseconds);
}

function stopScrollTransition() {
  clearTimeout(transitionTimerID);
}

function tween(deltaX, deltaY) {
  currentIntervalIndex += 1;
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollLeft += deltaX;
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop += deltaY;
  if (currentIntervalIndex === numberOfIntervals) {
    stopScrollTransition();
  }
}

function initializeContainerScroll() {
  const firstPage = _state__WEBPACK_IMPORTED_MODULE_1__["state"].pages[0];
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop = firstPage.specs.y - _state__WEBPACK_IMPORTED_MODULE_1__["state"].height / 2;
}

function easeScrollToMatchView() {
  const heightRatio = _state__WEBPACK_IMPORTED_MODULE_1__["state"].mapHeight / _state__WEBPACK_IMPORTED_MODULE_1__["state"].prevMapHeight;
  const widthRatio = _state__WEBPACK_IMPORTED_MODULE_1__["state"].mapWidth / _state__WEBPACK_IMPORTED_MODULE_1__["state"].prevMapWidth;
  _state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollX = Math.max(
    0,
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].prevScrollLeft * widthRatio + (_state__WEBPACK_IMPORTED_MODULE_1__["state"].width / 2) * (widthRatio - 1)
  );
  _state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollY = Math.max(
    0,
    _state__WEBPACK_IMPORTED_MODULE_1__["state"].prevScrollTop * heightRatio + (_state__WEBPACK_IMPORTED_MODULE_1__["state"].height / 2) * (heightRatio - 1)
  );
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollLeft = _state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollX;
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop = _state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollY;
}

function snapScrollToMatchZoom() {
  // TODO: Change code to declarative code in future.
  if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].isCUJZooming) {
    let percentTop;
    let percentLeft;

    if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].mapWidth < _state__WEBPACK_IMPORTED_MODULE_1__["state"].width && _state__WEBPACK_IMPORTED_MODULE_1__["state"].flattenMap) {
      percentLeft = 0;
    } else {
      percentLeft =
        (_state__WEBPACK_IMPORTED_MODULE_1__["state"].prevScrollLeft + _state__WEBPACK_IMPORTED_MODULE_1__["state"].width / 2) / _state__WEBPACK_IMPORTED_MODULE_1__["state"].prevMapWidth;
    }

    if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews && !_state__WEBPACK_IMPORTED_MODULE_1__["state"].cujMode) {
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollX = percentLeft * _state__WEBPACK_IMPORTED_MODULE_1__["state"].mapWidth - _state__WEBPACK_IMPORTED_MODULE_1__["state"].width / 2;
    }

    if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].mapHeight < _state__WEBPACK_IMPORTED_MODULE_1__["state"].height && _state__WEBPACK_IMPORTED_MODULE_1__["state"].flattenMap) {
      percentTop = 0;
    } else {
      percentTop =
        (_state__WEBPACK_IMPORTED_MODULE_1__["state"].prevScrollTop + _state__WEBPACK_IMPORTED_MODULE_1__["state"].height / 2) / _state__WEBPACK_IMPORTED_MODULE_1__["state"].prevMapHeight;
    }

    if (!_state__WEBPACK_IMPORTED_MODULE_1__["state"].cujMode && !_state__WEBPACK_IMPORTED_MODULE_1__["state"].transitioningViews) {
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollY = percentTop * _state__WEBPACK_IMPORTED_MODULE_1__["state"].mapHeight - _state__WEBPACK_IMPORTED_MODULE_1__["state"].height / 2;
    }

    if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollX < 0) {
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollX = 0;
    }

    if (_dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop < 0) {
      _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop = 0;
    }
  }
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollLeft = _state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollX;
  _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop = _state__WEBPACK_IMPORTED_MODULE_1__["state"].endScrollY;
}


/***/ }),

/***/ "./src/transitions/view.js":
/*!*********************************!*\
  !*** ./src/transitions/view.js ***!
  \*********************************/
/*! exports provided: startViewTransition, stopViewTransition, startViewTransitionIfNecessary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startViewTransition", function() { return startViewTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopViewTransition", function() { return stopViewTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startViewTransitionIfNecessary", function() { return startViewTransitionIfNecessary; });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dimensions */ "./src/dimensions.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _elements_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/connector */ "./src/elements/connector.js");
/* harmony import */ var _elements_crosslink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/crosslink */ "./src/elements/crosslink.js");
/* harmony import */ var _elements_cuj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/cuj */ "./src/elements/cuj.js");
/* harmony import */ var _elements_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/page */ "./src/elements/page/index.js");
/* harmony import */ var _elements_page_hoverEllipse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/page/hoverEllipse */ "./src/elements/page/hoverEllipse.js");
/* harmony import */ var _elements_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements/section */ "./src/elements/section.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _stateUtilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../stateUtilities */ "./src/stateUtilities.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll */ "./src/transitions/scroll.js");













let anchorPage;
let transitionTimerID;

function startViewTransition() {
  stopViewTransition();
  Object(_scroll__WEBPACK_IMPORTED_MODULE_10__["easeScrollToMatchView"])();
  _state__WEBPACK_IMPORTED_MODULE_8__["state"].transitioningViews = true;
  anchorPage = calculateAnchorPage();
  transitionTimerID = setInterval(tween, _state__WEBPACK_IMPORTED_MODULE_8__["state"].viewChangeFrequency);
}

function stopViewTransition() {
  clearInterval(transitionTimerID);
  _state__WEBPACK_IMPORTED_MODULE_8__["state"].transitioningViews = false;

  Object(_elements_crosslink__WEBPACK_IMPORTED_MODULE_3__["updateSelectionConnections"])();
}

function calculateAnchorPage() {
  // TODO: Extract this magic number
  const padding = 160;
  const originX = _dom__WEBPACK_IMPORTED_MODULE_1__["svgContainer"].scrollLeft + padding;
  const originY = _dom__WEBPACK_IMPORTED_MODULE_1__["svgContainer"].scrollTop + padding;
  function distanceTo(position) {
    const deltaX = position.x - originX;
    const deltaY = position.y - originY;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  }
  const closestPositions = _state__WEBPACK_IMPORTED_MODULE_8__["state"].positions.sort((a, b) => {
    return distanceTo(a) - distanceTo(b);
  });
  const closestPosition = closestPositions[0];
  const closestPage = _state__WEBPACK_IMPORTED_MODULE_8__["state"].pages[_state__WEBPACK_IMPORTED_MODULE_8__["state"].positions.indexOf(closestPosition)];
  return closestPage;
}

function tween() {
  updateScroll();
  if (calculateIsTweenDone()) {
    stopViewTransition();
  }
  if (_state__WEBPACK_IMPORTED_MODULE_8__["state"].flattenMap) {
    tweenToFlat();
  } else {
    tweenToIso();
  }
}

function updateScroll() {
  _dom__WEBPACK_IMPORTED_MODULE_1__["svgContainer"].scrollLeft =
    _state__WEBPACK_IMPORTED_MODULE_8__["state"].mapWidth > _state__WEBPACK_IMPORTED_MODULE_8__["state"].width ? anchorPage.specs.x - _state__WEBPACK_IMPORTED_MODULE_8__["state"].width / 4 : 0;
  _dom__WEBPACK_IMPORTED_MODULE_1__["svgContainer"].scrollTop =
    _state__WEBPACK_IMPORTED_MODULE_8__["state"].flattenMap && _state__WEBPACK_IMPORTED_MODULE_8__["state"].endScrollY > _state__WEBPACK_IMPORTED_MODULE_8__["state"].mapHeight - _state__WEBPACK_IMPORTED_MODULE_8__["state"].height
      ? _state__WEBPACK_IMPORTED_MODULE_8__["state"].mapHeight - _state__WEBPACK_IMPORTED_MODULE_8__["state"].height
      : anchorPage.specs.y - _state__WEBPACK_IMPORTED_MODULE_8__["state"].height / 4;
}

// TODO: Extract magic numbers
function calculateIsTweenDone() {
  return _state__WEBPACK_IMPORTED_MODULE_8__["state"].pages.every(
    (page) =>
      Math.abs(page.specs.x - page.targetSpecs.x) <= 0.5 &&
      Math.abs(page.specs.y - page.targetSpecs.y) <= 0.5
  );
}

function tweenToFlat() {
  const notedPagePositionsSorted = Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_9__["getNotedPagePositionsSorted"])();
  for (let pageIndex = 0; pageIndex < _state__WEBPACK_IMPORTED_MODULE_8__["state"].rows.length; pageIndex++) {
    const pageData = _state__WEBPACK_IMPORTED_MODULE_8__["state"].rows[pageIndex];
    Object(_elements_page__WEBPACK_IMPORTED_MODULE_5__["drawPage"])(pageData, pageIndex, notedPagePositionsSorted);
    Object(_elements_page_hoverEllipse__WEBPACK_IMPORTED_MODULE_6__["updateState"])(_state__WEBPACK_IMPORTED_MODULE_8__["state"].pages[pageIndex]);
  }
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_2__["drawFlatHorizConnectors"])();
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_2__["drawFlatVertConnectors"])();
  Object(_elements_section__WEBPACK_IMPORTED_MODULE_7__["drawFlatSections"])();
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_2__["drawDirectConnections"])();
  Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_4__["drawFlatCUJStartPoint"])();
  Object(_dimensions__WEBPACK_IMPORTED_MODULE_0__["updateContainerDimensions"])();
  Object(_elements_crosslink__WEBPACK_IMPORTED_MODULE_3__["updateSelectionConnections"])();
  Object(_elements_crosslink__WEBPACK_IMPORTED_MODULE_3__["updateAllHighlightedConnections"])();
}

function tweenToIso() {
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_2__["drawVertConnectors"])();
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_2__["drawHorizConnectors"])();

  const notedPagePositionsSorted = Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_9__["getNotedPagePositionsSorted"])();
  for (let pageIndex = 0; pageIndex < _state__WEBPACK_IMPORTED_MODULE_8__["state"].rows.length; pageIndex++) {
    const pageData = _state__WEBPACK_IMPORTED_MODULE_8__["state"].rows[pageIndex];
    Object(_elements_page__WEBPACK_IMPORTED_MODULE_5__["drawPage"])(pageData, pageIndex, notedPagePositionsSorted);
    Object(_elements_page_hoverEllipse__WEBPACK_IMPORTED_MODULE_6__["updateState"])(_state__WEBPACK_IMPORTED_MODULE_8__["state"].pages[pageIndex]);
  }
  Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_4__["drawCUJStartPoint"])();
  Object(_elements_section__WEBPACK_IMPORTED_MODULE_7__["drawSections"])();
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_2__["drawDirectConnections"])();
  Object(_dimensions__WEBPACK_IMPORTED_MODULE_0__["updateContainerDimensions"])();
  Object(_elements_crosslink__WEBPACK_IMPORTED_MODULE_3__["updateSelectionConnections"])();
}

// TODO: Extract magic numbers
function startViewTransitionIfNecessary() {
  // We added extra conditions for switching views while in CUJ mode.
  // floatErrorMargin ignores imperfections in state.targetZoomLevel,
  // which is intended to always be an integer multiple of 0.1.
  // TODO: Refactor state.targetZoomLevel to be an integer
  const floatErrorMargin = 0.05;
  const doSwitchToFlat =
    !_state__WEBPACK_IMPORTED_MODULE_8__["state"].flattenMap && _state__WEBPACK_IMPORTED_MODULE_8__["state"].targetZoomLevel < 0.4 + floatErrorMargin;
  const doSwitchToIso =
    _state__WEBPACK_IMPORTED_MODULE_8__["state"].flattenMap && _state__WEBPACK_IMPORTED_MODULE_8__["state"].targetZoomLevel > 0.5 - floatErrorMargin;
  if (doSwitchToFlat) {
    _state__WEBPACK_IMPORTED_MODULE_8__["state"].flattenMap = true;
    if (!_state__WEBPACK_IMPORTED_MODULE_8__["state"].cujMode) {
      startViewTransition();
    }
  }
  if (doSwitchToIso) {
    _state__WEBPACK_IMPORTED_MODULE_8__["state"].flattenMap = false;
    if (!_state__WEBPACK_IMPORTED_MODULE_8__["state"].cujMode) {
      startViewTransition();
    }
  }
}


/***/ }),

/***/ "./src/transitions/zoom.js":
/*!*********************************!*\
  !*** ./src/transitions/zoom.js ***!
  \*********************************/
/*! exports provided: startZoomTransition, stopZoomTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startZoomTransition", function() { return startZoomTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopZoomTransition", function() { return stopZoomTransition; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _elements_cuj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/cuj */ "./src/elements/cuj.js");
/* harmony import */ var _elements_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/section */ "./src/elements/section.js");
/* harmony import */ var _proportions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proportions */ "./src/proportions.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "./src/state.js");
/* harmony import */ var _vis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vis */ "./src/vis.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scroll */ "./src/transitions/scroll.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view */ "./src/transitions/view.js");










const maxPageCount = 100;
let transitionTimerID;

function startZoomTransition() {
  stopZoomTransition();
  Object(_scroll__WEBPACK_IMPORTED_MODULE_6__["stopScrollTransition"])();
  _state__WEBPACK_IMPORTED_MODULE_4__["state"].zoomSpeed =
    Math.abs(_state__WEBPACK_IMPORTED_MODULE_4__["state"].zoomLevel - _state__WEBPACK_IMPORTED_MODULE_4__["state"].targetZoomLevel) > 0.5 ? 0.1 : 0.3;
  _state__WEBPACK_IMPORTED_MODULE_4__["state"].prevMapHeight = _state__WEBPACK_IMPORTED_MODULE_4__["state"].mapHeight;
  _state__WEBPACK_IMPORTED_MODULE_4__["state"].prevMapWidth = _state__WEBPACK_IMPORTED_MODULE_4__["state"].mapWidth;
  _state__WEBPACK_IMPORTED_MODULE_4__["state"].prevScrollLeft = _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollLeft;
  _state__WEBPACK_IMPORTED_MODULE_4__["state"].prevScrollTop = _dom__WEBPACK_IMPORTED_MODULE_0__["svgContainer"].scrollTop;
  if (_state__WEBPACK_IMPORTED_MODULE_4__["state"].pages.length < maxPageCount) {
    transitionTimerID = setInterval(tween, 2);
  } else {
    _state__WEBPACK_IMPORTED_MODULE_4__["state"].zoomLevel = _state__WEBPACK_IMPORTED_MODULE_4__["state"].targetZoomLevel;
    stopZoomTransition();
    tween();
  }
}

function stopZoomTransition() {
  clearTimeout(transitionTimerID);
  Object(_scroll__WEBPACK_IMPORTED_MODULE_6__["stopScrollTransition"])();
}

function tween() {
  Object(_proportions__WEBPACK_IMPORTED_MODULE_3__["updateProportions"])();
  Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_1__["updateCUJStartVisibility"])();
  Object(_view__WEBPACK_IMPORTED_MODULE_7__["startViewTransitionIfNecessary"])();
  Object(_elements_section__WEBPACK_IMPORTED_MODULE_2__["resetSectionCalculations"])();
  Object(_vis__WEBPACK_IMPORTED_MODULE_5__["updateVis"])();
  if (Math.abs(_state__WEBPACK_IMPORTED_MODULE_4__["state"].zoomLevel - _state__WEBPACK_IMPORTED_MODULE_4__["state"].targetZoomLevel) < 0.005) {
    _state__WEBPACK_IMPORTED_MODULE_4__["state"].zoomLevel = _state__WEBPACK_IMPORTED_MODULE_4__["state"].targetZoomLevel;
    stopZoomTransition();
  }
  if (_state__WEBPACK_IMPORTED_MODULE_4__["state"].transitioningViews) {
    _state__WEBPACK_IMPORTED_MODULE_4__["state"].zoomLevel = _state__WEBPACK_IMPORTED_MODULE_4__["state"].targetZoomLevel;
    stopZoomTransition();
  } else {
    _state__WEBPACK_IMPORTED_MODULE_4__["state"].zoomLevel +=
      (_state__WEBPACK_IMPORTED_MODULE_4__["state"].targetZoomLevel - _state__WEBPACK_IMPORTED_MODULE_4__["state"].zoomLevel) * _state__WEBPACK_IMPORTED_MODULE_4__["state"].zoomSpeed;
    Object(_scroll__WEBPACK_IMPORTED_MODULE_6__["snapScrollToMatchZoom"])();
  }
}


/***/ }),

/***/ "./src/vis.js":
/*!********************!*\
  !*** ./src/vis.js ***!
  \********************/
/*! exports provided: createVis, updateVis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVis", function() { return createVis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateVis", function() { return updateVis; });
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dimensions */ "./src/dimensions.js");
/* harmony import */ var _elements_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/connector */ "./src/elements/connector.js");
/* harmony import */ var _elements_crosslink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/crosslink */ "./src/elements/crosslink.js");
/* harmony import */ var _elements_cuj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/cuj */ "./src/elements/cuj.js");
/* harmony import */ var _elements_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/page */ "./src/elements/page/index.js");
/* harmony import */ var _elements_page_detailsCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/page/detailsCard */ "./src/elements/page/detailsCard.js");
/* harmony import */ var _elements_page_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements/page/label */ "./src/elements/page/label.js");
/* harmony import */ var _elements_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elements/section */ "./src/elements/section.js");
/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./positions */ "./src/positions.js");
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _stateUtilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stateUtilities */ "./src/stateUtilities.js");
/* harmony import */ var _transitions_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transitions/scroll */ "./src/transitions/scroll.js");
/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zoom */ "./src/zoom.js");















/* =======================================================

CREATING THE VISUALIZATION'S ELEMENTS

=========================================================
*/

// function only runs once.
// CONSIDER FIXING: In the future all the create methods could fire,
// then we could fire the udpateVis() function to initialize the drawing.

function createVis() {
  Object(_dimensions__WEBPACK_IMPORTED_MODULE_0__["updateWindowDimensions"])();

  // Sets up initial SVG Container for rendering the visualization.
  // The width/height attributes are updated in a later function.
  // 5000 is arb. - it's updated later
  _state__WEBPACK_IMPORTED_MODULE_10__["state"].svgDoc = _selections__WEBPACK_IMPORTED_MODULE_9__["svgContainerSelection"]
    .style('height', '100vh')
    .style('width', '100vw')
    .style('position', 'absolute')
    .style('top', 0)
    .style('left', 0)
    .style('overflow', 'scroll')
    .style('cursor', 'move')
    // .attr('draggable', true)
    .append('svg')
    .style('position', 'absolute')
    .style('left', 0)
    .style('top', 0)
    .attr('id', 'svgDiagram')
    .attr('draggable', true);

  // Vis starts with each page and determining its placement in the "tree" structure.
  // Placement, and measurements of all other elements are based off of the initial page tree structure.
  if (_state__WEBPACK_IMPORTED_MODULE_10__["state"].flattenMap) {
    _state__WEBPACK_IMPORTED_MODULE_10__["state"].vertPadding = _state__WEBPACK_IMPORTED_MODULE_10__["state"].pageWidth * 4;
    _state__WEBPACK_IMPORTED_MODULE_10__["state"].positions = Object(_positions__WEBPACK_IMPORTED_MODULE_8__["calculateFlatPositions"])();
  } else {
    _state__WEBPACK_IMPORTED_MODULE_10__["state"].positions = Object(_positions__WEBPACK_IMPORTED_MODULE_8__["calculatePositions"])();
  }
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_1__["assignConnectorOrigins"])(true);
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_1__["createDirectConnections"])();

  // Create array of sections ("carpets or mats") for future reference.
  Object(_elements_section__WEBPACK_IMPORTED_MODULE_7__["assignSections"])();

  if (_state__WEBPACK_IMPORTED_MODULE_10__["state"].cujSheetNames.length > 0) {
    Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_3__["formatCUJArray"])();
    Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_3__["createCUJMarkers"])();
  }

  Object(_elements_page_label__WEBPACK_IMPORTED_MODULE_6__["createTestPageLabel"])();
  _state__WEBPACK_IMPORTED_MODULE_10__["state"].rows.forEach((pageData, pageIndex) => {
    Object(_elements_page__WEBPACK_IMPORTED_MODULE_4__["createPage"])(pageData, pageIndex);
  });
  Object(_elements_page_detailsCard__WEBPACK_IMPORTED_MODULE_5__["createNodePanel"])();

  // CONSIDER FIXING: WE MAY BE ABLE TO DROP THIS, CALLS ALSO EXIST IN UPDATE VIS FN
  // MAY BE ABLE TO DELETE ALL THESE DRAW FNS IN THIS CREATE FN
  // TODO: All draw functions may be unnecessary in createVis(),
  // since they're all re-called in updateVis(). Delete these lines?
  const notedPagePositionsSorted = Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_11__["getNotedPagePositionsSorted"])();
  _state__WEBPACK_IMPORTED_MODULE_10__["state"].rows.forEach((pageData, pageIndex) => {
    Object(_elements_page__WEBPACK_IMPORTED_MODULE_4__["drawPage"])(pageData, pageIndex, notedPagePositionsSorted);
  });

  Object(_elements_section__WEBPACK_IMPORTED_MODULE_7__["createTestSectionLabel"])();
  Object(_elements_section__WEBPACK_IMPORTED_MODULE_7__["createSections"])();

  // CREATE SECTIONS, DRAW SECTIONS;
  // IMHO - this was the most challenging portion of the map to render.

  // TODO: All draw functions may be unnecessary in createVis(),
  // since they're all re-called in updateVis(). Delete these lines?
  if (_state__WEBPACK_IMPORTED_MODULE_10__["state"].flattenMap) {
    Object(_elements_section__WEBPACK_IMPORTED_MODULE_7__["drawFlatSections"])();
    Object(_elements_connector__WEBPACK_IMPORTED_MODULE_1__["drawFlatHorizConnectors"])();
    Object(_elements_connector__WEBPACK_IMPORTED_MODULE_1__["drawFlatVertConnectors"])();
    Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_3__["hideAllCUJStarts"])();
  } else {
    Object(_elements_section__WEBPACK_IMPORTED_MODULE_7__["drawSections"])();
  }

  // SET UP CUJ OVERLAY LAYER
  // CUJ Overlay is important - Notice the order in which elements are rendered. Some CUJ elements such as segments of the subway track overlap pages to create the illusion of perpective.
  // Other CUJ elements appear beneath the map. Two separate container layers were created to provide this 'illusion', The cujOverlay appears on top of the map in this case.
  _state__WEBPACK_IMPORTED_MODULE_10__["state"].cujOverlay = _selections__WEBPACK_IMPORTED_MODULE_9__["svgContainerSelection"]
    .append('svg')
    .attr('width', 1000)
    .attr('height', 1000)
    .style('position', 'absolute')
    .style('left', 0)
    .style('top', 0);

  if (_state__WEBPACK_IMPORTED_MODULE_10__["state"].cujSheetNames.length > 0) {
    Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_3__["createCUJCard"])();
    Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_3__["createCUJConnectors"])();
  }

  Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_3__["cujCheck"])();

  // Draw necessary direct connections
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_1__["drawDirectConnections"])();

  // Draw Default Highlights Where Applicable
  Object(_elements_crosslink__WEBPACK_IMPORTED_MODULE_2__["updateAllHighlightedConnections"])();

  // RESIZES CONTAINER SVG (svgDoc);
  Object(_dimensions__WEBPACK_IMPORTED_MODULE_0__["updateContainerDimensions"])();
  Object(_dimensions__WEBPACK_IMPORTED_MODULE_0__["updateMapDimensions"])();
  Object(_transitions_scroll__WEBPACK_IMPORTED_MODULE_12__["initializeContainerScroll"])();

  Object(_zoom__WEBPACK_IMPORTED_MODULE_13__["createZoomButtons"])();
}

/* =======================================================

DRAWING, UPDATING AND REDRAWING THE MAP

=========================================================
*/

// Every time a user interacts with the vis, whether it's engaging cujMode or zooming,
// The visualization needs to be updated and redrawn.
// Elements in the map will be resized and repositione based on updated measurements from calculateZoom();
function updateVis() {
  // Start by making call to update page positions.

  // Since this isn't the first time the code is running, the false parameter is passed
  // The assignPagePositions() function will not make any calls to create new map elements,
  // but reposition existing ones.
  // QUESTION - reason false is passed in even though not used?
  // QUESTION - did you have problems with things loading at the wrong times?

  if (_state__WEBPACK_IMPORTED_MODULE_10__["state"].flattenMap) {
    _state__WEBPACK_IMPORTED_MODULE_10__["state"].vertPadding = _state__WEBPACK_IMPORTED_MODULE_10__["state"].pageWidth * 4;
    _state__WEBPACK_IMPORTED_MODULE_10__["state"].positions = Object(_positions__WEBPACK_IMPORTED_MODULE_8__["calculateFlatPositions"])();
  } else {
    _state__WEBPACK_IMPORTED_MODULE_10__["state"].positions = Object(_positions__WEBPACK_IMPORTED_MODULE_8__["calculatePositions"])();
  }
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_1__["assignConnectorOrigins"])(false);

  const notedPagePositionsSorted = Object(_stateUtilities__WEBPACK_IMPORTED_MODULE_11__["getNotedPagePositionsSorted"])();

  // Since the exisitng functions require data parameters, local vars were set up here
  // CONSIDER FIXING: Perhaps we don't need this in the future.
  for (let pageIndex = 0; pageIndex < _state__WEBPACK_IMPORTED_MODULE_10__["state"].rows.length; pageIndex++) {
    const pageData = _state__WEBPACK_IMPORTED_MODULE_10__["state"].rows[pageIndex];

    // KILLS ANIMATION OF CUJ STATES ON ZOOM
    // If transitioning in and out of cujMode, stop any existing animation
    _state__WEBPACK_IMPORTED_MODULE_10__["state"].pages[pageIndex].hoverEllipse.classed('trans', false);

    Object(_elements_page__WEBPACK_IMPORTED_MODULE_4__["drawPage"])(pageData, pageIndex, notedPagePositionsSorted);
    if (_state__WEBPACK_IMPORTED_MODULE_10__["state"].flattenMap) {
      Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_3__["hideAllCUJStarts"])();
    }
  }

  _state__WEBPACK_IMPORTED_MODULE_10__["state"].initFlatRun = false;

  if (_state__WEBPACK_IMPORTED_MODULE_10__["state"].flattenMap) {
    Object(_elements_connector__WEBPACK_IMPORTED_MODULE_1__["drawFlatHorizConnectors"])();
    Object(_elements_connector__WEBPACK_IMPORTED_MODULE_1__["drawFlatVertConnectors"])();
    Object(_elements_section__WEBPACK_IMPORTED_MODULE_7__["drawFlatSections"])(); // Reposition and resize section carpets for flattened map.
  } else {
    Object(_elements_section__WEBPACK_IMPORTED_MODULE_7__["drawSections"])(); // Reposition and resize section 'carpets'.
  }

  // Check to see if the map is in cujMode. If so, determine which CUJ is active, and which step within that CUJ is active.
  Object(_elements_cuj__WEBPACK_IMPORTED_MODULE_3__["cujCheck"])();

  // Checks to see if selected connections exist, then updates them.
  if (!_state__WEBPACK_IMPORTED_MODULE_10__["state"].transitioningViews) {
    Object(_elements_crosslink__WEBPACK_IMPORTED_MODULE_2__["updateSelectionConnections"])();
  }

  // Draw necessary direct connections
  Object(_elements_connector__WEBPACK_IMPORTED_MODULE_1__["drawDirectConnections"])();

  // Draw Default Highlights Where Applicable
  Object(_elements_crosslink__WEBPACK_IMPORTED_MODULE_2__["updateAllHighlightedConnections"])();

  // If visualization is updated and card is selected, move card with update.
  if (_state__WEBPACK_IMPORTED_MODULE_10__["state"].selectedPageIndex > -1) {
    _state__WEBPACK_IMPORTED_MODULE_10__["state"].pages[_state__WEBPACK_IMPORTED_MODULE_10__["state"].selectedPageIndex].hoverEllipse
      .classed('trans', true)
      .style('opacity', 1);
  }

  // Once everything is redrawn, and we know the exact screen real estate required for the updated vis,
  // make call to resize the SVG container.
  Object(_dimensions__WEBPACK_IMPORTED_MODULE_0__["updateContainerDimensions"])();
  Object(_dimensions__WEBPACK_IMPORTED_MODULE_0__["updateMapDimensions"])();

  // drawAllMarkers();
}


/***/ }),

/***/ "./src/zoom.js":
/*!*********************!*\
  !*** ./src/zoom.js ***!
  \*********************/
/*! exports provided: createZoomButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createZoomButtons", function() { return createZoomButtons; });
/* harmony import */ var _selections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selections */ "./src/selections.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _transitions_zoom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitions/zoom.js */ "./src/transitions/zoom.js");




function createZoomButtons() {
  const zoomButtonsContainer = _selections__WEBPACK_IMPORTED_MODULE_0__["svgContainerSelection"]
    .append('div')
    .attr('id', 'zoomButtonsContainer')
    .attr(
      'style',
      'background: #fff; bottom: 24; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); position: fixed; right: 24; width: 36px; z-index: 100;'
    );

  const zoomInButton = zoomButtonsContainer
    .append('div')
    .attr('id', 'zoomInButton')
    .attr(
      'style',
      'background: #fff; border: 1px solid #ccc; cursor: pointer; height: 36px; width: 36px;'
    );
  const zoomOutButton = zoomButtonsContainer
    .append('div')
    .attr('id', 'zoomInButton')
    .attr(
      'style',
      'background: #fff; border: 1px solid #ccc; cursor: pointer; height: 36px; width: 36px;'
    );

  const zoomInButtonSvg = zoomInButton
    .append('svg')
    .attr('viewBox', '0 0 24 24');
  const zoomOutButtonSvg = zoomOutButton
    .append('svg')
    .attr('viewBox', '0 0 24 24');
  zoomInButtonSvg
    .append('path')
    .attr('d', 'M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z')
    .attr('fill', '#757575');
  zoomInButtonSvg
    .append('path')
    .attr('d', 'M0,0h24v24H0V0z')
    .attr('fill', 'none');
  zoomOutButtonSvg
    .append('svg')
    .append('path')
    .attr('d', 'M6,12h12v2H6V12z')
    .attr('fill', '#757575');
  zoomOutButtonSvg
    .append('path')
    .attr('d', 'M0,0h24v24H0V0z')
    .attr('fill', 'none');

  zoomInButton
    .on('mouseover', function (d) {
      zoomInButton.style('background', '#e2e2e2');
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].isDragging = false;
    })
    .on('mouseout', function () {
      zoomInButton.style('background', '#ffffff');
    })
    .on('click', function () {
      if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel < 2) {
        _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel += 0.1;
        _state__WEBPACK_IMPORTED_MODULE_1__["state"].preCujZoomLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel;
      }
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].isCUJZooming = false;
      Object(_transitions_zoom_js__WEBPACK_IMPORTED_MODULE_2__["startZoomTransition"])();
    });

  zoomOutButton
    .on('mouseover', function () {
      zoomOutButton.style('background', '#e2e2e2');
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].isDragging = false;
    })
    .on('mouseout', function () {
      zoomOutButton.style('background', '#ffffff');
    })
    .on('click', function () {
      // Scope (Min/Max) of zoom is set here.
      if (_state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel >= 0.4) {
        _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel -= 0.1;
        _state__WEBPACK_IMPORTED_MODULE_1__["state"].preCujZoomLevel = _state__WEBPACK_IMPORTED_MODULE_1__["state"].targetZoomLevel;
      }
      _state__WEBPACK_IMPORTED_MODULE_1__["state"].isCUJZooming = false;
      Object(_transitions_zoom_js__WEBPACK_IMPORTED_MODULE_2__["startZoomTransition"])();
    });
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGltZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9kcmFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9jb25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL2Nyb3NzbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvY3VqLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9wYWdlL2FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3BhZ2UvZGV0YWlsc0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3BhZ2UvZXh0ZXJuYWxMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9wYWdlL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcGFnZS9ob3ZlckVsbGlwc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3BhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3BhZ2UvaW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9wYWdlL2xhYmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9lbGVtZW50cy9wYWdlL211bHRpcGFnZUxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3BhZ2UvbXVsdGlwYWdlUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VsZW1lbnRzL3BhZ2Uvbm90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvcGFnZS9wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZWxlbWVudHMvc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcG9ydGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZVV0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNpdGlvbnMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy90cmFuc2l0aW9ucy92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy90cmFuc2l0aW9ucy96b29tLmpzIiwid2VicGFjazovLy8uL3NyYy92aXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvb20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7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QUF3Qix3QkFBd0IsaUJBQWlCLGNBQWMsYUFBYTtBQUM1Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNENBQUs7QUFDWCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFVBQVUsNENBQUs7QUFDZixRQUFRLDRDQUFLO0FBQ2IsUUFBUSw0Q0FBSyxtQkFBbUIsNENBQUs7QUFDckM7QUFDQSxNQUFNLDRDQUFLO0FBQ1gsTUFBTSxnRkFBbUI7QUFDekIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLDRDQUFLO0FBQ1gsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsNENBQUs7QUFDZixRQUFRLDRDQUFLO0FBQ2IsUUFBUSw0Q0FBSyxtQkFBbUIsNENBQUs7QUFDckM7QUFDQSxNQUFNLDRDQUFLO0FBQ1gsTUFBTSxnRkFBbUI7QUFDekIsS0FBSztBQUNMIiwiZmlsZSI6Imlzb19tYXAuYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IGdldFNlY3Rpb25Db2xvciA9IGQzLnNjYWxlT3JkaW5hbCgpLnJhbmdlKHN0YXRlLnNlY3Rpb25Db2xvcnMpO1xuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcnJpZGVEZWZhdWx0Q29sb3JzKGN1c3RvbUNvbG9ycykge1xuICBzdGF0ZS5zZWN0aW9uQ29sb3JzID0gY3VzdG9tQ29sb3JzO1xuICBnZXRTZWN0aW9uQ29sb3IucmFuZ2UoY3VzdG9tQ29sb3JzKTtcbn1cbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICBzdGF0ZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBzdGF0ZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb250YWluZXJEaW1lbnNpb25zKCkge1xuICBjb25zdCBtYXhYID0gTWF0aC5tYXgoLi4uc3RhdGUuc2VjdGlvbk9ianMubWFwKChzKSA9PiBzLmN1cnJCWCkpO1xuICBjb25zdCBtYXhZID0gTWF0aC5tYXgoLi4uc3RhdGUuc2VjdGlvbk9ianMubWFwKChzKSA9PiBzLmN1cnJDWSkpO1xuICBjb25zdCBtaW5YID0gTWF0aC5taW4oLi4uc3RhdGUuc2VjdGlvbk9ianMubWFwKChzKSA9PiBzLmN1cnJEWCkpO1xuXG4gIGNvbnN0IG5vdGVkUGFnZXNTb3J0ZWQgPSBzdGF0ZS5wYWdlc1xuICAgIC5maWx0ZXIoKHApID0+IHAuaGFzTm90ZSlcbiAgICAuc29ydCgocCkgPT4gcC5ub3RlLnkpO1xuICBsZXQgbGFzdE5vdGVCb3R0b21ZID0gMDtcbiAgaWYgKG5vdGVkUGFnZXNTb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxhc3ROb3RlID0gbm90ZWRQYWdlc1NvcnRlZFtub3RlZFBhZ2VzU29ydGVkLmxlbmd0aCAtIDFdLm5vdGU7XG4gICAgbGFzdE5vdGVCb3R0b21ZID0gbGFzdE5vdGUueSArIGxhc3ROb3RlLmhlaWdodDtcbiAgfVxuICBpZiAoc3RhdGUuZmxhdHRlbk1hcCkge1xuICAgIHN0YXRlLnN2Z1dpZHRoID0gbWF4WCAtIG1pblggKyBzdGF0ZS5jdWpDYXJkV2lkdGg7XG4gICAgc3RhdGUuc3ZnSGVpZ2h0ID0gbWF4WSArIDUwMDtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5zdmdXaWR0aCA9IG1heFggLSBtaW5YICsgc3RhdGUuY3VqQ2FyZFdpZHRoICsgMzAwO1xuICAgIHN0YXRlLnN2Z0hlaWdodCA9IE1hdGgubWF4KG1heFksIGxhc3ROb3RlQm90dG9tWSkgKyAxMDA7XG4gIH1cblxuICBzdGF0ZS5zdmdEb2Muc3R5bGUoJ2hlaWdodCcsIHN0YXRlLnN2Z0hlaWdodCkuc3R5bGUoJ3dpZHRoJywgc3RhdGUuc3ZnV2lkdGgpO1xuICBzdGF0ZS5jdWpPdmVybGF5XG4gICAgLnN0eWxlKCdoZWlnaHQnLCBzdGF0ZS5zdmdIZWlnaHQpXG4gICAgLnN0eWxlKCd3aWR0aCcsIHN0YXRlLnN2Z1dpZHRoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1hcERpbWVuc2lvbnMoKSB7XG4gIGNvbnN0IG1heFggPSBNYXRoLm1heCguLi5zdGF0ZS5zZWN0aW9uT2Jqcy5tYXAoKHMpID0+IHMuY3VyckJYKSk7XG4gIGNvbnN0IG1heFkgPSBNYXRoLm1heCguLi5zdGF0ZS5zZWN0aW9uT2Jqcy5tYXAoKHMpID0+IHMuY3VyckNZKSk7XG4gIGNvbnN0IG1pblggPSBNYXRoLm1pbiguLi5zdGF0ZS5zZWN0aW9uT2Jqcy5tYXAoKHMpID0+IHMuY3VyckRYKSk7XG4gIGNvbnN0IG1pblkgPSBNYXRoLm1pbiguLi5zdGF0ZS5zZWN0aW9uT2Jqcy5tYXAoKHMpID0+IHMuY3VyckFZKSk7XG4gIGlmIChzdGF0ZS5jdWpNb2RlKSB7XG4gICAgc3RhdGUubWFwV2lkdGggPSBtYXhYIC0gbWluWCArIHN0YXRlLnBhZGRpbmcgKyBzdGF0ZS5jdWpDYXJkV2lkdGg7XG4gICAgc3RhdGUubWFwSGVpZ2h0ID1cbiAgICAgIG1heFkgLSBtaW5ZICsgc3RhdGUucGFkZGluZyArIHN0YXRlLmN1akNhcmRXaWR0aCArIHN0YXRlLnBhZ2VIZWlnaHQ7XG4gIH0gZWxzZSBpZiAoc3RhdGUuZmxhdHRlbk1hcCkge1xuICAgIHN0YXRlLm1hcFdpZHRoID0gbWF4WCAtIG1pblggKyBzdGF0ZS5wYWRkaW5nICsgc3RhdGUuY3VqQ2FyZFdpZHRoO1xuICAgIGNvbnN0IGVuZEluZCA9IHN0YXRlLnJvd3MubGVuZ3RoIC0gMTtcbiAgICBzdGF0ZS5tYXBIZWlnaHQgPVxuICAgICAgc3RhdGUucG9zaXRpb25zW2VuZEluZF0ueSArIHN0YXRlLnBhZ2VIZWlnaHQgKyBzdGF0ZS5jdWpDYXJkV2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubWFwV2lkdGggPSBtYXhYIC0gbWluWDtcbiAgICBzdGF0ZS5tYXBIZWlnaHQgPSBtYXhZIC0gbWluWSArIHN0YXRlLnBhZ2VIZWlnaHQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heERlcHRoKCkge1xuICBjb25zdCBtYXhMZXZlbCA9IE1hdGgubWF4KC4uLnN0YXRlLnJvd3MubWFwKChyKSA9PiByLkxldmVsKSk7XG4gIGNvbnN0IGRlcHRoT2Zmc2V0ID0gKHN0YXRlLnJvd3NbMF0uTGV2ZWwgLSAxKSAqIHN0YXRlLnZlcnRQYWRkaW5nO1xuICBjb25zdCBtYXhEZXB0aCA9IG1heExldmVsICogc3RhdGUudmVydFBhZGRpbmcgKyBkZXB0aE9mZnNldDtcbiAgcmV0dXJuIG1heERlcHRoO1xufVxuIiwiZXhwb3J0IGNvbnN0IHN2Z0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc29NYXAnKTtcbiIsImltcG9ydCB7IHN2Z0NvbnRhaW5lciB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBzdG9wU2Nyb2xsVHJhbnNpdGlvbiB9IGZyb20gJy4vdHJhbnNpdGlvbnMvc2Nyb2xsJztcbmltcG9ydCB7IHN0b3Bab29tVHJhbnNpdGlvbiB9IGZyb20gJy4vdHJhbnNpdGlvbnMvem9vbSc7XG5cbmxldCBzdGFydE1vdXNlWCA9IG51bGw7XG5sZXQgc3RhcnRNb3VzZVkgPSBudWxsO1xubGV0IHN0YXJ0U2Nyb2xsTGVmdCA9IG51bGw7XG5sZXQgc3RhcnRTY3JvbGxUb3AgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkRHJhZ0V2ZW50TGlzdGVuZXJzKCkge1xuICBzdmdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc3RhcnQpO1xuICBzdmdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZHJhZyk7XG4gIHN2Z0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0KGV2ZW50KSB7XG4gIHN0b3BTY3JvbGxUcmFuc2l0aW9uKCk7XG4gIHN0b3Bab29tVHJhbnNpdGlvbigpO1xuICBzdGFydE1vdXNlWCA9IGV2ZW50LmNsaWVudFg7XG4gIHN0YXJ0TW91c2VZID0gZXZlbnQuY2xpZW50WTtcbiAgc3RhcnRTY3JvbGxMZWZ0ID0gc3ZnQ29udGFpbmVyLnNjcm9sbExlZnQ7XG4gIHN0YXJ0U2Nyb2xsVG9wID0gc3ZnQ29udGFpbmVyLnNjcm9sbFRvcDtcbiAgc3RhdGUuaXNEcmFnZ2luZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGRyYWcoZXZlbnQpIHtcbiAgaWYgKCFzdGF0ZS5pc0RyYWdnaW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG1vdXNlWCA9IGV2ZW50LmNsaWVudFg7XG4gIGNvbnN0IG1vdXNlWSA9IGV2ZW50LmNsaWVudFk7XG4gIGNvbnN0IGRyYWdBbW91bnRYID0gc3RhcnRNb3VzZVggLSBtb3VzZVg7XG4gIGNvbnN0IGRyYWdBbW91bnRZID0gc3RhcnRNb3VzZVkgLSBtb3VzZVk7XG4gIHN2Z0NvbnRhaW5lci5zY3JvbGxMZWZ0ID0gc3RhcnRTY3JvbGxMZWZ0ICsgZHJhZ0Ftb3VudFg7XG4gIHN2Z0NvbnRhaW5lci5zY3JvbGxUb3AgPSBzdGFydFNjcm9sbFRvcCArIGRyYWdBbW91bnRZO1xufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuICBzdGF0ZS5pc0RyYWdnaW5nID0gZmFsc2U7XG4gIHN0YXJ0TW91c2VYID0gbnVsbDtcbiAgc3RhcnRNb3VzZVkgPSBudWxsO1xuICBzdGFydFNjcm9sbExlZnQgPSBudWxsO1xuICBzdGFydFNjcm9sbFRvcCA9IG51bGw7XG59XG4iLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZWFzZUluc3RhbnRseShlbGVtZW50KSB7XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGVsZW1lbnQudGFyZ2V0U3BlY3MpKSB7XG4gICAgZWxlbWVudC5zcGVjc1trZXldID0gZWxlbWVudC50YXJnZXRTcGVjc1trZXldO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlYXNlUXVhZHJhdGljYWxseShlbGVtZW50KSB7XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGVsZW1lbnQudGFyZ2V0U3BlY3MpKSB7XG4gICAgZWxlbWVudC5zcGVjc1trZXldICs9XG4gICAgICAoZWxlbWVudC50YXJnZXRTcGVjc1trZXldIC0gZWxlbWVudC5zcGVjc1trZXldKSAqXG4gICAgICBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IGRlZ3JlZXNUb1JhZGlhbnMgfSBmcm9tICcuLi9tYXRoJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5pbXBvcnQgeyB1cGRhdGVTdGF0ZSB9IGZyb20gJy4vcGFnZS9ob3ZlckVsbGlwc2UnO1xuXG4vLyAvIC8vLy8vIENPTk5FQ1RPUiBCQVIgQ1JFQVRJT04gLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIEVhY2ggcGFnZSBpbiB0aGUgdmlzdWFsaXphdGlvbiBoYXMgYSB2ZXJ0aWNhbCBjb25uZWN0b3Jcbi8vIEhvcml6b250YWwgY29ubmVjdG9ycyBhcmUgb25seSBjcmVhdGVkIG9uIGFuIGFzIG5lZWRlZCBiYXNlcy5cbi8vIFR5cGljYWxseSB0aGVyZSBhcmUgbGVzcyBob3Jpem9udGFsIGNvbm5lY3RvcnMgdGhhbiBwYWdlcyBpbiBhIG1hcC5cblxuLy8gQ1JFQVRFIFZFUlRJQ0FMIENPTk5FQ1RJT05TIEJFVFdFRU4gUEFHRVMuXG4vLyBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlIGluaXRpYWwgRDMgU2hhcGUgYW5kIHN0b3JlcyBpdCBpbiBhcnJheSBzbyBpdCBjYW4gYmUgZWRpdGVkIHRocnUgRHJhdyBmdW5jdGlvbnMgYW5kL29yIHVwZGF0ZVZpcygpO1xuZnVuY3Rpb24gY3JlYXRlVmVydENvbm5lY3RvcnMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gRHJhdyB0aGUgbGluZVxuICAgIGNvbnN0IGN1cnJMaW5lID0gc3RhdGUuc3ZnRG9jLmFwcGVuZCgnbGluZScpO1xuICAgIGNvbnN0IGN1cnJPYmogPSB7XG4gICAgICBsaW5lOiBjdXJyTGluZSxcbiAgICAgIHN0YXJ0WDogbnVsbCxcbiAgICAgIHN0YXJ0WTogbnVsbCxcbiAgICAgIGVuZFg6IG51bGwsXG4gICAgICBlbmRZOiBudWxsLFxuICAgIH07XG4gICAgc3RhdGUudmVydENvbm5lY3Rvck9ianMucHVzaChjdXJyT2JqKTtcbiAgfVxufVxuXG4vLyBDUkVBVEUgSE9SSVpPTlRBTCBDT05ORUNUSU9OUyBCRVRXRUVOIFBBR0VTXG4vLyBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlIGluaXRpYWwgRDMgU2hhcGUgYW5kIHN0b3JlcyBpdCBpbiBhbiBhcnJheSBzbyBpdCBjYW4gYmUgZWRpdGVkIHRocnUgdGhlIERyYXcgZnVuY3Rpb25zIGFuZC9vciB1cGRhdGVWaXMoKTtcbmZ1bmN0aW9uIGNyZWF0ZUhvcml6Q29ubmVjdG9ycygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyTGV2ZWwgPSBzdGF0ZS5yb3dzW2ldLkxldmVsO1xuICAgIGNvbnN0IGN1cnJTID0gaSAtIDE7XG5cbiAgICAvLyBGaXJzdCBwYWdlIGluIHZpc3VhbGl6YXRpb24gZG9lcyBub3QgY29udGFpbiBhIGhvcml6b250YWwgY29ubmVjdG9yLlxuICAgIGlmIChpID4gMCkge1xuICAgICAgLy8gRm9yIEhvcml6b250YWwgY29ubmVjdGlvbnMsIHdlIGhhdmUgdG8gZXZhbHVhdGUgdGhlIGN1cnJlbnQgcGFnZSdzIGxldmVsLCB0aGVuIGxvb3AgdGhyb3VnaCB0aGUgcHJldmlvdXNseSBjcmVhdGVkIHBhZ2VzLlxuICAgICAgLy8gQSBIb3Jpem9udGFsIGNvbm5lY3Rpb24gd2lsbCBiZSBkcmF3biB0byB0aGUgZmlyc3QgcHJldmlvdXMgcGFnZSB0aGF0IHNoYXJlcyB0aGUgc2FtZSBsZXZlbCBhcyB0aGUgY3VycmVudCBwYWdlLlxuICAgICAgLy8gVGhpcyBlbmFibGVzIHVzIHRvIHJlbmRlciBhIG11bHRpIGxldmVsIHRyZWUgd2l0aCBtYW55IGJyYW5jaGVzLlxuICAgICAgZm9yIChsZXQgeCA9IGN1cnJTOyB4ID49IDA7IHgtLSkge1xuICAgICAgICAvLyBFdmFsdWF0ZSBpZiBjdXJyZW50IExldmVsIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBwcmV2aW91cyBsZXZlbFxuICAgICAgICAvLyBJZiBpdCdzIGxlc3MsIHRoYW4gd2UgZG9uJ3QgY3JlYXRlIGFueSBuZXcgaG9yaXpvbnRhbCBjb25uZWN0c2lvbi4gVGhpcyBhbGxvd3MgdXMgdG8gbWFpbnRhaW4gdGhlIFwiYnJhbmNoaW5nXCIgdHJlZSBzdHJ1Y3R1cmUuXG4gICAgICAgIGNvbnN0IHByZXZMZXZlbCA9IHN0YXRlLnJvd3NbeF0uTGV2ZWw7XG4gICAgICAgIGlmIChwcmV2TGV2ZWwgPj0gY3VyckxldmVsKSB7XG4gICAgICAgICAgLy8gSWYgZXF1YWwsIGNyZWF0ZSBob3Jpem9udGFsIGNvbm5lY3Rpb24gbGluZS5cbiAgICAgICAgICBpZiAocHJldkxldmVsID09IGN1cnJMZXZlbCB8fCBsb3dlc3RMZXZlbENoZWNrKGksIGN1cnJMZXZlbCkpIHtcbiAgICAgICAgICAgIC8vIERyYXcgdGhlIGxpbmVcbiAgICAgICAgICAgIGNvbnN0IGN1cnJMaW5lID0gc3RhdGUuc3ZnRG9jLmFwcGVuZCgnbGluZScpO1xuICAgICAgICAgICAgY29uc3QgY3Vyck9iaiA9IHtcbiAgICAgICAgICAgICAgbGluZTogY3VyckxpbmUsXG4gICAgICAgICAgICAgIHN0YXJ0WDogbnVsbCxcbiAgICAgICAgICAgICAgc3RhcnRZOiBudWxsLFxuICAgICAgICAgICAgICBlbmRYOiBudWxsLFxuICAgICAgICAgICAgICBlbmRZOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqcy5wdXNoKGN1cnJPYmopO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEbyBOb3RoaW5nIGlmIGN1cnIgbGV2ZWwgaXMgbGVzcyB0aGFuIHByZXYgbGV2ZWwuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVEhJUyBJUyBBIENSVUNJQUwgRlVOQ1RJT04uIE1PU1QgTUVBU1VSRU1FTlRTIEFSRSBCQVNFRCBPTiBUSEUgT1JJR0lOUyBBUlJBWSBUSEFUIElTIFNFVCBVUCBIRVJFLlxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkNvbm5lY3Rvck9yaWdpbnMoaW5pdFJ1bikge1xuICBzdGF0ZS5vcmlnaW5zID0gW107IC8vIFJFU0VUIEFSUkFZIEZPUiBaT09NXG4gIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgc3RhdGUuY3Vyck9yaWdpbnMgPSBbXTtcbiAgfVxuXG4gIC8vIEluIHRoZSBwcmV2aW91cyBmdW5jdGlvbiwgd2UgY3JlYXRlZCBhbiBhcnJheSBvZiBwb3NpdGlvbnMuXG4gIC8vIHBvc2l0aW9uc1tdIHJlZmVyZW5jZSB0aGUgdG9wL2xlZnQgcmVnaXN0cmF0aW9uIHBvaW50J3MgeC95IGNvb3JkaW5hdGVzIGZvciBlYWNoIHBhZ2UuXG4gIC8vIEluIHRoaXMgZnVuY3Rpb24sIHdlIG1hcCBvdXQgcmVmZXJlbmNlIHBvaW50cyByZWxhdGVkIHRvIHRoZSBwYWdlIGljb24uXG4gIC8vIFRoZXNlIHBvaW50cyBmb3JtIHRoZSBiYXNpcyBhbmQgcmVmZXJlbmNlIFgvWSBjb29yZGluYXRlcyBpbiB3aGljaCB0byBiYXNlIGVsZW1lbnRzIGRyYXduIGluIHRoZSBmdXR1cmUsXG4gIC8vIHN1Y2ggYXMsIHNlY3Rpb24gY2FycGV0cywgY29ubmVjdGlvbiBsaW5lcyBhbmQgam9pbnRzLCBwYWdlIHRpdGxlcywgYWRkcmVzc2VzLCBub3RlIGNvbm5lY3RvcnMsIGV0Yy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBERVRFUk1JTkUgWC9ZIE9GIFBBR0UgQk9UVE9NL0NFTlRFUiBSRUZFUkVOQ0UgUE9JTlRcbiAgICBsZXQgaGFsZlBhZ2VXaWR0aDtcbiAgICBsZXQgY3VyckJvdHRvbUNlbnRlclg7XG4gICAgbGV0IGN1cnJCb3R0b21DZW50ZXJZO1xuICAgIGxldCBzZWNSYWRzO1xuICAgIGxldCBjdXJyT3JpZ2luWDtcbiAgICBsZXQgY3Vyck9yaWdpblk7XG4gICAgbGV0IGN1cnJDTGlua1JlZlg7XG4gICAgbGV0IGN1cnJDTGlua1JlZlk7XG4gICAgbGV0IGN1cnJCb3R0b21SaWdodENvcm5lclggPSAwO1xuICAgIGxldCBjdXJyQm90dG9tUmlnaHRDb3JuZXJZID0gMDtcbiAgICBsZXQgY3Vyck1pZGRsZUNlbnRlclg7XG4gICAgbGV0IGN1cnJNaWRkbGVDZW50ZXJZO1xuICAgIGxldCBjdXJyQm90dG9tTGVmdENvcm5lclg7XG4gICAgbGV0IGN1cnJCb3R0b21MZWZ0Q29ybmVyWTtcbiAgICBsZXQgY3VyckNVSlJlZlN0YXJ0Qm90dG9tWDtcbiAgICBsZXQgY3VyckNVSlJlZlN0YXJ0Qm90dG9tWTtcbiAgICBsZXQgbGVmdENlbnRlclg7XG4gICAgbGV0IGxlZnRDZW50ZXJZO1xuICAgIGxldCByaWdodENlbnRlclg7XG4gICAgbGV0IHJpZ2h0Q2VudGVyWTtcblxuICAgIGlmIChzdGF0ZS5mbGF0dGVuTWFwKSB7XG4gICAgICBjb25zdCBoZWFkZXJXaWR0aCA9IHN0YXRlLnBhZ2VIZWlnaHQgLyAxMDtcbiAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlcldpZHRoO1xuXG4gICAgICBoYWxmUGFnZVdpZHRoID0gc3RhdGUucGFnZVdpZHRoIC8gMjtcbiAgICAgIGN1cnJCb3R0b21DZW50ZXJYID0gc3RhdGUucG9zaXRpb25zW2ldLng7XG4gICAgICBjdXJyQm90dG9tQ2VudGVyWSA9IHN0YXRlLnBvc2l0aW9uc1tpXS55ICsgaGVhZGVySGVpZ2h0O1xuXG4gICAgICBjb25zdCBjZW50ZXJYID0gc3RhdGUucG9zaXRpb25zW2ldLnggKyBoZWFkZXJXaWR0aCAvIDI7XG4gICAgICBjb25zdCBjZW50ZXJZID0gc3RhdGUucG9zaXRpb25zW2ldLnkgKyBzdGF0ZS5wYWdlSGVpZ2h0IC8gMTA7XG5cbiAgICAgIGNvbnN0IGNvbm5lY3Rvck9yaWdpblggPSBzdGF0ZS5wb3NpdGlvbnNbaV0ueCAtIHN0YXRlLnBhZ2VXaWR0aCAvIDQ7XG4gICAgICBjb25zdCBjb25uZWN0b3JPcmlnaW5ZID0gY2VudGVyWTtcblxuICAgICAgLy8gREVURVJNSU5FIFgvWSBPRiBPUklHSU4gUE9JTlQgV0hFUkUgSUEgQ09OTkVDVE9SIExJTkVTIElOVEVSU0VDVFxuICAgICAgY3Vyck9yaWdpblggPSBjb25uZWN0b3JPcmlnaW5YOyAvLyBTdWJ0cmFjdCBYIERpZmYgb2ZmIEN1cnIgWCB0byBnZXQgQW5nbGVcbiAgICAgIGN1cnJPcmlnaW5ZID0gY29ubmVjdG9yT3JpZ2luWTsgLy8gQWRkIEFkaiBTaWRlIFZhbHVlIHRvIEN1cnIgWSBmb3IgRW5kXG5cbiAgICAgIC8vIERFVEVSTUlORSBMT1dFUiBSSUdIVCBDT1JORVIgT0YgUEFHRVxuICAgICAgY3VyckJvdHRvbVJpZ2h0Q29ybmVyWCA9XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uc1tpXS54ICsgaGVhZGVyV2lkdGggKyBzdGF0ZS5wYWdlV2lkdGggKiAzOyAvLyBOZWVkIHRvIGZhY3RvciBpbiBsYWJlbCB3aWR0aCBmb3IgdGhpc1xuICAgICAgY3VyckJvdHRvbVJpZ2h0Q29ybmVyWSA9IHN0YXRlLnBvc2l0aW9uc1tpXS55ICsgaGVhZGVySGVpZ2h0ICogMjtcblxuICAgICAgLy8gREVURVJNSU5FIENST1NTTElOSyBSRUYgUE9JTlQgLS1OT1RFIFRISVMgSVMgTk9UIE5FRURFRCBGT1IgRkxBVCBWSUVXXG4gICAgICBjdXJyQ0xpbmtSZWZYID0gc3RhdGUucG9zaXRpb25zW2ldLnggKyAoaGVhZGVyV2lkdGggLyA0KSAqIDM7XG4gICAgICBjdXJyQ0xpbmtSZWZZID0gc3RhdGUucG9zaXRpb25zW2ldLnkgKyBoZWFkZXJIZWlnaHQ7XG5cbiAgICAgIC8vIERFVEVSTUlORSBMT1dFUiBMRUZUIENPUk5FUiBPRiBQQUdFXG4gICAgICBjdXJyQm90dG9tTGVmdENvcm5lclggPSBzdGF0ZS5wb3NpdGlvbnNbaV0ueDtcbiAgICAgIGN1cnJCb3R0b21MZWZ0Q29ybmVyWSA9IHN0YXRlLnBvc2l0aW9uc1tpXS55ICsgaGVhZGVySGVpZ2h0O1xuXG4gICAgICAvLyBERVRFUk1JTkUgQ1VKIENPTk5FQ1RPUiBQT0lOVFNcbiAgICAgIGN1cnJNaWRkbGVDZW50ZXJYID0gY2VudGVyWDsgLy8gY29zIHRoZWEgPSBhZGovaHlwXG4gICAgICBjdXJyTWlkZGxlQ2VudGVyWSA9IGNlbnRlclk7XG5cbiAgICAgIGN1cnJDVUpSZWZTdGFydEJvdHRvbVggPSBjZW50ZXJYICsgc3RhdGUudmVydFBhZGRpbmcgLyAyOyAvLyBTdWJ0cmFjdCBYIERpZmYgb2ZmIEN1cnIgWCB0byBnZXQgQW5nbGVcbiAgICAgIGN1cnJDVUpSZWZTdGFydEJvdHRvbVkgPSBjZW50ZXJZOyAvLyBBZGQgQWRqIFNpZGUgVmFsdWUgdG8gQ3VyciBZIGZvciBFbmRcblxuICAgICAgbGVmdENlbnRlclggPSBjZW50ZXJYIC0gaGVhZGVyV2lkdGggLyAyO1xuICAgICAgbGVmdENlbnRlclkgPSBjZW50ZXJZO1xuXG4gICAgICByaWdodENlbnRlclggPSBjZW50ZXJYICsgaGVhZGVyV2lkdGggLyAyICsgc3RhdGUucGFnZVdpZHRoICogMzsgLy8gTmVlZCB0byBmYWN0b3IgaW4gbGFiZWwgd2lkdGg7XG4gICAgICByaWdodENlbnRlclkgPSBjZW50ZXJZO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYWxmUGFnZVdpZHRoID1cbiAgICAgICAgKHN0YXRlLnBhZ2VXaWR0aCAqXG4gICAgICAgICAgTWF0aC5jb3MoZGVncmVlc1RvUmFkaWFucyhzdGF0ZS5wcmltYXJ5QW5nbGVEZWdyZWVzKSkpIC9cbiAgICAgICAgMjtcbiAgICAgIGN1cnJCb3R0b21DZW50ZXJYID0gc3RhdGUucG9zaXRpb25zW2ldLnggKyBoYWxmUGFnZVdpZHRoO1xuICAgICAgY3VyckJvdHRvbUNlbnRlclkgPSBzdGF0ZS5wb3NpdGlvbnNbaV0ueSArIHN0YXRlLnBhZ2VIZWlnaHQ7XG5cbiAgICAgIC8vIERFVEVSTUlORSBYL1kgT0YgT1JJR0lOIFBPSU5UIFdIRVJFIElBIENPTk5FQ1RPUiBMSU5FUyBJTlRFUlNFQ1RcbiAgICAgIHNlY1JhZHMgPSBkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnNlY29uZGFyeUFuZ2xlRGVncmVlcyk7IC8vIFJhZGlhbnMgQ29udmVyc2lvbiBmb3IgU2Vjb25kYXJ5IEFuZ2xlIFZhbHVlXG4gICAgICBjdXJyT3JpZ2luWCA9XG4gICAgICAgIGN1cnJCb3R0b21DZW50ZXJYIC0gKE1hdGgudGFuKHNlY1JhZHMpICogc3RhdGUucGFnZUhlaWdodCkgLyA1OyAvLyBTdWJ0cmFjdCBYIERpZmYgb2ZmIEN1cnIgWCB0byBnZXQgQW5nbGVcbiAgICAgIGN1cnJPcmlnaW5ZID0gY3VyckJvdHRvbUNlbnRlclkgKyBzdGF0ZS5wYWdlSGVpZ2h0IC8gNTsgLy8gQWRkIEFkaiBTaWRlIFZhbHVlIHRvIEN1cnIgWSBmb3IgRW5kXG5cbiAgICAgIC8vIERFVEVSTUlORSBMT1dFUiBSSUdIVCBDT1JORVIgT0YgUEFHRVxuICAgICAgY3VyckJvdHRvbVJpZ2h0Q29ybmVyWCA9IGN1cnJCb3R0b21DZW50ZXJYICsgaGFsZlBhZ2VXaWR0aDtcbiAgICAgIGN1cnJCb3R0b21SaWdodENvcm5lclkgPVxuICAgICAgICBjdXJyQm90dG9tQ2VudGVyWSArXG4gICAgICAgIGhhbGZQYWdlV2lkdGggKiBNYXRoLnNpbihkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpKTtcblxuICAgICAgLy8gREVURVJNSU5FIENST1NTTElOSyBSRUYgUE9JTlRcbiAgICAgIGN1cnJDTGlua1JlZlggPSBjdXJyQm90dG9tQ2VudGVyWCArIGhhbGZQYWdlV2lkdGggLyAyO1xuICAgICAgY3VyckNMaW5rUmVmWSA9XG4gICAgICAgIGN1cnJCb3R0b21DZW50ZXJZICtcbiAgICAgICAgKGhhbGZQYWdlV2lkdGggLyAyKSAqXG4gICAgICAgICAgTWF0aC5zaW4oZGVncmVlc1RvUmFkaWFucyhzdGF0ZS5wcmltYXJ5QW5nbGVEZWdyZWVzKSk7XG5cbiAgICAgIC8vIERFVEVSTUlORSBMT1dFUiBMRUZUIENPUk5FUiBPRiBQQUdFXG4gICAgICBjdXJyQm90dG9tTGVmdENvcm5lclggPSBjdXJyQm90dG9tQ2VudGVyWCAtIGhhbGZQYWdlV2lkdGg7XG4gICAgICBjdXJyQm90dG9tTGVmdENvcm5lclkgPVxuICAgICAgICBjdXJyQm90dG9tQ2VudGVyWSAtXG4gICAgICAgIGhhbGZQYWdlV2lkdGggKiBNYXRoLnNpbihkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpKTtcblxuICAgICAgLy8gREVURVJNSU5FIENVSiBDT05ORUNUT1IgUE9JTlRTXG4gICAgICBjdXJyTWlkZGxlQ2VudGVyWCA9IGN1cnJCb3R0b21DZW50ZXJYOyAvLyBjb3MgdGhlYSA9IGFkai9oeXBcbiAgICAgIGN1cnJNaWRkbGVDZW50ZXJZID0gY3VyckJvdHRvbUNlbnRlclkgLSBzdGF0ZS5wYWdlSGVpZ2h0IC8gMjtcblxuICAgICAgY3VyckNVSlJlZlN0YXJ0Qm90dG9tWCA9XG4gICAgICAgIGN1cnJNaWRkbGVDZW50ZXJYIC0gTWF0aC50YW4oc2VjUmFkcykgKiAoc3RhdGUucGFnZUhlaWdodCAvIDUpOyAvLyBTdWJ0cmFjdCBYIERpZmYgb2ZmIEN1cnIgWCB0byBnZXQgQW5nbGVcbiAgICAgIGN1cnJDVUpSZWZTdGFydEJvdHRvbVkgPSBjdXJyTWlkZGxlQ2VudGVyWSArIHN0YXRlLnBhZ2VIZWlnaHQgLyA1OyAvLyBBZGQgQWRqIFNpZGUgVmFsdWUgdG8gQ3VyciBZIGZvciBFbmRcblxuICAgICAgbGVmdENlbnRlclggPSBjdXJyTWlkZGxlQ2VudGVyWCAtIChoYWxmUGFnZVdpZHRoICsgc3RhdGUudGV4dFBhZGRpbmcgKiAyKTtcbiAgICAgIGxlZnRDZW50ZXJZID1cbiAgICAgICAgY3Vyck1pZGRsZUNlbnRlclkgLVxuICAgICAgICBNYXRoLnRhbihkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpKSAqXG4gICAgICAgICAgKGhhbGZQYWdlV2lkdGggKyBzdGF0ZS50ZXh0UGFkZGluZyAqIDIpO1xuXG4gICAgICByaWdodENlbnRlclggPVxuICAgICAgICBjdXJyTWlkZGxlQ2VudGVyWCArIChoYWxmUGFnZVdpZHRoICsgc3RhdGUudGV4dFBhZGRpbmcgKiAyKTtcbiAgICAgIHJpZ2h0Q2VudGVyWSA9XG4gICAgICAgIGN1cnJNaWRkbGVDZW50ZXJZICtcbiAgICAgICAgTWF0aC50YW4oZGVncmVlc1RvUmFkaWFucyhzdGF0ZS5wcmltYXJ5QW5nbGVEZWdyZWVzKSkgKlxuICAgICAgICAgIChoYWxmUGFnZVdpZHRoICsgc3RhdGUudGV4dFBhZGRpbmcgKiAyKTtcbiAgICB9XG5cbiAgICAvLyBTRVQgVVAgUkVGRVJFTkNFIFBUIE9CSlxuICAgIC8vIFNlZSBza2V0Y2hlcy9vcmlnaW5fb2JqZWN0X3BvaW50cy5wbmdcbiAgICAvLyBRVUVTVElPTiAtIHdoYXQgaXMgcGJjZW50ZXI/IHByZXZpb3VzIGJvdHRvbSBjZW50ZXI/IExldCdzIHdhbGsgdGhyb3VnaCB0aGlzIG9ialxuICAgIGNvbnN0IG9yaWdpbk9iaiA9IHtcbiAgICAgIGNvbm5lY3Rvck9yaWdpblg6IGN1cnJPcmlnaW5YLFxuICAgICAgY29ubmVjdG9yT3JpZ2luWTogY3Vyck9yaWdpblksXG4gICAgICBwQkNlbnRlclg6IGN1cnJCb3R0b21DZW50ZXJYLFxuICAgICAgcEJDZW50ZXJZOiBjdXJyQm90dG9tQ2VudGVyWSxcbiAgICAgIHJCQ29ybmVyWDogY3VyckJvdHRvbVJpZ2h0Q29ybmVyWCxcbiAgICAgIHJCQ29ybmVyWTogY3VyckJvdHRvbVJpZ2h0Q29ybmVyWSxcbiAgICAgIGxCQ29ybmVyWDogY3VyckJvdHRvbUxlZnRDb3JuZXJYLFxuICAgICAgbEJDb3JuZXJZOiBjdXJyQm90dG9tTGVmdENvcm5lclksXG4gICAgICBjTGlua1JlZlg6IGN1cnJDTGlua1JlZlgsXG4gICAgICBjTGlua1JlZlk6IGN1cnJDTGlua1JlZlksXG4gICAgICBjdWpTdGFydEJvdHRvbVg6IGN1cnJDVUpSZWZTdGFydEJvdHRvbVgsXG4gICAgICBjdWpTdGFydEJvdHRvbVk6IGN1cnJDVUpSZWZTdGFydEJvdHRvbVksXG4gICAgICBjZW50ZXJYOiBjdXJyTWlkZGxlQ2VudGVyWCxcbiAgICAgIGNlbnRlclk6IGN1cnJNaWRkbGVDZW50ZXJZLFxuICAgICAgbGVmdENlbnRlclg6IGxlZnRDZW50ZXJYLFxuICAgICAgbGVmdENlbnRlclk6IGxlZnRDZW50ZXJZLFxuICAgICAgcmlnaHRDZW50ZXJYOiByaWdodENlbnRlclgsXG4gICAgICByaWdodENlbnRlclk6IHJpZ2h0Q2VudGVyWSxcbiAgICB9O1xuXG4gICAgLy8gREVTVElOQVRJT04gT1JJR0lOIEFSUkFZXG4gICAgc3RhdGUub3JpZ2lucy5wdXNoKG9yaWdpbk9iaik7XG5cbiAgICAvLyBIT0xESU5HIEFSUkFZIEZPUiBBTEwgQ1VSUiBPUklHSU4gREFUQSBCRUZPUkUgVFJBTlNJVElPTi5cbiAgICBpZiAoIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgICAgc3RhdGUuY3Vyck9yaWdpbnMucHVzaChvcmlnaW5PYmopO1xuICAgIH1cbiAgfVxuXG4gIC8vIFFVRVNUSU9OIC0gd2h5IGRvIHdlbmVlZCB0byBoYXZlIHR3byBzZXAuIGZ1bmN0aW9ucz9cblxuICAvLyBDT05TSURFUiBGSVhJTkc6IEluIGFkZGl0aW9uIHRvIHRoZSByZWZlcmVuY2UgcG9pbnRzIGFib3ZlLCB0d28gYWRkaXRpb25hbCBwb2ludHMgYXJlIHN0b3JlZCB0aGF0IGZhbGwgYWNyb3NzIHRoZSBjZW50ZXIgYXhpcyBmb3IgZWFjaCBwYWdlLlxuICAvLyBUaGlzIHBvaW50cyBwcm92aWRlIGEgcmVmZXJlbmNlIGZvciBhbGlnbmluZyB0aGUgY29ybmVycyBvZiBlYWNoIHNlY3Rpb24gXCJjYXJwZXRcIiBvbiB0aGUgdmlzdWFsaXphdGlvbi5cblxuICAvLyBDYWxsIHRvIGZ1bmN0aW9uIHRvIGJ1aWxkIGFycmF5IG9mIHJlZmVyZW5jZSBwb2ludHMgdG8gdGhlIFJpZ2h0IG9mIGVhY2ggcGFnZS5cbiAgYXNzaWduUmVmZXJlbmNlUG9pbnRSKCk7XG5cbiAgLy8gQ2FsbCB0byBmdW5jdGlvbiB0byBidWlsZCBhcnJheSBvZiByZWZlcmVuY2UgcG9pbnRzIHRvIHRoZSBMZWZ0IG9mIGVhY2ggcGFnZS5cbiAgYXNzaWduUmVmZXJlbmNlUG9pbnRMKCk7XG5cbiAgLy8gRFJBVyBDT05ORUNUT1JTXG4gIGlmIChpbml0UnVuKSB7XG4gICAgLy8gV2hlbiB0aGUgdmlzdWFsaXphdGlvbiBpcyBmaXJzdCBydW4sIHRoZSBjcmVhdGUgZnVuY3Rpb25zIGFyZSBjYWxsZWQuXG4gICAgLy8gU2luY2UgdGhpcyBmdW5jdGlvbiBpcyBhbHNvIGNhbGxlZCBmcm9tIHVwZGF0ZVZpcygpLCB3ZSBoYXZlIHRvIG1ha2Ugc3VyZSB3ZSBhcmVuJ3QgcmVjcmVhdGluZyB0aGVzZSB2YXJzLlxuICAgIC8vIENvbnNpZGVyIGZpeGluZzogVGhpcyBjb3VsZCBiZSBjbGVhbmVkIHVwIGEgYml0LlxuICAgIGNyZWF0ZVZlcnRDb25uZWN0b3JzKCk7XG4gICAgY3JlYXRlSG9yaXpDb25uZWN0b3JzKCk7XG4gIH1cblxuICAvLyBRVUVTVElPTiAtIHdoeSBkbyB3ZSBhbHdheXMgd2FudCB0byByZWNhbGMgY29ubmVjdG9ycz9cbiAgLy8gT25jZSBjb25uZWN0b3JzIGFyZSBjcmVhdGVkLCBkcmF3IHRoZW0uXG4gIC8vIElmIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZCBmcm9tIHVwZGF0ZVZpcygpLCB0aGVuIGFsd2F5cyByZWRyYXcgYmFzZWQgb24gbmV3IGNhbGN1bGF0aW9ucyBhbmQgcG9zaXRpb25pbmcgb2YgZWxlbWVudHMuXG4gIGlmICghc3RhdGUuZmxhdHRlbk1hcCkge1xuICAgIGRyYXdWZXJ0Q29ubmVjdG9ycygpO1xuICAgIGRyYXdIb3JpekNvbm5lY3RvcnMoKTtcbiAgfVxufVxuXG4vLyBCdWlsZCBhcnJheSBvZiByZWZlcmVuY2UgcG9pbnRzIHRvIHRoZSBSSUdIVCBvZiBlYWNoIHBhZ2UuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduUmVmZXJlbmNlUG9pbnRSKCkge1xuICAvLyBGaW5kIGVhY2ggcGFnZSdzIHJpZ2h0IGJvdHRvbSBjb3JuZXJzJyBYICYgWSBjb29yZGluYXRlcywgdGhlbiBjYWxjdWxhdGUgcmVmZXJlbmNlIHBvaW50IGZvciBwb3NzaWJsZSBzZWN0aW9uIGNhcnBldCBlZGdlLlxuICAvLyBDb25zaWRlciBGaXhpbmc6IEZvciBlYXNlIG9mIHJlYWRpbmcgdGhlIGNvZGUsIGNvbnNpZGVyIGxvb3BpbmcgdGhydSBvcmlnaW5zIGFycmF5IGluc3RlYWQgb2YgcG9zaXRpb25zIGFycmF5LlxuICAvLyBUaGV5J2xsIGFsd2F5cyBiZSB0aGUgc2FtZSBsZW5ndGguXG4gIC8vIFFVRVNUSU9OIC0gd2hhdCB3aWxsIGFsd2F5cyBiZSB0aGUgc2FtZSBsZW5ndGg/IFdoYXQgYXJlIHlvdSBkb2luZyBoZXJlP1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIC8vIERlZmluZSBsb2NhbCB2YXJzIGZvciBrbm93biBjb29yZGluYXRlc1xuICAgIGNvbnN0IGN1cnJSZWZYU3RhcnQgPSBzdGF0ZS5vcmlnaW5zW2ldLnJCQ29ybmVyWDsgLy8gUmlnaHQgQm90dG9tIENvcm5lciBYXG4gICAgY29uc3QgY3VyclJlZllTdGFydCA9IHN0YXRlLm9yaWdpbnNbaV0uckJDb3JuZXJZOyAvLyBSaWdodCBCb3R0b20gQ29ybmVyIFlcbiAgICBjb25zdCBjdXJyUmVmQUxlbmd0aCA9IHN0YXRlLnNlY3Rpb25QYWRkaW5nOyAvLyBTaWRlIEEgb2YgdGhlIFJpZ2h0IFRyaWFuZ2xlIGZvciBDYWxjdWxhdGlvblxuXG4gICAgLy8gUnVuIGNhbGN1bGF0aW9uc1xuICAgIGNvbnN0IHRhbllSZWZSYWQgPSBkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpOyAvLyAyMMKwIFJpZ2h0IFRyaWFuZ2xlXG4gICAgY29uc3QgY3VyclJlZlhFbmQgPSBjdXJyUmVmWFN0YXJ0ICsgY3VyclJlZkFMZW5ndGg7IC8vIE5ldyBSZWZlcmVuY2UgUG9pbnQgWFxuICAgIGNvbnN0IGN1cnJSZWZZRW5kID0gY3VyclJlZllTdGFydCArIE1hdGgudGFuKHRhbllSZWZSYWQpICogY3VyclJlZkFMZW5ndGg7IC8vIE5ldyBSZWZlcmVuY2UgUG9pbnQgWVxuXG4gICAgLy8gU3RvcmUgdmFsdWVzIGluIGFycmF5IGZvciBsYXRlciB1c2VcbiAgICBjb25zdCByZWZST2JqID0geyB4OiBjdXJyUmVmWEVuZCwgeTogY3VyclJlZllFbmQgfTsgLy8gU3RvcmVzIFJlZmVyZW5jZSBQb2ludCBYL1lcbiAgICBzdGF0ZS5yZWZlcmVuY2VQb2ludHNSaWdodFtpXSA9IHJlZlJPYmo7XG4gIH1cbn1cblxuLy8gQnVpbGQgYXJyYXkgb2YgcmVmZXJlbmNlIHBvaW50cyB0byB0aGUgTEVGVCBvZiBlYWNoIHBhZ2UuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduUmVmZXJlbmNlUG9pbnRMKCkge1xuICAvLyBGaW5kIGVhY2ggcGFnZSdzIGxlZnQgYm90dG9tIGNvcm5lcnMnIFggJiBZIGNvb3JkaW5hdGVzLCB0aGVuIGNhbGN1bGF0ZSByZWZlcmVuY2UgcG9pbnQgZm9yIHBvc3NpYmxlIHNlY3Rpb24gY2FycGV0IGVkZ2UuXG4gIC8vIENvbnNpZGVyIEZpeGluZzogRm9yIGVhc2Ugb2YgcmVhZGluZyB0aGUgY29kZSwgY29uc2lkZXIgbG9vcGluZyB0aHJ1IG9yaWdpbnMgYXJyYXkgaW5zdGVhZCBvZiBwb3Npc2lvbnMgYXJyYXkuXG4gIC8vIFRoZXknbGwgYWx3YXlzIGJlIHRoZSBzYW1lIGxlbmd0aC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBEZWZpbmUgbG9jYWwgdmFycyBmb3Iga25vd24gY29vcmRpbmF0ZXNcbiAgICBjb25zdCBjdXJyUmVmWFN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5sQkNvcm5lclg7IC8vIExlZnQgQm90dG9tIENvcm5lciBYXG4gICAgY29uc3QgY3VyclJlZllTdGFydCA9IHN0YXRlLm9yaWdpbnNbaV0ubEJDb3JuZXJZOyAvLyBMZWZ0IEJvdHRvbSBDb3JuZXIgWVxuICAgIGNvbnN0IGN1cnJSZWZBTGVuZ3RoID0gc3RhdGUuc2VjdGlvblBhZGRpbmc7IC8vIFNpZGUgQSBvZiBSaWdodCBUcmlhbmdsZSBmb3IgQ2FsY3VsYXRpb25cblxuICAgIC8vIFJ1biBjYWxjdWxhdGlvbnNcbiAgICBjb25zdCB0YW5ZUmVmUmFkID0gZGVncmVlc1RvUmFkaWFucyhzdGF0ZS5wcmltYXJ5QW5nbGVEZWdyZWVzKTsgLy8gMjDCsCBSaWdodCBUcmlhbmdsZVxuICAgIGNvbnN0IGN1cnJSZWZYRW5kID0gY3VyclJlZlhTdGFydCAtIGN1cnJSZWZBTGVuZ3RoOyAvLyBOZXcgUmVmZXJlbmNlIFBvaW50IFhcbiAgICBjb25zdCBjdXJyUmVmWUVuZCA9IGN1cnJSZWZZU3RhcnQgLSBNYXRoLnRhbih0YW5ZUmVmUmFkKSAqIGN1cnJSZWZBTGVuZ3RoOyAvLyBOZXcgUmVmZXJlbmNlIFBvaW50IFlcblxuICAgIC8vIFN0b3JlIHZhbHVlcyBpbiBhcnJheSBmb3IgbGF0ZXIgdXNlXG4gICAgY29uc3QgcmVmTE9iaiA9IHsgeDogY3VyclJlZlhFbmQsIHk6IGN1cnJSZWZZRW5kIH07IC8vIFN0b3JlcyBSZWZlcmVuY2UgUG9pbnQgWC9ZXG4gICAgc3RhdGUucmVmZXJlbmNlUG9pbnRzTGVmdFtpXSA9IHJlZkxPYmo7XG4gIH1cbn1cblxuLy8gLyAvLy8vLyBDT05ORUNUT1IgTElORSBEUkFXSU5HIC8vLy8vLy8vLy8vL1xuXG4vLyBIb3Jpem9udGFsIENvbm5lY3RvcnMgQmV0d2VlbiBTaWJsaW5nIHBhZ2VzXG5leHBvcnQgZnVuY3Rpb24gZHJhd0hvcml6Q29ubmVjdG9ycygpIHtcbiAgLy8gVXBkYXRlIHRoZSBzdHJva2Ugd2lkdGggYmFzZWQgb24gem9vbSBsZXZlbCB0byBnaXZlIGlsbHVzaW9uIG9mIHBlcnNwZWN0aXZlLlxuICBjb25zdCBzVyA9IHN0YXRlLnRhcmdldFpvb21MZXZlbCAqIDI7XG4gIGxldCBjb3VudGVyID0gMDtcblxuICAvLyBMb29wIHRocnUgcG9zaXRpb25zIGFycmF5LlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJMZXZlbCA9IHN0YXRlLnJvd3NbaV0uTGV2ZWw7XG4gICAgY29uc3QgY3VyclMgPSBpIC0gMTtcblxuICAgIC8vIEhvcml6b250YWwgY29ubmVjdGlvbnMgZG8gbm90IGV4aXN0IG9uIHRoZSBmaXJzdCBwYWdlIGluc3RhbmNlLlxuICAgIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IHdlJ3JlIGxvb2tpbmcgYXQgdGhlIGZpcnN0IHBhZ2UgaW4gdGhlIGxpc3QuXG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICAvLyBGb3IgSG9yaXpvbnRhbCBjb25uZWN0aW9ucywgd2UgaGF2ZSB0byBldmFsdWF0ZSB0aGUgY3VycmVudCBwYWdlJ3MgbGV2ZWwsIHRoZW4gbG9vcCB0aHJvdWdoIHRoZSBwcmV2aW91c2x5IGNyZWF0ZWQgcGFnZXMuXG4gICAgICAvLyBBIEhvcml6b250YWwgY29ubmVjdGlvbiBpcyBkcmF3biB0byB0aGUgZmlyc3QgcHJldmlvdXMgcGFnZSB0aGF0IHNoYXJlcyB0aGUgc2FtZSBsZXZlbCBhcyB0aGUgY3VycmVudCBwYWdlLlxuICAgICAgLy8gVGhpcyBlbmFibGVzIHVzIHRvIHJlbmRlciBhIG11bHRpIGxldmVsIHRyZWUgd2l0aCBtYW55IGJyYW5jaGVzLlxuICAgICAgZm9yIChsZXQgeCA9IGN1cnJTOyB4ID49IDA7IHgtLSkge1xuICAgICAgICAvLyBFdmFsdWF0ZSBpZiBjdXJyZW50IExldmVsIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBwcmV2aW91cyBsZXZlbFxuICAgICAgICAvLyBJZiBpdCdzIGxlc3MsIHRoYW4gd2UgZG9uJ3QgY3JlYXRlIGFueSBuZXcgaG9yaXpvbnRhbCBjb25uZWN0aW9uLiBUaGlzIGFsbG93cyB1cyB0byBtYWludGFpbiB0aGUgXCJicmFuY2hpbmdcIiB0cmVlIHN0cnVjdHVyZS5cbiAgICAgICAgY29uc3QgcHJldkxldmVsID0gc3RhdGUucm93c1t4XS5MZXZlbDtcbiAgICAgICAgaWYgKHByZXZMZXZlbCA+PSBjdXJyTGV2ZWwpIHtcbiAgICAgICAgICBsZXQgZW5kWFN0YXJ0O1xuICAgICAgICAgIGxldCBlbmRZU3RhcnQ7XG4gICAgICAgICAgbGV0IGVuZFhFbmQgPSBzdGF0ZS5vcmlnaW5zW3hdLmNvbm5lY3Rvck9yaWdpblg7XG4gICAgICAgICAgbGV0IGVuZFlFbmQgPSBzdGF0ZS5vcmlnaW5zW3hdLmNvbm5lY3Rvck9yaWdpblk7XG5cbiAgICAgICAgICAvLyBJZiBEaWFncmFtIFN0YXJ0cyBhdCBhIGhpZ2hlciBsZXZlbCBhbmQgd29ya3MgZG93bndhcmRzLiAoZS5nLiByb3dzWzBdLkxldmVsID0gMiwgcm93c1sxXS5MZXZlbD0xKVxuICAgICAgICAgIGlmIChwcmV2TGV2ZWwgPiBjdXJyTGV2ZWwgJiYgbG93ZXN0TGV2ZWxDaGVjayhpLCBjdXJyTGV2ZWwpKSB7XG4gICAgICAgICAgICBlbmRYRW5kID0gc3RhdGUub3JpZ2luc1t4XS5jb25uZWN0b3JPcmlnaW5YO1xuICAgICAgICAgICAgZW5kWUVuZCA9IHN0YXRlLm9yaWdpbnNbeF0uY29ubmVjdG9yT3JpZ2luWTtcblxuICAgICAgICAgICAgbGV0IGN1cnJUcmFuc3BhcmVuY3kgPSAxO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUucm93c1tpXS5FbnRpdHkgPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDAuNzU7XG4gICAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5saW5lLnN0eWxlKFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JyxcbiAgICAgICAgICAgICAgICAnMywgMydcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGV2ZWxEaWZmID0gcHJldkxldmVsIC0gY3VyckxldmVsO1xuICAgICAgICAgICAgY29uc3QgeE9mZnNldCA9XG4gICAgICAgICAgICAgIE1hdGgudGFuKGRlZ3JlZXNUb1JhZGlhbnMoc3RhdGUuc2Vjb25kYXJ5QW5nbGVEZWdyZWVzKSkgKlxuICAgICAgICAgICAgICAoc3RhdGUudmVydFBhZGRpbmcgKiBsZXZlbERpZmYpO1xuICAgICAgICAgICAgZW5kWFN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5jb25uZWN0b3JPcmlnaW5YICsgeE9mZnNldDtcblxuICAgICAgICAgICAgZW5kWVN0YXJ0ID1cbiAgICAgICAgICAgICAgc3RhdGUub3JpZ2luc1tpXS5jb25uZWN0b3JPcmlnaW5ZIC1cbiAgICAgICAgICAgICAgeE9mZnNldCAvIE1hdGgudGFuKGRlZ3JlZXNUb1JhZGlhbnMoc3RhdGUuc2Vjb25kYXJ5QW5nbGVEZWdyZWVzKSk7XG5cbiAgICAgICAgICAgIGxldCBjdXJyVmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgICAgICAgICAgbGV0IHNob3dDb25uZWN0aW9uID0gJ3llcyc7XG4gICAgICAgICAgICBzdGF0ZS5yb3dzW2ldLlNob3dIaWVyYXJjaHlcbiAgICAgICAgICAgICAgPyAoc2hvd0Nvbm5lY3Rpb24gPSBzdGF0ZS5yb3dzW2ldLlNob3dIaWVyYXJjaHkpXG4gICAgICAgICAgICAgIDogKHNob3dDb25uZWN0aW9uID0gc3RhdGUucm93c1tpXS5Db25uZWN0aW9uKTtcblxuICAgICAgICAgICAgaWYgKHNob3dDb25uZWN0aW9uID09ICdubycpIHtcbiAgICAgICAgICAgICAgY3VyclZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5saW5lXG4gICAgICAgICAgICAgIC5hdHRyKCd4MScsIGVuZFhTdGFydClcbiAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgZW5kWVN0YXJ0KVxuICAgICAgICAgICAgICAuYXR0cigneDInLCBlbmRYRW5kKVxuICAgICAgICAgICAgICAuYXR0cigneTInLCBlbmRZRW5kKVxuICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHNXKVxuICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBjdXJyVHJhbnNwYXJlbmN5KVxuICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCBjdXJyVmlzaWJpbGl0eSk7XG5cbiAgICAgICAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJldkxldmVsID09IGN1cnJMZXZlbCkge1xuICAgICAgICAgICAgLy8gTGluZSBzaG91bGQgYmVnaW4gYW5kIGVuZCBhdCBzdGFydCBwYWdlJ3MgY29ubmVjdG9yIG9yaWdpbiBhbmQgZW5kIHBhZ2UncyBjb25uZWN0b3Igb3JpZ2luXG4gICAgICAgICAgICAvLyBTZWUgc2tldGNoZXMvb3JpZ2luX29iamVjdF9wb2ludHMucG5nXG4gICAgICAgICAgICBlbmRYU3RhcnQgPSBzdGF0ZS5vcmlnaW5zW2ldLmNvbm5lY3Rvck9yaWdpblg7XG4gICAgICAgICAgICBlbmRZU3RhcnQgPSBzdGF0ZS5vcmlnaW5zW2ldLmNvbm5lY3Rvck9yaWdpblk7XG4gICAgICAgICAgICBlbmRYRW5kID0gc3RhdGUub3JpZ2luc1t4XS5jb25uZWN0b3JPcmlnaW5YO1xuICAgICAgICAgICAgZW5kWUVuZCA9IHN0YXRlLm9yaWdpbnNbeF0uY29ubmVjdG9yT3JpZ2luWTtcblxuICAgICAgICAgICAgLy8gUmVwb3NpdGlvbiBhbmQgcmVzaXplIHRoZSBsaW5lLlxuICAgICAgICAgICAgbGV0IGN1cnJBbHBoYSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc3RhdGUucm93c1tpXS5Db25uZWN0aW9uID09ICdubycgfHxcbiAgICAgICAgICAgICAgc3RhdGUucm93c1tpXS5TaG93SGllcmFyY2h5LnRvTG93ZXJDYXNlKCkgPT0gJ25vJyB8fFxuICAgICAgICAgICAgICBzdGF0ZS50cmFuc2l0aW9uaW5nVmlld1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN1cnJBbHBoYSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhdGUudmVydENvbm5lY3Rvck9ianNbeF0ubGluZVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGN1cnJUcmFuc3BhcmVuY3kgPSAxO1xuICAgICAgICAgICAgaWYgKHN0YXRlLnJvd3NbaV0uRW50aXR5ID09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgICAgIGN1cnJUcmFuc3BhcmVuY3kgPSAwLjc1O1xuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0ubGluZS5zdHlsZShcbiAgICAgICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheScsXG4gICAgICAgICAgICAgICAgJzMsIDMnXG4gICAgICAgICAgICAgICk7IC8vIDw9PSBUaGlzIGxpbmUgaGVyZSEhXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZS50YXJnZXRab29tTGV2ZWwgPCAwLjMpIHtcbiAgICAgICAgICAgICAgY3VyckFscGhhID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MgJiYgc3RhdGUucm93c1tpXS5TaG93SGllcmFyY2h5KSB7XG4gICAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5saW5lXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgZW5kWFN0YXJ0KVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIGVuZFlTdGFydClcbiAgICAgICAgICAgICAgICAuYXR0cigneDInLCBlbmRYRW5kKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGVuZFlFbmQpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBjdXJyVHJhbnNwYXJlbmN5KVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsIGN1cnJBbHBoYSk7XG5cbiAgICAgICAgICAgICAgLy8gTG9hZHMgVmFyIGludG8gTGluZSBBcnJheSBmb3IgTGF0ZXIgVXNlIGlmIHdlIG5lZWQgYSB0cmFuc2l0aW9uLlxuICAgICAgICAgICAgICAvLyBPbmx5IGxvYWQgd2hlbiBub3QgdHJhbnNpdGlvbmluZyB2aWV3cy5cbiAgICAgICAgICAgICAgLy8gV2hlbiBhIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLCBuZXcgdmFsdWVzIHdpbGwgYmUgdXBkYXRlZCBpbiB0cmFuc2l0aW9uIGFuaW1hdGlvbiBtZXRob2RzLlxuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0uc3RhcnRYID0gZW5kWFN0YXJ0O1xuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0uc3RhcnRZID0gZW5kWVN0YXJ0O1xuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0uZW5kWCA9IGVuZFhFbmQ7XG4gICAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5lbmRZID0gZW5kWUVuZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIDEgLSBHUkFCIFZBTFVFIEZST00gU1RPUkVEIEhPTERJTkcgQVJSQVlcbiAgICAgICAgICAgICAgbGV0IGN1cnJYU3RhcnQgPSBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0uc3RhcnRYO1xuICAgICAgICAgICAgICBsZXQgY3VycllTdGFydCA9IHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5zdGFydFk7XG4gICAgICAgICAgICAgIGxldCBjdXJyWEVuZCA9IHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5lbmRYO1xuICAgICAgICAgICAgICBsZXQgY3VycllFbmQgPSBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0uZW5kWTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAvLyAyIC0gVVBEQVRFIFZBTFVFIElOIEVBU0lORyBUV0VFTlxuICAgICAgICAgICAgICBjdXJyWFN0YXJ0ICs9IChlbmRYU3RhcnQgLSBjdXJyWFN0YXJ0KSAqIHN0YXRlLnZpZXdUcmFuc2l0aW9uRWFzZTtcbiAgICAgICAgICAgICAgY3VycllTdGFydCArPSAoZW5kWVN0YXJ0IC0gY3VycllTdGFydCkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gICAgICAgICAgICAgIGN1cnJYRW5kICs9IChlbmRYRW5kIC0gY3VyclhFbmQpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgICAgICAgICBjdXJyWUVuZCArPSAoZW5kWUVuZCAtIGN1cnJZRW5kKSAqIHN0YXRlLnZpZXdUcmFuc2l0aW9uRWFzZTtcblxuICAgICAgICAgICAgICAvLyAzIC0gU1RPUkUgVkFMVUUgSU4gSE9MRElORyBBUlJBWVxuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0uc3RhcnRYID0gY3VyclhTdGFydDtcbiAgICAgICAgICAgICAgc3RhdGUuaG9yaXpDb25uZWN0b3JPYmpzW2NvdW50ZXJdLnN0YXJ0WSA9IGN1cnJZU3RhcnQ7XG4gICAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5lbmRYID0gY3VyclhFbmQ7XG4gICAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5lbmRZID0gY3VycllFbmQ7XG5cbiAgICAgICAgICAgICAgaWYgKHN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgICAgICAgICAgICAgIGN1cnJWaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VyclZpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gNCAtIERSQVcgSE9SSVpPTlRBTCBDT05ORUNUT1IgTElORVxuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0ubGluZVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MScsIGN1cnJYU3RhcnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgY3VycllTdGFydClcbiAgICAgICAgICAgICAgICAuYXR0cigneDInLCBjdXJyWEVuZClcbiAgICAgICAgICAgICAgICAuYXR0cigneTInLCBjdXJyWUVuZClcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHNXKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGN1cnJUcmFuc3BhcmVuY3kpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgY3VyclZpc2liaWxpdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvd2VzdExldmVsQ2hlY2soZW5kSW5kLCBjaGVja2VkTGV2ZWwpIHtcbiAgbGV0IGxvd2VzdExldmVsU29GYXIgPSB0cnVlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW5kSW5kOyBpKyspIHtcbiAgICBjb25zdCBjdXJyTGV2ZWwgPSBzdGF0ZS5yb3dzW2ldLkxldmVsO1xuICAgIGlmIChjdXJyTGV2ZWwgPD0gY2hlY2tlZExldmVsKSB7XG4gICAgICBsb3dlc3RMZXZlbFNvRmFyID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvd2VzdExldmVsU29GYXI7XG59XG5cbi8vIERyYXdpbmcgdmVydGljYWwgY29ubmVjdG9yc1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdWZXJ0Q29ubmVjdG9ycygpIHtcbiAgbGV0IHByZXZMZXZlbCA9IDE7XG5cbiAgLy8gU2V0IHVwIHN0cm9rZSB3aWR0aCBiYXNlZCBvbiB6b29tIHZhclxuICBjb25zdCBzVyA9IHN0YXRlLnRhcmdldFpvb21MZXZlbCAqIDI7XG5cbiAgLy8gTG9vcCB0aHJ1IHBvc2l0aW9ucyBhcnJheSB0byBmaW5kIG9yaWdpbnNcbiAgLy8gTkVFRCBUTyBGSVg6IFNob3VsZCBsb29wIHRocnUgb3JpZ2lucyBhcnJheS4gQm90aCBhcnJheXMgYXJlIHRoZSBzYW1lIGxlbmd0aCBhbmQgdGhlIGluZGV4ZXMgbGluZSB1cC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5wb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyTGV2ZWwgPSBzdGF0ZS5yb3dzW2ldLkxldmVsO1xuXG4gICAgLy8gUmVmZXJlbmNlIG9yaWdpbnNbaV0ucGJDZW50ZXJYLy4uLi55IChQYWdlIEJvdHRvbSBDZW50ZXIgVmFyKVxuICAgIGxldCBlbmRYU3RhcnQgPSBzdGF0ZS5vcmlnaW5zW2ldLnBCQ2VudGVyWDtcbiAgICBsZXQgZW5kWVN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5wQkNlbnRlclk7XG4gICAgbGV0IGVuZFhFbmQ7XG4gICAgbGV0IGVuZFlFbmQ7XG4gICAgbGV0IGN1cnJWaXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGxldCBjdXJyVHJhbnNwYXJlbmN5ID0gMTtcbiAgICBjb25zdCBwcmV2SW5kID0gaSAtIDE7XG5cbiAgICBsZXQgc2hvd0Nvbm5lY3Rpb24gPSAneWVzJztcbiAgICBzdGF0ZS5yb3dzW2ldLlNob3dIaWVyYXJjaHlcbiAgICAgID8gKHNob3dDb25uZWN0aW9uID0gc3RhdGUucm93c1tpXS5TaG93SGllcmFyY2h5KVxuICAgICAgOiAoc2hvd0Nvbm5lY3Rpb24gPSBzdGF0ZS5yb3dzW2ldLkNvbm5lY3Rpb24pO1xuXG4gICAgLy8gSWYgcHJldmlvdXMgbGV2ZWwgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGN1cnJlbnQgbGV2ZWwsXG4gICAgLy8gRHJhdyBhIGxpbmUgcnVubmluZyBmcm9tIHRoZSBjb25lY3RvciBvcmlnaW4gdG8gdGhlIGNlbnRlciBvZiB0aGUgcGFnZSBib3R0b20uXG4gICAgLy8gSWYgdGhlIGN1cnJlbnQgbGV2ZWwgaXMgZ3JlYXRlciB0aGFuIHByZXYsIGRyYXcgYSBsaW5lIGNvbm5lY3RpbmcgdGhlIHR3byBwYWdlcy5cbiAgICBpZiAocHJldkxldmVsIDwgY3VyckxldmVsICYmIGkgPiAwKSB7XG4gICAgICAvLyBJZiBOZXcgU2VjdGlvbiwgYWRkIDEuNXggcGFkZGluZyB1bml0XG4gICAgICAvLyBTYXZlIHByZXZpb3VzIGluZGV4IHNvIHdlIGNhbiBldmFsdWF0ZSBjb29yZGluYXRlcyBmb3IgbGluZSBlbmRwb2ludC5cblxuICAgICAgaWYgKHByZXZJbmQgPiAtMSAmJiBzaG93Q29ubmVjdGlvbiA9PSAneWVzJykge1xuICAgICAgICAvLyBMaW5lIHdpbGwgc3RhcnQgYXQgY3VycmVudCBwYWdlJ3MgY29ubmVjdG9yIG9yaWdpbiBYL1kgYW5kIGVuZCBhdCBwcmV2aW91cyBwYWdlIGJvdHRvbSBjZW50ZXIgWC9ZIChwQkNlbnRlclgvLi4uWSlcbiAgICAgICAgZW5kWEVuZCA9IHN0YXRlLm9yaWdpbnNbcHJldkluZF0ucEJDZW50ZXJYO1xuICAgICAgICBlbmRZRW5kID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5wQkNlbnRlclk7XG4gICAgICB9IGVsc2UgaWYgKHByZXZJbmQgPiAtMSAmJiBzaG93Q29ubmVjdGlvbiA9PSAnbm8nKSB7XG4gICAgICAgIC8vIExpbmUgd2lsbCBzdGFydCBhdCBjdXJyZW50IHBhZ2UncyBjb25uZWN0b3Igb3JpZ2luIFgvWSBhbmQgZW5kIGF0IHByZXZpb3VzIHBhZ2UgYm90dG9tIGNlbnRlciBYL1kgKHBCQ2VudGVyWC8uLi5ZKVxuICAgICAgICBlbmRYRW5kID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5wQkNlbnRlclg7XG4gICAgICAgIGVuZFlFbmQgPSBzdGF0ZS5vcmlnaW5zW3ByZXZJbmRdLnBCQ2VudGVyWTtcbiAgICAgICAgZW5kWFN0YXJ0ID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5wQkNlbnRlclg7XG4gICAgICAgIGVuZFlTdGFydCA9IHN0YXRlLm9yaWdpbnNbcHJldkluZF0ucEJDZW50ZXJZO1xuICAgICAgICBjdXJyVmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBjdXJyVHJhbnNwYXJlbmN5ID0gMDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByZXZMZXZlbCA+PSBjdXJyTGV2ZWwgfHwgaSA9PSAwKSB7XG4gICAgICAvLyBJZiBzYW1lIGxldmVsLCBvciBubyBjb25uZWN0aW9uLCBvciB0aGlzIGlzIHRoZSBmaXJzdCBub2RlIGluIHRoZSBtYXA6ICBhZGQgc2luZ2xlIHBhZGRpbmcgdW5pdFxuICAgICAgLy8gTGluZSBlbmRzIGF0IGNvbm5lY3RvciBvcmlnaW4gWC9ZIGZvciB0aGUgY3VyZXJudCBwYWdlLlxuXG4gICAgICBpZiAobG93ZXN0TGV2ZWxDaGVjayhpLCBzdGF0ZS5yb3dzW2ldLkxldmVsKSAmJiBpID4gMCkge1xuICAgICAgICBjb25zdCBsZXZlbERpZmYgPSBwcmV2TGV2ZWwgLSBjdXJyTGV2ZWw7XG4gICAgICAgIGNvbnN0IHhPZmZzZXQgPVxuICAgICAgICAgIE1hdGgudGFuKGRlZ3JlZXNUb1JhZGlhbnMoc3RhdGUuc2Vjb25kYXJ5QW5nbGVEZWdyZWVzKSkgKlxuICAgICAgICAgIChzdGF0ZS52ZXJ0UGFkZGluZyAqIGxldmVsRGlmZik7XG4gICAgICAgIGVuZFhTdGFydCA9IHN0YXRlLm9yaWdpbnNbaV0uY29ubmVjdG9yT3JpZ2luWCArIHhPZmZzZXQ7XG5cbiAgICAgICAgZW5kWVN0YXJ0ID1cbiAgICAgICAgICBzdGF0ZS5vcmlnaW5zW2ldLmNvbm5lY3Rvck9yaWdpblkgLVxuICAgICAgICAgIHhPZmZzZXQgLyBNYXRoLnRhbihkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnNlY29uZGFyeUFuZ2xlRGVncmVlcykpO1xuXG4gICAgICAgIGlmIChzaG93Q29ubmVjdGlvbiA9PSAnbm8nKSB7XG4gICAgICAgICAgZW5kWFN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5wQkNlbnRlclg7XG4gICAgICAgICAgZW5kWVN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5wQkNlbnRlclk7XG5cbiAgICAgICAgICBlbmRYRW5kID0gc3RhdGUub3JpZ2luc1tpXS5jb25uZWN0b3JPcmlnaW5YO1xuICAgICAgICAgIGVuZFlFbmQgPSBzdGF0ZS5vcmlnaW5zW2ldLmNvbm5lY3Rvck9yaWdpblk7XG5cbiAgICAgICAgICBsZXQgbmV4dEluZDtcblxuICAgICAgICAgIGkgPCBzdGF0ZS5yb3dzLmxlbmd0aCAtIDEgPyAobmV4dEluZCA9IGkgKyAxKSA6IChuZXh0SW5kID0gaSk7XG5cbiAgICAgICAgICBsZXQgc2hvd05leHRDb25uZWN0aW9uID0gJ3llcyc7XG4gICAgICAgICAgc3RhdGUucm93c1tuZXh0SW5kXS5TaG93SGllcmFyY2h5XG4gICAgICAgICAgICA/IChzaG93TmV4dENvbm5lY3Rpb24gPSBzdGF0ZS5yb3dzW25leHRJbmRdLlNob3dIaWVyYXJjaHkpXG4gICAgICAgICAgICA6IChzaG93TmV4dENvbm5lY3Rpb24gPSBzdGF0ZS5yb3dzW25leHRJbmRdLkNvbm5lY3Rpb24pO1xuXG4gICAgICAgICAgaWYgKHNob3dOZXh0Q29ubmVjdGlvbiA9PSAneWVzJykge1xuICAgICAgICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDE7XG4gICAgICAgICAgICBjdXJyVmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDA7XG4gICAgICAgICAgICBjdXJyVmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpID09IDApIHtcbiAgICAgICAgZW5kWFN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5wQkNlbnRlclg7XG4gICAgICAgIGVuZFlTdGFydCA9IHN0YXRlLm9yaWdpbnNbaV0ucEJDZW50ZXJZO1xuXG4gICAgICAgIGlmIChzaG93Q29ubmVjdGlvbiA9PSAnbm8nKSB7XG4gICAgICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDA7XG4gICAgICAgICAgY3VyclZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlbmRYRW5kID0gc3RhdGUub3JpZ2luc1tpXS5jb25uZWN0b3JPcmlnaW5YO1xuICAgICAgZW5kWUVuZCA9IHN0YXRlLm9yaWdpbnNbaV0uY29ubmVjdG9yT3JpZ2luWTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB0byBzZWUgaWYgbm9kZSBpcyBhIGNvbXBvbmVudCBhbmQgcmVuZGVyIGRhc2hlZCBsaW5lLlxuICAgIGlmIChzdGF0ZS5yb3dzW2ldLkVudGl0eSA9PSAnY29tcG9uZW50JyAmJiBzaG93Q29ubmVjdGlvbiA9PSAneWVzJykge1xuICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDAuNzU7XG4gICAgICBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5saW5lLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgJzMsIDMnKTsgLy8gPD09IFRoaXMgbGluZSBoZXJlISFcbiAgICB9XG5cbiAgICAvLyBMb2FkcyBWYXIgaW50byBMaW5lIEFycmF5IGZvciBMYXRlciBVc2UgaWYgd2UgbmVlZCBhIHRyYW5zaXRpb24uXG4gICAgLy8gT25seSBsb2FkIHdoZW4gbm90IHRyYW5zaXRpb25pbmcgdmlld3MuXG4gICAgLy8gV2hlbiBhIHRyYW5zaXRpb24gaXMgdGFraW5nIHBsYWNlLCBuZXcgdmFsdWVzIHdpbGwgYmUgdXBkYXRlZCBpbiB0cmFuc2l0aW9uIGFuaW1hdGlvbiBtZXRob2RzLlxuICAgIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICAvLyBEcmF3IHRoZSBsaW5lXG4gICAgICBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5saW5lXG4gICAgICAgIC5hdHRyKCd4MScsIGVuZFhTdGFydClcbiAgICAgICAgLmF0dHIoJ3kxJywgZW5kWVN0YXJ0KVxuICAgICAgICAuYXR0cigneDInLCBlbmRYRW5kKVxuICAgICAgICAuYXR0cigneTInLCBlbmRZRW5kKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHNXKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBjdXJyVHJhbnNwYXJlbmN5KVxuICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCBjdXJyVmlzaWJpbGl0eSk7XG5cbiAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLnN0YXJ0WCA9IGVuZFhTdGFydDtcbiAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLnN0YXJ0WSA9IGVuZFlTdGFydDtcbiAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLmVuZFggPSBlbmRYRW5kO1xuICAgICAgc3RhdGUudmVydENvbm5lY3Rvck9ianNbaV0uZW5kWSA9IGVuZFlFbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEVYRUNVVEUgVEhFIFJPVEFUSU9OIEFOSU1BVElPTiBGUk9NIEZMQVQgVklFVyBUTyAyLjVEXG5cbiAgICAgIC8vIDEgLSBHUkFCIFZBTFVFIEZST00gU1RPUkVEIEhPTERJTkcgQVJSQVlcbiAgICAgIGxldCBjdXJyWFN0YXJ0ID0gc3RhdGUudmVydENvbm5lY3Rvck9ianNbaV0uc3RhcnRYO1xuICAgICAgbGV0IGN1cnJZU3RhcnQgPSBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5zdGFydFk7XG4gICAgICBsZXQgY3VyclhFbmQgPSBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5lbmRYO1xuICAgICAgbGV0IGN1cnJZRW5kID0gc3RhdGUudmVydENvbm5lY3Rvck9ianNbaV0uZW5kWTtcblxuICAgICAgLy8gMiAtIFVQREFURSBWQUxVRSBJTiBFQVNJTkcgVFdFRU5cbiAgICAgIGN1cnJYU3RhcnQgKz0gKGVuZFhTdGFydCAtIGN1cnJYU3RhcnQpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgY3VycllTdGFydCArPSAoZW5kWVN0YXJ0IC0gY3VycllTdGFydCkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gICAgICBjdXJyWEVuZCArPSAoZW5kWEVuZCAtIGN1cnJYRW5kKSAqIHN0YXRlLnZpZXdUcmFuc2l0aW9uRWFzZTtcbiAgICAgIGN1cnJZRW5kICs9IChlbmRZRW5kIC0gY3VycllFbmQpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuXG4gICAgICAvLyAzIC0gU1RPUkUgVkFMVUUgSU4gSE9MRElORyBBUlJBWVxuICAgICAgc3RhdGUudmVydENvbm5lY3Rvck9ianNbaV0uc3RhcnRYID0gY3VyclhTdGFydDtcbiAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLnN0YXJ0WSA9IGN1cnJZU3RhcnQ7XG4gICAgICBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5lbmRYID0gY3VyclhFbmQ7XG4gICAgICBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5lbmRZID0gY3VycllFbmQ7XG5cbiAgICAgIC8vIDQgLSBEUkFXIEhPUklaT05UQUwgQ09OTkVDVE9SIExJTkVcbiAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLmxpbmVcbiAgICAgICAgLmF0dHIoJ3gxJywgY3VyclhTdGFydClcbiAgICAgICAgLmF0dHIoJ3kxJywgY3VycllTdGFydClcbiAgICAgICAgLmF0dHIoJ3gyJywgY3VyclhFbmQpXG4gICAgICAgIC5hdHRyKCd5MicsIGN1cnJZRW5kKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHNXKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBjdXJyVHJhbnNwYXJlbmN5KVxuICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCBjdXJyVmlzaWJpbGl0eSk7XG4gICAgfVxuXG4gICAgLy8gUGlnZ3ktYmFjayBWYXJzIHRvIHNhdmUgcHJldmlvdXMgbGV2ZWwgdmFsdWUgZm9yIG5leHQgcnVuIHRocm91Z2ggbG9vcC5cbiAgICBwcmV2TGV2ZWwgPSBjdXJyTGV2ZWw7XG4gIH1cbn1cblxuLy8gQ09OTkVDVElPTlMgQkVUV0VFTiBQQUdFU1xuZXhwb3J0IGZ1bmN0aW9uIGRyYXdGbGF0SG9yaXpDb25uZWN0b3JzKCkge1xuICBsZXQgcHJldkxldmVsID0gMTtcblxuICAvLyBTZXQgdXAgc3Ryb2tlIHdpZHRoIGJhc2VkIG9uIHpvb20gdmFyXG4gIGNvbnN0IHNXID0gc3RhdGUudGFyZ2V0Wm9vbUxldmVsICogMjtcblxuICAvLyBMb29wIHRocnUgcG9zaXRpb25zIGFycmF5IHRvIGZpbmQgb3JpZ2luc1xuICAvLyBORUVEIFRPIEZJWDogU2hvdWxkIGxvb3AgdGhydSBvcmlnaW5zIGFycmF5LiBCb3RoIGFycmF5cyBhcmUgdGhlIHNhbWUgbGVuZ3RoIGFuZCB0aGUgaW5kZXhlcyBsaW5lIHVwLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIC8vIENIRUNLIFRPIFNFRSBJRiBXRSdSRSBJTiBNSUQtVFJBTlNJVElPTiBCRVRXRUVOIDIuNUQgQU5EIEZMQVQgTUFQIFZJRVdcblxuICAgIGNvbnN0IGN1cnJMZXZlbCA9IHBhcnNlSW50KHN0YXRlLnJvd3NbaV0uTGV2ZWwpO1xuXG4gICAgbGV0IHNob3dDb25uZWN0aW9uID0gJ3llcyc7XG4gICAgc3RhdGUucm93c1tpXS5TaG93SGllcmFyY2h5XG4gICAgICA/IChzaG93Q29ubmVjdGlvbiA9IHN0YXRlLnJvd3NbaV0uU2hvd0hpZXJhcmNoeSlcbiAgICAgIDogKHNob3dDb25uZWN0aW9uID0gc3RhdGUucm93c1tpXS5Db25uZWN0aW9uKTtcblxuICAgIC8vIFJlZmVyZW5jZSBvcmlnaW5zW2ldLnBiQ2VudGVyWC8uLi4ueSAoUGFnZSBCb3R0b20gQ2VudGVyIFZhcilcbiAgICBsZXQgZW5kWFN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5jZW50ZXJYO1xuICAgIGxldCBlbmRZU3RhcnQgPSBzdGF0ZS5vcmlnaW5zW2ldLmNlbnRlclk7XG5cbiAgICAvLyBIT0xESU5HIFZBTFVFUyBGT1IgQ1VSUkVOVCBWQVJTXG4gICAgbGV0IGN1cnJWaXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIGxldCBjdXJyVHJhbnNwYXJlbmN5ID0gMTtcbiAgICBjb25zdCBwcmV2SW5kID0gaSAtIDE7XG5cbiAgICBsZXQgZW5kWEVuZDtcbiAgICBsZXQgZW5kWUVuZDtcblxuICAgIC8vIElmIHByZXZpb3VzIGxldmVsIGlzIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBjdXJyZW50IGxldmVsLFxuICAgIC8vIERyYXcgYSBsaW5lIHJ1bm5pbmcgZnJvbSB0aGUgY29uZWN0b3Igb3JpZ2luIHRvIHRoZSBjZW50ZXIgb2YgdGhlIHBhZ2UgYm90dG9tLlxuICAgIC8vIElmIHRoZSBjdXJyZW50IGxldmVsIGlzIGdyZWF0ZXIgdGhhbiBwcmV2LCBkcmF3IGEgbGluZSBjb25uZWN0aW5nIHRoZSB0d28gcGFnZXMuXG4gICAgaWYgKHByZXZMZXZlbCA8IGN1cnJMZXZlbCAmJiBpID4gMCkge1xuICAgICAgLy8gSWYgTmV3IFNlY3Rpb24sIGFkZCAxLjV4IHBhZGRpbmcgdW5pdFxuXG4gICAgICBlbmRYRW5kID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5yaWdodENlbnRlclg7XG4gICAgICBlbmRZRW5kID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5jZW50ZXJZO1xuICAgICAgLy8gU2F2ZSBwcmV2aW91cyBpbmRleCBzbyB3ZSBjYW4gZXZhbHVhdGUgY29vcmRpbmF0ZXMgZm9yIGxpbmUgZW5kcG9pbnQuXG5cbiAgICAgIGlmIChwcmV2SW5kID4gLTEgJiYgc2hvd0Nvbm5lY3Rpb24gPT0gJ3llcycpIHtcbiAgICAgICAgLy8gTGluZSB3aWxsIHN0YXJ0IGF0IGN1cnJlbnQgcGFnZSdzIGNvbm5lY3RvciBvcmlnaW4gWC9ZIGFuZCBlbmQgYXQgcHJldmlvdXMgcGFnZSBib3R0b20gY2VudGVyIFgvWSAocEJDZW50ZXJYLy4uLlkpXG4gICAgICAgIGVuZFhFbmQgPSBzdGF0ZS5vcmlnaW5zW3ByZXZJbmRdLnJpZ2h0Q2VudGVyWDtcbiAgICAgICAgZW5kWUVuZCA9IHN0YXRlLm9yaWdpbnNbcHJldkluZF0uY2VudGVyWTtcbiAgICAgIH0gZWxzZSBpZiAocHJldkluZCA+IC0xICYmIHNob3dDb25uZWN0aW9uID09ICdubycpIHtcbiAgICAgICAgLy8gTGluZSB3aWxsIHN0YXJ0IGF0IGN1cnJlbnQgcGFnZSdzIGNvbm5lY3RvciBvcmlnaW4gWC9ZIGFuZCBlbmQgYXQgcHJldmlvdXMgcGFnZSBib3R0b20gY2VudGVyIFgvWSAocEJDZW50ZXJYLy4uLlkpXG4gICAgICAgIGVuZFhFbmQgPSBzdGF0ZS5vcmlnaW5zW3ByZXZJbmRdLmNlbnRlclg7XG4gICAgICAgIGVuZFlFbmQgPSBzdGF0ZS5vcmlnaW5zW3ByZXZJbmRdLmNlbnRlclk7XG5cbiAgICAgICAgZW5kWFN0YXJ0ID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5sZWZ0Q2VudGVyWDtcbiAgICAgICAgZW5kWVN0YXJ0ID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5sZWZ0Q2VudGVyWTsgLy8gTk9URSAtIExJTkUgSEFTIE5PIExFTkdUSFxuXG4gICAgICAgIGN1cnJWaXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIGN1cnJUcmFuc3BhcmVuY3kgPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJldkxldmVsID49IGN1cnJMZXZlbCB8fCBpID09IDAgfHwgc2hvd0Nvbm5lY3Rpb24gPT0gJ3llcycpIHtcbiAgICAgIGlmIChsb3dlc3RMZXZlbENoZWNrKGksIHN0YXRlLnJvd3NbaV0uTGV2ZWwpICYmIGkgPiAwKSB7XG4gICAgICAgIGVuZFhTdGFydCA9IHN0YXRlLm9yaWdpbnNbaV0uY2VudGVyWDtcbiAgICAgICAgZW5kWVN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5jZW50ZXJZO1xuXG4gICAgICAgIC8vIFRPRE8gLSBGaXggdGhpcyBzbyB0aGF0IGxpbmUgZHJhd2luZyBpcyBtb3JlIGVsZWdhbnRcbiAgICAgICAgLy8gVXBkYXRlIHByZXZpb3VzIEZsYXQgSG9yaXpvbnRhbCBDb25uZWN0b3IgRXh0ZW5kcyB0byBuZXcgY29vcmRpbmF0ZXMuXG5cbiAgICAgICAgaWYgKHN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cyB8fCBzaG93Q29ubmVjdGlvbiA9PSAnbm8nKSB7XG4gICAgICAgICAgY3VyclZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICBjdXJyVHJhbnNwYXJlbmN5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5yb3dzW2ldLkVudGl0eSA9PSAnY29tcG9uZW50Jykge1xuICAgICAgICAgIGN1cnJUcmFuc3BhcmVuY3kgPSAwLjc1O1xuICAgICAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW3ByZXZJbmRdLmxpbmUuc3R5bGUoXG4gICAgICAgICAgICAnc3Ryb2tlLWRhc2hhcnJheScsXG4gICAgICAgICAgICAnMywgMydcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUudmVydENvbm5lY3Rvck9ianNbcHJldkluZF0ubGluZVxuICAgICAgICAgIC5hdHRyKCd4MScsIHN0YXRlLm9yaWdpbnNbaV0ucmlnaHRDZW50ZXJYKVxuICAgICAgICAgIC5hdHRyKCd5MScsIHN0YXRlLm9yaWdpbnNbcHJldkluZF0ucmlnaHRDZW50ZXJZKVxuICAgICAgICAgIC5hdHRyKCd4MicsIHN0YXRlLm9yaWdpbnNbcHJldkluZF0uY2VudGVyWClcbiAgICAgICAgICAuYXR0cigneTInLCBzdGF0ZS5vcmlnaW5zW3ByZXZJbmRdLmNlbnRlclkpXG4gICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVylcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBjdXJyVHJhbnNwYXJlbmN5KVxuICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsIGN1cnJWaXNpYmlsaXR5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZFhTdGFydCA9IHN0YXRlLm9yaWdpbnNbaV0uY2VudGVyWDtcbiAgICAgICAgZW5kWVN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5sZWZ0Q2VudGVyWTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHNhbWUgbGV2ZWwsIGFkZCBzaW5nbGUgcGFkZGluZyB1bml0XG4gICAgICAvLyBMaW5lIGVuZHMgYXQgY29ubmVjdG9yIG9yaWdpbiBYL1kgZm9yIHRoZSBjdXJlcm50IHBhZ2UuXG4gICAgICBlbmRYRW5kID0gc3RhdGUub3JpZ2luc1tpXS5jb25uZWN0b3JPcmlnaW5YO1xuICAgICAgZW5kWUVuZCA9IHN0YXRlLm9yaWdpbnNbaV0uY29ubmVjdG9yT3JpZ2luWTtcblxuICAgICAgaWYgKHNob3dDb25uZWN0aW9uID09ICdubycpIHtcbiAgICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDA7XG4gICAgICAgIGN1cnJWaXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyVmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcmV2TGV2ZWwgPj0gY3VyckxldmVsIHx8IHNob3dDb25uZWN0aW9uID09ICdubycpIHtcbiAgICAgIGVuZFhFbmQgPSBzdGF0ZS5vcmlnaW5zW3ByZXZJbmRdLmNlbnRlclg7XG4gICAgICBlbmRZRW5kID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5jZW50ZXJZO1xuICAgICAgZW5kWFN0YXJ0ID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5jZW50ZXJYO1xuICAgICAgZW5kWVN0YXJ0ID0gc3RhdGUub3JpZ2luc1twcmV2SW5kXS5jZW50ZXJZOyAvLyBOT1RFIC0gTElORSBIQVMgTk8gTEVOR1RIXG5cbiAgICAgIGN1cnJWaXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBjdXJyVHJhbnNwYXJlbmN5ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUucm93c1tpXS5FbnRpdHkgPT0gJ2NvbXBvbmVudCcgJiYgc2hvd0Nvbm5lY3Rpb24gPT0gJ3llcycpIHtcbiAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLmxpbmUuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCAnMywgMycpOyAvLyA8PT0gVGhpcyBsaW5lIGhlcmUhIVxuICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDAuNzU7XG4gICAgICBjdXJyVmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgICAgLy8gRHJhdyB0aGUgbGluZVxuICAgICAgc3RhdGUudmVydENvbm5lY3Rvck9ianNbaV0ubGluZVxuICAgICAgICAuYXR0cigneDEnLCBlbmRYU3RhcnQpXG4gICAgICAgIC5hdHRyKCd5MScsIGVuZFlTdGFydClcbiAgICAgICAgLmF0dHIoJ3gyJywgZW5kWEVuZClcbiAgICAgICAgLmF0dHIoJ3kyJywgZW5kWUVuZClcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVylcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgY3VyclRyYW5zcGFyZW5jeSlcbiAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgY3VyclZpc2liaWxpdHkpO1xuXG4gICAgICAvLyBMT0FEIFZBTFVFUyBJTiBIT0xESU5HIEFSUkFZXG4gICAgICBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5zdGFydFggPSBlbmRYU3RhcnQ7XG4gICAgICBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5zdGFydFkgPSBlbmRZU3RhcnQ7XG4gICAgICBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5lbmRYID0gZW5kWEVuZDtcbiAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLmVuZFkgPSBlbmRZRW5kO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5saW5lXG4gICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcblxuICAgICAgLy8gMSAtIEdSQUIgVkFMVUUgRlJPTSBTVE9SRUQgSE9MRElORyBBUlJBWVxuICAgICAgbGV0IGN1cnJYU3RhcnQgPSBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5zdGFydFg7XG4gICAgICBsZXQgY3VycllTdGFydCA9IHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLnN0YXJ0WTtcbiAgICAgIGxldCBjdXJyWEVuZCA9IHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLmVuZFg7XG4gICAgICBsZXQgY3VycllFbmQgPSBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5lbmRZO1xuXG4gICAgICAvLyAyIC0gVVBEQVRFIFZBTFVFIElOIEVBU0lORyBUV0VFTlxuICAgICAgY3VyclhTdGFydCArPSAoZW5kWFN0YXJ0IC0gY3VyclhTdGFydCkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gICAgICBjdXJyWVN0YXJ0ICs9IChlbmRZU3RhcnQgLSBjdXJyWVN0YXJ0KSAqIHN0YXRlLnZpZXdUcmFuc2l0aW9uRWFzZTtcbiAgICAgIGN1cnJYRW5kICs9IChlbmRYRW5kIC0gY3VyclhFbmQpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgY3VycllFbmQgKz0gKGVuZFlFbmQgLSBjdXJyWUVuZCkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG5cbiAgICAgIC8vIDMgLSBTVE9SRSBWQUxVRSBJTiBIT0xESU5HIEFSUkFZXG4gICAgICBzdGF0ZS52ZXJ0Q29ubmVjdG9yT2Jqc1tpXS5zdGFydFggPSBjdXJyWFN0YXJ0O1xuICAgICAgc3RhdGUudmVydENvbm5lY3Rvck9ianNbaV0uc3RhcnRZID0gY3VycllTdGFydDtcbiAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLmVuZFggPSBjdXJyWEVuZDtcbiAgICAgIHN0YXRlLnZlcnRDb25uZWN0b3JPYmpzW2ldLmVuZFkgPSBjdXJyWUVuZDtcblxuICAgICAgLy8gNCAtIERSQVcgSE9SSVpPTlRBTCBDT05ORUNUT1IgTElORVxuICAgICAgc3RhdGUudmVydENvbm5lY3Rvck9ianNbaV0ubGluZVxuICAgICAgICAuYXR0cigneDEnLCBjdXJyWFN0YXJ0KVxuICAgICAgICAuYXR0cigneTEnLCBjdXJyWVN0YXJ0KVxuICAgICAgICAuYXR0cigneDInLCBjdXJyWEVuZClcbiAgICAgICAgLmF0dHIoJ3kyJywgY3VycllFbmQpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgc1cpXG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGN1cnJUcmFuc3BhcmVuY3kpXG4gICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICB9XG5cbiAgICAvLyBQaWdneS1iYWNrIFZhcnMgdG8gc2F2ZSBwcmV2aW91cyBsZXZlbCB2YWx1ZSBmb3IgbmV4dCBydW4gdGhyb3VnaCBsb29wLlxuICAgIHByZXZMZXZlbCA9IGN1cnJMZXZlbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0ZsYXRWZXJ0Q29ubmVjdG9ycygpIHtcbiAgLy8gVXBkYXRlIHRoZSBzdHJva2Ugd2lkdGggYmFzZWQgb24gem9vbSBsZXZlbCB0byBnaXZlIGlsbHVzaW9uIG9mIHBlcnNwZWN0aXZlLlxuICBjb25zdCBzVyA9IHN0YXRlLnRhcmdldFpvb21MZXZlbCAqIDI7XG4gIGxldCBjb3VudGVyID0gMDtcblxuICAvLyBMb29wIHRocnUgcG9zaXRpb25zIGFycmF5LlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJMZXZlbCA9IHN0YXRlLnJvd3NbaV0uTGV2ZWw7XG4gICAgY29uc3QgY3VyclMgPSBpIC0gMTtcblxuICAgIGxldCBzaG93Q29ubmVjdGlvbiA9ICd5ZXMnO1xuICAgIHN0YXRlLnJvd3NbaV0uU2hvd0hpZXJhcmNoeVxuICAgICAgPyAoc2hvd0Nvbm5lY3Rpb24gPSBzdGF0ZS5yb3dzW2ldLlNob3dIaWVyYXJjaHkpXG4gICAgICA6IChzaG93Q29ubmVjdGlvbiA9IHN0YXRlLnJvd3NbaV0uQ29ubmVjdGlvbik7XG5cbiAgICAvLyBIb3Jpem9udGFsIGNvbm5lY3Rpb25zIGRvIG5vdCBleGlzdCBvbiB0aGUgZmlyc3QgcGFnZSBpbnN0YW5jZS5cbiAgICAvLyBDaGVjayB0byBtYWtlIHN1cmUgdGhhdCB3ZSdyZSBsb29raW5nIGF0IHRoZSBmaXJzdCBwYWdlIGluIHRoZSBsaXN0LlxuICAgIGlmIChpID4gMCkge1xuICAgICAgLy8gRm9yIEhvcml6b250YWwgY29ubmVjdGlvbnMsIHdlIGhhdmUgdG8gZXZhbHVhdGUgdGhlIGN1cnJlbnQgcGFnZSdzIGxldmVsLCB0aGVuIGxvb3AgdGhyb3VnaCB0aGUgcHJldmlvdXNseSBjcmVhdGVkIHBhZ2VzLlxuICAgICAgLy8gQSBIb3Jpem9udGFsIGNvbm5lY3Rpb24gaXMgZHJhd24gdG8gdGhlIGZpcnN0IHByZXZpb3VzIHBhZ2UgdGhhdCBzaGFyZXMgdGhlIHNhbWUgbGV2ZWwgYXMgdGhlIGN1cnJlbnQgcGFnZS5cbiAgICAgIC8vIFRoaXMgZW5hYmxlcyB1cyB0byByZW5kZXIgYSBtdWx0aSBsZXZlbCB0cmVlIHdpdGggbWFueSBicmFuY2hlcy5cbiAgICAgIGZvciAobGV0IHggPSBjdXJyUzsgeCA+PSAwOyB4LS0pIHtcbiAgICAgICAgLy8gRXZhbHVhdGUgaWYgY3VycmVudCBMZXZlbCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gcHJldmlvdXMgbGV2ZWxcbiAgICAgICAgLy8gSWYgaXQncyBsZXNzLCB0aGFuIHdlIGRvbid0IGNyZWF0ZSBhbnkgbmV3IGhvcml6b250YWwgY29ubmVjdHNpb24uIFRoaXMgYWxsb3dzIHVzIHRvIG1haW50YWluIHRoZSBcImJyYW5jaGluZ1wiIHRyZWUgc3RydWN0dXJlLlxuICAgICAgICBjb25zdCBwcmV2TGV2ZWwgPSBzdGF0ZS5yb3dzW3hdLkxldmVsO1xuICAgICAgICBpZiAocHJldkxldmVsID49IGN1cnJMZXZlbCkge1xuICAgICAgICAgIC8vIElmIGVxdWFsLCBkcmF3IGhvcml6b250YWwgY29ubmVjdGlvbiBsaW5lLlxuXG4gICAgICAgICAgaWYgKHByZXZMZXZlbCA+IGN1cnJMZXZlbCAmJiBsb3dlc3RMZXZlbENoZWNrKGksIGN1cnJMZXZlbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZFhFbmQgPSBzdGF0ZS5vcmlnaW5zW2ldLnJpZ2h0Q2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGVuZFlFbmQgPSBzdGF0ZS5vcmlnaW5zW3hdLnJpZ2h0Q2VudGVyWTtcblxuICAgICAgICAgICAgLy8gY29uc3QgbGV2ZWxEaWZmID0gcHJldkxldmVsIC0gY3VyckxldmVsO1xuXG4gICAgICAgICAgICBjb25zdCBlbmRYU3RhcnQgPSBzdGF0ZS5vcmlnaW5zW2ldLnJpZ2h0Q2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IGVuZFlTdGFydCA9IHN0YXRlLm9yaWdpbnNbaV0ucmlnaHRDZW50ZXJZO1xuICAgICAgICAgICAgbGV0IGN1cnJUcmFuc3BhcmVuY3kgPSAxO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGUucm93c1tpXS5FbnRpdHkgPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICAgICAgc3RhdGUuaG9yaXpDb25uZWN0b3JPYmpzW2NvdW50ZXJdLmxpbmUuc3R5bGUoXG4gICAgICAgICAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknLFxuICAgICAgICAgICAgICAgICczLCAzJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY3VyclZpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cyB8fCBzaG93Q29ubmVjdGlvbiA9PSAnbm8nKSB7XG4gICAgICAgICAgICAgIGN1cnJUcmFuc3BhcmVuY3kgPSAwO1xuICAgICAgICAgICAgICBjdXJyVmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDE7XG4gICAgICAgICAgICAgIGN1cnJWaXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0ubGluZVxuICAgICAgICAgICAgICAuYXR0cigneDEnLCBlbmRYU3RhcnQpXG4gICAgICAgICAgICAgIC5hdHRyKCd5MScsIGVuZFlTdGFydClcbiAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgZW5kWEVuZClcbiAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgZW5kWUVuZClcbiAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVylcbiAgICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgY3VyclRyYW5zcGFyZW5jeSlcbiAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgY3VyclZpc2liaWxpdHkpO1xuXG4gICAgICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKHByZXZMZXZlbCA9PSBjdXJyTGV2ZWwpIHtcbiAgICAgICAgICAgIC8vIExpbmUgc2hvdWxkIGJlZ2luIGFuZCBlbmQgYXQgc3RhcnQgcGFnZSdzIGNvbm5lY3RvciBvcmlnaW4gYW5kIGVuZCBwYWdlJ3MgY29ubmVjdG9yIG9yaWdpblxuICAgICAgICAgICAgLy8gU2VlIHNrZXRjaGVzL29yaWdpbl9vYmplY3RfcG9pbnRzLnBuZ1xuICAgICAgICAgICAgY29uc3QgZW5kWFN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5jb25uZWN0b3JPcmlnaW5YO1xuICAgICAgICAgICAgY29uc3QgZW5kWVN0YXJ0ID0gc3RhdGUub3JpZ2luc1tpXS5jb25uZWN0b3JPcmlnaW5ZO1xuICAgICAgICAgICAgY29uc3QgZW5kWEVuZCA9IHN0YXRlLm9yaWdpbnNbeF0uY29ubmVjdG9yT3JpZ2luWDtcbiAgICAgICAgICAgIGNvbnN0IGVuZFlFbmQgPSBzdGF0ZS5vcmlnaW5zW3hdLmNvbm5lY3Rvck9yaWdpblk7XG5cbiAgICAgICAgICAgIC8vIFJlcG9zaXRpb24gYW5kIHJlc2l6ZSB0aGUgbGluZS5cblxuICAgICAgICAgICAgbGV0IGN1cnJWaXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICAgICAgICBsZXQgY3VyclRyYW5zcGFyZW5jeSA9IDE7XG4gICAgICAgICAgICBpZiAoc3RhdGUucm93c1tpXS5FbnRpdHkgPT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICAgICAgY3VyclRyYW5zcGFyZW5jeSA9IDAuNzU7XG4gICAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5saW5lLnN0eWxlKFxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaGFycmF5JyxcbiAgICAgICAgICAgICAgICAnMywgMydcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YXRlLnRhcmdldFpvb21MZXZlbCA8IDAuMykge1xuICAgICAgICAgICAgICBjdXJyVmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2hvd0Nvbm5lY3Rpb24gPT0gJ25vJykge1xuICAgICAgICAgICAgICBjdXJyVmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3RhdGUudmVydENvbm5lY3Rvck9ianNbeF0ubGluZVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MpIHtcbiAgICAgICAgICAgICAgc3RhdGUuaG9yaXpDb25uZWN0b3JPYmpzW2NvdW50ZXJdLmxpbmVcbiAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBlbmRYU3RhcnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgZW5kWVN0YXJ0KVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIGVuZFhFbmQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgZW5kWUVuZClcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHNXKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGN1cnJUcmFuc3BhcmVuY3kpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgY3VyclZpc2liaWxpdHkpO1xuXG4gICAgICAgICAgICAgIC8vIFNUT1JFIEZPUiBMQVRFUiBVU0VcbiAgICAgICAgICAgICAgc3RhdGUuaG9yaXpDb25uZWN0b3JPYmpzW2NvdW50ZXJdLnN0YXJ0WCA9IGVuZFhTdGFydDtcbiAgICAgICAgICAgICAgc3RhdGUuaG9yaXpDb25uZWN0b3JPYmpzW2NvdW50ZXJdLnN0YXJ0WSA9IGVuZFlTdGFydDtcbiAgICAgICAgICAgICAgc3RhdGUuaG9yaXpDb25uZWN0b3JPYmpzW2NvdW50ZXJdLmVuZFggPSBlbmRYRW5kO1xuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0uZW5kWSA9IGVuZFlFbmQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0ubGluZS5zdHlsZShcbiAgICAgICAgICAgICAgICAndmlzaWJpbGl0eScsXG4gICAgICAgICAgICAgICAgJ2hpZGRlbidcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyAxIC0gR1JBQiBWQUxVRSBGUk9NIFNUT1JFRCBBUlJBWVxuICAgICAgICAgICAgICBsZXQgY3VyclhTdGFydCA9IHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5zdGFydFg7XG4gICAgICAgICAgICAgIGxldCBjdXJyWVN0YXJ0ID0gc3RhdGUuaG9yaXpDb25uZWN0b3JPYmpzW2NvdW50ZXJdLnN0YXJ0WTtcbiAgICAgICAgICAgICAgbGV0IGN1cnJYRW5kID0gc3RhdGUuaG9yaXpDb25uZWN0b3JPYmpzW2NvdW50ZXJdLmVuZFg7XG4gICAgICAgICAgICAgIGxldCBjdXJyWUVuZCA9IHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5lbmRZO1xuXG4gICAgICAgICAgICAgIC8vIDIgLSBVUERBVEUgVkFMVUUgSU4gRUFTSU5HIFRXRUVOXG4gICAgICAgICAgICAgIGN1cnJYU3RhcnQgKz0gKGVuZFhTdGFydCAtIGN1cnJYU3RhcnQpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgICAgICAgICBjdXJyWVN0YXJ0ICs9IChlbmRZU3RhcnQgLSBjdXJyWVN0YXJ0KSAqIHN0YXRlLnZpZXdUcmFuc2l0aW9uRWFzZTtcbiAgICAgICAgICAgICAgY3VyclhFbmQgKz0gKGVuZFhFbmQgLSBjdXJyWEVuZCkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gICAgICAgICAgICAgIGN1cnJZRW5kICs9IChlbmRZRW5kIC0gY3VycllFbmQpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuXG4gICAgICAgICAgICAgIC8vIDMgLSBTVE9SRSBWQUxVRSBJTiBBUlJBWVxuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0uc3RhcnRYID0gY3VyclhTdGFydDtcbiAgICAgICAgICAgICAgc3RhdGUuaG9yaXpDb25uZWN0b3JPYmpzW2NvdW50ZXJdLnN0YXJ0WSA9IGN1cnJZU3RhcnQ7XG4gICAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5lbmRYID0gY3VyclhFbmQ7XG4gICAgICAgICAgICAgIHN0YXRlLmhvcml6Q29ubmVjdG9yT2Jqc1tjb3VudGVyXS5lbmRZID0gY3VycllFbmQ7XG5cbiAgICAgICAgICAgICAgLy8gNCAtIERSQVcgSE9SSVpPTlRBTCBDT05ORUNUT1IgTElORSAoQUNUVUFMWSBBIFZFUlRJQ0FMIENST1NTQkFSIFdIRU4gSU4gMkQgRkxBVCBWSUVXKVxuICAgICAgICAgICAgICBzdGF0ZS5ob3JpekNvbm5lY3Rvck9ianNbY291bnRlcl0ubGluZVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MScsIGN1cnJYU3RhcnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgY3VycllTdGFydClcbiAgICAgICAgICAgICAgICAuYXR0cigneDInLCBjdXJyWEVuZClcbiAgICAgICAgICAgICAgICAuYXR0cigneTInLCBjdXJyWUVuZClcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHNXKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGN1cnJUcmFuc3BhcmVuY3kpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb3VudGVyICs9IDE7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBEUkFXIFBFUk1BTkVOVCBESVJFQ1QgTElOS1MgRlJPTSBQQUdFLVRPLVBBR0UvTk9ERS1UTy1OT0RFIElOIE1BUFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURpcmVjdENvbm5lY3Rpb25zKCkge1xuICBmb3IgKGxldCBqID0gMDsgaiA8IHN0YXRlLnJvd3MubGVuZ3RoOyBqKyspIHtcbiAgICAvLyBMb2NhbCB2YXJzIGZvciBkYXRhXG4gICAgLy8gY3VyclNMID0gY3VycmVudCBzdHJpbmcgbGlua1xuICAgIC8vIENMQSA9IGNyb3NzIGxpbmtzIGFycmF5XG4gICAgLy8gQ3Jvc3NsaW5rcyB2YXIgaXMgbWFpbnRhaW5lZCBzbyBsZWdhY3kgbWFwcyBkb24ndCBicmVhay5cbiAgICBjb25zdCBjdXJyU0wgPSBzdGF0ZS5yb3dzW2pdLkRpcmVjdENvbm5lY3Rpb25zO1xuXG4gICAgLy8gU3BsaXQgY3VyciBzdHJpbmcgaW50byBhcnJheS5cbiAgICBpZiAoY3VyclNMKSB7XG4gICAgICBjb25zdCBjdXJyQ0xBID0gY3VyclNMLnNwbGl0KCcsICcpO1xuXG4gICAgICAvLyBMb29wIHRocnUgbmV3bHkgY3JlYXRlZCBDcm9zc2xpbmsgQXJyYXksIFRoZW4gZmluZCBtYXRjaGluZyBhZGRyZXNzZXMuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJDTEEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gQ29tcGFyZSBzcGVjaWZpZWQgYWRkcmVzc2VzIGluIGN1cnJDTEEgYXJyYXkgdG8gYWRkcmVzc2VzIHB1bGxlZCBvdXQgb2YgUm93cyBvYmouXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc3RhdGUucm93cy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSBtYXRjaCwgd2UgZHJhdyBhIGNyb3NzIGxpbmsuXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoc3RhdGUucm93c1tqXS5OYW1lICE9ICcnICYmIHN0YXRlLnJvd3NbeF0uTmFtZSA9PSBjdXJyQ0xBW2ldKSB8fFxuICAgICAgICAgICAgKHN0YXRlLnJvd3Nbal0uQWRkcmVzcyAhPSAnJyAmJiBzdGF0ZS5yb3dzW3hdLkFkZHJlc3MgPT0gY3VyckNMQVtpXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJMaW5rID0gc3RhdGUuc3ZnRG9jLmFwcGVuZCgnbGluZScpO1xuXG4gICAgICAgICAgICBjdXJyTGluay5zdHlsZSgnb3BhY2l0eScsICc1MCcpLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgICAgICAgICAgY29uc3QgY3VyckxpbmtPYmogPSB7IGxpbms6IGN1cnJMaW5rLCBzdGFydEluZDogaiwgZW5kSW5kOiB4IH07XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIGZvciBsYXRlciB1c2UuXG4gICAgICAgICAgICBzdGF0ZS5kaXJlY3RDb25uZWN0b3JzLnB1c2goY3VyckxpbmtPYmopO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0RpcmVjdENvbm5lY3Rpb25zKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmRpcmVjdENvbm5lY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBqID0gc3RhdGUuZGlyZWN0Q29ubmVjdG9yc1tpXS5zdGFydEluZDtcbiAgICBjb25zdCB4ID0gc3RhdGUuZGlyZWN0Q29ubmVjdG9yc1tpXS5lbmRJbmQ7XG4gICAgY29uc3QgY3VyckxpbmsgPSBzdGF0ZS5kaXJlY3RDb25uZWN0b3JzW2ldLmxpbms7XG4gICAgY29uc3QgY3VyckRpc3BsYXlSdWxlcyA9IHN0YXRlLnJvd3Nbal0uRGlyZWN0Q29ubmVjdGlvbnNWaXNpYmlsaXR5O1xuICAgIGxldCBjdXJyTGlua0FscGhhID0gMTAwO1xuICAgIGxldCBjdXJyVmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBsZXQgY3VyclN0cm9rZVdpZHRoID0gMTtcblxuICAgIGlmIChcbiAgICAgIChzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MgJiYgc3RhdGUuZmxhdHRlbk1hcCkgfHxcbiAgICAgIGN1cnJEaXNwbGF5UnVsZXMgPT0gJ3Zpc2libGUgb24gaG92ZXIgb25seSdcbiAgICApIHtcbiAgICAgIGN1cnJWaXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJEaXNwbGF5UnVsZXMgPT0gJ3RyYW5zcGFyZW50IGxpbmUnKSB7XG4gICAgICBjdXJyTGlua0FscGhhID0gJzAuNCc7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY3VyckRpc3BsYXlSdWxlcyA9PSAndmlzaWJsZSBsaW5lIHdpdGggaGlnaGxpZ2h0JyAmJlxuICAgICAgIXN0YXRlLmZsYXR0ZW5NYXAgJiZcbiAgICAgICFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3NcbiAgICApIHtcbiAgICAgIGN1cnJMaW5rQWxwaGEgPSAnMC40JztcbiAgICAgIGN1cnJTdHJva2VXaWR0aCA9IDI7XG5cbiAgICAgIC8vIFRoZSBjb3JyZXNwb25kaW5nIGhvdmVyIGFycmF5cyBlbGxpcHNlIGJlY29tZXMgdmlzaWJsZS5cbiAgICAgIHN0YXRlLnBhZ2VzW3hdLnN0YXRlcy5oaWdobGlnaHRlZCA9IHRydWU7XG4gICAgICB1cGRhdGVTdGF0ZShzdGF0ZS5wYWdlc1t4XSk7XG4gICAgICBzdGF0ZS5wYWdlc1tqXS5zdGF0ZXMuaGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgdXBkYXRlU3RhdGUoc3RhdGUucGFnZXNbal0pO1xuICAgIH1cblxuICAgIHN0YXRlLnBhZ2VzW3hdLnN0YXRlcy5oaWdobGlnaHRlZCA9IHRydWU7XG5cbiAgICBsZXQgc3RhcnRYID0gc3RhdGUub3JpZ2luc1tqXS5wQkNlbnRlclg7XG4gICAgbGV0IGVuZFggPSBzdGF0ZS5vcmlnaW5zW3hdLnBCQ2VudGVyWDtcblxuICAgIC8vIElmIG1hcCBpcyBmbGF0dGVuZWQsIHdlIG5lZWQgdG8gcG9zaXRpb24gZGlyZWN0IGVuZHBvaW50cyBhcm91bmQgcGFnZSBsYWJlbHMuXG4gICAgaWYgKHN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSB3aGVyZSBsaW5lIGVuZHMsIGFuZCB3aGljaCBlbmRwb2ludCdzIHggcG9zaXRpb24gaXMgb2Zmc2V0IGJ5IGEgcGFnZSBsYWJlbC5cblxuICAgICAgaWYgKHN0YXJ0WCA+IGVuZFgpIHtcbiAgICAgICAgc3RhcnRYID0gc3RhdGUub3JpZ2luc1tqXS5wQkNlbnRlclg7XG4gICAgICAgIGVuZFggPSBzdGF0ZS5wYWdlc1t4XS5sYWJlbC5zcGVjcy54ICsgc3RhdGUucGFnZXNbeF0ubGFiZWwuc3BlY3Mud2lkdGg7XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0WCA9PSBlbmRYKSB7XG4gICAgICAgIHN0YXJ0WCA9IHN0YXRlLm9yaWdpbnNbal0ucEJDZW50ZXJYO1xuICAgICAgICBlbmRYID0gc3RhdGUub3JpZ2luc1tqXS5wQkNlbnRlclg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydFggPVxuICAgICAgICAgIHN0YXRlLnBhZ2VzW2pdLmxhYmVsLnNwZWNzLnggKyBzdGF0ZS5wYWdlc1tqXS5sYWJlbC5zcGVjcy53aWR0aDtcbiAgICAgICAgZW5kWCA9IHN0YXRlLm9yaWdpbnNbeF0ucEJDZW50ZXJYO1xuICAgICAgfVxuICAgIH1cblxuICAgIGN1cnJMaW5rXG4gICAgICAuYXR0cigneDEnLCBzdGFydFgpXG4gICAgICAuYXR0cigneTEnLCBzdGF0ZS5vcmlnaW5zW2pdLnBCQ2VudGVyWSlcbiAgICAgIC5hdHRyKCd4MicsIGVuZFgpXG4gICAgICAuYXR0cigneTInLCBzdGF0ZS5vcmlnaW5zW3hdLnBCQ2VudGVyWSlcbiAgICAgIC5zdHlsZSgnb3BhY2l0eScsIGN1cnJMaW5rQWxwaGEpXG4gICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGN1cnJTdHJva2VXaWR0aClcbiAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsIGN1cnJWaXNpYmlsaXR5KTtcblxuICAgIC8vIENoZWNrIHRvIHNlZSBpZiBub2RlIGlzIGEgY29tcG9uZW50IGFuZCByZW5kZXIgZGFzaGVkIGxpbmUuXG4gICAgaWYgKFxuICAgICAgc3RhdGUucm93c1t4XS5FbnRpdHkgPT0gJ2NvbXBvbmVudCcgfHxcbiAgICAgIHN0YXRlLnJvd3Nbal0uRW50aXR5ID09ICdjb21wb25lbnQnXG4gICAgKSB7XG4gICAgICBjdXJyTGluay5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsICczLCAzJyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRTZWN0aW9uQ29sb3IgfSBmcm9tICcuLi9jb2xvcnMnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5cbmltcG9ydCB7IHVwZGF0ZVN0YXRlIH0gZnJvbSAnLi9wYWdlL2hvdmVyRWxsaXBzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ29ubmVjdGVkUGFnZXMocGFnZSkge1xuICBpZiAoIXBhZ2Uuc3RhdGVzLmhpZ2hsaWdodGVkRnJvbVNlbGVjdCkge1xuICAgIHBhZ2Uuc3RhdGVzLmhpZ2hsaWdodGVkRnJvbUhvdmVyID0gZmFsc2U7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShwYWdlKTtcbiAgZDMuc2VsZWN0QWxsKCcuaG92ZXJDb25uZWN0ZWRMaW5lJykucmVtb3ZlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlU2VsZWN0aW9uQ29ubmVjdGlvbnMoKSB7XG4gIGQzLnNlbGVjdEFsbCgnLnNlbGVjdENvbm5lY3RlZExpbmUnKS5yZW1vdmUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGlvbkNvbm5lY3Rpb25zKCkge1xuICAvLyBVcGRhdGUgY29ubmVjdGlvbiBoaWdobGlnaHRzXG4gIGhpZGVTZWxlY3Rpb25Db25uZWN0aW9ucygpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcGFnZSA9IHN0YXRlLnBhZ2VzW2ldO1xuICAgIGNvbnN0IHJvdyA9IHN0YXRlLnJvd3NbaV07XG5cbiAgICBpZiAocGFnZS5zdGF0ZXMuc2VsZWN0ZWQgJiYgcm93LkRpcmVjdENvbm5lY3Rpb25zKSB7XG4gICAgICBpZiAocm93LkRpcmVjdENvbm5lY3Rpb25zLnRyaW0oKSAhPSAnJykge1xuICAgICAgICBkcmF3Q29ubmVjdGVkUGFnZXMoaSwgJ3NlbGVjdCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWxsSGlnaGxpZ2h0ZWRDb25uZWN0aW9ucygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBhZ2UgPSBzdGF0ZS5wYWdlc1tpXTtcblxuICAgIGlmIChcbiAgICAgIHN0YXRlLnJvd3NbaV0uRGlyZWN0Q29ubmVjdGlvbnNWaXNpYmlsaXR5ID09ICd2aXNpYmxlIGxpbmUgd2l0aCBoaWdobGlnaHQnXG4gICAgKSB7XG4gICAgICBwYWdlLnN0YXRlcy5oaWdobGlnaHRlZEJ5RGVmYXVsdCA9IHRydWU7XG4gICAgICB1cGRhdGVTdGF0ZShwYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDb25uZWN0ZWRQYWdlcyhpbmQsIGN1cnJTdGF0ZSkge1xuICAvLyBMb2NhbCB2YXJzIGZvciBkYXRhXG4gIC8vIGN1cnJTTCA9IGN1cnJlbnQgc3RyaW5nIGxpbmtcbiAgLy8gQ0xBID0gY3Jvc3MgbGlua3MgYXJyYXlcbiAgY29uc3QgY3VyclNMID0gc3RhdGUucm93c1tpbmRdLkRpcmVjdENvbm5lY3Rpb25zO1xuICAvLyBjb25zdCBvcGFjaXR5ID0gMC41O1xuXG4gIC8vIFNwbGl0IGN1cnIgc3RyaW5nIGludG8gYXJyYXkuXG4gIGNvbnN0IGN1cnJDTEEgPSBjdXJyU0wuc3BsaXQoJywgJyk7XG5cbiAgLy8gU2V0IHVwIHN0cm9rZSB3aWR0aCBiYXNlZCBvbiBjdXJyZW50IHpvb20gbGV2ZWwuXG4gIGNvbnN0IHNXID0gTWF0aC5jZWlsKHN0YXRlLnRhcmdldFpvb21MZXZlbCAqIDMpO1xuXG4gIC8vIExvb3AgdGhydSBuZXdseSBjcmVhdGVkIENyb3NzbGluayBBcnJheSwgVGhlbiBmaW5kIG1hdGNoaW5nIGFkZHJlc3Nlcy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyQ0xBLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VyckNMU1N0cmluZyA9IGN1cnJDTEFbaV07XG5cbiAgICAvLyBDb21wYXJlIHNwZWNpZmllZCBhZGRyZXNzZXMgaW4gY3VyckNMQSBhcnJheSB0byBhZGRyZXNzZXMgcHVsbGVkIG91dCBvZiBSb3dzIG9iai5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHN0YXRlLnJvd3MubGVuZ3RoOyB4KyspIHtcbiAgICAgIC8vIElmIHRoZXJlJ3MgYSBtYXRjaCwgd2UgZHJhdyBhIGNyb3NzIGxpbmsuXG4gICAgICBpZiAoXG4gICAgICAgIHN0YXRlLnJvd3NbeF0uQWRkcmVzcyA9PSBjdXJyQ0xTU3RyaW5nIHx8XG4gICAgICAgIHN0YXRlLnJvd3NbeF0uTmFtZSA9PSBjdXJyQ0xTU3RyaW5nXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IHN0YXRlLnBhZ2VzW3hdO1xuICAgICAgICBsZXQgY29ubmVjdExpbmVDbGFzcztcblxuICAgICAgICAvLyBUaGUgY29ycmVzcG9uZGluZyBob3ZlciBhcnJheSBlbGxpcHNlIGJlY29tZXMgdmlzaWJsZS5cblxuICAgICAgICBpZiAoY3VyclN0YXRlID09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgcGFnZS5zdGF0ZXMuaGlnaGxpZ2h0ZWRGcm9tU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICBwYWdlLnN0YXRlcy5oaWdobGlnaHRlZEZyb21Ib3ZlciA9IGZhbHNlO1xuICAgICAgICAgIGNvbm5lY3RMaW5lQ2xhc3MgPSAnc2VsZWN0Q29ubmVjdGVkTGluZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnZS5zdGF0ZXMuaGlnaGxpZ2h0ZWRGcm9tSG92ZXIgPSB0cnVlO1xuICAgICAgICAgIGNvbm5lY3RMaW5lQ2xhc3MgPSAnaG92ZXJDb25uZWN0ZWRMaW5lJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVN0YXRlKHBhZ2UpO1xuXG4gICAgICAgIGNvbnN0IHNlY3Rpb25JZCA9IHN0YXRlLnJvd3NbeF0uU2VjdGlvbjtcbiAgICAgICAgY29uc3QgY3VyckhleCA9IGdldFNlY3Rpb25Db2xvcihzZWN0aW9uSWQpO1xuXG4gICAgICAgIC8vIFNldCB1cCBhcHByb3ByaWF0ZSBDbGFzcyBiYXNlZCBvbiBzdGF0ZVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIGNvbm5lY3Rpb24gbGluZS5cbiAgICAgICAgLy8gU2VjdGlvbiBjb2xvciBzaG91bGQgYmUgcmVwcmVzZW50ZWQuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzICYmXG4gICAgICAgICAgc3RhdGUucm93c1tpbmRdLkRpcmVjdENvbm5lY3Rpb25zVmlzaWJpbGl0eSA9PSAndmlzaWJsZSBvbiBob3ZlciBvbmx5J1xuICAgICAgICApIHtcbiAgICAgICAgICBzdGF0ZS5zdmdEb2NcbiAgICAgICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAgICAgLmF0dHIoJ3gxJywgc3RhdGUub3JpZ2luc1tpbmRdLnBCQ2VudGVyWClcbiAgICAgICAgICAgIC5hdHRyKCd5MScsIHN0YXRlLm9yaWdpbnNbaW5kXS5wQkNlbnRlclkpXG4gICAgICAgICAgICAuYXR0cigneDInLCBzdGF0ZS5vcmlnaW5zW3hdLnBCQ2VudGVyWClcbiAgICAgICAgICAgIC5hdHRyKCd5MicsIHN0YXRlLm9yaWdpbnNbeF0ucEJDZW50ZXJZKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBjdXJySGV4KVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGNvbm5lY3RMaW5lQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBzdmdDb250YWluZXIgfSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IHsgZGVncmVlc1RvUmFkaWFucyB9IGZyb20gJy4uL21hdGgnO1xuaW1wb3J0IHsgc3ZnQ29udGFpbmVyU2VsZWN0aW9uIH0gZnJvbSAnLi4vc2VsZWN0aW9ucyc7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7XG4gIHN0YXJ0U2Nyb2xsVHJhbnNpdGlvbixcbiAgc3RvcFNjcm9sbFRyYW5zaXRpb24sXG59IGZyb20gJy4uL3RyYW5zaXRpb25zL3Njcm9sbCc7XG5pbXBvcnQgeyBzdGFydFpvb21UcmFuc2l0aW9uLCBzdG9wWm9vbVRyYW5zaXRpb24gfSBmcm9tICcuLi90cmFuc2l0aW9ucy96b29tJztcbmltcG9ydCB7IHVwZGF0ZVZpcyB9IGZyb20gJy4uL3Zpcyc7XG5cbmltcG9ydCB7IGhpZGVOb2RlUGFuZWwgfSBmcm9tICcuL3BhZ2UvZGV0YWlsc0NhcmQnO1xuXG4vLyAvIC8vLy8vLy8gQ1VKIExBWUVSIENSRUFUSU9OIC8vLy8vLy8vLy8vLy8vLy9cblxuLy8gU2V0IHVwIGFuZCBDcmVhdGUgdGhlIGNvbm5lY3RvcnMgYW5kIHNlZ21lbnRzIHRoYXQgbWFrZSB1cCB0aGUgQ1VKIHBhdGh3YXlzLlxuLy8gRXZlcnkgcGFnZSBlbGVtZW50IHdpbGwgaGF2ZSAyIHNldHMgb2YgY29ubmVjdG9ycy5cbi8vIE9uZSBzZXQgbGl2ZXMgb24gYSBwbGFuZSB0aGF0IGlzIG92ZXJsYWlkIG9uIHRoZSBtYXAuXG4vLyBUaGUgb3RoZXIgc2V0IGxpdmVzIG9uIGEgcGxhbmUgdGhhdCBzaXRzIGJlaGluZCB0aGUgbWFwLlxuLy8gU2VlIHNrZXRjaGVzL3BlcnNwZWN0aXZlX3BsYW5lc19PTEQucG5nXG4vLyBUdXJuaW5nIG9uIGFuZCBvZmYgdmlzaWJsaXR5IG9uIGEgY29tYmluYXRpb24gb2YgdGhlc2UgZWxlbWVudHMgb24gYm90aCBwbGFuZXMgZW5hYmxlcyB1cyB0byBnZW5lcmF0ZSB0aGUgQ1VKIHBhdGh3YXkgd2hpbGUgbWFpbnRpbmdpbmcgdGhlIDIuNUQgcGVyc3BlY3RpdmUuXG4vLyBZb3UnbGwgc2VlIHRoaXMgbm90ZWQgaW4gc29tZSBvZiB0aGUgZHJhdyBmdW5jdGlvbnMgYXMgd2VsbC5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNVSkNvbm5lY3RvcnMoKSB7XG4gIHN0YXRlLmN1akNvbm5lY3RvcnMgPSBbXTtcbiAgc3RhdGUuY3VqRW5kUG9pbnRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gU2VlIHNrZXRjaGVzL2N1al9wYXRod2F5c19PTEQucG5nXG4gICAgLy8gbGV0IGN1cnJMYXllckVuZFBvaW50ID0gY3VqT3ZlcmxheS5hcHBlbmQoJ2VsbGlwc2UnKS5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKS5zdHlsZSgnZmlsbCcsICdmZmZmZmYnKVxuICAgIGNvbnN0IGN1cnJGcm9udEVuZFBvaW50ID0gc3RhdGUuY3VqT3ZlcmxheVxuICAgICAgLmFwcGVuZCgnZWxsaXBzZScpXG4gICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgIC5zdHlsZSgnZmlsbCcsICc0NTVBNjQnKTtcbiAgICBjb25zdCBjdXJyQmFja0VuZFBvaW50ID0gc3RhdGUuY3VqT3ZlcmxheVxuICAgICAgLmFwcGVuZCgnZWxsaXBzZScpXG4gICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgIC5zdHlsZSgnZmlsbCcsICc0NTVBNjQnKTtcblxuICAgIC8vIEFsbCBQYXRod2F5IExpbmVzIGFyZSBzdG9yZWQgaW4gdGhpcyBvYmogZm9yIGZ1dHVyZSByZWZlcmVuY2UuXG4gICAgLy8gT25jZSB0aGUgQ1VKIGlzIGRyYXduLCBlYWNoIHNlZ21lbnQgaXMgdHVybmVkIG9uL29mZiB0aGVuIGVhY2ggc2VnbWVudCBpcyByZXBvc2l0aW9uZWQgdG8gZm9ybSBvdmVyYWxsIENVSiBsaW5lLlxuICAgIGNvbnN0IGVuZHBvaW50c09iaiA9IHtcbiAgICAgIGZyb250RW5kUG9pbnQ6IGN1cnJGcm9udEVuZFBvaW50LFxuICAgICAgYmFja0VuZFBvaW50OiBjdXJyQmFja0VuZFBvaW50LFxuICAgIH07XG5cbiAgICBzdGF0ZS5jdWpFbmRQb2ludHMucHVzaChlbmRwb2ludHNPYmopO1xuICB9XG5cbiAgLy8gQ09OU0lERVIgRklYSU5HOiBUaGUgZm9sbG93aW5nIGNvdWxkIHByb2JhYmx5IGJlIHNlcGFyYXRlZCBpbnRvIGFub3RoZXIgZnVuY3Rpb24uXG4gIC8vIENVSiBTdGFydCAnRG90cycgYXJlIGNyZWF0ZWQgYW5kIGFkZGVkIHRvIHRoZSB2aXN1YWxpemF0aW9uLlxuICBmb3IgKGxldCBjID0gMDsgYyA8IHN0YXRlLmN1alJvd3MubGVuZ3RoOyBjKyspIHtcbiAgICAvLyBSRVNFVCBDT05ORUNUT1JTIEFSUkFZXG4gICAgc3RhdGUuY3VqQ29ubmVjdG9ycyA9IFtdO1xuXG4gICAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW2NdO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFycmF5IG9mIHN0ZXBzIGxpc3RlZCB3aXRoaW4gc3BlY2lmaWMgc2hlZXQuXG4gICAgZm9yIChsZXQgaCA9IDA7IGggPCBzdGVwcy5sZW5ndGg7IGgrKykge1xuICAgICAgY29uc3QgY3VyckNvbm5lY3QgPSBzdGF0ZS5jdWpPdmVybGF5XG4gICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICBzdGF0ZS5jdWpDb25uZWN0b3JzLnB1c2goY3VyckNvbm5lY3QpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlcyBsb2NhbCBhcnJheSBvZiBjb25uZWN0aW9ucywgbG9hZHMgaXQgaW50byBhbiBPYmplY3QsIHRoZW4gUHVzaGVzIGludG8gQSBDb2xsZWN0aW9ucyBBcnJheVxuICAgIGNvbnN0IGN1akNvbm5lY3Rvck9iaiA9IHsgY29ubmVjdGlvbnM6IHN0YXRlLmN1akNvbm5lY3RvcnMgfTtcbiAgICBzdGF0ZS5jdWpDb25uZWN0Q29sbGVjdGlvbi5wdXNoKGN1akNvbm5lY3Rvck9iaik7XG5cbiAgICAvLyBDUkVBVEVTIFNUQVJUSU5HIFBPSU5UXG4gICAgY29uc3QgY3VyclN0YXJ0SUQgPSBgc3Mke2N9YDtcbiAgICBjb25zdCBjdXJyU3RhcnRPdmVybGF5SUQgPSBgc08ke2N9YDtcbiAgICBjb25zdCBjdXJyU3RhcnRUZXh0SUQgPSBgc1Qke2N9YDtcbiAgICBjb25zdCBsYWJlbCA9IHN0ZXBzWzBdLlRpdGxlO1xuXG4gICAgLy8gQ09OU0lERVIgRklYSU5HOiBUaGVyZSBhcmUgdHdvIGluc3RhbmNlcyBvZiBlYWNoIHN0YXJ0aW5nICdkb3QnLlxuICAgIC8vIE9uZSBsaXZlcyBvbiB0aGUgc3ZnRG9jIHBsYW5lLCB3aGVyZSBhbGwgdGhlIG90aGVyIHZpc3VhbGl6YXRpb24gZWxlbWVudHMgYXJlIHJlbmRlcmVkLlxuICAgIC8vIFRoZSBvdGhlciBsaXZlcyBvbiB0aGUgb3ZlcmxheSBwbGFuZS5cblxuICAgIC8vIENVSiBTdGFydCB0aGF0IGxpdmVzIG9uIGJhY2tncm91bmQgcGxhbmUgKHN2Z0RvYyksIGJlaGluZCBwYWdlIGljb25zXG4gICAgc3RhdGUuY3VqU3RhcnQgPSBzdGF0ZS5jdWpPdmVybGF5XG4gICAgICAuYXBwZW5kKCdlbGxpcHNlJylcbiAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgLmF0dHIoJ2lkJywgY3VyclN0YXJ0SUQpXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJySURWYWwgPSB0aGlzLmlkLnNwbGl0KCdzcycpO1xuICAgICAgICBzdGF0ZS5hY3RpdmVDVUpJbmQgPSBOdW1iZXIoY3VycklEVmFsWzFdKTtcbiAgICAgICAgY3VqU3RhcnRDbGljaygpO1xuICAgICAgfSk7XG5cbiAgICAvLyBDVUogT3ZlcmxheSBTdGFydCBkb3QgdGhhdCBsaXZlcyBvbiBvdmVybGF5IG9uIHRvcCBvZiBwYWdlc1xuICAgIHN0YXRlLmN1ak92ZXJsYXlTdGFydCA9IHN0YXRlLmN1ak92ZXJsYXlcbiAgICAgIC5hcHBlbmQoJ2VsbGlwc2UnKVxuICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAuYXR0cignaWQnLCBjdXJyU3RhcnRPdmVybGF5SUQpXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjdXJySURWYWwgPSB0aGlzLmlkLnNwbGl0KCdzTycpO1xuICAgICAgICBzdGF0ZS5hY3RpdmVDVUpJbmQgPSBOdW1iZXIoY3VycklEVmFsWzFdKTtcbiAgICAgICAgY3VqU3RhcnRDbGljaygpO1xuICAgICAgfSk7XG5cbiAgICAvLyBUZXh0IGFwcGVuZGVkIHRvIGVhY2ggc3RhcnQgJ2RvdCcgbGl2ZXMgb24gdG9wIG9mIGVhY2ggcGFnZS5cbiAgICBzdGF0ZS5jdWpTdGFydFRleHQgPSBzdmdDb250YWluZXJTZWxlY3Rpb25cbiAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgLnRleHQobGFiZWwpXG4gICAgICAuYXR0cignaWQnLCBjdXJyU3RhcnRUZXh0SUQpXG4gICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJJRFZhbCA9IHRoaXMuaWQuc3BsaXQoJ3NUJyk7XG4gICAgICAgIHN0YXRlLmFjdGl2ZUNVSkluZCA9IE51bWJlcihjdXJySURWYWxbMV0pO1xuICAgICAgICBjdWpTdGFydENsaWNrKCk7XG4gICAgICB9KTtcblxuICAgIC8vIEFkZCBDVUogc3RhcnQgbGFiZWxcbiAgICBjb25zdCBjdXJyQ1VKU3RhcnQgPSB7XG4gICAgICBzdGFydDogc3RhdGUuY3VqU3RhcnQsXG4gICAgICBvdmVybGF5U3RhcnQ6IHN0YXRlLmN1ak92ZXJsYXlTdGFydCxcbiAgICAgIHRleHQ6IHN0YXRlLmN1alN0YXJ0VGV4dCxcbiAgICB9OyAvLyBQVVNIRVMgT0JKRUNUIElOVE8gQVJSQVlcbiAgICBzdGF0ZS5jdWpTdGFydHMucHVzaChjdXJyQ1VKU3RhcnQpO1xuICB9XG59XG5cbi8vIENyZWF0ZSBiYXNpYyBDVUogY2FyZCwgYW5kIHNldCBldmVudHMgbGlzdGVuZXJzIGZvciBjYXJkIGFjdGlvbnMuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ1VKQ2FyZCgpIHtcbiAgc3RhdGUuY3VyckNhcmQgPSBkMy5zZWxlY3QoJyNjdWpDYXJkJyk7XG4gIGQzLnNlbGVjdCgnI25leHRTdGVwJykub24oJ2NsaWNrJywgZ2V0TmV4dENVSkNhcmQpO1xuICBkMy5zZWxlY3QoJyNwcmV2U3RlcCcpLm9uKCdjbGljaycsIGdldFByZXZDVUpDYXJkKTtcbiAgZDMuc2VsZWN0KCcjY2xvc2VYJykub24oJ2NsaWNrJywgY3VqU3RhcnRDbGljayk7XG59XG5cbi8vIFJlc2l6ZXMgQ1VKIGNhcmQgd2hlbiBzY3JlZW4gaXMgcmVzaXplZC5cbmV4cG9ydCBmdW5jdGlvbiByZXNpemVDVUpDYXJkKCkge1xuICAvLyBTZXQgTWF4IEhlaWdodCBvZiBTY3JvbGwgQ29udGFpbmVyXG4gIGNvbnN0IG9mZnNldEhlaWdodCA9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1akhlYWRlcicpLmNsaWVudEhlaWdodCArXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1ak5hdicpLmNsaWVudEhlaWdodCArXG4gICAgMjQ7XG4gIGQzLnNlbGVjdCgnI2N1alNjcm9sbENvbnRhaW5lcicpLnN0eWxlKFxuICAgICdtYXgtaGVpZ2h0JyxcbiAgICBzdGF0ZS5oZWlnaHQgLSAzODggLSBvZmZzZXRIZWlnaHRcbiAgKTtcbn1cblxuLy8gQ0hFQ0sgRk9SIFBBR0UtIE5BTUUgTUFUQ0ggQUhFQUQgT0YgRFJBV0lORyBBTkQgQlVJTERJTkdcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDVUpBcnJheSgpIHtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBzdGF0ZS5jdWpSb3dzLmxlbmd0aDsgaisrKSB7XG4gICAgbGV0IG1hdGNoQ291bnQgPSAwO1xuXG4gICAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW2pdO1xuICAgIGZvciAobGV0IGggPSAwOyBoIDwgc3RlcHMubGVuZ3RoOyBoKyspIHtcbiAgICAgIGxldCBtYXRjaEZvdW5kID0gZmFsc2U7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoc3RlcHNbaF0uUGFnZSA9PSBzdGF0ZS5yb3dzW2ldLk5hbWUpIHtcbiAgICAgICAgICBtYXRjaEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBtYXRjaENvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1hdGNoRm91bmQgPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gUkVNT1ZFIElURU0gRlJPTSBTVEVQIEFSUkFZXG4gICAgICAgIHN0YXRlLmN1alJvd3Nbal0uc3BsaWNlKGgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaENvdW50ID09IDApIHtcbiAgICAgIC8vIFJFTU9WRSBBUlJBWSBBTExUT0dFVEhFUlxuICAgICAgc3RhdGUuY3VqUm93cy5zcGxpY2UoaiwgMSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBzdGF0ZS5jdWpSb3dzLmxlbmd0aDsgaisrKSB7XG4gICAgaWYgKHN0YXRlLmN1alJvd3Nbal0ubGVuZ3RoID09IDApIHtcbiAgICAgIHN0YXRlLmN1alJvd3Muc3BsaWNlKGosIDEpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ1VKTWFya2VycygpIHtcbiAgLy8gRklSU1QsIExPT1AgVEhSVSBDVUogU0hFRVRTXG4gIGZvciAobGV0IGogPSAwOyBqIDwgc3RhdGUuY3VqUm93cy5sZW5ndGg7IGorKykge1xuICAgIC8vIE5FWFQsIFB1bGwgb3V0IGFycmF5IG9mIHN0ZXBzIGZyb20gdGhlIGFib3ZlIGFycmF5LlxuICAgIGNvbnN0IHN0ZXBzID0gc3RhdGUuY3VqUm93c1tqXTtcblxuICAgIC8vIFJlc2V0IEN1cnJlbnQgTWFya2VyIEFycmF5c1xuICAgIHN0YXRlLmN1ak1hcmtlckFycmF5ID0gW107XG5cbiAgICAvLyBMb29wIHRocm91Z2ggYXJyYXkgb2Ygc3RlcHMgbGlzdGVkIHdpdGhpbiBzcGVjaWZpYyBzaGVldC5cbiAgICBmb3IgKGxldCBoID0gMDsgaCA8IHN0ZXBzLmxlbmd0aDsgaCsrKSB7XG4gICAgICAvLyBOZXh0LCBldmFsdWF0ZSByb3dzIGFycmF5IHRvIG1hdGNoIHN0ZXBzIHRvIHBhZ2VzIHJlbmRlcmVkIHdpdGhpbiB0aGUgbWFwLlxuICAgICAgLy8gTk9URTogUm93cyBhbmQgT3JpZ2lucyBBcnJheSBoYXZlIHNhbWUgbGVuZ3RoLlxuICAgICAgLy8gU2luY2UgdGhlcmUncyBhIDE6MSByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgaW5kZXhlcyBvZiBib3RoIGFycmF5cywgd2UgbG9vcCB0aHJ1IG9uZSwgYnV0IHVzZSB0aGUgc2FtZSBpbmRleCB2YWx1ZSB0byByZWZlcmVuY2UgaW5mbyBpbiB0aGUgb3RoZXIgYXJyYXkuXG5cbiAgICAgIGNvbnN0IGN1cnJDVUpDaXJjbGUgPSBzdGF0ZS5zdmdEb2MuYXBwZW5kKCdlbGxpcHNlJyk7XG5cbiAgICAgIGNvbnN0IGN1cnJQYWdlTmFtZSA9IHN0ZXBzW2hdLlBhZ2U7XG5cbiAgICAgIGNvbnN0IGN1cnJUZXh0ID0gc3ZnQ29udGFpbmVyU2VsZWN0aW9uXG4gICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAuY2xhc3NlZCgnY3VqTm8nLCB0cnVlKVxuICAgICAgICAudGV4dCgnJylcbiAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICBjdXJyQ1VKQ2lyY2xlLnN0eWxlKCd2aWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgIGN1cnJUZXh0LnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICAvLyBTdG9yZSBuZXdseSBjcmVhdGVkIGVsbGlwc2UgYW5kIGl0cyBhdHRyaWJ1dGVzIGluIGEgbG9jYWwgYXJyYXkuXG4gICAgICBjb25zdCBjdXJyQ2lyY2xPYmogPSB7XG4gICAgICAgIHBhZ2U6IGN1cnJQYWdlTmFtZSxcbiAgICAgICAgZWxsaXBzZU9iajogY3VyckNVSkNpcmNsZSxcbiAgICAgICAgc3RlcFRleHQ6IGN1cnJUZXh0LFxuICAgICAgICBpbmQ6IGgsXG4gICAgICB9O1xuICAgICAgc3RhdGUuY3VqTWFya2VyQXJyYXkucHVzaChjdXJyQ2lyY2xPYmopO1xuICAgIH1cblxuICAgIC8vIE9uY2UgQXJyYXkgb2YgQ1VKIENpcmNsZXMgaXMgQnVpbHQsIFN0b3JlIGl0IGluIENvbGxlY3Rpb24gQXJyYXlcbiAgICBjb25zdCBjdWpNYXJrZXJPYmogPSB7IG1hcmtlcnM6IHN0YXRlLmN1ak1hcmtlckFycmF5IH07XG4gICAgc3RhdGUuY3VqTWFya2VyQ29sbGVjdGlvbi5wdXNoKGN1ak1hcmtlck9iaik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyTWFya2VycygpIHtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBzdGF0ZS5jdWpSb3dzLmxlbmd0aDsgaisrKSB7XG4gICAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW2pdO1xuXG4gICAgLy8gUmVzZXQgQ3VycmVudCBNYXJrZXIgQXJyYXlzXG4gICAgbGV0IGN1cnJDVUpNYXJrZXJBcnJheSA9IFtdO1xuICAgIGN1cnJDVUpNYXJrZXJBcnJheSA9IHN0YXRlLmN1ak1hcmtlckNvbGxlY3Rpb25bal0ubWFya2VycztcblxuICAgIC8vIFJFU0VTVFMgU1RBUlQgTUFSS0VSIFRFWFQgQU5EIEVMTElQU0UgQ09MT1JcbiAgICBzdGF0ZS5jdWpTdGFydHNbal0udGV4dC5zdHlsZSgnY29sb3InLCAnNDI4NWY0Jyk7XG4gICAgc3RhdGUuY3VqU3RhcnRzW2pdLnN0YXJ0LnN0eWxlKCdmaWxsJywgJzQyODVGNCcpO1xuICAgIHN0YXRlLmN1alN0YXJ0c1tqXS5vdmVybGF5U3RhcnQuc3R5bGUoJ2ZpbGwnLCAnNDI4NUY0Jyk7XG5cbiAgICAvLyBMb29wIHRocm91Z2ggYXJyYXkgb2Ygc3RlcHMgbGlzdGVkIHdpdGhpbiBzcGVjaWZpYyBzaGVldC5cbiAgICBmb3IgKGxldCBoID0gMDsgaCA8IHN0ZXBzLmxlbmd0aDsgaCsrKSB7XG4gICAgICBjb25zdCBjdXJyQ2lyY2xlID0gY3VyckNVSk1hcmtlckFycmF5W2hdLmVsbGlwc2VPYmo7XG4gICAgICBjb25zdCBjdXJyVGV4dE9iaiA9IGN1cnJDVUpNYXJrZXJBcnJheVtoXS5zdGVwVGV4dDtcbiAgICAgIGNvbnN0IGN1cnJQYWdlTmFtZSA9IHN0ZXBzW2hdLlBhZ2U7XG4gICAgICBsZXQgbWF0Y2hlZEluZCA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3VyclBhZ2VOYW1lID09IHN0YXRlLnJvd3NbaV0uTmFtZSkge1xuICAgICAgICAgIG1hdGNoZWRJbmQgPSBpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1cnJYID0gc3RhdGUub3JpZ2luc1ttYXRjaGVkSW5kXS5wQkNlbnRlclg7XG4gICAgICBjb25zdCBjdXJyWSA9IHN0YXRlLm9yaWdpbnNbbWF0Y2hlZEluZF0ucEJDZW50ZXJZO1xuXG4gICAgICBjdXJyQ2lyY2xlXG4gICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgICAgICAuY2xhc3NlZCgndHJhbnMnLCBmYWxzZSlcbiAgICAgICAgLmF0dHIoJ3J4JywgMClcbiAgICAgICAgLmF0dHIoJ3J5JywgMClcbiAgICAgICAgLmF0dHIoJ2N4JywgY3VyclgpXG4gICAgICAgIC5hdHRyKCdjeScsIGN1cnJZKVxuICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcblxuICAgICAgY3VyclRleHRPYmouc3R5bGUoJ3Zpc2libGl0eScsICdoaWRkZW4nKS5zdHlsZSgnb3BhY2l0eScsIDApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3TWFya2VycygpIHtcbiAgLy8gUHVsbCBvdXQgYXJyYXkgb2Ygc3RlcHMgZnJvbSB0aGUgYWJvdmUgYXJyYXkuXG4gIGNvbnN0IHN0ZXBzID0gc3RhdGUuY3VqUm93c1tzdGF0ZS5hY3RpdmVDVUpJbmRdO1xuXG4gIC8vIFJlc2V0IEN1cnJlbnQgTWFya2VyIEFycmF5c1xuICBsZXQgY3VyckNVSk1hcmtlckFycmF5ID0gW107XG4gIGN1cnJDVUpNYXJrZXJBcnJheSA9IHN0YXRlLmN1ak1hcmtlckNvbGxlY3Rpb25bc3RhdGUuYWN0aXZlQ1VKSW5kXS5tYXJrZXJzO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBhcnJheSBvZiBzdGVwcyBsaXN0ZWQgd2l0aGluIHNwZWNpZmljIHNoZWV0LlxuICBmb3IgKGxldCBoID0gMDsgaCA8IHN0ZXBzLmxlbmd0aDsgaCsrKSB7XG4gICAgY29uc3QgY3VyckNpcmNsZSA9IGN1cnJDVUpNYXJrZXJBcnJheVtoXS5lbGxpcHNlT2JqO1xuICAgIGNvbnN0IGN1cnJUZXh0ID0gY3VyckNVSk1hcmtlckFycmF5W2hdLnN0ZXBUZXh0O1xuICAgIGNvbnN0IGN1cnJQYWdlTmFtZSA9IGN1cnJDVUpNYXJrZXJBcnJheVtoXS5wYWdlO1xuICAgIGxldCBtYXRjaGVkSW5kID0gLTE7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjdXJyUGFnZU5hbWUgPT0gc3RhdGUucm93c1tpXS5OYW1lKSB7XG4gICAgICAgIG1hdGNoZWRJbmQgPSBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaGVkSW5kID4gLTEpIHtcbiAgICAgIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICAgIGNvbnN0IG51bWJlclggPVxuICAgICAgICAgIHN0YXRlLm9yaWdpbnNbbWF0Y2hlZEluZF0ubEJDb3JuZXJYIC0gc3RhdGUucGFnZVdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgbnVtYmVyWSA9XG4gICAgICAgICAgc3RhdGUub3JpZ2luc1ttYXRjaGVkSW5kXS5sQkNvcm5lclkgLVxuICAgICAgICAgIChNYXRoLmNvcyhkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpKSAqXG4gICAgICAgICAgICBzdGF0ZS5wYWdlV2lkdGgpIC9cbiAgICAgICAgICAgIDY7XG4gICAgICAgIGNvbnN0IG51bWJlclN0ciA9IGggKyAxO1xuICAgICAgICBjb25zdCBjdXJySGV4ID0gc3RhdGUucGFnZUNvbG9yc1ttYXRjaGVkSW5kXTtcbiAgICAgICAgY29uc3QgZGVnU3RyaW5nID0gYHJvdGF0ZSgke3N0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXN9ZGVnKSBza2V3WCgtNDBkZWcpYDtcblxuICAgICAgICAvLyBTdHlsZSBOdW1iZXIgVGV4dFxuICAgICAgICBjdXJyVGV4dFxuICAgICAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxuICAgICAgICAgIC50ZXh0KG51bWJlclN0cilcbiAgICAgICAgICAuc3R5bGUoJ3RvcCcsIG51bWJlclkpXG4gICAgICAgICAgLnN0eWxlKCdsZWZ0JywgbnVtYmVyWClcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHN0YXRlLnN0ZXBOb0xhYmVsU2l6ZSlcbiAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgY3VyckhleCArIDEwKVxuICAgICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywgZGVnU3RyaW5nKVxuICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAxMDApXG4gICAgICAgICAgLmNsYXNzZWQoJ3RyYW5zJywgZmFsc2UpO1xuXG4gICAgICAgIGN1cnJDaXJjbGVcbiAgICAgICAgICAuYXR0cigncngnLCBzdGF0ZS5wYWdlSGVpZ2h0ICogMS41KVxuICAgICAgICAgIC5hdHRyKCdyeScsIChzdGF0ZS5wYWdlSGVpZ2h0ICogMS41KSAvIDIpXG4gICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGN1cnJIZXggKyAxMClcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGN1cnJIZXggKyAzMClcbiAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpXG4gICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMTAwKVxuICAgICAgICAgIC5jbGFzc2VkKCd0cmFucycsIGZhbHNlKTtcblxuICAgICAgICAvLyBISURFIERVUklORyBUUkFOU0lUSU9OIEFOSU1BVElPTlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyclRleHQuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgIGN1cnJDaXJjbGUuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1hcmtlcnMoKSB7XG4gIC8vIFB1bGwgb3V0IGFycmF5IG9mIHN0ZXBzIGZyb20gdGhlIGFib3ZlIGFycmF5LlxuICBjb25zdCBzdGVwcyA9IHN0YXRlLmN1alJvd3Nbc3RhdGUuYWN0aXZlQ1VKSW5kXTtcblxuICAvLyBSZXNldCBDdXJyZW50IE1hcmtlciBBcnJheXNcbiAgbGV0IGN1cnJDVUpNYXJrZXJBcnJheSA9IFtdO1xuICBjdXJyQ1VKTWFya2VyQXJyYXkgPSBzdGF0ZS5jdWpNYXJrZXJDb2xsZWN0aW9uW3N0YXRlLmFjdGl2ZUNVSkluZF0ubWFya2VycztcblxuICAvLyBMb29wIHRocm91Z2ggYXJyYXkgb2Ygc3RlcHMgbGlzdGVkIHdpdGhpbiBzcGVjaWZpYyBzaGVldC5cbiAgZm9yIChsZXQgaCA9IDA7IGggPCBzdGVwcy5sZW5ndGg7IGgrKykge1xuICAgIGNvbnN0IGN1cnJDaXJjbGUgPSBjdXJyQ1VKTWFya2VyQXJyYXlbaF0uZWxsaXBzZU9iajtcbiAgICBjb25zdCBjdXJyVGV4dCA9IGN1cnJDVUpNYXJrZXJBcnJheVtoXS5zdGVwVGV4dDtcbiAgICBjb25zdCBjdXJyUGFnZU5hbWUgPSBjdXJyQ1VKTWFya2VyQXJyYXlbaF0ucGFnZTtcbiAgICBjb25zdCByYWRpdXNUaHJlc2hvbGQgPSAoc3RhdGUucGFnZUhlaWdodCAvIDQwKSAqIDk7XG4gICAgY29uc3QgY3VyclJhZGl1c09mZnNldCA9IGdldFJhZGl1c09mZnNldChcbiAgICAgIHN0YXRlLmFjdGl2ZUNVSkluZCxcbiAgICAgIGgsXG4gICAgICBjdXJyUGFnZU5hbWUsXG4gICAgICByYWRpdXNUaHJlc2hvbGRcbiAgICApO1xuICAgIGxldCBtYXRjaGVkSW5kID0gMDtcbiAgICBsZXQgY2lyY2xlQWxwaGEgPSAnMDUnO1xuICAgIGxldCB0ZXh0QWxwaGEgPSAwO1xuICAgIGxldCBjaXJjbGVTdHJva2VBbHBoYSA9IDMwO1xuXG4gICAgLy8gQ2hlY2sgZm9yIEhvdmVyIHN0YXRlXG4gICAgaWYgKGggPT0gc3RhdGUuYWN0aXZlU3RlcEluZCkge1xuICAgICAgY2lyY2xlQWxwaGEgPSA2MDtcbiAgICAgIHRleHRBbHBoYSA9IDAuNDtcbiAgICAgIGNpcmNsZVN0cm9rZUFscGhhID0gODA7XG5cbiAgICAgIC8vIENoZWNrIGZvciBjaXJjbGVzIHRoYXQgc2hhcmUgc2FtZSB3aWR0aC9wb3NpdGlvbiwgdGhlbiBzZXQgYWxwaGEgdG8gMC5cbiAgICB9IGVsc2UgaWYgKGN1cnJSYWRpdXNPZmZzZXQgPiByYWRpdXNUaHJlc2hvbGQpIHtcbiAgICAgIGNpcmNsZUFscGhhID0gJzAxJztcbiAgICAgIGNpcmNsZVN0cm9rZUFscGhhID0gJzA1JztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjdXJyUGFnZU5hbWUgPT0gc3RhdGUucm93c1tpXS5OYW1lKSB7XG4gICAgICAgIG1hdGNoZWRJbmQgPSBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGN1cnJIZXggPSBzdGF0ZS5wYWdlQ29sb3JzW21hdGNoZWRJbmRdLmhleDtcblxuICAgIC8vIFN0eWxlIE51bWJlciBUZXh0XG4gICAgY3VyclRleHRcbiAgICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxuICAgICAgLnN0eWxlKCdjb2xvcicsIGN1cnJIZXgpXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCB0ZXh0QWxwaGEpO1xuXG4gICAgbGV0IGNpcmNsZVdpZHRoO1xuICAgIGxldCBjaXJjbGVIZWlnaHQ7XG5cbiAgICBpZiAoc3RhdGUuZmxhdHRlbk1hcCkge1xuICAgICAgY2lyY2xlV2lkdGggPSBzdGF0ZS5wYWdlSGVpZ2h0IC8gMjtcbiAgICAgIGNpcmNsZUhlaWdodCA9IHN0YXRlLnBhZ2VIZWlnaHQgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaXJjbGVXaWR0aCA9IHN0YXRlLnBhZ2VIZWlnaHQgKiAxLjUgLSBjdXJyUmFkaXVzT2Zmc2V0O1xuICAgICAgY2lyY2xlSGVpZ2h0ID0gc3RhdGUucGFnZUhlaWdodCAtIGN1cnJSYWRpdXNPZmZzZXQ7XG4gICAgfVxuXG4gICAgY3VyckNpcmNsZVxuICAgICAgLmF0dHIoJ3J4JywgY2lyY2xlV2lkdGgpXG4gICAgICAuYXR0cigncnknLCBjaXJjbGVIZWlnaHQpXG4gICAgICAuc3R5bGUoJ2ZpbGwnLCBjdXJySGV4ICsgY2lyY2xlQWxwaGEpXG4gICAgICAuc3R5bGUoJ3N0cm9rZScsIGN1cnJIZXggKyBjaXJjbGVTdHJva2VBbHBoYSlcbiAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmFkaXVzT2Zmc2V0KGosIGgsIGN1cnJOYW1lLCB0aHJlc2hvbGQpIHtcbiAgbGV0IHJhZE9mZnNldCA9IDA7XG5cbiAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW2pdO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBhcnJheSBvZiBzdGVwcyBsaXN0ZWQgd2l0aGluIHNwZWNpZmljIHNoZWV0LlxuICBmb3IgKGxldCB4ID0gMDsgeCA8IGg7IHgrKykge1xuICAgIGlmIChjdXJyTmFtZSA9PSBzdGVwc1t4XS5QYWdlKSB7XG4gICAgICBpZiAocmFkT2Zmc2V0IDwgdGhyZXNob2xkKSB7XG4gICAgICAgIHJhZE9mZnNldCArPSBNYXRoLmNlaWwoc3RhdGUucGFnZUhlaWdodCAvIDQwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmFkT2Zmc2V0O1xufVxuXG4vLyAvIC8vLy8vLy8vLyBDVUogUEFUSFdBWSBEUkFXSU5HIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBDT05TSURFUiBGSVhJTkc6XG4vLyBUaGUgZHJhdyBDVUpDb25uZWN0b3JzKCkgZnVuY3Rpb24gaXMgaGFja2VkIHRvZ2V0aGVyLlxuLy8gSXQgZXZhbHVhdGVzIHRoZSBwb3NpdGlvbiBkaWZmZXJlbmNlcyBiZXR3ZWVuIHR3byBwYWdlcyBhbmQgcnVucyBzb21lIGNvbmRpdGlvbnMgdG8gY2FsY3VsYXRlIHRoZSBiZXN0ICdyb3V0ZScgdG8gbWFwIGJldHdlZW4gdGhlIHR3byBwYWdlcy5cbi8vIENVSiBwYXRoIGxpbmVzIGFyZSByZW5kZXJlZCBvbiB0d28gZGlmZmVyZW50IHBsYW5lcywgb25lIGFib3ZlIGFuZCBhbm90aGVyIGJlbG93IHRoZSBwYWdlcy4gVGhpcyBnaXZlcyB0aGUgaWxsdXN0aW9uIG9mICdwZXJzcGVjdGl2ZScgaW4gMi41RC5cbi8vIFNlZSBza2V0Y2hlcy9wZXJzcGVjdGl2ZV9wbGFuZXNfT0xELnBuZ1xuXG4vLyBORUVEIFRPIEZJWDogU2luY2UgdGhpcyBpcyBtZWVybHkgYSBQT0MsIHRoZSByb3V0aW5nIGFsZ29yaXRobXMgbmVlZCB0byBiZSByZXZhbHVhdGVkIGZvciBzY2FsYWJpbGl0eS4gSSdtIG5vdCBzdXJlIHRoaXMgd2lsbCB3b3JrIGZvciBldmVyeSBjYXNlLlxuLy8gTkVFRCBUTyBGSVg6IENvbnNpZGVyIHdoYXQgaGFwcGVucyB3aGVuIG11bHRpcGxlIHNlZ21lbnRzIHJ1biBpbiBwYXJhbGxlbCBhbG9uZyB0aGUgc2FtZSBwYXRoIHRocm91Z2ggdGhlIG1hcC4gU2hvdWxkIHRoZXkgYmUgdmlzdWFsbHkgc2VwYXJhdGVkPyBJIHRoaW5rIHNvP1xuLy8gVGhpbmsgYWJvdXQgYSBwYXRoIHRoYXQgaGFzIGEgZmlndXJlIDggb3IgcHJldHplbCBzaGFwZS4ud2hhdCBoYXBwZW5zP1xuZnVuY3Rpb24gZHJhd0NVSkNvbm5lY3RvcnMoKSB7XG4gIGxldCBwcmV2UGFnZUluZCA9IDA7XG4gIGNvbnN0IHNlY1JhZHMgPSBkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnNlY29uZGFyeUFuZ2xlRGVncmVlcyk7IC8vIFJhZGlhbnMgQ29udmVyc2lvbiBmb3IgU2Vjb25kYXJ5IEFuZ2xlIFZhbHVlXG4gIGNvbnN0IHNXID0gTWF0aC5jZWlsKHN0YXRlLnpvb21MZXZlbCAqIDQpO1xuXG4gIC8vIEZJUlNULCBMT09QIFRIUlUgQ1VKIFNIRUVUU1xuICBmb3IgKGxldCBqID0gMDsgaiA8IHN0YXRlLmN1alJvd3MubGVuZ3RoOyBqKyspIHtcbiAgICAvLyBORVhULCBQdWxsIG91dCBhcnJheSBvZiBzdGVwcyBmcm9tIHRoZSBhYm92ZSBhcnJheS5cbiAgICBjb25zdCBzdGVwcyA9IHN0YXRlLmN1alJvd3Nbc3RhdGUuYWN0aXZlQ1VKSW5kXTtcblxuICAgIC8vIExvb3AgdGhyb3VnaCBhcnJheSBvZiBzdGVwcyBsaXN0ZWQgd2l0aGluIHNwZWNpZmljIHNoZWV0LlxuICAgIGZvciAobGV0IGggPSAwOyBoIDwgc3RlcHMubGVuZ3RoOyBoKyspIHtcbiAgICAgIC8vIE5leHQsIGV2YWx1YXRlIHJvd3MgYXJyYXkgdG8gbWF0Y2ggc3RlcHMgdG8gcGFnZXMgcmVuZGVyZWQgd2l0aGluIHRoZSBtYXAuXG4gICAgICAvLyBOT1RFOiBSb3dzIGFuZCBPcmlnaW5zIEFycmF5IGhhdmUgc2FtZSBsZW5ndGguXG4gICAgICAvLyBTaW5jZSB0aGVyZSdzIGEgMToxIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSBpbmRleGVzIG9mIGJvdGggYXJyYXlzLCB3ZSBsb29wIHRocnUgb25lLCBidXQgdXNlIHRoZSBzYW1lIGluZGV4IHZhbHVlIHRvIHJlZmVyZW5jZSBpbmZvIGluIHRoZSBvdGhlciBhcnJheS5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUub3JpZ2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBMT09QIFRIUlUgRVhJU1RJTkcgUk9XUyBBUlJBWVxuICAgICAgICBjb25zdCBjdXJyTmFtZSA9IHN0YXRlLnJvd3NbaV0uTmFtZTsgLy8gUEFHRSBOQU1FXG4gICAgICAgIGNvbnN0IGN1cnJMZXZlbCA9IHN0YXRlLnJvd3NbaV0uTGV2ZWw7IC8vIFBBR0UgTEVWRUxcbiAgICAgICAgY29uc3QgY3VyckNlbnRlclggPSBzdGF0ZS5vcmlnaW5zW2ldLmNlbnRlclg7XG4gICAgICAgIGNvbnN0IGN1cnJDZW50ZXJZID0gc3RhdGUub3JpZ2luc1tpXS5jZW50ZXJZO1xuICAgICAgICBsZXQgcHJldkxldmVsID0gMDtcblxuICAgICAgICAvLyBDaGVja3MgZm9yIGEgbWF0Y2hpbmcgcGFnZSBuYW1lIHNvIHRoYXQgd2UgY2FuIHN0YXJ0IG1hcHBpbmcgdGhlIHBhdGggYW5kICdjb25uZWN0aW5nIHRoZSBkb3RzJyBiZXR3ZWVuIHBhZ2VzLlxuICAgICAgICBpZiAoY3Vyck5hbWUgPT0gc3RlcHNbaF0uUGFnZSkge1xuICAgICAgICAgIC8vIERSQVcgU1RBUlQgQU5EIEVORCBQT0lOVFNcblxuICAgICAgICAgIC8vIFRlcm1pbmFsIFBvaW50IGluIEJhY2sgb2YgUGFnZVxuICAgICAgICAgIGNvbnN0IGN1cnJCYWNrRW5kWCA9XG4gICAgICAgICAgICBjdXJyQ2VudGVyWCArIE1hdGgudGFuKHNlY1JhZHMpICogKHN0YXRlLnBhZ2VIZWlnaHQgLyAyKTsgLy8gU3RhcnRpbmcgcG9pbnRzIGRvbid0IGZhbGwgb24gdGhlIGV4YWN0IGNlbnRlciBvZiB0aGUgcGFnZS4gVG8gbWFpbnRhaW4gdGhlXG4gICAgICAgICAgY29uc3QgY3VyckJhY2tFbmRZID0gY3VyckNlbnRlclkgLSBzdGF0ZS5wYWdlSGVpZ2h0IC8gMjtcblxuICAgICAgICAgIC8vIFRlcm1pbmFsIFBvaW50IGluIEZyb250IG9mIFBhZ2VcbiAgICAgICAgICBsZXQgY3VyckZyb250RW5kWCA9XG4gICAgICAgICAgICBjdXJyQ2VudGVyWCAtIE1hdGgudGFuKHNlY1JhZHMpICogKHN0YXRlLnBhZ2VIZWlnaHQgLyA1KTsgLy8gU3RhcnRpbmcgcG9pbnRzIGRvbid0IGZhbGwgb24gdGhlIGV4YWN0IGNlbnRlciBvZiB0aGUgcGFnZS4gVG8gbWFpbnRhaW4gdGhlXG4gICAgICAgICAgbGV0IGN1cnJGcm9udEVuZFkgPSBjdXJyQ2VudGVyWSArIHN0YXRlLnBhZ2VIZWlnaHQgLyA1O1xuXG4gICAgICAgICAgLy8gRHJhdyBGcm9udCBDaXJjbGVcbiAgICAgICAgICBzdGF0ZS5jdWpFbmRQb2ludHNbaV0uZnJvbnRFbmRQb2ludFxuICAgICAgICAgICAgLmF0dHIoJ2N4JywgY3VyckZyb250RW5kWClcbiAgICAgICAgICAgIC5hdHRyKCdjeScsIGN1cnJGcm9udEVuZFkpXG4gICAgICAgICAgICAuYXR0cigncngnLCBzdGF0ZS5wYWdlV2lkdGggLyA4KVxuICAgICAgICAgICAgLmF0dHIoJ3J5Jywgc3RhdGUucGFnZVdpZHRoIC8gMTYpO1xuXG4gICAgICAgICAgc3RhdGUuY3VqRW5kUG9pbnRzW2ldLmJhY2tFbmRQb2ludFxuICAgICAgICAgICAgLmF0dHIoJ2N4JywgY3VyckJhY2tFbmRYKVxuICAgICAgICAgICAgLmF0dHIoJ2N5JywgY3VyckJhY2tFbmRZKVxuICAgICAgICAgICAgLmF0dHIoJ3J4Jywgc3RhdGUucGFnZVdpZHRoIC8gOClcbiAgICAgICAgICAgIC5hdHRyKCdyeScsIHN0YXRlLnBhZ2VXaWR0aCAvIDE2KTtcblxuICAgICAgICAgIGNvbnN0IGN1cnJGcm9udEVuZFBvaW50ID0gc3RhdGUuY3VqRW5kUG9pbnRzW2ldLmZyb250RW5kUG9pbnQ7XG4gICAgICAgICAgY29uc3QgcHJldkZyb250RW5kUG9pbnQgPVxuICAgICAgICAgICAgc3RhdGUuY3VqRW5kUG9pbnRzW3ByZXZQYWdlSW5kXS5mcm9udEVuZFBvaW50O1xuICAgICAgICAgIGNvbnN0IGN1cnJCYWNrRW5kUG9pbnQgPSBzdGF0ZS5jdWpFbmRQb2ludHNbaV0uYmFja0VuZFBvaW50O1xuICAgICAgICAgIGNvbnN0IHByZXZCYWNrRW5kUG9pbnQgPSBzdGF0ZS5jdWpFbmRQb2ludHNbcHJldlBhZ2VJbmRdLmJhY2tFbmRQb2ludDtcblxuICAgICAgICAgIGxldCBjdXJyQ29ubmVjdG9yO1xuICAgICAgICAgIC8vIFRvIHN0YXJ0IGRyYXdpbmcgcGF0aHdheXMsIHdlIG5lZWQgdG8gZmlyc3QgY2hlY2sgdGhhdCB0aGUgY29ubmVjdGlvbiBpcyBjb21pbmcgZnJvbSBhbiBleGlzdGluZyBwYWdlLlxuICAgICAgICAgIC8vIFRoaXMgaW50IHdpbGwgYmUgPjAgaWYgdGhlIHBhZ2UgaW4gcXVlc3Rpb24gaXMgb25lIG9mIHRoZSBsYXRlciBzdGVwcyB3aXRoaW4gdGhlIENVSi5cbiAgICAgICAgICBpZiAoaCA+IDApIHtcbiAgICAgICAgICAgIHByZXZMZXZlbCA9IHN0YXRlLnJvd3NbcHJldlBhZ2VJbmRdLkxldmVsO1xuXG4gICAgICAgICAgICAvLyBWYXJzIHRvIGhvbGQgZGF0YSBmcm9tIHByZXZpb3VzIHN0ZXAgcGFnZS5cbiAgICAgICAgICAgIGNvbnN0IHByZXZDZW50ZXJYID0gc3RhdGUub3JpZ2luc1twcmV2UGFnZUluZF0uY2VudGVyWDtcbiAgICAgICAgICAgIGNvbnN0IHByZXZDZW50ZXJZID0gc3RhdGUub3JpZ2luc1twcmV2UGFnZUluZF0uY2VudGVyWTtcblxuICAgICAgICAgICAgbGV0IHByZXZCYWNrRW5kWDtcbiAgICAgICAgICAgIGxldCBwcmV2QmFja0VuZFk7XG4gICAgICAgICAgICBsZXQgcHJldkZyb250RW5kWDtcbiAgICAgICAgICAgIGxldCBwcmV2RnJvbnRFbmRZO1xuICAgICAgICAgICAgaWYgKGN1cnJMZXZlbCA+IHByZXZMZXZlbCkge1xuICAgICAgICAgICAgICAvLyBCYWNrIFRlcm1pbmFsIFBvaW50IFBvc2l0aW9uXG4gICAgICAgICAgICAgIHByZXZCYWNrRW5kWCA9XG4gICAgICAgICAgICAgICAgcHJldkNlbnRlclggKyBNYXRoLnRhbihzZWNSYWRzKSAqIChzdGF0ZS5wYWdlSGVpZ2h0IC8gMik7XG4gICAgICAgICAgICAgIHByZXZCYWNrRW5kWSA9IHByZXZDZW50ZXJZIC0gc3RhdGUucGFnZUhlaWdodCAvIDI7XG5cbiAgICAgICAgICAgICAgLy8gRnJvbnQgVGVybWluYWwgUG9pbnQgUG9zaXRpb25cbiAgICAgICAgICAgICAgcHJldkZyb250RW5kWCA9XG4gICAgICAgICAgICAgICAgcHJldkNlbnRlclggLSBNYXRoLnRhbihzZWNSYWRzKSAqIChzdGF0ZS5wYWdlSGVpZ2h0IC8gNSk7XG4gICAgICAgICAgICAgIHByZXZGcm9udEVuZFkgPSBwcmV2Q2VudGVyWSArIHN0YXRlLnBhZ2VIZWlnaHQgLyA1O1xuXG4gICAgICAgICAgICAgIHByZXZCYWNrRW5kUG9pbnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICBjdXJyRnJvbnRFbmRQb2ludC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgaWYgKCFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MpIHtcbiAgICAgICAgICAgICAgICAvLyBDb25uZWN0b3IgUG9zaXRpb25cbiAgICAgICAgICAgICAgICBjdXJyQ29ubmVjdG9yID1cbiAgICAgICAgICAgICAgICAgIHN0YXRlLmN1akNvbm5lY3RDb2xsZWN0aW9uW3N0YXRlLmFjdGl2ZUNVSkluZF0uY29ubmVjdGlvbnNbaF07XG4gICAgICAgICAgICAgICAgY3VyckNvbm5lY3RvclxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgcHJldkJhY2tFbmRYKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgcHJldkJhY2tFbmRZKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgY3VyckZyb250RW5kWClcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGN1cnJGcm9udEVuZFkpXG4gICAgICAgICAgICAgICAgICAuY2xhc3NlZCgnY3VqTGluZScsIHRydWUpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHNXKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyTGV2ZWwgPCBwcmV2TGV2ZWwpIHtcbiAgICAgICAgICAgICAgLy8gQmFjayBUZXJtaW5hbCBQb2ludCBQb3NpdGlvblxuICAgICAgICAgICAgICBwcmV2QmFja0VuZFggPVxuICAgICAgICAgICAgICAgIHByZXZDZW50ZXJYICsgTWF0aC50YW4oc2VjUmFkcykgKiAoc3RhdGUucGFnZUhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICBwcmV2QmFja0VuZFkgPSBwcmV2Q2VudGVyWSAtIHN0YXRlLnBhZ2VIZWlnaHQgLyAyO1xuXG4gICAgICAgICAgICAgIC8vIEZyb250IFRlcm1pbmFsIFBvaW50IFBvc2l0aW9uXG4gICAgICAgICAgICAgIHByZXZGcm9udEVuZFggPVxuICAgICAgICAgICAgICAgIHByZXZDZW50ZXJYIC0gTWF0aC50YW4oc2VjUmFkcykgKiAoc3RhdGUucGFnZUhlaWdodCAvIDUpO1xuICAgICAgICAgICAgICBwcmV2RnJvbnRFbmRZID0gcHJldkNlbnRlclkgKyBzdGF0ZS5wYWdlSGVpZ2h0IC8gNTtcblxuICAgICAgICAgICAgICBjdXJyQmFja0VuZFBvaW50LnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgcHJldkZyb250RW5kUG9pbnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXG4gICAgICAgICAgICAgIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29ubmVjdG9yIFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgY3VyckNvbm5lY3RvciA9XG4gICAgICAgICAgICAgICAgICBzdGF0ZS5jdWpDb25uZWN0Q29sbGVjdGlvbltzdGF0ZS5hY3RpdmVDVUpJbmRdLmNvbm5lY3Rpb25zW2hdO1xuICAgICAgICAgICAgICAgIGN1cnJDb25uZWN0b3JcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MScsIHByZXZGcm9udEVuZFgpXG4gICAgICAgICAgICAgICAgICAuYXR0cigneTEnLCBwcmV2RnJvbnRFbmRZKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgY3VyckJhY2tFbmRYKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgY3VyckJhY2tFbmRZKVxuICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2N1akxpbmUnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEZyb250IFRlcm1pbmFsIFBvaW50IFBvc2l0aW9uXG4gICAgICAgICAgICAgIHByZXZGcm9udEVuZFggPVxuICAgICAgICAgICAgICAgIHByZXZDZW50ZXJYIC0gTWF0aC50YW4oc2VjUmFkcykgKiAoc3RhdGUucGFnZUhlaWdodCAvIDUpO1xuICAgICAgICAgICAgICBwcmV2RnJvbnRFbmRZID0gcHJldkNlbnRlclkgKyBzdGF0ZS5wYWdlSGVpZ2h0IC8gNTtcblxuICAgICAgICAgICAgICBjdXJyRnJvbnRFbmRQb2ludC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgIHByZXZGcm9udEVuZFBvaW50LnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgICAgICAgICAgICBpZiAoIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgICAgICAgICAgICAgIC8vIENvbm5lY3RvciBQb3NpdGlvblxuICAgICAgICAgICAgICAgIGN1cnJDb25uZWN0b3IgPVxuICAgICAgICAgICAgICAgICAgc3RhdGUuY3VqQ29ubmVjdENvbGxlY3Rpb25bc3RhdGUuYWN0aXZlQ1VKSW5kXS5jb25uZWN0aW9uc1toXTtcbiAgICAgICAgICAgICAgICBjdXJyQ29ubmVjdG9yXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBwcmV2RnJvbnRFbmRYKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgcHJldkZyb250RW5kWSlcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCd4MicsIGN1cnJGcm9udEVuZFgpXG4gICAgICAgICAgICAgICAgICAuYXR0cigneTInLCBjdXJyRnJvbnRFbmRZKVxuICAgICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2N1akxpbmUnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRklOQUxMWSwgV0UgQ0VIQ0sgVE8gU0VFIElGIFRIRSBQQUdFIElTIFRIRSBGSVJTVCBTVEVQIElOIFRIRSBDVUpcblxuICAgICAgICAgICAgLy8gaWYgc28sIHdlIG9ubHkgcmVuZGVyIGEgcGFydGljYWwgcGF0aCBmcm9tIHRoZSBzdGFydGluZyBkb3QgdG8gdGhlIGNvcnJlc3BvbmRpbmcgc3RhcnQgcGFnZS5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJTdGFydFggPSBzdGF0ZS5jdWpTdGFydENvb3JkaW5hdGVzW3N0YXRlLmFjdGl2ZUNVSkluZF0ueDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJTdGFydFkgPSBzdGF0ZS5jdWpTdGFydENvb3JkaW5hdGVzW3N0YXRlLmFjdGl2ZUNVSkluZF0ueTtcblxuICAgICAgICAgICAgLy8gRnJvbnQgVGVybWluYWwgUG9pbnQgUG9zaXRpb25cbiAgICAgICAgICAgIGN1cnJGcm9udEVuZFggPVxuICAgICAgICAgICAgICBjdXJyQ2VudGVyWCAtIE1hdGgudGFuKHNlY1JhZHMpICogKHN0YXRlLnBhZ2VIZWlnaHQgLyA1KTtcbiAgICAgICAgICAgIGN1cnJGcm9udEVuZFkgPSBjdXJyQ2VudGVyWSArIHN0YXRlLnBhZ2VIZWlnaHQgLyA1O1xuXG4gICAgICAgICAgICBjdXJyRnJvbnRFbmRQb2ludC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cbiAgICAgICAgICAgIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICAgICAgICAgIC8vIENvbm5lY3RvciBQb3NpdGlvblxuICAgICAgICAgICAgICBjdXJyQ29ubmVjdG9yID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5jdWpDb25uZWN0Q29sbGVjdGlvbltzdGF0ZS5hY3RpdmVDVUpJbmRdLmNvbm5lY3Rpb25zWzBdO1xuICAgICAgICAgICAgICBjdXJyQ29ubmVjdG9yXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MScsIGN1cnJTdGFydFgpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgY3VyclN0YXJ0WSlcbiAgICAgICAgICAgICAgICAuYXR0cigneDInLCBjdXJyRnJvbnRFbmRYKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGN1cnJGcm9udEVuZFkpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2N1akxpbmUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHNXKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBQaWdneS1iYWNrIHByZXYgcGFnZSBpbmRleCB2YXIgZm9yIGNvbXBhcmlzb24gaW4gbmV4dCBydW4gb2YgZm9yIGxvb3AuXG4gICAgICAgICAgcHJldlBhZ2VJbmQgPSBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExvb3AgdGhyb3VnaCBhbGwgQ1VKIHNoZWV0cywgZmluZCBhbmQgbWFwIGNvcnJlc3BvbmRpbmcgQ1VKIHN0YXJ0aW5nIHBvaW50cyBvbiBtYXBcbmV4cG9ydCBmdW5jdGlvbiBkcmF3Q1VKU3RhcnRQb2ludCgpIHtcbiAgLy8gQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnMgZm9yIGxhdGVyIGNhbGN1bGF0aW9ucy5cbiAgY29uc3Qgc2VjUmFkcyA9IGRlZ3JlZXNUb1JhZGlhbnMoc3RhdGUuc2Vjb25kYXJ5QW5nbGVEZWdyZWVzKTsgLy8gUmFkaWFucyBDb252ZXJzaW9uIGZvciBTZWNvbmRhcnkgQW5nbGUgVmFsdWVcblxuICAvLyBMb2NhbCB2YXIgdGhhdCB3aWxsIGhlbHAgdXMgZGV0ZXJtaW5lIGlmIG11bHRpcGxlIGpvdXJuZXlzIHNoYXJlIHRoZSBzYW1lIHN0YXJ0aW5nIHBhZ2UuXG4gIGxldCBwcmV2Q291bnQgPSAwO1xuXG4gIC8vIEFycmF5IHRoYXQgd2lsbCBob2xkIHRoZSBzdGFydGluZyBjb29yZGluYXRlcyBvZiBlYWNoIENVSi5cbiAgc3RhdGUuY3VqU3RhcnRDb29yZGluYXRlcyA9IFtdO1xuXG4gIC8vIEZpcnN0LCB3ZSBuZWVkIHRvIGxvb3AgdGhydSB0aGUgQ1VKIHNoZWV0cy5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBzdGF0ZS5jdWpSb3dzLmxlbmd0aDsgaisrKSB7XG4gICAgLy8gV2l0aGluIHRoZSBzaGVldCwgZXZhbHVhdGUgdGhlIGRpZmZlcmVudCBzdGVwcyBhbmQgY3JlYXRlIGEgbmVzdGVkIGFycmF5IG9mIGluZGV4ZXMuXG4gICAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW2pdO1xuXG4gICAgaWYgKHN0ZXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFRoZSBmaXJzdCBjZWxsIGluIHRoZSBzaGVldCB3aWxsIHByb3ZpZGUgdGhlIGpvdXJuZXkgbmFtZS5cbiAgICAgIGNvbnN0IGN1cnJTdGFydE5hbWUgPSBzdGF0ZS5jdWpSb3dzW2pdWzBdLlBhZ2U7XG5cbiAgICAgIHByZXZDb3VudCA9IDA7XG5cbiAgICAgIC8vIE5leHQsIGxvb3AgdGhydSB0aGUgcm93cyBpbiBlYWNoIENVSiBzaGVldCB0byBnZXQgdGhlIFN0ZXAgaW5mbyBmb3IgdGhhdCBqb3VybmV5LlxuICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBqOyBiKyspIHtcbiAgICAgICAgLy8gRmlyc3Qgcm93IHByb3ZpZGVzIHN0YXJ0aW5nIHBvaW50IGZvciB0aGF0IHNwZWNpZmljIENVSi5cbiAgICAgICAgY29uc3QgcE5hbWUgPSBzdGF0ZS5jdWpSb3dzW2JdWzBdLlBhZ2U7XG5cbiAgICAgICAgLy8gTG9va3MgdG8gc2VlIGlmIHRoZSBtYXRjaGluZyBwYWdlIHdhcyBhbHNvIHRoZSBzdGFydGluZyBwYWdlIGZvciBhIHByZXZpb3VzIGpvdXJuZXkuXG4gICAgICAgIC8vIFRoYXQgd2F5IHdlIGNhbiBtYWtlIHN1cmUgdGhlIHN0YXJ0aW5nICdkb3RzJyBkbyBOT1Qgb3ZlcmxhcC5cbiAgICAgICAgaWYgKHBOYW1lID09IGN1cnJTdGFydE5hbWUpIHtcbiAgICAgICAgICBwcmV2Q291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydE11bHRpcGxlID0gKHByZXZDb3VudCAqIHN0YXRlLnBhZ2VXaWR0aCkgLyAzO1xuICAgICAgbGV0IG5hbWVNYXRjaCA9IGZhbHNlO1xuXG4gICAgICAvLyBMT09QIFRIUlUgQ1VKIFNIRUVUU1xuICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBzdGVwcy5sZW5ndGg7IGgrKykge1xuICAgICAgICAvLyBOZXh0LCBMb29wIHRocnUgb3JpZ2luIGFuZC9vciByb3dzIGFycmF5IHNvIHdlIGNhbiBtYXRjaCBwYWdlIG5hbWVzIHRvIGpvdXJuZXkgc3RhcnRzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLm9yaWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyBDRU5URVIgT0YgUEFHRSBSRU5ERVJJTkcgJiBTVEFSVElORyBQT0lOVCBPRiBUT1AgQ09OTkVDVE9SXG4gICAgICAgICAgY29uc3QgY3VyckNlbnRlclggPSBzdGF0ZS5vcmlnaW5zW2ldLmNlbnRlclg7XG4gICAgICAgICAgY29uc3QgY3VyckNlbnRlclkgPSBzdGF0ZS5vcmlnaW5zW2ldLmNlbnRlclk7XG5cbiAgICAgICAgICAvLyBMT09QIFRIUlUgRVhJU1RJTkcgUk9XUyBBUlJBWVxuICAgICAgICAgIGNvbnN0IGN1cnJOYW1lID0gc3RhdGUucm93c1tpXS5OYW1lOyAvLyBQQUdFIE5BTUVcblxuICAgICAgICAgIC8vIE9wbmNlIHdlIGNvbmZpcm0gYSBtYXRjaCwgdGhlbiB3ZSBjYW4gZHJvcCB0aGUgQ1VKIHN0YXJ0aW5nIHBvaW50IG9uIHRoZSBtYXAuXG4gICAgICAgICAgaWYgKGN1cnJOYW1lID09IHN0ZXBzW2hdLlBhZ2UpIHtcbiAgICAgICAgICAgIGlmIChoID09IDAgfHwgKGggPiAwICYmIG5hbWVNYXRjaCA9PSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgbmFtZU1hdGNoID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAvLyBQbGFjZSB0aGUgc3RhcnRpbmcgZG90IHVzaW5nIHRyaWcgYW5kIG1haW50YWluaW5nIDIuNUQgcGVyc3BlY3RpdmUuXG4gICAgICAgICAgICAgIC8vIHN0YXJ0TXVsdGlwbGUgaGFuZGxlcyBhbmQgbXVsdGlwbGllcyB0aGUgcGFkZGluZyBiZXR3ZWVuIHRoZSBqb3VybmV5IHN0YXJ0cyBvbiBhIHNpbmdsZSBwYWdlIC0tIHRoYXQgd2F5IHRoZXJlIGlzIG5vIG92ZXJsYXBwaW5nIHN0YXJ0aW5nIHBvaW50cy5cbiAgICAgICAgICAgICAgY29uc3QgY3VycklucHV0WCA9XG4gICAgICAgICAgICAgICAgY3VyckNlbnRlclggLVxuICAgICAgICAgICAgICAgIE1hdGgudGFuKHNlY1JhZHMpICogKHN0YXRlLnZlcnRQYWRkaW5nIC8gMyArIHN0YXJ0TXVsdGlwbGUpO1xuICAgICAgICAgICAgICBjb25zdCBjdXJySW5wdXRZID1cbiAgICAgICAgICAgICAgICBjdXJyQ2VudGVyWSArIChzdGF0ZS52ZXJ0UGFkZGluZyAvIDMgKyBzdGFydE11bHRpcGxlKTtcbiAgICAgICAgICAgICAgbGV0IGFjdGl2ZUNvbG9yO1xuXG4gICAgICAgICAgICAgIGlmIChqID09IHN0YXRlLmFjdGl2ZUNVSkluZCAmJiBzdGF0ZS5jdWpNb2RlKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3IgPSAnNDU1QTY0JztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2xvciA9ICc0Mjg1ZjQnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jdWpTdGFydHNbal0uc3RhcnRcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGN1cnJJbnB1dFgpXG4gICAgICAgICAgICAgICAgICAuYXR0cignY3knLCBjdXJySW5wdXRZKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3J4Jywgc3RhdGUucGFnZVdpZHRoIC8gOClcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdyeScsIHN0YXRlLnBhZ2VXaWR0aCAvIDE2KVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgYWN0aXZlQ29sb3IpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsICc0NTVBNjQnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgICAgICAgICAgICAgIHN0YXRlLmN1alN0YXJ0c1tqXS5vdmVybGF5U3RhcnRcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGN1cnJJbnB1dFgpXG4gICAgICAgICAgICAgICAgICAuYXR0cignY3knLCBjdXJySW5wdXRZKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3J4Jywgc3RhdGUucGFnZVdpZHRoIC8gOClcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdyeScsIHN0YXRlLnBhZ2VXaWR0aCAvIDE2KVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhY3RpdmVDb2xvcilcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTQVZFIExPQ0FUSU9OIG9mIHN0YXJ0aW5nIHBvaW50IGZvciBsYXRlciB1c2UuXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jT2JqID0geyB4OiBjdXJySW5wdXRYLCB5OiBjdXJySW5wdXRZIH07XG4gICAgICAgICAgICAgICAgc3RhdGUuY3VqU3RhcnRDb29yZGluYXRlcy5wdXNoKGxvY09iaik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2pdLm92ZXJsYXlTdGFydC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jdWpTdGFydHNbal0uc3RhcnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBDVUogU1RBUlQgTEFCRUxcblxuICAgICAgICAgICAgICAvLyBQbGFjZSBUZXh0IExhYmVsIG5leHQgdG8gY29ycmVzcG9uZGluZyBzdGFydGluZyBwb2ludC5cbiAgICAgICAgICAgICAgY29uc3QgY3VyclRleHRXaWR0aCA9IHN0YXRlLnBhZ2VIZWlnaHQgKiAyLjE7XG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJUZXh0WCA9IGN1cnJJbnB1dFggLSBjdXJyVGV4dFdpZHRoO1xuICAgICAgICAgICAgICBjb25zdCBjdXJyVGV4dFkgPVxuICAgICAgICAgICAgICAgIGN1cnJJbnB1dFkgK1xuICAgICAgICAgICAgICAgIDUgLVxuICAgICAgICAgICAgICAgIE1hdGgudGFuKGRlZ3JlZXNUb1JhZGlhbnMoc3RhdGUucHJpbWFyeUFuZ2xlRGVncmVlcykpICpcbiAgICAgICAgICAgICAgICAgIGN1cnJUZXh0V2lkdGg7XG5cbiAgICAgICAgICAgICAgbGV0IGN1cnJDb2xvcjtcblxuICAgICAgICAgICAgICBpZiAoaiA9PSBzdGF0ZS5hY3RpdmVDVUpJbmQgJiYgc3RhdGUuY3VqTW9kZSkge1xuICAgICAgICAgICAgICAgIGN1cnJDb2xvciA9ICc0NTVBNjQnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJDb2xvciA9ICc0Mjg1ZjQnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY29uc3QgZGVnU3RyaW5nID0gYHNrZXdZKCR7c3RhdGUucHJpbWFyeUFuZ2xlRGVncmVlc31kZWcpYDtcblxuICAgICAgICAgICAgICBpZiAoIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgICAgICAgICAgICAgIHN0YXRlLmN1alN0YXJ0c1tqXS50ZXh0XG4gICAgICAgICAgICAgICAgICAuY2xhc3NlZCgncGFnZS1sYWJlbCcsIHRydWUpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgc3RhdGUuY3VqTGFiZWxXaWR0aClcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgc3RhdGUucGFnZUxhYmVsU2l6ZSAvIDEuMjUpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3RyYW5zZm9ybScsIGRlZ1N0cmluZylcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgnbGVmdCcsIGN1cnJUZXh0WClcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgnY29sb3InLCBjdXJyQ29sb3IpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCAncmlnaHQnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jdWpTdGFydHNbal0udGV4dFxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJUZXh0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNUJHtqfWApXG4gICAgICAgICAgICAgICAgLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2pdLnRleHQuc3R5bGUoXG4gICAgICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICAgICAgY3VyclRleHRZIC0gY3VyclRleHRIZWlnaHQgKyBzdGF0ZS5wYWdlTGFiZWxTaXplXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gSWYgdXNlciBjb250aW51ZXMgdG8gem9vbSBvdXQsIGhpZGUgdGhlIHRleHQgbGFiZWwuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZS50YXJnZXRab29tTGV2ZWwgPCAwLjM1IHx8IHN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgICAgICAgICAgICAgIHN0YXRlLmN1alN0YXJ0c1tqXS50ZXh0XG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLmN1alN0YXJ0c1tqXS50ZXh0XG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lTWF0Y2ggPT0gZmFsc2UpIHtcbiAgICAgICAgICBzdGF0ZS5jdWpTdGFydHNbal0uc3RhcnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2pdLm92ZXJsYXlTdGFydFxuICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2pdLnRleHQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgZDMuc2VsZWN0KGAjc1Qke2p9YCkuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gQ1VKIFNFTEVDVElPTiwgV0FMSyBUSFJPVUdIICYgSU5URVJBQ1RJT05cblxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuLy8gTkVFRCBUTyBGSVg6IFRoaXMgZW50aXJlIHNlY3Rpb24gaXMgaGFja2VkIHRvZ2V0aGVyIGFuZCBjb3VsZCB1c2UgYSBtYWpvciByZWZhY3RvcmluZy5cbi8vIFdoZW4gdmlzdWFsaXphdGlvbiBpcyB1cGRhdGVkLCBXZSBjaGVjayB0byBzZWUgaWYgdGhlcmUgaXMgYW4gYWN0aXZlIENVSi5cbmV4cG9ydCBmdW5jdGlvbiBjdWpDaGVjaygpIHtcbiAgLy8gQUxXQVlTIERSQVcgQ1VKIFNUQVJUSU5HIFBPSU5UUywgVEhBVCBXQVkgVVNFUlMgSEFWRSBBIFdBWSBUTyBBQ0NFU1MgQU5EIFZJRVcgRUFDSCBDVUouXG4gIGlmIChzdGF0ZS5jdWpTaGVldE5hbWVzLmxlbmd0aCA+IDApIHtcbiAgICBjbGVhck1hcmtlcnMoKTtcbiAgfVxuICBpZiAoIXN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICBkcmF3Q1VKU3RhcnRQb2ludCgpO1xuICB9IGVsc2Uge1xuICAgIGRyYXdGbGF0Q1VKU3RhcnRQb2ludCgpO1xuICB9XG5cbiAgLy8gRXZhbHVhdGUgd2hldGhlciBvciBub3Qgd2UncmUgdmlld2luZyBhIENVSi5cbiAgaWYgKHN0YXRlLmN1ak1vZGUpIHtcbiAgICAvLyBJZiBBIENVSiBJUyBBQ1RJVkUsIFRIRU4gTUFLRSBTVVJFIFRIRSBDVUogRUxFTUVOVFMgQVJFIERSQVdOXG5cbiAgICAvLyBDYWxsIHRvIGRyYXcgY29ubmVjdGlvbiBwYXRod2F5c1xuICAgIGlmIChzdGF0ZS5mbGF0dGVuTWFwKSB7XG4gICAgICBkcmF3RmxhdENVSkNvbm5lY3RvcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhd0NVSkNvbm5lY3RvcnMoKTtcbiAgICB9XG4gICAgLy8gQ2FsbCB0byBkcmF3IFN0ZXAgc3RhdGVzIG9uIHBhZ2VzXG4gICAgLy8gZHJhd0NVSlN0ZXBzKCk7IC8vL0NPTlNJREVSIEZJWElORzogTk9UIFNVUkUgSUYgVEhJUyBGVU5DVElPTiBJUyBSRUxFVkFOVCBBTlkgTU9SRSBfIFBBUlQgT0YgT0xEIENPREVcblxuICAgIGlmIChzdGF0ZS5mbGF0dGVuTWFwKSB7XG4gICAgICBkcmF3RmxhdE1hcmtlcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhd01hcmtlcnMoKTtcbiAgICB9XG5cbiAgICAvLyBTaG93IHRoZSBDVUogZGV0YWlscyBjYXJkIG9uIHRoZSBmaXJzdCBzdGVwLlxuICAgIHNob3dDVUpDYXJkKCk7XG5cbiAgICAvLyBORUVEIFRPIEZJWDogUmlnaHQgbm93IHRoZXJlIGFyZSB0d28gdmVyc2lvbnMgb2YgZWFjaCBDVUogU3RhcnRpbmcgXCJkb3RcIlxuICAgIC8vIFRoZSBmaXJzdCBhcHBlYXJzIG9uIHRoZSBvdmVybGF5IHBsYW4gYW5kIGFwcGVhcnMgb24gdG9wIG9mIHRoZSByZW5kZXJlZCBwYXRod2F5LlxuICAgIC8vIFRoZSBzZWNvbmQgYXBwZWFycyBiZW5lYXRoIGFuZCBpcyBhbHdheXMgcGVyc2lzdGFudC5cbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHN0YXRlLmN1alN0YXJ0cy5sZW5ndGg7IGMrKykge1xuICAgICAgLy8gVHVybiBvZmYgdmlzaWJpbGl0eSBvbiBkZWZhdWx0IHN0YXJ0aW5nICdkb3QnXG4gICAgICBzdGF0ZS5jdWpTdGFydHNbY10uc3RhcnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cbiAgICAgIC8vIFR1cm4gb24gdmlzaWJpbGl0eSBvZiBvdmVybGF5ZCBzdGFydGluZyAnZG90J1xuICAgICAgaWYgKCFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MpIHtcbiAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2NdLm92ZXJsYXlTdGFydC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5jdWpTdGFydHNbY10ub3ZlcmxheVN0YXJ0LnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayB0byBmaW5kIHdoaWNoIENVSiBpcyBhY3RpdmUuXG4gICAgICAvLyBUaGVuLCBhcHBseSB0aGUgc2VsZWN0ZWQgc3RhdGUgYW5kIHRleHQgdG8gdGhlIGFjdGl2ZSBDVUogc3RhcnRpbmcgcG9pbnRcbiAgICAgIC8vIEluY2x1ZGVzIGEgYmxhY2sgZG90LCBhbmQgXCJISURFIENVSlwiIHRleHQgcGx1cyBhIENsb3NlIChYKS5cbiAgICAgIC8vIFRoaXMgYnV0dG9uIGNhbiBiZSB0b2dnbGVkIG9uIGFuZCBvZmYuXG5cbiAgICAgIGlmIChjICE9IHN0YXRlLmFjdGl2ZUNVSkluZCkge1xuICAgICAgICAvLyBJZiBub3QgYWN0aXZlIENVSlxuICAgICAgICBzdGF0ZS5jdWpTdGFydHNbY10udGV4dC5zdHlsZSgnY29sb3InLCAnNDI4NWY0Jyk7IC8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBBY3RpdmUgQ1VKXG4gICAgICAgIHN0YXRlLmN1alN0YXJ0c1tjXS50ZXh0LnN0eWxlKCdjb2xvcicsICc0NTVBNjQnKTsgLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTSE9XUyBGVUxMIENVSiBPVkVSTEFZXG4gICAgLy8gTW9zdCBvZiB0aGUgQ1VKIGluZm8gaXMgcmVuZGVyZWQgaW4gdGhpcyBvdmVybGF5LiBUaGlzIGFwcGVhcnMgb24gdG9wIG9mIHRoZSByZW5kZXJkZWQgbWFwLlxuICAgIC8vIEkndmUgYmVlbiByZWZlcnJpbmcgdG8gdGhlIG92ZXJsYXkgYXMgb25lIG9mIHRoZSBcInBsYW5lc1wiIGluIHByZXZpb3VzIGZ1bmN0aW9ucy5cbiAgICAvLyBTZWUgc2tldGNoZXMvcGVyc3BlY3RpdmVfcGxhbmVzX09MRC5wbmdcbiAgICAvLyBOT1RFOiBUaGUgb3ZlcmxheSBpbmhlcmVudGx5IGRpc2FibGVzIHRoZSBwYWdlIGhvdmVyIHN0YXRlcyB0aGF0IGFyZSBhdmFpYmxlIG9uIHRoZSBiYXNlIElBIG1hcC5cbiAgICBzdGF0ZS5jdWpPdmVybGF5LnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgIC8vIElmIHdlJ3JlIG5vdCB2aWV3aW5nIGEgQ1VKIGFuZCBvbmx5IHRoZSBiYXNlIElBIE1hcCAoY3VqTW9kZT09ZmFsc2UpOlxuICB9IGVsc2UgaWYgKHN0YXRlLmN1alNoZWV0TmFtZXMubGVuZ3RoID4gMCkge1xuICAgIC8vIEhpZGUgYXBwcm9wcm9hdGUgQ1VKIGxheWVycywgc3VjaCBhcyB0aGUgb3ZlcmxheSwgc3RlcHMgYW5kIGNhcmQuXG4gICAgc3RhdGUuY3VqT3ZlcmxheS5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICBoaWRlQ1VKU3RlcHMoKTtcbiAgICBoaWRlQ1VKQ2FyZCgpO1xuICAgIGNsZWFyTWFya2VycygpO1xuXG4gICAgLy8gTG9vcCB0aHJ1IGFsbCBwYWdlcyB0byBoaWRlIHN0ZXAgbnVtYmVycywgQ1VKIGhpZ2hsaWdodCBzdGF0ZXMsIGV0Yy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0YXRlLnBhZ2VzW2ldLmhvdmVyRWxsaXBzZS5zdHlsZSgnb3BhY2l0eScsIDApLmNsYXNzZWQoJ3RyYW5zJywgZmFsc2UpO1xuICAgICAgaWYgKHN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICAgICAgc3RhdGUucGFnZXNbaV0uaG92ZXJFbGxpcHNlXG4gICAgICAgICAgLmF0dHIoJ3J4Jywgc3RhdGUucGFnZVdpZHRoIC8gMilcbiAgICAgICAgICAuYXR0cigncnknLCBzdGF0ZS5wYWdlV2lkdGggLyAyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnBhZ2VzW2ldLmhvdmVyRWxsaXBzZVxuICAgICAgICAgIC5hdHRyKCdyeCcsIHN0YXRlLnBhZ2VXaWR0aClcbiAgICAgICAgICAuYXR0cigncnknLCBzdGF0ZS5wYWdlV2lkdGggLyAyKTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9vcCB0aHJ1IENVSiBTdGFydHMgYXJyYXkgYW5kIHR1cm4gb2ZmIHRoZSBvdmVybGF5IHZlcnNpb25zLFxuICAgICAgLy8gU2V0IHRoZSBvcmlnaW5hbCBzdGFydHMgdG8gdmlzaWJsZS5cbiAgICAgIC8vIE5lZCB0byBmaXggLSB0aGlzIHNlZW1zIHRvIGJlIGEgcmVkdW5kYW50IHN0ZXAuIFRoZXJlJ3Mgbm8gbmVlZCB0byBtYW5hZ2UgdHdvIGluc3RhbmNlcyBvZiB0aGUgc2FtZSBDVUogc3RhcnRpbmcgcG9pbnQgJ2RvdCcuXG4gICAgICBmb3IgKGxldCBjYyA9IDA7IGNjIDwgc3RhdGUuY3VqU3RhcnRzLmxlbmd0aDsgY2MrKykge1xuICAgICAgICBpZiAoIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgICAgICAgIHN0YXRlLmN1alN0YXJ0c1tjY10uc3RhcnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgIHN0YXRlLmN1alN0YXJ0c1tjY10ub3ZlcmxheVN0YXJ0LnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLmN1alN0YXJ0c1tjY10uc3RhcnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2NjXS5vdmVybGF5U3RhcnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gW0ZuXSBSZXNldCBDVUogc3RhcnRpbmcgbGFiZWxzXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRDVUpTdGFydFRleHQoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY3VqU3RhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW2ldO1xuICAgIGNvbnN0IGxhYmVsID0gc3RlcHNbMF0uVGl0bGU7XG5cbiAgICBzdGF0ZS5jdWpTdGFydHNbaV0udGV4dC5zdHlsZSgnY29sb3InLCAnNDI4NWY0Jyk7IC8vXG4gICAgc3RhdGUuY3VqU3RhcnRzW2ldLnRleHQudGV4dChsYWJlbCk7XG4gIH1cbn1cblxuLy8gLyAvLy8vLy8gQ0hBTkdJTkcgVEhFIFZJRVcgVE8gU1RBUlQgQ1VKIC8vLy8vLy8vLy8vLy8vLy9cblxuLy8gV2hlbiBhIENVSiBTdGFydCAnZG90JyBpcyBjbGlja2VkLCB0aGUgbWFwIGF1dG8gem9vbXMgYW5kIHNjcm9sbHMgdG8gZm9jdXMgb24gdGhlIGZpcnN0IHN0ZXAgb2YgdGhlIENVSi5cbi8vIENPTlNJREVSIEZJWElORzogQ2FuIHdlIHVzZSBhbmltYXRpb24gaGVyZSBzbyB0aGUgdHJhbnNpdGlvbiBpcyBsZXNzIGphcnJpbmc/XG5leHBvcnQgZnVuY3Rpb24gc25hcFRvQ1VKU3RhcnRMb2MoKSB7XG4gIG1vdmVDVUpDYXJkKCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jdWpTdGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaSA9PSBzdGF0ZS5hY3RpdmVDVUpJbmQpIHtcbiAgICAgIHN0YXRlLmN1alN0YXJ0c1tzdGF0ZS5hY3RpdmVDVUpJbmRdLnRleHQuc3R5bGUoJ2NvbG9yJywgJzQ1NUE2NCcpO1xuICAgICAgc3RhdGUuY3VqU3RhcnRzW3N0YXRlLmFjdGl2ZUNVSkluZF0ub3ZlcmxheVN0YXJ0XG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICc0NTVBNjQnKVxuICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5jdWpTdGFydHNbaV0udGV4dC5zdHlsZSgnY29sb3InLCAnNDI4NWY0Jyk7XG4gICAgICBzdGF0ZS5jdWpTdGFydHNbaV0ub3ZlcmxheVN0YXJ0LnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICBpZiAoIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgICAgICBzdGF0ZS5jdWpTdGFydHNbaV0uc3RhcnRcbiAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnNDI4NWY0JylcbiAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2ldLnN0YXJ0XG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgJzQyODVmNCcpXG4gICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyAvIC8vLyBGT1JXQVJEL0JBQ0tXQVJEIE5BVklHQVRJT04gV0lUSElOIEEgQ1VKIC8vLy8vLy8vXG5cbi8vIEFkdmFuY2VzIGFjdGl2ZSBzdGVwIHdoZW4gTmV4dCBCdG4gaXMgY2xpY2tlZCBpbiBDVUogRGV0YWlscyBjYXJkXG5mdW5jdGlvbiBnZXROZXh0Q1VKQ2FyZCgpIHtcbiAgc3RvcFNjcm9sbFRyYW5zaXRpb24oKTtcbiAgc3RvcFpvb21UcmFuc2l0aW9uKCk7XG4gIHN0YXRlLmFjdGl2ZVN0ZXBJbmQgKz0gMTtcbiAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW3N0YXRlLmFjdGl2ZUNVSkluZF07XG5cbiAgaWYgKHN0YXRlLmFjdGl2ZVN0ZXBJbmQgPT0gc3RlcHMubGVuZ3RoKSB7XG4gICAgc3RhdGUuYWN0aXZlU3RlcEluZCA9IHN0ZXBzLmxlbmd0aCAtIDE7XG4gIH1cbiAgZ2V0QWN0aXZlQ1VKQ2FyZCgpO1xufVxuXG4vLyBOYXZpZ2F0ZSB0byBwcmV2aW91cyBzdGVwIHdoZW4gQmFjayBCdG4gaXMgY2xpY2tlZCB3aXRoaW4gQ1VKIERldGFpbHMgQ2FyZFxuZnVuY3Rpb24gZ2V0UHJldkNVSkNhcmQoKSB7XG4gIHN0YXRlLmFjdGl2ZVN0ZXBJbmQgLT0gMTtcbiAgaWYgKHN0YXRlLmFjdGl2ZVN0ZXBJbmQgPD0gMCkge1xuICAgIHN0YXRlLmFjdGl2ZVN0ZXBJbmQgPSAwO1xuICB9XG4gIGdldEFjdGl2ZUNVSkNhcmQoKTtcbn1cblxuLy8gLyAvLy8gRElTUExBWUlORyBBTkQgVVBEQVRJTkcgVEhFIENVSiBDQVJEIC8vLy8vLy8vLy9cblxuLy8gV2hlbiB2aWV3aW5nIGEgQ1VKLCB0aGUgZGV0YWlscyBjYXJkIHNob3VsZCBiZSB2aXNpYmxlLlxuZnVuY3Rpb24gc2hvd0NVSkNhcmQoKSB7XG4gIHN0YXRlLmN1cnJDYXJkLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgZDMuc2VsZWN0KCcjbmV4dFN0ZXAnKS5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gIGdldEFjdGl2ZUNVSkNhcmQoKTtcbn1cblxuLy8gRmluZCB0aGUgY3VycmVudCBDVUogc3RlcCwgYW5kIGRpc3BsYXkgdGhlIHN0ZXAncyBkZXRhaWxzIGluIHRoZSBDVUogY2FyZC5cbi8vIFRoaXMgaW5jbHVkZXM6IENVSiBUaXRsZSwgVXNlciwgU3RlcCBEZXNjcmlwdGlvbiwgYW5kIFByb2dyZXNzIEJhclxuZnVuY3Rpb24gZ2V0QWN0aXZlQ1VKQ2FyZCgpIHtcbiAgLy8gU3RvcmUgYWN0aXZlIHN0ZXAgZGF0YSBpbiBsb2NhbCB2YXJzLlxuICBjb25zdCBzdGVwcyA9IHN0YXRlLmN1alJvd3Nbc3RhdGUuYWN0aXZlQ1VKSW5kXTtcbiAgY29uc3QgY3VyckNVSlRpdGxlID0gc3RlcHNbMF0uVGl0bGU7XG4gIGNvbnN0IGN1cnJEZXNjcmlwdGlvbiA9IHN0ZXBzW3N0YXRlLmFjdGl2ZVN0ZXBJbmRdLlN0ZXA7XG4gIGNvbnN0IGN1cnJVc2VyID0gc3RlcHNbc3RhdGUuYWN0aXZlU3RlcEluZF0uVXNlcnM7XG4gIGNvbnN0IGN1cnJMaW5rID0gc3RlcHNbc3RhdGUuYWN0aXZlU3RlcEluZF0uTW9ja3VwcztcblxuICAvLyBTZXQgdXAgdmFycyBmb3IgY2FyZCBIVE1MIGVsZW1lbnRzLlxuICBjb25zdCBjdXJyVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1alRpdGxlJyk7XG4gIGNvbnN0IGN1cnJVc2VyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdWpVc2VyJyk7XG4gIGNvbnN0IGN1cnJEZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VqRGVzY3JpcHRpb24nKTtcbiAgY29uc3QgY3VyckdhbExpbmsgPSBkMy5zZWxlY3QoJyNnYWxsZXJ5TGluaycpO1xuICBjb25zdCBjdXJHYWxMaW5rQ29udGFpbmVyID0gZDMuc2VsZWN0KCcjZ2FsQnRuJyk7XG5cbiAgLy8gVmFycyBmb3IgY2FyZCBuYXYgKGJhY2svbmV4dCkgY29udHJvbHMuXG4gIGNvbnN0IGN1cnJOZXh0QnRuID0gZDMuc2VsZWN0KCcjbmV4dFN0ZXAnKTtcbiAgY29uc3QgY3VyclByZXZCdG4gPSBkMy5zZWxlY3QoJyNwcmV2U3RlcCcpO1xuXG4gIC8vIERpc3BsYXkgc3RlcC1zcGVjaWZpYyBpbmZvIGluIGNhcmQgZWxlbWVudHMuXG4gIGN1cnJUaXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gY3VyckNVSlRpdGxlO1xuICBjdXJyVXNlckVsZW1lbnQuaW5uZXJIVE1MID0gY3VyclVzZXI7XG4gIGN1cnJEZXNjcmlwdGlvbkVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Y3VyckRlc2NyaXB0aW9ufWA7XG5cbiAgLy8gU2V0IHVwIEdhbGxlcnkgbGluaywgaWYgb25lIGV4aXN0cy5cbiAgY3VyckdhbExpbmsuYXR0cignaHJlZicsIGN1cnJMaW5rKTtcblxuICAvLyBOQVZJR0FUSU9OIENPTlRSTExTXG4gIC8vIFRoaXMgbmV4dCBzZWN0aW9uIGRlZmluZXMgZW5hYmxpbmcgYW5kIGRpc2FibGluZyBvZiBuZXh0L2JhY2sgYnV0dG9ucyB3aXRoaW4gdGhlIGNhcmRcblxuICAvLyBJZiBsYXN0IHN0ZXAsIHRoZW4gZGlzYWJsZSB0aGUgTmV4dCBidXR0b24uXG4gIGlmIChzdGF0ZS5hY3RpdmVTdGVwSW5kID09IHN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICBjdXJyTmV4dEJ0bi5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyTmV4dEJ0bi5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gIH1cblxuICAvLyBJZiBmaXJzdCBzdGVwLCB0aGVuIGRpc2FibGUgdGhlIEJhY2sgYnV0dG9uLlxuICBpZiAoc3RhdGUuYWN0aXZlU3RlcEluZCA9PSAwKSB7XG4gICAgY3VyclByZXZCdG4uc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gIH0gZWxzZSB7XG4gICAgY3VyclByZXZCdG4uc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICB9XG5cbiAgLy8gSWYgR2FsbGVyeSBMaW5rIGV4aXN0cywgc2hvdyBpdC4gT3RoZXJ3aXNlLCBoaWRlIGl0LlxuICBpZiAoY3VyckxpbmsgPT0gJycpIHtcbiAgICBjdXJHYWxMaW5rQ29udGFpbmVyLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIGN1ckdhbExpbmtDb250YWluZXIuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICB9XG5cbiAgLy8gTWFrZSBjYWxsIHRvIHVwZGF0ZSBDYXJkJ3MgcHJvZ3Jlc3MgYmFyXG4gIHVwZGF0ZUNVSkNhcmRQcm9ncmVzcygpO1xuXG4gIC8vIE1ha2UgY2FsbCB0byBtb3ZlIHRoZSBjYXJkIHRvIHRoZSBjdXJyZW50IHBhZ2Uvc3RlcHMgcG9zaXRpb24uXG4gIG1vdmVDVUpDYXJkKCk7XG59XG5cbi8vIFVwZGF0ZSBwcm9ncmVzcyBiYXIgYmFzZWQgb24gY3VycmVudCBsb2NhdGlvbiBpbiBDVUouXG4vLyBUaGUgcHJvZ3Jlc3MgYmFyIGRvZXMgYSBuaWNlIGpvYiBvZiBzaG93aW5nIHByb2dyZXNzIHdpdGhpbiBhbiBvdmVyYWxsIENVSi5cbmZ1bmN0aW9uIHVwZGF0ZUNVSkNhcmRQcm9ncmVzcygpIHtcbiAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW3N0YXRlLmFjdGl2ZUNVSkluZF07XG4gIGNvbnN0IHBlcmNlbnQgPSAoKHN0YXRlLmFjdGl2ZVN0ZXBJbmQgKyAxKSAvIHN0ZXBzLmxlbmd0aCkgKiAxMDA7XG4gIGNvbnN0IHBTdHJpbmcgPSBgJHtwZXJjZW50fSVgO1xuICBkMy5zZWxlY3QoJyNwcm9ncmVzcycpLnN0eWxlKCd3aWR0aCcsIHBTdHJpbmcpO1xufVxuXG4vLyBVcGRhdGUgdGhlIFgvWSBsb2NhdGlvbiBvZiB0aGUgY2FyZFxuLy8gVGhlbiwgZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gc2Nyb2xsIHRvIGJyaW5nIHRoZSBjYXJkIGludG8gdmlldyxcbi8vIG9mIGlmIGl0IGFscmVhZHkgZml0cyBvbiB0aGUgY3VycmVudCBzY3JlYW4gYW5kIGlzIHJlYWRhYmxlLlxuZnVuY3Rpb24gbW92ZUNVSkNhcmQoKSB7XG4gIC8vIERldGVybWluZSBYL1kgY29vcmRpbmF0ZXMgb2YgQ1VKIERldGFpbHMgQ2FyZFxuICAvLyBUaGlzIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gcGFnZSByZWdpc3RyYXRpb24gcG9pbnRzLlxuICAvLyBTaW5jZSBpdCdzIG5vdCBhIDIuNUQgZWxlbWVudCwgd2UgZG9uJ3QgbmVlZCB0byBydW4gYWxsIHRoZSB0cmlnIGNhbGN1bGF0aW9ucy5cbiAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW3N0YXRlLmFjdGl2ZUNVSkluZF07XG4gIGxldCBjdXJyWDtcbiAgbGV0IGN1cnJZO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBMb29wIHRocnUgcm93cy5cbiAgICAvLyBJZiBhY3RpdmUgU3RlcCBOYW1lIG1hdGNoZXMgUGFnZSBOYW1lLCB1c2UgdGhlIG1hdGNoaW5nIHBhZ2UncyBjb29yZGluYXRlcyBhcyBhIHJlZmVyZW5jZSBmb3IgcGxhY2luZyB0aGUgQ1VKIGNhcmQuXG4gICAgaWYgKHN0ZXBzW3N0YXRlLmFjdGl2ZVN0ZXBJbmRdLlBhZ2UgPT0gc3RhdGUucm93c1tpXS5OYW1lKSB7XG4gICAgICBjdXJyWCA9IHN0YXRlLnBvc2l0aW9uc1tpXS54ICsgc3RhdGUucGFnZVdpZHRoICsgc3RhdGUucGFnZVdpZHRoIC8gMztcbiAgICAgIGN1cnJZID0gc3RhdGUucG9zaXRpb25zW2ldLnk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgQ2FyZCBQb3NpdGlvblxuICAvLyBzdGF0ZS5jdXJyQ2FyZC5zdHlsZSgnbGVmdCcsIGN1cnJYKS5zdHlsZSgndG9wJywgY3VyclkpO1xuXG4gIC8vIE5leHQsIERldGVybWluZSBpZiB0aGUgY2FyZCBpcyBvZmYgc2NyZWVuIGFuZCBpZiB3ZSBuZWVkIHRvIGFwcGx5IGEgc2Nyb2xsIGFuaW1hdGlvbiB0byB2aWV3IHRoZSBjYXJkLlxuICAvLyBlbmRTY3JvbGxYL1kgdmFycyBhcmUgdGhlIHRhcmdldCBzY3JvbGwtdG8gbG9jYXRpb25zIGZvciB0aGUgV2luZG93LlxuICBzdGF0ZS5lbmRTY3JvbGxYID0gY3VyclggLSBzdGF0ZS53aWR0aCAvIDI7XG4gIHN0YXRlLmVuZFNjcm9sbFkgPSBjdXJyWSAtIHN0YXRlLmhlaWdodCAvIDI7XG5cbiAgLy8gQ2hlY2tzIHRvIHNlZSBpZiBFbmRYIGFuZCBFbmRZIFBvc2l0aW9ucyBhcmUgd2l0aGluIFNjb3BlLiBJZiB0aGV5J3JlIG5vdCwgdGhlbiByZXNjb3BlIHRhcmdldCBzY3JvbGwgdmFycyAoZW5kU2Nyb2xsWCwgZW5kU2Nyb2xsWSk7XG4gIC8vIEhvcml6b250YWwgc2Nyb2xsaW5nIHJhbmdlLlxuICBpZiAoc3RhdGUuZW5kU2Nyb2xsWCA+IHN0YXRlLnN2Z1dpZHRoIC0gc3RhdGUud2lkdGgpIHtcbiAgICBzdGF0ZS5lbmRTY3JvbGxYID0gc3RhdGUuc3ZnV2lkdGggLSBzdGF0ZS53aWR0aDtcbiAgfSBlbHNlIGlmIChzdGF0ZS5lbmRTY3JvbGxYIDwgMCkge1xuICAgIHN0YXRlLmVuZFNjcm9sbFggPSAwO1xuXG4gICAgLy8gVmVydGljYWwgU2Nyb2xsaW5nIHJhbmdlLlxuICB9IGVsc2UgaWYgKHN0YXRlLmVuZFNjcm9sbFkgPiBzdGF0ZS5zdmdIZWlnaHQgLSBzdGF0ZS5oZWlnaHQpIHtcbiAgICBzdGF0ZS5lbmRTY3JvbGxZID0gc3RhdGUuc3ZnSGVpZ2h0IC0gc3RhdGUuaGVpZ2h0O1xuICB9XG5cbiAgLy8gTmV4dCwgbWFrZSBzdXJlIG5vIHNjcm9sbCBhbmltYXRpb24gaXMgY3VycmVudGx5IHRha2luZyBwbGFjZS5cbiAgLy8gSWYgaXQgaXMsIHRoZW4ga2lsbCBpdC5cbiAgLy8gU2Nyb2xsaW5nIGlzIGJhc2VkIG9uIGEgaG9tZW1hZGUgaW50ZXJ2YWwgYW5kIHR3ZWVuIGVxdWF0aW9uLlxuICBzdG9wU2Nyb2xsVHJhbnNpdGlvbigpO1xuXG4gIC8vIFN0b3JlIGN1cnJlbnQgd2luZG93IHNjcm9sbCBsb2NhdGlvbiAoWC9ZKSBpbiBsb2NhbCB2YXJzLlxuICBzdGF0ZS5jdXJyU2Nyb2xsWCA9IHN2Z0NvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICBzdGF0ZS5jdXJyU2Nyb2xsWSA9IHN2Z0NvbnRhaW5lci5zY3JvbGxUb3A7XG5cbiAgLy8gU2V0IG1heGltdW0gcmFuZ2UgZm9yIHNjcm9sbCAoWC9ZKS5cbiAgY29uc3Qgd2luZG93TWF4UmFuZ2VYID0gc3RhdGUuY3VyclNjcm9sbFggKyBzdGF0ZS53aWR0aDtcbiAgY29uc3Qgd2luZG93TWF4UmFuZ2VZID0gc3RhdGUuY3VyclNjcm9sbFkgKyBzdGF0ZS5oZWlnaHQ7XG5cbiAgLy8gTWVhc3VyZSBjYXJkIGhlaWdodCBmb3IgcHJvcGVyIHJhbmdlIGNhbGN1bGF0aW9ucy5cbiAgc3RhdGUuY3VqQ2FyZEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdWpDYXJkJykuY2xpZW50SGVpZ2h0O1xuXG4gIC8vIENIRUNLUyBUTyBTRUUgSUYgQ0FSRCBGQUxMUyBXSVRISU4gVEhFIENVUlJFTlQgV0lORE9XLCBCRUZPUkUgSU5JVElBTElaSU5HIEFVVE9TQ1JPTEwgQU5JTUFUSU9OXG4gIGlmIChcbiAgICBjdXJyWCA+IHN0YXRlLmN1cnJTY3JvbGxYICYmXG4gICAgY3VyclggKyBzdGF0ZS5jdWpDYXJkV2lkdGggPCB3aW5kb3dNYXhSYW5nZVggJiZcbiAgICBjdXJyWSA+IHN0YXRlLmN1cnJTY3JvbGxZICYmXG4gICAgY3VyclkgKyBzdGF0ZS5jdWpDYXJkSGVpZ2h0IDwgd2luZG93TWF4UmFuZ2VZXG4gICkge1xuICAgIC8vIERPIE5PVEhJTkcuXG4gIH0gZWxzZSB7XG4gICAgLy8gU3RhcnQgYW5pbWF0ZWQgc2Nyb2xsIGludGVydmFsLlxuICAgIHN0YXJ0U2Nyb2xsVHJhbnNpdGlvbigpO1xuICB9XG5cbiAgdXBkYXRlTWFya2VycygpO1xufVxuXG4vLyAvIC8vLy8vIFNIT1cvSElERSBBTkQgUkVTRVQgRlVOQ1RJT05TIEZPUiBDVUogTU9ERSAgLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFdoZW4gdHVybmluZyBvZmYgQ1VKIE1vZGUsIHRoZSBjYXJkIGlzIGhpZGRlblxuZnVuY3Rpb24gaGlkZUNVSkNhcmQoKSB7XG4gIHN0YXRlLmN1cnJDYXJkLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICBkMy5zZWxlY3QoJyNuZXh0U3RlcCcpLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICBkMy5zZWxlY3QoJyNwcmV2U3RlcCcpLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICByZXNldENVSkNhcmRQcm9ncmVzcygpO1xufVxuXG4vLyBDVUogc3RhdHVzIGFsd2F5cyByZXNldHMgd2hlbiBjdWpNb2RlIGlzIHR1cm5lZCBvZmYsIG9yIGlmIHRoZSBhY3RpdmUgQ1VKIGNoYW5nZXMvZGlmZmVyZW50IGpvdXJuZXkgaXMgY2xpY2tlZC5cbmZ1bmN0aW9uIHJlc2V0Q1VKQ2FyZFByb2dyZXNzKCkge1xuICBpZiAoc3RhdGUuY3VqU2hlZXROYW1lcy5sZW5ndGggPiAwICYmIHN0YXRlLmFjdGl2ZUNVSkluZCA+IC0xKSB7XG4gICAgY29uc3QgcGVyY2VudCA9IDE7XG4gICAgY29uc3QgcFN0cmluZyA9IGAke3BlcmNlbnR9JWA7XG4gICAgZDMuc2VsZWN0KCcjcHJvZ3Jlc3MnKS5zdHlsZSgnd2lkdGgnLCBwU3RyaW5nKTtcbiAgfVxufVxuXG4vLyBXaGVuIENVSiBtb2RlIGlzIGV4aXRlZCwgb3IgYSBkaWZmZXJlbnQgQ1VKIGlzIHNlbGVjdGVkLCB3ZSBmaXJzdCBoYXZlIHRvIGhpZGUgYWxsIHRoZSBjdXJyZW50IENVSiBjb25uZWN0aW9ucy5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ1VKQ29ubmVjdG9ycygpIHtcbiAgLy8gUkVNT1ZFIExJTkU8IFRJVExFIEFORCBOT1RFXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgIC8vIERyYXcgRnJvbnQgQ2lyY2xlXG4gICAgY29uc3QgY3VyckZyb250ID0gc3RhdGUuY3VqRW5kUG9pbnRzW2ldLmZyb250RW5kUG9pbnQ7XG4gICAgY29uc3QgY3VyckJhY2sgPSBzdGF0ZS5jdWpFbmRQb2ludHNbaV0uYmFja0VuZFBvaW50O1xuXG4gICAgY3VyckZyb250LnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgIGN1cnJCYWNrLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICB9XG5cbiAgLy8gSElERSBBTEwgQUNUSVZFIENVSiBDT05ORUNUT1JTXG4gIGZvciAobGV0IGMgPSAwOyBjIDwgc3RhdGUuY3VqUm93cy5sZW5ndGg7IGMrKykge1xuICAgIGNvbnN0IHN0ZXBzID0gc3RhdGUuY3VqUm93c1tjXTtcbiAgICAvLyBMb29wIHRocm91Z2ggYXJyYXkgb2Ygc3RlcHMgbGlzdGVkIHdpdGhpbiBzcGVjaWZpYyBzaGVldC5cbiAgICBmb3IgKGxldCBoID0gMDsgaCA8IHN0ZXBzLmxlbmd0aDsgaCsrKSB7XG4gICAgICBjb25zdCBjdXJyQ29ubmVjdG9yID0gc3RhdGUuY3VqQ29ubmVjdENvbGxlY3Rpb25bY10uY29ubmVjdGlvbnNbaF07XG4gICAgICBjdXJyQ29ubmVjdG9yLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUNVSlN0ZXBzKCkge1xuICBkMy5zZWxlY3QoJyNnYWxCdG4nKS5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBzdGF0ZS5yb3dzLmxlbmd0aDsgeCsrKSB7XG4gICAgc3RhdGUucGFnZXNbeF0uaG92ZXJFbGxpcHNlXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgLmNsYXNzZWQoJ3RyYW5zJywgdHJ1ZSlcbiAgICAgIC5hdHRyKCdyeCcsIDApXG4gICAgICAuYXR0cigncnknLCAwKTtcbiAgfVxufVxuXG4vLyBMb29wIHRocm91Z2ggYWxsIENVSiBzaGVldHMsIGZpbmQgYW5kIG1hcCBjb3JyZXNwb25kaW5nIENVSiBzdGFydGluZyBwb2ludHMgb24gbWFwXG5leHBvcnQgZnVuY3Rpb24gZHJhd0ZsYXRDVUpTdGFydFBvaW50KCkge1xuICAvLyBBcnJheSB0aGF0IHdpbGwgaG9sZCB0aGUgc3RhcnRpbmcgY29vcmRpbmF0ZXMgb2YgZWFjaCBDVUouXG4gIHN0YXRlLmN1alN0YXJ0Q29vcmRpbmF0ZXMgPSBbXTtcblxuICAvLyBMb2NhbCB2YXIgdGhhdCB3aWxsIGhlbHAgdXMgZGV0ZXJtaW5lIGlmIG11bHRpcGxlIGpvdXJuZXlzIHNoYXJlIHRoZSBzYW1lIHN0YXJ0aW5nIHBhZ2UuXG4gIGxldCBwcmV2Q291bnQgPSAwO1xuXG4gIC8vIEZpcnN0LCB3ZSBuZWVkIHRvIGxvb3AgdGhydSB0aGUgQ1VKIHNoZWV0cy5cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBzdGF0ZS5jdWpSb3dzLmxlbmd0aDsgaisrKSB7XG4gICAgLy8gV2l0aGluIHRoZSBzaGVldCwgZXZhbHVhdGUgdGhlIGRpZmZlcmVudCBzdGVwcyBhbmQgY3JlYXRlIGEgbmVzdGVkIGFycmF5IG9mIGluZGV4ZXMuXG4gICAgY29uc3Qgc3RlcHMgPSBzdGF0ZS5jdWpSb3dzW2pdO1xuXG4gICAgaWYgKHN0ZXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIE5lZWQgdG8gcmVzZXQgcHJldkNvdW50IHZhciBiZWZvcmUgbG9va2luZyBhdCBuZXh0IGpvdXJuZXlcbiAgICAgIHByZXZDb3VudCA9IDA7XG5cbiAgICAgIC8vIFRoZSBmaXJzdCBjZWxsIGluIHRoZSBzaGVldCB3aWxsIHByb3ZpZGUgdGhlIGpvdXJuZXkgbmFtZS5cbiAgICAgIGNvbnN0IGN1cnJTdGFydE5hbWUgPSBzdGF0ZS5jdWpSb3dzW2pdWzBdLlBhZ2U7XG5cbiAgICAgIC8vIE5leHQsIGxvb3AgdGhydSB0aGUgcm93cyBpbiBlYWNoIENVSiBzaGVldCB0byBnZXQgdGhlIFN0ZXAgaW5mbyBmb3IgdGhhdCBqb3VybmV5LlxuICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBqOyBiKyspIHtcbiAgICAgICAgLy8gRmlyc3Qgcm93IHByb3ZpZGVzIHN0YXJ0aW5nIHBvaW50IGZvciB0aGF0IHNwZWNpZmljIENVSi5cbiAgICAgICAgY29uc3QgcE5hbWUgPSBzdGF0ZS5jdWpSb3dzW2JdWzBdLlBhZ2U7XG5cbiAgICAgICAgLy8gTG9va3MgdG8gc2VlIGlmIHRoZSBtYXRjaGluZyBwYWdlIHdhcyBhbHNvIHRoZSBzdGFydGluZyBwYWdlIGZvciBhIHByZXZpb3VzIGpvdXJuZXkuXG4gICAgICAgIC8vIFRoYXQgd2F5IHdlIGNhbiBtYWtlIHN1cmUgdGhlIHN0YXJ0aW5nICdkb3RzJyBkbyBOT1Qgb3ZlcmxhcC5cbiAgICAgICAgaWYgKHBOYW1lID09IGN1cnJTdGFydE5hbWUpIHtcbiAgICAgICAgICBwcmV2Q291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydE11bHRpcGxlID0gKHByZXZDb3VudCAqIHN0YXRlLnBhZ2VXaWR0aCkgLyAzO1xuXG4gICAgICBsZXQgbmFtZU1hdGNoID0gZmFsc2U7XG5cbiAgICAgIC8vIExPT1AgVEhSVSBDVUogU0hFRVRTXG4gICAgICBmb3IgKGxldCBoID0gMDsgaCA8IHN0ZXBzLmxlbmd0aDsgaCsrKSB7XG4gICAgICAgIC8vIE5leHQsIExvb3AgdGhydSBvcmlnaW4gYW5kL29yIHJvd3MgYXJyYXkgc28gd2UgY2FuIG1hdGNoIHBhZ2UgbmFtZXMgdG8gam91cm5leSBzdGFydHMuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUub3JpZ2lucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIENFTlRFUiBPRiBQQUdFIFJFTkRFUklORyAmIFNUQVJUSU5HIFBPSU5UIE9GIFRPUCBDT05ORUNUT1JcbiAgICAgICAgICBjb25zdCBjdXJyQ2VudGVyWCA9IHN0YXRlLm9yaWdpbnNbaV0uY2VudGVyWDtcbiAgICAgICAgICBjb25zdCBjdXJyQ2VudGVyWSA9IHN0YXRlLm9yaWdpbnNbaV0uY2VudGVyWTtcblxuICAgICAgICAgIC8vIExPT1AgVEhSVSBFWElTVElORyBST1dTIEFSUkFZXG4gICAgICAgICAgY29uc3QgY3Vyck5hbWUgPSBzdGF0ZS5yb3dzW2ldLk5hbWU7IC8vIFBBR0UgTkFNRVxuXG4gICAgICAgICAgLy8gT3BuY2Ugd2UgY29uZmlybSBhIG1hdGNoLCB0aGVuIHdlIGNhbiBkcm9wIHRoZSBDVUogc3RhcnRpbmcgcG9pbnQgb24gdGhlIG1hcC5cbiAgICAgICAgICBpZiAoY3Vyck5hbWUgPT0gc3RlcHNbaF0uUGFnZSkge1xuICAgICAgICAgICAgaWYgKGggPT0gMCB8fCAoaCA+IDAgJiYgbmFtZU1hdGNoID09IGZhbHNlKSkge1xuICAgICAgICAgICAgICBuYW1lTWF0Y2ggPSB0cnVlO1xuXG4gICAgICAgICAgICAgIC8vIFBsYWNlIHRoZSBzdGFydGluZyBkb3QgdXNpbmcgdHJpZyBhbmQgbWFpbnRhaW5pbmcgMi41RCBwZXJzcGVjdGl2ZS5cbiAgICAgICAgICAgICAgLy8gc3RhcnRNdWx0aXBsZSBoYW5kbGVzIGFuZCBtdWx0aXBsaWVzIHRoZSBwYWRkaW5nIGJldHdlZW4gdGhlIGpvdXJuZXkgc3RhcnRzIG9uIGEgc2luZ2xlIHBhZ2UgLS0gdGhhdCB3YXkgdGhlcmUgaXMgbm8gb3ZlcmxhcHBpbmcgc3RhcnRpbmcgcG9pbnRzLlxuICAgICAgICAgICAgICBjb25zdCBjdXJySW5wdXRYID1cbiAgICAgICAgICAgICAgICBjdXJyQ2VudGVyWCAtIHN0YXRlLnBhZ2VXaWR0aCAvIDUgLSBzdGFydE11bHRpcGxlO1xuICAgICAgICAgICAgICBjb25zdCBjdXJySW5wdXRZID0gY3VyckNlbnRlclk7XG4gICAgICAgICAgICAgIGxldCBhY3RpdmVDb2xvcjtcblxuICAgICAgICAgICAgICBpZiAoaiA9PSBzdGF0ZS5hY3RpdmVDVUpJbmQgJiYgc3RhdGUuY3VqTW9kZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbG9yID0gJzQ1NUE2NCc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sb3IgPSAnNDI4NWY0JztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2pdLnN0YXJ0XG4gICAgICAgICAgICAgICAgICAuYXR0cignY3gnLCBjdXJySW5wdXRYKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgY3VycklucHV0WSlcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdyeCcsIHN0YXRlLnBhZ2VXaWR0aCAvIDEyKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3J5Jywgc3RhdGUucGFnZVdpZHRoIC8gMTIpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBhY3RpdmVDb2xvcilcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJyNmZmZmZmYnKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdjdXJzb3InLCAncG9pbnRlcicpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnNDU1QTY0JylcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgICBzdGF0ZS5jdWpTdGFydHNbal0ub3ZlcmxheVN0YXJ0XG4gICAgICAgICAgICAgICAgICAuYXR0cignY3gnLCBjdXJySW5wdXRYKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgY3VycklucHV0WSlcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdyeCcsIHN0YXRlLnBhZ2VXaWR0aCAvIDEyKVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3J5Jywgc3RhdGUucGFnZVdpZHRoIC8gMTIpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgICAgICAgICAgICAgIC5zdHlsZSgnZmlsbCcsIGFjdGl2ZUNvbG9yKVxuICAgICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnI2ZmZmZmZicpXG4gICAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlLmN1alN0YXJ0c1tqXS5zdGFydC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jdWpTdGFydHNbal0ub3ZlcmxheVN0YXJ0LnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gU0FWRSBMT0NBVElPTiBvZiBzdGFydGluZyBwb2ludCBmb3IgbGF0ZXIgdXNlLlxuICAgICAgICAgICAgICBjb25zdCBsb2NPYmogPSB7IHg6IGN1cnJJbnB1dFgsIHk6IGN1cnJJbnB1dFkgfTtcbiAgICAgICAgICAgICAgc3RhdGUuY3VqU3RhcnRDb29yZGluYXRlcy5wdXNoKGxvY09iaik7XG5cbiAgICAgICAgICAgICAgLy8gTUFLRSBTVVJFIFRFWFQgUkVNQUlOUyBISURERU5cbiAgICAgICAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2pdLnRleHRcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgncGFnZS1sYWJlbCcsIHRydWUpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lTWF0Y2ggPT0gZmFsc2UpIHtcbiAgICAgICAgICBzdGF0ZS5jdWpTdGFydHNbal0uc3RhcnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2pdLm92ZXJsYXlTdGFydFxuICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpXG4gICAgICAgICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJyk7XG4gICAgICAgICAgc3RhdGUuY3VqU3RhcnRzW2pdLnRleHQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgZDMuc2VsZWN0KGAjc1Qke2p9YCkuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdGbGF0Q1VKQ29ubmVjdG9ycygpIHtcbiAgbGV0IHByZXZQYWdlSW5kID0gMDtcbiAgY29uc3Qgc1cgPSBNYXRoLmNlaWwoc3RhdGUuem9vbUxldmVsICogNCk7XG5cbiAgLy8gRklSU1QsIExPT1AgVEhSVSBDVUogU0hFRVRTXG4gIGZvciAobGV0IGogPSAwOyBqIDwgc3RhdGUuY3VqUm93cy5sZW5ndGg7IGorKykge1xuICAgIC8vIE5FWFQsIFB1bGwgb3V0IGFycmF5IG9mIHN0ZXBzIGZyb20gdGhlIGFib3ZlIGFycmF5LlxuICAgIGNvbnN0IHN0ZXBzID0gc3RhdGUuY3VqUm93c1tzdGF0ZS5hY3RpdmVDVUpJbmRdO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFycmF5IG9mIHN0ZXBzIGxpc3RlZCB3aXRoaW4gc3BlY2lmaWMgc2hlZXQuXG4gICAgZm9yIChsZXQgaCA9IDA7IGggPCBzdGVwcy5sZW5ndGg7IGgrKykge1xuICAgICAgLy8gTmV4dCwgZXZhbHVhdGUgcm93cyBhcnJheSB0byBtYXRjaCBzdGVwcyB0byBwYWdlcyByZW5kZXJlZCB3aXRoaW4gdGhlIG1hcC5cbiAgICAgIC8vIE5PVEU6IFJvd3MgYW5kIE9yaWdpbnMgQXJyYXkgaGF2ZSBzYW1lIGxlbmd0aC5cbiAgICAgIC8vIFNpbmNlIHRoZXJlJ3MgYSAxOjEgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIGluZGV4ZXMgb2YgYm90aCBhcnJheXMsIHdlIGxvb3AgdGhydSBvbmUsIGJ1dCB1c2UgdGhlIHNhbWUgaW5kZXggdmFsdWUgdG8gcmVmZXJlbmNlIGluZm8gaW4gdGhlIG90aGVyIGFycmF5LlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5vcmlnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIExPT1AgVEhSVSBFWElTVElORyBST1dTIEFSUkFZXG4gICAgICAgIGNvbnN0IGN1cnJOYW1lID0gc3RhdGUucm93c1tpXS5OYW1lOyAvLyBQQUdFIE5BTUVcbiAgICAgICAgY29uc3QgY3VyckxldmVsID0gc3RhdGUucm93c1tpXS5MZXZlbDsgLy8gUEFHRSBMRVZFTFxuICAgICAgICBjb25zdCBjdXJyQ2VudGVyWCA9IHN0YXRlLm9yaWdpbnNbaV0uY2VudGVyWDtcbiAgICAgICAgY29uc3QgY3VyckNlbnRlclkgPSBzdGF0ZS5vcmlnaW5zW2ldLmNlbnRlclk7XG4gICAgICAgIGxldCBwcmV2TGV2ZWwgPSAwO1xuXG4gICAgICAgIC8vIENoZWNrcyBmb3IgYSBtYXRjaGluZyBwYWdlIG5hbWUgc28gdGhhdCB3ZSBjYW4gc3RhcnQgbWFwcGluZyB0aGUgcGF0aCBhbmQgJ2Nvbm5lY3RpbmcgdGhlIGRvdHMnIGJldHdlZW4gcGFnZXMuXG4gICAgICAgIGlmIChjdXJyTmFtZSA9PSBzdGVwc1toXS5QYWdlKSB7XG4gICAgICAgICAgLy8gRFJBVyBTVEFSVCBBTkQgRU5EIFBPSU5UU1xuXG4gICAgICAgICAgLy8gVGVybWluYWwgUG9pbnQgaW4gQmFjayBvZiBQYWdlXG4gICAgICAgICAgY29uc3QgY3VyckJhY2tFbmRYID0gc3RhdGUub3JpZ2luc1tpXS5yaWdodENlbnRlclg7IC8vIFN0YXJ0aW5nIHBvaW50cyBkb24ndCBmYWxsIG9uIHRoZSBleGFjdCBjZW50ZXIgb2YgdGhlIHBhZ2UuIFRvIG1haW50YWluIHRoZVxuICAgICAgICAgIGNvbnN0IGN1cnJCYWNrRW5kWSA9IHN0YXRlLm9yaWdpbnNbaV0uY2VudGVyWTtcblxuICAgICAgICAgIC8vIFRlcm1pbmFsIFBvaW50IGluIEZyb250IG9mIFBhZ2VcbiAgICAgICAgICBsZXQgY3VyckZyb250RW5kWCA9IGN1cnJDZW50ZXJYIC0gc3RhdGUucGFnZUhlaWdodCAvIDEwOyAvLyBTdGFydGluZyBwb2ludHMgZG9uJ3QgZmFsbCBvbiB0aGUgZXhhY3QgY2VudGVyIG9mIHRoZSBwYWdlLiBUbyBtYWludGFpbiB0aGVcbiAgICAgICAgICBsZXQgY3VyckZyb250RW5kWSA9IGN1cnJDZW50ZXJZO1xuXG4gICAgICAgICAgbGV0IGN1cnJGcm9udEVuZFBvaW50O1xuICAgICAgICAgIGxldCBwcmV2RnJvbnRFbmRQb2ludDtcbiAgICAgICAgICBsZXQgY3VyckJhY2tFbmRQb2ludDtcbiAgICAgICAgICBsZXQgcHJldkJhY2tFbmRQb2ludDtcblxuICAgICAgICAgIC8vIERyYXcgRnJvbnQgQ2lyY2xlXG4gICAgICAgICAgaWYgKCFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MpIHtcbiAgICAgICAgICAgIHN0YXRlLmN1akVuZFBvaW50c1tpXS5mcm9udEVuZFBvaW50XG4gICAgICAgICAgICAgIC5hdHRyKCdjeCcsIGN1cnJGcm9udEVuZFgpXG4gICAgICAgICAgICAgIC5hdHRyKCdjeScsIGN1cnJGcm9udEVuZFkpXG4gICAgICAgICAgICAgIC5hdHRyKCdyeCcsIHN0YXRlLnBhZ2VXaWR0aCAvIDEyKVxuICAgICAgICAgICAgICAuYXR0cigncnknLCBzdGF0ZS5wYWdlV2lkdGggLyAxMik7XG5cbiAgICAgICAgICAgIHN0YXRlLmN1akVuZFBvaW50c1tpXS5iYWNrRW5kUG9pbnRcbiAgICAgICAgICAgICAgLmF0dHIoJ2N4JywgY3VyckJhY2tFbmRYKVxuICAgICAgICAgICAgICAuYXR0cignY3knLCBjdXJyQmFja0VuZFkpXG4gICAgICAgICAgICAgIC5hdHRyKCdyeCcsIHN0YXRlLnBhZ2VXaWR0aCAvIDEyKVxuICAgICAgICAgICAgICAuYXR0cigncnknLCBzdGF0ZS5wYWdlV2lkdGggLyAxMik7XG5cbiAgICAgICAgICAgIGN1cnJGcm9udEVuZFBvaW50ID0gc3RhdGUuY3VqRW5kUG9pbnRzW2ldLmZyb250RW5kUG9pbnQ7XG4gICAgICAgICAgICBwcmV2RnJvbnRFbmRQb2ludCA9IHN0YXRlLmN1akVuZFBvaW50c1twcmV2UGFnZUluZF0uZnJvbnRFbmRQb2ludDtcbiAgICAgICAgICAgIGN1cnJCYWNrRW5kUG9pbnQgPSBzdGF0ZS5jdWpFbmRQb2ludHNbaV0uYmFja0VuZFBvaW50O1xuICAgICAgICAgICAgcHJldkJhY2tFbmRQb2ludCA9IHN0YXRlLmN1akVuZFBvaW50c1twcmV2UGFnZUluZF0uYmFja0VuZFBvaW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBjdXJyQ29ubmVjdG9yO1xuICAgICAgICAgIGxldCBwcmV2QmFja0VuZFg7XG4gICAgICAgICAgbGV0IHByZXZCYWNrRW5kWTtcbiAgICAgICAgICBsZXQgcHJldkZyb250RW5kWDtcbiAgICAgICAgICBsZXQgcHJldkZyb250RW5kWTtcbiAgICAgICAgICAvLyBUbyBzdGFydCBkcmF3aW5nIHBhdGh3YXlzLCB3ZSBuZWVkIHRvIGZpcnN0IGNoZWNrIHRoYXQgdGhlIGNvbm5lY3Rpb24gaXMgY29taW5nIGZyb20gYW4gZXhpc3RpbmcgcGFnZS5cbiAgICAgICAgICAvLyBUaGlzIGludCB3aWxsIGJlID4wIGlmIHRoZSBwYWdlIGluIHF1ZXN0aW9uIGlzIG9uZSBvZiB0aGUgbGF0ZXIgc3RlcHMgd2l0aGluIHRoZSBDVUouXG4gICAgICAgICAgaWYgKGggPiAwKSB7XG4gICAgICAgICAgICBwcmV2TGV2ZWwgPSBzdGF0ZS5yb3dzW3ByZXZQYWdlSW5kXS5MZXZlbDtcblxuICAgICAgICAgICAgLy8gVmFycyB0byBob2xkIGRhdGEgZnJvbSBwcmV2aW91cyBzdGVwIHBhZ2UuXG4gICAgICAgICAgICBjb25zdCBwcmV2Q2VudGVyWCA9IHN0YXRlLm9yaWdpbnNbcHJldlBhZ2VJbmRdLmNlbnRlclg7XG4gICAgICAgICAgICBjb25zdCBwcmV2Q2VudGVyWSA9IHN0YXRlLm9yaWdpbnNbcHJldlBhZ2VJbmRdLmNlbnRlclk7XG5cbiAgICAgICAgICAgIGlmIChjdXJyTGV2ZWwgPiBwcmV2TGV2ZWwpIHtcbiAgICAgICAgICAgICAgLy8gQmFjayBUZXJtaW5hbCBQb2ludCBQb3NpdGlvblxuICAgICAgICAgICAgICBwcmV2QmFja0VuZFggPSBzdGF0ZS5vcmlnaW5zW3ByZXZQYWdlSW5kXS5yaWdodENlbnRlclg7XG4gICAgICAgICAgICAgIHByZXZCYWNrRW5kWSA9IHByZXZDZW50ZXJZO1xuXG4gICAgICAgICAgICAgIC8vIEZyb250IFRlcm1pbmFsIFBvaW50IFBvc2l0aW9uXG4gICAgICAgICAgICAgIHByZXZGcm9udEVuZFggPSBjdXJyQ2VudGVyWCAtIHN0YXRlLnBhZ2VIZWlnaHQgLyAxMDtcbiAgICAgICAgICAgICAgcHJldkZyb250RW5kWSA9IHByZXZDZW50ZXJZO1xuXG4gICAgICAgICAgICAgIHByZXZCYWNrRW5kUG9pbnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgICBjdXJyRnJvbnRFbmRQb2ludC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgLy8gQ29ubmVjdG9yIFBvc2l0aW9uXG4gICAgICAgICAgICAgIGN1cnJDb25uZWN0b3IgPVxuICAgICAgICAgICAgICAgIHN0YXRlLmN1akNvbm5lY3RDb2xsZWN0aW9uW3N0YXRlLmFjdGl2ZUNVSkluZF0uY29ubmVjdGlvbnNbaF07XG4gICAgICAgICAgICAgIGN1cnJDb25uZWN0b3JcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gxJywgcHJldkJhY2tFbmRYKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIHByZXZCYWNrRW5kWSlcbiAgICAgICAgICAgICAgICAuYXR0cigneDInLCBjdXJyRnJvbnRFbmRYKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MicsIGN1cnJGcm9udEVuZFkpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2N1akxpbmUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHNXKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckxldmVsIDwgcHJldkxldmVsKSB7XG4gICAgICAgICAgICAgIC8vIEJhY2sgVGVybWluYWwgUG9pbnQgUG9zaXRpb25cbiAgICAgICAgICAgICAgcHJldkJhY2tFbmRYID0gcHJldkNlbnRlclggKyBzdGF0ZS5wYWdlSGVpZ2h0IC8gMTA7XG4gICAgICAgICAgICAgIHByZXZCYWNrRW5kWSA9IHByZXZDZW50ZXJZO1xuXG4gICAgICAgICAgICAgIC8vIEZyb250IFRlcm1pbmFsIFBvaW50IFBvc2l0aW9uXG4gICAgICAgICAgICAgIHByZXZGcm9udEVuZFggPSBwcmV2Q2VudGVyWCAtIHN0YXRlLnBhZ2VIZWlnaHQgLyAxMDtcbiAgICAgICAgICAgICAgcHJldkZyb250RW5kWSA9IHByZXZDZW50ZXJZO1xuXG4gICAgICAgICAgICAgIGN1cnJCYWNrRW5kUG9pbnQuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuXG4gICAgICAgICAgICAgIC8vIENvbm5lY3RvciBQb3NpdGlvblxuICAgICAgICAgICAgICBjdXJyQ29ubmVjdG9yID1cbiAgICAgICAgICAgICAgICBzdGF0ZS5jdWpDb25uZWN0Q29sbGVjdGlvbltzdGF0ZS5hY3RpdmVDVUpJbmRdLmNvbm5lY3Rpb25zW2hdO1xuICAgICAgICAgICAgICBjdXJyQ29ubmVjdG9yXG4gICAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd4MScsIHByZXZGcm9udEVuZFgpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kxJywgcHJldkZyb250RW5kWSlcbiAgICAgICAgICAgICAgICAuYXR0cigneDInLCBjdXJyQmFja0VuZFgpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3kyJywgY3VyckJhY2tFbmRZKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdjdWpMaW5lJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBGcm9udCBUZXJtaW5hbCBQb2ludCBQb3NpdGlvblxuICAgICAgICAgICAgICBwcmV2RnJvbnRFbmRYID0gcHJldkNlbnRlclggLSBzdGF0ZS5wYWdlSGVpZ2h0IC8gMTA7XG4gICAgICAgICAgICAgIHByZXZGcm9udEVuZFkgPSBwcmV2Q2VudGVyWTtcblxuICAgICAgICAgICAgICBjdXJyRnJvbnRFbmRQb2ludC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgIHByZXZGcm9udEVuZFBvaW50LnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgICAgICAgICAgICAvLyBDb25uZWN0b3IgUG9zaXRpb25cbiAgICAgICAgICAgICAgY3VyckNvbm5lY3RvciA9XG4gICAgICAgICAgICAgICAgc3RhdGUuY3VqQ29ubmVjdENvbGxlY3Rpb25bc3RhdGUuYWN0aXZlQ1VKSW5kXS5jb25uZWN0aW9uc1toXTtcbiAgICAgICAgICAgICAgY3VyckNvbm5lY3RvclxuICAgICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAuYXR0cigneDEnLCBwcmV2RnJvbnRFbmRYKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd5MScsIHByZXZGcm9udEVuZFkpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3gyJywgY3VyckZyb250RW5kWClcbiAgICAgICAgICAgICAgICAuYXR0cigneTInLCBjdXJyRnJvbnRFbmRZKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdjdWpMaW5lJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZJTkFMTFksIFdFIENFSENLIFRPIFNFRSBJRiBUSEUgUEFHRSBJUyBUSEUgRklSU1QgU1RFUCBJTiBUSEUgQ1VKXG5cbiAgICAgICAgICAgIC8vIGlmIHNvLCB3ZSBvbmx5IHJlbmRlciBhIHBhcnRpY2FsIHBhdGggZnJvbSB0aGUgc3RhcnRpbmcgZG90IHRvIHRoZSBjb3JyZXNwb25kaW5nIHN0YXJ0IHBhZ2UuXG4gICAgICAgICAgICBjb25zdCBjdXJyU3RhcnRYID0gc3RhdGUuY3VqU3RhcnRDb29yZGluYXRlc1tzdGF0ZS5hY3RpdmVDVUpJbmRdLng7XG4gICAgICAgICAgICBjb25zdCBjdXJyU3RhcnRZID0gc3RhdGUuY3VqU3RhcnRDb29yZGluYXRlc1tzdGF0ZS5hY3RpdmVDVUpJbmRdLnk7XG5cbiAgICAgICAgICAgIC8vIEZyb250IFRlcm1pbmFsIFBvaW50IFBvc2l0aW9uXG4gICAgICAgICAgICBjdXJyRnJvbnRFbmRYID0gY3VyckNlbnRlclggLSBzdGF0ZS5wYWdlSGVpZ2h0IC8gMTA7XG4gICAgICAgICAgICBjdXJyRnJvbnRFbmRZID0gY3VyckNlbnRlclk7XG5cbiAgICAgICAgICAgIGN1cnJGcm9udEVuZFBvaW50LnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblxuICAgICAgICAgICAgLy8gQ29ubmVjdG9yIFBvc2l0aW9uXG4gICAgICAgICAgICBjdXJyQ29ubmVjdG9yID1cbiAgICAgICAgICAgICAgc3RhdGUuY3VqQ29ubmVjdENvbGxlY3Rpb25bc3RhdGUuYWN0aXZlQ1VKSW5kXS5jb25uZWN0aW9uc1swXTtcbiAgICAgICAgICAgIGN1cnJDb25uZWN0b3JcbiAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAuYXR0cigneDEnLCBjdXJyU3RhcnRYKVxuICAgICAgICAgICAgICAuYXR0cigneTEnLCBjdXJyU3RhcnRZKVxuICAgICAgICAgICAgICAuYXR0cigneDInLCBjdXJyRnJvbnRFbmRYKVxuICAgICAgICAgICAgICAuYXR0cigneTInLCBjdXJyRnJvbnRFbmRZKVxuICAgICAgICAgICAgICAuY2xhc3NlZCgnY3VqTGluZScsIHRydWUpXG4gICAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBzVyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUGlnZ3ktYmFjayBwcmV2IHBhZ2UgaW5kZXggdmFyIGZvciBjb21wYXJpc29uIGluIG5leHQgcnVuIG9mIGZvciBsb29wLlxuICAgICAgICAgIHByZXZQYWdlSW5kID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3RmxhdE1hcmtlcnMoKSB7XG4gIC8vIFB1bGwgb3V0IGFycmF5IG9mIHN0ZXBzIGZyb20gdGhlIGFib3ZlIGFycmF5LlxuICBpZiAoIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgIGNvbnN0IHN0ZXBzID0gc3RhdGUuY3VqUm93c1tzdGF0ZS5hY3RpdmVDVUpJbmRdO1xuXG4gICAgLy8gUmVzZXQgQ3VycmVudCBNYXJrZXIgQXJyYXlzXG4gICAgbGV0IGN1cnJDVUpNYXJrZXJBcnJheSA9IFtdO1xuICAgIGN1cnJDVUpNYXJrZXJBcnJheSA9IHN0YXRlLmN1ak1hcmtlckNvbGxlY3Rpb25bc3RhdGUuYWN0aXZlQ1VKSW5kXS5tYXJrZXJzO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFycmF5IG9mIHN0ZXBzIGxpc3RlZCB3aXRoaW4gc3BlY2lmaWMgc2hlZXQuXG4gICAgZm9yIChsZXQgaCA9IDA7IGggPCBzdGVwcy5sZW5ndGg7IGgrKykge1xuICAgICAgY29uc3QgY3VyckNpcmNsZSA9IGN1cnJDVUpNYXJrZXJBcnJheVtoXS5lbGxpcHNlT2JqO1xuICAgICAgY29uc3QgY3VyclRleHQgPSBjdXJyQ1VKTWFya2VyQXJyYXlbaF0uc3RlcFRleHQ7XG4gICAgICBjb25zdCBjdXJyUGFnZU5hbWUgPSBjdXJyQ1VKTWFya2VyQXJyYXlbaF0ucGFnZTtcbiAgICAgIGxldCBtYXRjaGVkSW5kID0gLTE7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY3VyclBhZ2VOYW1lID09IHN0YXRlLnJvd3NbaV0uTmFtZSkge1xuICAgICAgICAgIG1hdGNoZWRJbmQgPSBpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaGVkSW5kID4gLTEpIHtcbiAgICAgICAgY29uc3QgbnVtYmVyWCA9IHN0YXRlLm9yaWdpbnNbbWF0Y2hlZEluZF0uY2VudGVyWDtcbiAgICAgICAgY29uc3QgbnVtYmVyWSA9IHN0YXRlLm9yaWdpbnNbbWF0Y2hlZEluZF0uY2VudGVyWTtcbiAgICAgICAgY29uc3QgbnVtYmVyU3RyID0gaCArIDE7XG4gICAgICAgIGNvbnN0IGN1cnJIZXggPSBzdGF0ZS5wYWdlQ29sb3JzW21hdGNoZWRJbmRdO1xuXG4gICAgICAgIGNvbnN0IGN1cnJJRFN0ciA9IGBjaXJjbGUke2h9YDtcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgYHJvdGF0ZSgwZGVnKWA/XG4gICAgICAgIGNvbnN0IGRlZ1N0cmluZyA9IGByb3RhdGUoJHswfWRlZykgc2tld1goMGRlZylgO1xuXG4gICAgICAgIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICAgICAgLy8gU3R5bGUgTnVtYmVyIFRleHRcbiAgICAgICAgICBjdXJyVGV4dFxuICAgICAgICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXG4gICAgICAgICAgICAudGV4dChudW1iZXJTdHIpXG4gICAgICAgICAgICAuc3R5bGUoJ3RvcCcsIG51bWJlclkgLSBzdGF0ZS5wYWdlSGVpZ2h0IC8gMylcbiAgICAgICAgICAgIC5zdHlsZSgnd2lkdGgnLCBzdGF0ZS5wYWdlSGVpZ2h0KVxuICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LWFsaWduJywgJ2NlbnRlcicpXG4gICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBudW1iZXJYIC0gc3RhdGUucGFnZUhlaWdodCAvIDIpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHN0YXRlLnN0ZXBOb0xhYmVsU2l6ZSAvIDEuNSlcbiAgICAgICAgICAgIC5zdHlsZSgndHJhbnNmb3JtJywgZGVnU3RyaW5nKVxuICAgICAgICAgICAgLnN0eWxlKCdjb2xvcicsIGN1cnJIZXggKyAxMClcbiAgICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDEwMClcbiAgICAgICAgICAgIC5jbGFzc2VkKCd0cmFucycsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBjdXJyVGV4dC5hdHRyKCdpZCcsIGN1cnJJRFN0cik7XG5cbiAgICAgICAgLy8gU2V0cyB1cCBwb3NpdGlvbmluZyBvZlxuICAgICAgICBjb25zdCBjdXJySGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY3VycklEU3RyKS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGN1cnJXaWR0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGN1cnJJRFN0cikuY2xpZW50V2lkdGg7XG5cbiAgICAgICAgaWYgKCFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MpIHtcbiAgICAgICAgICBjdXJyVGV4dFxuICAgICAgICAgICAgLnN0eWxlKCd0b3AnLCBudW1iZXJZIC0gY3VyckhlaWdodCAvIDIpXG4gICAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBudW1iZXJYIC0gY3VycldpZHRoIC8gMik7XG5cbiAgICAgICAgICBjdXJyQ2lyY2xlXG4gICAgICAgICAgICAuYXR0cigncngnLCBzdGF0ZS5wYWdlSGVpZ2h0KVxuICAgICAgICAgICAgLmF0dHIoJ3J5Jywgc3RhdGUucGFnZUhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKCdjeCcsIG51bWJlclgpXG4gICAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBjdXJySGV4ICsgNSlcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgY3VyckhleCArIDMwKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMTAwKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3RyYW5zJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxsQ1VKU3RhcnRzKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmN1alN0YXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHN0YXRlLmN1alN0YXJ0c1tpXS50ZXh0LnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICB9XG59XG5cbi8vIEhhbmRsZSBDVUogJ0RvdCcgU3RhcnQgY2xpY2sgW0lNUE9SVEFOVF1cbmV4cG9ydCBmdW5jdGlvbiBjdWpTdGFydENsaWNrKCkge1xuICAvLyBDT05TSURFUiBGSVhJTkc6IFRoZXJlIGFyZSBhIGxvdCBvZiBjb25kaXRpb25hbHMgdGhhdCBoYXZlIGJlZW4gY2FyZWZ1bGx5IG9yZGVyZWQgaW4gdGhlIGZ1bmN0aW9uLlxuICAvLyBJdCBzZWVtcyBsaWtlIHRoZXJlJ3MgYSBiZXR0ZXIgc3RydWN0dXJlIHRoYXQgY2FuIGJlIGFwcGxpZWQgaGVyZS5cbiAgc3RhdGUuYWN0aXZlU3RlcEluZCA9IDA7IC8vIFJFU0VUIEFDVElWRSBDVUogSU5ERVhcblxuICAvLyBNYXJnaW4gZm9yIGV2YWx1YXRpbmcgd2hldGhlciBvciBub3QgdG8gYmVnaW4gYSB6b29tIHRyYW5zaXRpb25pbmcgd2hlbiBleGl0aW5nIENVSiBtb2RlLlxuICBjb25zdCBmbG9hdE1hcmdpbiA9IDAuMjtcbiAgbGV0IGVuYWJsZVpvb20gPSB0cnVlO1xuXG4gIC8vIENoZWNrIHRvIHNlZSBpZiBhIENVSiBpcyBhbHJlYWR5IGFjdGl2ZS4gSWYgc28sIGhpZGUgaXQgYmVmb3JlIHNob3dpbmcgdGhlIG5ldyBDVUouXG4gIGlmIChzdGF0ZS5jdWpNb2RlKSB7XG4gICAgaGlkZUNVSkNvbm5lY3RvcnMoKTtcbiAgICBoaWRlQ1VKU3RlcHMoKTtcbiAgICBjbGVhck1hcmtlcnMoKTtcbiAgfVxuXG4gIC8vIElGIENVSiBDT05UUk9MIElTIFRPR0xFRCBPTi9PRkZcbiAgLy8gQ09OU0lERVIgRklYSU5HOiBUaGlzIGNvdWxkIGJlIGNsZWFuZWQgdXAuXG4gIGlmIChzdGF0ZS5jdWpNb2RlICYmIHN0YXRlLnByZXZBY3RpdmVDVUpJbmQgPT0gc3RhdGUuYWN0aXZlQ1VKSW5kKSB7XG4gICAgc3RhdGUuY3VqTW9kZSA9ICFzdGF0ZS5jdWpNb2RlO1xuICB9IGVsc2UgaWYgKHN0YXRlLmN1ak1vZGUgPT0gZmFsc2UpIHtcbiAgICBzdGF0ZS5jdWpNb2RlID0gIXN0YXRlLmN1ak1vZGU7XG4gIH1cblxuICAvLyBJRiBDVUogTU9ERSBJUyBOT1cgQUNUSVZFXG4gIGlmIChzdGF0ZS5jdWpNb2RlKSB7XG4gICAgLy8gSWYgYSBub2RlIGlzIHNlbGVjdGVkLCBoaWRlIGl0IGJlZm9yZSBqdW1waW5nIGludG8gQ1VKIG1vZGUuXG4gICAgaGlkZU5vZGVQYW5lbCgpO1xuXG4gICAgLy8gQ09OU0lERVIgRklYSU5HOiBUaGUgYXV0b21hdGljIHNuYXBwaW5nIHRvIHRoaXMgem9vbSBsZXZlbCBjb3VsZCBiZSBqYXJyaW5nIGZvciBlbmQgdXNlcnNcbiAgICAvLyBUaGluayBhYm91dCB3YXlzIHRvIGFwcGx5IGFuaW1hdGlvbiB0byBlYXNlIHRoaXMgdHJhbnNpdGlvbi5cbiAgICBzdGF0ZS50YXJnZXRab29tTGV2ZWwgPSAxLjU7IC8vIEF1dG9tYXRpY2FsbHkgc2V0IHpvb20gbGV2ZWxcbiAgICBzdGF0ZS5pc0NVSlpvb21pbmcgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIENVSnMgZXhpc3QsIHRoaXMgaXMgYSByZWR1bmRhbnQgc3RlcCB0byByZXNldCBDVUogdGV4dC5cbiAgICBpZiAoc3RhdGUuY3VqU2hlZXROYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXNldENVSlN0YXJ0VGV4dCgpO1xuICAgIH1cblxuICAgIC8vIFN0b3JlIHpvb20gJiBzY3JvbGwgdmFsdWVzIGZvciB3aGVuIHVzZXIgRXhpdHMgQ1VKIG1vZGVcbiAgICBzdGF0ZS5pc0NVSlpvb21pbmcgPSBmYWxzZTtcblxuICAgIC8vIFJlY2FsbCBhbmQgYWRqdXN0IHpvb21cbiAgICBpZiAoc3RhdGUucHJlQ3VqWm9vbUxldmVsIDw9IDAuNCkge1xuICAgICAgc3RhdGUucHJlQ3Vab29tTGV2ZWwgPSAwLjU7XG4gICAgICBzdGF0ZS50YXJnZXRab29tTGV2ZWwgPSAwLjU7XG4gICAgICBzdGF0ZS5mbGF0dGVuTWFwID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChzdGF0ZS5wcmVDdWpab29tTGV2ZWwgPD0gMC43KSB7XG4gICAgICBzdGF0ZS50YXJnZXRab29tTGV2ZWwgPSBzdGF0ZS5wcmVDdWpab29tTGV2ZWw7XG4gICAgICBzdGF0ZS5mbGF0dGVuTWFwID0gZmFsc2U7XG4gICAgICAvLyBJZiB6b29tIGRlbHRhIGlzIG91dHNpZGUgYWNjZXB0YWJsZSByYW5nZSwgZG8gYXV0byB6b29tIG91dC5cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKHN0YXRlLnByZUN1alpvb21MZXZlbCA8IHN0YXRlLnRhcmdldFpvb21MZXZlbCAtIGZsb2F0TWFyZ2luICYmXG4gICAgICAgIHN0YXRlLnByZUN1alpvb21MZXZlbCA+IHN0YXRlLnRhcmdldFpvb21MZXZlbCArIGZsb2F0TWFyZ2luKSB8fFxuICAgICAgc3RhdGUuY3VqTW9kZVxuICAgICkge1xuICAgICAgc3RhdGUudGFyZ2V0Wm9vbUxldmVsID0gc3RhdGUucHJlQ3VqWm9vbUxldmVsO1xuICAgICAgc3RhdGUuZmxhdHRlbk1hcCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wcmVDdWpab29tTGV2ZWwgPSBzdGF0ZS50YXJnZXRab29tTGV2ZWw7XG4gICAgICBlbmFibGVab29tID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuYWJsZVpvb20pIHtcbiAgICBzdGFydFpvb21UcmFuc2l0aW9uKCk7XG4gIH1cblxuICAvLyBQaWdneS1iYWNraW5nIGFjaXR2ZSBDVUogdmFycyBmb3IgbGF0ZXIgcnVuIHRocm91Z2guXG4gIHN0YXRlLnByZXZBY3RpdmVDVUpJbmQgPSBzdGF0ZS5hY3RpdmVDVUpJbmQ7XG5cbiAgLy8gVXBkYXRlIHRoZSB2aXogYmFzZWQgb24gbmV3IHpvb20gbGV2ZWwuXG4gIHVwZGF0ZVZpcygpO1xuXG4gIC8vIElmIENVSiBNb2RlIC0gc25hcCB0byBzdGFydGluZyBsb2NhdGlvbiBhZnRlciB0aGUgdmlzIGhhcyBiZWVuIHVwZGF0ZWRcbiAgaWYgKHN0YXRlLmN1ak1vZGUpIHtcbiAgICBzbmFwVG9DVUpTdGFydExvYygpO1xuICB9XG59XG5cbi8vIEFzIHRoZSBtYXAgem9vbXMgb3V0LCBDVUogbWFya2VyIGxhYmVscyBkaXNzYXBwZWFyIGFuZCBvbmx5IHRoZSBkb3RzIHJlbWFpbi5cbi8vIFRPRE86IENvbWUgdXAgd2l0aCBiZXR0ZXIgYWZmb3JkYW5jZXMgYW5kIENVSiBtYXJrZXIgc3R5bGUuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ1VKU3RhcnRWaXNpYmlsaXR5KCkge1xuICBmb3IgKGNvbnN0IGN1alN0YXJ0IG9mIHN0YXRlLmN1alN0YXJ0cykge1xuICAgIGN1alN0YXJ0LnRleHQuc3R5bGUoXG4gICAgICAndmlzaWJpbGl0eScsXG4gICAgICBzdGF0ZS56b29tTGV2ZWwgPCAwLjMgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1xuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHN2Z0NvbnRhaW5lclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3NlbGVjdGlvbnMnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBnZXRJc0luQWN0aXZlQ1VKIH0gZnJvbSAnLi4vLi4vc3RhdGVVdGlsaXRpZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZUFkZHJlc3MocGFnZURhdGEpIHtcbiAgY29uc3QgdGV4dCA9XG4gICAgcGFnZURhdGEuRW50aXR5ID09PSAnY29tcG9uZW50J1xuICAgICAgPyBgQ09NUE9ORU5UICR7cGFnZURhdGEuQWRkcmVzcy50b1VwcGVyQ2FzZSgpfWBcbiAgICAgIDogcGFnZURhdGEuQWRkcmVzcy50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gc3ZnQ29udGFpbmVyU2VsZWN0aW9uXG4gICAgLmFwcGVuZCgnZGl2JylcbiAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAuY2xhc3NlZCgnYWRkcmVzcy1sYWJlbCcsIHRydWUpXG4gICAgLnRleHQodGV4dClcbiAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3UGFnZUFkZHJlc3MoY29sb3IsIHBhZ2UsIHBvc2l0aW9uKSB7XG4gIGxldCBvcGFjaXR5ID0gMTtcbiAgbGV0IGN1cnJWaXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBpZiAoc3RhdGUuZmxhdHRlbk1hcCB8fCBzdGF0ZS50YXJnZXRab29tTGV2ZWwgPCAwLjgpIHtcbiAgICBvcGFjaXR5ID0gMDtcbiAgICBjdXJyVmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9IGVsc2UgaWYgKHN0YXRlLmN1ak1vZGUgJiYgIWdldElzSW5BY3RpdmVDVUoocGFnZSkpIHtcbiAgICBvcGFjaXR5ID0gMC4yNTtcbiAgfSBlbHNlIHtcbiAgICBvcGFjaXR5ID0gMTtcbiAgfVxuXG4gIHBhZ2UuYWRkcmVzc1xuICAgIC5jbGFzc2VkKCd0cmFucycsIGZhbHNlKVxuICAgIC5zdHlsZSgnY29sb3InLCBjb2xvcilcbiAgICAuc3R5bGUoJ2xlZnQnLCBwb3NpdGlvbi54KVxuICAgIC5zdHlsZSgnb3BhY2l0eScsIG9wYWNpdHkpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCBzdGF0ZS5wYWdlTGFiZWxTaXplIC8gMilcbiAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCBjdXJyVmlzaWJpbGl0eSlcbiAgICAuc3R5bGUoJ3RvcCcsIHBvc2l0aW9uLnkgKyBzdGF0ZS5wYWdlSGVpZ2h0ICsgc3RhdGUudmVydFBhZGRpbmcgLyAzMClcbiAgICAuc3R5bGUoJ3RyYW5zZm9ybScsIGBza2V3WSgke3N0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXN9ZGVnKWApXG4gICAgLnN0eWxlKCd3aWR0aCcsIHN0YXRlLnBhZ2VXaWR0aCk7XG59XG4iLCJpbXBvcnQgeyBoaWRlQ29ubmVjdGVkUGFnZXMsIGhpZGVTZWxlY3Rpb25Db25uZWN0aW9ucyB9IGZyb20gJy4uL2Nyb3NzbGluayc7XG5pbXBvcnQgeyBjdWpTdGFydENsaWNrIH0gZnJvbSAnLi4vY3VqJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuXG5pbXBvcnQgeyB1cGRhdGVTdGF0ZSB9IGZyb20gJy4vaG92ZXJFbGxpcHNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vZGVQYW5lbCgpIHtcbiAgLy8gUGFuZWwgRXZlbnQgTGlzdGVuZXJzXG4gIGQzLnNlbGVjdCgnI25vZGVDbG9zZVgnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaGlkZU5vZGVQYW5lbCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb2RlUGFuZWwocGFnZUluZGV4LCBwYWdlRGF0YSkge1xuICB1cGRhdGVOb2RlUGFuZWxJbmZvKHBhZ2VJbmRleCwgcGFnZURhdGEpO1xuICBkMy5zZWxlY3QoJyNub2RlQ2FyZCcpLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVOb2RlUGFuZWwoKSB7XG4gIGlmIChzdGF0ZS5zZWxlY3RlZFBhZ2VJbmRleCA+IC0xKSB7XG4gICAgY29uc3QgcGFnZSA9IHN0YXRlLnBhZ2VzW3N0YXRlLnNlbGVjdGVkUGFnZUluZGV4XTtcbiAgICBkMy5zZWxlY3QoJyNub2RlQ2FyZCcpLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgIHBhZ2Uuc3RhdGVzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgdXBkYXRlU3RhdGUocGFnZSk7XG4gIH1cblxuICAvLyBOZWVkIHRvIGhpZGUgYWxsIGNvbm5lY3RlZCBwYWdlcyBhbmQgdXBkYXRlIHRoZWlyIHN0YXRlcy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJQYWdlID0gc3RhdGUucGFnZXNbaV07XG4gICAgY3VyclBhZ2Uuc3RhdGVzLmhpZ2hsaWdodGVkRnJvbVNlbGVjdCA9IGZhbHNlO1xuICAgIGN1cnJQYWdlLnN0YXRlcy5oaWdobGlnaHRlZEZyb21Ib3ZlciA9IGZhbHNlO1xuICAgIGhpZGVDb25uZWN0ZWRQYWdlcyhjdXJyUGFnZSk7XG4gIH1cblxuICAvLyBOZWVkIHRvIGNsZWFyIHNlbGVjdGVkIHN0YXRlIGluZGV4XG4gIHN0YXRlLnNlbGVjdGVkUGFnZUluZGV4ID0gLTE7XG4gIGhpZGVTZWxlY3Rpb25Db25uZWN0aW9ucygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm9kZVBhbmVsSW5mbyhwYWdlSW5kZXgsIHBhZ2VEYXRhKSB7XG4gIC8vIFBvcHVsYXRlIFRpdGxlIGFuZCBTdWJ0aXRsZVxuICBkMy5zZWxlY3QoJyNub2RlVGl0bGUnKS50ZXh0KHBhZ2VEYXRhLk5hbWUpO1xuICBkMy5zZWxlY3QoJyNub2RlU2VjdGlvbicpLnRleHQocGFnZURhdGEuU2VjdGlvbik7XG5cbiAgZDMuc2VsZWN0QWxsKCcuY2FyZExpc3QnKS5yZW1vdmUoKTtcblxuICAvLyBDaGVja3MgdG8gc2VlIGlmIGEgZGVzY3JpcHRpb24gaXMgcHJlc2VudC4gSWYgbm90LCB0aGVuIGhpZGUgbm90ZXMgc2VjdGlvblxuICBpZiAocGFnZURhdGEuRGVzY3JpcHRpb24pIHtcbiAgICBkMy5zZWxlY3QoJyNkZXNjcmlwdGlvblNlY3Rpb24nKS5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vZGVEZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IHBhZ2VEYXRhLkRlc2NyaXB0aW9uO1xuICB9IGVsc2Uge1xuICAgIGQzLnNlbGVjdCgnI2Rlc2NyaXB0aW9uU2VjdGlvbicpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG4gIC8vIENoZWNrcyB0byBzZWUgaWYgbm90ZXMgYXJlIHByZXNlbnQuIElmIG5vdCwgdGhlbiBoaWRlIG5vdGVzIHNlY3Rpb25cbiAgaWYgKHBhZ2VEYXRhLk5vdGVzKSB7XG4gICAgZDMuc2VsZWN0KCcjbm90ZVNlY3Rpb24nKS5zdHlsZSgnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vZGVOb3RlcycpLmlubmVySFRNTCA9IHBhZ2VEYXRhLk5vdGVzO1xuICB9IGVsc2Uge1xuICAgIGQzLnNlbGVjdCgnI25vdGVTZWN0aW9uJykuc3R5bGUoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICB9XG5cbiAgLy8gQ2hlY2tzIHRvIHNlZSBpZiBhc3NvY2lhdGVkIENVSnMgZXhpc3QuIElmIHNvLCBidWlsZCBsaXN0LiBJZiBub3QsIGhpZGUgc2VjdGlvbi5cbiAgY29uc3QgY3VyclRpdGxlcyA9IGdldEFzc29jaWF0ZWRDVUpUaXRsZXMocGFnZURhdGEpO1xuICBpZiAoY3VyclRpdGxlcy5sZW5ndGggPiAwKSB7XG4gICAgZDMuc2VsZWN0KCcjam91cm5leUxpc3RTZWN0aW9uJykuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VyclRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgZDMuc2VsZWN0KCcjam91cm5leUxpc3QnKVxuICAgICAgICAuYXBwZW5kKCdsaScpXG4gICAgICAgIC5jbGFzc2VkKCdjYXJkTGlzdCcsIHRydWUpXG4gICAgICAgIC50ZXh0KGN1cnJUaXRsZXNbaV0pXG4gICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RhdGUuYWN0aXZlQ1VKSW5kID0gZ2V0QWN0aXZlQ1VKSW5kKGN1cnJUaXRsZXNbaV0pO1xuICAgICAgICAgIGN1alN0YXJ0Q2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGQzLnNlbGVjdCgnI2pvdXJuZXlMaXN0U2VjdGlvbicpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG4gIC8vIENoZWNrcyB0byBzZWUgaWYgbW9yZSBpbmZvIGJ1dHRvbiBleGlzdHMuIElmIG5vdCwgaGlkZSBpdC5cbiAgaWYgKHBhZ2VEYXRhLk1vcmVJbmZvTGluaykge1xuICAgIGQzLnNlbGVjdCgnI21vcmVJbmZvQnRuJykuc3R5bGUoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICBkMy5zZWxlY3QoJyNub2RlSW5mb0xpbmsnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub3BlbihwYWdlRGF0YS5Nb3JlSW5mb0xpbmssICdfYmxhbmsnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkMy5zZWxlY3QoJyNtb3JlSW5mb0J0bicpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG4gIC8vIFBvcHVsYXRlIE5vdGUgSFRNTFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9kZU5vdGVzJykuaW5uZXJIVE1MID0gcGFnZURhdGEuTm90ZXM7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUNVSkluZCh0aXRsZSkge1xuICBsZXQgY3VyckluZCA9IC0xO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY3VqUm93cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0ZXBzID0gc3RhdGUuY3VqUm93c1tpXTtcbiAgICBjb25zdCBjdXJyVGl0bGUgPSBzdGVwc1swXS5UaXRsZTtcblxuICAgIGlmICh0aXRsZSA9PSBjdXJyVGl0bGUpIHtcbiAgICAgIGN1cnJJbmQgPSAwO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBjdXJySW5kO1xufVxuXG5mdW5jdGlvbiBnZXRBc3NvY2lhdGVkQ1VKVGl0bGVzKHBhZ2VEYXRhKSB7XG4gIGNvbnN0IGFzc29jaWF0ZWRKb3VybmV5cyA9IFtdO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgc3RhdGUuY3VqUm93cy5sZW5ndGg7IHgrKykge1xuICAgIGNvbnN0IHN0ZXBzID0gc3RhdGUuY3VqUm93c1t4XTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc3RlcHMubGVuZ3RoOyB5KyspIHtcbiAgICAgIGlmIChzdGVwc1t5XS5QYWdlID09IHBhZ2VEYXRhLk5hbWUpIHtcbiAgICAgICAgYXNzb2NpYXRlZEpvdXJuZXlzLnB1c2goc3RlcHNbMF0uVGl0bGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNzb2NpYXRlZEpvdXJuZXlzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplRGV0YWlsc0NhcmQoKSB7XG4gIC8vIFNldCBNYXggSGVpZ2h0IG9mIENvbnRhaW5lclxuICBjb25zdCBvZmZzZXRIZWlnaHQgPVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2RlSGVhZGVyJykuY2xpZW50SGVpZ2h0ICtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9yZUluZm9CdG4nKS5jbGllbnRIZWlnaHQgK1xuICAgIDI0O1xuICBkMy5zZWxlY3QoJyNub2RlU2Nyb2xsQ29udGFpbmVyJykuc3R5bGUoXG4gICAgJ21heC1oZWlnaHQnLFxuICAgIHN0YXRlLmhlaWdodCAtIDI5OCAtIG9mZnNldEhlaWdodFxuICApO1xufVxuIiwiaW1wb3J0IHsgZGVncmVlc1RvUmFkaWFucyB9IGZyb20gJy4uLy4uL21hdGgnO1xuaW1wb3J0IHsgc3ZnQ29udGFpbmVyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vc2VsZWN0aW9ucyc7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VFeHRlcm5hbExpbmtzKHBhZ2VEYXRhLCBwYWdlSW5kZXgpIHtcbiAgaWYgKCFwYWdlRGF0YS5FeHRlcm5hbExpbmtzKSB7XG4gICAgcmV0dXJuIHsgbGluZTogbnVsbCwgdGV4dDogbnVsbCB9O1xuICB9XG4gIGNvbnN0IGxpbmUgPSBzdGF0ZS5zdmdEb2MuYXBwZW5kKCdsaW5lJykuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCAnMywgMycpO1xuICBjb25zdCB0ZXh0ID0gc3ZnQ29udGFpbmVyU2VsZWN0aW9uXG4gICAgLmFwcGVuZCgnZGl2JylcbiAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAuYXR0cignSWQnLCBgZXh0TGluayR7cGFnZUluZGV4fWApO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIGBleHRMaW5rJHtwYWdlSW5kZXh9YFxuICApLmlubmVySFRNTCA9IGBMSU5LUyBUTyAke3BhZ2VEYXRhLkV4dGVybmFsTGlua3MudG9VcHBlckNhc2UoKX1gO1xuXG4gIHJldHVybiB7IGxpbmUsIHRleHQgfTtcbn1cblxuLy8gRHJhdyBQYWdlIENyb3NzbGlua3NcbmV4cG9ydCBmdW5jdGlvbiBkcmF3UGFnZUV4dGVybmFsTGlua3MoaSwgaGV4KSB7XG4gIC8vIEFsbCBwb3NpdGlvbiBjYWxjdWxhdGlvbnMgYXJlIGJhc2VkIG9mZiBvZiB0aGUgQ0xpbmsgUmVmZXJlbmNlIFBvaW50IChvcmlnaW5zW2ldLmNMaW5rUmVmWC8uLi5jTGlua1JlZlksXG4gIC8vIHdoaWNoIGlzIDMvNCBvZiB0aGUgcGFnZSB3aWR0aCwgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZSlcbiAgY29uc3QgY3VyclggPSBzdGF0ZS5vcmlnaW5zW2ldLmNMaW5rUmVmWDtcbiAgY29uc3QgY3VyclkgPSBzdGF0ZS5vcmlnaW5zW2ldLmNMaW5rUmVmWTtcblxuICAvLyBVc2UgUmlnaHQgVHJpYW5nbGVzIHRvIGNhbGN1bGF0ZSBleGFjdCBwbGFjZW1lbnQgb2YgZWxlbWVudHNcbiAgY29uc3QgY3VyckFkaiA9IHN0YXRlLnBhZ2VIZWlnaHQgLyAyLjU7XG4gIGNvbnN0IHRhblhSYWQgPSBkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnNlY29uZGFyeUFuZ2xlRGVncmVlcyk7XG5cbiAgLy8gRmluZCBlbmRwb2ludCBYL1kgb2YgZG90dGVkIGxpbmUuXG4gIC8vIE5vdGUgLSB0aGUgc3RhcnRpbmcgcG9pbnQgaXMgdGhlIG9yaWdpbnNbaV0uY0xpbmtSZWZYLy4uLmNMaW5rUmVmWSB2YXIuXG4gIGNvbnN0IGN1cnJFbmRYID0gY3VyclggKyBNYXRoLnRhbih0YW5YUmFkKSAqIGN1cnJBZGo7XG4gIGNvbnN0IGN1cnJFbmRZID0gY3VyclkgLSBjdXJyQWRqO1xuXG4gIC8vIFVwZGF0ZSB0aGUgbGluZSdzIHBvc2l0aW9uIChzdGFydGluZyBwb2ludCBhbmQgZW5kIHBvaW50KVxuICBzdGF0ZS5wYWdlc1tpXS5leHRlcm5hbExpbmtzLmxpbmVcbiAgICAuYXR0cigneDEnLCBjdXJyWClcbiAgICAuYXR0cigneTEnLCBjdXJyWSlcbiAgICAuYXR0cigneDInLCBjdXJyRW5kWClcbiAgICAuYXR0cigneTInLCBjdXJyRW5kWSlcbiAgICAuc3R5bGUoJ3N0cm9rZScsIGhleCwgODApO1xuXG4gIC8vIE9uY2UgdGhlIGxpbmUgaXMgZHJhd24sIHBsYWNlIHRoZSBcIkNST1NTIExJTksuLi5cIiBMYWJlbC5cblxuICAvLyBQb3NpdGlvbiB0ZXh0IGFuZCBhcHBseSBwcm9wZXIgQ1NTIGNsYXNzZXMgZm9yIFRleHQuXG4gIHN0YXRlLnBhZ2VzW2ldLmV4dGVybmFsTGlua3MudGV4dFxuICAgIC5jbGFzc2VkKCdjcm9zc2xpbmstbGFiZWwnLCB0cnVlKVxuICAgIC5zdHlsZSgnbGVmdCcsIGN1cnJFbmRYICsgNSlcbiAgICAuc3R5bGUoJ3RvcCcsIGN1cnJFbmRZICsgc3RhdGUubXVsdGlwYWdlTGFiZWxTaXplKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgc3RhdGUubXVsdGlwYWdlTGFiZWxTaXplKVxuICAgIC5zdHlsZSgndHJhbnNmb3JtJywgYHNrZXdZKCR7c3RhdGUucHJpbWFyeUFuZ2xlRGVncmVlc31kZWcpYClcbiAgICAuc3R5bGUoJ3dpZHRoJywgc3RhdGUuZXh0ZXJuYWxMaW5rc1dpZHRoKTtcblxuICAvLyBDcm9zc2xpbmsgZWxlbWVudHMgb25seSBhcHBlYXIgYXQgc3BlY2lmaWMgem9vbSBsZXZlbHMuXG4gIC8vIEFzIHVzZXIgem9vbXMgb3V0LCB0aGUgY3Jvc3MgbGluayBlbGVtZW50cyBhcmUgaGlkZGVuLlxuICBpZiAoc3RhdGUudGFyZ2V0Wm9vbUxldmVsIDwgMC44IHx8IHN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICBzdGF0ZS5wYWdlc1tpXS5leHRlcm5hbExpbmtzLnRleHQuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgc3RhdGUucGFnZXNbaV0uZXh0ZXJuYWxMaW5rcy5saW5lLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLnBhZ2VzW2ldLmV4dGVybmFsTGlua3MudGV4dC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gICAgc3RhdGUucGFnZXNbaV0uZXh0ZXJuYWxMaW5rcy5saW5lLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc3ZnQ29udGFpbmVyU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vc2VsZWN0aW9ucyc7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IGdldElzSW5BY3RpdmVDVUogfSBmcm9tICcuLi8uLi9zdGF0ZVV0aWxpdGllcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlSGVhZGVyKCkge1xuICByZXR1cm4gc3ZnQ29udGFpbmVyU2VsZWN0aW9uXG4gICAgLmFwcGVuZCgnZGl2JylcbiAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3UGFnZUhlYWRlcihjb2xvciwgaXNDb21wb25lbnQsIHBhZ2UpIHtcbiAgcGFnZS5oZWFkZXJcbiAgICAuY2xhc3NlZCgndHJhbnMnLCBmYWxzZSlcbiAgICAuc3R5bGUoJ2JhY2tncm91bmQnLCBpc0NvbXBvbmVudCA/ICd0cmFuc3BhcmVudCcgOiBjb2xvcilcbiAgICAuc3R5bGUoXG4gICAgICAnYm9yZGVyJyxcbiAgICAgIGlzQ29tcG9uZW50ICYmIHN0YXRlLmZsYXR0ZW5NYXAgPyBgMXB4IHNvbGlkICR7Y29sb3J9YCA6IG51bGxcbiAgICApXG4gICAgLnN0eWxlKCdib3gtc2l6aW5nJywgJ2JvcmRlci1ib3gnKVxuICAgIC5zdHlsZSgnaGVpZ2h0JywgcGFnZS5zcGVjcy5oZWFkZXJIZWlnaHQpXG4gICAgLnN0eWxlKCdsZWZ0JywgcGFnZS5zcGVjcy54KVxuICAgIC5zdHlsZSgnb3BhY2l0eScsIHN0YXRlLmN1ak1vZGUgJiYgIWdldElzSW5BY3RpdmVDVUoocGFnZSkgPyAwLjI1IDogMSlcbiAgICAuc3R5bGUoJ3RvcCcsIHBhZ2Uuc3BlY3MuaGVhZGVyWSlcbiAgICAuc3R5bGUoXG4gICAgICAndHJhbnNmb3JtJyxcbiAgICAgIGBza2V3WSgke3BhZ2Uuc3BlY3MuYW5nbGV9ZGVnKSByb3RhdGVaKCR7cGFnZS5zcGVjcy5yb3RhdGlvbn1kZWcpYFxuICAgIClcbiAgICAuc3R5bGUoJ3dpZHRoJywgcGFnZS5zcGVjcy53aWR0aCk7XG59XG4iLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VIb3ZlckVsbGlwc2UoKSB7XG4gIHJldHVybiBzdGF0ZS5zdmdEb2MuYXBwZW5kKCdlbGxpcHNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3UGFnZUhvdmVyRWxsaXBzZShjb2xvciwgb3JpZ2luLCBwYWdlKSB7XG4gIHBhZ2UuaG92ZXJFbGxpcHNlXG4gICAgLmF0dHIoXG4gICAgICAncnknLFxuICAgICAgc3RhdGUuZmxhdHRlbk1hcCA/IHN0YXRlLnBhZ2VIZWlnaHQgLyAzIDogc3RhdGUucGFnZUhlaWdodCAvIDEuNVxuICAgIClcbiAgICAuYXR0cigncngnLCBzdGF0ZS5mbGF0dGVuTWFwID8gc3RhdGUucGFnZUhlaWdodCAvIDMgOiBzdGF0ZS5wYWdlSGVpZ2h0KVxuICAgIC5hdHRyKCdjeCcsIHN0YXRlLmZsYXR0ZW5NYXAgPyBvcmlnaW4uY2VudGVyWCA6IG9yaWdpbi5wQkNlbnRlclgpXG4gICAgLmF0dHIoJ2N5Jywgc3RhdGUuZmxhdHRlbk1hcCA/IG9yaWdpbi5jZW50ZXJZIDogb3JpZ2luLnBCQ2VudGVyWSlcbiAgICAuc3R5bGUoJ2ZpbGwnLCBgJHtjb2xvcn0ke3N0YXRlLmZsYXR0ZW5NYXAgPyAzMCA6IDgwfWApXG4gICAgLnN0eWxlKCdvcGFjaXR5JywgMClcbiAgICAuc3R5bGUoJ3N0cm9rZScsIGAke2NvbG9yfSR7c3RhdGUuZmxhdHRlbk1hcCA/IDUwIDogMH1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHBhZ2UpIHtcbiAgLy8gSWYgU2VsZWN0ZWQgLSBBbHdheXMgU2hvdyBTZWxlY3RlZCBTdGF0ZSAmIENvbm5lY3RlZCBIaWdobGlnaHRzLCByZWdhcmRsZXNzIG9mIHByZXZpb3VzIHN0YXRlLlxuICBpZiAoc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgcGFnZS5ob3ZlckVsbGlwc2UuY2xhc3NlZCgndHJhbnMnLCBmYWxzZSkuc3R5bGUoJ29wYWNpdHknLCAwKTtcbiAgfSBlbHNlIGlmIChwYWdlLnN0YXRlcy5zZWxlY3RlZCkge1xuICAgIHBhZ2UuaG92ZXJFbGxpcHNlLmNsYXNzZWQoJ3RyYW5zJywgdHJ1ZSkuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuICAgIC8vIEVsc2UgaWYgSG92ZXJlZCAtIEFsd2F5cyBTaG93IEhvdmVyZWQgU3RhdGUsIFJlZ2FyZGxlc3Mgb2YgcHJldmlvdXMgc3RhdGVcbiAgfSBlbHNlIGlmIChwYWdlLnN0YXRlcy5ob3ZlcmluZykge1xuICAgIHBhZ2UuaG92ZXJFbGxpcHNlLmNsYXNzZWQoJ3RyYW5zJywgdHJ1ZSkuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuICAgIC8vIEVsc2UgaWYgSGlnaGxpZ2h0IC0gT25seSBzaG93IHdoZW4gc29tZXRoaW5nIGlzIHNlbGVjdGVkLlxuICB9IGVsc2UgaWYgKHBhZ2Uuc3RhdGVzLmhpZ2hsaWdodGVkRnJvbVNlbGVjdCkge1xuICAgIHBhZ2UuaG92ZXJFbGxpcHNlLmNsYXNzZWQoJ3RyYW5zJywgdHJ1ZSkuc3R5bGUoJ29wYWNpdHknLCAwLjY1KTtcblxuICAgIC8vIEVsc2UgaWYgaGlnaGlnaHQgLSBvbmx5IHNob3dpbmcgd2hlbiBzb21ldGhpbmcgd2FzIGhvdmVyZWQgb24uXG4gIH0gZWxzZSBpZiAocGFnZS5zdGF0ZXMuaGlnaGxpZ2h0ZWRGcm9tSG92ZXIpIHtcbiAgICBwYWdlLmhvdmVyRWxsaXBzZS5jbGFzc2VkKCd0cmFucycsIHRydWUpLnN0eWxlKCdvcGFjaXR5JywgMC40NSk7XG5cbiAgICAvLyBFbHNlIGlmIHBhZ2UgaXMgc3VwcG9zZWQgdG8gYmUgaGlnaGxpZ2h0ZWQgYnkgZGVmYXVsdFxuICB9IGVsc2UgaWYgKHBhZ2Uuc3RhdGVzLmhpZ2hsaWdodGVkQnlEZWZhdWx0KSB7XG4gICAgcGFnZS5ob3ZlckVsbGlwc2UuY2xhc3NlZCgndHJhbnMnLCB0cnVlKS5zdHlsZSgnb3BhY2l0eScsIDAuMyk7XG5cbiAgICAvLyBPdGhlcndpc2UgY2xlYXIgZXZlcnl0aGluZyBvdXQuXG4gIH0gZWxzZSB7XG4gICAgcGFnZS5ob3ZlckVsbGlwc2Uuc3R5bGUoJ29wYWNpdHknLCAwKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0U2VjdGlvbkNvbG9yIH0gZnJvbSAnLi4vLi4vY29sb3JzJztcbmltcG9ydCB7IGVhc2VJbnN0YW50bHksIGVhc2VRdWFkcmF0aWNhbGx5IH0gZnJvbSAnLi4vLi4vZWFzZSc7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcblxuaW1wb3J0IHsgY3JlYXRlUGFnZUFkZHJlc3MsIGRyYXdQYWdlQWRkcmVzcyB9IGZyb20gJy4vYWRkcmVzcyc7XG5pbXBvcnQgeyBjcmVhdGVQYWdlRXh0ZXJuYWxMaW5rcywgZHJhd1BhZ2VFeHRlcm5hbExpbmtzIH0gZnJvbSAnLi9leHRlcm5hbExpbmsnO1xuaW1wb3J0IHsgY3JlYXRlUGFnZUhlYWRlciwgZHJhd1BhZ2VIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyBjcmVhdGVQYWdlSG92ZXJFbGxpcHNlLCBkcmF3UGFnZUhvdmVyRWxsaXBzZSB9IGZyb20gJy4vaG92ZXJFbGxpcHNlJztcbmltcG9ydCB7IGNyZWF0ZVBhZ2VMYWJlbCwgZHJhd1BhZ2VMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xuaW1wb3J0IHtcbiAgY3JlYXRlUGFnZU11bHRpcGFnZUxpbmUsXG4gIGRyYXdQYWdlTXVsdGlwYWdlTGluZSxcbn0gZnJvbSAnLi9tdWx0aXBhZ2VMaW5lJztcbmltcG9ydCB7XG4gIGNyZWF0ZVBhZ2VNdWx0aXBhZ2VQYW5lbHMsXG4gIGRyYXdQYWdlTXVsdGlwYWdlUGFuZWxzLFxufSBmcm9tICcuL211bHRpcGFnZVBhbmVsJztcbmltcG9ydCB7IGNyZWF0ZVBhZ2VOb3RlLCBkcmF3UGFnZU5vdGUgfSBmcm9tICcuL25vdGUnO1xuaW1wb3J0IHsgY3JlYXRlUGFnZVBhbmVsLCBkcmF3UGFnZVBhbmVsIH0gZnJvbSAnLi9wYW5lbCc7XG5cbi8vIFBhZ2Ugc3ViLWVsZW1lbnQgY3JlYXRpb24gb3JkZXIgaW1wYWN0cyB0aGUgYXBwZWFyYW5jZSBvZiBsYXllcmluZy5cbi8vIGBtdWx0aXBhZ2VMaW5lYCB2aXN1YWxseSB0aWVzIHRoZSBgbXVsdGlwYWdlUGFuZWxzYCB0b2dldGhlci5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYWdlKHBhZ2VEYXRhLCBwYWdlSW5kZXgpIHtcbiAgY29uc3QgZXh0ZXJuYWxMaW5rcyA9IGNyZWF0ZVBhZ2VFeHRlcm5hbExpbmtzKHBhZ2VEYXRhLCBwYWdlSW5kZXgpO1xuICBjb25zdCBob3ZlckVsbGlwc2UgPSBjcmVhdGVQYWdlSG92ZXJFbGxpcHNlKCk7XG4gIGNvbnN0IGlzTXVsdGlwYWdlID0gcGFnZURhdGEuTXVsdGlwYWdlID09PSAnWWVzJztcbiAgY29uc3QgbXVsdGlwYWdlUGFuZWxzID0gaXNNdWx0aXBhZ2UgPyBjcmVhdGVQYWdlTXVsdGlwYWdlUGFuZWxzKCkgOiBbXTtcbiAgY29uc3QgbXVsdGlwYWdlTGluZSA9IGlzTXVsdGlwYWdlID8gY3JlYXRlUGFnZU11bHRpcGFnZUxpbmUoKSA6IG51bGw7XG4gIGNvbnN0IHBhbmVsID0gY3JlYXRlUGFnZVBhbmVsKHBhZ2VEYXRhLCBwYWdlSW5kZXgpO1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVQYWdlSGVhZGVyKCk7XG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlUGFnZUxhYmVsKHBhZ2VEYXRhLCBwYWdlSW5kZXgpO1xuICBjb25zdCBhZGRyZXNzID0gY3JlYXRlUGFnZUFkZHJlc3MocGFnZURhdGEpO1xuICBjb25zdCBub3RlID0gY3JlYXRlUGFnZU5vdGUocGFnZURhdGEsIHBhZ2VJbmRleCk7XG5cbiAgc3RhdGUucGFnZXMucHVzaCh7XG4gICAgYWRkcmVzcyxcbiAgICBleHRlcm5hbExpbmtzLFxuICAgIGhhc05vdGU6IHBhZ2VEYXRhLk5vdGVzICE9PSAnJyxcbiAgICBoZWFkZXIsXG4gICAgaG92ZXJFbGxpcHNlLFxuICAgIGluZGV4OiBwYWdlSW5kZXgsXG4gICAgbGFiZWwsXG4gICAgbXVsdGlwYWdlTGluZSxcbiAgICBtdWx0aXBhZ2VQYW5lbHMsXG4gICAgbmFtZTogcGFnZURhdGEuTmFtZSxcbiAgICBub3RlLFxuICAgIHBhbmVsLFxuICAgIHNwZWNzOiB7XG4gICAgICBhbHBoYTogbnVsbCxcbiAgICAgIGFuZ2xlOiBudWxsLFxuICAgICAgaGVhZGVySGVpZ2h0OiBudWxsLFxuICAgICAgaGVhZGVyWTogbnVsbCxcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgcm90YXRpb246IG51bGwsXG4gICAgICB4OiBudWxsLFxuICAgICAgeTogbnVsbCxcbiAgICB9LFxuICAgIHRhcmdldFNwZWNzOiB7XG4gICAgICBhbHBoYTogbnVsbCxcbiAgICAgIGFuZ2xlOiBudWxsLFxuICAgICAgaGVhZGVySGVpZ2h0OiBudWxsLFxuICAgICAgaGVhZGVyWTogbnVsbCxcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgcm90YXRpb246IG51bGwsXG4gICAgICB4OiBudWxsLFxuICAgICAgeTogbnVsbCxcbiAgICB9LFxuICAgIHN0YXRlczoge1xuICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgaG92ZXJpbmc6IGZhbHNlLFxuICAgICAgaGlnaGxpZ2h0ZWRGcm9tU2VsZWN0OiBmYWxzZSxcbiAgICAgIGhpZ2hsaWdodGVkRnJvbUhvdmVyOiBmYWxzZSxcbiAgICAgIGhpZ2hsaWdodGVkOiBmYWxzZSxcbiAgICAgIGhpZ2hsaWdodGVkQnlEZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdQYWdlKHBhZ2VEYXRhLCBwYWdlSW5kZXgsIG5vdGVkUGFnZVBvc2l0aW9uc1NvcnRlZCkge1xuICBjb25zdCBjb2xvciA9IGdldFNlY3Rpb25Db2xvcihwYWdlRGF0YS5TZWN0aW9uKTtcbiAgY29uc3QgaXNDb21wb25lbnQgPSBwYWdlRGF0YS5FbnRpdHkgPT09ICdjb21wb25lbnQnO1xuICBjb25zdCBvcmlnaW4gPSBzdGF0ZS5vcmlnaW5zW3BhZ2VJbmRleF07XG4gIGNvbnN0IHBhZ2UgPSBzdGF0ZS5wYWdlc1twYWdlSW5kZXhdO1xuICBjb25zdCBwb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uc1twYWdlSW5kZXhdO1xuICB1cGRhdGVQYWdlVGFyZ2V0U3BlY3MocGFnZSwgcG9zaXRpb24pO1xuICB1cGRhdGVQYWdlU3BlY3MocGFnZSwgcG9zaXRpb24pO1xuXG4gIGlmIChwYWdlRGF0YS5FeHRlcm5hbExpbmtzKSB7XG4gICAgZHJhd1BhZ2VFeHRlcm5hbExpbmtzKHBhZ2VJbmRleCwgY29sb3IpO1xuICB9XG4gIGlmIChwYWdlRGF0YS5NdWx0aXBhZ2UgPT09ICdZZXMnKSB7XG4gICAgZHJhd1BhZ2VNdWx0aXBhZ2VQYW5lbHMoY29sb3IsIHBhZ2UpO1xuICAgIGRyYXdQYWdlTXVsdGlwYWdlTGluZShjb2xvciwgb3JpZ2luLCBwYWdlKTtcbiAgfVxuICBkcmF3UGFnZUhvdmVyRWxsaXBzZShjb2xvciwgb3JpZ2luLCBwYWdlKTtcbiAgZHJhd1BhZ2VQYW5lbChwYWdlRGF0YSwgcGFnZSk7XG4gIGRyYXdQYWdlSGVhZGVyKGNvbG9yLCBpc0NvbXBvbmVudCwgcGFnZSk7XG4gIGRyYXdQYWdlTGFiZWwocGFnZSwgcGFnZUluZGV4KTtcbiAgZHJhd1BhZ2VBZGRyZXNzKGNvbG9yLCBwYWdlLCBwb3NpdGlvbik7XG4gIGRyYXdQYWdlTm90ZShwYWdlLCBwb3NpdGlvbiwgbm90ZWRQYWdlUG9zaXRpb25zU29ydGVkKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFnZVNwZWNzKHBhZ2UpIHtcbiAgaWYgKHN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgIGVhc2VRdWFkcmF0aWNhbGx5KHBhZ2UpO1xuICB9IGVsc2Uge1xuICAgIGVhc2VJbnN0YW50bHkocGFnZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUGFnZVRhcmdldFNwZWNzKHBhZ2UsIHBvc2l0aW9uKSB7XG4gIHBhZ2UudGFyZ2V0U3BlY3MgPSBzdGF0ZS5mbGF0dGVuTWFwXG4gICAgPyB7XG4gICAgICAgIGFscGhhOiAwLFxuICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgaGVhZGVySGVpZ2h0OiBzdGF0ZS5wYWdlSGVpZ2h0IC8gMTAsXG4gICAgICAgIGhlYWRlclk6IHBvc2l0aW9uLnkgKyBzdGF0ZS5wYWdlSGVpZ2h0IC8gMjUsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgd2lkdGg6IHN0YXRlLnBhZ2VIZWlnaHQgLyA1LFxuICAgICAgICByb3RhdGlvbjogOTAsXG4gICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgIHk6IHBvc2l0aW9uLnksXG4gICAgICB9XG4gICAgOiB7XG4gICAgICAgIGFscGhhOiAxLFxuICAgICAgICBhbmdsZTogc3RhdGUucHJpbWFyeUFuZ2xlRGVncmVlcyxcbiAgICAgICAgaGVhZGVySGVpZ2h0OiBzdGF0ZS5wYWdlSGVpZ2h0IC8gMTAsXG4gICAgICAgIGhlYWRlclk6IHBvc2l0aW9uLnksXG4gICAgICAgIGhlaWdodDogc3RhdGUucGFnZUhlaWdodCxcbiAgICAgICAgd2lkdGg6IHN0YXRlLnBhZ2VXaWR0aCxcbiAgICAgICAgcm90YXRpb246IDAsXG4gICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgIHk6IHBvc2l0aW9uLnksXG4gICAgICB9O1xufVxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5cbmltcG9ydCB7IGRyYXdEaXJlY3RDb25uZWN0aW9ucyB9IGZyb20gJy4uL2Nvbm5lY3Rvcic7XG5pbXBvcnQge1xuICBkcmF3Q29ubmVjdGVkUGFnZXMsXG4gIGhpZGVDb25uZWN0ZWRQYWdlcyxcbiAgaGlkZVNlbGVjdGlvbkNvbm5lY3Rpb25zLFxufSBmcm9tICcuLi9jcm9zc2xpbmsnO1xuXG5pbXBvcnQgeyBzaG93Tm9kZVBhbmVsLCBoaWRlTm9kZVBhbmVsIH0gZnJvbSAnLi9kZXRhaWxzQ2FyZCc7XG5pbXBvcnQgeyB1cGRhdGVTdGF0ZSB9IGZyb20gJy4vaG92ZXJFbGxpcHNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1vdXNlT3V0KHBhZ2VJbmRleCkge1xuICBjb25zdCBwYWdlID0gc3RhdGUucGFnZXNbcGFnZUluZGV4XTtcblxuICBpZiAocGFnZUluZGV4ID09PSBzdGF0ZS5hY3RpdmVQYWdlSW5kZXgpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBwYWdlLnN0YXRlcy5ob3ZlcmluZyA9IGZhbHNlO1xuICB1cGRhdGVTdGF0ZShwYWdlKTtcblxuICBzdGF0ZS5wYWdlcy5mb3JFYWNoKGhpZGVDb25uZWN0ZWRQYWdlcyk7XG5cbiAgLy8gUmVzZXRzIGFsbCBoaWdobGlnaHRzIHNwZWNpZmllZCBpbiBEaXJlY3RDb25uZWN0aW9uc1Zpc2liaWxpdHkgaW4gY29sdW1uIGluIHNoZWV0LlxuICBpZiAoIXN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICBkcmF3RGlyZWN0Q29ubmVjdGlvbnMoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTW91c2VPdmVyKHBhZ2VJbmRleCkge1xuICBjb25zdCBwYWdlID0gc3RhdGUucGFnZXNbcGFnZUluZGV4XTtcbiAgY29uc3Qgcm93ID0gc3RhdGUucm93c1twYWdlSW5kZXhdO1xuXG4gIHBhZ2Uuc3RhdGVzLmhvdmVyaW5nID0gdHJ1ZTtcbiAgdXBkYXRlU3RhdGUocGFnZSk7XG4gIHN0YXRlLmlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAvLyBOZXh0IGRyYXcgY29ubmVjdGlvbnMgdG8gbmV3IHNlbGVjdGlvbnMuXG4gIGlmIChyb3cuRGlyZWN0Q29ubmVjdGlvbnMpIHtcbiAgICBpZiAocm93LkRpcmVjdENvbm5lY3Rpb25zLnRyaW0oKSAhPSAnJykge1xuICAgICAgZHJhd0Nvbm5lY3RlZFBhZ2VzKHBhZ2VJbmRleCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3VzZUNsaWNrKHBhZ2VJbmRleCwgcGFnZURhdGEpIHtcbiAgY29uc3QgcGFnZSA9IHN0YXRlLnBhZ2VzW3BhZ2VJbmRleF07XG4gIGNvbnN0IHJvdyA9IHN0YXRlLnJvd3NbcGFnZUluZGV4XTtcblxuICAvLyBDbGVhciBhbGwgb3RoZXIgcGFnZXMgZmlyc3QgKGFzc3VtaW5nIGEgcGFnZSBpcyBhbHJlYWR5IHNlbGVjdGVkKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnBhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY3VyclBhZ2UgPSBzdGF0ZS5wYWdlc1tpXTtcbiAgICBjdXJyUGFnZS5zdGF0ZXMuaGlnaGxpZ2h0ZWRGcm9tU2VsZWN0ID0gZmFsc2U7XG4gICAgY3VyclBhZ2Uuc3RhdGVzLmhpZ2hsaWdodGVkRnJvbUhvdmVyID0gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBmb3IgU2VsZWN0aW9uIENoYW5nZSBhbmQgRGVzZWxlY3QgUHJldmlvdXMgU2VsZWN0aW9uXG4gICAgaWYgKGkgIT0gcGFnZUluZGV4KSB7XG4gICAgICBjdXJyUGFnZS5zdGF0ZXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoaWRlU2VsZWN0aW9uQ29ubmVjdGlvbnMoKTtcbiAgICB1cGRhdGVTdGF0ZShjdXJyUGFnZSk7XG4gIH1cblxuICAvLyBOZXh0LCBTaG93IHRoZSBob3ZlciBlbGxpcHNlIG9uIHRoZSBzZWxlY3RlZCBwYWdlLlxuICBwYWdlLnN0YXRlcy5zZWxlY3RlZCA9ICFwYWdlLnN0YXRlcy5zZWxlY3RlZDtcbiAgdXBkYXRlU3RhdGUocGFnZSk7XG4gIHN0YXRlLmlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAvLyBVcGRhdGUgY29ubmVjdGlvbiBoaWdobGlnaHRzXG4gIGlmIChwYWdlLnN0YXRlcy5zZWxlY3RlZCkge1xuICAgIGlmIChyb3cuRGlyZWN0Q29ubmVjdGlvbnMpIHtcbiAgICAgIGlmIChyb3cuRGlyZWN0Q29ubmVjdGlvbnMudHJpbSgpICE9ICcnKSB7XG4gICAgICAgIGRyYXdDb25uZWN0ZWRQYWdlcyhwYWdlSW5kZXgsICdzZWxlY3QnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IE5vZGUgZGV0YWlscyBwYW5lbCBuZXh0IHRvIHRoZSBwYWdlL25vZGUuXG4gICAgc2hvd05vZGVQYW5lbChwYWdlSW5kZXgsIHBhZ2VEYXRhKTtcblxuICAgIC8vIFVwZGF0ZXMgZ2xvYmFsIHZhcmlhYmxlIGZvciB1c2UgZWxzZXdoZXJlXG4gICAgc3RhdGUuc2VsZWN0ZWRQYWdlSW5kZXggPSBwYWdlSW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgaGlkZU5vZGVQYW5lbCgpO1xuICAgIHN0YXRlLnNlbGVjdGVkUGFnZUluZGV4ID0gLTE7XG4gIH1cbn1cbiIsImltcG9ydCB7IGVhc2VJbnN0YW50bHksIGVhc2VRdWFkcmF0aWNhbGx5IH0gZnJvbSAnLi4vLi4vZWFzZSc7XG5pbXBvcnQgeyBzdmdDb250YWluZXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9zZWxlY3Rpb25zJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgZ2V0SXNJbkFjdGl2ZUNVSiB9IGZyb20gJy4uLy4uL3N0YXRlVXRpbGl0aWVzJztcblxuaW1wb3J0IHtcbiAgaGFuZGxlTW91c2VPdXQsXG4gIGhhbmRsZU1vdXNlT3ZlcixcbiAgaGFuZGxlTW91c2VDbGljayxcbn0gZnJvbSAnLi9pbnRlcmFjdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZUxhYmVsKHBhZ2VEYXRhLCBwYWdlSW5kZXgpIHtcbiAgY29uc3QgaWQgPSBgcGFnZS0ke3BhZ2VJbmRleH0tbGFiZWxgO1xuICBjb25zdCB0ZXh0Q29udGVudCA9IHBhZ2VEYXRhLk5hbWUudG9VcHBlckNhc2UoKTtcblxuICBjb25zdCBkaXYgPSBzdmdDb250YWluZXJTZWxlY3Rpb25cbiAgICAuYXBwZW5kKCdkaXYnKVxuICAgIC5jbGFzc2VkKCdwYWdlLWxhYmVsJywgdHJ1ZSlcbiAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlTW91c2VDbGljayhwYWdlSW5kZXgsIHBhZ2VEYXRhKTtcbiAgICB9KVxuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlTW91c2VPdmVyKHBhZ2VJbmRleCk7XG4gICAgfSlcbiAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgaGFuZGxlTW91c2VPdXQocGFnZUluZGV4KTtcbiAgICB9KTtcbiAgY29uc3QgdGV4dCA9IGRpdlxuICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCdpZCcsIGlkKVxuICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAudGV4dCh0ZXh0Q29udGVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBkaXYsXG4gICAgaWQsXG4gICAgcGFnZUluZGV4LFxuICAgIHBhZ2VOYW1lOiBwYWdlRGF0YS5OYW1lLFxuICAgIHNwZWNzOiB7XG4gICAgICBhbmdsZTogc3RhdGUucHJpbWFyeUFuZ2xlRGVncmVlcyxcbiAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgIHNpemU6IG51bGwsXG4gICAgICB3aWR0aDogbnVsbCxcbiAgICAgIHg6IG51bGwsXG4gICAgICB5OiBudWxsLFxuICAgIH0sXG4gICAgdGFyZ2V0U3BlY3M6IHtcbiAgICAgIGFuZ2xlOiBzdGF0ZS5wcmltYXJ5QW5nbGVEZWdyZWVzLFxuICAgICAgaGVpZ2h0OiBudWxsLFxuICAgICAgc2l6ZTogbnVsbCxcbiAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgeDogbnVsbCxcbiAgICAgIHhPZmZzZXQ6IG51bGwsXG4gICAgICB5OiBudWxsLFxuICAgICAgeU9mZnNldDogbnVsbCxcbiAgICB9LFxuICAgIHRleHQsXG4gICAgdGV4dENvbnRlbnQsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXN0UGFnZUxhYmVsKCkge1xuICBzdGF0ZS50ZXN0UGFnZUxhYmVsID0gc3ZnQ29udGFpbmVyU2VsZWN0aW9uXG4gICAgLmFwcGVuZCgndGV4dCcpXG4gICAgLmF0dHIoJ2lkJywgJ3Rlc3QtcGFnZS1sYWJlbCcpXG4gICAgLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNjY2NjY2MnKVxuICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxuICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgIC5zdHlsZSgndG9wJywgMzAwKVxuICAgIC50ZXh0KCdURVNUIExBQkVMIFRFWFQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdQYWdlTGFiZWwocGFnZSwgcGFnZUluZGV4KSB7XG4gIGNvbnN0IGxhYmVsID0gcGFnZS5sYWJlbDtcbiAgY29uc3Qgb3JpZ2luID0gc3RhdGUub3JpZ2luc1twYWdlSW5kZXhdO1xuICBjb25zdCBwb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uc1twYWdlSW5kZXhdO1xuICBjb25zdCBpc0ZpcnN0RHJhdyA9IGxhYmVsLnRhcmdldFNwZWNzLnggPT09IG51bGw7XG4gIGlmIChzdGF0ZS5mbGF0dGVuTWFwICYmIHN0YXRlLmluaXRGbGF0UnVuKSB7XG4gICAgYWRkTGFiZWxFdmVudExpc3RlbmVycyhsYWJlbCk7XG4gIH1cbiAgdXBkYXRlTGFiZWxUYXJnZXRTcGVjcyhsYWJlbCwgcG9zaXRpb24pO1xuICB1cGRhdGVMYWJlbFNwZWNzKGxhYmVsKTtcbiAgdXBkYXRlTGFiZWxEaXYocGFnZSk7XG4gIC8vIFRPRE86IEVsaW1pbmF0ZSB0aGlzIGlzRmlyc3REcmF3IGhhY2sgYnkgc29sdmluZyB0aGUgbXlzdGVyeSBvZiB0aGUgZmlyc3QgZHJhdydzIGJhZCBZIHZhbHVlLlxuICBpZiAoaXNGaXJzdERyYXcpIHtcbiAgICB1cGRhdGVMYWJlbFRhcmdldFNwZWNzKGxhYmVsLCBwb3NpdGlvbik7XG4gICAgdXBkYXRlTGFiZWxTcGVjcyhsYWJlbCk7XG4gICAgdXBkYXRlTGFiZWxEaXYocGFnZSk7XG4gIH1cbiAgaWYgKHN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICB1cGRhdGVPcmlnaW5Gcm9tTGFiZWwobGFiZWwsIG9yaWdpbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTGFiZWxFdmVudExpc3RlbmVycyhsYWJlbCkge1xuICBsYWJlbC5kaXZcbiAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZU1vdXNlT3ZlcihsYWJlbC5wYWdlSW5kZXgpO1xuICAgIH0pXG4gICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZU1vdXNlT3V0KGxhYmVsLnBhZ2VJbmRleCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1lYXN1cmVUZXN0TGFiZWxXaWR0aChsYWJlbCkge1xuICBzdGF0ZS50ZXN0UGFnZUxhYmVsXG4gICAgLmNsYXNzZWQoJ3BhZ2UtbGFiZWwnLCB0cnVlKVxuICAgIC5jbGFzc2VkKCd0ZXh0LXN0cm9rZScsIHRydWUpXG4gICAgLnN0eWxlKCdkaXNwbGF5JywgJ2ZsZXgnKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgc3RhdGUucGFnZUxhYmVsU2l6ZSlcbiAgICAudGV4dChsYWJlbC50ZXh0Q29udGVudCk7XG4gIHJldHVybiBzdGF0ZS50ZXN0UGFnZUxhYmVsLm5vZGUoKS5jbGllbnRXaWR0aCArIDU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxhYmVsRGl2KHBhZ2UpIHtcbiAgcGFnZS5sYWJlbC5kaXZcbiAgICAuY2xhc3NlZCgndGV4dC1zdHJva2UnLCBzdGF0ZS5mbGF0dGVuTWFwKVxuICAgIC5jbGFzc2VkKCd0cmFucycsIGZhbHNlKVxuICAgIC5zdHlsZSgnYWxpZ24tY29udGVudCcsIHN0YXRlLmZsYXR0ZW5NYXAgPyBudWxsIDogJ2ZsZXgtZW5kJylcbiAgICAuc3R5bGUoJ2N1cnNvcicsIHN0YXRlLmZsYXR0ZW5NYXAgPyAncG9pbnRlcicgOiBudWxsKVxuICAgIC5zdHlsZSgnZGlzcGxheScsICdmbGV4JylcbiAgICAuc3R5bGUoJ2ZsZXgtZmxvdycsICdyb3cgd3JhcCcpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCBzdGF0ZS5wYWdlTGFiZWxTaXplKVxuICAgIC5zdHlsZSgnaGVpZ2h0Jywgc3RhdGUuZmxhdHRlbk1hcCA/IG51bGwgOiAwKVxuICAgIC5zdHlsZSgnbGVmdCcsIHBhZ2UubGFiZWwuc3BlY3MueClcbiAgICAuc3R5bGUoXG4gICAgICAnb3BhY2l0eScsXG4gICAgICBzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3NcbiAgICAgICAgPyAwXG4gICAgICAgIDogc3RhdGUuY3VqTW9kZSAmJiAhZ2V0SXNJbkFjdGl2ZUNVSihwYWdlKVxuICAgICAgICA/IDAuMjVcbiAgICAgICAgOiAxXG4gICAgKVxuICAgIC5zdHlsZSgndG9wJywgcGFnZS5sYWJlbC5zcGVjcy55KVxuICAgIC5zdHlsZSgndHJhbnNmb3JtJywgYHNrZXdZKCR7cGFnZS5sYWJlbC5zcGVjcy5hbmdsZX1kZWcpYClcbiAgICAuc3R5bGUoXG4gICAgICAndHJhbnNpdGlvbicsXG4gICAgICBzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MgPyAnb3BhY2l0eSAwcycgOiAnb3BhY2l0eSAwLjVzIGVhc2UtaW4tb3V0J1xuICAgIClcbiAgICAuc3R5bGUoJ3dpZHRoJywgcGFnZS5sYWJlbC5zcGVjcy53aWR0aCk7XG4gIHBhZ2UubGFiZWwudGV4dC5zdHlsZShcbiAgICAncGFkZGluZy1ib3R0b20nLFxuICAgIHN0YXRlLmZsYXR0ZW5NYXAgPyAwIDogcGFnZS5zcGVjcy5oZWFkZXJIZWlnaHRcbiAgKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGFiZWxTcGVjcyhsYWJlbCkge1xuICBpZiAoc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgZWFzZVF1YWRyYXRpY2FsbHkobGFiZWwpO1xuICB9IGVsc2Uge1xuICAgIGVhc2VJbnN0YW50bHkobGFiZWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxhYmVsVGFyZ2V0U3BlY3MobGFiZWwsIHBvc2l0aW9uKSB7XG4gIGxhYmVsLnRhcmdldFNwZWNzLmFuZ2xlID0gc3RhdGUuZmxhdHRlbk1hcCA/IDAgOiBzdGF0ZS5wcmltYXJ5QW5nbGVEZWdyZWVzO1xuICBsYWJlbC50YXJnZXRTcGVjcy5zaXplID0gc3RhdGUucGFnZUxhYmVsU2l6ZTtcbiAgbGFiZWwudGFyZ2V0U3BlY3Mud2lkdGggPVxuICAgIHN0YXRlLmZsYXR0ZW5NYXAgJiYgIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3c1xuICAgICAgPyBNYXRoLm1pbihzdGF0ZS5wYWdlV2lkdGggKiAyLjc1LCBtZWFzdXJlVGVzdExhYmVsV2lkdGgobGFiZWwpKVxuICAgICAgOiBzdGF0ZS5wYWdlTGFiZWxXaWR0aDtcbiAgY29uc3QgeE9mZnNldCA9IHN0YXRlLmZsYXR0ZW5NYXAgPyBzdGF0ZS52ZXJ0UGFkZGluZyAvIDEwIDogMDtcbiAgY29uc3QgeU9mZnNldCA9IHN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cyA/IGxhYmVsLnRhcmdldFNwZWNzLnlPZmZzZXQgOiAwO1xuICBsYWJlbC50YXJnZXRTcGVjcy54T2Zmc2V0ID0geE9mZnNldDtcbiAgbGFiZWwudGFyZ2V0U3BlY3MueU9mZnNldCA9IHlPZmZzZXQ7XG4gIGxhYmVsLnRhcmdldFNwZWNzLnggPSBwb3NpdGlvbi54ICsgeE9mZnNldDtcbiAgbGFiZWwudGFyZ2V0U3BlY3MueSA9IHBvc2l0aW9uLnkgKyB5T2Zmc2V0O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVPcmlnaW5Gcm9tTGFiZWwobGFiZWwsIG9yaWdpbikge1xuICBvcmlnaW4ucmlnaHRDZW50ZXJYID0gbGFiZWwudGFyZ2V0U3BlY3MueCArIGxhYmVsLnRhcmdldFNwZWNzLndpZHRoO1xufVxuIiwiaW1wb3J0IHsgZGVncmVlc1RvUmFkaWFucyB9IGZyb20gJy4uLy4uL21hdGgnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBnZXRJc0luQWN0aXZlQ1VKIH0gZnJvbSAnLi4vLi4vc3RhdGVVdGlsaXRpZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZU11bHRpcGFnZUxpbmUoKSB7XG4gIHJldHVybiBzdGF0ZS5zdmdEb2MuYXBwZW5kKCdsaW5lJykuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1BhZ2VNdWx0aXBhZ2VMaW5lKGNvbG9yLCBvcmlnaW4sIHBhZ2UpIHtcbiAgY29uc3QgbGluZVRhbiA9IE1hdGgudGFuKGRlZ3JlZXNUb1JhZGlhbnMoOTAgLSBzdGF0ZS5zZWNvbmRhcnlBbmdsZURlZ3JlZXMpKTtcbiAgY29uc3Qgb2Zmc2V0VGFuID0gTWF0aC50YW4oZGVncmVlc1RvUmFkaWFucyhzdGF0ZS5wcmltYXJ5QW5nbGVEZWdyZWVzKSk7XG4gIGNvbnN0IG9mZnNldCA9IHN0YXRlLnRleHRQYWRkaW5nO1xuICBwYWdlLm11bHRpcGFnZUxpbmVcbiAgICAuYXR0cigneDEnLCBvcmlnaW4uckJDb3JuZXJYICsgb2Zmc2V0ICogMylcbiAgICAuYXR0cigneDInLCBvcmlnaW4uckJDb3JuZXJYICsgb2Zmc2V0ICogNSlcbiAgICAuYXR0cigneTEnLCBvcmlnaW4uckJDb3JuZXJZICsgb2Zmc2V0ICogKDIgKiBvZmZzZXRUYW4gLSBsaW5lVGFuKSlcbiAgICAuYXR0cigneTInLCBvcmlnaW4uckJDb3JuZXJZICsgb2Zmc2V0ICogKDIgKiBvZmZzZXRUYW4gLSAzICogbGluZVRhbikpXG4gICAgLmNsYXNzZWQoJ3RyYW5zJywgZmFsc2UpXG4gICAgLnN0eWxlKCdvcGFjaXR5Jywgc3RhdGUuY3VqTW9kZSAmJiAhZ2V0SXNJbkFjdGl2ZUNVSihwYWdlKSA/IDAuMjUgOiAxKVxuICAgIC5zdHlsZSgnc3Ryb2tlJywgYCR7Y29sb3J9ODBgKVxuICAgIC5zdHlsZSgndmlzaWJpbGl0eScsIHN0YXRlLnRhcmdldFpvb21MZXZlbCA8IDAuOCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnKTtcbn1cbiIsImltcG9ydCB7IGRlZ3JlZXNUb1JhZGlhbnMgfSBmcm9tICcuLi8uLi9tYXRoJztcbmltcG9ydCB7IHN2Z0NvbnRhaW5lclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3NlbGVjdGlvbnMnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBnZXRJc0luQWN0aXZlQ1VKIH0gZnJvbSAnLi4vLi4vc3RhdGVVdGlsaXRpZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZU11bHRpcGFnZVBhbmVscygpIHtcbiAgcmV0dXJuIFsxLCAyLCAzXS5tYXAoKCkgPT5cbiAgICBzdmdDb250YWluZXJTZWxlY3Rpb25cbiAgICAgIC5hcHBlbmQoJ2RpdicpXG4gICAgICAuc3R5bGUoJ2N1cnNvcicsICdwb2ludGVyJylcbiAgICAgIC5zdHlsZSgnZmlsbC1vcGFjaXR5JywgMC41KVxuICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3UGFnZU11bHRpcGFnZVBhbmVscyhjb2xvciwgcGFnZSkge1xuICBjb25zdCBvZmZzZXRBbmdsZVJhZGlhbnMgPSBkZWdyZWVzVG9SYWRpYW5zKDkwIC0gc3RhdGUuc2Vjb25kYXJ5QW5nbGVEZWdyZWVzKTtcbiAgZm9yIChsZXQgbXVsdGlwYWdlSW5kZXggPSAwOyBtdWx0aXBhZ2VJbmRleCA8IDM7IG11bHRpcGFnZUluZGV4KyspIHtcbiAgICBjb25zdCBvcmRlckZyb21Gcm9udCA9IDMgLSBtdWx0aXBhZ2VJbmRleDtcbiAgICBjb25zdCBvZmZzZXRYID0gc3RhdGUudGV4dFBhZGRpbmcgKiBvcmRlckZyb21Gcm9udDtcbiAgICBjb25zdCBvZmZzZXRZID0gb2Zmc2V0WCAqIE1hdGgudGFuKG9mZnNldEFuZ2xlUmFkaWFucyk7XG4gICAgcGFnZS5tdWx0aXBhZ2VQYW5lbHNbbXVsdGlwYWdlSW5kZXhdXG4gICAgICAuY2xhc3NlZCgndHJhbnMnLCBmYWxzZSlcbiAgICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsIGByZ2JhKDI1MCwgMjUwLCAyNTAsICR7MSAtIDAuMiAqIG9yZGVyRnJvbUZyb250fWApXG4gICAgICAuc3R5bGUoJ2JvcmRlcicsIGAxcHggc29saWQgJHtjb2xvcn01MGApXG4gICAgICAuc3R5bGUoJ2hlaWdodCcsIHBhZ2Uuc3BlY3MuaGVpZ2h0KVxuICAgICAgLnN0eWxlKCdsZWZ0JywgcGFnZS5zcGVjcy54ICsgb2Zmc2V0WClcbiAgICAgIC5zdHlsZShcbiAgICAgICAgJ29wYWNpdHknLFxuICAgICAgICBwYWdlLnNwZWNzLmFscGhhICogKHN0YXRlLmN1ak1vZGUgJiYgIWdldElzSW5BY3RpdmVDVUoocGFnZSkgPyAwLjI1IDogMSlcbiAgICAgIClcbiAgICAgIC5zdHlsZSgndG9wJywgcGFnZS5zcGVjcy55IC0gb2Zmc2V0WSlcbiAgICAgIC5zdHlsZSgnd2lkdGgnLCBzdGF0ZS5wYWdlV2lkdGggKiAwLjk4KVxuICAgICAgLnN0eWxlKFxuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgYHNrZXdZKCR7cGFnZS5zcGVjcy5hbmdsZX1kZWcpIHJvdGF0ZVooJHtwYWdlLnNwZWNzLnJvdGF0aW9ufWRlZylgXG4gICAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBkZWdyZWVzVG9SYWRpYW5zIH0gZnJvbSAnLi4vLi4vbWF0aCc7XG5pbXBvcnQgeyBzdmdDb250YWluZXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9zZWxlY3Rpb25zJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGFnZU5vdGUocGFnZURhdGEsIHBhZ2VJbmRleCkge1xuICBjb25zdCBpZCA9IGBub3RlLSR7cGFnZUluZGV4fWA7XG4gIGNvbnN0IGxpbmUgPVxuICAgIHBhZ2VEYXRhLk5vdGVzID09PSAnJ1xuICAgICAgPyBudWxsXG4gICAgICA6IHN0YXRlLnN2Z0RvY1xuICAgICAgICAgIC5hcHBlbmQoJ2xpbmUnKVxuICAgICAgICAgIC5jbGFzc2VkKCdub3RlTGluZScsIHRydWUpXG4gICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDAuNzUpO1xuICBjb25zdCB0ZXh0ID1cbiAgICBwYWdlRGF0YS5Ob3RlcyA9PT0gJydcbiAgICAgID8gbnVsbFxuICAgICAgOiBzdmdDb250YWluZXJTZWxlY3Rpb25cbiAgICAgICAgICAuYXBwZW5kKCdkaXYnKVxuICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgIC5hdHRyKCdpZCcsIGlkKVxuICAgICAgICAgIC5jbGFzc2VkKCdub3RlLXRleHQnLCB0cnVlKVxuICAgICAgICAgIC5odG1sKHBhZ2VEYXRhLk5vdGVzKVxuICAgICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogMCxcbiAgICBpZCxcbiAgICBsaW5lLFxuICAgIHRleHQsXG4gICAgd2lkdGg6IDAsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1BhZ2VOb3RlKHBhZ2UsIHBvc2l0aW9uLCBub3RlZFBhZ2VQb3NpdGlvbnNTb3J0ZWQpIHtcbiAgaWYgKCFwYWdlLmhhc05vdGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZG9TaG93ID1cbiAgICBzdGF0ZS50YXJnZXRab29tTGV2ZWwgPD0gMS41ICYmXG4gICAgIXN0YXRlLmN1ak1vZGUgJiZcbiAgICAhc3RhdGUuZmxhdHRlbk1hcCAmJlxuICAgIHBhZ2UuaGFzTm90ZTtcbiAgY29uc3QgZmlyc3ROb3RlZFBhZ2VQb3NpdGlvbiA9IG5vdGVkUGFnZVBvc2l0aW9uc1NvcnRlZFswXTtcbiAgY29uc3QgZmlyc3ROb3RlWCA9IGZpcnN0Tm90ZWRQYWdlUG9zaXRpb24ueCAtIHN0YXRlLnBvc2l0aW9uc1swXS54O1xuICBjb25zdCBmaXJzdE5vdGVPZmZzZXQgPVxuICAgIChzdGF0ZS5yb3dzWzBdLkxldmVsIC0gMSkgKiBzdGF0ZS52ZXJ0UGFkZGluZyArIHN0YXRlLnZlcnRQYWRkaW5nIC8gMjtcbiAgY29uc3QgZmlyc3ROb3RlWSA9XG4gICAgc3RhdGUucG9zaXRpb25zWzBdLnkgK1xuICAgIGZpcnN0Tm90ZVggKiBNYXRoLnRhbihkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpKSArXG4gICAgc3RhdGUudmVydFBhZGRpbmcgKiAwLjc1ICtcbiAgICBmaXJzdE5vdGVPZmZzZXQ7XG5cbiAgY29uc3Qgc3VtT2ZQcmV2aW91c05vdGVIZWlnaHRzID0gbm90ZWRQYWdlUG9zaXRpb25zU29ydGVkXG4gICAgLnNsaWNlKDAsIG5vdGVkUGFnZVBvc2l0aW9uc1NvcnRlZC5pbmRleE9mKHBvc2l0aW9uKSlcbiAgICAubWFwKChwb3NpdGlvbl8pID0+IHN0YXRlLnBhZ2VzW3N0YXRlLnBvc2l0aW9ucy5pbmRleE9mKHBvc2l0aW9uXyldKVxuICAgIC5tYXAoKHBhZ2UpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2Uubm90ZS5pZCkuY2xpZW50SGVpZ2h0KVxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcblxuICAvLyBQcmV2ZW50cyBjbGlwcGluZyBvZiBub3RlcyBvbiBpbml0aWFsIG5vZGVzIGRpc3BsYXllZCBpbiBtYXAuXG4gIC8vIEhhcmRjb2RlZCB2YWx1ZXMgYXJlIGJhc2VkIG9uIG5vdGUtdGV4dCBjbGFzcyBpbiBtYXAuY3NzXG4gIC8vIFRPRE86IENvbnNpZGVyIHJlbW92aW5nIGhhcmRjb2RlZCB2YWx1ZXMuXG5cbiAgbGV0IGN1cnJOb3Rlc1dpZHRoID0gc3RhdGUubm90ZXNXaWR0aDtcbiAgaWYgKHBhZ2Uuc3BlY3MueCA8IDMwMCkge1xuICAgIGN1cnJOb3Rlc1dpZHRoID0gcGFnZS5zcGVjcy54IC0gMjQ7XG4gIH0gZWxzZSB7XG4gICAgY3Vyck5vdGVzV2lkdGggPSAzMDA7XG4gIH1cbiAgcGFnZS5ub3RlLnRleHQuc3R5bGUoJ3dpZHRoJywgY3Vyck5vdGVzV2lkdGgpO1xuXG4gIGNvbnN0IHlPZmZzZXQgPVxuICAgIHN1bU9mUHJldmlvdXNOb3RlSGVpZ2h0cyArXG4gICAgKHBvc2l0aW9uLnggLSBmaXJzdE5vdGVYKSAqXG4gICAgICBNYXRoLnRhbihkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpKTtcbiAgcGFnZS5ub3RlLmhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2Uubm90ZS5pZCkuY2xpZW50SGVpZ2h0O1xuICBwYWdlLm5vdGUueCA9IHBvc2l0aW9uLnggLSBjdXJyTm90ZXNXaWR0aCAtIDU7XG4gIHBhZ2Uubm90ZS55ID0gZmlyc3ROb3RlWSArIHlPZmZzZXQ7XG4gIHBhZ2Uubm90ZS5saW5lXG4gICAgLmF0dHIoJ3gxJywgcG9zaXRpb24ueClcbiAgICAuYXR0cigneTEnLCBwb3NpdGlvbi55ICsgc3RhdGUucGFnZUhlaWdodClcbiAgICAuYXR0cigneDInLCBwb3NpdGlvbi54KVxuICAgIC5hdHRyKCd5MicsIHBhZ2Uubm90ZS55IC0gNSlcbiAgICAuc3R5bGUoJ29wYWNpdHknLCBkb1Nob3cgPyAxIDogMCk7XG4gIHBhZ2Uubm90ZS50ZXh0XG4gICAgLnN0eWxlKCdsZWZ0JywgcG9zaXRpb24ueCAtIGN1cnJOb3Rlc1dpZHRoKVxuICAgIC5zdHlsZSgnb3BhY2l0eScsIGRvU2hvdyA/IDEgOiAwKVxuICAgIC5zdHlsZSgndG9wJywgcGFnZS5ub3RlLnkpO1xufVxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBzdmdDb250YWluZXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9zZWxlY3Rpb25zJztcbmltcG9ydCB7IGdldElzSW5BY3RpdmVDVUogfSBmcm9tICcuLi8uLi9zdGF0ZVV0aWxpdGllcyc7XG5cbmltcG9ydCB7XG4gIGhhbmRsZU1vdXNlQ2xpY2ssXG4gIGhhbmRsZU1vdXNlT3ZlcixcbiAgaGFuZGxlTW91c2VPdXQsXG59IGZyb20gJy4vaW50ZXJhY3Rpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhZ2VQYW5lbChwYWdlRGF0YSwgcGFnZUluZGV4KSB7XG4gIGNvbnN0IGltYWdlUGF0aCA9XG4gICAgcGFnZURhdGEuQ3VzdG9tSWNvblVybCB8fFxuICAgIHN0YXRlLnBhZ2VQYW5lbEltYWdlUGF0aHNbcGFnZURhdGEuVHlwZS50b0xvd2VyQ2FzZSgpXSB8fFxuICAgIHN0YXRlLnBhZ2VQYW5lbEltYWdlUGF0aHMuZ2VuZXJpYztcblxuICBjb25zdCBwYW5lbCA9IHN2Z0NvbnRhaW5lclNlbGVjdGlvblxuICAgIC5hcHBlbmQoJ2ltZycpXG4gICAgLmF0dHIoJ3NyYycsIGltYWdlUGF0aClcbiAgICAuYXR0cignaWQnLCBgcGFwZXIke3BhZ2VJbmRleH1gKVxuICAgIC5zdHlsZSgnYmFja2dyb3VuZCcsICcjZmZmZmZmJylcbiAgICAuc3R5bGUoJ2JvcmRlcicsICcxcHggc29saWQgI0RBRENFMCcpXG4gICAgLnN0eWxlKCdib3gtc2l6aW5nJywgJ2JvcmRlci1ib3gnKVxuICAgIC5zdHlsZSgnZmlsbCcsICcjZmZmZmZmJylcbiAgICAuc3R5bGUoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcbiAgICAuYXR0cigncG9pbnRlci1ldmVudHMnLCAnYWxsJylcbiAgICAuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nKTtcblxuICAvLyBFVkVOVCBIQU5ETEVSUyBHTyBPTiBUSElTIExBWUVSXG4gIHBhbmVsXG4gICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZU1vdXNlQ2xpY2socGFnZUluZGV4LCBwYWdlRGF0YSk7XG4gICAgfSlcbiAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZU1vdXNlT3ZlcihwYWdlSW5kZXgpO1xuICAgIH0pXG4gICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZU1vdXNlT3V0KHBhZ2VJbmRleCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHBhbmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1BhZ2VQYW5lbChwYWdlRGF0YSwgcGFnZSkge1xuICBsZXQgb3BhY2l0eSA9IDE7XG4gIGxldCB2aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICBsZXQgaG9yaXpQYWRkaW5nID0gMDtcbiAgbGV0IHZlcnRQYWRkaW5nID0gMDtcblxuICBpZiAoc3RhdGUuZmxhdHRlbk1hcCAmJiAhc3RhdGUudHJhbnNpdGlvblZpZXdzKSB7XG4gICAgb3BhY2l0eSA9IDA7XG4gICAgdmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9IGVsc2UgaWYgKHN0YXRlLmZsYXR0ZW5NYXAgJiYgc3RhdGUudHJhbnNpdGlvblZpZXdzKSB7XG4gICAgdmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICB9XG5cbiAgaWYgKHN0YXRlLmN1ak1vZGUgJiYgIWdldElzSW5BY3RpdmVDVUoocGFnZSkpIHtcbiAgICBvcGFjaXR5ID0gMC4yNTtcbiAgfVxuXG4gIGlmIChwYWdlRGF0YS5DdXN0b21JY29uVXJsKSB7XG4gICAgaG9yaXpQYWRkaW5nID0gTWF0aC5jZWlsKHBhZ2Uuc3BlY3Mud2lkdGggLyAxMCk7XG4gICAgdmVydFBhZGRpbmcgPSBNYXRoLmNlaWwocGFnZS5zcGVjcy5oZWlnaHQgLyAxMCk7XG4gIH1cblxuICBwYWdlLnBhbmVsXG4gICAgLmNsYXNzZWQoJ3RyYW5zJywgZmFsc2UpXG4gICAgLnN0eWxlKCdoZWlnaHQnLCBwYWdlLnNwZWNzLmhlaWdodClcbiAgICAuc3R5bGUoJ2xlZnQnLCBwYWdlLnNwZWNzLngpXG4gICAgLnN0eWxlKCd0b3AnLCBwYWdlLnNwZWNzLnkpXG4gICAgLnN0eWxlKCd3aWR0aCcsIHBhZ2Uuc3BlY3Mud2lkdGgpXG4gICAgLnN0eWxlKCdvcGFjaXR5Jywgb3BhY2l0eSlcbiAgICAuc3R5bGUoJ3BhZGRpbmctdG9wJywgdmVydFBhZGRpbmcpXG4gICAgLnN0eWxlKCdwYWRkaW5nLWJvdHRvbScsIHZlcnRQYWRkaW5nKVxuICAgIC5zdHlsZSgncGFkZGluZy1sZWZ0JywgaG9yaXpQYWRkaW5nKVxuICAgIC5zdHlsZSgncGFkZGluZy1yaWdodCcsIGhvcml6UGFkZGluZylcbiAgICAuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nKVxuICAgIC5hdHRyKCdwb2ludGVyLWV2ZW50cycsICdhbGwnKVxuICAgIC5zdHlsZShcbiAgICAgICd0cmFuc2Zvcm0nLFxuICAgICAgYHNrZXdZKCR7cGFnZS5zcGVjcy5hbmdsZX1kZWcpIHJvdGF0ZVooJHtwYWdlLnNwZWNzLnJvdGF0aW9ufWRlZylgXG4gICAgKVxuICAgIC5zdHlsZSgnd2lkdGgnLCBzdGF0ZS5wYWdlV2lkdGgpXG4gICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgdmlzaWJpbGl0eSk7XG59XG4iLCJpbXBvcnQgeyBnZXRTZWN0aW9uQ29sb3IgfSBmcm9tICcuLi9jb2xvcnMnO1xuaW1wb3J0IHsgZGVncmVlc1RvUmFkaWFucyB9IGZyb20gJy4uL21hdGgnO1xuaW1wb3J0IHsgc3ZnQ29udGFpbmVyU2VsZWN0aW9uIH0gZnJvbSAnLi4vc2VsZWN0aW9ucyc7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcblxuLy8gLyAvLy8vLy8vLyBTRUNUSU9OIENSRUFUSU9OIC8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vLyBMb29wIHRocnUgc2VjdGlvbnMgYXJyYXkgYW5kIGNyZWF0ZSBiYXNpYyBTZWN0aW9uIGNhcnBldCBlbGVtZW50c1xuLy8gVGhpcyBpbmNsdWRlcyAxKSBTZWN0aW9uIGxhYmVsIDIpIFNlY3Rpb24gXCJjYXJwZXRcIiBvciBcIm1hdFwiIHNoYXBlLlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb25zKCkge1xuICAvLyBGaXJzdCBMb29wIHRocnUgc2VjdGlvbnMgYXJyYXkuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyTWF0QXJyYXkgPSBbXTtcbiAgICBjb25zdCBmaXJzdFBhZ2VJbmRleCA9IHN0YXRlLnNlY3Rpb25zW2ldWzBdO1xuICAgIGNvbnN0IHNlY3Rpb25JZCA9IHN0YXRlLnJvd3NbZmlyc3RQYWdlSW5kZXhdLlNlY3Rpb247XG4gICAgY29uc3Qgc2VjdGlvbkxhYmVsID0gc2VjdGlvbklkLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvLyBDcmVhdGUgXCJDYXJwZXRcIiBvciBcIk1hdFwiIG9iamVjdFxuICAgIGNvbnN0IGN1cnJNYXQgPSBzdGF0ZS5zdmdEb2MuYXBwZW5kKCdwb2x5Z29uJyk7IC8vIGF0dGFjaCBhIHBvbHlnb25cbiAgICBjdXJyTWF0QXJyYXkucHVzaChjdXJyTWF0KTtcblxuICAgIGNvbnN0IGN1cnJJRFN0cmluZyA9IGBzZWN0aW9uJHtpfWA7XG5cbiAgICAvLyBDcmVhdGUgVGV4dCBPYmplY3RcbiAgICBzdmdDb250YWluZXJTZWxlY3Rpb24uYXBwZW5kKCdkaXYnKTtcbiAgICBjb25zdCBjdXJyVGV4dCA9IHN2Z0NvbnRhaW5lclNlbGVjdGlvblxuICAgICAgLmFwcGVuZCgndGV4dCcpIC8vIEF0dGFjaCBMYWJlbCBUZXh0XG4gICAgICAudGV4dChzZWN0aW9uTGFiZWwpXG4gICAgICAuYXR0cignSUQnLCBjdXJySURTdHJpbmcpO1xuXG4gICAgY29uc3QgdHJ1bmNhdGVkTGFiZWwgPSBnZXRUcnVuY2F0ZWRMYWJlbChzZWN0aW9uTGFiZWwpO1xuICAgIGNvbnN0IGN1cnJIZXggPSBnZXRTZWN0aW9uQ29sb3Ioc2VjdGlvbklkKTtcblxuICAgIC8vIFN0b3JlIGFsbCBvYmplY3RzIGluIEFycmF5LlxuICAgIC8vIENPTlNJREVSIEZJWElORzogTmVlZCB0byBzdGFuZGFyZGl6ZSB0ZXJtcyBpbiBjb2RlIGJhc2U6XG4gICAgLy8gXCJTaGVldFwiLCBcIk1hdFwiLCBcIkNhcnBldFwiIHJlZmVyZW5jZSB0aGUgcG9seWdvbiBkcmF3biBiZW5lYXRoIHRoZSBwYWdlcyB0aGF0IGJlbG9uZyB0byBhIHNwZWNpZmljIHNlY3Rpb24uXG4gICAgY29uc3QgY3VyclNlY3Rpb25PYmogPSB7XG4gICAgICBzaGVldDogY3Vyck1hdCxcbiAgICAgIHRleHQ6IGN1cnJUZXh0LFxuICAgICAgbGFiZWw6IHNlY3Rpb25MYWJlbCxcbiAgICAgIGhleDogY3VyckhleCxcbiAgICAgIHRydW5jYXRlZExhYmVsOiB0cnVuY2F0ZWRMYWJlbCxcbiAgICAgIHRydW5jYXRlOiBmYWxzZSxcbiAgICAgIGluZDogaSxcbiAgICAgIHg6ICdudWxsJyxcbiAgICAgIHk6ICdudWxsJyxcbiAgICAgIHdpZHRoOiAnbnVsbCcsXG4gICAgICBoZWlnaHQ6ICdudWxsJyxcbiAgICAgIHNlY3Rpb25YOiAnbnVsbCcsXG4gICAgICBjdXJyQVg6IG51bGwsXG4gICAgICBjdXJyQVk6IG51bGwsXG4gICAgICBjdXJyQlg6IG51bGwsXG4gICAgICBjdXJyQlk6IG51bGwsXG4gICAgICBjdXJyQ1g6IG51bGwsXG4gICAgICBjdXJyQ1k6IG51bGwsXG4gICAgICBjdXJyRFg6IG51bGwsXG4gICAgICBjdXJyRFk6IG51bGwsXG4gICAgICB0YXJnZXRBWDogbnVsbCxcbiAgICAgIHRhcmdldEFZOiBudWxsLFxuICAgICAgdGFyZ2V0Qlg6IG51bGwsXG4gICAgICB0YXJnZXRCWTogbnVsbCxcbiAgICAgIHRhcmdldENYOiBudWxsLFxuICAgICAgdGFyZ2V0Q1k6IG51bGwsXG4gICAgICB0YXJnZXREWDogbnVsbCxcbiAgICAgIHRhcmdldERZOiBudWxsLFxuICAgIH07XG4gICAgc3RhdGUuc2VjdGlvbk9ianMucHVzaChjdXJyU2VjdGlvbk9iaik7XG4gIH1cblxuICBhdHRhY2hTZWN0aW9uRXZlbnRzKCk7XG59XG5cbi8vIEdyb3VwIFBhZ2VzIGludG8gY2F0ZWdvcmljYWwgc2VjdGlvbnMuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduU2VjdGlvbnMoKSB7XG4gIC8vIENyZWF0ZSBlbXB0eSBsb2NhbCBhcnJheSB0byBzdG9yZSBzZWN0aW9uIGluZm9cbiAgY29uc3QgdW5pcXVlU2VjdGlvbkFycmF5ID0gW107XG5cbiAgLy8gVWx0aW1hdGVseSwgd2UnbGwgYnVpbGQgdGhpcyBhcnJheSBvdXQgZm9yIGZ1dHVyZSByZWZlcmVuY2UuXG4gIHN0YXRlLnNlY3Rpb25zID0gW107XG5cbiAgLy8gRklSU1QsIEZpbmQgVW5pcXVlIFNlY3Rpb25zXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUucm93cy5sZW5ndGg7IGkrKykge1xuICAgIGxldCB1bmlxdWUgPSB0cnVlO1xuXG4gICAgY29uc3QgY3VyclNlY3Rpb24gPSBzdGF0ZS5yb3dzW2ldLlNlY3Rpb247XG5cbiAgICBmb3IgKGxldCBlID0gMDsgZSA8IGk7IGUrKykge1xuICAgICAgaWYgKGN1cnJTZWN0aW9uID09IHN0YXRlLnJvd3NbZV0uU2VjdGlvbikge1xuICAgICAgICB1bmlxdWUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh1bmlxdWUpIHtcbiAgICAgIHVuaXF1ZVNlY3Rpb25BcnJheS5wdXNoKGN1cnJTZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvLyBOZXh0LCBFdmFsdWF0ZSBSb3cgU2VjdGlvbnMgYWdhaW5zdCBFYWNoIFVuaXF1ZSBTZWN0aW9uIE5hbWVcbiAgZm9yIChsZXQgeCA9IDA7IHggPCB1bmlxdWVTZWN0aW9uQXJyYXkubGVuZ3RoOyB4KyspIHtcbiAgICBjb25zdCBjdXJyR3JvdXAgPSBbXTtcblxuICAgIC8vIExvb3AgVGhydSBSb3dzIEFycmF5XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBzdGF0ZS5yb3dzLmxlbmd0aDsgcisrKSB7XG4gICAgICBpZiAoc3RhdGUucm93c1tyXS5TZWN0aW9uID09IHVuaXF1ZVNlY3Rpb25BcnJheVt4XSkge1xuICAgICAgICBjdXJyR3JvdXAucHVzaChyKTsgLy8gSWYgdGhlIHR3byBhcnJheXMgbWF0Y2gsIHB1c2ggaW50byBhIG5ldyBncm91cCBvYmplY3RcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQWZ0ZXIgYWxsIHJvd3MgYXJlIGV2YWx1YXRlZCwgTG9hZCB0aGUgY3Vyckdyb3VwIGludG8gdGhlIFNlY3Rpb25zIEFycmF5XG4gICAgc3RhdGUuc2VjdGlvbnMucHVzaChjdXJyR3JvdXApO1xuICB9XG5cbiAgYXNzaWduQ29sb3JzKCk7XG59XG5cbi8vIEFzc2lnbnMgY29sb3JzIGZvciBlYWNoIHNwZWNpZmllZCBzZWN0aW9uIGluIHRoZSBtYXAuXG5mdW5jdGlvbiBhc3NpZ25Db2xvcnMoKSB7XG4gIC8vIGRlYnVnZ2VyXG4gIC8vIFF1ZXN0aW9uIDogZ28gb3ZlciBmb3IgbG9vcCBhbmQgd2hhdCBpcyBiZWluZyBkb25lIGhlcmVcbiAgLy8gTG9vcCB0aHJ1IGVhY2ggcGFnZS5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCBzdGF0ZS5yb3dzLmxlbmd0aDsgeCsrKSB7XG4gICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggaW5kZXggd2l0aGluIGVhY2ggc2VjdGlvbi5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN0YXRlLnNlY3Rpb25zW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIC8vIElmIHRoZSBwYWdlIGV2YWx1YXRlZCBtYXRjaGVzIHRoZSBwYWdlIGluIHRoZSBjdXJyZW50IHNlY3Rpb24gYXJyYXksXG4gICAgICAgIGlmICh4ID09IHN0YXRlLnNlY3Rpb25zW2ldW2pdKSB7XG4gICAgICAgICAgLy8gR2V0IGFuZCBhc3NpZ24gdGhlIHByb3BlciBjb2xvciBmb3IgbGF0ZXIgc3R5bGluZy5cbiAgICAgICAgICBjb25zdCBjb2xvciA9IHtcbiAgICAgICAgICAgIGhleDogZ2V0U2VjdGlvbkNvbG9yKHN0YXRlLnJvd3Nbc3RhdGUuc2VjdGlvbnNbaV1bMF1dLlNlY3Rpb24pLFxuICAgICAgICAgIH07XG4gICAgICAgICAgc3RhdGUucGFnZUNvbG9ycy5wdXNoKGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyAvIC8vLy8vIFNFQ1RJT04gRFJBV0lORyAvLy8vLy8vLy8vLy8vL1xuXG4vLyBOT1RFIC0gVGhpcyBmdW5jdGlvbiBpcyBhIEJFQVNUISBJdCBuZWVkcyB0byBiZSByZWZhY3RvcmVkIGFuZCBzdHJlYW1saW5lZC5cbi8vIFRoaXMgd2FzIHRoZSBtb3N0IGNoYWxsZW5naW5nIHBhcnQgb2YgdGhlIHdob2xlIHZpc3VhbGl6YXRpb24sXG4vLyBJdCB3YXMgYWxzbyB0aGUgYnVnZ2llc3QuXG5cbmV4cG9ydCBmdW5jdGlvbiBsb3dlc3RMZXZlbEluU2VjdGlvbkNoZWNrKFxuICBlbmRJbmQsXG4gIGNoZWNrZWRMZXZlbCxcbiAgc2VjdGlvbkFycmF5SW5kXG4pIHtcbiAgbGV0IGxvd2VzdExldmVsU29GYXIgPSB0cnVlO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgZW5kSW5kOyB4KyspIHtcbiAgICBjb25zdCBjdXJySW5kZXggPSBzdGF0ZS5zZWN0aW9uc1tzZWN0aW9uQXJyYXlJbmRdW3hdO1xuICAgIGNvbnN0IGN1cnJMZXZlbCA9IHN0YXRlLnJvd3NbY3VyckluZGV4XS5MZXZlbDtcblxuICAgIGlmIChjdXJyTGV2ZWwgPD0gY2hlY2tlZExldmVsKSB7XG4gICAgICBsb3dlc3RMZXZlbFNvRmFyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBsb3dlc3RMZXZlbFNvRmFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd1NlY3Rpb25zKCkge1xuICAvLyBGaXJzdCwgd2UgbmVlZCB0byBsb29wIHRocnUgdGhlIGFycmF5IG9mIHNlY3Rpb25zLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gVE9ETzogcmVmYWN0b3IgaW5kZXgtYmFzZWQgbG9vcHMgaW50byBmb3JFYWNoIG9uIGFycmF5c1xuICAgIGNvbnN0IGZpcnN0UGFnZUluZGV4ID0gc3RhdGUuc2VjdGlvbnNbaV1bMF07XG4gICAgY29uc3Qgc2VjdGlvbklkID0gc3RhdGUucm93c1tmaXJzdFBhZ2VJbmRleF0uU2VjdGlvbjtcbiAgICAvLyBTZXQgdXAgc29tZSBsb2NhbCB2YXJzIGZvciBsYXRlciB1c2UuXG4gICAgbGV0IHBhZ2VMZWZ0O1xuICAgIGxldCBwYWdlUmlnaHQ7XG4gICAgbGV0IG1pbkxldmVsID0gMTAwMDtcbiAgICBsZXQgbWF4TGV2ZWwgPSAwO1xuICAgIGxldCBpbmRleExlZnQ7XG4gICAgbGV0IGluZGV4UmlnaHQ7XG5cbiAgICAvLyBTZXQgdXAgc29tZSBleHRyZW1lIG1pbi9tYXggWC9ZIHZhbHVlcyBmb3IgcGFnZXMuXG4gICAgLy8gV2hlbiBsb29waW5nIHRocnUgdGhlIHBhZ2VzIHdpdGhpbiBlYWNoIHNlY3Rpb24sIHdlIG5lZWQgdG8gZmluZCB0aGUgbWF4IGxvY2F0aW9uIHZhbHVlcyBmb3IgZWFjaCBwYWdlLlxuICAgIC8vIFRoaXMgaW5jbHVkZXM6IGhpZ2hlc3QsIGxvd2VzdCwgZmFydGhlc3QgbGVmdCwgZmFydGhlc3QgcmlnaHQuXG4gICAgbGV0IG1pblggPSAxMDAwMDAwMDAwMDtcblxuICAgIC8vIE5leHQgd2Ugd2lsbCBhY3R1YWxseSBsb29wIHRocm91Z2ggZWFjaCBwYWdlIG5lc3RlZCB3aXRoaW4gZWFjaCBzZWN0aW9uIGFycmF5LlxuICAgIGxldCBjdXJySW5kO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3RhdGUuc2VjdGlvbnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIEN1cnIgSW5kZXggaXMgdGhlIGluZGV4IHZhbHVlIG9mIGVhY2ggcGFnZSwgbmVzdGVkIHdpdGhpbiBlYWNoIHNlY3Rpb24uXG4gICAgICBjdXJySW5kID0gc3RhdGUuc2VjdGlvbnNbaV1bal07XG5cbiAgICAgIC8vIE9uY2Ugd2UgaGF2ZSB0aGUgY3VycmVudCBJbmRleCwgd2UgY2FuIHBsdWcgaXQgaW50byB0aGUgcm93c1tdIGFuZCBmaW5kIGl0cyBsZXZlbC5cbiAgICAgIGNvbnN0IGN1cnJMZXZlbCA9IHN0YXRlLnJvd3NbY3VyckluZF0uTGV2ZWw7XG5cbiAgICAgIC8vIE9uY2Ugd2UgaGF2ZSB0aGUgY3VycmVudCBJbmRleCwgd2UgY2FuIGFsc28gZmluZCBpdHMgcmVnaXN0cmF0aW9uIHgveSBjb29yZGluYXRlcyBpbiB0aGUgcG9zaXRpb25zIGFycmF5LlxuICAgICAgY29uc3QgY3VyclggPSBzdGF0ZS5wb3NpdGlvbnNbY3VyckluZF0ueDtcblxuICAgICAgLy8gTmV4dCwgd2UgbmVlZCB0byBkZXRlcm1pbmUgaWYgdGhlIGN1cnJlbnQgcGFnZSBoYXMgdGhlIGxvd2VzdCBYIHZhbHVlIChJcyBpdCBwb3NpdGlvbmVkIGZhcnRoZXIgbGVmdCB0aGFuIGFueSBwYWdlIHdlIHByZXZpb3VzbHkgcmV2aWV3ZWQpLlxuICAgICAgaWYgKGN1cnJYIDwgbWluWCkge1xuICAgICAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIHBhZ2UgaXMgbG93ZXN0IGxldmVsIGluIHNlY3Rpb24uIElmIHNvLCB0aGVuIFJlLWV2YWx1YXRlIHRoaXMgY29uZGl0aW9uLlxuICAgICAgICAvLyBBZGRlZCBjb25kaXRpb25zbCB0byBldmFsdWF0ZSBpZiBlYXJsaWVyIHBhZ2VzIHNpdCBmYXJ0aGVyIGJhY2sgaW4gbWFwLlxuICAgICAgICBpZiAoaiA+IDAgJiYgbG93ZXN0TGV2ZWxJblNlY3Rpb25DaGVjayhqLCBjdXJyTGV2ZWwsIGkpKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmQgPSBzdGF0ZS5zZWN0aW9uc1tpXVswXTtcbiAgICAgICAgICBtaW5YID0gc3RhdGUucG9zaXRpb25zW3N0YXJ0SW5kXS54O1xuXG4gICAgICAgICAgLy8gUmVtZW1iZXIgbGVmdC1tb3N0IHBhZ2Ugb2JqXG4gICAgICAgICAgcGFnZUxlZnQgPSBzdGF0ZS5yb3dzW3N0YXJ0SW5kXTtcblxuICAgICAgICAgIC8vIFJlbWVtYmVyIHRoZSBpbmRleCBvZiB0aGUgbGVmdC1tb3N0IHBhZ2UuXG4gICAgICAgICAgaW5kZXhMZWZ0ID0gc3RhcnRJbmQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWluWCA9IGN1cnJYO1xuICAgICAgICAgIC8vIFJlbWVtYmVyIGxlZnQtbW9zdCBwYWdlIG9ialxuICAgICAgICAgIHBhZ2VMZWZ0ID0gc3RhdGUucm93c1tjdXJySW5kXTtcblxuICAgICAgICAgIC8vIFJlbWVtYmVyIHRoZSBpbmRleCBvZiB0aGUgbGVmdC1tb3N0IHBhZ2UuXG4gICAgICAgICAgaW5kZXhMZWZ0ID0gY3VyckluZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBSZW1lbWJlciByaWdodC1tb3N0IHBhZ2Ugb2JqXG4gICAgICBwYWdlUmlnaHQgPSBzdGF0ZS5yb3dzW2N1cnJJbmRdO1xuXG4gICAgICAvLyBSZW1lbWJlciB0aGUgaW5kZXggb2YgdGhlIHJpZ2h0LW1vc3QgcGFnZS5cbiAgICAgIGluZGV4UmlnaHQgPSBjdXJySW5kO1xuXG4gICAgICAvLyBGaW5kIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGxldmVscyB3aXRoaW4gZWFjaCBzZWN0aW9uLCBhbmQgc3RvcmUgdGhlbSBmb3IgbGF0ZXIgdXNlLlxuICAgICAgaWYgKGN1cnJMZXZlbCA8IG1pbkxldmVsKSB7XG4gICAgICAgIG1pbkxldmVsID0gY3VyckxldmVsO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VyckxldmVsID4gbWF4TGV2ZWwpIHtcbiAgICAgICAgbWF4TGV2ZWwgPSBjdXJyTGV2ZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gREVHPlJBRElBTlMgQ09OVkVSU0lPTiBmb3IgcmlnaHQgdHJpYW5nbGUgLSBUaGlzIHdpbGwgYXBwbHkgdG8gYWxsIFRyaWcgY2FsY3VsYXRpb25zIGJlbG93LlxuICAgIC8vIFVzZSBzZWNvbmRhcnkgQW5nbGUgZm9yIGNhbGN1bGF0aW9uLlxuICAgIGNvbnN0IHRhbllSYWQgPSBkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnNlY29uZGFyeUFuZ2xlRGVncmVlcyk7XG5cbiAgICAvLyBSSUdIVCBTSURFIE9GIENBUlBFVDpcbiAgICAvLyBVc2luZyByaWdodCB0cmlhbmdsZXMsIGRldGVybWluZSB0aGUgZGVsdGEgYmV0d2VlbiB0aGUgaGVpZ2h0IG9mIHRoZSByaWdodC1tb3N0IHBhZ2UgYW5kIHRoZSB1cHBlciBtb3N0IHBhZ2UuXG4gICAgLy8gU3RhcnRpbmcgd2l0aCB0aGUgcmlnaHQgbW9zdCBwYWdlJ3MgcmVmZXJlbmNlIHBvaW50IFksIHdlIGNhbiB1c2UgdGhlIGRlbHRhIGluIGxldmVscyB0byBkZXRlcm1pbmUgdGhlIFkgRGlmZi5cbiAgICBjb25zdCByaWdodFNpZGVUb3AgPVxuICAgICAgKG1heExldmVsIC0gcGFnZVJpZ2h0LkxldmVsKSAqIHN0YXRlLnZlcnRQYWRkaW5nICtcbiAgICAgIHN0YXRlLnZlcnRQYWRkaW5nIC8gMiAtXG4gICAgICBzdGF0ZS50ZXh0UGFkZGluZzsgLy8gUklHSFQgQURKIEFOR0xFXG5cbiAgICAvLyBVc2luZyByaWdodCB0cmlhbmdsZXMsIGRldGVybWluZSB0aGUgZGVsdGEgYmV0d2VlbiB0aGUgaGVpZ2h0IG9mIHRoZSByaWdodC1tb3N0IHBhZ2UgdGhlIHRoZSBsb3dlciBtb3N0IHBhZ2UuXG4gICAgLy8gU3RhcnRpbmcgd2l0aCB0aGUgcmlnaHQgbW9zdCBwYWdlJ3MgcmVmZXJlbmNlIHBvaW50IFksIHdlIGNhbiB1c2UgdGhlIGRlbHRhIGluIGxldmVscyB0byBkZXRlcm1pbmUgdGhlIFkgRGlmZi5cbiAgICBjb25zdCByaWdodFNpZGVCb3R0b20gPVxuICAgICAgKHBhZ2VSaWdodC5MZXZlbCAtIG1pbkxldmVsKSAqIHN0YXRlLnZlcnRQYWRkaW5nICsgc3RhdGUucGFnZUhlaWdodCAvIDI7IC8vIFJJR0hUIEFESiBBTkdMRVxuXG4gICAgLy8gQk9UVE9NIFJJR0hUIENPUk5FUiBDQUxDVUxBVElPTlxuICAgIC8vIFVzaW5nIHRoZSBzZWNvbmRhcnkgYW5nbGUsIGFuZCB0aGUgWSBEaWZmLCB3ZSBjYW4gY2FsY3VsYXRlIGV4YWN0IFgvWSBjb29yZGluYXRlcyBvZiB0aGUgYm90dG9tLCByaWdodCBjb3JuZXIgb2YgdGhlIGNhcnBldC5cbiAgICAvLyBTaG91bGQgcmVuYW1lIHZhciB0byBjdXJyWEJvdHRvbVJpZ2h0RW5kIC0gdG8gc3BlY2lmeSB0aGF0IHRoaXMgaXMgdGhlIHJpZ2h0IGVuZC5cbiAgICBjb25zdCBjdXJyWEJvdHRvbVJpZ2h0RW5kID1cbiAgICAgIHN0YXRlLnJlZmVyZW5jZVBvaW50c1JpZ2h0W2N1cnJJbmRdLnggLVxuICAgICAgTWF0aC50YW4odGFuWVJhZCkgKiByaWdodFNpZGVCb3R0b207XG4gICAgLy8gU2hvdWxkIHJlbmFtZSB2YXIgdG8gY3VycllCb3R0b21SaWdodEVuZCAtIHRvIHNwZWNpZnkgdGhhdCB0aGlzIGlzIHRoZSByaWdodCBlbmQuXG4gICAgY29uc3QgY3VycllCb3R0b21SaWdodEVuZCA9XG4gICAgICBzdGF0ZS5yZWZlcmVuY2VQb2ludHNSaWdodFtjdXJySW5kXS55ICsgcmlnaHRTaWRlQm90dG9tO1xuXG4gICAgLy8gVE9QIFJJR0hUIENPUk5FUiBDQUxDVUxBVElPTlxuICAgIC8vIFVzaW5nIHRoZSBzZWNvbmRhcnkgYW5nbGUsIGFuZCB0aGUgWSBEaWZmLCB3ZSBjYW4gY2FsY3VsYXRlIGV4YWN0IFgvWSBjb29yZGluYXRlcyBvZiB0aGUgdG9wLCByaWdodCBjb3JuZXIgb2YgdGhlIGNhcnBldC5cbiAgICBjb25zdCBjdXJyWFRvcFJpZ2h0RW5kID1cbiAgICAgIHN0YXRlLnJlZmVyZW5jZVBvaW50c1JpZ2h0W2luZGV4UmlnaHRdLnggK1xuICAgICAgTWF0aC50YW4odGFuWVJhZCkgKiByaWdodFNpZGVUb3A7XG4gICAgY29uc3QgY3VycllUb3BSaWdodEVuZCA9XG4gICAgICBzdGF0ZS5yZWZlcmVuY2VQb2ludHNSaWdodFtpbmRleFJpZ2h0XS55IC0gcmlnaHRTaWRlVG9wO1xuXG4gICAgLy8gTEVGVCBTSURFIE9GIENBUlBFVFxuICAgIC8vIFVzaW5nIHJpZ2h0IHRyaWFuZ2xlcywgZGV0ZXJtaW5lIHRoZSBkZWx0YSBiZXR3ZWVuIHRoZSBoZWlnaHQgb2YgdGhlIGxlZnQtbW9zdCBwYWdlIGFuZCB0aGUgdXBwZXIgbW9zdCBwYWdlLlxuICAgIC8vIFN0YXJ0aW5nIHdpdGggdGhlIGxlZnQgbW9zdCBwYWdlJ3MgcmVmZXJlbmNlIHBvaW50IFksIHdlIGNhbiB1c2UgdGhlIGRlbHRhIGluIGxldmVscyB0byBkZXRlcm1pbmUgdGhlIFkgRGlmZi5cbiAgICBjb25zdCBsZWZ0U2lkZVRvcCA9XG4gICAgICAobWF4TGV2ZWwgLSBwYWdlTGVmdC5MZXZlbCkgKiBzdGF0ZS52ZXJ0UGFkZGluZyArXG4gICAgICBzdGF0ZS52ZXJ0UGFkZGluZyAvIDIgLVxuICAgICAgc3RhdGUudGV4dFBhZGRpbmc7IC8vIFJJR0hUIEFESiBBTkdMRVxuXG4gICAgLy8gVXNpbmcgcmlnaHQgdHJpYW5nbGVzLCBkZXRlcm1pbmUgdGhlIGRlbHRhIGJldHdlZW4gdGhlIGhlaWdodCBvZiB0aGUgbGVmdC1tb3N0IHBhZ2UgdGhlIHRoZSBsb3dlciBtb3N0IHBhZ2UuXG4gICAgLy8gU3RhcnRpbmcgd2l0aCB0aGUgbGVmdCBtb3N0IHBhZ2UncyByZWZlcmVuY2UgcG9pbnQgWSwgd2UgY2FuIHVzZSB0aGUgZGVsdGEgaW4gbGV2ZWxzIHRvIGRldGVybWluZSB0aGUgWSBEaWZmLlxuICAgIGNvbnN0IGxlZnRTaWRlQm90dG9tID1cbiAgICAgIChwYWdlTGVmdC5MZXZlbCAtIG1pbkxldmVsKSAqIHN0YXRlLnZlcnRQYWRkaW5nICsgc3RhdGUucGFnZUhlaWdodCAvIDI7IC8vIFJJR0hUIEFESiBBTkdMRVxuXG4gICAgLy8gQk9UVE9NIFJJR0hUIENPUk5FUiBDQUxDVUxBVElPTlxuICAgIC8vIFVzaW5nIHRoZSBzZWNvbmRhcnkgYW5nbGUsIGFuZCB0aGUgWSBEaWZmLCB3ZSBjYW4gY2FsY3VsYXRlIGV4YWN0IFgvWSBjb29yZGluYXRlcyBvZiB0aGUgYm90dG9tLCBsZWZ0IGNvcm5lciBvZiB0aGUgY2FycGV0LlxuICAgIGNvbnN0IGN1cnJYQm90dG9tTGVmdEVuZCA9XG4gICAgICBzdGF0ZS5yZWZlcmVuY2VQb2ludHNMZWZ0W2luZGV4TGVmdF0ueCAtXG4gICAgICBNYXRoLnRhbih0YW5ZUmFkKSAqIGxlZnRTaWRlQm90dG9tO1xuICAgIGNvbnN0IGN1cnJZQm90dG9tTGVmdEVuZCA9XG4gICAgICBzdGF0ZS5yZWZlcmVuY2VQb2ludHNMZWZ0W2luZGV4TGVmdF0ueSArIGxlZnRTaWRlQm90dG9tO1xuXG4gICAgLy8gVE9QIFJJR0hUIENPUk5FUiBDQUxDVUxBVElPTlxuICAgIC8vIFVzaW5nIHRoZSBzZWNvbmRhcnkgYW5nbGUsIGFuZCB0aGUgWSBEaWZmLCB3ZSBjYW4gY2FsY3VsYXRlIGV4YWN0IFgvWSBjb29yZGluYXRlcyBvZiB0aGUgdG9wLCBsZWZ0IGNvcm5lciBvZiB0aGUgY2FycGV0LlxuICAgIGNvbnN0IGN1cnJYVG9wTGVmdEVuZCA9XG4gICAgICBzdGF0ZS5yZWZlcmVuY2VQb2ludHNMZWZ0W2luZGV4TGVmdF0ueCArIE1hdGgudGFuKHRhbllSYWQpICogbGVmdFNpZGVUb3A7XG4gICAgY29uc3QgY3VycllUb3BMZWZ0RW5kID1cbiAgICAgIHN0YXRlLnJlZmVyZW5jZVBvaW50c0xlZnRbaW5kZXhMZWZ0XS55IC0gbGVmdFNpZGVUb3A7XG5cbiAgICAvLyBCZWZvcmUgZHJhd2luZyB0aGUgYWN0dWFsIGNhcnBldCwgd2UgYWxzbyBuZWVkIHRvIGtub3cgaXRzIGNvbG9yIHZhbHVlLlxuICAgIGNvbnN0IGN1cnJIZXggPSBnZXRTZWN0aW9uQ29sb3Ioc2VjdGlvbklkKTtcblxuICAgIC8vIEEgZGVzYXR1cmF0ZWQgdmVyc2lvbiBvZiB0aGUgY3VycmVudCBjb2xvciBmb3IgdGhlIHNlY3Rpb24gbGFiZWxcbiAgICBjb25zdCBjdXJyTGFiZWxIZXggPSBkMy5pbnRlcnBvbGF0ZUxhYihjdXJySGV4LCAnIzRkNGQ0ZCcpKDAuMzUpO1xuXG4gICAgLy8gRFJBVyBQT0xZR09OXG4gICAgLy8gRHJhd3MgdGhlIGNhcnBldCBiZW5lYXRoIHRoZSBwYWdlLlxuXG4gICAgaWYgKCFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MpIHtcbiAgICAgIGNvbnN0IHBvaW50cyA9IFtcbiAgICAgICAgY3VyclhCb3R0b21SaWdodEVuZCxcbiAgICAgICAgY3VycllCb3R0b21SaWdodEVuZCxcbiAgICAgICAgY3VyclhUb3BSaWdodEVuZCxcbiAgICAgICAgY3VycllUb3BSaWdodEVuZCxcbiAgICAgICAgY3VyclhUb3BMZWZ0RW5kLFxuICAgICAgICBjdXJyWVRvcExlZnRFbmQsXG4gICAgICAgIGN1cnJYQm90dG9tTGVmdEVuZCxcbiAgICAgICAgY3VycllCb3R0b21MZWZ0RW5kLFxuICAgICAgXTtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnNoZWV0IC8vIGF0dGFjaCBhIHBvbHlnb25cbiAgICAgICAgLmF0dHIoJ3BvaW50cycsIHBvaW50cy5qb2luKCcsJykpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGN1cnJIZXgpOyAvLyB4LHkgcG9pbnRzXG5cbiAgICAgIC8vIFN0b3JpbmcgY29vcmRpbmF0ZXMgb2YgbWF0IGNvcm5lcnMgaW4gU2VjdGlvbk9ianMgYXJyYXkgZm9yIGxhdGVyIHVzZS5cbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJBWCA9IGN1cnJYVG9wTGVmdEVuZDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJBWSA9IGN1cnJZVG9wTGVmdEVuZDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJCWCA9IGN1cnJYVG9wUmlnaHRFbmQ7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQlkgPSBjdXJyWVRvcFJpZ2h0RW5kO1xuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0uY3VyckNYID0gY3VyclhCb3R0b21SaWdodEVuZDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJDWSA9IGN1cnJZQm90dG9tUmlnaHRFbmQ7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyRFggPSBjdXJyWEJvdHRvbUxlZnRFbmQ7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyRFkgPSBjdXJyWUJvdHRvbUxlZnRFbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRSQU5TSVRJT04gVE8gSVNPTUVUUklDIE1BVFxuXG4gICAgICAvLyAxIC0gR3JhYiBsb2NhbCB2YXJzIGZyb20gc3RvcmFnZSBhcnJheS5cbiAgICAgIGxldCBjdXJyQVggPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQVg7XG4gICAgICBsZXQgY3VyckFZID0gc3RhdGUuc2VjdGlvbk9ianNbaV0uY3VyckFZO1xuICAgICAgbGV0IGN1cnJCWCA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJCWDtcbiAgICAgIGxldCBjdXJyQlkgPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQlk7XG4gICAgICBsZXQgY3VyckNYID0gc3RhdGUuc2VjdGlvbk9ianNbaV0uY3VyckNYO1xuICAgICAgbGV0IGN1cnJDWSA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJDWTtcbiAgICAgIGxldCBjdXJyRFggPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyRFg7XG4gICAgICBsZXQgY3VyckRZID0gc3RhdGUuc2VjdGlvbk9ianNbaV0uY3VyckRZO1xuXG4gICAgICAvLyAyIC0gUnVuIFZhbHVlcyB0aHJ1IFR3ZWVucyBmb3IgQW5pbWF0aW9uXG4gICAgICBjdXJyQVggKz0gKGN1cnJYVG9wTGVmdEVuZCAtIGN1cnJBWCkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gICAgICBjdXJyQVkgKz0gKGN1cnJZVG9wTGVmdEVuZCAtIGN1cnJBWSkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gICAgICBjdXJyQlggKz0gKGN1cnJYVG9wUmlnaHRFbmQgLSBjdXJyQlgpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgY3VyckJZICs9IChjdXJyWVRvcFJpZ2h0RW5kIC0gY3VyckJZKSAqIHN0YXRlLnZpZXdUcmFuc2l0aW9uRWFzZTtcbiAgICAgIGN1cnJDWCArPSAoY3VyclhCb3R0b21SaWdodEVuZCAtIGN1cnJDWCkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gICAgICBjdXJyQ1kgKz0gKGN1cnJZQm90dG9tUmlnaHRFbmQgLSBjdXJyQ1kpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgY3VyckRYICs9IChjdXJyWEJvdHRvbUxlZnRFbmQgLSBjdXJyRFgpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgY3VyckRZICs9IChjdXJyWUJvdHRvbUxlZnRFbmQgLSBjdXJyRFkpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuXG4gICAgICAvLyAzIC0gUmVsb2FkIHZhbHVlcyBiYWNrIGludG8gc3RvcmFnZSBhcnJheSBmb3IgbGF0ZXIuXG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQVggPSBjdXJyQVg7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQVkgPSBjdXJyQVk7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQlggPSBjdXJyQlg7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQlkgPSBjdXJyQlk7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQ1ggPSBjdXJyQ1g7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQ1kgPSBjdXJyQ1k7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyRFggPSBjdXJyRFg7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyRFkgPSBjdXJyRFk7XG5cbiAgICAgIC8vIDQgLSBVcGRhdGUgQ1NTIGFuZCByZXBvc2l0aW9uIG1hdFxuICAgICAgY29uc3QgcG9pbnRzID0gW1xuICAgICAgICBjdXJyQVgsXG4gICAgICAgIGN1cnJBWSxcbiAgICAgICAgY3VyckJYLFxuICAgICAgICBjdXJyQlksXG4gICAgICAgIGN1cnJDWCxcbiAgICAgICAgY3VyckNZLFxuICAgICAgICBjdXJyRFgsXG4gICAgICAgIGN1cnJEWSxcbiAgICAgIF07XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5zaGVldCAvLyBhdHRhY2ggYSBwb2x5Z29uXG4gICAgICAgIC5hdHRyKCdwb2ludHMnLCBwb2ludHMuam9pbignLCcpKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBjdXJySGV4KTsgLy8geCx5IHBvaW50c1xuICAgIH1cblxuICAgIC8vIFNFQ1RJT04gTEFCRUwgUExBQ0VNRU5UIEFORCBEUkFXSU5HIC0tLS0tXG5cbiAgICBpZiAoc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50ZXh0XG4gICAgICAgIC5zdHlsZSgnb3BhY2l0eScsIDApXG4gICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29udGF0aW5hdGVkIENTUyBUcmFuc2Zvcm0gZm9yIGxhdGVyIHVzZS5cbiAgICAgIGNvbnN0IHRyYW5zU3RyaW5nID0gYHJvdGF0ZSgke3N0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXN9ZGVnKSBza2V3WCgtNDBkZWcpYDtcblxuICAgICAgLy8gRFJBVyBMQUJFTFxuICAgICAgY29uc3Qgc2VjdGlvbkxhYmVsID0gc3RhdGUucm93c1tjdXJySW5kXS5TZWN0aW9uLnRvVXBwZXJDYXNlKCk7XG4gICAgICAvLyBBZnRlciBhbGwgdGhhdCwgYXBwbHkgbmV3IHBvc2l0aW9uIGFuZCB1cGRhdGVkIHN0eWxlcyB0byBzZWN0aW9uIGxhYmVsLlxuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGV4dFxuICAgICAgICAudGV4dChzZWN0aW9uTGFiZWwpXG4gICAgICAgIC5jbGFzc2VkKCdzZWN0aW9uLWxhYmVsJywgdHJ1ZSlcbiAgICAgICAgLnN0eWxlKCdjb2xvcicsIGN1cnJMYWJlbEhleClcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMSlcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBzdGF0ZS5zZWN0aW9uTGFiZWxTaXplKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCAnY2VudGVyJylcbiAgICAgICAgLnN0eWxlKCd0cmFuc2l0aW9uJywgJ29wYWNpdHkgMC41cyBlYXNlLWluLW91dCcpO1xuXG4gICAgICBjb25zdCBzZWN0aW9uTGFiZWxXaWR0aCA9IE1hdGguc3FydChcbiAgICAgICAgTWF0aC5wb3coY3VycllCb3R0b21SaWdodEVuZCAtIGN1cnJZQm90dG9tTGVmdEVuZCwgMikgK1xuICAgICAgICAgIE1hdGgucG93KGN1cnJYQm90dG9tUmlnaHRFbmQgLSBjdXJyWEJvdHRvbUxlZnRFbmQsIDIpXG4gICAgICApO1xuXG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50ZXh0LnN0eWxlKCd3aWR0aCcsIHNlY3Rpb25MYWJlbFdpZHRoKTtcbiAgICAgIGNvbnN0IHNlY3Rpb25MYWJlbEhlaWdodCA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRleHQubm9kZSgpLmNsaWVudEhlaWdodDtcblxuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGV4dFxuICAgICAgICAuc3R5bGUoJ2NvbG9yJywgY3VyckxhYmVsSGV4KVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHN0YXRlLnNlY3Rpb25MYWJlbFNpemUpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbGlnbicsICdjZW50ZXInKVxuICAgICAgICAuc3R5bGUoJ3RyYW5zZm9ybScsIHRyYW5zU3RyaW5nKTtcblxuICAgICAgLy8gRmluZCB0aGUgY2VudGVyIG9mIHRoZSBsYWJlbCwgdGhlIGF4aXMgaW4gd2hpY2ggaXQgd2lsbCByb3RhdGUgb24uXG4gICAgICAvLyBGaW5kIFggVmFsdWVcbiAgICAgIGNvbnN0IHNlY3Rpb25MYWJlbENlbnRlclggPVxuICAgICAgICBNYXRoLmNvcyhkZWdyZWVzVG9SYWRpYW5zKDE4MCArIHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpKSAqXG4gICAgICAgIChzZWN0aW9uTGFiZWxXaWR0aCAvIDIpO1xuXG4gICAgICAvLyBGaW5kIFkgVmFsdWVcbiAgICAgIGNvbnN0IHNlY3Rpb25MYWJlbENlbnRlclkgPVxuICAgICAgICBNYXRoLnNpbihkZWdyZWVzVG9SYWRpYW5zKDE4MCArIHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpKSAqXG4gICAgICAgIChzZWN0aW9uTGFiZWxXaWR0aCAvIDIpO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgYm90dG9tIGxlZnQgY29ybmVyIG9mIHRyYW5zb3JtZWQgbGFiZWwgYm94LiBOb3RlIC0gNDDCsCBpcyBhIGhhcmRjb2RlZCB2YWx1ZSBmb3IgdGhlIGxhYmVsIHRyYW5zZm9ybSBhbmQgaXMgcmVmbGVjdGVkIGluIHRoaXMgZXF1YXRpb24gYmVsb3cpXG4gICAgICAvLyBGaW5kIFggVmFsdWVcbiAgICAgIGNvbnN0IHNlY3Rpb25MYWJlbEJvdHRvbUxlZnRYID1cbiAgICAgICAgY3VyclhCb3R0b21MZWZ0RW5kICtcbiAgICAgICAgc2VjdGlvbkxhYmVsQ2VudGVyWCArXG4gICAgICAgIHNlY3Rpb25MYWJlbFdpZHRoIC8gMiAtXG4gICAgICAgIE1hdGguc2luKGRlZ3JlZXNUb1JhZGlhbnMoc3RhdGUucHJpbWFyeUFuZ2xlRGVncmVlcyArIDQwKSkgKlxuICAgICAgICAgIChzZWN0aW9uTGFiZWxIZWlnaHQgLyAxLjUpO1xuXG4gICAgICAvLyBGaW5kIFkgVmFsdWUgKE5vdGUgLSA0MMKwIGlzIGEgaGFyZGNvZGVkIHZhbHVlIGZvciB0aGUgbGFiZWwgdHJhbnNmb3JtIGFuZCBpcyByZWZsZWN0ZWQgaW4gdGhpcyBlcXVhdGlvbiBiZWxvdylcbiAgICAgIGNvbnN0IHNlY3Rpb25MYWJlbEJvdHRvbUxlZnRZID1cbiAgICAgICAgY3VycllCb3R0b21MZWZ0RW5kICtcbiAgICAgICAgc2VjdGlvbkxhYmVsQ2VudGVyWSArXG4gICAgICAgIHNlY3Rpb25MYWJlbEhlaWdodCAvIDIgK1xuICAgICAgICBNYXRoLmNvcyhkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMgKyA0MCkpICpcbiAgICAgICAgICAoc2VjdGlvbkxhYmVsSGVpZ2h0IC8gMS41KTtcblxuICAgICAgLy8gRmluZCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIFNlY3Rpb24gQ2FycGV0IEJvdHRvbSBDb3JuZXIgcG9zaXRpb25zIGFuZCBib3R0b20gbGVmdCBjb3JuZXIgb2YgbGFiZWwgYm94LlxuICAgICAgY29uc3QgeERpZmYgPSBzZWN0aW9uTGFiZWxCb3R0b21MZWZ0WCAtIGN1cnJYQm90dG9tTGVmdEVuZDtcbiAgICAgIGNvbnN0IHlEaWZmID0gY3VycllCb3R0b21MZWZ0RW5kIC0gc2VjdGlvbkxhYmVsQm90dG9tTGVmdFk7XG5cbiAgICAgIC8vIE5vIExhYmVscyBBcmUgVHJ1bmNhdGVkIC0gbXVzdCB1cGRhdGUgc2VjdGlvbk9ianMgQXJyYXlcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRydW5jYXRlID0gZmFsc2U7XG5cbiAgICAgIC8vIEFmdGVyIGFsbCB0aGF0LCBhcHBseSBuZXcgcG9zaXRpb24gYW5kIHVwZGF0ZWQgc3R5bGVzIHRvIHNlY3Rpb24gbGFiZWwuXG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50ZXh0XG4gICAgICAgIC50ZXh0KHNlY3Rpb25MYWJlbClcbiAgICAgICAgLmNsYXNzZWQoJ3NlY3Rpb24tbGFiZWwnLCB0cnVlKVxuICAgICAgICAuc3R5bGUoJ2xlZnQnLCBjdXJyWEJvdHRvbUxlZnRFbmQgLSB4RGlmZilcbiAgICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMSlcbiAgICAgICAgLnN0eWxlKCd0b3AnLCBjdXJyWUJvdHRvbUxlZnRFbmQgKyB5RGlmZilcbiAgICAgICAgLnN0eWxlKFxuICAgICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgICBzdGF0ZS50YXJnZXRab29tTGV2ZWwgPD0gMC4zID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlRmxhdFNlY3Rpb25NZWFzdXJlbWVudHMoaSkge1xuICBsZXQgcGFnZUxlZnQ7XG4gIGxldCBwYWdlUmlnaHQ7XG4gIGxldCBwYWdlVG9wO1xuICBsZXQgcGFnZUJvdHRvbTtcblxuICAvLyBTZXQgdXAgc29tZSBleHRyZW1lIG1pbi9tYXggWC9ZIHZhbHVlcyBmb3IgcGFnZXMuXG4gIC8vIFdoZW4gbG9vcGluZyB0aHJ1IHRoZSBwYWdlcyB3aXRoaW4gZWFjaCBzZWN0aW9uLCB3ZSBuZWVkIHRvIGZpbmQgdGhlIG1heCBsb2NhdGlvbiB2YWx1ZXMgZm9yIGVhY2ggcGFnZS5cbiAgLy8gVGhpcyBpbmNsdWRlczogaGlnaGVzdCwgbG93ZXN0LCBmYXJ0aGVzdCBsZWZ0LCBmYXJ0aGVzdCByaWdodC5cbiAgbGV0IG1pblggPSAxMDAwMDAwMDAwMDtcbiAgbGV0IG1heFggPSAwO1xuICBsZXQgbWluWSA9IDEwMDAwMDAwMDAwO1xuICBsZXQgbWF4WSA9IDA7XG5cbiAgLy8gTmV4dCB3ZSB3aWxsIGFjdHVhbGx5IGxvb3AgdGhyb3VnaCBlYWNoIHBhZ2UgbmVzdGVkIHdpdGhpbiBlYWNoIHNlY3Rpb24gYXJyYXkuXG4gIGZvciAobGV0IGogPSAwOyBqIDwgc3RhdGUuc2VjdGlvbnNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAvLyBDdXJyIEluZGV4IGlzIHRoZSBpbmRleCB2YWx1ZSBvZiBlYWNoIHBhZ2UsIG5lc3RlZCB3aXRoaW4gZWFjaCBzZWN0aW9uLlxuICAgIGNvbnN0IGN1cnJJbmQgPSBzdGF0ZS5zZWN0aW9uc1tpXVtqXTtcblxuICAgIC8vIE9uY2Ugd2UgaGF2ZSB0aGUgY3VycmVudCBJbmRleCwgd2UgY2FuIGFsc28gZmluZCBpdHMgcmVnaXN0cmF0aW9uIHgveSBjb29yZGluYXRlcyBpbiB0aGUgcG9zaXRpb25zIGFycmF5LlxuICAgIGNvbnN0IGN1cnJYID0gc3RhdGUucG9zaXRpb25zW2N1cnJJbmRdLng7XG4gICAgY29uc3QgY3VyclkgPSBzdGF0ZS5wb3NpdGlvbnNbY3VyckluZF0ueTtcbiAgICBzdGF0ZS5jdXJyWFBhZGRpbmcgPVxuICAgICAgc3RhdGUucG9zaXRpb25zW2N1cnJJbmRdLnggLSBzdGF0ZS5vcmlnaW5zW2N1cnJJbmRdLmNvbm5lY3Rvck9yaWdpblg7XG5cbiAgICAvLyBOZXh0LCB3ZSBuZWVkIHRvIGRldGVybWluZSBpZiB0aGUgY3VycmVudCBwYWdlIGhhcyB0aGUgbG93ZXN0IFggdmFsdWUgKElzIGl0IHBvc2l0aW9uZWQgZmFydGhlciBsZWZ0IHRoYW4gYW55IHBhZ2Ugd2UgcHJldmlvdXNseSByZXZpZXdlZCkuXG4gICAgaWYgKGN1cnJYIDwgbWluWCkge1xuICAgICAgbWluWCA9IGN1cnJYO1xuXG4gICAgICAvLyBSZW1lbWJlciBsZWZ0LW1vc3QgcGFnZSBvYmpcbiAgICAgIHBhZ2VMZWZ0ID0gY3VyckluZDtcbiAgICB9XG5cbiAgICAvLyBOZXh0LCB3ZSBuZWVkIHRvIGRldGVybWluZSBpZiB0aGUgY3VycmVudCBwYWdlIGhhcyB0aGUgaGlnaHN0IFggdmFsdWUgKElzIGl0IHBvc2l0aW9uZWQgZmFydGhlciByaWdodCB0aGFuIGFueSBwYWdlIHdlIHByZXZpb3VzbHkgcmV2aWV3ZWQpLlxuICAgIGlmIChjdXJyWCA+IG1heFgpIHtcbiAgICAgIG1heFggPSBjdXJyWDtcblxuICAgICAgLy8gUmVtZW1iZXIgcmlnaHQtbW9zdCBwYWdlIG9ialxuICAgICAgcGFnZVJpZ2h0ID0gY3VyckluZDtcbiAgICB9XG5cbiAgICAvLyBGaW5kIFVwcGVyIE1vc3QgUGFnZVxuXG4gICAgaWYgKGN1cnJZID4gbWF4WSkge1xuICAgICAgbWF4WSA9IGN1cnJZO1xuICAgICAgcGFnZUJvdHRvbSA9IGN1cnJJbmQ7XG4gICAgfVxuXG4gICAgLy8gRmluZCBMb3dlci1Nb3N0IFBhZ2VcbiAgICBpZiAoY3VyclkgPCBtaW5ZKSB7XG4gICAgICBtaW5ZID0gY3Vyclk7XG4gICAgICBwYWdlVG9wID0gY3VyckluZDtcbiAgICB9XG4gIH1cblxuICAvLyBUT1AgTEVGVCBDT1JORVJcbiAgY29uc3QgY3VyclhUb3BMZWZ0RW5kID0gc3RhdGUucG9zaXRpb25zW3BhZ2VMZWZ0XS54IC0gc3RhdGUuY3VyclhQYWRkaW5nICogMjtcbiAgY29uc3QgY3VycllUb3BMZWZ0RW5kID0gc3RhdGUucG9zaXRpb25zW3BhZ2VUb3BdLnkgLSBzdGF0ZS5jdXJyWFBhZGRpbmc7XG5cbiAgLy8gVE9QIFJJR0hUIENPUk5FUlxuICBjb25zdCBjdXJyWFRvcFJpZ2h0RW5kID1cbiAgICBzdGF0ZS5wb3NpdGlvbnNbcGFnZVJpZ2h0XS54ICsgc3RhdGUucGFnZVdpZHRoICogMyArIHN0YXRlLmN1cnJYUGFkZGluZyAvIDI7XG4gIGNvbnN0IGN1cnJZVG9wUmlnaHRFbmQgPSBzdGF0ZS5wb3NpdGlvbnNbcGFnZVRvcF0ueSAtIHN0YXRlLmN1cnJYUGFkZGluZztcblxuICAvLyBCT1RUT00gUklHSFQgQ09STkVSXG4gIGNvbnN0IGN1cnJYQm90dG9tUmlnaHRFbmQgPVxuICAgIHN0YXRlLnBvc2l0aW9uc1twYWdlUmlnaHRdLnggKyBzdGF0ZS5wYWdlV2lkdGggKiAzICsgc3RhdGUuY3VyclhQYWRkaW5nIC8gMjtcbiAgY29uc3QgY3VycllCb3R0b21SaWdodEVuZCA9XG4gICAgc3RhdGUub3JpZ2luc1twYWdlQm90dG9tXS5yQkNvcm5lclkgKyBzdGF0ZS5jdXJyWFBhZGRpbmc7XG5cbiAgLy8gQk9UVE9NIExFRlQgQ09STkVSXG4gIGNvbnN0IGN1cnJYQm90dG9tTGVmdEVuZCA9XG4gICAgc3RhdGUucG9zaXRpb25zW3BhZ2VMZWZ0XS54IC0gc3RhdGUuY3VyclhQYWRkaW5nICogMjtcbiAgY29uc3QgY3VycllCb3R0b21MZWZ0RW5kID1cbiAgICBzdGF0ZS5vcmlnaW5zW3BhZ2VCb3R0b21dLnJCQ29ybmVyWSArIHN0YXRlLmN1cnJYUGFkZGluZztcblxuICAvLyBVUERBVEUgVEFSR0VUIFZBTFVFUyBJTiBBUlJBWVxuICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXREWCA9IGN1cnJYVG9wTGVmdEVuZDtcbiAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0RFkgPSBjdXJyWVRvcExlZnRFbmQ7XG4gIC8vIEJcbiAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0QVggPSBjdXJyWFRvcFJpZ2h0RW5kO1xuICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRBWSA9IGN1cnJZVG9wUmlnaHRFbmQ7XG4gIC8vIENcbiAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0QlggPSBjdXJyWEJvdHRvbVJpZ2h0RW5kO1xuICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRCWSA9IGN1cnJZQm90dG9tUmlnaHRFbmQ7XG4gIC8vIERcbiAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0Q1ggPSBjdXJyWEJvdHRvbUxlZnRFbmQ7XG4gIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldENZID0gY3VycllCb3R0b21MZWZ0RW5kO1xufVxuXG4vLyBSRVNFVFMgSE9MRElORyBBUlJBWSBGT1IgVEFSR0VUIENBUlBFVCBNRUFTVVJFTUVOVFNcbmV4cG9ydCBmdW5jdGlvbiByZXNldFNlY3Rpb25DYWxjdWxhdGlvbnMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBVUERBVEUgVEFSR0VUIFZBTFVFUyBJTiBBUlJBWVxuICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldERYID0gbnVsbDtcbiAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXREWSA9IG51bGw7XG4gICAgLy8gQlxuICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldEFYID0gbnVsbDtcbiAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRBWSA9IG51bGw7XG4gICAgLy8gQ1xuICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldEJYID0gbnVsbDtcbiAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRCWSA9IG51bGw7XG4gICAgLy8gRFxuICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldENYID0gbnVsbDtcbiAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRDWSA9IG51bGw7XG4gIH1cbn1cblxuLy8gU0VDVElPTiBDQVJQRVRTICYgTEFCRUxTXG5leHBvcnQgZnVuY3Rpb24gZHJhd0ZsYXRTZWN0aW9ucygpIHtcbiAgLy8gRmlyc3QsIHdlIG5lZWQgdG8gbG9vcCB0aHJ1IHRoZSBhcnJheSBvZiBzZWN0aW9ucy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGZpcnN0UGFnZUluZGV4ID0gc3RhdGUuc2VjdGlvbnNbaV1bMF07XG4gICAgY29uc3Qgc2VjdGlvbklkID0gc3RhdGUucm93c1tmaXJzdFBhZ2VJbmRleF0uU2VjdGlvbjtcblxuICAgIC8vIFNldCB1cCBzb21lIGxvY2FsIHZhcnMgZm9yIGxhdGVyIHVzZS5cbiAgICBpZiAoc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0RFggPT0gbnVsbCkge1xuICAgICAgY2FsY3VsYXRlRmxhdFNlY3Rpb25NZWFzdXJlbWVudHMoaSk7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIFNlY3Rpb24gQ29sb3IgVmFsdWVcbiAgICBjb25zdCBjdXJySGV4ID0gZ2V0U2VjdGlvbkNvbG9yKHNlY3Rpb25JZCk7XG5cbiAgICAvLyBBIGRlc2F0dXJhdGVkIHZlcnNpb24gb2YgdGhlIGN1cnJlbnQgY29sb3IgZm9yIHRoZSBzZWN0aW9uIGxhYmVsXG4gICAgY29uc3QgY3VyckxhYmVsSGV4ID0gZDMuaW50ZXJwb2xhdGVMYWIoY3VyckhleCwgJyM0ZDRkNGQnKSgwLjM1KTtcblxuICAgIC8vIElEIFN0cmluZyBmb3IgbWVhc3VyZW1lbnRcbiAgICBjb25zdCBjdXJySURTdHJpbmcgPSBgc2VjdGlvbiR7aX1gO1xuXG4gICAgLy8gRFJBVyBQT0xZR09OXG4gICAgLy8gRHJhd3MgdGhlIGNhcnBldCBiZW5lYXRoIHRoZSBwYWdlLlxuICAgIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldERYLFxuICAgICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXREWSxcbiAgICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0QVgsXG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldEFZLFxuICAgICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRCWCxcbiAgICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0QlksXG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldENYLFxuICAgICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRDWSxcbiAgICAgIF07XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5zaGVldCAvLyBhdHRhY2ggYSBwb2x5Z29uXG4gICAgICAgIC5hdHRyKCdwb2ludHMnLCBwb2ludHMuam9pbignLCcpKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBjdXJySGV4KTsgLy8geCx5IHBvaW50c1xuXG4gICAgICAvLyBTdG9yaW5nIGNvb3JkaW5hdGVzIG9mIG1hdCBjb3JuZXJzIGluIFNlY3Rpb25PYmpzIGFycmF5IGZvciBsYXRlciB1c2UuXG4gICAgICAvLyBBXG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyRFggPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXREWDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJEWSA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldERZO1xuICAgICAgLy8gQlxuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0uY3VyckFYID0gc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0QVg7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQVkgPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRBWTtcbiAgICAgIC8vIENcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJCWCA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldEJYO1xuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0uY3VyckJZID0gc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0Qlk7XG4gICAgICAvLyBEXG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQ1ggPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRDWDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJDWSA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldENZO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUUkFOU0lUSU9OIFRPIElTT01FVFJJQyBNQVRcblxuICAgICAgLy8gMSAtIEdyYWIgbG9jYWwgdmFycyBmcm9tIHN0b3JhZ2UgYXJyYXkuXG4gICAgICBsZXQgY3VyckFYID0gc3RhdGUuc2VjdGlvbk9ianNbaV0uY3VyckFYO1xuICAgICAgbGV0IGN1cnJBWSA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJBWTtcbiAgICAgIGxldCBjdXJyQlggPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQlg7XG4gICAgICBsZXQgY3VyckJZID0gc3RhdGUuc2VjdGlvbk9ianNbaV0uY3VyckJZO1xuICAgICAgbGV0IGN1cnJDWCA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJDWDtcbiAgICAgIGxldCBjdXJyQ1kgPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS5jdXJyQ1k7XG4gICAgICBsZXQgY3VyckRYID0gc3RhdGUuc2VjdGlvbk9ianNbaV0uY3VyckRYO1xuICAgICAgbGV0IGN1cnJEWSA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJEWTtcblxuICAgICAgY29uc3QgdGFyZ2V0QVggPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRBWDtcbiAgICAgIGNvbnN0IHRhcmdldEFZID0gc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0QVk7XG4gICAgICBjb25zdCB0YXJnZXRCWCA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldEJYO1xuICAgICAgY29uc3QgdGFyZ2V0QlkgPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRCWTtcbiAgICAgIGNvbnN0IHRhcmdldENYID0gc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0Q1g7XG4gICAgICBjb25zdCB0YXJnZXRDWSA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldENZO1xuICAgICAgY29uc3QgdGFyZ2V0RFggPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXREWDtcbiAgICAgIGNvbnN0IHRhcmdldERZID0gc3RhdGUuc2VjdGlvbk9ianNbaV0udGFyZ2V0RFk7XG5cbiAgICAgIC8vIDIgLSBSdW4gVmFsdWVzIHRocnUgVHdlZW5zIGZvciBBbmltYXRpb25cbiAgICAgIC8vIEFcbiAgICAgIGN1cnJEWCArPSAodGFyZ2V0RFggLSBjdXJyRFgpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgY3VyckRZICs9ICh0YXJnZXREWSAtIGN1cnJEWSkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gICAgICAvLyBCXG4gICAgICBjdXJyQVggKz0gKHRhcmdldEFYIC0gY3VyckFYKSAqIHN0YXRlLnZpZXdUcmFuc2l0aW9uRWFzZTtcbiAgICAgIGN1cnJBWSArPSAodGFyZ2V0QVkgLSBjdXJyQVkpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgLy8gQ1xuICAgICAgY3VyckJYICs9ICh0YXJnZXRCWCAtIGN1cnJCWCkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG4gICAgICBjdXJyQlkgKz0gKHRhcmdldEJZIC0gY3VyckJZKSAqIHN0YXRlLnZpZXdUcmFuc2l0aW9uRWFzZTtcbiAgICAgIC8vIERcbiAgICAgIGN1cnJDWCArPSAodGFyZ2V0Q1ggLSBjdXJyQ1gpICogc3RhdGUudmlld1RyYW5zaXRpb25FYXNlO1xuICAgICAgY3VyckNZICs9ICh0YXJnZXRDWSAtIGN1cnJDWSkgKiBzdGF0ZS52aWV3VHJhbnNpdGlvbkVhc2U7XG5cbiAgICAgIC8vIDMgLSBSZWxvYWQgdmFsdWVzIGJhY2sgaW50byBzdG9yYWdlIGFycmF5IGZvciBsYXRlci5cbiAgICAgIC8vIEFcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJEWCA9IGN1cnJEWDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJEWSA9IGN1cnJEWTtcbiAgICAgIC8vIEJcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJBWCA9IGN1cnJBWDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJBWSA9IGN1cnJBWTtcbiAgICAgIC8vIENcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJCWCA9IGN1cnJCWDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJCWSA9IGN1cnJCWTtcbiAgICAgIC8vIERcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJDWCA9IGN1cnJDWDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmN1cnJDWSA9IGN1cnJDWTtcblxuICAgICAgLy8gNCAtIFVwZGF0ZSBDU1MgYW5kIHJlcG9zaXRpb24gbWF0XG4gICAgICBjb25zdCBwb2ludHMgPSBbXG4gICAgICAgIGN1cnJBWCxcbiAgICAgICAgY3VyckFZLFxuICAgICAgICBjdXJyQlgsXG4gICAgICAgIGN1cnJCWSxcbiAgICAgICAgY3VyckNYLFxuICAgICAgICBjdXJyQ1ksXG4gICAgICAgIGN1cnJEWCxcbiAgICAgICAgY3VyckRZLFxuICAgICAgXTtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnNoZWV0IC8vIGF0dGFjaCBhIHBvbHlnb25cbiAgICAgICAgLmF0dHIoJ3BvaW50cycsIHBvaW50cy5qb2luKCcsJykpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGN1cnJIZXgpOyAvLyB4LHkgcG9pbnRzXG4gICAgfVxuXG4gICAgLy8gRFJBVyBMQUJFTFxuICAgIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICAvLyBOZXh0IHdlIHdpbGwgYWN0dWFsbHkgbG9vcCB0aHJvdWdoIGVhY2ggcGFnZSBuZXN0ZWQgd2l0aGluIGVhY2ggc2VjdGlvbiBhcnJheS5cbiAgICAgIGxldCBjdXJySW5kO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzdGF0ZS5zZWN0aW9uc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAvLyBDdXJyIEluZGV4IGlzIHRoZSBpbmRleCB2YWx1ZSBvZiBlYWNoIHBhZ2UsIG5lc3RlZCB3aXRoaW4gZWFjaCBzZWN0aW9uLlxuICAgICAgICBjdXJySW5kID0gc3RhdGUuc2VjdGlvbnNbaV1bal07XG4gICAgICB9XG5cbiAgICAgIC8vIFNFQ1RJT04gTEFCRUwgUExBQ0VNRU5UIEFORCBEUkFXSU5HIC0tLS0tXG5cbiAgICAgIC8vIENvbnRhdGluYXRlZCBDU1MgVHJhbnNmb3JtIGZvciBsYXRlciB1c2UuXG4gICAgICAvLyBMYWJlbCBwb3NpdGlvbmluZyBhbmQgcGxhY2VtZW50LlxuICAgICAgY29uc3QgbWF4V2lkdGggPVxuICAgICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXRDWSAtIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRhcmdldERZO1xuICAgICAgY29uc3QgdHJhbnNTdHJpbmcgPSAncm90YXRlKDkwZGVnKSc7XG5cbiAgICAgIC8vIERSQVcgTEFCRUxcbiAgICAgIGNvbnN0IHNlY3Rpb25MYWJlbCA9IHN0YXRlLnJvd3NbY3VyckluZF0uU2VjdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgICAgY29uc3QgdHJ1bmNhdGVkTGFiZWwgPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50cnVuY2F0ZWRMYWJlbDtcbiAgICAgIHN2Z0NvbnRhaW5lclNlbGVjdGlvbi5hcHBlbmQoJ2RpdicpO1xuXG4gICAgICBpZiAoIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgICAgICBzdGF0ZS50ZXN0U2VjdGlvbkxhYmVsXG4gICAgICAgICAgLnRleHQoc2VjdGlvbkxhYmVsKVxuICAgICAgICAgIC5jbGFzc2VkKCdzZWN0aW9uLWxhYmVsJywgdHJ1ZSlcbiAgICAgICAgICAuc3R5bGUoJ2Rpc3BsYXknLCAnZmxleCcpXG4gICAgICAgICAgLnN0eWxlKCdjb2xvcicsIGN1cnJMYWJlbEhleClcbiAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHN0YXRlLnBhZ2VMYWJlbFNpemUpXG4gICAgICAgICAgLnN0eWxlKCd0ZXh0LWFsaWduJywgJ2NlbnRlcicpO1xuXG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRleHRcbiAgICAgICAgICAuY2xhc3NlZCgnc2VjdGlvbi1sYWJlbCcsIHRydWUpXG4gICAgICAgICAgLnN0eWxlKCdkaXNwbGF5JywgJ2Jsb2NrJylcbiAgICAgICAgICAuc3R5bGUoJ2NvbG9yJywgY3VyckxhYmVsSGV4KVxuICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgc3RhdGUucGFnZUxhYmVsU2l6ZSlcbiAgICAgICAgICAuc3R5bGUoJ29wYWNpdHknLCBzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MgPyAwIDogMSlcbiAgICAgICAgICAuc3R5bGUoJ3RleHQtYWxpZ24nLCAnY2VudGVyJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS50YXJnZXRab29tTGV2ZWwgPD0gMC4zKSB7XG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRleHQuc3R5bGUoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50ZXh0LnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2luY2UgdGhlIENTUyBwcm9wZXJ0aWVzIG9uIHRoZSBhY3R1YWwgc2VjdGlvbiBsYWJlbCBib3hlcyBpbiB0aGUgbWFwIGNoYW5nZSB3aGVuIHN3aXRjaGluZyBmcm9tIGlzb21lbnRyaWMgdG8gZmxhdCxcbiAgICAgIC8vIFdlIGhhdmUgdG8gbG9hZCB0aGUgbGFiZWxzIGludG8gYSB0ZXN0IHRleHQgZmllbGQgdGhhdCdzIGhpZGRlbiBmcm9tIHZpZXcuIFdlIGNhbiBkZXRlcm1pbmUgb3VyIGxhYmVsIGRpbWVuc2lvbnMgYmFzZWQgb24gdGhhdC5cbiAgICAgIGxldCBsYWJlbFdpZHRoID0gc3RhdGUudGVzdFNlY3Rpb25MYWJlbC5ub2RlKCkuY2xpZW50V2lkdGg7XG4gICAgICBsZXQgbGFiZWxIZWlnaHQgPSBzdGF0ZS50ZXN0U2VjdGlvbkxhYmVsLm5vZGUoKS5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGlmIChsYWJlbFdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgICAgLy8gRmlyc3QgLSBTZXQgdGhlIEFjdHVhbCBXaWR0aCBvZiB0aGUgTGFiZWwgPSB0byB0aGUgSGVpZ2h0IG9mIHRoZSBTZWN0aW9uIENhcnBldCAoTWF4V2lkdGgpXG4gICAgICAgIGxhYmVsV2lkdGggPSBtYXhXaWR0aDtcblxuICAgICAgICAvLyBJbnNlcnQgVHJ1bmNhdGVkIExhYmVsIGludG8gdGhlIHRleHQgZmllbGQuXG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRleHQudGV4dCh0cnVuY2F0ZWRMYWJlbCk7XG5cbiAgICAgICAgLy8gTmV4dCwgU2V0IHRoZSBXaXRoIG9mIHRoZSBTZWN0aW9uIExhYmVsIEJveCA9IHRvIHRoZSBNYXggV2lkdGggb2YgdGhlIFNlY3Rpb25cbiAgICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGV4dC5zdHlsZSgnd2lkdGgnLCBtYXhXaWR0aCk7XG5cbiAgICAgICAgLy8gU2F2ZSBUcnVuY2F0ZSBCb29sZWFuIHNvIHRoYXQgaXQgY2FuIGJlIHJlZmVyZW5jZWQgZm9yIGhvdmVyIHN0YXRlIGFuZCBjaGFuZ2luZyBiYWNrIHRvIElzb21ldHJpYyBNYXAgdmlld1xuICAgICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50cnVuY2F0ZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJbnNlcnQgRnVsbCBsYWJlbCB0ZXh0IGludG8gU2VjdGlvbiBMYWJlbCBCb3hcbiAgICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGV4dC50ZXh0KHNlY3Rpb25MYWJlbCk7XG5cbiAgICAgICAgLy8gU2V0cyBsYWJlbFdpZHRoIHZhbHVlID0gdG8gd2lkdGggb2YgdGV4dCBpbiBob2xkaW5nIHRleHQgYm94LlxuICAgICAgICBsYWJlbFdpZHRoID0gc3RhdGUudGVzdFNlY3Rpb25MYWJlbC5ub2RlKCkuY2xpZW50V2lkdGggKyAxMDtcblxuICAgICAgICAvLyBTYXZlIFRydW5jYXRlIEJvb2xlYW4gc28gdGhhdCBpdCBjYW4gYmUgcmVmZXJlbmNlZCBmb3IgaG92ZXIgc3RhdGUgYW5kIGNoYW5naW5nIGJhY2sgdG8gSXNvbWV0cmljIE1hcCB2aWV3XG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRydW5jYXRlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIEdyYWIgdGhlIEhlaWdodCBvZiB0aGUgdGV4dCBib3ggZm9yIHBvc2l0aW9uaW5nLlxuICAgICAgbGFiZWxIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjdXJySURTdHJpbmcpLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IGN1cnJMYWJlbFggPVxuICAgICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXREWCAtXG4gICAgICAgIGxhYmVsSGVpZ2h0IC8gMiAtXG4gICAgICAgIGxhYmVsV2lkdGggLyAyIC1cbiAgICAgICAgc3RhdGUuY3VyclhQYWRkaW5nIC8gNTtcbiAgICAgIGNvbnN0IGN1cnJMYWJlbFkgPVxuICAgICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXREWSArIG1heFdpZHRoIC8gMiAtIGxhYmVsSGVpZ2h0IC8gMjtcblxuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0ueCA9IGN1cnJMYWJlbFg7XG4gICAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS55ID0gY3VyckxhYmVsWTtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLndpZHRoID0gbGFiZWxXaWR0aDtcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLmhlaWdodCA9IGxhYmVsSGVpZ2h0O1xuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0uc2VjdGlvblggPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50YXJnZXREWDtcblxuICAgICAgLy8gVVBEQVRFIFNFQ1RJT04gTEFCRUwgU1RZTEVcbiAgICAgIGlmICghc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRleHRcbiAgICAgICAgICAuc3R5bGUoJ2xlZnQnLCBjdXJyTGFiZWxYKVxuICAgICAgICAgIC5zdHlsZSgndG9wJywgY3VyckxhYmVsWSlcbiAgICAgICAgICAuc3R5bGUoJ3dpZHRoJywgbGFiZWxXaWR0aClcbiAgICAgICAgICAuc3R5bGUoJ3RyYW5zZm9ybScsIHRyYW5zU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbaV0udGV4dC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNoU2VjdGlvbkV2ZW50cygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5zZWN0aW9uT2Jqcy5sZW5ndGg7IGkrKykge1xuICAgIHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRleHQub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGN1cnJUeHQgPSB0aGlzLmlubmVySFRNTDtcbiAgICAgIHNlY3Rpb25Nb3VzZU92ZXIoY3VyclR4dCk7XG4gICAgfSk7XG5cbiAgICBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50ZXh0Lm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGN1cnJUeHQgPSB0aGlzLmlubmVySFRNTDtcbiAgICAgIHNlY3Rpb25Nb3VzZU91dChjdXJyVHh0KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWN0aW9uTW91c2VPdmVyKGN1cnJUeHQpIHtcbiAgZm9yIChsZXQgeCA9IDA7IHggPCBzdGF0ZS5zZWN0aW9uT2Jqcy5sZW5ndGg7IHgrKykge1xuICAgIGlmIChcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW3hdLnRydW5jYXRlZExhYmVsID09IGN1cnJUeHQgJiZcbiAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW3hdLnRydW5jYXRlXG4gICAgKSB7XG4gICAgICBjb25zdCBjdXJyTGFiZWxPYmogPSBzdGF0ZS5zZWN0aW9uT2Jqc1t4XS50ZXh0O1xuICAgICAgY29uc3QgY3VyckxhYmVsVHh0ID0gc3RhdGUuc2VjdGlvbk9ianNbeF0ubGFiZWw7XG5cbiAgICAgIC8vIFRyYW5zZmVyIGZ1bGwgbGFiZWwgdG8gaG9sZGluZyBsYWJlbCB0ZXh0Ym94IGFuZCBncmFiIGl0cyBkaW1lbnNpb25zLlxuICAgICAgc3RhdGUudGVzdFNlY3Rpb25MYWJlbC50ZXh0KGN1cnJMYWJlbFR4dCk7XG4gICAgICBjb25zdCBjdXJyV2lkdGggPSBzdGF0ZS50ZXN0U2VjdGlvbkxhYmVsLm5vZGUoKS5jbGllbnRXaWR0aCArIDEwO1xuICAgICAgY29uc3QgY3VyckhlaWdodCA9IHN0YXRlLnRlc3RTZWN0aW9uTGFiZWwubm9kZSgpLmNsaWVudEhlaWdodDtcblxuICAgICAgLy8gU2luY2UgU2VjdGlvbiBMYWJlbHMgRGlzcGxheSBhcyBhIGJsb2NrLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgd2lkdGguXG4gICAgICBjdXJyTGFiZWxPYmouc3R5bGUoJ3dpZHRoJywgY3VycldpZHRoKTtcbiAgICAgIGN1cnJMYWJlbE9iai50ZXh0KGN1cnJMYWJlbFR4dCk7XG5cbiAgICAgIC8vIERldGVybWluZSBhbmQgc2V0IHRlbXBvcmFyeSBob3ZlciBYL1kgTG9jYXRpb24gZm9yIGZ1bGwgbW91c2UgbGFiZWwuXG4gICAgICBjb25zdCB0ZW1wTGFiZWxYID1cbiAgICAgICAgc3RhdGUuc2VjdGlvbk9ianNbeF0ueCArXG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW3hdLndpZHRoIC8gMiArXG4gICAgICAgIHN0YXRlLnNlY3Rpb25PYmpzW3hdLmhlaWdodCAvIDIgK1xuICAgICAgICBzdGF0ZS5jdXJyWFBhZGRpbmcgLyA1O1xuICAgICAgY29uc3QgY3VyckxhYmVsWCA9XG4gICAgICAgIHRlbXBMYWJlbFggLSBjdXJyV2lkdGggLyAyIC0gY3VyckhlaWdodCAvIDIgLSBzdGF0ZS5jdXJyWFBhZGRpbmcgLyA1O1xuICAgICAgY29uc3QgY3VyckxhYmVsWSA9IHN0YXRlLnNlY3Rpb25PYmpzW3hdLnk7XG5cbiAgICAgIC8vIEFwcGx5IG5ldyBzdHlsaW5nXG4gICAgICBjdXJyTGFiZWxPYmouc3R5bGUoJ2xlZnQnLCBjdXJyTGFiZWxYKS5zdHlsZSgnY3Vyc29yJywgJ25vbmUnKTtcblxuICAgICAgY2xlYXJPdmVybGFwcGluZ1NlY3Rpb25MYWJlbHMoXG4gICAgICAgIGN1cnJMYWJlbFgsXG4gICAgICAgIGN1cnJMYWJlbFksXG4gICAgICAgIGN1cnJXaWR0aCxcbiAgICAgICAgY3VyckxhYmVsT2JqLFxuICAgICAgICB4XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZWN0aW9uTW91c2VPdXQoY3VyclR4dCkge1xuICBmb3IgKGxldCB4ID0gMDsgeCA8IHN0YXRlLnNlY3Rpb25PYmpzLmxlbmd0aDsgeCsrKSB7XG4gICAgaWYgKFxuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbeF0ubGFiZWwgPT0gY3VyclR4dCAmJlxuICAgICAgc3RhdGUuc2VjdGlvbk9ianNbeF0udHJ1bmNhdGVcbiAgICApIHtcbiAgICAgIGNvbnN0IGN1cnJMYWJlbE9iaiA9IHN0YXRlLnNlY3Rpb25PYmpzW3hdLnRleHQ7XG4gICAgICBjb25zdCBjdXJyTGFiZWxUeHQgPSBzdGF0ZS5zZWN0aW9uT2Jqc1t4XS50cnVuY2F0ZWRMYWJlbDtcblxuICAgICAgY3VyckxhYmVsT2JqLnRleHQoY3VyckxhYmVsVHh0KTtcblxuICAgICAgY29uc3QgY3VyckxhYmVsWCA9IHN0YXRlLnNlY3Rpb25PYmpzW3hdLng7XG5cbiAgICAgIGNvbnN0IGN1cnJXaWR0aCA9IHN0YXRlLnNlY3Rpb25PYmpzW3hdLndpZHRoO1xuXG4gICAgICAvLyBBcHBseSBuZXcgc3R5bGluZ1xuICAgICAgY3VyckxhYmVsT2JqLnN0eWxlKCdsZWZ0JywgY3VyckxhYmVsWCkuc3R5bGUoJ3dpZHRoJywgY3VycldpZHRoKTtcbiAgICB9XG4gICAgc2hvd0FsbFNlY3Rpb25MYWJlbHMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhck92ZXJsYXBwaW5nU2VjdGlvbkxhYmVscyhcbiAgbGFiZWxYLFxuICBsYWJlbFksXG4gIGxhYmVsV2lkdGgsXG4gIGxhYmVsT2JqLFxuICBpbmRcbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnNlY3Rpb25PYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGFiZWxXaWR0aCA9IHN0YXRlLnRlc3RTZWN0aW9uTGFiZWwubm9kZSgpLmNsaWVudFdpZHRoICsgMTA7XG5cbiAgICBjb25zdCBjdXJyTGFiZWxZID0gc3RhdGUuc2VjdGlvbk9ianNbaV0ueTtcbiAgICBjb25zdCBjdXJyTGFiZWxXaWR0aCA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLndpZHRoO1xuICAgIGNvbnN0IGN1cnJMYWJlbCA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLnRleHQ7XG4gICAgY29uc3Qgc2VjdGlvblggPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpbmRdLnNlY3Rpb25YO1xuICAgIGNvbnN0IGN1cnJTZWN0aW9uWCA9IHN0YXRlLnNlY3Rpb25PYmpzW2ldLnNlY3Rpb25YO1xuXG4gICAgLy8gRmlyc3QsIE1ha2UgU3VyZSBXZSdyZSBub3QgbG9va2luZyBhdCB0aGUgc2FtZSBub2RlLiBOZXh0LCBNYWtlIHN1cmUgdGhlIFggdmFsdWVzIGFyZSB3aXRoaW4gcmFuZ2UuXG4gICAgaWYgKFxuICAgICAgY3VyckxhYmVsICE9IGxhYmVsT2JqICYmXG4gICAgICBzZWN0aW9uWCA+IGN1cnJTZWN0aW9uWCAtIDE4ICYmXG4gICAgICBzZWN0aW9uWCA8IGN1cnJTZWN0aW9uWCArIDE4XG4gICAgKSB7XG4gICAgICAvLyBDaGVjayBmb3IgVXBwZXIgQm91bmRcbiAgICAgIGlmIChcbiAgICAgICAgbGFiZWxZIC0gbGFiZWxXaWR0aCAvIDIgLSAxOCA8IGN1cnJMYWJlbFkgKyBjdXJyTGFiZWxXaWR0aCAvIDIgKyAxOCAmJlxuICAgICAgICBpbmQgPiBpXG4gICAgICApIHtcbiAgICAgICAgY3VyckxhYmVsLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBMb3dlciBCb3VuZFxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgbGFiZWxZICsgbGFiZWxXaWR0aCAvIDIgKyAxOCA+IGN1cnJMYWJlbFkgLSBjdXJyTGFiZWxXaWR0aCAvIDIgLSAxOCAmJlxuICAgICAgICBpbmQgPCBpXG4gICAgICApIHtcbiAgICAgICAgY3VyckxhYmVsLnN0eWxlKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuXG4gICAgICAgIC8vIElmIG5vIG92ZXJsYXAsIHNob3cgY3VycmVudCBsYWJlbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VyckxhYmVsLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FsbFNlY3Rpb25MYWJlbHMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuc2VjdGlvbk9ianMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjdXJyTGFiZWwgPSBzdGF0ZS5zZWN0aW9uT2Jqc1tpXS50ZXh0O1xuICAgIGN1cnJMYWJlbC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHJ1bmNhdGVkTGFiZWwoc2VjdGlvbkxhYmVsKSB7XG4gIGxldCB0cnVuY2F0ZWRMYWJlbCA9ICcnO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgNDsgeCsrKSB7XG4gICAgY29uc3QgY3VyckNoYXIgPSBzZWN0aW9uTGFiZWwuY2hhckF0KHgpO1xuICAgIHRydW5jYXRlZExhYmVsICs9IGN1cnJDaGFyO1xuICB9XG5cbiAgdHJ1bmNhdGVkTGFiZWwgKz0gJy4uLic7XG5cbiAgcmV0dXJuIHRydW5jYXRlZExhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGVzdFNlY3Rpb25MYWJlbCgpIHtcbiAgc3RhdGUudGVzdFNlY3Rpb25MYWJlbCA9IHN2Z0NvbnRhaW5lclNlbGVjdGlvblxuICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgIC5hdHRyKCdpZCcsICd0ZXN0LXNlY3Rpb24tbGFiZWwnKVxuICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxuICAgIC5zdHlsZSgndG9wJywgMjAwKVxuICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICdoaWRkZW4nKVxuICAgIC50ZXh0KCdURVNUIExBQkVMIFRFWFQnKTtcbn1cbiIsImltcG9ydCB7IG92ZXJyaWRlRGVmYXVsdENvbG9ycyB9IGZyb20gJy4vY29sb3JzLmpzJztcbmltcG9ydCB7IHN2Z0NvbnRhaW5lciB9IGZyb20gJy4vZG9tLmpzJztcbmltcG9ydCB7IGFkZERyYWdFdmVudExpc3RlbmVycyB9IGZyb20gJy4vZHJhZy5qcyc7XG5pbXBvcnQgeyB1cGRhdGVDVUpTdGFydFZpc2liaWxpdHkgfSBmcm9tICcuL2VsZW1lbnRzL2N1ai5qcyc7XG5pbXBvcnQgeyB1cGRhdGVQcm9wb3J0aW9ucyB9IGZyb20gJy4vcHJvcG9ydGlvbnMuanMnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlLmpzJztcbmltcG9ydCB7IHN0YXJ0Vmlld1RyYW5zaXRpb25JZk5lY2Vzc2FyeSB9IGZyb20gJy4vdHJhbnNpdGlvbnMvdmlldy5qcyc7XG5pbXBvcnQgeyBjcmVhdGVWaXMgfSBmcm9tICcuL3Zpcy5qcyc7XG5pbXBvcnQgeyByZXNpemVEZXRhaWxzQ2FyZCB9IGZyb20gJy4vZWxlbWVudHMvcGFnZS9kZXRhaWxzQ2FyZC5qcyc7XG5pbXBvcnQgeyByZXNpemVDVUpDYXJkIH0gZnJvbSAnLi9lbGVtZW50cy9jdWouanMnO1xuXG5tYWluKCk7XG5cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIC8vIFRPRE86IEltcGxlbWVudCBhIHNlY29uZCBidW5kbGUgb3B0aW9uIGZvciBgaW1wb3J0YCBzeW50YXggY29uc3VtZXJzXG4gIHdpbmRvdy5pc29NYXAgPSB7XG4gICAgcmVuZGVyLFxuICAgIHN0YXRlLFxuICAgIGFkZERyYWdFdmVudExpc3RlbmVycyxcbiAgICB3cml0ZVN0YXRlLFxuICAgIHVwZGF0ZVByb3BvcnRpb25zLFxuICAgIHVwZGF0ZUNVSlN0YXJ0VmlzaWJpbGl0eSxcbiAgICBjcmVhdGVWaXMsXG4gICAgc3RhcnRWaWV3VHJhbnNpdGlvbklmTmVjZXNzYXJ5LFxuICAgIG92ZXJyaWRlRGVmYXVsdENvbG9ycyxcbiAgICByZXNpemVWaXMsXG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVZpcyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcihkYXRhKSB7XG4gIGluamVjdFN0YXRpY0h0bWwoKTtcbiAgdXBkYXRlUHJvcG9ydGlvbnMoKTtcbiAgdXBkYXRlQ1VKU3RhcnRWaXNpYmlsaXR5KCk7XG4gIHVwZGF0ZVByb3BvcnRpb25zKCk7XG4gIHVwZGF0ZUNVSlN0YXJ0VmlzaWJpbGl0eSgpO1xuICB3cml0ZVN0YXRlKHtcbiAgICBjdWpSb3dzOiBkYXRhLmN1alJvd3MsXG4gICAgY3VqU2hlZXROYW1lczogZGF0YS5jdWpTaGVldE5hbWVzLFxuICAgIHJvd3M6IGRhdGEucm93cyxcbiAgfSk7XG5cbiAgaWYgKGRhdGEuc2VjdGlvbkNvbG9ycykge1xuICAgIG92ZXJyaWRlRGVmYXVsdENvbG9ycyhkYXRhLnNlY3Rpb25Db2xvcnMpO1xuICB9XG4gIGNyZWF0ZVZpcygpO1xuICBzdGFydFZpZXdUcmFuc2l0aW9uSWZOZWNlc3NhcnkoKTtcbiAgYWRkRHJhZ0V2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZVZpcygpIHtcbiAgc3RhdGUud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgc3RhdGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICByZXNpemVEZXRhaWxzQ2FyZCgpO1xuICByZXNpemVDVUpDYXJkKCk7XG59XG5cbmZ1bmN0aW9uIGluamVjdFN0YXRpY0h0bWwoKSB7XG4gIHN2Z0NvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBpZD1cImN1akNhcmRcIj5cbiAgICAgIDxkaXYgaWQ9XCJjdWpIZWFkZXJcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY2xvc2VYXCI+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgICAgICAgeG1sOnNwYWNlPVwicHJlc2VydmVcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgICAgICAgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICAgICAgICB5PVwiMHB4XCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTksNi40TDE3LjYsNUwxMiwxMC42TDYuNCw1TDUsNi40bDUuNiw1LjZMNSwxNy42TDYuNCwxOWw1LjYtNS42bDUuNiw1LjZsMS40LTEuNEwxMy40LDEyTDE5LDYuNHpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzQyODVGNFwiIC8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCwwaDI0djI0SDBWMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMiBpZD1cImN1alRpdGxlXCI+Q1VKIFN0ZXAgSGVhZGxpbmU8L2gyPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgICBpZD1cInVzZXJzSWNvblwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaS9nb29nbGVtYXRlcmlhbGljb25zL21hbmFnZV9hY2NvdW50cy92NS9ncmV5NjAwLTQ4ZHAvMngvZ21fbWFuYWdlX2FjY291bnRzX2dyZXk2MDBfNDhkcC5wbmdcIiAvPlxuICAgICAgICA8aDMgaWQ9XCJjdWpVc2VyXCI+VXNlciB0ZXh0IGdvZXMgaGVyZTwvaDM+XG4gICAgICAgIDxkaXYgaWQ9XCJwcm9ncmVzc0NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJwcm9ncmVzc1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGlkPVwiY3VqU2Nyb2xsQ29udGFpbmVyXCI+XG4gICAgICAgIDxwIGlkPVwiY3VqRGVzY3JpcHRpb25cIj5Tb21lIHNhbXBsZSBkZXNjcmlwdGlvbiB0ZXh0IGdvZXMgaGVyZTwvcD5cbiAgICAgICAgPHAgaWQ9XCJnYWxCdG5cIj5cbiAgICAgICAgICA8YSBpZD1cImdhbGxlcnlMaW5rXCIgaHJlZj1cIlwiIHRhcmdldD1cImJsYW5rXCI+VmlldyBtb3JlIGluZm9ybWF0aW9uPC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cImN1ak5hdlwiIGNsYXNzPVwiaFJ1bGVcIj48L2Rpdj5cbiAgICAgIDxidXR0b24gaWQ9XCJwcmV2U3RlcFwiIGNsYXNzPVwic2Vjb25kYXJ5IHNlY29uZGFyeUZsb2F0XCI+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBpZD1cIm5leHRTdGVwXCIgY2xhc3M9XCJwcmltYXJ5RmxvYXRcIj5OZXh0PC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwibm9kZUNhcmRcIj5cbiAgICAgIDxkaXYgaWQ9XCJub2RlSGVhZGVyXCIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlXCI+XG4gICAgICAgICAgPGRpdiBpZD1cIm5vZGVDbG9zZVhcIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICAgICAgICBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHg9XCIwcHhcIlxuICAgICAgICAgICAgICAgIHk9XCIwcHhcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xOSw2LjRMMTcuNiw1TDEyLDEwLjZMNi40LDVMNSw2LjRsNS42LDUuNkw1LDE3LjZMNi40LDE5bDUuNi01LjZsNS42LDUuNmwxLjQtMS40TDEzLjQsMTJMMTksNi40elwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNDI4NUY0XCIgLz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLDBoMjR2MjRIMFYwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGlkPVwibm9kZVRpdGxlXCI+Tm9kZSBOYW1lPC9oMj5cbiAgICAgICAgPGgzIGlkPVwibm9kZVNlY3Rpb25cIj5Ob2RlIFNlY3Rpb248L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwibm9kZVNjcm9sbENvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGlkPVwiZGVzY3JpcHRpb25TZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhSdWxlXCI+PC9kaXY+XG5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pL2dvb2dsZW1hdGVyaWFsaWNvbnMvYm9vay92Ny9ncmV5NjAwLTI0ZHAvMngvZ21fYm9va19ncmV5NjAwXzI0ZHAucG5nXCIgLz5cblxuICAgICAgICAgIDxkaXYgaWQ9XCJkZXNjcmlwdGlvbkNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoND5EZXNjcmlwdGlvbjwvaDQ+XG4gICAgICAgICAgICA8cCBpZD1cIm5vZGVEZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uIGdvZXMgaGVyZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cIm5vdGVTZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhSdWxlXCI+PC9kaXY+XG5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pL2dvb2dsZW1hdGVyaWFsaWNvbnMvbm90ZV9hbHQvdjQvZ3JleTYwMC0yNGRwLzJ4L2dtX25vdGVfYWx0X2dyZXk2MDBfMjRkcC5wbmdcIiAvPlxuICAgICAgICAgIDxkaXYgaWQ9XCJub3RlQ29udGVudFwiPlxuICAgICAgICAgICAgPGg0Pk5vdGVzPC9oND5cbiAgICAgICAgICAgIDxwIGlkPVwibm9kZU5vdGVzXCI+Tm9kZSBub3RlcyBnbyBoZXJlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGlkPVwiam91cm5leUxpc3RTZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhSdWxlXCI+PC9kaXY+XG5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pL2dvb2dsZW1hdGVyaWFsaWNvbnMvZXhwbG9yZS92NS9ncmV5NjAwLTI0ZHAvMngvZ21fZXhwbG9yZV9ncmV5NjAwXzI0ZHAucG5nXCIgLz5cblxuICAgICAgICAgIDxkaXYgaWQ9XCJqb3VybmV5TGlzdENvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoND5Bc3NvY2lhdGVkIEpvdXJuZXlzPC9oND5cbiAgICAgICAgICAgIDx1bCBpZD1cImpvdXJuZXlMaXN0XCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNhcmRMaXN0XCI+Sm91cm5leSB0aXRsZSBnb2VzIGhlcmU8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBpZD1cIm1vcmVJbmZvQnRuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhSdWxlXCI+PC9kaXY+XG4gICAgICAgICAgPGEgaWQ9XCJub2RlSW5mb0xpbmtcIiBocmVmPVwiXCIgdGFyZ2V0PVwiYmxhbmtcIj5WaWV3IG1vcmUgaW5mb3JtYXRpb248L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG59XG5cbmZ1bmN0aW9uIHdyaXRlU3RhdGUoc3Vic3RhdGVUb1dyaXRlKSB7XG4gIE9iamVjdC5rZXlzKHN1YnN0YXRlVG9Xcml0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgc3RhdGVba2V5XSA9IHN1YnN0YXRlVG9Xcml0ZVtrZXldO1xuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzVG9SYWRpYW5zKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODA7XG59XG4iLCJpbXBvcnQgeyBnZXRNYXhEZXB0aCB9IGZyb20gJy4vZGltZW5zaW9ucyc7XG5pbXBvcnQgeyBkZWdyZWVzVG9SYWRpYW5zIH0gZnJvbSAnLi9tYXRoJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbi8vIFRPRE86IEV4dHJhY3QgYWxsIG1hZ2ljIG51bWJlcnNcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVGbGF0UG9zaXRpb25zKCkge1xuICBjb25zdCBleHRyYVBhZGRpbmcgPSAxMjQ7XG4gIGxldCBwcmV2aW91c0xldmVsID0gMTtcbiAgbGV0IHkgPSAxNjA7XG4gIHJldHVybiBzdGF0ZS5yb3dzLm1hcCgocm93KSA9PiB7XG4gICAgY29uc3QgeCA9IHN0YXRlLnZlcnRQYWRkaW5nICogKHJvdy5MZXZlbCAtIDEpICsgZXh0cmFQYWRkaW5nO1xuICAgIGlmIChyb3cuTGV2ZWwgPD0gcHJldmlvdXNMZXZlbCkge1xuICAgICAgeSArPSBzdGF0ZS5wYWRkaW5nIC8gMjtcbiAgICB9XG4gICAgcHJldmlvdXNMZXZlbCA9IHJvdy5MZXZlbDtcbiAgICByZXR1cm4ge1xuICAgICAgYm90dG9tQ2VudGVyWDogMCxcbiAgICAgIGJvdHRvbUNlbnRlclk6IDAsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICB9O1xuICB9KTtcbn1cblxuLy8gVE9ETzogRXh0cmFjdCBhbGwgbWFnaWMgbnVtYmVyc1xuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVBvc2l0aW9ucygpIHtcbiAgbGV0IGZsYXRYID0gMTA7XG4gIGxldCBwcmV2aW91c0xldmVsID0gMTtcbiAgcmV0dXJuIHN0YXRlLnJvd3MubWFwKChyb3cpID0+IHtcbiAgICBjb25zdCBwYWRkaW5nID0gc3RhdGUuc2hvd0hlYWRlclxuICAgICAgPyBNYXRoLm1heCgxNTAsIHN0YXRlLnZlcnRQYWRkaW5nICogMS41KVxuICAgICAgOiAwO1xuICAgIGlmIChyb3cuTGV2ZWwgPD0gcHJldmlvdXNMZXZlbCkge1xuICAgICAgZmxhdFggKz0gc3RhdGUucGFkZGluZyAqIDEuNTtcbiAgICB9XG4gICAgY29uc3QgZmxhdFkgPSBzdGF0ZS5mbGF0dGVuTWFwXG4gICAgICA/IHBhZGRpbmcgKyBzdGF0ZS52ZXJ0UGFkZGluZyAqIHJvdy5MZXZlbFxuICAgICAgOiBwYWRkaW5nIC0gc3RhdGUudmVydFBhZGRpbmcgKiByb3cuTGV2ZWwgKyBnZXRNYXhEZXB0aCgpO1xuICAgIGNvbnN0IGFuZ2xlZFggPVxuICAgICAgZmxhdFggK1xuICAgICAgTWF0aC50YW4oZGVncmVlc1RvUmFkaWFucyhzdGF0ZS5zZWNvbmRhcnlBbmdsZURlZ3JlZXMpKSAqXG4gICAgICAgIChzdGF0ZS52ZXJ0UGFkZGluZyAqIHJvdy5MZXZlbCAtIHN0YXRlLnZlcnRQYWRkaW5nKTtcbiAgICBjb25zdCBhbmdsZWRZID1cbiAgICAgIGZsYXRZICsgZmxhdFggKiBNYXRoLnRhbihkZWdyZWVzVG9SYWRpYW5zKHN0YXRlLnByaW1hcnlBbmdsZURlZ3JlZXMpKTtcbiAgICBwcmV2aW91c0xldmVsID0gcm93LkxldmVsO1xuICAgIHJldHVybiB7XG4gICAgICBib3R0b21DZW50ZXJYOiAwLFxuICAgICAgYm90dG9tQ2VudGVyWTogMCxcbiAgICAgIHg6IGFuZ2xlZFgsXG4gICAgICB5OiBhbmdsZWRZLFxuICAgIH07XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlJztcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5QT1NJVElPTlMsIEVMRU1FTlQgT1JJR0lOUywgTUVBU1VSRU1FTlRTIEFORCBBU1NJR05NRU5UU1xuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbi8vIERldGVybWluZSB0aGUgcmVsYXRpdmUgcHJvcG9ydGlvbnMgYW5kIHNpemVzIGZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIHZpc3VhbGl6YWl0b24gYmFzZWQgb24gdGhlIHpvb20gTGV2ZWwuXG4vLyBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIGFuIG9wcG9ydHVuaXR5IHRvIHNrZXcgYW5kIGV4YWdnZXJhdGUgdGhlIHBhZGRpbmcvc3BhY2luZyBhdCBkaWZmZXJlbnQgem9vbSBsZXZlbHMuXG4vLyBXZSBzaG91bGQgcGxheSBhcm91bmQgd2l0aCB0aGlzIHdoZW4gY3JlYXRpbmcgdGhlIG1vc3Qgem9vbWVkIG91dCB2ZXJzaW9uIG9mIHRoZSB2aXN1YWxpemF0aW9uLlxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb3BvcnRpb25zKCkge1xuICAvLyB0aGUgem9vbUluYyBWYXIgaXMgZGlyZWN0bHkgY29udHJvbGxlZCBieSBpbnRlcmFjdGluZyB3aXRoIHRoZSBab29tIENvbnRyb2xzLiBJdCdzIGEgY291bnRlciB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSArLy0gYnV0dG9ucy5cbiAgLy8gSXQncyB0aGUgbXVsdGlwbGllciBmb3IgZWFjaCBlbGVtZW50LlxuICAvLyBNb3N0IGVsZW1lbnRzIGJlaW5nIHJlc2l6ZWQgYXJlIGJhc2VkIG9uIGEgcGVyY2VudGFnZSBvZiB0aGUgcGFnZVdpZHRoIHZhciAod2lkdGggb2YgcGFnZSBpY29uKS5cbiAgLy9cbiAgLy8gSWYgdXNlciBpcyB6b29taW5nIGluLCBhbGwgZWxlbWVudHMgbWVhc3VyZW1lbnRzIGFyZSB1cGRhdGVkLlxuICBpZiAoc3RhdGUuem9vbUxldmVsID49IDAuMikge1xuICAgIHN0YXRlLnBhZ2VIZWlnaHQgPSAxMjYgKiBzdGF0ZS56b29tTGV2ZWw7IC8vIFdpZHRoIG9mIEVhY2ggUEFnZSAtIFNjYWxpbmcgaXMgYmFzZWQgb24gdGhpcy5cbiAgICBzdGF0ZS5wYWdlV2lkdGggPSBzdGF0ZS5wYWdlSGVpZ2h0ICogMC44OyAvLyBIZWlnaHQgb2YgRWFjaCBQYWdlIC0gU2NhbGluZyBpcyBCYXNlZCBvbiBUaGlzXG4gICAgc3RhdGUucGFnZUxhYmVsV2lkdGggPSBzdGF0ZS5wYWdlV2lkdGggKiAxLjI7XG4gICAgc3RhdGUucGFkZGluZyA9IHN0YXRlLnBhZ2VIZWlnaHQgKiAxLjU7IC8vIEhvcml6b250YWwgUGFkZGluZ1xuICAgIHN0YXRlLnZlcnRQYWRkaW5nID0gc3RhdGUucGFnZUhlaWdodCAqIHN0YXRlLnZlcnRQYWRkaW5nTXVsdGlwbGllcjsgLy8gVmVydGljYWwgUGFkZGluZ1xuICAgIHN0YXRlLnNlY3Rpb25QYWRkaW5nID0gc3RhdGUucGFnZUhlaWdodCAqIDAuNjQ7IC8vIExFRlQvUklHSFQgUEFERElORyBPRiBTRUNUSU9OIFwiQ0FSUEVUU1wiXG4gICAgc3RhdGUudGV4dFBhZGRpbmcgPSBzdGF0ZS5wYWdlSGVpZ2h0ICogMC4wODsgLy8gUEFERElORyBCRWVUV0VFTiBURVhULCBQQUdFUyBBTkQgQkFHRSBJQ09OU1xuXG4gICAgLy8gT1BUSU9OQUwgVEVYVCBGSUVMRCBWQVJTXG4gICAgc3RhdGUuc2VjdGlvbkZvbnRTaXplID0gMC4yICogc3RhdGUucGFnZUhlaWdodDtcbiAgICBzdGF0ZS5leHRlcm5hbExpbmtzV2lkdGggPSAwLjY0ICogc3RhdGUucGFnZUhlaWdodDtcbiAgICBzdGF0ZS5ub3Rlc1dpZHRoID0gMzAwO1xuXG4gICAgc3RhdGUucGFnZUxhYmVsU2l6ZSA9IE1hdGguY2VpbCgwLjE2ICogc3RhdGUucGFnZUhlaWdodCk7XG4gICAgc3RhdGUubXVsdGlwYWdlTGFiZWxTaXplID0gTWF0aC5yb3VuZCgwLjA4ICogc3RhdGUucGFnZUhlaWdodCk7XG4gICAgc3RhdGUuc3RlcE5vTGFiZWxTaXplID0gTWF0aC5yb3VuZCgwLjk1ICogc3RhdGUucGFnZUhlaWdodCk7XG4gICAgc3RhdGUuY3VqTGFiZWxXaWR0aCA9IHN0YXRlLnBhZ2VIZWlnaHQgKiAyLjE7XG5cbiAgICBzdGF0ZS5wYWdlTGFiZWxTaXplID0gTWF0aC5jZWlsKDAuMTYgKiBzdGF0ZS5wYWdlSGVpZ2h0KTtcbiAgICBzdGF0ZS5wYWdlTGFiZWxXaWR0aCA9IHN0YXRlLnBhZ2VXaWR0aCAqIDEuMjtcbiAgICBzdGF0ZS5zZWN0aW9uTGFiZWxTaXplID0gTWF0aC5yb3VuZCgwLjIgKiBzdGF0ZS5wYWdlSGVpZ2h0KTtcblxuICAgIC8vIElmIHpvb21pbmcgYWxsIHRoZSB3YXkgb3V0LCBzb21lIHZhbHVlcyBubyBsb25nZXIgdXBkYXRlLiBUaGlzIGVuc3VyZXMgdGhhdCBsYWJlbHMgcmVtYWluIHJlYWRhYmxlIGFuZCBvdGhlciBlbGVtZW50cyBhcmUgZGlzY292ZXJhYmxlIGFuZCBzY2FubmFibGUuXG4gIH0gZWxzZSB7XG4gICAgc3RhdGUucGFnZUhlaWdodCA9IDEyNiAqIHN0YXRlLnpvb21MZXZlbDsgLy8gV2lkdGggb2YgRWFjaCBQQWdlIC0gU2NhbGluZyBpcyBiYXNlZCBvbiB0aGlzLlxuXG4gICAgLy8gVGhlIGNvbnN0YW50IGhlaWdodCB2YXIgcmVwcmVzZW50cyB0aGUgbWVhc3VyZW1lbnQgb2YgaXRlbXMgdGhhdCB3aWxsIG5vdCBiZSByZXNpemVkIGFzIHRoZSB2aXN1YWxpemF0aW9uIGNvbnRpbnVlcyB0byB6b29tIG91dC5cbiAgICAvLyBUaGlzIGVuc3VyZXMgcGFnZSBsYWJlbHMsIHNlY3Rpb24gbGFiZWxzIGFuZCBvdGhlciBjb250ZW50IHJlbWFpbnMgcmVhZGFibGUgYXQgdGhlIG91dGVyLW1vc3QgbGV2ZWxzIG9mIHpvb20uXG4gICAgY29uc3QgY29uc3RIZWlnaHQgPSAxMjYgKiAwLjM7XG5cbiAgICBzdGF0ZS5wYWdlV2lkdGggPSBzdGF0ZS5wYWdlSGVpZ2h0ICogMC44OyAvLyBIZWlnaHQgb2YgRWFjaCBQYWdlIC0gU2NhbGluZyBpcyBCYXNlZCBvbiBUaGlzXG4gICAgc3RhdGUucGFnZUxhYmVsV2lkdGggPSBzdGF0ZS5wYWdlSGVpZ2h0ICogMC44ICogMS4yOyAvLyBNQUlOVEFJTlMgQ09OU0lTVEVOVCBMQUJFTCBXSURUSCAvL0NoYW5nZSBCYWNrIHRvIENvbnN0XG4gICAgc3RhdGUucGFkZGluZyA9IHN0YXRlLnBhZ2VIZWlnaHQgKiAxLjU7IC8vIEhvcml6b250YWwgUGFkZGluZy8vQ2hhbmdlIEJhY2sgdG8gQ29uc3RcbiAgICBzdGF0ZS52ZXJ0UGFkZGluZyA9IHN0YXRlLnBhZ2VIZWlnaHQgKiBzdGF0ZS52ZXJ0UGFkZGluZ011bHRpcGxpZXI7IC8vIFZlcnRpY2FsIFBhZGRpbmdcbiAgICBzdGF0ZS5zZWN0aW9uUGFkZGluZyA9IHN0YXRlLnBhZ2VIZWlnaHQgKiAwLjY0OyAvLyBMRUZUL1JJR0hUIFBBRERJTkcgT0YgU0VDVElPTiBcIkNBUlBFVFNcIi8vQ2hhbmdlIEJhY2sgdG8gQ29uc3RcbiAgICBzdGF0ZS50ZXh0UGFkZGluZyA9IHN0YXRlLnBhZ2VIZWlnaHQgKiAwLjA4OyAvLyBQQURESU5HIEJFVFdFRU4gVEVYVCwgUEFHRVMgQU5EIEJBR0UgSUNPTlMvL0NoYW5nZSBCYWNrIHRvIENvbnN0XG5cbiAgICAvLyBPUFRJT05BTCBURVhUIEZJRUxEIFZBUlNcbiAgICBzdGF0ZS5zZWN0aW9uRm9udFNpemUgPSAwLjIgKiBzdGF0ZS5wYWdlSGVpZ2h0O1xuICAgIHN0YXRlLmV4dGVybmFsTGlua3NXaWR0aCA9IDAuNjQgKiBzdGF0ZS5wYWdlSGVpZ2h0O1xuICAgIHN0YXRlLm5vdGVzV2lkdGggPSAzMDA7XG5cbiAgICAvLyBGT05UIFNJWkVTXG4gICAgc3RhdGUucGFnZUxhYmVsU2l6ZSA9IE1hdGguY2VpbCgwLjE2ICogc3RhdGUucGFnZUhlaWdodCk7IC8vIENoYW5nZSBiYWNrIHRvIGNvbnN0SGVpZ2h0XG4gICAgLy8gc3RhdGUuc2VjdGlvbkxhYmVsU2l6ZSA9IE1hdGgucm91bmQoMC4yICogc3RhdGUucGFnZUhlaWdodCAqIDEuMylcbiAgICBzdGF0ZS5zZWN0aW9uTGFiZWxTaXplID0gTWF0aC5yb3VuZCgwLjIgKiBzdGF0ZS5wYWdlSGVpZ2h0ICogMS4zKTtcbiAgICBzdGF0ZS5tdWx0aXBhZ2VMYWJlbFNpemUgPSBNYXRoLnJvdW5kKDAuMDggKiBzdGF0ZS5wYWdlSGVpZ2h0KTsgLy8gQ2hhbmdlIGJhY2sgdG8gY29uc3RIZWlnaHRcbiAgICBzdGF0ZS5zdGVwTm9MYWJlbFNpemUgPSBNYXRoLnJvdW5kKDAuOTUgKiBjb25zdEhlaWdodCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBzdmdDb250YWluZXJTZWxlY3Rpb24gPSBkMy5zZWxlY3QoJyNpc29NYXAnKTtcbiIsImV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgLy8gQ09ORklHIFZBUlNcbiAgcGFkZGluZzogMjAwLCAvLyBIb3Jpem9udGFsIFBhZGRpbmdcbiAgdmVydFBhZGRpbmc6IDE1MCwgLy8gVmVydGljYWwgUGFkZGluZ1xuICB2ZXJ0UGFkZGluZ011bHRpcGxpZXI6IDEuNSxcbiAgcGFnZUhlaWdodDogMTI2LCAvLyBIZWlnaHQgb2YgRWFjaCBQYWdlIC0gU2NhbGluZyBpcyBCYXNlZCBvbiBUaGlzXG4gIHBhZ2VXaWR0aDogMTAxLCAvLyBXaWR0aCBvZiBFYWNoIFBBZ2UgLSBTY2FsaW5nIGlzIGJhc2VkIG9uIHRoaXMuXG4gIHNlY3Rpb25QYWRkaW5nOiA4MCwgLy8gTEVGVC9SSUdIVCBQQURESU5HIE9GIFNFQ1RJT04gXCJDQVJQRVRTXCJcbiAgc2VjdGlvbkZvbnRTaXplOiAyNCwgLy8gU0VDVElPTiBMQUJFTCBGT05UIFNJWkVcbiAgbm90ZXNXaWR0aDogMzAwLCAvLyBOT1RFUyBURVhURklFTEQgV0lEVEhcbiAgZXh0ZXJuYWxMaW5rc1dpZHRoOiA4MCwgLy8gRVhURVJOQUwgTElOS1MgVEVYVEZJRUxEIFdJRFRIXG4gIHRleHRQYWRkaW5nOiAxMCwgLy8gUEFERElORyBCRVRXRUVOIFRFWFQsIFBBR0VTIEFORCBCQUdFIElDT05TXG4gIHN0ZXBOb0xhYmVsU2l6ZTogMTIwLFxuICBzZWxlY3RlZFBhZ2VJbmRleDogLTEsIC8vIFNBVkVEIElOREVYIFNPIFRIQVQgV0UgQ0FOIFJFTUVNQkVSIFNFTEVDVEVEIFBBR0VTXG5cbiAgcHJpbWFyeUFuZ2xlRGVncmVlczogMjAsIC8vIDg1IC8vIERFR1JFU1MgT0YgUFJJTUFSWSBBTkdMRSBGT1IgSVNPIEdSSURcbiAgc2Vjb25kYXJ5QW5nbGVEZWdyZWVzOiA2MCwgLy8gODUgIC8vIERFR1JFRVMgT0YgU0VDT05EQVJZIEFOR0xFIEZPUiBJU08gR1JJRFxuXG4gIC8vIEFycmF5cyBvZiBEMyBTVkdzLCBPdGhlciBPQkpzIGFuZCBWYWx1ZXNcbiAgcGFnZXM6IFtdLCAvLyBQQUdFIE9CSkVDVCBBUlJBWVxuICB2ZXJ0Q29ubmVjdG9yT2JqczogW10sIC8vIFZFUlRJQ0FMIENPTk5FQ1RPUiBPQkpFQ1RTXG4gIGhvcml6Q29ubmVjdG9yT2JqczogW10sIC8vIEhPUklaT05UQUwgQ09OTkVDVE9SIE9CSkVDVFNcbiAgc2VjdGlvbk9ianM6IFtdLCAvLyBTRUNUSU9OIE9CSkVDVFNcbiAgcG9zaXRpb25zOiBbXSwgLy8gTE9HUyBQT1NJVElPTlMgT0YgRUFDSCBQQUdFXG4gIHBhZ2VDb2xvcnM6IFtdLCAvLyBMT0dTIEFTU09DQVRFRCBDT0xPUlMgV0lUSCBFQUNIIFBBR0VcbiAgb3JpZ2luczogW10sIC8vIFNBVkVTIFgvWSBQT0lOVFMgQVJPVU5EIEVBQ0ggUEFHRVxuICBzZWN0aW9uczogW10sIC8vIFNBVkVTIFNFQ1RJT04gSU5GT1xuICByZWZlcmVuY2VQb2ludHNMZWZ0OiBbXSwgLy8gTElTVCBPRiBMRUZULU1PU1QgUE9JTlRTIFdJVEhJTiBFQUNIIFNFQ1RJT05cbiAgcmVmZXJlbmNlUG9pbnRzUmlnaHQ6IFtdLCAvLyBMSVNUIE9GIFJJR0hULU1PU1QgUE9JTlRTIFdJVEhJTiBFQUNIIFNFQ1RJT05cbiAgY3VqU2hlZXROYW1lczogW10sIC8vIExJU1QgT0YgQ1VKIFNIRUVUU1xuICBjdWpSb3dzOiBbXSwgLy8gQVJSQVkgT0YgQ1VKIE9CSnNcbiAgY3VqQ29ubmVjdG9yczogW10sXG4gIGN1alN0YXJ0czogW10sXG4gIGRpcmVjdENvbm5lY3RvcnM6IFtdLCAvLyBBUlJBWSBPRiBESVJFQ1RJT04gQ09OTkVDVElPTlMgVE8gRElTUExBWVxuXG4gIC8vIEZPTlQgU0laRVNcbiAgcGFnZUxhYmVsU2l6ZTogMTgsXG4gIHNlY3Rpb25MYWJlbFNpemU6IDI0LFxuICBtdWx0aXBhZ2VMYWJlbFNpemU6IDEwLFxuICBwYWdlTGFiZWxXaWR0aDogdW5kZWZpbmVkLFxuXG4gIC8vIFNoZWV0cyBWYXJzXG4gIG1hcElkOiB1bmRlZmluZWQsXG4gIG1hcExpbms6IHVuZGVmaW5lZCxcbiAgbWFwTmFtZTogdW5kZWZpbmVkLFxuICB6b29tTGV2ZWw6IDAuNSxcbiAgdGFyZ2V0Wm9vbUxldmVsOiAwLjUsXG4gIHByZUN1alpvb21MZXZlbDogMC41LFxuICBzdmdEb2M6IHVuZGVmaW5lZCxcblxuICAvLyBDVUogT3ZlcmxheSBWYXJzXG4gIGN1alN0YXJ0OiB1bmRlZmluZWQsXG4gIGN1ak92ZXJsYXlTdGFydDogdW5kZWZpbmVkLFxuICBjdWpPdmVybGF5OiB1bmRlZmluZWQsXG4gIGN1ak1vZGU6IGZhbHNlLFxuICBhY3RpdmVDVUpJbmQ6IC0xLFxuICBwcmV2QWN0aXZlQ1VKSW5kOiAtMSxcbiAgY3VqU3RhcnRUZXh0OiB1bmRlZmluZWQsXG5cbiAgLy8gT3RoZXIgR2VvbWV0cmljIFZhcnNcbiAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgaGVpZ2h0OiB1bmRlZmluZWQsXG5cbiAgcm93czogW10sXG5cbiAgcmVsb2FkVGltZXI6IHVuZGVmaW5lZCxcblxuICBzdmdIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgc3ZnV2lkdGg6IHVuZGVmaW5lZCxcbiAgYWN0aXZlU3RlcEluZDogMCxcbiAgY3VyckNhcmQ6IHVuZGVmaW5lZCxcblxuICBjdXJyU2Nyb2xsWDogMCxcbiAgZW5kU2Nyb2xsWDogMCxcbiAgY3VyclNjcm9sbFk6IDAsXG4gIGVuZFNjcm9sbFk6IDAsXG4gIHNhdmVkU2Nyb2xsWDogMCxcbiAgc2F2ZWRTY3JvbGxZOiAwLFxuICBjdWpDYXJkV2lkdGg6IDQwMCxcbiAgY3VqQ2FyZEhlaWdodDogdW5kZWZpbmVkLFxuICB0aW1lcjogMCxcbiAgaGVhZGVyQ29sbGFwc2VkOiBmYWxzZSxcbiAgem9vbVNwZWVkOiAwLjIsXG5cbiAgLy8gWm9vbVxuICBwcmV2U2Nyb2xsVG9wOiB1bmRlZmluZWQsXG4gIHByZXZTY3JvbGxMZWZ0OiB1bmRlZmluZWQsXG4gIHByZXZNYXBXaWR0aDogdW5kZWZpbmVkLFxuICBwcmV2TWFwSGVpZ2h0OiB1bmRlZmluZWQsXG4gIG1hcFdpZHRoOiB1bmRlZmluZWQsXG4gIG1hcEhlaWdodDogdW5kZWZpbmVkLFxuICBjdWpMYWJlbFdpZHRoOiB1bmRlZmluZWQsXG5cbiAgLy8gRFJBR0dJTkcgVUlcbiAgaXNEcmFnZ2luZzogZmFsc2UsXG5cbiAgLy8gRmxhdHRlbiBNYXBcbiAgZmxhdHRlbk1hcDogZmFsc2UsXG5cbiAgLy8gQ0hFQ0tTIFRPIFNFRSBJRi9XSEVOIENBTExCQUNLIEhBUFBFTkVEIC0gTkVFRCBUTyBGSVhcbiAgY2FsbEJhY2s6IHVuZGVmaW5lZCxcblxuICAvLyBQQUdFIFNFTEVDVElPTlxuICBhY3RpdmVQYWdlSW5kZXg6IC0xLFxuXG4gIC8vIGhpZGVQYWdlTm90ZXMoKSxcbiAgaW5pdEZsYXRSdW46IHRydWUsXG5cbiAgLy8gQW5pbWF0ZWQgWm9vbSBUcmFuc2l0aW9uXG4gIGN1cnJPcmlnaW5zOiBbXSxcblxuICAvLyBIb2xkaW5nIGFyZWFzIHRvIHJlbmRlciB0ZXh0IGZvciBmdXR1cmUgbWVhc3VybWVudHMgYW5kIHBvc2l0aW9uaW5nXG4gIHRlc3RQYWdlTGFiZWw6IHVuZGVmaW5lZCxcbiAgdGVzdFNlY3Rpb25MYWJlbDogdW5kZWZpbmVkLFxuICB2aWV3VHJhbnNpdGlvbkVhc2U6IDAuNCxcbiAgdmlld0NoYW5nZUZyZXF1ZW5jeTogMTAsXG5cbiAgY3VqTWFya2VyQ29sbGVjdGlvbjogW10sXG4gIGN1ak1hcmtlckFycmF5OiBbXSxcblxuICBjdWpFbmRQb2ludHM6IFtdLFxuICBjdWpTdGFydENvb3JkaW5hdGVzOiBbXSxcblxuICBjdWpDb25uZWN0Q29sbGVjdGlvbjogW10sXG5cbiAgY3VyclhQYWRkaW5nOiB1bmRlZmluZWQsXG5cbiAgdHJhbnNpdGlvbmluZ1ZpZXdzOiBmYWxzZSxcblxuICBwYWdlUGFuZWxJbWFnZVBhdGhzOiB7XG4gICAgYXNzZXRzOiAnaW1nL2Nsb3VkLWFzc2V0cy5zdmcnLFxuICAgIGJhY2t1cDogJ2ltZy9jbG91ZC1iYWNrdXAuc3ZnJyxcbiAgICBkYXNoYm9hcmQ6ICdpbWcvcGFnZS1kYXNoYm9hcmQuc3ZnJyxcbiAgICBkYXRhYmFzZTogJ2ltZy9jbG91ZC1kYXRhYmFzZS5zdmcnLFxuICAgIGRldGFpbHM6ICdpbWcvcGFnZS1kZXRhaWxzLnN2ZycsXG4gICAgZm9ybTogJ2ltZy9wYWdlLWRhdGEtZW50cnkuc3ZnJyxcbiAgICBsb2NhbDogJ2ltZy9jbG91ZC1sb2NhbC5zdmcnLFxuICAgIGdlbmVyaWM6ICdpbWcvcGFnZS1nZW5lcmljLnN2ZycsXG4gICAgbWFwOiAnaW1nL3BhZ2UtbWFwLnN2ZycsXG4gICAgbGlzdDogJ2ltZy9wYWdlLWxpc3Qtdmlldy5zdmcnLFxuICAgIHBlb3BsZTogJ2ltZy9pY29uLXBlb3BsZS5zdmcnLFxuICAgIHBob25lOiAnaW1nL2ljb24tcGhvbmUuc3ZnJyxcbiAgICBwbGF5Ym9vazogJ2ltZy9jbG91ZC1wbGF5Ym9vay5zdmcnLFxuICAgIHJlcGxpY2E6ICdpbWcvY2xvdWQtcmVwbGljYS5zdmcnLFxuICAgIHNlY3VyaXR5OiAnaW1nL2Nsb3VkLXNlY3VyaXR5LnN2ZycsXG4gICAgc2V0dGluZ3M6ICdpbWcvcGFnZS1zZXR0aW5ncy5zdmcnLFxuICAgIHRhYmxlOiAnaW1nL3BhZ2UtdGFibGUuc3ZnJyxcbiAgICB0aW1lbGluZTogJ2ltZy9wYWdlLXRpbWVsaW5lLnN2ZycsXG4gICAgdmlzdWFsaXphdGlvbjogJ2ltZy9wYWdlLXZpc3VhbGl6YXRpb25zLnN2ZycsXG4gICAgdm06ICdpbWcvY2xvdWQtdm0uc3ZnJyxcbiAgICB6b29tX2luOlxuICAgICAgJ2h0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pL2dvb2dsZW1hdGVyaWFsaWNvbnMvZm9ybWF0X2xpc3RfYnVsbGV0ZWQvdjUvZ3JleTYwMC00OGRwLzJ4L2dtX2Zvcm1hdF9saXN0X2J1bGxldGVkX2dyZXk2MDBfNDhkcC5wbmcnLFxuICAgIHpvb21fb3V0OlxuICAgICAgJ2h0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9pL2dvb2dsZW1hdGVyaWFsaWNvbnMvcmVtb3ZlL3Y3L2dyZXk2MDAtNDhkcC8yeC9nbV9yZW1vdmVfZ3JleTYwMF80OGRwLnBuZycsXG4gIH0sXG5cbiAgaXNDVUpab29taW5nOiBmYWxzZSxcblxuICBzZWN0aW9uQ29sb3JzOiBbXG4gICAgJyNhMTQyZjQnLFxuICAgICcjNDI4NWY0JyxcbiAgICAnIzM0YTg1MycsXG4gICAgJyNmYmJjMDQnLFxuICAgICcjZWE0MzM1JyxcbiAgICAnI2ZhN2IxNycsXG4gICAgJyNmNDM5YTAnLFxuICAgICcjMjRjMWUwJyxcbiAgICAnIzVmNjM2OCcsXG4gICAgJyNiYTY4YzgnLFxuICAgICcjM2Y1MWI1JyxcbiAgICAnIzQyYTVmNScsXG4gICAgJyM0ZGQwZTEnLFxuICAgICcjMDA5Njg4JyxcbiAgXSxcbn07XG4iLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXNJbkFjdGl2ZUNVSihwYWdlKSB7XG4gIHJldHVybiBzdGF0ZS5jdWpSb3dzW3N0YXRlLmFjdGl2ZUNVSkluZF0uc29tZShcbiAgICAoY3VqUm93KSA9PiBjdWpSb3cuUGFnZSA9PT0gcGFnZS5uYW1lXG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90ZWRQYWdlUG9zaXRpb25zU29ydGVkKCkge1xuICByZXR1cm4gc3RhdGUucGFnZXNcbiAgICAuZmlsdGVyKChwYWdlKSA9PiBwYWdlLmhhc05vdGUpXG4gICAgLm1hcCgocGFnZSkgPT4gc3RhdGUucG9zaXRpb25zW3BhZ2UuaW5kZXhdKVxuICAgIC5zb3J0KChhLCBiKSA9PiBhLnggLSBiLngpO1xufVxuIiwiaW1wb3J0IHsgc3ZnQ29udGFpbmVyIH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5sZXQgY3VycmVudEludGVydmFsSW5kZXg7XG5jb25zdCBudW1iZXJPZkludGVydmFscyA9IDIwO1xuY29uc3QgaW50ZXJ2YWxEdXJhdGlvbkluTWlsbGlzZWNvbmRzID0gMjA7XG5sZXQgdHJhbnNpdGlvblRpbWVySUQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFNjcm9sbFRyYW5zaXRpb24oKSB7XG4gIGN1cnJlbnRJbnRlcnZhbEluZGV4ID0gMDtcbiAgY29uc3QgZGVsdGFYID1cbiAgICAoc3RhdGUuZW5kU2Nyb2xsWCAtIHN2Z0NvbnRhaW5lci5zY3JvbGxMZWZ0KSAvIG51bWJlck9mSW50ZXJ2YWxzO1xuICBjb25zdCBkZWx0YVkgPVxuICAgIChzdGF0ZS5lbmRTY3JvbGxZIC0gc3ZnQ29udGFpbmVyLnNjcm9sbFRvcCkgLyBudW1iZXJPZkludGVydmFscztcbiAgdHJhbnNpdGlvblRpbWVySUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgdHdlZW4oZGVsdGFYLCBkZWx0YVkpO1xuICB9LCBpbnRlcnZhbER1cmF0aW9uSW5NaWxsaXNlY29uZHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcFNjcm9sbFRyYW5zaXRpb24oKSB7XG4gIGNsZWFyVGltZW91dCh0cmFuc2l0aW9uVGltZXJJRCk7XG59XG5cbmZ1bmN0aW9uIHR3ZWVuKGRlbHRhWCwgZGVsdGFZKSB7XG4gIGN1cnJlbnRJbnRlcnZhbEluZGV4ICs9IDE7XG4gIHN2Z0NvbnRhaW5lci5zY3JvbGxMZWZ0ICs9IGRlbHRhWDtcbiAgc3ZnQ29udGFpbmVyLnNjcm9sbFRvcCArPSBkZWx0YVk7XG4gIGlmIChjdXJyZW50SW50ZXJ2YWxJbmRleCA9PT0gbnVtYmVyT2ZJbnRlcnZhbHMpIHtcbiAgICBzdG9wU2Nyb2xsVHJhbnNpdGlvbigpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQ29udGFpbmVyU2Nyb2xsKCkge1xuICBjb25zdCBmaXJzdFBhZ2UgPSBzdGF0ZS5wYWdlc1swXTtcbiAgc3ZnQ29udGFpbmVyLnNjcm9sbFRvcCA9IGZpcnN0UGFnZS5zcGVjcy55IC0gc3RhdGUuaGVpZ2h0IC8gMjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVhc2VTY3JvbGxUb01hdGNoVmlldygpIHtcbiAgY29uc3QgaGVpZ2h0UmF0aW8gPSBzdGF0ZS5tYXBIZWlnaHQgLyBzdGF0ZS5wcmV2TWFwSGVpZ2h0O1xuICBjb25zdCB3aWR0aFJhdGlvID0gc3RhdGUubWFwV2lkdGggLyBzdGF0ZS5wcmV2TWFwV2lkdGg7XG4gIHN0YXRlLmVuZFNjcm9sbFggPSBNYXRoLm1heChcbiAgICAwLFxuICAgIHN0YXRlLnByZXZTY3JvbGxMZWZ0ICogd2lkdGhSYXRpbyArIChzdGF0ZS53aWR0aCAvIDIpICogKHdpZHRoUmF0aW8gLSAxKVxuICApO1xuICBzdGF0ZS5lbmRTY3JvbGxZID0gTWF0aC5tYXgoXG4gICAgMCxcbiAgICBzdGF0ZS5wcmV2U2Nyb2xsVG9wICogaGVpZ2h0UmF0aW8gKyAoc3RhdGUuaGVpZ2h0IC8gMikgKiAoaGVpZ2h0UmF0aW8gLSAxKVxuICApO1xuICBzdmdDb250YWluZXIuc2Nyb2xsTGVmdCA9IHN0YXRlLmVuZFNjcm9sbFg7XG4gIHN2Z0NvbnRhaW5lci5zY3JvbGxUb3AgPSBzdGF0ZS5lbmRTY3JvbGxZO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc25hcFNjcm9sbFRvTWF0Y2hab29tKCkge1xuICAvLyBUT0RPOiBDaGFuZ2UgY29kZSB0byBkZWNsYXJhdGl2ZSBjb2RlIGluIGZ1dHVyZS5cbiAgaWYgKCFzdGF0ZS5pc0NVSlpvb21pbmcpIHtcbiAgICBsZXQgcGVyY2VudFRvcDtcbiAgICBsZXQgcGVyY2VudExlZnQ7XG5cbiAgICBpZiAoc3RhdGUubWFwV2lkdGggPCBzdGF0ZS53aWR0aCAmJiBzdGF0ZS5mbGF0dGVuTWFwKSB7XG4gICAgICBwZXJjZW50TGVmdCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBlcmNlbnRMZWZ0ID1cbiAgICAgICAgKHN0YXRlLnByZXZTY3JvbGxMZWZ0ICsgc3RhdGUud2lkdGggLyAyKSAvIHN0YXRlLnByZXZNYXBXaWR0aDtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cyAmJiAhc3RhdGUuY3VqTW9kZSkge1xuICAgICAgc3RhdGUuZW5kU2Nyb2xsWCA9IHBlcmNlbnRMZWZ0ICogc3RhdGUubWFwV2lkdGggLSBzdGF0ZS53aWR0aCAvIDI7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLm1hcEhlaWdodCA8IHN0YXRlLmhlaWdodCAmJiBzdGF0ZS5mbGF0dGVuTWFwKSB7XG4gICAgICBwZXJjZW50VG9wID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGVyY2VudFRvcCA9XG4gICAgICAgIChzdGF0ZS5wcmV2U2Nyb2xsVG9wICsgc3RhdGUuaGVpZ2h0IC8gMikgLyBzdGF0ZS5wcmV2TWFwSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICghc3RhdGUuY3VqTW9kZSAmJiAhc3RhdGUudHJhbnNpdGlvbmluZ1ZpZXdzKSB7XG4gICAgICBzdGF0ZS5lbmRTY3JvbGxZID0gcGVyY2VudFRvcCAqIHN0YXRlLm1hcEhlaWdodCAtIHN0YXRlLmhlaWdodCAvIDI7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmVuZFNjcm9sbFggPCAwKSB7XG4gICAgICBzdGF0ZS5lbmRTY3JvbGxYID0gMDtcbiAgICB9XG5cbiAgICBpZiAoc3ZnQ29udGFpbmVyLnNjcm9sbFRvcCA8IDApIHtcbiAgICAgIHN2Z0NvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgIH1cbiAgfVxuICBzdmdDb250YWluZXIuc2Nyb2xsTGVmdCA9IHN0YXRlLmVuZFNjcm9sbFg7XG4gIHN2Z0NvbnRhaW5lci5zY3JvbGxUb3AgPSBzdGF0ZS5lbmRTY3JvbGxZO1xufVxuIiwiaW1wb3J0IHsgdXBkYXRlQ29udGFpbmVyRGltZW5zaW9ucyB9IGZyb20gJy4uL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgc3ZnQ29udGFpbmVyIH0gZnJvbSAnLi4vZG9tJztcbmltcG9ydCB7XG4gIGRyYXdGbGF0SG9yaXpDb25uZWN0b3JzLFxuICBkcmF3RmxhdFZlcnRDb25uZWN0b3JzLFxuICBkcmF3SG9yaXpDb25uZWN0b3JzLFxuICBkcmF3VmVydENvbm5lY3RvcnMsXG4gIGRyYXdEaXJlY3RDb25uZWN0aW9ucyxcbn0gZnJvbSAnLi4vZWxlbWVudHMvY29ubmVjdG9yJztcbmltcG9ydCB7XG4gIHVwZGF0ZVNlbGVjdGlvbkNvbm5lY3Rpb25zLFxuICB1cGRhdGVBbGxIaWdobGlnaHRlZENvbm5lY3Rpb25zLFxufSBmcm9tICcuLi9lbGVtZW50cy9jcm9zc2xpbmsnO1xuaW1wb3J0IHsgZHJhd0NVSlN0YXJ0UG9pbnQsIGRyYXdGbGF0Q1VKU3RhcnRQb2ludCB9IGZyb20gJy4uL2VsZW1lbnRzL2N1aic7XG5pbXBvcnQgeyBkcmF3UGFnZSB9IGZyb20gJy4uL2VsZW1lbnRzL3BhZ2UnO1xuaW1wb3J0IHsgdXBkYXRlU3RhdGUgfSBmcm9tICcuLi9lbGVtZW50cy9wYWdlL2hvdmVyRWxsaXBzZSc7XG5pbXBvcnQgeyBkcmF3RmxhdFNlY3Rpb25zLCBkcmF3U2VjdGlvbnMgfSBmcm9tICcuLi9lbGVtZW50cy9zZWN0aW9uJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgZ2V0Tm90ZWRQYWdlUG9zaXRpb25zU29ydGVkIH0gZnJvbSAnLi4vc3RhdGVVdGlsaXRpZXMnO1xuXG5pbXBvcnQgeyBlYXNlU2Nyb2xsVG9NYXRjaFZpZXcgfSBmcm9tICcuL3Njcm9sbCc7XG5cbmxldCBhbmNob3JQYWdlO1xubGV0IHRyYW5zaXRpb25UaW1lcklEO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRWaWV3VHJhbnNpdGlvbigpIHtcbiAgc3RvcFZpZXdUcmFuc2l0aW9uKCk7XG4gIGVhc2VTY3JvbGxUb01hdGNoVmlldygpO1xuICBzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MgPSB0cnVlO1xuICBhbmNob3JQYWdlID0gY2FsY3VsYXRlQW5jaG9yUGFnZSgpO1xuICB0cmFuc2l0aW9uVGltZXJJRCA9IHNldEludGVydmFsKHR3ZWVuLCBzdGF0ZS52aWV3Q2hhbmdlRnJlcXVlbmN5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BWaWV3VHJhbnNpdGlvbigpIHtcbiAgY2xlYXJJbnRlcnZhbCh0cmFuc2l0aW9uVGltZXJJRCk7XG4gIHN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cyA9IGZhbHNlO1xuXG4gIHVwZGF0ZVNlbGVjdGlvbkNvbm5lY3Rpb25zKCk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFuY2hvclBhZ2UoKSB7XG4gIC8vIFRPRE86IEV4dHJhY3QgdGhpcyBtYWdpYyBudW1iZXJcbiAgY29uc3QgcGFkZGluZyA9IDE2MDtcbiAgY29uc3Qgb3JpZ2luWCA9IHN2Z0NvbnRhaW5lci5zY3JvbGxMZWZ0ICsgcGFkZGluZztcbiAgY29uc3Qgb3JpZ2luWSA9IHN2Z0NvbnRhaW5lci5zY3JvbGxUb3AgKyBwYWRkaW5nO1xuICBmdW5jdGlvbiBkaXN0YW5jZVRvKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgZGVsdGFYID0gcG9zaXRpb24ueCAtIG9yaWdpblg7XG4gICAgY29uc3QgZGVsdGFZID0gcG9zaXRpb24ueSAtIG9yaWdpblk7XG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhkZWx0YVgsIDIpICsgTWF0aC5wb3coZGVsdGFZLCAyKSk7XG4gIH1cbiAgY29uc3QgY2xvc2VzdFBvc2l0aW9ucyA9IHN0YXRlLnBvc2l0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGRpc3RhbmNlVG8oYSkgLSBkaXN0YW5jZVRvKGIpO1xuICB9KTtcbiAgY29uc3QgY2xvc2VzdFBvc2l0aW9uID0gY2xvc2VzdFBvc2l0aW9uc1swXTtcbiAgY29uc3QgY2xvc2VzdFBhZ2UgPSBzdGF0ZS5wYWdlc1tzdGF0ZS5wb3NpdGlvbnMuaW5kZXhPZihjbG9zZXN0UG9zaXRpb24pXTtcbiAgcmV0dXJuIGNsb3Nlc3RQYWdlO1xufVxuXG5mdW5jdGlvbiB0d2VlbigpIHtcbiAgdXBkYXRlU2Nyb2xsKCk7XG4gIGlmIChjYWxjdWxhdGVJc1R3ZWVuRG9uZSgpKSB7XG4gICAgc3RvcFZpZXdUcmFuc2l0aW9uKCk7XG4gIH1cbiAgaWYgKHN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICB0d2VlblRvRmxhdCgpO1xuICB9IGVsc2Uge1xuICAgIHR3ZWVuVG9Jc28oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTY3JvbGwoKSB7XG4gIHN2Z0NvbnRhaW5lci5zY3JvbGxMZWZ0ID1cbiAgICBzdGF0ZS5tYXBXaWR0aCA+IHN0YXRlLndpZHRoID8gYW5jaG9yUGFnZS5zcGVjcy54IC0gc3RhdGUud2lkdGggLyA0IDogMDtcbiAgc3ZnQ29udGFpbmVyLnNjcm9sbFRvcCA9XG4gICAgc3RhdGUuZmxhdHRlbk1hcCAmJiBzdGF0ZS5lbmRTY3JvbGxZID4gc3RhdGUubWFwSGVpZ2h0IC0gc3RhdGUuaGVpZ2h0XG4gICAgICA/IHN0YXRlLm1hcEhlaWdodCAtIHN0YXRlLmhlaWdodFxuICAgICAgOiBhbmNob3JQYWdlLnNwZWNzLnkgLSBzdGF0ZS5oZWlnaHQgLyA0O1xufVxuXG4vLyBUT0RPOiBFeHRyYWN0IG1hZ2ljIG51bWJlcnNcbmZ1bmN0aW9uIGNhbGN1bGF0ZUlzVHdlZW5Eb25lKCkge1xuICByZXR1cm4gc3RhdGUucGFnZXMuZXZlcnkoXG4gICAgKHBhZ2UpID0+XG4gICAgICBNYXRoLmFicyhwYWdlLnNwZWNzLnggLSBwYWdlLnRhcmdldFNwZWNzLngpIDw9IDAuNSAmJlxuICAgICAgTWF0aC5hYnMocGFnZS5zcGVjcy55IC0gcGFnZS50YXJnZXRTcGVjcy55KSA8PSAwLjVcbiAgKTtcbn1cblxuZnVuY3Rpb24gdHdlZW5Ub0ZsYXQoKSB7XG4gIGNvbnN0IG5vdGVkUGFnZVBvc2l0aW9uc1NvcnRlZCA9IGdldE5vdGVkUGFnZVBvc2l0aW9uc1NvcnRlZCgpO1xuICBmb3IgKGxldCBwYWdlSW5kZXggPSAwOyBwYWdlSW5kZXggPCBzdGF0ZS5yb3dzLmxlbmd0aDsgcGFnZUluZGV4KyspIHtcbiAgICBjb25zdCBwYWdlRGF0YSA9IHN0YXRlLnJvd3NbcGFnZUluZGV4XTtcbiAgICBkcmF3UGFnZShwYWdlRGF0YSwgcGFnZUluZGV4LCBub3RlZFBhZ2VQb3NpdGlvbnNTb3J0ZWQpO1xuICAgIHVwZGF0ZVN0YXRlKHN0YXRlLnBhZ2VzW3BhZ2VJbmRleF0pO1xuICB9XG4gIGRyYXdGbGF0SG9yaXpDb25uZWN0b3JzKCk7XG4gIGRyYXdGbGF0VmVydENvbm5lY3RvcnMoKTtcbiAgZHJhd0ZsYXRTZWN0aW9ucygpO1xuICBkcmF3RGlyZWN0Q29ubmVjdGlvbnMoKTtcbiAgZHJhd0ZsYXRDVUpTdGFydFBvaW50KCk7XG4gIHVwZGF0ZUNvbnRhaW5lckRpbWVuc2lvbnMoKTtcbiAgdXBkYXRlU2VsZWN0aW9uQ29ubmVjdGlvbnMoKTtcbiAgdXBkYXRlQWxsSGlnaGxpZ2h0ZWRDb25uZWN0aW9ucygpO1xufVxuXG5mdW5jdGlvbiB0d2VlblRvSXNvKCkge1xuICBkcmF3VmVydENvbm5lY3RvcnMoKTtcbiAgZHJhd0hvcml6Q29ubmVjdG9ycygpO1xuXG4gIGNvbnN0IG5vdGVkUGFnZVBvc2l0aW9uc1NvcnRlZCA9IGdldE5vdGVkUGFnZVBvc2l0aW9uc1NvcnRlZCgpO1xuICBmb3IgKGxldCBwYWdlSW5kZXggPSAwOyBwYWdlSW5kZXggPCBzdGF0ZS5yb3dzLmxlbmd0aDsgcGFnZUluZGV4KyspIHtcbiAgICBjb25zdCBwYWdlRGF0YSA9IHN0YXRlLnJvd3NbcGFnZUluZGV4XTtcbiAgICBkcmF3UGFnZShwYWdlRGF0YSwgcGFnZUluZGV4LCBub3RlZFBhZ2VQb3NpdGlvbnNTb3J0ZWQpO1xuICAgIHVwZGF0ZVN0YXRlKHN0YXRlLnBhZ2VzW3BhZ2VJbmRleF0pO1xuICB9XG4gIGRyYXdDVUpTdGFydFBvaW50KCk7XG4gIGRyYXdTZWN0aW9ucygpO1xuICBkcmF3RGlyZWN0Q29ubmVjdGlvbnMoKTtcbiAgdXBkYXRlQ29udGFpbmVyRGltZW5zaW9ucygpO1xuICB1cGRhdGVTZWxlY3Rpb25Db25uZWN0aW9ucygpO1xufVxuXG4vLyBUT0RPOiBFeHRyYWN0IG1hZ2ljIG51bWJlcnNcbmV4cG9ydCBmdW5jdGlvbiBzdGFydFZpZXdUcmFuc2l0aW9uSWZOZWNlc3NhcnkoKSB7XG4gIC8vIFdlIGFkZGVkIGV4dHJhIGNvbmRpdGlvbnMgZm9yIHN3aXRjaGluZyB2aWV3cyB3aGlsZSBpbiBDVUogbW9kZS5cbiAgLy8gZmxvYXRFcnJvck1hcmdpbiBpZ25vcmVzIGltcGVyZmVjdGlvbnMgaW4gc3RhdGUudGFyZ2V0Wm9vbUxldmVsLFxuICAvLyB3aGljaCBpcyBpbnRlbmRlZCB0byBhbHdheXMgYmUgYW4gaW50ZWdlciBtdWx0aXBsZSBvZiAwLjEuXG4gIC8vIFRPRE86IFJlZmFjdG9yIHN0YXRlLnRhcmdldFpvb21MZXZlbCB0byBiZSBhbiBpbnRlZ2VyXG4gIGNvbnN0IGZsb2F0RXJyb3JNYXJnaW4gPSAwLjA1O1xuICBjb25zdCBkb1N3aXRjaFRvRmxhdCA9XG4gICAgIXN0YXRlLmZsYXR0ZW5NYXAgJiYgc3RhdGUudGFyZ2V0Wm9vbUxldmVsIDwgMC40ICsgZmxvYXRFcnJvck1hcmdpbjtcbiAgY29uc3QgZG9Td2l0Y2hUb0lzbyA9XG4gICAgc3RhdGUuZmxhdHRlbk1hcCAmJiBzdGF0ZS50YXJnZXRab29tTGV2ZWwgPiAwLjUgLSBmbG9hdEVycm9yTWFyZ2luO1xuICBpZiAoZG9Td2l0Y2hUb0ZsYXQpIHtcbiAgICBzdGF0ZS5mbGF0dGVuTWFwID0gdHJ1ZTtcbiAgICBpZiAoIXN0YXRlLmN1ak1vZGUpIHtcbiAgICAgIHN0YXJ0Vmlld1RyYW5zaXRpb24oKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRvU3dpdGNoVG9Jc28pIHtcbiAgICBzdGF0ZS5mbGF0dGVuTWFwID0gZmFsc2U7XG4gICAgaWYgKCFzdGF0ZS5jdWpNb2RlKSB7XG4gICAgICBzdGFydFZpZXdUcmFuc2l0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBzdmdDb250YWluZXIgfSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IHsgdXBkYXRlQ1VKU3RhcnRWaXNpYmlsaXR5IH0gZnJvbSAnLi4vZWxlbWVudHMvY3VqJztcbmltcG9ydCB7IHJlc2V0U2VjdGlvbkNhbGN1bGF0aW9ucyB9IGZyb20gJy4uL2VsZW1lbnRzL3NlY3Rpb24nO1xuaW1wb3J0IHsgdXBkYXRlUHJvcG9ydGlvbnMgfSBmcm9tICcuLi9wcm9wb3J0aW9ucyc7XG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IHVwZGF0ZVZpcyB9IGZyb20gJy4uL3Zpcyc7XG5cbmltcG9ydCB7IHNuYXBTY3JvbGxUb01hdGNoWm9vbSwgc3RvcFNjcm9sbFRyYW5zaXRpb24gfSBmcm9tICcuL3Njcm9sbCc7XG5pbXBvcnQgeyBzdGFydFZpZXdUcmFuc2l0aW9uSWZOZWNlc3NhcnkgfSBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBtYXhQYWdlQ291bnQgPSAxMDA7XG5sZXQgdHJhbnNpdGlvblRpbWVySUQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFpvb21UcmFuc2l0aW9uKCkge1xuICBzdG9wWm9vbVRyYW5zaXRpb24oKTtcbiAgc3RvcFNjcm9sbFRyYW5zaXRpb24oKTtcbiAgc3RhdGUuem9vbVNwZWVkID1cbiAgICBNYXRoLmFicyhzdGF0ZS56b29tTGV2ZWwgLSBzdGF0ZS50YXJnZXRab29tTGV2ZWwpID4gMC41ID8gMC4xIDogMC4zO1xuICBzdGF0ZS5wcmV2TWFwSGVpZ2h0ID0gc3RhdGUubWFwSGVpZ2h0O1xuICBzdGF0ZS5wcmV2TWFwV2lkdGggPSBzdGF0ZS5tYXBXaWR0aDtcbiAgc3RhdGUucHJldlNjcm9sbExlZnQgPSBzdmdDb250YWluZXIuc2Nyb2xsTGVmdDtcbiAgc3RhdGUucHJldlNjcm9sbFRvcCA9IHN2Z0NvbnRhaW5lci5zY3JvbGxUb3A7XG4gIGlmIChzdGF0ZS5wYWdlcy5sZW5ndGggPCBtYXhQYWdlQ291bnQpIHtcbiAgICB0cmFuc2l0aW9uVGltZXJJRCA9IHNldEludGVydmFsKHR3ZWVuLCAyKTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS56b29tTGV2ZWwgPSBzdGF0ZS50YXJnZXRab29tTGV2ZWw7XG4gICAgc3RvcFpvb21UcmFuc2l0aW9uKCk7XG4gICAgdHdlZW4oKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcFpvb21UcmFuc2l0aW9uKCkge1xuICBjbGVhclRpbWVvdXQodHJhbnNpdGlvblRpbWVySUQpO1xuICBzdG9wU2Nyb2xsVHJhbnNpdGlvbigpO1xufVxuXG5mdW5jdGlvbiB0d2VlbigpIHtcbiAgdXBkYXRlUHJvcG9ydGlvbnMoKTtcbiAgdXBkYXRlQ1VKU3RhcnRWaXNpYmlsaXR5KCk7XG4gIHN0YXJ0Vmlld1RyYW5zaXRpb25JZk5lY2Vzc2FyeSgpO1xuICByZXNldFNlY3Rpb25DYWxjdWxhdGlvbnMoKTtcbiAgdXBkYXRlVmlzKCk7XG4gIGlmIChNYXRoLmFicyhzdGF0ZS56b29tTGV2ZWwgLSBzdGF0ZS50YXJnZXRab29tTGV2ZWwpIDwgMC4wMDUpIHtcbiAgICBzdGF0ZS56b29tTGV2ZWwgPSBzdGF0ZS50YXJnZXRab29tTGV2ZWw7XG4gICAgc3RvcFpvb21UcmFuc2l0aW9uKCk7XG4gIH1cbiAgaWYgKHN0YXRlLnRyYW5zaXRpb25pbmdWaWV3cykge1xuICAgIHN0YXRlLnpvb21MZXZlbCA9IHN0YXRlLnRhcmdldFpvb21MZXZlbDtcbiAgICBzdG9wWm9vbVRyYW5zaXRpb24oKTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS56b29tTGV2ZWwgKz1cbiAgICAgIChzdGF0ZS50YXJnZXRab29tTGV2ZWwgLSBzdGF0ZS56b29tTGV2ZWwpICogc3RhdGUuem9vbVNwZWVkO1xuICAgIHNuYXBTY3JvbGxUb01hdGNoWm9vbSgpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICB1cGRhdGVDb250YWluZXJEaW1lbnNpb25zLFxuICB1cGRhdGVNYXBEaW1lbnNpb25zLFxuICB1cGRhdGVXaW5kb3dEaW1lbnNpb25zLFxufSBmcm9tICcuL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHtcbiAgYXNzaWduQ29ubmVjdG9yT3JpZ2lucyxcbiAgY3JlYXRlRGlyZWN0Q29ubmVjdGlvbnMsXG4gIGRyYXdEaXJlY3RDb25uZWN0aW9ucyxcbiAgZHJhd0ZsYXRIb3JpekNvbm5lY3RvcnMsXG4gIGRyYXdGbGF0VmVydENvbm5lY3RvcnMsXG59IGZyb20gJy4vZWxlbWVudHMvY29ubmVjdG9yJztcbmltcG9ydCB7XG4gIHVwZGF0ZVNlbGVjdGlvbkNvbm5lY3Rpb25zLFxuICB1cGRhdGVBbGxIaWdobGlnaHRlZENvbm5lY3Rpb25zLFxufSBmcm9tICcuL2VsZW1lbnRzL2Nyb3NzbGluayc7XG5pbXBvcnQge1xuICBjcmVhdGVDVUpDYXJkLFxuICBjcmVhdGVDVUpDb25uZWN0b3JzLFxuICBjcmVhdGVDVUpNYXJrZXJzLFxuICBjdWpDaGVjayxcbiAgZm9ybWF0Q1VKQXJyYXksXG4gIGhpZGVBbGxDVUpTdGFydHMsXG59IGZyb20gJy4vZWxlbWVudHMvY3VqJztcbmltcG9ydCB7IGNyZWF0ZVBhZ2UsIGRyYXdQYWdlIH0gZnJvbSAnLi9lbGVtZW50cy9wYWdlJztcbmltcG9ydCB7IGNyZWF0ZU5vZGVQYW5lbCB9IGZyb20gJy4vZWxlbWVudHMvcGFnZS9kZXRhaWxzQ2FyZCc7XG5pbXBvcnQgeyBjcmVhdGVUZXN0UGFnZUxhYmVsIH0gZnJvbSAnLi9lbGVtZW50cy9wYWdlL2xhYmVsJztcbmltcG9ydCB7XG4gIGFzc2lnblNlY3Rpb25zLFxuICBjcmVhdGVTZWN0aW9ucyxcbiAgY3JlYXRlVGVzdFNlY3Rpb25MYWJlbCxcbiAgZHJhd0ZsYXRTZWN0aW9ucyxcbiAgZHJhd1NlY3Rpb25zLFxufSBmcm9tICcuL2VsZW1lbnRzL3NlY3Rpb24nO1xuaW1wb3J0IHsgY2FsY3VsYXRlRmxhdFBvc2l0aW9ucywgY2FsY3VsYXRlUG9zaXRpb25zIH0gZnJvbSAnLi9wb3NpdGlvbnMnO1xuaW1wb3J0IHsgc3ZnQ29udGFpbmVyU2VsZWN0aW9uIH0gZnJvbSAnLi9zZWxlY3Rpb25zJztcbmltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBnZXROb3RlZFBhZ2VQb3NpdGlvbnNTb3J0ZWQgfSBmcm9tICcuL3N0YXRlVXRpbGl0aWVzJztcbmltcG9ydCB7IGluaXRpYWxpemVDb250YWluZXJTY3JvbGwgfSBmcm9tICcuL3RyYW5zaXRpb25zL3Njcm9sbCc7XG5pbXBvcnQgeyBjcmVhdGVab29tQnV0dG9ucyB9IGZyb20gJy4vem9vbSc7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuQ1JFQVRJTkcgVEhFIFZJU1VBTElaQVRJT04nUyBFTEVNRU5UU1xuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbi8vIGZ1bmN0aW9uIG9ubHkgcnVucyBvbmNlLlxuLy8gQ09OU0lERVIgRklYSU5HOiBJbiB0aGUgZnV0dXJlIGFsbCB0aGUgY3JlYXRlIG1ldGhvZHMgY291bGQgZmlyZSxcbi8vIHRoZW4gd2UgY291bGQgZmlyZSB0aGUgdWRwYXRlVmlzKCkgZnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSB0aGUgZHJhd2luZy5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZpcygpIHtcbiAgdXBkYXRlV2luZG93RGltZW5zaW9ucygpO1xuXG4gIC8vIFNldHMgdXAgaW5pdGlhbCBTVkcgQ29udGFpbmVyIGZvciByZW5kZXJpbmcgdGhlIHZpc3VhbGl6YXRpb24uXG4gIC8vIFRoZSB3aWR0aC9oZWlnaHQgYXR0cmlidXRlcyBhcmUgdXBkYXRlZCBpbiBhIGxhdGVyIGZ1bmN0aW9uLlxuICAvLyA1MDAwIGlzIGFyYi4gLSBpdCdzIHVwZGF0ZWQgbGF0ZXJcbiAgc3RhdGUuc3ZnRG9jID0gc3ZnQ29udGFpbmVyU2VsZWN0aW9uXG4gICAgLnN0eWxlKCdoZWlnaHQnLCAnMTAwdmgnKVxuICAgIC5zdHlsZSgnd2lkdGgnLCAnMTAwdncnKVxuICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxuICAgIC5zdHlsZSgndG9wJywgMClcbiAgICAuc3R5bGUoJ2xlZnQnLCAwKVxuICAgIC5zdHlsZSgnb3ZlcmZsb3cnLCAnc2Nyb2xsJylcbiAgICAuc3R5bGUoJ2N1cnNvcicsICdtb3ZlJylcbiAgICAvLyAuYXR0cignZHJhZ2dhYmxlJywgdHJ1ZSlcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxuICAgIC5zdHlsZSgnbGVmdCcsIDApXG4gICAgLnN0eWxlKCd0b3AnLCAwKVxuICAgIC5hdHRyKCdpZCcsICdzdmdEaWFncmFtJylcbiAgICAuYXR0cignZHJhZ2dhYmxlJywgdHJ1ZSk7XG5cbiAgLy8gVmlzIHN0YXJ0cyB3aXRoIGVhY2ggcGFnZSBhbmQgZGV0ZXJtaW5pbmcgaXRzIHBsYWNlbWVudCBpbiB0aGUgXCJ0cmVlXCIgc3RydWN0dXJlLlxuICAvLyBQbGFjZW1lbnQsIGFuZCBtZWFzdXJlbWVudHMgb2YgYWxsIG90aGVyIGVsZW1lbnRzIGFyZSBiYXNlZCBvZmYgb2YgdGhlIGluaXRpYWwgcGFnZSB0cmVlIHN0cnVjdHVyZS5cbiAgaWYgKHN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICBzdGF0ZS52ZXJ0UGFkZGluZyA9IHN0YXRlLnBhZ2VXaWR0aCAqIDQ7XG4gICAgc3RhdGUucG9zaXRpb25zID0gY2FsY3VsYXRlRmxhdFBvc2l0aW9ucygpO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlLnBvc2l0aW9ucyA9IGNhbGN1bGF0ZVBvc2l0aW9ucygpO1xuICB9XG4gIGFzc2lnbkNvbm5lY3Rvck9yaWdpbnModHJ1ZSk7XG4gIGNyZWF0ZURpcmVjdENvbm5lY3Rpb25zKCk7XG5cbiAgLy8gQ3JlYXRlIGFycmF5IG9mIHNlY3Rpb25zIChcImNhcnBldHMgb3IgbWF0c1wiKSBmb3IgZnV0dXJlIHJlZmVyZW5jZS5cbiAgYXNzaWduU2VjdGlvbnMoKTtcblxuICBpZiAoc3RhdGUuY3VqU2hlZXROYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgZm9ybWF0Q1VKQXJyYXkoKTtcbiAgICBjcmVhdGVDVUpNYXJrZXJzKCk7XG4gIH1cblxuICBjcmVhdGVUZXN0UGFnZUxhYmVsKCk7XG4gIHN0YXRlLnJvd3MuZm9yRWFjaCgocGFnZURhdGEsIHBhZ2VJbmRleCkgPT4ge1xuICAgIGNyZWF0ZVBhZ2UocGFnZURhdGEsIHBhZ2VJbmRleCk7XG4gIH0pO1xuICBjcmVhdGVOb2RlUGFuZWwoKTtcblxuICAvLyBDT05TSURFUiBGSVhJTkc6IFdFIE1BWSBCRSBBQkxFIFRPIERST1AgVEhJUywgQ0FMTFMgQUxTTyBFWElTVCBJTiBVUERBVEUgVklTIEZOXG4gIC8vIE1BWSBCRSBBQkxFIFRPIERFTEVURSBBTEwgVEhFU0UgRFJBVyBGTlMgSU4gVEhJUyBDUkVBVEUgRk5cbiAgLy8gVE9ETzogQWxsIGRyYXcgZnVuY3Rpb25zIG1heSBiZSB1bm5lY2Vzc2FyeSBpbiBjcmVhdGVWaXMoKSxcbiAgLy8gc2luY2UgdGhleSdyZSBhbGwgcmUtY2FsbGVkIGluIHVwZGF0ZVZpcygpLiBEZWxldGUgdGhlc2UgbGluZXM/XG4gIGNvbnN0IG5vdGVkUGFnZVBvc2l0aW9uc1NvcnRlZCA9IGdldE5vdGVkUGFnZVBvc2l0aW9uc1NvcnRlZCgpO1xuICBzdGF0ZS5yb3dzLmZvckVhY2goKHBhZ2VEYXRhLCBwYWdlSW5kZXgpID0+IHtcbiAgICBkcmF3UGFnZShwYWdlRGF0YSwgcGFnZUluZGV4LCBub3RlZFBhZ2VQb3NpdGlvbnNTb3J0ZWQpO1xuICB9KTtcblxuICBjcmVhdGVUZXN0U2VjdGlvbkxhYmVsKCk7XG4gIGNyZWF0ZVNlY3Rpb25zKCk7XG5cbiAgLy8gQ1JFQVRFIFNFQ1RJT05TLCBEUkFXIFNFQ1RJT05TO1xuICAvLyBJTUhPIC0gdGhpcyB3YXMgdGhlIG1vc3QgY2hhbGxlbmdpbmcgcG9ydGlvbiBvZiB0aGUgbWFwIHRvIHJlbmRlci5cblxuICAvLyBUT0RPOiBBbGwgZHJhdyBmdW5jdGlvbnMgbWF5IGJlIHVubmVjZXNzYXJ5IGluIGNyZWF0ZVZpcygpLFxuICAvLyBzaW5jZSB0aGV5J3JlIGFsbCByZS1jYWxsZWQgaW4gdXBkYXRlVmlzKCkuIERlbGV0ZSB0aGVzZSBsaW5lcz9cbiAgaWYgKHN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICBkcmF3RmxhdFNlY3Rpb25zKCk7XG4gICAgZHJhd0ZsYXRIb3JpekNvbm5lY3RvcnMoKTtcbiAgICBkcmF3RmxhdFZlcnRDb25uZWN0b3JzKCk7XG4gICAgaGlkZUFsbENVSlN0YXJ0cygpO1xuICB9IGVsc2Uge1xuICAgIGRyYXdTZWN0aW9ucygpO1xuICB9XG5cbiAgLy8gU0VUIFVQIENVSiBPVkVSTEFZIExBWUVSXG4gIC8vIENVSiBPdmVybGF5IGlzIGltcG9ydGFudCAtIE5vdGljZSB0aGUgb3JkZXIgaW4gd2hpY2ggZWxlbWVudHMgYXJlIHJlbmRlcmVkLiBTb21lIENVSiBlbGVtZW50cyBzdWNoIGFzIHNlZ21lbnRzIG9mIHRoZSBzdWJ3YXkgdHJhY2sgb3ZlcmxhcCBwYWdlcyB0byBjcmVhdGUgdGhlIGlsbHVzaW9uIG9mIHBlcnBlY3RpdmUuXG4gIC8vIE90aGVyIENVSiBlbGVtZW50cyBhcHBlYXIgYmVuZWF0aCB0aGUgbWFwLiBUd28gc2VwYXJhdGUgY29udGFpbmVyIGxheWVycyB3ZXJlIGNyZWF0ZWQgdG8gcHJvdmlkZSB0aGlzICdpbGx1c2lvbicsIFRoZSBjdWpPdmVybGF5IGFwcGVhcnMgb24gdG9wIG9mIHRoZSBtYXAgaW4gdGhpcyBjYXNlLlxuICBzdGF0ZS5jdWpPdmVybGF5ID0gc3ZnQ29udGFpbmVyU2VsZWN0aW9uXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cignd2lkdGgnLCAxMDAwKVxuICAgIC5hdHRyKCdoZWlnaHQnLCAxMDAwKVxuICAgIC5zdHlsZSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKVxuICAgIC5zdHlsZSgnbGVmdCcsIDApXG4gICAgLnN0eWxlKCd0b3AnLCAwKTtcblxuICBpZiAoc3RhdGUuY3VqU2hlZXROYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgY3JlYXRlQ1VKQ2FyZCgpO1xuICAgIGNyZWF0ZUNVSkNvbm5lY3RvcnMoKTtcbiAgfVxuXG4gIGN1akNoZWNrKCk7XG5cbiAgLy8gRHJhdyBuZWNlc3NhcnkgZGlyZWN0IGNvbm5lY3Rpb25zXG4gIGRyYXdEaXJlY3RDb25uZWN0aW9ucygpO1xuXG4gIC8vIERyYXcgRGVmYXVsdCBIaWdobGlnaHRzIFdoZXJlIEFwcGxpY2FibGVcbiAgdXBkYXRlQWxsSGlnaGxpZ2h0ZWRDb25uZWN0aW9ucygpO1xuXG4gIC8vIFJFU0laRVMgQ09OVEFJTkVSIFNWRyAoc3ZnRG9jKTtcbiAgdXBkYXRlQ29udGFpbmVyRGltZW5zaW9ucygpO1xuICB1cGRhdGVNYXBEaW1lbnNpb25zKCk7XG4gIGluaXRpYWxpemVDb250YWluZXJTY3JvbGwoKTtcblxuICBjcmVhdGVab29tQnV0dG9ucygpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkRSQVdJTkcsIFVQREFUSU5HIEFORCBSRURSQVdJTkcgVEhFIE1BUFxuXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbi8vIEV2ZXJ5IHRpbWUgYSB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSB2aXMsIHdoZXRoZXIgaXQncyBlbmdhZ2luZyBjdWpNb2RlIG9yIHpvb21pbmcsXG4vLyBUaGUgdmlzdWFsaXphdGlvbiBuZWVkcyB0byBiZSB1cGRhdGVkIGFuZCByZWRyYXduLlxuLy8gRWxlbWVudHMgaW4gdGhlIG1hcCB3aWxsIGJlIHJlc2l6ZWQgYW5kIHJlcG9zaXRpb25lIGJhc2VkIG9uIHVwZGF0ZWQgbWVhc3VyZW1lbnRzIGZyb20gY2FsY3VsYXRlWm9vbSgpO1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZpcygpIHtcbiAgLy8gU3RhcnQgYnkgbWFraW5nIGNhbGwgdG8gdXBkYXRlIHBhZ2UgcG9zaXRpb25zLlxuXG4gIC8vIFNpbmNlIHRoaXMgaXNuJ3QgdGhlIGZpcnN0IHRpbWUgdGhlIGNvZGUgaXMgcnVubmluZywgdGhlIGZhbHNlIHBhcmFtZXRlciBpcyBwYXNzZWRcbiAgLy8gVGhlIGFzc2lnblBhZ2VQb3NpdGlvbnMoKSBmdW5jdGlvbiB3aWxsIG5vdCBtYWtlIGFueSBjYWxscyB0byBjcmVhdGUgbmV3IG1hcCBlbGVtZW50cyxcbiAgLy8gYnV0IHJlcG9zaXRpb24gZXhpc3Rpbmcgb25lcy5cbiAgLy8gUVVFU1RJT04gLSByZWFzb24gZmFsc2UgaXMgcGFzc2VkIGluIGV2ZW4gdGhvdWdoIG5vdCB1c2VkP1xuICAvLyBRVUVTVElPTiAtIGRpZCB5b3UgaGF2ZSBwcm9ibGVtcyB3aXRoIHRoaW5ncyBsb2FkaW5nIGF0IHRoZSB3cm9uZyB0aW1lcz9cblxuICBpZiAoc3RhdGUuZmxhdHRlbk1hcCkge1xuICAgIHN0YXRlLnZlcnRQYWRkaW5nID0gc3RhdGUucGFnZVdpZHRoICogNDtcbiAgICBzdGF0ZS5wb3NpdGlvbnMgPSBjYWxjdWxhdGVGbGF0UG9zaXRpb25zKCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUucG9zaXRpb25zID0gY2FsY3VsYXRlUG9zaXRpb25zKCk7XG4gIH1cbiAgYXNzaWduQ29ubmVjdG9yT3JpZ2lucyhmYWxzZSk7XG5cbiAgY29uc3Qgbm90ZWRQYWdlUG9zaXRpb25zU29ydGVkID0gZ2V0Tm90ZWRQYWdlUG9zaXRpb25zU29ydGVkKCk7XG5cbiAgLy8gU2luY2UgdGhlIGV4aXNpdG5nIGZ1bmN0aW9ucyByZXF1aXJlIGRhdGEgcGFyYW1ldGVycywgbG9jYWwgdmFycyB3ZXJlIHNldCB1cCBoZXJlXG4gIC8vIENPTlNJREVSIEZJWElORzogUGVyaGFwcyB3ZSBkb24ndCBuZWVkIHRoaXMgaW4gdGhlIGZ1dHVyZS5cbiAgZm9yIChsZXQgcGFnZUluZGV4ID0gMDsgcGFnZUluZGV4IDwgc3RhdGUucm93cy5sZW5ndGg7IHBhZ2VJbmRleCsrKSB7XG4gICAgY29uc3QgcGFnZURhdGEgPSBzdGF0ZS5yb3dzW3BhZ2VJbmRleF07XG5cbiAgICAvLyBLSUxMUyBBTklNQVRJT04gT0YgQ1VKIFNUQVRFUyBPTiBaT09NXG4gICAgLy8gSWYgdHJhbnNpdGlvbmluZyBpbiBhbmQgb3V0IG9mIGN1ak1vZGUsIHN0b3AgYW55IGV4aXN0aW5nIGFuaW1hdGlvblxuICAgIHN0YXRlLnBhZ2VzW3BhZ2VJbmRleF0uaG92ZXJFbGxpcHNlLmNsYXNzZWQoJ3RyYW5zJywgZmFsc2UpO1xuXG4gICAgZHJhd1BhZ2UocGFnZURhdGEsIHBhZ2VJbmRleCwgbm90ZWRQYWdlUG9zaXRpb25zU29ydGVkKTtcbiAgICBpZiAoc3RhdGUuZmxhdHRlbk1hcCkge1xuICAgICAgaGlkZUFsbENVSlN0YXJ0cygpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmluaXRGbGF0UnVuID0gZmFsc2U7XG5cbiAgaWYgKHN0YXRlLmZsYXR0ZW5NYXApIHtcbiAgICBkcmF3RmxhdEhvcml6Q29ubmVjdG9ycygpO1xuICAgIGRyYXdGbGF0VmVydENvbm5lY3RvcnMoKTtcbiAgICBkcmF3RmxhdFNlY3Rpb25zKCk7IC8vIFJlcG9zaXRpb24gYW5kIHJlc2l6ZSBzZWN0aW9uIGNhcnBldHMgZm9yIGZsYXR0ZW5lZCBtYXAuXG4gIH0gZWxzZSB7XG4gICAgZHJhd1NlY3Rpb25zKCk7IC8vIFJlcG9zaXRpb24gYW5kIHJlc2l6ZSBzZWN0aW9uICdjYXJwZXRzJy5cbiAgfVxuXG4gIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgbWFwIGlzIGluIGN1ak1vZGUuIElmIHNvLCBkZXRlcm1pbmUgd2hpY2ggQ1VKIGlzIGFjdGl2ZSwgYW5kIHdoaWNoIHN0ZXAgd2l0aGluIHRoYXQgQ1VKIGlzIGFjdGl2ZS5cbiAgY3VqQ2hlY2soKTtcblxuICAvLyBDaGVja3MgdG8gc2VlIGlmIHNlbGVjdGVkIGNvbm5lY3Rpb25zIGV4aXN0LCB0aGVuIHVwZGF0ZXMgdGhlbS5cbiAgaWYgKCFzdGF0ZS50cmFuc2l0aW9uaW5nVmlld3MpIHtcbiAgICB1cGRhdGVTZWxlY3Rpb25Db25uZWN0aW9ucygpO1xuICB9XG5cbiAgLy8gRHJhdyBuZWNlc3NhcnkgZGlyZWN0IGNvbm5lY3Rpb25zXG4gIGRyYXdEaXJlY3RDb25uZWN0aW9ucygpO1xuXG4gIC8vIERyYXcgRGVmYXVsdCBIaWdobGlnaHRzIFdoZXJlIEFwcGxpY2FibGVcbiAgdXBkYXRlQWxsSGlnaGxpZ2h0ZWRDb25uZWN0aW9ucygpO1xuXG4gIC8vIElmIHZpc3VhbGl6YXRpb24gaXMgdXBkYXRlZCBhbmQgY2FyZCBpcyBzZWxlY3RlZCwgbW92ZSBjYXJkIHdpdGggdXBkYXRlLlxuICBpZiAoc3RhdGUuc2VsZWN0ZWRQYWdlSW5kZXggPiAtMSkge1xuICAgIHN0YXRlLnBhZ2VzW3N0YXRlLnNlbGVjdGVkUGFnZUluZGV4XS5ob3ZlckVsbGlwc2VcbiAgICAgIC5jbGFzc2VkKCd0cmFucycsIHRydWUpXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgfVxuXG4gIC8vIE9uY2UgZXZlcnl0aGluZyBpcyByZWRyYXduLCBhbmQgd2Uga25vdyB0aGUgZXhhY3Qgc2NyZWVuIHJlYWwgZXN0YXRlIHJlcXVpcmVkIGZvciB0aGUgdXBkYXRlZCB2aXMsXG4gIC8vIG1ha2UgY2FsbCB0byByZXNpemUgdGhlIFNWRyBjb250YWluZXIuXG4gIHVwZGF0ZUNvbnRhaW5lckRpbWVuc2lvbnMoKTtcbiAgdXBkYXRlTWFwRGltZW5zaW9ucygpO1xuXG4gIC8vIGRyYXdBbGxNYXJrZXJzKCk7XG59XG4iLCJpbXBvcnQgeyBzdmdDb250YWluZXJTZWxlY3Rpb24gfSBmcm9tICcuL3NlbGVjdGlvbnMnO1xuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IHN0YXJ0Wm9vbVRyYW5zaXRpb24gfSBmcm9tICcuL3RyYW5zaXRpb25zL3pvb20uanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlWm9vbUJ1dHRvbnMoKSB7XG4gIGNvbnN0IHpvb21CdXR0b25zQ29udGFpbmVyID0gc3ZnQ29udGFpbmVyU2VsZWN0aW9uXG4gICAgLmFwcGVuZCgnZGl2JylcbiAgICAuYXR0cignaWQnLCAnem9vbUJ1dHRvbnNDb250YWluZXInKVxuICAgIC5hdHRyKFxuICAgICAgJ3N0eWxlJyxcbiAgICAgICdiYWNrZ3JvdW5kOiAjZmZmOyBib3R0b206IDI0OyBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7IHBvc2l0aW9uOiBmaXhlZDsgcmlnaHQ6IDI0OyB3aWR0aDogMzZweDsgei1pbmRleDogMTAwOydcbiAgICApO1xuXG4gIGNvbnN0IHpvb21JbkJ1dHRvbiA9IHpvb21CdXR0b25zQ29udGFpbmVyXG4gICAgLmFwcGVuZCgnZGl2JylcbiAgICAuYXR0cignaWQnLCAnem9vbUluQnV0dG9uJylcbiAgICAuYXR0cihcbiAgICAgICdzdHlsZScsXG4gICAgICAnYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgY3Vyc29yOiBwb2ludGVyOyBoZWlnaHQ6IDM2cHg7IHdpZHRoOiAzNnB4OydcbiAgICApO1xuICBjb25zdCB6b29tT3V0QnV0dG9uID0gem9vbUJ1dHRvbnNDb250YWluZXJcbiAgICAuYXBwZW5kKCdkaXYnKVxuICAgIC5hdHRyKCdpZCcsICd6b29tSW5CdXR0b24nKVxuICAgIC5hdHRyKFxuICAgICAgJ3N0eWxlJyxcbiAgICAgICdiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBjdXJzb3I6IHBvaW50ZXI7IGhlaWdodDogMzZweDsgd2lkdGg6IDM2cHg7J1xuICAgICk7XG5cbiAgY29uc3Qgem9vbUluQnV0dG9uU3ZnID0gem9vbUluQnV0dG9uXG4gICAgLmFwcGVuZCgnc3ZnJylcbiAgICAuYXR0cigndmlld0JveCcsICcwIDAgMjQgMjQnKTtcbiAgY29uc3Qgem9vbU91dEJ1dHRvblN2ZyA9IHpvb21PdXRCdXR0b25cbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpO1xuICB6b29tSW5CdXR0b25TdmdcbiAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAuYXR0cignZCcsICdNMTksMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNlYxM3onKVxuICAgIC5hdHRyKCdmaWxsJywgJyM3NTc1NzUnKTtcbiAgem9vbUluQnV0dG9uU3ZnXG4gICAgLmFwcGVuZCgncGF0aCcpXG4gICAgLmF0dHIoJ2QnLCAnTTAsMGgyNHYyNEgwVjB6JylcbiAgICAuYXR0cignZmlsbCcsICdub25lJyk7XG4gIHpvb21PdXRCdXR0b25TdmdcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdkJywgJ002LDEyaDEydjJINlYxMnonKVxuICAgIC5hdHRyKCdmaWxsJywgJyM3NTc1NzUnKTtcbiAgem9vbU91dEJ1dHRvblN2Z1xuICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgIC5hdHRyKCdkJywgJ00wLDBoMjR2MjRIMFYweicpXG4gICAgLmF0dHIoJ2ZpbGwnLCAnbm9uZScpO1xuXG4gIHpvb21JbkJ1dHRvblxuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHpvb21JbkJ1dHRvbi5zdHlsZSgnYmFja2dyb3VuZCcsICcjZTJlMmUyJyk7XG4gICAgICBzdGF0ZS5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfSlcbiAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgem9vbUluQnV0dG9uLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNmZmZmZmYnKTtcbiAgICB9KVxuICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc3RhdGUudGFyZ2V0Wm9vbUxldmVsIDwgMikge1xuICAgICAgICBzdGF0ZS50YXJnZXRab29tTGV2ZWwgKz0gMC4xO1xuICAgICAgICBzdGF0ZS5wcmVDdWpab29tTGV2ZWwgPSBzdGF0ZS50YXJnZXRab29tTGV2ZWw7XG4gICAgICB9XG4gICAgICBzdGF0ZS5pc0NVSlpvb21pbmcgPSBmYWxzZTtcbiAgICAgIHN0YXJ0Wm9vbVRyYW5zaXRpb24oKTtcbiAgICB9KTtcblxuICB6b29tT3V0QnV0dG9uXG4gICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICB6b29tT3V0QnV0dG9uLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNlMmUyZTInKTtcbiAgICAgIHN0YXRlLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9KVxuICAgIC5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB6b29tT3V0QnV0dG9uLnN0eWxlKCdiYWNrZ3JvdW5kJywgJyNmZmZmZmYnKTtcbiAgICB9KVxuICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTY29wZSAoTWluL01heCkgb2Ygem9vbSBpcyBzZXQgaGVyZS5cbiAgICAgIGlmIChzdGF0ZS50YXJnZXRab29tTGV2ZWwgPj0gMC40KSB7XG4gICAgICAgIHN0YXRlLnRhcmdldFpvb21MZXZlbCAtPSAwLjE7XG4gICAgICAgIHN0YXRlLnByZUN1alpvb21MZXZlbCA9IHN0YXRlLnRhcmdldFpvb21MZXZlbDtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmlzQ1VKWm9vbWluZyA9IGZhbHNlO1xuICAgICAgc3RhcnRab29tVHJhbnNpdGlvbigpO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
